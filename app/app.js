/*
  Promptly – app logic.
  Progress is saved in the learner's browser (localStorage). No server or login needed.
*/

const SETTINGS = {
  maxHearts: 5,
  dailyGoalXp: 20,
  xpPerLesson: 10,
  perfectBonusXp: 5,
  practiceXp: 5,
  storageKey: "promptly-progress-v1"
};

const PRAISE = ["Nice!", "Great job!", "Correct!", "You got it!", "Spot on!"];

// ---------- Helpers ----------
const $app = document.getElementById("app");

function todayStr(offsetDays = 0) {
  const d = new Date(Date.now() + offsetDays * 86400000);
  return d.toLocaleDateString("en-CA"); // YYYY-MM-DD in local time
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k === "text") node.textContent = v;
    else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  }
  for (const c of [].concat(children)) if (c) node.appendChild(c);
  return node;
}

// ---------- Saved progress ----------
function loadState() {
  let s;
  try { s = JSON.parse(localStorage.getItem(SETTINGS.storageKey)); } catch (e) { s = null; }
  s = Object.assign({
    xp: 0, hearts: SETTINGS.maxHearts, heartsDate: todayStr(),
    streak: 0, lastActiveDate: null, todayXp: 0, todayDate: todayStr(),
    completed: {}, courseId: null
  }, s || {});
  // Older saves stored completed lessons without a course; move them to the beginner course.
  if (Object.values(s.completed).some(v => v === true)) s.completed = { beginner: s.completed };
  return normaliseDay(s);
}

// New day: refill hearts, reset daily XP, and break the streak if a day was missed.
function normaliseDay(s) {
  if (s.heartsDate !== todayStr()) { s.hearts = SETTINGS.maxHearts; s.heartsDate = todayStr(); }
  if (s.todayDate !== todayStr()) { s.todayXp = 0; s.todayDate = todayStr(); }
  if (s.lastActiveDate && s.lastActiveDate !== todayStr() && s.lastActiveDate !== todayStr(-1)) s.streak = 0;
  return s;
}

let state = loadState();

function saveState() {
  try { localStorage.setItem(SETTINGS.storageKey, JSON.stringify(state)); } catch (e) { /* storage blocked */ }
  Accounts.queueSave(state);
  document.getElementById("stat-streak").textContent = state.streak;
  document.getElementById("stat-xp").textContent = state.xp;
  document.getElementById("stat-hearts").textContent = state.hearts;
}

function addXp(amount) {
  state.xp += amount;
  state.todayXp += amount;
  if (state.lastActiveDate !== todayStr()) {
    state.streak = state.lastActiveDate === todayStr(-1) ? state.streak + 1 : 1;
    state.lastActiveDate = todayStr();
  }
}

// ---------- Course structure ----------
function currentCourse() { return COURSES.find(c => c.id === state.courseId) || null; }
function lessonsOf(course) { return course.units.flatMap(u => u.lessons); }
function doneMap(courseId) { return state.completed[courseId] || (state.completed[courseId] = {}); }

function isUnlocked(course, lessonId) {
  // Courses with levelJump let learners start at the first lesson of any level.
  if (course.levelJump && course.units.some(u => u.lessons[0].id === lessonId)) return true;
  const all = lessonsOf(course);
  const i = all.findIndex(l => l.id === lessonId);
  return i === 0 || !!doneMap(course.id)[all[i - 1].id];
}

// ---------- Daily "Built with Claude" spotlight ----------
// Data normally comes from data/spotlight.js (written daily by a GitHub Action).
// If that file is missing or more than 2 days old, the app asks GitHub directly
// (no AI explanation in that case, just the project's own description).
const SPOTLIGHT_CACHE_KEY = "promptly-spotlight-live";
let spotlight = window.DAILY_SPOTLIGHT || null;

function spotlightIsStale(s) {
  return !s || !s.today || s.today.date < todayStr(-2);
}

async function refreshSpotlightFromGitHub() {
  try {
    const cached = JSON.parse(localStorage.getItem(SPOTLIGHT_CACHE_KEY) || "null");
    if (cached && cached.today && cached.today.date === todayStr()) { spotlight = cached; return true; }
  } catch (e) { /* ignore broken cache */ }
  try {
    const since = todayStr(-2);
    const q = encodeURIComponent(`topic:claude-code created:>=${since} fork:false`);
    const res = await fetch(`https://api.github.com/search/repositories?q=${q}&sort=stars&order=desc&per_page=20`);
    if (!res.ok) return false;
    const items = ((await res.json()).items || []).filter(r =>
      r.description && r.description.length >= 15 &&
      (r.description.match(/[A-Za-z]/g) || []).length / r.description.replace(/\s/g, "").length > 0.6);
    if (!items.length) return false;
    const r = items[0];
    spotlight = {
      today: {
        date: todayStr(), full_name: r.full_name, name: r.name, url: r.html_url,
        stars: r.stargazers_count, language: r.language || "",
        headline: "Someone made a project with Claude today!",
        summary: r.description, takeaway: "", course: "", ai_written: false
      },
      others: items.slice(1, 5).map(o => ({ full_name: o.full_name, url: o.html_url, stars: o.stargazers_count, description: o.description }))
    };
    localStorage.setItem(SPOTLIGHT_CACHE_KEY, JSON.stringify(spotlight));
    return true;
  } catch (e) {
    return false;
  }
}

