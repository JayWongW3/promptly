# Promptly – learn to use AI in bite-sized lessons

A gamified learning app (in the style of language-learning apps) that teaches everyday people how to use AI tools such as ChatGPT, Claude, Gemini and Copilot.

This is a **working prototype**. It runs entirely in a web browser. It has no server, no logins and no costs.

## What's included

Learners pick a course on the first screen and can switch at any time. Progress is kept separately for each course.

| Course | For | Lessons | Topics |
|---|---|---|---|
| 🌱 **AI Basics** | Individuals, beginner | 14 | What AI is, hallucinations, writing good prompts, everyday uses, staying safe |
| 🚀 **AI Power User** | Individuals, advanced | 8 | Custom instructions and memory, projects, files and data analysis, images and voice, research with sources, thinking modes, self-critique, prompt chains, learning with AI |
| 💼 **AI for Business Owners** | Business owners | 12 | Business brief formula, prompt templates, **loops** (improvement loops, automation loops, AI agents), **building a second brain** (capture, organise, distil, use; connecting it to AI), AI in marketing, sales, customer service, operations and finance, AI policy and measuring return on investment |
| 👩‍💻 **AI for Developers** | Developers | 11 | Tokens and context windows, non-determinism, model APIs and system prompts, structured output, tool use, RAG, agent loops, coding assistants, evals, prompt injection, cost and latency |

**Question types:** teaching cards, multiple choice, "which prompt is better?", true/false, and put-in-order. Developer lessons also show code examples.

**Game features:**
- XP: 10 per lesson, plus 5 bonus for no mistakes
- Daily goal of 20 XP
- Day streak
- 5 hearts: you lose one per wrong answer, and they refill each day
- Lessons unlock in order
- Replaying a finished lesson is "practice" and earns a heart back
- Wrong answers come back at the end of the lesson

XP, streak and hearts are shared across all courses. Progress saves automatically in the learner's browser.

## How to open it on your computer

1. On the GitHub page for this repository, click the green **Code** button, then **Download ZIP**.
2. Find the ZIP file in your Downloads folder and double-click it to unzip it.
3. Open the unzipped folder, then open the **`app`** folder inside it.
4. Double-click **`index.html`**. It opens in your web browser.
5. Choose a course, then tap the first lesson circle to start.

## How to put it online for free (so others can use it)

The simplest option is **GitHub Pages**:

1. Merge this branch into `main`. (If you're not sure how, ask Claude to open a pull request, then click **Merge** on GitHub.)
2. On GitHub, open the repository and click **Settings** in the top menu.
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose `main` and folder `/ (root)`, then click **Save**.
6. Wait 1–2 minutes and refresh the page. GitHub shows a link like `https://<your-username>.github.io/test/`.
7. Add `app/` to the end of that link, for example `https://<your-username>.github.io/test/app/`. That's your live app.

Note: GitHub Pages on a **private** repository needs a paid GitHub plan. On a free plan, the repository has to be public.

## How to edit or add lessons

Each course is its own file in the **`app/courses/`** folder:

- `beginner.js`: AI Basics
- `advanced.js`: AI Power User
- `business.js`: AI for Business Owners
- `developer.js`: AI for Developers

You don't need to touch any other file.

1. Open the course file in any text editor. On GitHub, you can click the file, then the pencil ✏️ icon.
2. `app/courses/README-question-types.txt` explains each question type, the course layout, and how to add a whole new course.
3. To add a question, copy an existing one (from `{` to `},`), paste it below, and change the text.
4. For multiple choice, `answer: 0` means the **first** option is correct, `answer: 1` the second, and so on. The app shuffles the options for the learner.
5. Save the file, or click **Commit changes** on GitHub, then refresh the app.

Tip: if the app shows a blank page after an edit, a comma or quote mark is usually missing. Undo your last change and try again.

## Files

| File | What it does |
|---|---|
| `app/index.html` | The page itself, and the list of course files to load |
| `app/styles.css` | Colours and layout |
| `app/courses/*.js` | **Course content: one file per course (edit these)** |
| `app/courses/README-question-types.txt` | Guide to writing questions and adding courses |
| `app/app.js` | Game logic: course picker, scoring, hearts, streaks, saving progress |

## Current limitations (what a full product would need next)

- **Progress is per device and browser.** If a learner switches phone or clears their browser data, their progress is lost. Fixing this needs user accounts and a database (for example Firebase or Supabase).
- **No real AI practice yet.** Learners don't type prompts into a live AI. Adding that needs an AI API key, such as Anthropic or OpenAI. This has a usage cost and needs a small server to keep the key secret.
- **No app-store app.** It works on phone browsers. To list it in the Apple or Google app stores, it would need to be wrapped as a mobile app (for example with Capacitor) and published through developer accounts (Apple: $99/year, Google: $25 one-off).
- **No reminders, leaderboards or payments.** These all need accounts and a server first.
