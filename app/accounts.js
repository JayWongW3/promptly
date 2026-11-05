/*
  Promptly accounts: "Sign in with Google" using Firebase.

  - Signing in is optional. Without an account the app works exactly as before,
    with progress saved only on this device.
  - When signed in, progress (XP, streak, hearts, completed lessons) is saved to
    Firebase Firestore, so it follows the learner to any device.
  - Only progress is stored in the database. Name and email come from Google sign-in
    and are held by Firebase Authentication.
  - Accounts are off until the Firebase settings in config.js are filled in
    (see README → "Accounts").

  The rest of the app talks to this file only through the Accounts object.
*/
const Accounts = (() => {
  const cfg = ((window.PROMPTLY_CONFIG || {}).accounts || {}).firebase || {};
  const FIREBASE_VERSION = "10.12.2";
  const SAVE_DELAY_MS = 2500;

  let backend = null;      // set up by init()
  let user = null;         // { uid, name, email } when signed in
  let listeners = [];
  let saveTimer = null;
  let pending = null;
  let ready = false;
  let onSynced = () => {};

  const isConfigured = () =>
    !!window.PROMPTLY_TEST_AUTH || !!(cfg.apiKey && cfg.authDomain && cfg.projectId && cfg.appId);

  // ---------- Firebase backend ----------
  async function firebaseBackend() {
    const base = `https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}`;
    const [{ initializeApp }, authLib, dbLib] = await Promise.all([
      import(`${base}/firebase-app.js`),
      import(`${base}/firebase-auth.js`),
      import(`${base}/firebase-firestore.js`)
    ]);
    const app = initializeApp({
      apiKey: cfg.apiKey, authDomain: cfg.authDomain, projectId: cfg.projectId, appId: cfg.appId
    });
    const auth = authLib.getAuth(app);
    const db = dbLib.getFirestore(app);
    const provider = () => {
      const p = new authLib.GoogleAuthProvider();
      p.setCustomParameters({ prompt: "select_account" });
      return p;
    };
    const ref = uid => dbLib.doc(db, "users", uid);
    // Pick up the result if a redirect sign-in (fallback) just finished.
    authLib.getRedirectResult(auth).catch(() => {});

    return {
      onChange(cb) {
        authLib.onAuthStateChanged(auth, u => cb(u ? { uid: u.uid, name: u.displayName || "", email: u.email || "" } : null));
      },
      async signIn() {
        try {
          await authLib.signInWithPopup(auth, provider());
        } catch (e) {
          // If the browser blocks pop-ups, fall back to a full-page redirect.
          if (e && (e.code === "auth/popup-blocked" || e.code === "auth/operation-not-supported-in-this-environment")) {
            await authLib.signInWithRedirect(auth, provider());
            return;
          }
          throw e;
        }
      },
      signOut: () => authLib.signOut(auth),
      async load(uid) {
        const snap = await dbLib.getDoc(ref(uid));
        return snap.exists() ? (snap.data().progress || null) : null;
      },
      save: (uid, progress) =>
        dbLib.setDoc(ref(uid), { progress, updatedAt: dbLib.serverTimestamp() }, { merge: true }),
      async deleteAccount(uid) {
        await dbLib.deleteDoc(ref(uid));
        try {
          await authLib.deleteUser(auth.currentUser);
        } catch (e) {
          // Google requires a recent sign-in before deleting an account.
          if (e && e.code === "auth/requires-recent-login") {
            await authLib.reauthenticateWithPopup(auth.currentUser, provider());
            await authLib.deleteUser(auth.currentUser);
          } else throw e;
        }
      }
    };
  }

  // ---------- Combining progress from two devices ----------
  // Keeps the best of both: every completed lesson, the higher XP, the latest streak.
  function merge(local, cloud) {
    if (!cloud) return local;
    const out = Object.assign({}, local);
    // Completed lessons: everything completed on either device
    out.completed = {};
    for (const src of [cloud.completed || {}, local.completed || {}]) {
      for (const [course, lessons] of Object.entries(src)) {
        out.completed[course] = Object.assign({}, out.completed[course] || {}, lessons);
      }
    }
    // XP: the online total plus whatever this device earned since it last synced
    // (syncedXp), so XP from different devices adds up without being counted twice.
    const earnedHere = Math.max(0, (local.xp || 0) - (local.syncedXp || 0));
    out.xp = (cloud.xp || 0) + earnedHere;
    out.syncedXp = out.xp;
    // Streak: whichever device was used most recently; if the same day, the longer streak
    const la = local.lastActiveDate || "", ca = cloud.lastActiveDate || "";
    if (ca > la) { out.streak = cloud.streak || 0; out.lastActiveDate = ca; }
    else if (ca === la) out.streak = Math.max(local.streak || 0, cloud.streak || 0);
    // Today's XP
    if (cloud.todayDate === local.todayDate) out.todayXp = Math.max(local.todayXp || 0, cloud.todayXp || 0);
    // Hearts: same day → the lower count (so switching devices doesn't refill them)
    if (cloud.heartsDate === local.heartsDate && typeof cloud.hearts === "number") out.hearts = Math.min(local.hearts, cloud.hearts);
    if (!out.courseId && cloud.courseId) out.courseId = cloud.courseId;
    return out;
  }

  const PROGRESS_KEYS = ["xp", "hearts", "heartsDate", "streak", "lastActiveDate", "todayXp", "todayDate", "completed", "courseId"];
  const pick = s => Object.fromEntries(PROGRESS_KEYS.map(k => [k, s[k] === undefined ? null : s[k]]));

  function notify() { listeners.forEach(cb => { try { cb(user); } catch (e) { console.error(e); } }); }

  async function flush() {
    if (!user || !pending || !backend) return;
    const data = pending; pending = null;
    try { await backend.save(user.uid, data); onSynced(data.xp); }
    catch (e) { console.warn("Couldn't save progress online; will retry on the next change.", e); pending = pending || data; }
  }

  return {
    isConfigured,
    isReady: () => ready,
    user: () => user,

    /*
      Starts accounts. getLocal() returns the current progress; applyMerged(progress)
      replaces it after sign-in, once local and online progress are combined;
      synced(xp) is called after each successful online save.
    */
    async init({ getLocal, applyMerged, synced }) {
      if (!isConfigured()) return;
      if (synced) onSynced = synced;
      try {
        backend = window.PROMPTLY_TEST_AUTH || await firebaseBackend();
      } catch (e) {
        console.warn("Accounts unavailable (couldn't load Firebase).", e);
        return;
      }
      backend.onChange(async u => {
        user = u;
        if (u) {
          try {
            const cloud = await backend.load(u.uid);
            const merged = merge(getLocal(), cloud);
            applyMerged(merged);
            pending = pick(merged);
            await flush();
          } catch (e) {
            console.warn("Couldn't load online progress.", e);
          }
        }
        ready = true;
        notify();
      });
    },

    onChange(cb) { listeners.push(cb); },

    async signIn() { if (backend) await backend.signIn(); },
    async signOut() { await flush(); if (backend) await backend.signOut(); },
    async deleteAccount() {
      if (!backend || !user) return;
      clearTimeout(saveTimer); pending = null;
      await backend.deleteAccount(user.uid);
    },

    // Called whenever progress changes; saves online a moment later (batched).
    queueSave(progress) {
      if (!user) return;
      pending = pick(progress);
      clearTimeout(saveTimer);
      saveTimer = setTimeout(flush, SAVE_DELAY_MS);
    },
    // Save straight away (e.g. lesson finished, app being closed).
    saveNow(progress) {
      if (!user) return;
      pending = pick(progress);
      clearTimeout(saveTimer);
      return flush();
    },

    _merge: merge // exposed for testing
  };
})();