function safeGitHubUrl(u) {
  return typeof u === "string" && u.startsWith("https://github.com/") ? u : null;
}

// A slim, one-line strip. Tapping it opens the full spotlight in a panel,
// so the learning path stays the main focus of the screen.
function renderSpotlightCard() {
  const box = el("div", { class: "spot-strip-wrap", id: "spotlight" });
  if (!spotlight || !spotlight.today) return box; // empty; filled in later if a live fetch succeeds
  const t = spotlight.today;
  const isToday = t.date >= todayStr(-1);
  box.appendChild(el("button", {
    class: "spot-strip",
    "aria-label": "See today's project built with Claude",
    onclick: () => openSpotlightSheet()
  }, [
    el("span", { class: "spot-strip-icon", text: "✨" }),
    el("span", { class: "spot-strip-text" }, [
      el("span", { class: "spot-strip-label", text: isToday ? "Built with Claude today" : "Built with Claude recently" }),
      el("span", { class: "spot-strip-name", text: t.name || t.full_name })
    ]),
    el("span", { class: "spot-strip-go", text: "›" })
  ]));
  return box;
}

const clip = (str, n) => (str && str.length > n ? str.slice(0, n - 1).trimEnd() + "…" : str || "");

function closeSpotlightSheet() {
  document.getElementById("spot-sheet")?.remove();
  document.body.classList.remove("sheet-open");
}

function openSpotlightSheet() {
  if (!spotlight || !spotlight.today) return;
  closeSpotlightSheet();
  const t = spotlight.today;
  const isToday = t.date >= todayStr(-1);
  Analytics.track("Spotlight Opened", { repo: t.full_name });

  const panel = el("div", { class: "sheet", role: "dialog", "aria-modal": "true", "aria-label": "Built with Claude" });
  panel.appendChild(el("div", { class: "sheet-head" }, [
    el("div", { class: "spot-label", text: isToday ? "✨ Built with Claude today" : `✨ Built with Claude recently (${t.date})` }),
    el("button", { class: "close-btn", text: "✕", "aria-label": "Close", onclick: closeSpotlightSheet })
  ]));

  // Project name + small fact chips
  panel.appendChild(el("div", { class: "sheet-title", text: t.name || t.full_name }));
  const chips = el("div", { class: "chips" });
  if (t.stars != null) chips.appendChild(el("span", { class: "chip-fact", text: `⭐ ${t.stars} stars` }));
  if (t.language) chips.appendChild(el("span", { class: "chip-fact", text: `💻 ${t.language}` }));
  if (t.owner) chips.appendChild(el("span", { class: "chip-fact", text: `👤 ${t.owner}` }));
  panel.appendChild(chips);

  // Small, separate boxes instead of one block of text
  const boxes = [
    ["🛠️", "What they built", t.headline && t.ai_written ? t.headline.replace(/^Someone made /i, "").replace(/ today!?$/i, "").replace(/^./, c => c.toUpperCase()) : ""],
    ["⚙️", "How it works", t.summary],
    ["💡", "What you can learn", t.takeaway]
  ].filter(b => b[2]);
  for (const [icon, title, text] of boxes) {
    panel.appendChild(el("div", { class: "info-box" }, [
      el("div", { class: "info-box-title", text: `${icon} ${title}` }),
      el("div", { class: "info-box-text", text: clip(text, 220) })
    ]));
  }

  const actions = el("div", { class: "spot-actions" });
  const url = safeGitHubUrl(t.url);
  if (url) actions.appendChild(el("a", {
    class: "btn small", href: url, target: "_blank", rel: "noopener noreferrer", text: "See it on GitHub",
    onclick: () => Analytics.track("Spotlight Click", { repo: t.full_name, target: "github" })
  }));
  const course = COURSES.find(c => c.id === t.course);
  if (course && course.id !== state.courseId) {
    actions.appendChild(el("button", {
      class: "btn secondary small", text: `Learn the skills: ${course.title}`,
      onclick: () => {
        Analytics.track("Spotlight Click", { repo: t.full_name, target: "course", course: course.id });
        closeSpotlightSheet();
        if (run) return;
        state.courseId = course.id; saveState(); renderHome(); window.scrollTo(0, 0);
      }
    }));
  }
  panel.appendChild(actions);

  // More projects: one small card each
  const others = (spotlight.others || []).filter(o => safeGitHubUrl(o.url)).slice(0, 4);
  if (others.length) {
    panel.appendChild(el("div", { class: "sheet-sub", text: "More people built with Claude" }));
    for (const o of others) {
      panel.appendChild(el("a", {
        class: "mini-card", href: o.url, target: "_blank", rel: "noopener noreferrer",
        onclick: () => Analytics.track("Spotlight Click", { repo: o.full_name, target: "more" })
      }, [
        el("div", { class: "mini-card-top" }, [
          el("span", { class: "mini-card-name", text: o.full_name.split("/")[1] || o.full_name }),
          el("span", { class: "mini-card-stars", text: `⭐ ${o.stars}` })
        ]),
        el("div", { class: "mini-card-text", text: clip(o.description, 90) })
      ]));
    }
  }
  if (!t.ai_written) panel.appendChild(el("div", { class: "spot-note", text: "Description written by the project's creator." }));

  const overlay = el("div", { class: "sheet-overlay", id: "spot-sheet", onclick: e => { if (e.target === overlay) closeSpotlightSheet(); } }, panel);
  document.body.appendChild(overlay);
  document.body.classList.add("sheet-open");
  panel.querySelector(".close-btn").focus();
}

