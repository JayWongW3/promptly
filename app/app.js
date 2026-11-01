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
    completed: {}
  }, s || {});
  // New day: refill hearts, reset daily XP, and break the streak if a day was missed.
  if (s.heartsDate !== todayStr()) { s.hearts = SETTINGS.maxHearts; s.heartsDate = todayStr(); }
  if (s.todayDate !== todayStr()) { s.todayXp = 0; s.todayDate = todayStr(); }
  if (s.lastActiveDate && s.lastActiveDate !== todayStr() && s.lastActiveDate !== todayStr(-1)) s.streak = 0;
  return s;
}

let state = loadState();

function saveState() {
  localStorage.setItem(SETTINGS.storageKey, JSON.stringify(state));
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
const ALL_LESSONS = COURSE.flatMap(u => u.lessons);

function isUnlocked(lessonId) {
  const i = ALL_LESSONS.findIndex(l => l.id === lessonId);
  return i === 0 || !!state.completed[ALL_LESSONS[i - 1].id];
}

// ---------- Home screen ----------
function renderHome() {
  document.getElementById("topbar").style.display = "";
  $app.innerHTML = "";
  const pct = Math.min(100, Math.round((state.todayXp / SETTINGS.dailyGoalXp) * 100));
  $app.appendChild(el("div", { class: "goal" }, [
    el("div", { html: `<b>Daily goal</b>: ${state.todayXp} / ${SETTINGS.dailyGoalXp} XP ${pct >= 100 ? "✅" : ""}` }),
    el("div", { class: "goal-bar" }, el("div", { class: "goal-fill", style: `width:${pct}%` }))
  ]));

  for (const unit of COURSE) {
    const path = el("div", { class: "path" });
    for (const lesson of unit.lessons) {
      const done = !!state.completed[lesson.id];
      const unlocked = isUnlocked(lesson.id);
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

  $app.appendChild(el("div", { class: "footer-actions" }, el("button", {
    class: "link-btn", text: "Reset all progress",
    onclick: () => {
      if (confirm("This deletes all XP, streaks and completed lessons on this device. Continue?")) {
        localStorage.removeItem(SETTINGS.storageKey);
        state = loadState(); saveState(); renderHome();
      }
    }
  })));
  saveState();
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

// ---------- Lesson player ----------
let run = null;

function startLesson(lesson, practice) {
  run = {
    lesson, practice,
    queue: lesson.steps.slice(),
    total: lesson.steps.length,
    doneCount: 0,
    mistakes: 0
  };
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
    if (step.example) card.appendChild(el("div", { class: "example", text: step.example }));
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
    inner.innerHTML = "";
    let detail = step.explain || "";
    if (!correct && step.type === "order") detail = "Correct order: " + step.pieces.join(" → ") + ". " + detail;
    inner.appendChild(el("div", { class: "feedback-title", text: correct ? PRAISE[Math.floor(Math.random() * PRAISE.length)] : "Not quite" }));
    if (detail) inner.appendChild(el("div", { class: "feedback-text", text: detail }));
    const cont = el("button", { class: "btn", text: "CONTINUE" });
    inner.appendChild(cont);

    run.queue.shift();
    if (correct) {
      run.doneCount++;
    } else {
      run.mistakes++;
      run.queue.push(step); // ask it again at the end of the lesson
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
  if (confirm("Quit this lesson? Your progress in this lesson will be lost.")) { run = null; renderHome(); }
}

function outOfHearts() {
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
    state.completed[lesson.id] = true;
  }
  addXp(earned);
  saveState();

  const questions = lesson.steps.filter(s => s.type !== "info").length;
  const accuracy = questions ? Math.round((questions / (questions + mistakes)) * 100) : 100;

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
    el("button", { class: "btn", text: "CONTINUE", onclick: () => { run = null; renderHome(); } })
  ]));
}

// Enter key presses the main button
document.addEventListener("keydown", e => {
  if (e.key !== "Enter") return;
  const b = document.querySelector(".bottom-bar .btn, .result .btn");
  if (b && !b.disabled && document.activeElement !== b) { e.preventDefault(); b.click(); }
});

renderHome();
