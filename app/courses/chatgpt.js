/*
  COURSE: ChatGPT (by OpenAI) – beginner to advanced
  See courses/README-question-types.txt for how to write questions.
  Feature names and plans change often; review this course every few months.
*/

COURSES.push({
  id: "chatgpt",
  group: "tool",
  levelJump: true, // learners can start at any level
  icon: "🟢",
  title: "Mastering ChatGPT",
  audience: "Tool course · ChatGPT by OpenAI",
  description: "From your first chat to memory, Projects, Canvas, custom GPTs, deep research and agent mode. Three levels: beginner, intermediate, advanced.",
  units: [
    {
      id: "g1",
      title: "Level 1 · Beginner",
      description: "Get set up and use ChatGPT for everyday tasks.",
      lessons: [
        {
          id: "g1l1",
          title: "Getting started with ChatGPT",
          icon: "👋",
          steps: [
            {
              type: "info",
              title: "Where and how to use ChatGPT",
              body: "ChatGPT is made by <b>OpenAI</b>. Use it at <b>chatgpt.com</b>, in the <b>desktop app</b>, or in the <b>iPhone and Android apps</b>.<br><br>There's a <b>free plan</b> with limits, and paid plans (such as Plus, Pro, Business and Enterprise) with higher limits and more features.<br><br>The model menu usually offers a <b>fast</b> option for everyday questions and a <b>Thinking</b> option that reasons longer for harder problems. The exact model names change regularly.<br><br>A <b>temporary chat</b> isn't saved to your history and doesn't use or update memory.<br><br><i>If something in the app looks different, the idea is usually the same.</i>"
            },
            {
              type: "mc",
              question: "You need help working through a complicated tax-deductible expenses question. Which option should you choose?",
              options: ["A Thinking model", "The fastest model", "Image generation", "Voice mode"],
              answer: 0,
              explain: "Why: Thinking models take longer but work through multi-step problems more carefully. Still check tax answers with an accountant."
            },
            {
              type: "mc",
              question: "You want to ask something private that shouldn't be saved to your history or memory. What should you use?",
              options: ["A temporary chat", "A Project", "A custom GPT", "A shared link"],
              answer: 0,
              explain: "Why: temporary chats aren't kept in your history and don't feed into memory."
            },
            {
              type: "tf",
              question: "Free ChatGPT has usage limits, especially on the most powerful models.",
              answer: true,
              explain: "Why: powerful models cost more to run, so free use is limited and paid plans raise the limits."
            }
          ]
        },
        {
          id: "g1l2",
          title: "Voice, images & search",
          icon: "🎙️",
          steps: [
            {
              type: "info",
              title: "More than typing",
              body: "<b>Voice mode</b>: have a spoken conversation, handy for practising a pitch, learning a language or thinking out loud while walking.<br><b>Photos and screenshots</b>: snap a picture and ask about it, such as an error message, a letter, a menu or a chart.<br><b>Image generation</b>: describe a picture and ChatGPT creates it, or upload an image and ask for changes.<br><b>Search</b>: ChatGPT can search the web for current information and show its sources."
            },
            {
              type: "mc",
              question: "You want to rehearse a sales pitch out loud and get feedback. Which feature fits?",
              options: ["Voice mode", "Image generation", "Temporary chat", "Canvas"],
              answer: 0,
              explain: "Why: voice mode lets you speak naturally and hear a reply, like practising with a person."
            },
            {
              type: "mc",
              question: "You want this week's exchange rate for a supplier payment. What should you check?",
              options: [
                "That ChatGPT searched the web, and open the source it cites",
                "Nothing; it always knows today's rates",
                "Ask it to guess",
                "Generate an image of the rate"
              ],
              answer: 0,
              explain: "Why: without searching, the model only knows its training data, which may be out of date. Check the source for anything involving money."
            },
            {
              type: "tf",
              question: "It's fine to use ChatGPT to generate a fake photo of a real person doing something they didn't do, as long as it's for marketing.",
              answer: false,
              explain: "Why: it's misleading, can be defamatory or illegal, and breaks OpenAI's usage policies."
            }
          ]
        }
      ]
    },
    {
      id: "g2",
      title: "Level 2 · Intermediate",
      description: "Personalisation, memory, Projects, Canvas and data analysis.",
      lessons: [
        {
          id: "g2l1",
          title: "Custom instructions, memory & Projects",
          icon: "🗂️",
          steps: [
            {
              type: "info",
              title: "Make ChatGPT know you",
              body: "<b>Customize ChatGPT</b> (in Settings) lets you set custom instructions, such as who you are and how you like answers, and choose a response personality.<br><b>Memory</b> lets ChatGPT remember details across chats and refer to past conversations. You can view, delete or switch it off in Settings.<br><b>Projects</b> group related chats with their own files and instructions, and a project can keep its own memory so context from one client or topic doesn't leak into another."
            },
            {
              type: "mc",
              question: "You manage three separate clients and don't want details from one mixing into another. What's the best set-up?",
              options: [
                "One Project per client, each with its own files and instructions",
                "One long chat for all three",
                "Temporary chats only, re-explaining everything each time",
                "A different email address per client"
              ],
              answer: 0,
              explain: "Why: Projects keep each client's files, instructions and context separate and organised."
            },
            {
              type: "better",
              question: "Which is the better custom instruction?",
              options: [
                "Be helpful.",
                "I'm a UK small-business owner. Use British spelling and £. Keep answers short with bullet points. If you're unsure of a fact, say so."
              ],
              answer: 1,
              explain: "Why: specific, standing preferences apply to every chat and save repeating yourself."
            },
            {
              type: "tf",
              question: "You should occasionally review what ChatGPT's memory has saved and delete anything outdated or sensitive.",
              answer: true,
              explain: "Why: old or wrong memories lead to wrong assumptions, and you control what's kept."
            }
          ]
        },
        {
          id: "g2l2",
          title: "Canvas & data analysis",
          icon: "📊",
          steps: [
            {
              type: "info",
              title: "Work on documents and data together",
              body: "<b>Canvas</b> opens your writing or code in a side panel. You and ChatGPT edit it together: highlight a paragraph and ask for changes, adjust length or reading level, or get suggestions without rewriting everything.<br><br><b>Data analysis</b>: upload a spreadsheet or CSV and ChatGPT runs code (Python) to calculate, clean data and draw charts. It's exact because the computer does the maths."
            },
            {
              type: "mc",
              question: "You're drafting a 2-page proposal and want to fix just one paragraph at a time. Which feature is best?",
              options: ["Canvas", "Voice mode", "Image generation", "Temporary chat"],
              answer: 0,
              explain: "Why: in Canvas you highlight the exact part to change, and the rest of the document stays as it is."
            },
            {
              type: "mc",
              question: "You upload 12 months of sales data and ask for a chart by product. How does ChatGPT make it accurate?",
              options: [
                "It writes and runs code on your data",
                "It estimates from a quick read",
                "It searches the web for your sales",
                "It asks another user"
              ],
              answer: 0,
              explain: "Why: running code calculates from every row. Ask to see the totals table too, so you can spot-check."
            },
            {
              type: "tf",
              question: "Before uploading a spreadsheet, remove columns with personal data the analysis doesn't need.",
              answer: true,
              explain: "Why: share only what's needed. Customer names, emails and phone numbers rarely matter for trends."
            }
          ]
        }
      ]
    },
    {
      id: "g3",
      title: "Level 3 · Advanced",
      description: "Custom GPTs, deep research, agent mode and scheduled tasks.",
      lessons: [
        {
          id: "g3l1",
          title: "Custom GPTs & deep research",
          icon: "🔎",
          steps: [
            {
              type: "info",
              title: "Build your own assistant and research in depth",
              body: "<b>Custom GPTs</b> are your own versions of ChatGPT for a specific job, with set instructions, uploaded knowledge files and optional connections to other apps. You can keep them private, share them with your team, or publish them in the GPT Store.<br><br><b>Deep research</b> spends several minutes, sometimes longer, searching and reading many sources, then writes a structured report with citations."
            },
            {
              type: "mc",
              question: "New staff keep asking the same questions about your company policies. What could you build?",
              options: [
                "A custom GPT loaded with your policy documents, shared with the team",
                "A daily email with every policy attached",
                "Nothing; AI can't help with this",
                "A public GPT anyone on the internet can use"
              ],
              answer: 0,
              explain: "Why: a team-only custom GPT answers from your own documents. Keep it private if the policies are internal."
            },
            {
              type: "mc",
              question: "When is deep research worth the wait?",
              options: [
                "A market overview drawing on many sources",
                "\"What's 15% of £80?\"",
                "Rewording one sentence",
                "Translating a single word"
              ],
              answer: 0,
              explain: "Why: deep research shines when the answer needs many sources pulled together. Quick tasks don't need it."
            },
            {
              type: "tf",
              question: "A deep research report with citations can still contain mistakes, so check the key claims.",
              answer: true,
              explain: "Why: sources can be misread or out of date. Open the citations behind the claims you'll act on."
            }
          ]
        },
        {
          id: "g3l2",
          title: "Agent mode & tasks",
          icon: "🤖",
          steps: [
            {
              type: "info",
              title: "ChatGPT that takes actions",
              body: "<b>Agent mode</b> gives ChatGPT its own virtual computer and browser. It can carry out multi-step jobs: research and compare options, fill in forms, or build a spreadsheet or slides. It asks for your permission before important actions such as purchases, and you can take over at any time, for example to log in yourself.<br><br><b>Scheduled tasks</b> let ChatGPT run a prompt at a set time, such as a Monday-morning news summary.<br><br>Websites can contain hidden instructions meant to trick agents (\"prompt injection\"), so <b>watch what the agent does</b> and don't let it act on sensitive accounts unsupervised."
            },
            {
              type: "mc",
              question: "Agent mode needs to log in to a supplier website. What's the safest approach?",
              options: [
                "Take over the browser and log in yourself, then hand back",
                "Paste your password into the chat",
                "Give it your email password too, just in case",
                "Turn off all confirmations"
              ],
              answer: 0,
              explain: "Why: taking over keeps your password out of the chat, and you stay in control of the account."
            },
            {
              type: "mc",
              question: "You want a summary of industry news every Monday at 8am. Which feature?",
              options: ["A scheduled task", "Image generation", "A temporary chat", "Canvas"],
              answer: 0,
              explain: "Why: scheduled tasks run a prompt automatically at the time you choose and notify you."
            },
            {
              type: "tf",
              question: "A web page can contain hidden text that tries to trick an AI agent into doing something you didn't ask.",
              answer: true,
              explain: "Why: this is called prompt injection. Supervise agents, and confirm anything involving money or personal data."
            }
          ]
        }
      ]
    }
  ]
});