document.addEventListener("keydown", e => { if (e.key === "Escape") closeSpotlightSheet(); });

function mountSpotlight() {
  $app.insertBefore(renderSpotlightCard(), $app.querySelector(".spot-anchor"));
  if (spotlightIsStale(spotlight)) {
    refreshSpotlightFromGitHub().then(ok => {
      const old = document.getElementById("spotlight");
      if (ok && old) old.replaceWith(renderSpotlightCard());
    });
  }
}

// ---------- Course picker ----------
function renderCoursePicker() {
  onAccountScreen = false;
  document.getElementById("topbar").style.display = "";
  $app.innerHTML = "";
  $app.appendChild(el("h1", { class: "picker-title", text: "Choose your course" }));
  $app.appendChild(el("p", { class: "picker-sub", text: "Pick the one that fits you best. You can switch at any time and your progress in each course is kept." }));
  $app.appendChild(el("div", { class: "spot-anchor" }));
  mountSpotlight();
  const groups = [
    { id: "audience", title: "Courses by who you are", sub: "Broad AI skills, whichever tool you use." },
    { id: "tool", title: "Master a specific AI tool", sub: "Beginner, intermediate and advanced levels for each tool." }
  ];
  for (const g of groups) {
    const inGroup = COURSES.filter(c => (c.group || "audience") === g.id);
    if (!inGroup.length) continue;
    $app.appendChild(el("h2", { class: "group-title", text: g.title }));
    $app.appendChild(el("p", { class: "group-sub", text: g.sub }));
    for (const course of inGroup) $app.appendChild(courseCard(course));
    if (g.id === "tool") {
      $app.appendChild(el("p", { class: "tool-note", text: "Promptly is independent and not affiliated with Anthropic, OpenAI or xAI. AI tools change often, so if an app looks different from a lesson, the idea is usually the same." }));
    }
  }
  $app.appendChild(footerActions(false));
  saveState();
}

function courseCard(course) {
    const all = lessonsOf(course);
    const done = all.filter(l => doneMap(course.id)[l.id]).length;
    const pct = Math.round((done / all.length) * 100);
    return el("button", {
      class: "course-card" + (course.id === state.courseId ? " current" : ""),
      onclick: () => {
        Analytics.track("Course Selected", { course: course.id, switched: state.courseId && state.courseId !== course.id ? "yes" : "no" });
        state.courseId = course.id; saveState(); renderHome(); window.scrollTo(0, 0);
      }
    }, [
      el("div", { class: "course-icon", text: course.icon }),
      el("div", { class: "course-info" }, [
        el("div", { class: "course-audience", text: course.audience }),
        el("div", { class: "course-title", text: course.title }),
        el("div", { class: "course-desc", text: course.description }),
        el("div", { class: "course-progress" }, [
          el("div", { class: "goal-bar" }, el("div", { class: "goal-fill", style: `width:${pct}%` })),
          el("span", { text: `${done} / ${all.length} lessons` })
        ])
      ])
    ]);
}

