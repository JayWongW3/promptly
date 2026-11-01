# Promptly – learn to use AI in bite-sized lessons

A gamified learning app (in the style of language-learning apps) that teaches everyday people how to use AI tools such as ChatGPT, Claude, Gemini and Copilot.

This is a **working prototype**. It runs entirely in a web browser. It has no server, no logins and no costs.

## What's included

Learners pick a course on the first screen and can switch at any time. Progress is kept separately for each course.

| Course | For | Lessons | Topics |
|---|---|---|---|
| 🌱 **AI Basics** | Individuals, beginner | 16 | What AI is, hallucinations, writing good prompts, everyday uses, staying safe, **which tool and model to use for which job** |
| 🚀 **AI Power User** | Individuals, advanced | 10 | Custom instructions and memory, projects, files and data analysis, images and voice, research with sources, thinking modes, self-critique, prompt chains, learning with AI, **model tiers and matching tools to tasks** |
| 💼 **AI for Business Owners** | Business owners | 14 | Business brief formula, prompt templates, **loops** (improvement loops, automation loops, AI agents), **building a second brain** (capture, organise, distil, use; connecting it to AI), AI in marketing, sales, customer service, operations and finance, AI policy and measuring return on investment, **choosing assistants and specialist tools for your team** |
| 👩‍💻 **AI for Developers** | Developers | 13 | Tokens and context windows, non-determinism, model APIs and system prompts, structured output, tool use, RAG, agent loops, coding assistants, evals, prompt injection, cost and latency, **model selection, routing, fallbacks and choosing coding tools** |

Each course ends with a **"choosing the right model and tool" unit**. Every answer explains **why** that tool or model fits, not just which one is right.

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

## Daily "Built with Claude" spotlight

The course picker and each course's home screen show a card like:

> ✨ **Built with Claude today**
> **Someone made an app that turns a sentence into an architecture diagram today!**
> owner/project · ⭐ 252
> A short plain-English explanation, plus a tip on what learners can take from it, a link to the project and a button to the course that teaches the skills behind it.

A "More projects people built with Claude" list sits under it, and finishing a lesson shows a short "someone built this today, keep going" message.

### How it works

1. Once a day, a GitHub Action (`.github/workflows/daily-spotlight.yml`) runs a small script (`scripts/daily-spotlight/index.mjs`).
2. The script searches public GitHub projects created in the last day that were built with Claude. It looks for topics like `claude-code`, or READMEs that mention Claude Code or "built with Claude". If there are none, it widens to 3, then 7 days.
3. It picks the project with the most stars, skipping awesome-lists, prompt collections and config files.
4. **If you add an Anthropic API key**, Claude reads the project's README and writes the headline, a 2-sentence explanation, a learning tip and which course fits. It also rejects anything offensive, malicious or unclear. **Without a key**, the card shows the project's own description, and only English-language descriptions are used.
5. The result is saved to `app/data/spotlight.js`, which the app loads.

If that file is more than 2 days old, the app asks GitHub directly for a fresh pick when someone opens it, so the card stays current even if the Action stops running. If GitHub can't be reached, the card is simply hidden.

### Turn on the daily update (one-time setup)

GitHub only runs scheduled Actions from the repository's main branch, so this starts working after the branch is merged into `main`.

1. Merge this branch into `main`.
2. On GitHub, open the repository → **Settings** → **Actions** → **General**. Under **Workflow permissions**, choose **Read and write permissions**, then click **Save**. This lets the Action save the daily file.
3. *(Optional, recommended)* Add your Anthropic API key so Claude writes the explanations:
   1. Get a key at <https://console.anthropic.com> → **API Keys** → **Create Key**. You need a small amount of credit on the account. One short request a day costs a few cents a month at most.
   2. In the repository, go to **Settings** → **Secrets and variables** → **Actions** → **New repository secret**.
   3. Name: `ANTHROPIC_API_KEY`. Value: paste the key. Click **Add secret**.
4. To test it straight away: open the **Actions** tab → **Daily Built-with-Claude spotlight** → **Run workflow**. After about a minute, `app/data/spotlight.js` will have a new commit.

It then runs every day at 06:17 UTC. To change the time, edit the `cron` line in `.github/workflows/daily-spotlight.yml`.

**A word of caution:** the projects come from strangers on the internet. With an API key, Claude screens out unsuitable ones. Without a key there is no content check, so the key is strongly recommended if the app is public.

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
| `app/app.js` | Game logic: course picker, scoring, hearts, streaks, saving progress, spotlight card |
| `app/data/spotlight.js` | Today's "Built with Claude" project (updated automatically; don't edit) |
| `scripts/daily-spotlight/` | The script that finds the daily project |
| `.github/workflows/daily-spotlight.yml` | Runs that script every day |

## Current limitations (what a full product would need next)

- **Progress is per device and browser.** If a learner switches phone or clears their browser data, their progress is lost. Fixing this needs user accounts and a database (for example Firebase or Supabase).
- **No real AI practice yet.** Learners don't type prompts into a live AI. Adding that needs an AI API key, such as Anthropic or OpenAI. This has a usage cost and needs a small server to keep the key secret.
- **No app-store app.** It works on phone browsers. To list it in the Apple or Google app stores, it would need to be wrapped as a mobile app (for example with Capacitor) and published through developer accounts (Apple: $99/year, Google: $25 one-off).
- **No reminders, leaderboards or payments.** These all need accounts and a server first.
