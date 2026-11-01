/*
  Promptly sound effects.
  All sounds are generated in the browser with the Web Audio API, so there are
  no audio files to download or license. Phones that support it also get a short buzz.

  Learners can switch sounds off with the 🔊 button; the choice is remembered.

  Silent mode: iPhones normally mute website sound effects when the phone is on silent.
  To make the sounds play anyway, the app asks iOS to treat it as a media player
  (navigator.audioSession, iOS 17+; on older iPhones by briefly playing a moment of
  silence through an <audio> element). Side effect: music or podcasts playing in
  another app may pause when a lesson makes a sound. Muting with 🔊 hands audio
  control back to the phone.
*/
const Sounds = (() => {
  const KEY = "promptly-sound";
  let enabled = true;
  try { enabled = localStorage.getItem(KEY) !== "off"; } catch (e) { /* storage blocked */ }

  let ctx = null;
  let master = null;
  let silentUnlocked = false;

  // Ask iOS to play our sounds even when the phone is on silent.
  function playThroughSilentMode(on) {
    try {
      if (navigator.audioSession) {
        navigator.audioSession.type = on ? "playback" : "auto";
        return;
      }
    } catch (e) { /* not supported */ }
    // Older iPhones: playing an <audio> element switches the page to "media"
    // audio, which isn't muted by the silent switch. One short silent clip is enough.
    if (!on || silentUnlocked) return;
    silentUnlocked = true;
    try {
      const el = document.createElement("audio");
      el.setAttribute("x-webkit-airplay", "deny");
      el.preload = "auto";
      el.src = silentWavUrl();
      const p = el.play();
      if (p && p.catch) p.catch(() => { silentUnlocked = false; });
    } catch (e) { silentUnlocked = false; }
  }

  // A 0.1-second silent WAV, built in memory (no file needed).
  function silentWavUrl() {
    const rate = 8000, n = 800;
    const buf = new ArrayBuffer(44 + n), v = new DataView(buf);
    const w = (o, str) => { for (let i = 0; i < str.length; i++) v.setUint8(o + i, str.charCodeAt(i)); };
    w(0, "RIFF"); v.setUint32(4, 36 + n, true); w(8, "WAVE"); w(12, "fmt ");
    v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
    v.setUint32(24, rate, true); v.setUint32(28, rate, true); v.setUint16(32, 1, true); v.setUint16(34, 8, true);
    w(36, "data"); v.setUint32(40, n, true);
    for (let i = 0; i < n; i++) v.setUint8(44 + i, 128); // 8-bit silence
    return URL.createObjectURL(new Blob([buf], { type: "audio/wav" }));
  }

  // Browsers only allow sound after the user has tapped something, so the audio
  // engine is created on first use (always inside a tap).
  function audio() {
    playThroughSilentMode(true);
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      const comp = ctx.createDynamicsCompressor();
      master = ctx.createGain();
      master.gain.value = 0.9;
      master.connect(comp).connect(ctx.destination);
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  // One note with a quick attack and a smooth fade-out.
  function note(freq, start, dur, opts = {}) {
    const c = audio();
    if (!c) return;
    const { type = "sine", vol = 0.2, attack = 0.006, glideTo = null } = opts;
    const t = c.currentTime + start;
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (glideTo) osc.frequency.exponentialRampToValueAtTime(glideTo, t + dur);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(vol, t + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(gain).connect(master);
    osc.start(t);
    osc.stop(t + dur + 0.05);
  }

  // A bell-like note: a pure tone plus a quieter shimmer an octave up.
  function bell(freq, start, dur, vol = 0.2) {
    note(freq, start, dur, { type: "sine", vol });
    note(freq * 2, start, dur * 0.6, { type: "triangle", vol: vol * 0.25 });
  }

  const semis = n => Math.pow(2, n / 12);

  function buzz(pattern) {
    if (enabled && navigator.vibrate) { try { navigator.vibrate(pattern); } catch (e) { /* unsupported */ } }
  }

  return {
    isEnabled: () => enabled,

    setEnabled(on) {
      enabled = on;
      try { localStorage.setItem(KEY, on ? "on" : "off"); } catch (e) { /* storage blocked */ }
      if (!on) playThroughSilentMode(false); // give audio control back to the phone
      if (on) this.tap();
    },

    // Tiny click when choosing an answer.
    tap() {
      if (!enabled) return;
      note(1500, 0, 0.06, { type: "triangle", vol: 0.12, attack: 0.002 });
    },

    // Correct answer. "combo" = correct answers in a row; each one raises the pitch
    // a little (up to 8 semitones) so a streak feels like it's building.
    correct(combo = 1) {
      if (!enabled) return;
      const lift = semis(Math.min(combo - 1, 8));
      const root = 880 * lift; // A5
      bell(root, 0, 0.18, 0.18);
      bell(root * semis(4), 0.08, 0.22, 0.18);          // major third
      bell(root * semis(7), 0.16, 0.35, 0.2);           // fifth
      if (combo >= 3) bell(root * 2, 0.26, 0.45, 0.14); // octave sparkle for streaks
      buzz(18);
    },

    // Wrong answer: soft and low, not punishing.
    wrong() {
      if (!enabled) return;
      note(311, 0, 0.16, { type: "triangle", vol: 0.16, glideTo: 262 });
      note(233, 0.12, 0.28, { type: "triangle", vol: 0.14, glideTo: 185 });
      buzz([35, 45, 35]);
    },

    // Lesson complete fanfare; a perfect lesson gets an extra sparkle run.
    complete(perfect = false) {
      if (!enabled) return;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6
      notes.forEach((f, i) => bell(f, i * 0.09, 0.3, 0.17));
      // Final chord
      [1046.5, 1318.5, 1568].forEach(f => bell(f, 0.4, 0.9, 0.11));
      if (perfect) {
        [2093, 2637, 3136, 4186].forEach((f, i) => note(f, 0.75 + i * 0.06, 0.25, { type: "sine", vol: 0.07 }));
      }
      buzz([20, 40, 20, 40, 70]);
    }
  };
})();