// ---------- Home screen ----------
// The main call to action on a course's home screen: the next lesson to do,
// with today's goal underneath.
function upNextCard(course) {
  const all = lessonsOf(course);
  const done = doneMap(course.id);
  const next = all.find(l => !done[l.id] && isUnlocked(course, l.id));
  const unit = next && course.units.find(u => u.lessons.includes(next));
  const pct = Math.min(100, Math.round((state.todayXp / SETTINGS.dailyGoalXp) * 100));
  const goal = el("div", { class: "up-goal" }, [
    el("div", { class: "up-goal-text", text: `Daily goal: ${state.todayXp} / ${SETTINGS.dailyGoalXp} XP${pct >= 100 ? " ✅" : ""}` }),
    el("div", { class: "goal-bar" }, el("div", { class: "goal-fill", style: `width:${pct}%` }))
  ]);
  if (!next) {
    return el("div", { class: "up-next" }, [
      el("div", { class: "up-label", text: "Course complete 🎉" }),
      el("div", { class: "up-title", text: "You've finished every lesson" }),
      el("div", { class: "up-meta", text: "Replay any lesson below to practise and earn hearts, or try another course." }),
      el("button", { class: "btn", text: "CHOOSE ANOTHER COURSE", onclick: renderCoursePicker }),
      goal
    ]);
  }
  const questions = next.steps.filter(x => x.type !== "info").length;
  const minutes = Math.max(1, Math.round(next.steps.length * 0.4));
  return el("div", { class: "up-next" }, [
    el("div", { class: "up-label", text: `Up next · ${unit ? unit.title : ""}` }),
    el("div", { class: "up-title", text: `${next.icon} ${next.title}` }),
    el("div", { class: "up-meta", text: `${questions} questions · about ${minutes} min · ${all.filter(l => done[l.id]).length}/${all.length} lessons done` }),
    el("button", { class: "btn", text: "START LESSON", onclick: () => onLessonClick(next, false, true) }),
    goal
  ]);
}

function renderHome() {
  onAccountScreen = false;
  const course = currentCourse();
  if (!course) return renderCoursePicker();
  document.getElementById("topbar").style.display = "";
  $app.innerHTML = "";
  $app.appendChild(el("div", { class: "course-banner" }, [
    el("div", {}, [
      el("div", { class: "course-audience", text: course.audience }),
      el("div", { class: "course-title", text: `${course.icon} ${course.title}` })
    ]),
    el("button", { class: "btn secondary small", text: "Change course", onclick: renderCoursePicker })
  ]));
  $app.appendChild(upNextCard(course));
  $app.appendChild(el("div", { class: "spot-anchor" }));
  mountSpotlight();

  for (const unit of course.units) {
    const path = el("div", { class: "path" });
    for (const lesson of unit.lessons) {
      const done = !!doneMap(course.id)[lesson.id];
      const unlocked = isUnlocked(course, lesson.id);
      const cls = done ? "node done" : unlocked ? "node" : "node locked";
      path.appendChild(el("div", { class: "node-wrap" }, [
        el("button", {
          class: cls,
          title: lesson.title,
          "aria-label": lesson.title + (done ? " (completed)" : unlocked ? "" : " (locked)"),
          text: unlocked ? (done ? "✓" : lesson.icon) : "🔒",
          onclick: () => onLessonClick(lesson, done, unlocked)
        }),
        el("div", { class: "node-label", text: lesson.title })
      ]));
    }
    $app.appendChild(el("section", { class: "unit" }, [
      el("div", { class: "unit-header" }, [el("h2", { text: unit.title }), el("p", { text: unit.description })]),
      path
    ]));
  }

  $app.appendChild(footerActions(true));
  saveState();
}

function footerActions(withReset) {
  const box = el("div", { class: "footer-actions" });
  const feedbackUrl = (window.PROMPTLY_CONFIG || {}).feedbackUrl;
  if (feedbackUrl) {
    box.appendChild(el("a", {
      class: "btn secondary small feedback-btn", href: feedbackUrl, target: "_blank", rel: "noopener noreferrer",
      text: "💬 Send feedback", onclick: () => Analytics.track("Feedback Clicked", { course: state.courseId || "none" })
    }));
  }
  if (withReset) {
    box.appendChild(el("div", {}, el("button", {
      class: "link-btn", text: "Reset all progress",
      onclick: () => {
        if (confirm("This deletes all XP, streaks and completed lessons on this device. Continue?")) {
          localStorage.removeItem(SETTINGS.storageKey);
          state = loadState(); saveState(); renderCoursePicker();
        }
      }
    })));
  }
  return box;
}

function onLessonClick(lesson, done, unlocked) {
  if (!unlocked) { alert("Finish the previous lesson to unlock this one."); return; }
  if (done) { startLesson(lesson, true); return; } // replaying = practice mode
  if (state.hearts <= 0) {
    alert("You're out of hearts ❤️\n\nPractise a lesson you've already completed to earn a heart back, or come back tomorrow for a full refill.");
    return;
  }
  startLesson(lesson, false);
}

// ---------- Accounts (Sign in with Google) ----------
let onAccountScreen = false;

