/*
  COURSE: Individual users (advanced use cases)
  See courses/README-question-types.txt for how to write questions.
*/

COURSES.push({
  id: "advanced",
  icon: "🚀",
  title: "AI Power User",
  audience: "Individuals – advanced",
  description: "Already use AI? Go further: custom instructions, projects, files and data, images and voice, research, and multi-step workflows.",
  units: [
    {
      id: "a1",
      title: "Unit 1: Set up your AI properly",
      description: "Make the AI remember who you are and how you like things done.",
      lessons: [
        {
          id: "a1l1",
          title: "Custom instructions & memory",
          icon: "⚙️",
          steps: [
            {
              type: "info",
              title: "Stop repeating yourself",
              body: "Most AI apps have a <b>custom instructions</b> or <b>personalisation</b> setting. Whatever you write there is added to every chat automatically.<br><br>Some apps also have <b>memory</b>, where the AI saves facts about you across chats. You can usually view, edit and delete these memories in settings.",
              example: "About me: I'm a freelance graphic designer in Manchester.\nHow to reply: Be concise. Use British spelling. Skip the pleasantries. Use bullet points for lists. Ask me a question if my request is unclear."
            },
            {
              type: "mc",
              question: "What are custom instructions for?",
              options: [
                "Standing preferences the AI applies to every new chat",
                "A one-off prompt for a single question",
                "Changing the AI model's training data",
                "Sharing your chats with other people"
              ],
              answer: 0,
              explain: "Custom instructions are background preferences, such as tone, format and facts about you, that apply to every chat."
            },
            {
              type: "better",
              question: "Which is the better custom instruction?",
              options: [
                "Be good.",
                "Keep replies under 200 words unless I ask for more. Use plain English. When unsure, say so rather than guessing."
              ],
              answer: 1,
              explain: "Clear, specific rules are easy for the AI to follow. \"Be good\" gives it nothing to act on."
            },
            {
              type: "tf",
              question: "You should regularly check what an AI's memory has saved about you, and delete anything you don't want kept.",
              answer: true,
              explain: "Memories can be outdated or include things you'd rather not store. Most apps let you review and delete them."
            },
            {
              type: "mc",
              question: "Which belongs in custom instructions rather than a single prompt?",
              options: [
                "\"Always use British spelling.\"",
                "\"Summarise this one article.\"",
                "\"What's 12 × 14?\"",
                "\"Translate this sentence.\""
              ],
              answer: 0,
              explain: "Custom instructions are for preferences that apply to every chat. One-off tasks go in the prompt."
            },
            {
              type: "tf",
              question: "If your situation changes, for example a new job, you should update your custom instructions.",
              answer: true,
              explain: "Outdated instructions lead to answers aimed at the old you."
            },
            {
              type: "better",
              question: "Which custom instruction is more useful?",
              options: [
                "When I ask for recipes, assume 2 people, vegetarian, and list ingredients first.",
                "I like food."
              ],
              answer: 0,
              explain: "A specific rule changes every relevant answer. A vague one changes nothing."
            },
            {
              type: "mc",
              question: "The AI keeps assuming something wrong about you. What's the likely cause?",
              options: [
                "An outdated memory or custom instruction",
                "The AI is broken",
                "Your internet is slow",
                "You're using dark mode"
              ],
              answer: 0,
              explain: "Check saved memories and instructions, then correct or delete the wrong one."
            },
            {
              type: "mc",
              question: "What's a good custom instruction for honesty?",
              options: [
                "\"If you're not sure, say so instead of guessing.\"",
                "\"Always sound certain.\"",
                "\"Never admit mistakes.\"",
                "\"Answer in one word.\""
              ],
              answer: 0,
              explain: "Inviting the AI to flag uncertainty reduces confident-sounding errors."
            }
          ]
        },
        {
          id: "a1l2",
          title: "Projects & workspaces",
          icon: "🗂️",
          steps: [
            {
              type: "info",
              title: "One workspace per topic",
              body: "Many AI apps let you create <b>projects</b> (names vary: Projects, Custom GPTs, Gems, Spaces). A project holds:<br>• its own instructions<br>• reference files you upload once<br>• all related chats<br><br>For example, a \"House renovation\" project with your floor plan, budget spreadsheet and builder quotes."
            },
            {
              type: "mc",
              question: "You are planning a wedding and keep re-uploading the same budget and guest list. What should you do?",
              options: [
                "Create a project, upload the files once, and start all wedding chats inside it",
                "Paste the files into every new chat",
                "Keep everything in one very long chat forever",
                "Memorise the files yourself"
              ],
              answer: 0,
              explain: "Projects keep shared files and instructions available to every chat in that project."
            },
            {
              type: "tf",
              question: "A very long single chat is always better than several shorter ones, because the AI remembers more.",
              answer: false,
              explain: "Long chats can make the AI slower and less focused, and older details may get less attention. Start fresh chats for new tasks, and use projects to share background."
            },
            {
              type: "order",
              question: "Put the project setup steps in order:",
              pieces: [
                "Create a new project",
                "Write project instructions",
                "Upload reference files",
                "Start chats inside the project"
              ],
              explain: "Set up the instructions and files first so every chat benefits."
            },
            {
              type: "mc",
              question: "Which is a good use of a project?",
              options: [
                "Your job search: CV, cover letters and interview prep in one place",
                "A single question about the weather",
                "A one-line translation",
                "Checking the time"
              ],
              answer: 0,
              explain: "Projects suit ongoing work with shared files and repeated chats."
            },
            {
              type: "tf",
              question: "Instructions you add to a project apply to every chat inside that project.",
              answer: true,
              explain: "That's the main advantage: set them once for that topic."
            },
            {
              type: "mc",
              question: "You upload an old price list to a project, then prices change. What should you do?",
              options: [
                "Replace the file with the new price list",
                "Leave both and hope it picks the right one",
                "Tell it the new prices in every chat",
                "Delete the project"
              ],
              answer: 0,
              explain: "The AI uses whatever files are there. Out-of-date files give out-of-date answers."
            },
            {
              type: "better",
              question: "Which project instruction is better for a house renovation project?",
              options: [
                "Our budget is £25,000. The house is a 1930s semi. Always flag if a suggestion might need planning permission.",
                "Help with the house."
              ],
              answer: 0,
              explain: "Budget, house type and a standing rule make every answer in the project more relevant."
            },
            {
              type: "mc",
              question: "Why keep separate projects for separate topics?",
              options: [
                "Files and instructions from one topic don't confuse another",
                "It uses less battery",
                "The AI only allows one chat per project",
                "It's required by law"
              ],
              answer: 0,
              explain: "Keeping topics apart keeps answers focused."
            }
          ]
        }
      ]
    },
    {
      id: "a2",
      title: "Unit 2: Beyond text",
      description: "Files, spreadsheets, images and voice.",
      lessons: [
        {
          id: "a2l1",
          title: "Files & data analysis",
          icon: "📊",
          steps: [
            {
              type: "info",
              title: "Upload, then ask",
              body: "You can upload PDFs, Word documents and spreadsheets. Many AI apps can run calculations and make charts from a spreadsheet.<br><br>For numbers, ask the AI to <b>show its working</b> or the formula it used, so you can check it.",
              example: "Here is my bank statement export (CSV). Group my spending by category for each month, show a table, then a bar chart. Tell me which categories grew the most."
            },
            {
              type: "mc",
              question: "The AI says your average monthly spend on food is £412. How can you check it?",
              options: [
                "Ask it to show the calculation or the rows it used, and spot-check a few",
                "Trust it; computers don't make maths mistakes",
                "Ask a second time and pick the answer you like",
                "Round it to £400"
              ],
              answer: 0,
              explain: "AI can misread columns or skip rows. Seeing its working lets you catch errors."
            },
            {
              type: "better",
              question: "Which prompt will get a more useful analysis?",
              options: [
                "Analyse this.",
                "This spreadsheet is my running log. Show my average pace per month, highlight my 3 fastest runs, and suggest whether I'm improving."
              ],
              answer: 1,
              explain: "Say what the data is and what questions you want answered."
            },
            {
              type: "tf",
              question: "Before uploading a file, you should remove anything sensitive, like account numbers, that the AI doesn't need.",
              answer: true,
              explain: "Only share what the task needs. Delete or blank out columns with private data."
            },
            {
              type: "mc",
              question: "Which file can most AI assistants read?",
              options: ["All of these", "PDF", "Spreadsheet (CSV or Excel)", "Word document"],
              answer: 0,
              explain: "Most assistants accept common document and spreadsheet formats."
            },
            {
              type: "better",
              question: "Which prompt is better for a spreadsheet of customer orders?",
              options: [
                "This sheet lists orders from Jan–Jun. Which 3 products grew most month to month? Show a table and a chart.",
                "Look at my data."
              ],
              answer: 0,
              explain: "Saying what the data is and the question to answer gets a focused analysis."
            },
            {
              type: "tf",
              question: "When an AI runs code on your spreadsheet, its sums are usually more reliable than when it just reads the numbers.",
              answer: true,
              explain: "Code calculates exactly. Reading and estimating can go wrong."
            },
            {
              type: "mc",
              question: "The AI's chart looks wrong. What's a good first question?",
              options: [
                "\"Which columns and rows did you use?\"",
                "\"Why are you stupid?\"",
                "\"Make it prettier.\"",
                "\"Draw it again in red.\""
              ],
              answer: 0,
              explain: "Often the AI picked the wrong column or skipped rows. Asking reveals it."
            },
            {
              type: "mc",
              question: "You need a cleaned-up version of a messy spreadsheet. What can you ask for?",
              options: [
                "A downloadable file with the fixes, plus a list of what changed",
                "A poem about the spreadsheet",
                "A screenshot only",
                "Nothing; AI can't edit files"
              ],
              answer: 0,
              explain: "Many assistants can return a corrected file, and a change list lets you check it."
            }
          ]
        },
        {
          id: "a2l2",
          title: "Images, screenshots & voice",
          icon: "📸",
          steps: [
            {
              type: "info",
              title: "Show it, don't just tell it",
              body: "Many AI apps can <b>see images</b>. Snap a photo or screenshot and ask about it: an error message, a confusing letter, a plant, a menu in another language, a chart.<br><br>Some can also <b>create images</b>, and many have a <b>voice mode</b> for hands-free conversation."
            },
            {
              type: "mc",
              question: "Your laptop shows a confusing error message. What's the fastest way to get help?",
              options: [
                "Take a screenshot, upload it, and ask what it means and how to fix it",
                "Describe the error from memory",
                "Restart the AI app",
                "Ask the AI to guess what the error might be"
              ],
              answer: 0,
              explain: "A screenshot gives the AI the exact wording and context."
            },
            {
              type: "mc",
              question: "Which is a good use of voice mode?",
              options: [
                "Practising a job interview out loud while walking",
                "Reading out your card number so it can store it",
                "Recording other people without telling them",
                "None; voice mode is just for fun"
              ],
              answer: 0,
              explain: "Voice mode suits practice conversations, language learning and thinking out loud."
            },
            {
              type: "tf",
              question: "AI image recognition is always right, so you can rely on it to tell you whether a wild mushroom is safe to eat.",
              answer: false,
              explain: "Never rely on AI for safety-critical identification. It can be confidently wrong."
            },
            {
              type: "mc",
              question: "You photograph a menu in another language. What can you ask?",
              options: [
                "\"Translate this and suggest vegetarian options.\"",
                "\"Is this a photo?\"",
                "\"Make it black and white.\"",
                "\"Delete it.\""
              ],
              answer: 0,
              explain: "Image understanding plus translation turns a photo into useful help."
            },
            {
              type: "tf",
              question: "When generating images, describing style, lighting and setting usually gives better results.",
              answer: true,
              explain: "Specific visual details give the generator a clearer target."
            },
            {
              type: "better",
              question: "Which image prompt is better?",
              options: [
                "A friendly cartoon owl reading a book, soft pastel colours, white background, for a children's library poster.",
                "Owl."
              ],
              answer: 0,
              explain: "Subject, style, colours and purpose all shape the image."
            },
            {
              type: "mc",
              question: "What's a risk of uploading a screenshot of your banking app?",
              options: [
                "It may show account numbers or personal details",
                "None at all",
                "It will improve your credit score",
                "It makes the AI faster"
              ],
              answer: 0,
              explain: "Crop or blur sensitive details before sharing any screenshot."
            },
            {
              type: "mc",
              question: "Voice mode is especially useful for...",
              options: [
                "Practising a language conversation",
                "Sending your bank details",
                "Editing a spreadsheet cell by cell",
                "Reading tiny print on screen"
              ],
              answer: 0,
              explain: "Speaking and listening practice is where voice shines."
            }
          ]
        }
      ]
    },
    {
      id: "a3",
      title: "Unit 3: Research & reasoning",
      description: "Get answers you can trust, and get the AI to think harder.",
      lessons: [
        {
          id: "a3l1",
          title: "Research with sources",
          icon: "🔎",
          steps: [
            {
              type: "info",
              title: "Ask for sources, then open them",
              body: "Many AI tools can <b>search the web</b>, and some have a <b>deep research</b> mode that reads many pages and writes a report with links.<br><br>Links can still be wrong or not say what the AI claims. <b>Click the important ones</b> and check."
            },
            {
              type: "mc",
              question: "The AI's research report cites a source for a surprising claim. What should you do?",
              options: [
                "Open the link and check it actually says that",
                "Assume it's correct because there's a link",
                "Delete the claim without checking",
                "Ask the AI if the link is real"
              ],
              answer: 0,
              explain: "A citation is only useful if the source really supports the claim."
            },
            {
              type: "better",
              question: "Which research prompt is better?",
              options: [
                "Tell me about electric cars.",
                "Compare the 3 best-selling electric cars in the UK this year on price, range and charging speed. Use recent sources and link each figure."
              ],
              answer: 1,
              explain: "Scope, criteria, recency and a request for sources make the result checkable."
            },
            {
              type: "tf",
              question: "Asking \"what are the strongest arguments AGAINST this?\" is a good way to avoid one-sided research.",
              answer: true,
              explain: "AI tends to agree with how a question is framed. Asking for the other side balances it."
            },
            {
              type: "mc",
              question: "What's the difference between a quick web search answer and deep research?",
              options: [
                "Deep research reads many more sources and takes longer",
                "There's no difference",
                "Deep research doesn't use the web",
                "Quick answers are always more accurate"
              ],
              answer: 0,
              explain: "Deep research trades time for thoroughness."
            },
            {
              type: "tf",
              question: "A source being listed doesn't guarantee the AI described it correctly.",
              answer: true,
              explain: "AI can misread or overstate what a page says. Check the claims that matter."
            },
            {
              type: "better",
              question: "Which research prompt is better?",
              options: [
                "What are the main pros and cons of a 4-day working week for small UK businesses? Use studies from the last 3 years and link them.",
                "4 day week good?"
              ],
              answer: 0,
              explain: "A clear question, timeframe and request for sources makes it checkable."
            },
            {
              type: "mc",
              question: "Which source is usually most reliable for a new law?",
              options: [
                "The official government website",
                "A random social media post",
                "An AI's memory with no source",
                "A forum comment"
              ],
              answer: 0,
              explain: "Primary, official sources beat second-hand summaries."
            },
            {
              type: "mc",
              question: "The AI gives two conflicting facts from two sources. What should you do?",
              options: [
                "Open both sources and see which is more recent and reliable",
                "Pick the one you like",
                "Average them",
                "Ignore both"
              ],
              answer: 0,
              explain: "Checking recency and authority resolves most conflicts."
            }
          ]
        },
        {
          id: "a3l2",
          title: "Make it think & critique",
          icon: "🧩",
          steps: [
            {
              type: "info",
              title: "Thinking models and self-critique",
              body: "Some AI models offer a <b>thinking</b> or <b>reasoning</b> mode. It takes longer but does better on maths, logic, planning and tricky decisions.<br><br>You can also ask the AI to <b>critique its own answer</b>: find weaknesses, then improve it.",
              example: "Here's your plan. Now act as a sceptical expert: list the 5 biggest weaknesses, then rewrite the plan to fix them."
            },
            {
              type: "mc",
              question: "When is a thinking/reasoning mode most worth the extra wait?",
              options: [
                "Working out a complicated budget or multi-step plan",
                "Saying \"thanks\"",
                "Fixing a typo in one sentence",
                "Translating one word"
              ],
              answer: 0,
              explain: "Use the slower, deeper mode for problems with many steps or that need careful logic."
            },
            {
              type: "order",
              question: "Put the self-critique loop in order:",
              pieces: [
                "Ask for a first draft",
                "Ask it to list the weaknesses",
                "Ask it to rewrite fixing them",
                "Review the final version yourself"
              ],
              explain: "Draft → critique → improve, then your own judgement."
            },
            {
              type: "mc",
              question: "AI tends to agree with you. How do you get honest feedback on your idea?",
              options: [
                "Ask it to argue against the idea or point out what could go wrong",
                "Tell it you love the idea first",
                "Ask \"this is great, right?\"",
                "Only ask for compliments"
              ],
              answer: 0,
              explain: "Leading questions get agreeable answers. Ask explicitly for criticism."
            },
            {
              type: "mc",
              question: "Which prompt invites the AI to reason carefully?",
              options: [
                "\"Work through this step by step and check your maths at the end.\"",
                "\"Answer instantly.\"",
                "\"Just guess.\"",
                "\"One word only.\""
              ],
              answer: 0,
              explain: "Asking for steps and a check reduces careless errors."
            },
            {
              type: "tf",
              question: "Asking the AI \"what could go wrong with this plan?\" is a useful way to stress-test it.",
              answer: true,
              explain: "It surfaces risks you might not have considered."
            },
            {
              type: "order",
              question: "Put the \"red team\" review in order:",
              pieces: [
                "Share your plan",
                "Ask the AI to argue against it",
                "Ask which objections are strongest",
                "Decide what to change"
              ],
              explain: "Hearing the strongest objections first helps you improve the plan where it matters."
            },
            {
              type: "better",
              question: "Which prompt gives more honest feedback on your idea?",
              options: [
                "Rate my business idea 1–10 on demand, competition and cost, and give the 3 biggest reasons it could fail.",
                "Isn't my idea great?"
              ],
              answer: 0,
              explain: "A neutral, structured question avoids the AI simply agreeing with you."
            },
            {
              type: "mc",
              question: "Thinking mode answered a maths problem. What's still wise?",
              options: [
                "Check the key numbers yourself",
                "Assume it's perfect",
                "Ask for the answer in Roman numerals",
                "Delete the chat"
              ],
              answer: 0,
              explain: "Thinking reduces errors, but it doesn't remove them."
            }
          ]
        }
      ]
    },
    {
      id: "a4",
      title: "Unit 4: Personal workflows",
      description: "Chain prompts into routines that save you hours.",
      lessons: [
        {
          id: "a4l1",
          title: "Chaining prompts",
          icon: "⛓️",
          steps: [
            {
              type: "info",
              title: "Big jobs, small steps",
              body: "For a big task, split it into a chain where each step uses the output of the last.",
              example: "1. Ask me 10 questions about my fitness, schedule and diet.\n2. Using my answers, draft a 4-week plan.\n3. Turn week 1 into a daily checklist.\n4. Write a shopping list for week 1."
            },
            {
              type: "order",
              question: "Put this trip-planning chain in order:",
              pieces: [
                "Share dates, budget and interests",
                "Get 3 destination options",
                "Pick one and get a day-by-day plan",
                "Get a packing list for that plan"
              ],
              explain: "Each step narrows down and builds on the one before."
            },
            {
              type: "tf",
              question: "Reviewing each step before moving on catches mistakes early.",
              answer: true,
              explain: "A mistake in step 1 will carry through every later step if you don't catch it."
            },
            {
              type: "mc",
              question: "You do the same weekly meal-planning chat every Sunday. How can you save time?",
              options: [
                "Save your best prompt as a template (or project instructions) and reuse it",
                "Write a new prompt from scratch each week",
                "Stop meal planning",
                "Copy someone else's meals"
              ],
              answer: 0,
              explain: "Reusable prompt templates turn a good chat into a repeatable routine."
            },
            {
              type: "mc",
              question: "What's prompt chaining?",
              options: [
                "Using the output of one step as the input for the next",
                "Writing one very long prompt",
                "Asking the same question repeatedly",
                "Linking two AI apps with a cable"
              ],
              answer: 0,
              explain: "Each step builds on the last, keeping each part manageable."
            },
            {
              type: "tf",
              question: "A chain lets you check and correct each step before moving on.",
              answer: true,
              explain: "That's the main advantage over one giant prompt."
            },
            {
              type: "order",
              question: "Put this blog-writing chain in order:",
              pieces: [
                "Agree a topic and audience",
                "Get an outline",
                "Write each section",
                "Edit the whole post for tone and length"
              ],
              explain: "Structure first, details next, polish last."
            },
            {
              type: "mc",
              question: "What's a good way to save a chain you'll reuse?",
              options: [
                "Write each step's prompt in a document as a template",
                "Rely on memory",
                "Screenshot one answer",
                "Start from scratch each time"
              ],
              answer: 0,
              explain: "A written set of steps makes the routine repeatable and shareable."
            },
            {
              type: "mc",
              question: "Step 2 of your chain produced something off-track. What should you do?",
              options: [
                "Fix step 2 before continuing",
                "Carry on and fix it at the end",
                "Start a new chain from step 5",
                "Ignore it"
              ],
              answer: 0,
              explain: "Errors carry forward. Fix them where they happen."
            }
          ]
        },
        {
          id: "a4l2",
          title: "Learn anything with AI",
          icon: "🎓",
          steps: [
            {
              type: "info",
              title: "AI as a personal tutor",
              body: "AI can teach at your level, quiz you and explain things in different ways. Ask it to <b>test you</b> rather than just explain, because you remember more that way.",
              example: "Teach me the basics of investing in index funds. Explain one idea at a time, then quiz me with one question before moving on. Don't give me the answer until I've tried."
            },
            {
              type: "mc",
              question: "Which approach helps you learn the most?",
              options: [
                "Ask the AI to quiz you and only reveal answers after you try",
                "Ask for a 5,000-word explanation and skim it",
                "Ask it to do your homework for you",
                "Copy its answers into your notes"
              ],
              answer: 0,
              explain: "Actively recalling answers builds memory far better than reading."
            },
            {
              type: "better",
              question: "Which prompt is better for understanding a hard topic?",
              options: [
                "Explain inflation using an analogy about a pizza shop, then give me 3 quick questions to check I understood.",
                "Inflation."
              ],
              answer: 0,
              explain: "Analogies and quick checks make abstract ideas stick."
            },
            {
              type: "tf",
              question: "For important topics like medical or legal matters, AI explanations should be confirmed with a qualified professional.",
              answer: true,
              explain: "AI is great for understanding the basics and preparing questions, but not a substitute for professional advice."
            },
            {
              type: "better",
              question: "Which prompt makes AI a better tutor?",
              options: [
                "Teach me Excel pivot tables. Give me a tiny dataset, one task at a time, and check my answers.",
                "Explain pivot tables."
              ],
              answer: 0,
              explain: "Hands-on tasks with feedback teach more than a long explanation."
            },
            {
              type: "tf",
              question: "Asking the AI to explain something \"in three different ways\" can help a tricky idea click.",
              answer: true,
              explain: "Different explanations suit different people."
            },
            {
              type: "mc",
              question: "You want to remember what you learned. What's the best follow-up?",
              options: [
                "Ask for a short quiz tomorrow on the same topic",
                "Read the explanation once more",
                "Copy it into a notebook word for word",
                "Never revisit it"
              ],
              answer: 0,
              explain: "Testing yourself after a gap strengthens memory."
            },
            {
              type: "mc",
              question: "What's a good way to learn vocabulary in a new language with AI?",
              options: [
                "Ask it to use new words in short dialogues and quiz you",
                "Ask for a list of 1,000 words",
                "Translate whole books",
                "Only read grammar rules"
              ],
              answer: 0,
              explain: "Words in context, plus practice, stick better than long lists."
            },
            {
              type: "mc",
              question: "When learning with AI, what should you do if something seems wrong?",
              options: [
                "Check it in a trusted textbook or source",
                "Assume the AI is right",
                "Stop learning",
                "Ask the AI to promise it's right"
              ],
              answer: 0,
              explain: "AI tutors can make mistakes too. Cross-check important facts."
            }
          ]
        }
      ]
    },
    {
      id: "a5",
      title: "Unit 5: Pick the right model & tool",
      description: "Understand model tiers, context size and specialist features, and why they matter.",
      lessons: [
        {
          id: "a5l1",
          title: "Model families & tiers",
          icon: "🏷️",
          steps: [
            {
              type: "info",
              title: "Small, medium, large",
              body: "Most AI companies offer a family of models in tiers. For example, Anthropic's Claude comes as <b>Haiku</b> (fast), <b>Sonnet</b> (balanced) and <b>Opus</b> (most capable). Other providers use names like \"mini\", \"flash\" or \"pro\".<br><br>The trade-offs:<br>• <b>Speed</b>: smaller is faster<br>• <b>Usage limits / cost</b>: smaller is cheaper<br>• <b>Quality on hard tasks</b>: larger is better at complex reasoning, nuance and long tasks<br>• <b>Context window</b>: how much text the model can read at once (varies by model)<br><br><b>Why:</b> larger models have more capacity and do more computing for every word they write."
            },
            {
              type: "mc",
              question: "You need 300 short customer comments sorted into categories, quickly. Which tier?",
              options: [
                "A small, fast model",
                "The largest model with maximum thinking",
                "An image generation model",
                "Do it by hand"
              ],
              answer: 0,
              explain: "Why: sorting short comments is simple and repetitive. A small model handles it well and finishes much faster, and it uses less of your limit."
            },
            {
              type: "mc",
              question: "You're planning a house move around a budget, school deadlines and three contractors' schedules. Which tier?",
              options: [
                "The most capable model, with thinking mode on",
                "The smallest model",
                "Any model; they're all the same",
                "A voice-only model"
              ],
              answer: 0,
              explain: "Why: many constraints interact. Larger and thinking models keep track of all of them and catch conflicts that smaller models miss."
            },
            {
              type: "mc",
              question: "What does a larger context window let you do?",
              options: [
                "Give the model longer documents, or more of them, in one go",
                "Make replies arrive faster",
                "Make the model more creative",
                "Use the model offline"
              ],
              answer: 0,
              explain: "Why: the context window is the model's working memory for one conversation. Bigger means a whole contract or several reports fit at once."
            },
            {
              type: "tf",
              question: "The newest, biggest model is always the best choice.",
              answer: false,
              explain: "Why: on simple tasks it's no better, just slower and it uses more of your limits. Match the model to how hard the task is."
            },
            {
              type: "mc",
              question: "Anthropic's Claude Opus is generally aimed at...",
              options: [
                "The hardest, most complex tasks",
                "The fastest simple replies",
                "Image generation only",
                "Offline use"
              ],
              answer: 0,
              explain: "Larger tiers trade speed for capability on demanding work."
            },
            {
              type: "tf",
              question: "A small, fast model can be the right choice for a long but simple task, like sorting thousands of short messages.",
              answer: true,
              explain: "Simple, repetitive work doesn't need the biggest model, and speed matters at volume."
            },
            {
              type: "mc",
              question: "What does a model's knowledge cut-off affect?",
              options: [
                "How up to date its built-in knowledge is",
                "How fast it types",
                "How many images it can draw",
                "Its colour scheme"
              ],
              answer: 0,
              explain: "After the cut-off, it needs web search to know about new events."
            },
            {
              type: "mc",
              question: "You need to analyse a 200-page contract in one go. What matters most?",
              options: ["A large enough context window", "The model's name", "Image generation", "Voice mode"],
              answer: 0,
              explain: "The whole document has to fit in the model's working memory."
            }
          ]
        },
        {
          id: "a5l2",
          title: "Match the tool to the task",
          icon: "🧭",
          steps: [
            {
              type: "info",
              title: "Features matter as much as the model",
              body: "<b>Deep research modes</b>: search many sources over several minutes and write a cited report.<br><b>Data analysis</b>: the AI writes and runs code on your spreadsheet, so its calculations are exact.<br><b>App builders</b> (e.g. Claude artifacts, ChatGPT canvas, Lovable, Replit): describe a small app or web page and get a working version you can try straight away.<br><b>Coding agents</b> (e.g. Claude Code): build and change larger software projects.<br><b>Image and voice</b>: create pictures, or talk instead of type.<br><br><b>Why:</b> the same model gives very different results depending on what tools it has. Searching, running code and previewing apps all add abilities that plain chat doesn't have."
            },
            {
              type: "mc",
              question: "You want a simple habit-tracker web page but can't code. What's the best tool?",
              options: [
                "An AI app builder or artifacts feature that writes and previews the app for you",
                "A meeting note-taker",
                "A search-first tool",
                "An image generator"
              ],
              answer: 0,
              explain: "Why: app builders write the code and show you a working version you can test and adjust by chatting, with no coding knowledge needed."
            },
            {
              type: "mc",
              question: "You need a detailed report comparing home solar panel options, with sources. Which feature?",
              options: [
                "Deep research mode",
                "A quick reply from a small model with no web access",
                "Voice mode",
                "Image generation"
              ],
              answer: 0,
              explain: "Why: deep research reads many pages and cites them. It takes minutes rather than seconds, but it's far more thorough than one quick answer."
            },
            {
              type: "mc",
              question: "You need exact averages from a 5,000-row spreadsheet. What should you use?",
              options: [
                "An AI tool that can run code to analyse the data",
                "A chat with no file or code tools, by pasting a few rows",
                "Guessing from a chart",
                "An image generator"
              ],
              answer: 0,
              explain: "Why: when the AI runs code, the maths is done by the computer, which is exact. Without code, the AI estimates from reading the text, which can go wrong."
            },
            {
              type: "order",
              question: "Put the steps for choosing a tool in order:",
              pieces: [
                "Define the task",
                "List the features it needs (web, files, code, images)",
                "Shortlist tools that have them",
                "Test the same prompt in two and compare"
              ],
              explain: "Why: starting from the task, not the brand, stops you choosing a tool that's missing a feature you need."
            },
            {
              type: "mc",
              question: "You want a short animated explainer for social media. What kind of tool?",
              options: [
                "An AI video or animation generator",
                "A spreadsheet tool",
                "A meeting note-taker",
                "A plain text chat"
              ],
              answer: 0,
              explain: "Video tools are built for moving images."
            },
            {
              type: "tf",
              question: "The same AI model can give very different results depending on whether it has web search, code tools or file access turned on.",
              answer: true,
              explain: "Tools add abilities. Turning them on or off changes what the AI can do."
            },
            {
              type: "mc",
              question: "You want to build a simple booking form without code. Which tool type fits?",
              options: [
                "An AI app builder that previews the result",
                "A voice assistant",
                "An image generator",
                "A dictionary"
              ],
              answer: 0,
              explain: "App builders turn a description into a working app you can test."
            },
            {
              type: "mc",
              question: "Which question should you ask before trusting a new AI tool with your data?",
              options: [
                "\"How is my data stored and used?\"",
                "\"What colour is the logo?\"",
                "\"How many emojis does it support?\"",
                "\"Is it popular on social media?\""
              ],
              answer: 0,
              explain: "Data handling matters more than popularity, especially for work."
            }
          ]
        }
      ]
    }
  ]
});
