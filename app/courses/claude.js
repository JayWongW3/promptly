/*
  COURSE: Claude (by Anthropic) – beginner to advanced
  See courses/README-question-types.txt for how to write questions.
  Feature names and plans change often; review this course every few months.
*/

COURSES.push({
  id: "claude",
  group: "tool",
  levelJump: true, // learners can start at any level
  icon: "🟠",
  title: "Mastering Claude",
  audience: "Tool course · Claude by Anthropic",
  description: "From your first chat to Projects, Artifacts, Research, connectors, Claude Code and Cowork. Three levels: beginner, intermediate, advanced.",
  units: [
    {
      id: "c1",
      title: "Level 1 · Beginner",
      description: "Get set up and have great first conversations with Claude.",
      lessons: [
        {
          id: "c1l1",
          title: "Getting started with Claude",
          icon: "👋",
          steps: [
            {
              type: "info",
              title: "Where and how to use Claude",
              body: "Claude is an AI assistant made by <b>Anthropic</b>. You can use it at <b>claude.ai</b> in a browser, in the <b>desktop app</b> (Mac and Windows), and in the <b>iPhone and Android apps</b>. Your chats sync between them.<br><br>There's a <b>free plan</b> with usage limits, and paid plans (Pro, Max, Team, Enterprise) with higher limits and more features.<br><br>Claude comes in model sizes you can pick from the model menu: <b>Haiku</b> (fastest), <b>Sonnet</b> (balanced, good for most tasks) and <b>Opus</b> (most capable, for hard problems).<br><br><i>Feature names and plans change often. If something in the app looks different, the idea is usually the same.</i>"
            },
            {
              type: "mc",
              question: "You have a tricky multi-step problem, like planning a business restructure. Which Claude model family is the best fit?",
              options: ["Opus", "Haiku", "Whichever loads first", "None; Claude can't plan"],
              answer: 0,
              explain: "Why: Opus is Claude's most capable family and does best on complex reasoning. Haiku is built for speed on simpler tasks."
            },
            {
              type: "mc",
              question: "You've finished asking about holiday plans and now want help with a work email. What should you do?",
              options: [
                "Start a new chat",
                "Keep going in the holiday chat",
                "Log out and back in",
                "Switch to the most expensive plan"
              ],
              answer: 0,
              explain: "Why: a fresh chat keeps Claude focused on the new task. Unrelated history can confuse it and uses up more of your usage limit."
            },
            {
              type: "tf",
              question: "You can upload a PDF or a photo and ask Claude questions about it.",
              answer: true,
              explain: "Why: Claude reads documents and images. Use the paperclip or + button in the message box, or drag the file in."
            }
          ]
        },
        {
          id: "c1l2",
          title: "Talking to Claude well",
          icon: "💬",
          steps: [
            {
              type: "info",
              title: "Clear context gets clear answers",
              body: "Claude works best when you explain the <b>situation</b>, the <b>goal</b> and what a good answer looks like, as you would to a smart colleague.<br><br>Useful habits:<br>• Ask Claude to <b>ask you questions</b> first if you're not sure what to include<br>• <b>Edit your message</b> (pencil icon) to try a different version instead of starting over<br>• Use <b>Styles</b> to change how Claude writes (for example more concise, more explanatory, or matching your own writing)",
              example: "I run a small café. I want to post on Instagram about our new oat-milk menu. Ask me 3 questions first, then write 3 caption options under 30 words each."
            },
            {
              type: "better",
              question: "Which prompt will get a better result from Claude?",
              options: [
                "Write a bio.",
                "Write a 60-word LinkedIn bio for me. I'm a recruiter specialising in Web3 companies, 8 years' experience, friendly but professional tone."
              ],
              answer: 1,
              explain: "Why: length, platform, background and tone give Claude what it needs to get it right first time."
            },
            {
              type: "mc",
              question: "Claude's answer missed the point because your question was unclear. What's the fastest fix?",
              options: [
                "Edit your original message to be clearer and resend it",
                "Start a brand-new account",
                "Type the same message again",
                "Give up on that task"
              ],
              answer: 0,
              explain: "Why: editing creates a new version of the conversation from that point, without the confusing answer in the way."
            },
            {
              type: "mc",
              question: "You always want shorter, more direct answers. Which feature helps?",
              options: ["Choosing a concise Style", "Uploading a photo", "Switching to a dark theme", "Deleting old chats"],
              answer: 0,
              explain: "Why: Styles change how Claude writes across your chats, so you don't have to say \"be concise\" every time."
            }
          ]
        }
      ]
    },
    {
      id: "c2",
      title: "Level 2 · Intermediate",
      description: "Projects, memory, Artifacts and files.",
      lessons: [
        {
          id: "c2l1",
          title: "Projects & memory",
          icon: "🗂️",
          steps: [
            {
              type: "info",
              title: "Give Claude lasting context",
              body: "<b>Projects</b> are workspaces for one area of work. Each project has its own <b>instructions</b> and <b>knowledge files</b> (documents Claude can refer to), and every chat inside it uses them.<br><br><b>Memory</b> lets Claude remember useful things about you and your work across chats, such as preferences and ongoing projects. You can view, edit or switch it off in <b>Settings</b>, and you can ask Claude to remember or forget something.<br><br>For a one-off private question, use an <b>incognito chat</b>, which isn't saved to your history or memory."
            },
            {
              type: "mc",
              question: "You write a weekly client newsletter and keep pasting the same brand guide. What's the best set-up?",
              options: [
                "A Project with the brand guide uploaded and instructions on tone",
                "Paste the guide into every new chat forever",
                "Memorise the brand guide yourself",
                "Use a different AI each week"
              ],
              answer: 0,
              explain: "Why: upload once to a Project, and every chat in it automatically follows the guide."
            },
            {
              type: "tf",
              question: "You can see and edit what Claude remembers about you.",
              answer: true,
              explain: "Why: memory is managed in Settings, and you can also tell Claude in a chat to remember or forget something."
            },
            {
              type: "mc",
              question: "You want to ask a sensitive one-off question that you don't want saved to memory. What should you use?",
              options: ["An incognito chat", "A Project", "A public share link", "A connector"],
              answer: 0,
              explain: "Why: incognito chats aren't saved to your chat history and don't feed into memory."
            }
          ]
        },
        {
          id: "c2l2",
          title: "Artifacts & files",
          icon: "🧩",
          steps: [
            {
              type: "info",
              title: "Claude can make things, not just text",
              body: "<b>Artifacts</b> are things Claude creates in a panel beside the chat: documents, code, diagrams, and even small <b>interactive apps</b> such as calculators, quizzes or dashboards. You can keep refining them in the chat, then copy, download, share or publish them.<br><br>Claude can also <b>create files</b> such as Word documents, spreadsheets, slides and PDFs. It can <b>analyse spreadsheets</b> by running code, so its calculations are exact rather than estimated.",
              example: "Build me a simple interactive calculator for my cleaning business: enter number of rooms and hours, show the quote including VAT."
            },
            {
              type: "mc",
              question: "You want a simple quote calculator you can share with your team, without coding. What should you ask Claude for?",
              options: [
                "An interactive Artifact",
                "A one-line text answer",
                "A Style",
                "An incognito chat"
              ],
              answer: 0,
              explain: "Why: Artifacts can be working mini-apps you test straight away and share by link."
            },
            {
              type: "mc",
              question: "You upload a sales spreadsheet and need exact monthly totals. Why is Claude reliable here?",
              options: [
                "It can run code to do the calculations",
                "It guesses very well",
                "It has memorised your business",
                "It isn't; never use AI with numbers"
              ],
              answer: 0,
              explain: "Why: running code means the computer does the maths exactly. Still spot-check a couple of figures against the original."
            },
            {
              type: "tf",
              question: "Claude can create a PowerPoint or Word file you can download.",
              answer: true,
              explain: "Why: Claude can create common office files directly, which saves copying text into templates by hand."
            }
          ]
        }
      ]
    },
    {
      id: "c3",
      title: "Level 3 · Advanced",
      description: "Research, connectors, thinking, Claude Code and Cowork.",
      lessons: [
        {
          id: "c3l1",
          title: "Research, connectors & thinking",
          icon: "🔎",
          steps: [
            {
              type: "info",
              title: "Connect Claude to the web and your tools",
              body: "<b>Web search</b> lets Claude look up current information and cite sources.<br><b>Research</b> mode works for several minutes: it searches many sources (and connected apps) and returns a cited report.<br><b>Connectors</b> link Claude to tools like Google Drive, Gmail, Google Calendar, Slack and Notion, so it can find and use your information. You choose which to connect, and can disconnect any time.<br><b>Extended thinking</b> gives Claude time to reason before answering, which helps with complex problems."
            },
            {
              type: "mc",
              question: "You need a well-sourced report comparing 5 CRM systems for a 10-person firm. Which feature?",
              options: ["Research mode", "A quick reply with no web access", "Styles", "Incognito chat"],
              answer: 0,
              explain: "Why: Research searches many sources over several minutes and cites them. Open the important links to check."
            },
            {
              type: "mc",
              question: "You want Claude to prepare you for tomorrow's meetings using your calendar and recent emails. What's needed?",
              options: [
                "Connect Google Calendar and Gmail (or your equivalents)",
                "Nothing; Claude already sees your inbox",
                "Copy every email in by hand",
                "Switch to Haiku"
              ],
              answer: 0,
              explain: "Why: Claude can only see your tools after you connect them. Connect only what the task needs."
            },
            {
              type: "tf",
              question: "Turning on extended thinking helps most with complex reasoning, not with quick simple questions.",
              answer: true,
              explain: "Why: thinking takes extra time. It pays off on hard problems and is wasted on \"what's the capital of France?\"."
            }
          ]
        },
        {
          id: "c3l2",
          title: "Claude Code, Cowork & Skills",
          icon: "🤖",
          steps: [
            {
              type: "info",
              title: "Claude as an agent that does the work",
              body: "<b>Claude Code</b> is Anthropic's coding agent. It reads a software project, edits files, runs commands and tests, and can open pull requests. It works in the terminal, code editors, the desktop app and on the web.<br><br><b>Cowork</b> (in the desktop app) brings that agent approach to everyday work: give it a task and access to a folder or apps, and it works through the steps, such as organising files, compiling a report from documents, or preparing a spreadsheet.<br><br><b>Skills</b> are reusable packages of instructions and files that teach Claude how to do a specific task your way, such as your report format.<br><br>Agents can make mistakes, so give them <b>only the access they need</b> and <b>review their work</b>."
            },
            {
              type: "mc",
              question: "You want Claude to fix a bug in your company's website code and run the tests. Which tool fits?",
              options: ["Claude Code", "A Style", "An incognito chat", "Voice dictation"],
              answer: 0,
              explain: "Why: Claude Code can read the codebase, change files and run the tests to check its fix."
            },
            {
              type: "mc",
              question: "Your team writes the same weekly report in a fixed format. How can you make Claude follow it every time?",
              options: [
                "Package the format and instructions as a Skill (or Project instructions)",
                "Describe the format from memory each week",
                "Hope it remembers",
                "Use a different AI each time"
              ],
              answer: 0,
              explain: "Why: Skills and Project instructions capture \"how we do this\" once, so results are consistent across people and weeks."
            },
            {
              type: "tf",
              question: "When an agent like Cowork works on your files, it's wise to point it at a specific folder and check its output.",
              answer: true,
              explain: "Why: limiting access reduces the damage from a mistake, and reviewing catches errors before they matter."
            }
          ]
        }
      ]
    }
  ]
});