function accountButton() {
  const b = el("button", { class: "account-btn", id: "account-btn", onclick: renderAccount });
  const u = Accounts.user();
  b.textContent = u ? (u.name || u.email || "?").trim().charAt(0).toUpperCase() : "👤";
  b.classList.toggle("signed-in", !!u);
  b.title = u ? "Your account" : "Sign in";
  b.setAttribute("aria-label", b.title);
  return b;
}

function refreshAccountButton() {
  const old = document.getElementById("account-btn");
  if (old) old.replaceWith(accountButton());
  else document.getElementById("courses-btn").after(accountButton());
}

function googleButton(label) {
  return el("button", {
    class: "btn google-btn", text: label || "Sign in with Google",
    onclick: async e => {
      const btn = e.currentTarget;
      btn.disabled = true; btn.textContent = "Opening Google…";
      try { await Accounts.signIn(); }
      catch (err) {
        btn.disabled = false; btn.textContent = label || "Sign in with Google";
        if (!(err && err.code === "auth/popup-closed-by-user")) {
          alert("Sign-in didn't work. Please try again.\n\nIf you're using the app from your home screen, try signing in once in Safari or Chrome instead.");
        }
      }
    }
  });
}

function signInNudge() {
  if (!Accounts.isAvailable() || Accounts.user()) return null;
  return el("div", { class: "signin-nudge" }, [
    el("div", { text: "💾 Keep your streak and progress on every device." }),
    googleButton("Save progress with Google")
  ]);
}

function renderAccount() {
  if (run) return;
  onAccountScreen = true;
  document.getElementById("topbar").style.display = "";
  $app.innerHTML = "";
  const u = Accounts.user();
  const box = el("div", { class: "card account-card" });
  if (!u) {
    box.appendChild(el("h1", { class: "picker-title", text: "Your account" }));
    box.appendChild(el("p", { text: "Sign in to save your XP, streak and completed lessons online, so they follow you to any phone or computer." }));
    box.appendChild(googleButton());
    box.appendChild(el("p", { class: "privacy-note", text: "We store only your learning progress. Google shares your name and email with us to sign you in; we don't send you emails or share your details. You can delete your account at any time." }));
  } else {
    box.appendChild(el("h1", { class: "picker-title", text: `Hi${u.name ? ", " + u.name.split(" ")[0] : ""}! 👋` }));
    box.appendChild(el("p", { class: "account-email", text: u.email }));
    box.appendChild(el("p", { text: "✅ Your progress is saved to your account and syncs across your devices." }));
    const totalDone = Object.values(state.completed).reduce((a, c) => a + Object.keys(c).length, 0);
    box.appendChild(el("div", { class: "result-stats" }, [
      el("div", { class: "result-box", html: `<b>⭐ ${state.xp}</b><span>XP</span>` }),
      el("div", { class: "result-box", html: `<b>🔥 ${state.streak}</b><span>Day streak</span>` }),
      el("div", { class: "result-box", html: `<b>📚 ${totalDone}</b><span>Lessons done</span>` })
    ]));
    box.appendChild(el("button", {
      class: "btn secondary", text: "Sign out",
      onclick: async () => {
        const wipe = confirm("Signed out. Also remove your progress from this device?\n\nOK = remove it (good for shared devices)\nCancel = keep it here");
        await Accounts.signOut();
        Analytics.track("Signed Out", {});
        if (wipe) { try { localStorage.removeItem(SETTINGS.storageKey); } catch (e) {} state = loadState(); saveState(); }
        renderAccount();
      }
    }));
    box.appendChild(el("button", {
      class: "link-btn danger", text: "Delete my account",
      onclick: async () => {
        if (!confirm("Delete your account and the progress saved online? This can't be undone. Progress on this device stays unless you reset it.")) return;
        try {
          await Accounts.deleteAccount();
          Analytics.track("Account Deleted", {});
          alert("Your account and online progress have been deleted.");
        } catch (e) {
          alert("Couldn't delete the account. Please sign in again and retry.");
        }
        renderAccount();
      }
    }));
  }
  $app.appendChild(box);
  $app.appendChild(el("div", { class: "footer-actions" }, el("button", { class: "link-btn", text: "← Back to lessons", onclick: () => { onAccountScreen = false; renderHome(); } })));
}

// ---------- Sound on/off button ----------
function soundToggle() {
  const b = el("button", { class: "sound-btn" });
  const paint = () => {
    b.textContent = Sounds.isEnabled() ? "🔊" : "🔇";
    b.setAttribute("aria-label", Sounds.isEnabled() ? "Turn sound off" : "Turn sound on");
    b.title = b.getAttribute("aria-label");
  };
  b.onclick = () => {
    Sounds.setEnabled(!Sounds.isEnabled());
    document.querySelectorAll(".sound-btn").forEach(x => x.dispatchEvent(new Event("repaint")));
    Analytics.track("Sound Toggled", { sound: Sounds.isEnabled() ? "on" : "off" });
  };
  b.addEventListener("repaint", paint);
  paint();
  return b;
}

// ---------- Lesson player ----------
let run = null;

function startLesson(lesson, practice) {
  run = {
    lesson, practice, courseId: state.courseId,
    queue: lesson.steps.slice(),
    total: lesson.steps.length,
    doneCount: 0,
    mistakes: 0,
    combo: 0 // correct answers in a row, for the rising "streak" sound
  };
  document.getElementById("install-banner")?.remove();
  Analytics.track("Lesson Started", { course: run.courseId, lesson: lesson.id, mode: practice ? "practice" : "new" });
  document.getElementById("topbar").style.display = "none";
  nextStep();
}

function nextStep() {
  if (run.queue.length === 0) return finishLesson();
  renderStep(run.queue[0]);
}

function renderStep(step) {
  $app.innerHTML = "";
  const pct = Math.round((run.doneCount / run.total) * 100);
  $app.appendChild(el("div", { class: "lesson-top" }, [
    el("button", { class: "close-btn", text: "✕", "aria-label": "Quit lesson", onclick: quitLesson }),
    el("div", { class: "progress" }, el("div", { class: "progress-fill", style: `width:${pct}%` })),
    soundToggle(),
    el("span", { id: "lesson-hearts", text: run.practice ? "🏋️ Practice" : `❤️ ${state.hearts}` })
  ]));

  const card = el("div", { class: "card" });
  $app.appendChild(card);
  const bar = el("div", { class: "bottom-bar" });
  const inner = el("div", { class: "bottom-inner" });
  bar.appendChild(inner);
  $app.appendChild(bar);

  const btn = el("button", { class: "btn", text: "CHECK" });
  btn.disabled = true;

  if (step.type === "info") {
    card.appendChild(el("div", { class: "q-type", text: "New concept" }));
    card.appendChild(el("h2", { class: "q-text", text: step.title }));
    card.appendChild(el("div", { class: "info-body", html: step.body }));
    if (step.example) card.appendChild(el("div", { class: step.code ? "example code" : "example", text: step.example }));
    btn.textContent = "CONTINUE";
    btn.disabled = false;
    btn.onclick = () => { run.queue.shift(); run.doneCount++; nextStep(); };
    inner.appendChild(btn);
    return;
  }

  const labels = { mc: "Choose the answer", better: "Which prompt is better?", tf: "True or false?", order: "Put in order" };
  card.appendChild(el("div", { class: "q-type", text: labels[step.type] || "Question" }));
  card.appendChild(el("h2", { class: "q-text", text: step.question }));

  let getAnswerCorrect; // function returning true/false once user has answered

  if (step.type === "mc" || step.type === "better" || step.type === "tf") {
    const opts = step.type === "tf"
      ? [{ text: "True", correct: step.answer === true }, { text: "False", correct: step.answer === false }]
      : shuffle(step.options.map((t, i) => ({ text: t, correct: i === step.answer })));
    const box = el("div", { class: "options" });
    let selected = null;
    const buttons = opts.map(o => {
      const b = el("button", { class: "option", text: o.text });
      b.onclick = () => {
        buttons.forEach(x => x.classList.remove("selected"));
        b.classList.add("selected");
        selected = o; btn.disabled = false;
        Sounds.tap();
      };
      box.appendChild(b);
      return b;
    });
    card.appendChild(box);
    getAnswerCorrect = () => {
      buttons.forEach((b, i) => {
        b.disabled = true;
        if (opts[i].correct) b.classList.add("correct");
        else if (opts[i] === selected) b.classList.add("wrong");
      });
      return selected.correct;
    };
  } else if (step.type === "order") {
    let bankOrder = shuffle(step.pieces.map((p, i) => i));
    if (bankOrder.every((v, i) => v === i) && bankOrder.length > 1) bankOrder.reverse();
    const chosen = [];
    const line = el("div", { class: "answer-line" });
    const bank = el("div", { class: "bank" });
    const bankChips = {};
    const redrawLine = () => {
      line.innerHTML = "";
      chosen.forEach((idx, pos) => {
        line.appendChild(el("button", {
          class: "chip", text: step.pieces[idx],
          onclick: () => { chosen.splice(pos, 1); bankChips[idx].classList.remove("used"); redrawLine(); }
        }));
      });
      btn.disabled = chosen.length !== step.pieces.length;
    };
    bankOrder.forEach(idx => {
      const c = el("button", { class: "chip", text: step.pieces[idx] });
      c.onclick = () => {
        if (c.classList.contains("used")) return;
        c.classList.add("used"); chosen.push(idx); redrawLine();
        Sounds.tap();
      };
      bankChips[idx] = c;
      bank.appendChild(c);
    });
    card.appendChild(line);
    card.appendChild(bank);
    getAnswerCorrect = () => {
      line.querySelectorAll("button").forEach(b => (b.disabled = true));
      bank.querySelectorAll("button").forEach(b => (b.disabled = true));
      return chosen.every((v, i) => v === i);
    };
  }

  btn.onclick = () => {
    const correct = getAnswerCorrect();
    bar.classList.add(correct ? "good" : "bad");
    if (correct) {
      run.combo++;
      Sounds.correct(run.combo);
      card.classList.add("pop");
    } else {
      run.combo = 0;
      Sounds.wrong();
      card.classList.add("shake");
    }
    inner.innerHTML = "";
    let detail = step.explain || "";
    if (!correct && step.type === "order") detail = "Correct order: " + step.pieces.join(" → ") + ". " + detail;
    const praise = PRAISE[Math.floor(Math.random() * PRAISE.length)];
    inner.appendChild(el("div", { class: "feedback-title" }, [
      el("span", { text: correct ? praise : "Not quite" }),
      correct && run.combo >= 3 ? el("span", { class: "combo", text: `🔥 ${run.combo} in a row!` }) : null
    ]));
    if (detail) inner.appendChild(el("div", { class: "feedback-text", text: detail }));
    const cont = el("button", { class: "btn", text: "CONTINUE" });
    inner.appendChild(cont);

    run.queue.shift();
    if (correct) {
      run.doneCount++;
    } else {
      run.mistakes++;
      run.queue.push(step); // ask it again at the end of the lesson
      Analytics.track("Wrong Answer", {
        course: run.courseId, lesson: run.lesson.id,
        question: `${run.lesson.id}-q${run.lesson.steps.indexOf(step) + 1}`,
        text: step.question
      });
      if (!run.practice) {
        state.hearts = Math.max(0, state.hearts - 1); saveState();
        document.getElementById("lesson-hearts").textContent = `❤️ ${state.hearts}`;
      }
    }
    cont.onclick = () => {
      if (!run.practice && state.hearts <= 0) return outOfHearts();
      nextStep();
    };
    cont.focus();
  };
  inner.appendChild(btn);
}

function quitLesson() {
  if (confirm("Quit this lesson? Your progress in this lesson will be lost.")) {
    Analytics.track("Lesson Quit", {
      course: run.courseId, lesson: run.lesson.id,
      progress: `${run.doneCount} of ${run.total}`, percent: Math.round((run.doneCount / run.total) * 100)
    });
    run = null; renderHome();
  }
}

function outOfHearts() {
  Analytics.track("Out Of Hearts", { course: run.courseId, lesson: run.lesson.id });
  $app.innerHTML = "";
  $app.appendChild(el("div", { class: "result" }, [
    el("div", { class: "big", text: "💔" }),
    el("h1", { text: "Out of hearts" }),
    el("p", { text: "Practise a lesson you've already finished to earn a heart, or come back tomorrow for a full refill." }),
    el("button", { class: "btn", text: "BACK TO LESSONS", onclick: () => { run = null; renderHome(); } })
  ]));
}

function finishLesson() {
  const { lesson, practice, mistakes } = run;
  let earned;
  if (practice) {
    earned = SETTINGS.practiceXp;
    state.hearts = Math.min(SETTINGS.maxHearts, state.hearts + 1);
  } else {
    earned = SETTINGS.xpPerLesson + (mistakes === 0 ? SETTINGS.perfectBonusXp : 0);
    doneMap(run.courseId)[lesson.id] = true;
  }
  addXp(earned);
  Sounds.complete(mistakes === 0);
  Accounts.saveNow(state);
  saveState();

  const questions = lesson.steps.filter(s => s.type !== "info").length;
  const accuracy = questions ? Math.round((questions / (questions + mistakes)) * 100) : 100;
  const course = COURSES.find(c => c.id === run.courseId);
  const courseDone = course && lessonsOf(course).every(l => doneMap(course.id)[l.id]);
  Analytics.track("Lesson Completed", {
    course: run.courseId, lesson: lesson.id, mode: practice ? "practice" : "new",
    accuracy, mistakes, streak: state.streak
  });
  if (courseDone && !practice && lessonsOf(course).slice(-1)[0].id === lesson.id) {
    Analytics.track("Course Completed", { course: course.id });
  }

  $app.innerHTML = "";
  $app.appendChild(el("div", { class: "result" }, [
    el("div", { class: "big", text: mistakes === 0 ? "🏆" : "🎉" }),
    el("h1", { text: practice ? "Practice complete!" : "Lesson complete!" }),
    el("p", { text: lesson.title }),
    el("div", { class: "result-stats" }, [
      el("div", { class: "result-box", html: `<b>+${earned}</b><span>XP earned</span>` }),
      el("div", { class: "result-box", html: `<b>${accuracy}%</b><span>Accuracy</span>` }),
      el("div", { class: "result-box", html: `<b>🔥 ${state.streak}</b><span>Day streak</span>` })
    ]),
    practice ? el("p", { text: "You earned back a heart ❤️" }) : null,
    signInNudge(),
    spotlight && spotlight.today ? el("p", { class: "spot-nudge", text: `🚀 Someone built ${spotlight.today.name || "a project"} with Claude today. Keep learning and you could be next.` }) : null,
    el("button", { class: "btn", text: "CONTINUE", onclick: () => { run = null; renderHome(); } })
  ]));
}

// Enter key presses the main button
document.addEventListener("keydown", e => {
  if (e.key !== "Enter") return;
  const b = document.querySelector(".bottom-bar .btn, .result .btn");
  if (b && !b.disabled && document.activeElement !== b) { e.preventDefault(); b.click(); }
});

// ---------- Install on phone / computer (Progressive Web App) ----------
let deferredInstallPrompt = null;
const INSTALL_DISMISSED_KEY = "promptly-install-dismissed";
const isStandalone = () =>
  window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
const isIos = () => /iphone|ipad|ipod/i.test(navigator.userAgent);

window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault(); // show our own button instead of the browser's mini-bar
  deferredInstallPrompt = e;
  showInstallBanner();
});
window.addEventListener("appinstalled", () => {
  Analytics.track("App Installed", {});
  document.getElementById("install-banner")?.remove();
});

function showInstallBanner() {
  if (run || isStandalone() || localStorage.getItem(INSTALL_DISMISSED_KEY)) return;
  if (!deferredInstallPrompt && !isIos()) return;
  if (!location.protocol.startsWith("http")) return;
  document.getElementById("install-banner")?.remove();
  const banner = el("div", { class: "install-banner", id: "install-banner" }, [
    el("div", { class: "install-text" }, [
      el("b", { text: "📲 Add Promptly to your home screen" }),
      el("div", { text: deferredInstallPrompt
        ? "Opens like an app and works offline."
        : "On iPhone or iPad: tap the Share button ⬆️ in Safari, then \"Add to Home Screen\"." })
    ]),
    deferredInstallPrompt ? el("button", {
      class: "btn small", text: "Install",
      onclick: async () => {
        deferredInstallPrompt.prompt();
        const choice = await deferredInstallPrompt.userChoice;
        Analytics.track("Install Prompt", { outcome: choice.outcome });
        deferredInstallPrompt = null;
        banner.remove();
      }
    }) : null,
    el("button", {
      class: "close-btn", text: "✕", "aria-label": "Dismiss",
      onclick: () => { localStorage.setItem(INSTALL_DISMISSED_KEY, "1"); banner.remove(); }
    })
  ]);
  document.body.appendChild(banner);
}

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}

// ---------- Start ----------
(function trackAppOpened() {
  const last = state.lastActiveDate;
  const daysSince = last ? Math.round((new Date(todayStr()) - new Date(last)) / 86400000) : null;
  Analytics.track("App Opened", {
    visitor: last ? "returning" : "new",
    days_since_last_lesson: daysSince === null ? "never" : daysSince,
    streak: state.streak,
    installed: isStandalone() ? "yes" : "no"
  });
})();

document.getElementById("courses-btn").addEventListener("click", renderCoursePicker);
document.querySelector(".stats").prepend(soundToggle());

// Accounts: only shown once Firebase is set up in config.js
// (The account button appears once Firebase has loaded and reported who's signed in.)
if (Accounts.isConfigured()) {
  Accounts.onChange(u => {
    refreshAccountButton();
    if (u) Analytics.track("Signed In", {});
    // On the lesson-complete screen, swap the sign-in prompt for a confirmation
    const nudge = document.querySelector(".signin-nudge");
    if (nudge && u) nudge.replaceWith(el("div", { class: "signin-nudge done", text: "✅ Signed in. Your progress is saved to your account." }));
    if (run) return;                 // don't interrupt a lesson
    if (onAccountScreen) renderAccount();
    else if (state.courseId) renderHome(); else renderCoursePicker();
  });
  Accounts.init({
    getLocal: () => state,
    applyMerged: merged => { state = normaliseDay(Object.assign({}, state, merged)); saveState(); },
    // Remember how much XP is already online, so it's never counted twice
    synced: xp => { state.syncedXp = xp; try { localStorage.setItem(SETTINGS.storageKey, JSON.stringify(state)); } catch (e) {} }
  });
  // Save straight away if the app is closed or put in the background
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") Accounts.saveNow(state); });
}

renderHome();
setTimeout(showInstallBanner, 1500);
