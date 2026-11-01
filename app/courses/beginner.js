/*
  COURSE: Individual users (beginner)
  See courses/README-question-types.txt for how to write questions.
*/

COURSES.push({
  id: "beginner",
  icon: "🌱",
  title: "AI Basics",
  audience: "Individuals – beginner",
  description: "Never used AI before? Start here. What AI is, how to ask it things, and how to stay safe.",
  units: [
  {
    id: "u1",
    title: "Unit 1: What is AI?",
    description: "Understand what AI chat tools are, and what they can and can't do.",
    lessons: [
      {
        id: "u1l1",
        title: "Meet your AI assistant",
        icon: "🤖",
        steps: [
          {
            type: "info",
            title: "What is an AI assistant?",
            body: "Tools like ChatGPT, Claude, Gemini and Copilot are AI assistants. You type a request in plain English (called a <b>prompt</b>) and the AI writes a reply.<br><br>They learned from huge amounts of text, so they are good at writing, summarising, explaining and brainstorming."
          },
          {
            type: "mc",
            question: "What is a \"prompt\"?",
            options: [
              "The message or instruction you type to the AI",
              "A setting you change in the app's menu",
              "A type of computer virus",
              "The AI's reply to you"
            ],
            answer: 0,
            explain: "A prompt is whatever you type to the AI: a question, an instruction or a task."
          },
          {
            type: "mc",
            question: "Which of these is an AI assistant typically GOOD at?",
            options: [
              "Drafting a polite email to a customer",
              "Knowing what happened in your meeting this morning (without being told)",
              "Guaranteeing every fact it states is correct",
              "Reading your mind about what you want"
            ],
            answer: 0,
            explain: "Writing and rewriting text is one of AI's strongest skills. It only knows what you tell it, and it can make mistakes."
          },
          {
            type: "tf",
            question: "You need to learn a special coding language to talk to an AI assistant.",
            answer: false,
            explain: "You write to it in normal, everyday language, the same way you'd message a colleague."
          },
          {
            type: "mc",
            question: "Which one is NOT an AI assistant?",
            options: ["ChatGPT", "Claude", "Gemini", "Microsoft Excel (on its own)"],
            answer: 3,
            explain: "Excel is a spreadsheet program. Some versions now include an AI add-on (Copilot), but Excel itself is not a chat assistant."
          }
        ]
      },
      {
        id: "u1l2",
        title: "AI makes mistakes",
        icon: "⚠️",
        steps: [
          {
            type: "info",
            title: "Hallucinations",
            body: "AI can state things that sound confident but are <b>wrong or made up</b>. This is called a <b>hallucination</b>.<br><br>It happens most with exact facts: names, numbers, dates, quotes, laws and links.",
            example: "You: Give me 3 studies proving our product works.\nAI: (may invent study titles and authors that don't exist)"
          },
          {
            type: "mc",
            question: "What is an AI \"hallucination\"?",
            options: [
              "When the AI gives a confident answer that is false or invented",
              "When the AI refuses to answer",
              "When the AI is slow to respond",
              "When the AI generates an image"
            ],
            answer: 0,
            explain: "A hallucination is false information presented as if it were true."
          },
          {
            type: "mc",
            question: "The AI gives you a statistic for a client report. What should you do?",
            options: [
              "Check it against a trusted source before using it",
              "Use it straight away; AI is always right",
              "Ask the AI \"are you sure?\" and trust whatever it says next",
              "Round the number so it looks better"
            ],
            answer: 0,
            explain: "Always verify facts and numbers before they go into anything important. Asking the AI \"are you sure?\" is not a real check."
          },
          {
            type: "tf",
            question: "If an AI sounds confident, its answer is probably correct.",
            answer: false,
            explain: "AI sounds equally confident whether it is right or wrong. Tone tells you nothing about accuracy."
          },
          {
            type: "mc",
            question: "Which task carries the HIGHEST risk of hallucination?",
            options: [
              "Asking for exact legal citations",
              "Brainstorming names for a newsletter",
              "Rewriting a paragraph to sound friendlier",
              "Turning bullet points into a paragraph"
            ],
            answer: 0,
            explain: "Exact references (laws, cases, sources, links) are where AI most often invents things. Creative and rewriting tasks are lower risk."
          }
        ]
      },
      {
        id: "u1l3",
        title: "What AI knows",
        icon: "🧠",
        steps: [
          {
            type: "info",
            title: "AI only knows what it was trained on, plus what you tell it",
            body: "Most AI tools learned from text up to a certain date (their <b>knowledge cutoff</b>). Some can search the web, but not all do it by default.<br><br>The AI does <b>not</b> know about your business, your customers or your files unless you give it that information in the chat."
          },
          {
            type: "tf",
            question: "An AI assistant automatically knows your company's prices and policies.",
            answer: false,
            explain: "It only knows what's in its training and what you paste or upload into the conversation."
          },
          {
            type: "mc",
            question: "You want the AI to write a reply to a customer complaint. What helps most?",
            options: [
              "Paste the customer's message and explain your refund policy",
              "Just type \"write a reply to a complaint\"",
              "Tell the AI your company name and hope it knows the rest",
              "Type in all capital letters"
            ],
            answer: 0,
            explain: "Giving the AI the actual details means it can write something accurate and specific."
          },
          {
            type: "mc",
            question: "What is a \"knowledge cutoff\"?",
            options: [
              "The date after which the AI's training data stops",
              "The maximum length of a prompt",
              "When your free trial runs out",
              "A filter that blocks rude words"
            ],
            answer: 0,
            explain: "Events after the cutoff may be unknown to the AI unless it can search the web."
          }
        ]
      }
    ]
  },
  {
    id: "u2",
    title: "Unit 2: Writing good prompts",
    description: "Learn the simple habits that get you much better answers.",
    lessons: [
      {
        id: "u2l1",
        title: "Be specific",
        icon: "🎯",
        steps: [
          {
            type: "info",
            title: "Vague in, vague out",
            body: "The more specific your prompt, the more useful the answer. Say <b>what</b> you want, <b>who</b> it's for, and <b>how long</b> it should be.",
            example: "❌ Write about marketing.\n\n✅ Write 5 short Instagram caption ideas for a local bakery launching a new sourdough. Friendly tone, under 20 words each."
          },
          {
            type: "better",
            question: "Which prompt is better?",
            options: [
              "Write an email.",
              "Write a short, friendly email to a client reminding them their invoice #204 for £450 is due Friday."
            ],
            answer: 1,
            explain: "The second prompt says who it's for, the purpose, the key details and the tone."
          },
          {
            type: "better",
            question: "Which prompt is better?",
            options: [
              "Give me 3 ideas for a 30-minute team-building activity for 8 remote employees, no cost.",
              "Team building ideas?"
            ],
            answer: 0,
            explain: "Group size, time, budget and remote setup all narrow it down to ideas you can actually use."
          },
          {
            type: "mc",
            question: "Which detail would MOST improve this prompt: \"Summarise this report.\"",
            options: [
              "\"...in 5 bullet points for a busy manager\"",
              "\"...please\"",
              "\"...quickly\"",
              "\"...using AI\""
            ],
            answer: 0,
            explain: "Saying the format (5 bullets) and the audience (busy manager) tells the AI exactly what a good summary looks like."
          }
        ]
      },
      {
        id: "u2l2",
        title: "Give context",
        icon: "📋",
        steps: [
          {
            type: "info",
            title: "Context is the secret ingredient",
            body: "Tell the AI the background, like you would brief a new employee: who you are, what the situation is, and what you're trying to achieve.",
            example: "I run a 10-person accounting firm. A client is upset their tax return is late because they sent documents late. Help me write a calm reply that is polite but firm."
          },
          {
            type: "mc",
            question: "Briefing an AI is most like...",
            options: [
              "Briefing a smart new employee on their first day",
              "Searching Google with keywords",
              "Sending a text to a close friend",
              "Filling in a tax form"
            ],
            answer: 0,
            explain: "The AI is capable but knows nothing about your situation. Explain it the way you would to a new hire."
          },
          {
            type: "order",
            question: "Put this prompt in a sensible order:",
            pieces: [
              "I own a small hotel.",
              "A guest left a 2-star review about a noisy room.",
              "Write a short, apologetic public reply",
              "that offers a 10% discount on their next stay."
            ],
            explain: "Background first (who you are, what happened), then the task and the details."
          },
          {
            type: "tf",
            question: "Adding background information to a prompt usually makes the answer worse because it confuses the AI.",
            answer: false,
            explain: "Relevant background almost always improves the answer."
          }
        ]
      },
      {
        id: "u2l3",
        title: "Ask for a format",
        icon: "🧾",
        steps: [
          {
            type: "info",
            title: "Tell it how to lay out the answer",
            body: "You can ask for a <b>table</b>, <b>bullet points</b>, a <b>numbered checklist</b>, an <b>email</b>, a word limit, or a reading level. The AI will follow it.",
            example: "Compare these 3 phone plans in a table with columns: Price, Data, Contract length, Best for."
          },
          {
            type: "mc",
            question: "You want to compare 4 suppliers on price, delivery time and rating. Which format should you ask for?",
            options: ["A table", "A poem", "One long paragraph", "A haiku"],
            answer: 0,
            explain: "Tables are best when comparing several items across the same features."
          },
          {
            type: "better",
            question: "Which prompt is better for a staff noticeboard?",
            options: [
              "Explain our new holiday booking rules.",
              "Explain our new holiday booking rules as a numbered list of 5 steps, in plain English, under 100 words."
            ],
            answer: 1,
            explain: "Format, length and reading level make it ready to pin up straight away."
          },
          {
            type: "tf",
            question: "You can ask the AI to write \"at a level a 12-year-old would understand\".",
            answer: true,
            explain: "Asking for a reading level is a great way to get simple, clear explanations."
          }
        ]
      },
      {
        id: "u2l4",
        title: "Give it a role & examples",
        icon: "🎭",
        steps: [
          {
            type: "info",
            title: "Roles and examples",
            body: "Two powerful tricks:<br><br><b>1. Give a role:</b> \"Act as an experienced HR manager...\"<br><b>2. Show an example</b> of what you want, so the AI can copy the style.",
            example: "Act as a friendly customer service agent. Here is an example of our tone:\n\"Hi Sam! Thanks so much for reaching out 😊\"\nNow reply to this message: ..."
          },
          {
            type: "mc",
            question: "Why would you show the AI an example of a past email you wrote?",
            options: [
              "So it can match your tone and style",
              "So it can send the email for you",
              "To make the AI respond faster",
              "It makes no difference"
            ],
            answer: 0,
            explain: "Examples are one of the most reliable ways to get the AI to match the style you want."
          },
          {
            type: "mc",
            question: "Which is an example of giving the AI a role?",
            options: [
              "\"You are an experienced bookkeeper. Explain VAT to a new business owner.\"",
              "\"Explain VAT.\"",
              "\"VAT??\"",
              "\"Tell me everything.\""
            ],
            answer: 0,
            explain: "Starting with \"You are a...\" sets the expertise and perspective the AI should use."
          },
          {
            type: "order",
            question: "Build a strong prompt:",
            pieces: [
              "You are a marketing expert.",
              "I run a dog grooming salon in Leeds.",
              "Write 3 Facebook post ideas",
              "in a fun, casual tone."
            ],
            explain: "Role → context → task → style. A reliable pattern for most prompts."
          }
        ]
      }
    ]
  },
  {
    id: "u3",
    title: "Unit 3: AI at work",
    description: "Use AI for everyday business tasks.",
    lessons: [
      {
        id: "u3l1",
        title: "Emails & writing",
        icon: "✉️",
        steps: [
          {
            type: "info",
            title: "Your writing assistant",
            body: "AI is excellent for first drafts. Paste rough notes and ask it to turn them into a clear email, or paste your draft and ask it to make it shorter, friendlier or more professional.<br><br><b>Always read it before you send it.</b>"
          },
          {
            type: "mc",
            question: "You wrote a blunt email to a supplier. What's a good prompt?",
            options: [
              "\"Rewrite this email to be polite but firm. Keep all the facts the same: [paste email]\"",
              "\"Make it better.\"",
              "\"Send this to my supplier.\"",
              "\"Write a different email about something else.\""
            ],
            answer: 0,
            explain: "Say how to change it (polite but firm) and what to keep (the facts)."
          },
          {
            type: "tf",
            question: "It's fine to send an AI-written email without reading it, as long as the prompt was good.",
            answer: false,
            explain: "Always check: AI can get names, numbers or tone wrong. You are responsible for what you send."
          },
          {
            type: "mc",
            question: "Which is the BEST use of AI for writing?",
            options: [
              "Turning your bullet-point notes into a first draft you then edit",
              "Writing a legal contract you sign without review",
              "Replying to every customer automatically without checking",
              "Making up customer testimonials"
            ],
            answer: 0,
            explain: "AI saves time on drafts; a human should still review anything important. Fake testimonials are dishonest and often illegal."
          }
        ]
      },
      {
        id: "u3l2",
        title: "Summaries & research",
        icon: "📚",
        steps: [
          {
            type: "info",
            title: "Summarise long documents",
            body: "Paste (or upload) a long document and ask for a summary, key points, action items or risks. This can save hours.",
            example: "Here are my meeting notes. List: 1) decisions made, 2) action items with who owns them, 3) open questions."
          },
          {
            type: "mc",
            question: "You have 20 pages of meeting notes. What's the most useful prompt?",
            options: [
              "\"List the decisions, action items with owners, and deadlines from these notes.\"",
              "\"Read this.\"",
              "\"Is this good?\"",
              "\"Make it longer.\""
            ],
            answer: 0,
            explain: "Asking for specific things (decisions, owners, deadlines) gives you a summary you can act on."
          },
          {
            type: "mc",
            question: "The AI's summary says the contract renews on 1 March. What should you do before relying on it?",
            options: [
              "Check the date in the original contract",
              "Nothing; summaries are always accurate",
              "Ask a different AI tool",
              "Delete the original document"
            ],
            answer: 0,
            explain: "Summaries can miss or change details. Check important facts against the original."
          },
          {
            type: "tf",
            question: "You can ask the AI to explain a confusing document \"in plain English\".",
            answer: true,
            explain: "This is one of the most useful everyday tasks: jargon-heavy letters, policies or terms explained simply."
          }
        ]
      },
      {
        id: "u3l3",
        title: "Brainstorming",
        icon: "💡",
        steps: [
          {
            type: "info",
            title: "An idea partner that never gets tired",
            body: "Ask for lots of ideas, then pick the best ones and ask the AI to develop them further. Ask for <b>more ideas than you need</b>; quantity first, then quality."
          },
          {
            type: "better",
            question: "Which prompt will give more useful ideas?",
            options: [
              "\"Give me 15 low-cost ways a local gym could get more members in January. Group them by cost.\"",
              "\"Gym ideas.\""
            ],
            answer: 0,
            explain: "A number, a goal, a constraint (low cost) and a structure (grouped) all help."
          },
          {
            type: "order",
            question: "Put a good brainstorming process in order:",
            pieces: [
              "Ask for many ideas",
              "Pick the 2–3 you like best",
              "Ask the AI to develop those in detail",
              "Check and adapt the plan yourself"
            ],
            explain: "Go wide first, then narrow down, then go deep, then apply your own judgement."
          },
          {
            type: "mc",
            question: "The AI's first ideas are boring. What should you try?",
            options: [
              "Ask for more unusual or bolder ideas, and say why the first ones didn't work",
              "Give up on AI",
              "Ask exactly the same question again with no changes",
              "Pick the first one anyway"
            ],
            answer: 0,
            explain: "Tell it what's missing. Feedback steers the AI toward what you actually want."
          }
        ]
      }
    ]
  },
  {
    id: "u4",
    title: "Unit 4: Getting better results",
    description: "Have a conversation, not a one-shot question.",
    lessons: [
      {
        id: "u4l1",
        title: "Iterate & refine",
        icon: "🔁",
        steps: [
          {
            type: "info",
            title: "It's a conversation",
            body: "Your first answer is a starting point. Reply with feedback to improve it: \"shorter\", \"more formal\", \"add a price\", \"remove the second paragraph\". The AI remembers what you've said earlier in the same chat."
          },
          {
            type: "mc",
            question: "The AI's draft is good but too long. What's the best next step?",
            options: [
              "Reply: \"Great, now cut it to under 100 words and keep the call to action.\"",
              "Start a new chat and write the whole prompt again",
              "Accept it as it is",
              "Delete your account"
            ],
            answer: 0,
            explain: "Building on the current answer is faster and keeps the context."
          },
          {
            type: "tf",
            question: "Within the same chat, the AI can refer back to what you said earlier.",
            answer: true,
            explain: "Yes, within one conversation it remembers earlier messages. A brand-new chat usually starts fresh."
          },
          {
            type: "mc",
            question: "Which follow-up is the most helpful?",
            options: [
              "\"Make the tone warmer and add a line thanking them for 5 years as a customer.\"",
              "\"No.\"",
              "\"Wrong.\"",
              "\"Try again.\""
            ],
            answer: 0,
            explain: "Specific feedback tells the AI exactly what to change."
          }
        ]
      },
      {
        id: "u4l2",
        title: "Let AI ask you questions",
        icon: "❓",
        steps: [
          {
            type: "info",
            title: "Flip it around",
            body: "Not sure what details to give? Ask the AI to interview you first.",
            example: "I want to write a job advert for a part-time receptionist. Before you write it, ask me any questions you need answered."
          },
          {
            type: "mc",
            question: "Why ask the AI to ask YOU questions first?",
            options: [
              "It helps you give the details it needs for a better result",
              "It makes the AI work faster",
              "It's required before every prompt",
              "It stops the AI from making any mistakes"
            ],
            answer: 0,
            explain: "It surfaces details you might forget. It doesn't remove the need to check the result."
          },
          {
            type: "order",
            question: "Put this workflow in order:",
            pieces: [
              "Describe your goal",
              "Ask the AI to ask you questions",
              "Answer its questions",
              "Review the result and give feedback"
            ],
            explain: "This works well for anything you're unsure how to brief: plans, adverts, policies."
          },
          {
            type: "tf",
            question: "Breaking a big task into smaller steps usually gives better results than one giant prompt.",
            answer: true,
            explain: "E.g. first an outline, then each section, then a final polish."
          }
        ]
      }
    ]
  },
  {
    id: "u5",
    title: "Unit 5: Using AI safely",
    description: "Protect your business, your customers and yourself.",
    lessons: [
      {
        id: "u5l1",
        title: "Privacy & confidential data",
        icon: "🔒",
        steps: [
          {
            type: "info",
            title: "Think before you paste",
            body: "Whatever you type may be stored by the AI company and, depending on settings and plan, may be used to train future models.<br><br><b>Don't paste:</b> passwords, bank or card details, customers' personal data, health records or confidential contracts, unless your company has approved a business plan for that tool.<br><br>Remove or replace names and numbers when you can."
          },
          {
            type: "mc",
            question: "Which is SAFEST to paste into a free public AI tool?",
            options: [
              "A generic draft blog post about spring cleaning tips",
              "A spreadsheet of customer names, emails and phone numbers",
              "Your online banking password",
              "An employee's medical notes"
            ],
            answer: 0,
            explain: "Non-sensitive, public-facing content is fine. Personal and confidential data should stay out."
          },
          {
            type: "mc",
            question: "You want help with a customer complaint that includes their full name and address. What should you do?",
            options: [
              "Replace their details with placeholders like [Customer] before pasting",
              "Paste everything; it's fine",
              "Post it on social media instead",
              "Ask the AI to keep it secret"
            ],
            answer: 0,
            explain: "Anonymising keeps the useful part of the task without sharing personal data."
          },
          {
            type: "tf",
            question: "Business or enterprise AI plans often come with stronger privacy controls than free personal accounts.",
            answer: true,
            explain: "Many providers offer business plans where your data isn't used for training. Check the provider's terms and your company policy."
          }
        ]
      },
      {
        id: "u5l2",
        title: "Check, credit & be fair",
        icon: "⚖️",
        steps: [
          {
            type: "info",
            title: "You stay responsible",
            body: "AI can reflect biases from the data it learned from, and it can be wrong. Use it as an assistant, not the final decision-maker, especially for <b>hiring, money, legal or health</b> decisions.<br><br>Be honest when content is AI-generated where it matters."
          },
          {
            type: "mc",
            question: "Is it a good idea to let AI decide on its own which job applicants to reject?",
            options: [
              "No. Use it to help, but a person should make and check the decision",
              "Yes, AI is always neutral",
              "Yes, it saves the most time",
              "Only on Fridays"
            ],
            answer: 0,
            explain: "AI can carry hidden biases. High-stakes decisions about people need human judgement, and in many countries the law requires it."
          },
          {
            type: "tf",
            question: "If AI wrote it, you are not responsible for mistakes in it.",
            answer: false,
            explain: "If you publish or send it, you are responsible for it."
          },
          {
            type: "mc",
            question: "Which is a good habit with AI-generated content?",
            options: [
              "Fact-check claims, review tone, and edit before publishing",
              "Publish immediately to save time",
              "Remove all your own input",
              "Copy competitors' content and ask AI to reword it"
            ],
            answer: 0,
            explain: "Review, check and edit. Rewording someone else's content can still be copyright infringement."
          }
        ]
      }
    ]
  },
    {
      id: "u6",
      title: "Unit 6: Choosing the right AI tool",
      description: "Different tools and models are built for different jobs. Learn which to use, and why.",
      lessons: [
        {
          id: "u6l1",
          title: "Different tools, different jobs",
          icon: "🧰",
          steps: [
            {
              type: "info",
              title: "The main types of AI tool",
              body: "<b>Chat assistants</b> (ChatGPT, Claude, Gemini, Microsoft Copilot): writing, explaining, brainstorming, planning.<br><br><b>Search-first tools</b> (e.g. Perplexity, or a chat assistant with web search turned on): up-to-date facts with links to sources.<br><br><b>Built-in assistants</b> (Copilot in Word and Outlook, Gemini in Gmail and Docs): work directly on the files you already have.<br><br><b>Image generators</b>: create pictures from a description.<br><br><b>Meeting note-takers</b> (e.g. Otter, Fireflies, Granola): record calls and write the notes.<br><br><b>Why it matters:</b> each tool is connected to different things (the web, your files, your calendar), and that connection often matters more than how clever the AI is."
            },
            {
              type: "mc",
              question: "You want this morning's news about a train strike, with links to sources. Which tool is best?",
              options: [
                "A search-first tool, or a chat assistant with web search turned on",
                "An image generator",
                "A chat assistant with web search turned off",
                "A meeting note-taker"
              ],
              answer: 0,
              explain: "Why: AI models only know what they learned up to a cut-off date. Search tools fetch today's web pages and show you the links, so you can check them."
            },
            {
              type: "mc",
              question: "Your office runs on Outlook, Word and Teams. Which AI is the most natural fit?",
              options: [
                "Microsoft Copilot",
                "An image generator",
                "A tool that doesn't connect to Microsoft apps",
                "Whichever has the nicest logo"
              ],
              answer: 0,
              explain: "Why: Copilot works inside the Microsoft apps and can use the emails and documents already there, so there's less copying and pasting."
            },
            {
              type: "mc",
              question: "You want automatic notes and action points from your video calls. What should you use?",
              options: [
                "An AI meeting note-taker",
                "A regular chat assistant, by describing the meeting from memory",
                "An image generator",
                "A spell checker"
              ],
              answer: 0,
              explain: "Why: a note-taker listens to and transcribes the actual call. A chat assistant can't hear your meeting. Tell people on the call that it's being recorded."
            },
            {
              type: "tf",
              question: "One AI tool is the best at everything.",
              answer: false,
              explain: "Why: tools differ in features (web search, file access, images, voice) and in what they connect to. Pick the one that fits the job."
            }
          ]
        },
        {
          id: "u6l2",
          title: "Fast models vs smart models",
          icon: "⚡",
          steps: [
            {
              type: "info",
              title: "Many apps let you choose a model",
              body: "Inside one app there are often several <b>models</b> (the AI \"brain\" behind it):<br><br><b>Fast / lighter models</b>: quick replies, often free or unlimited. Good for simple jobs.<br><b>More powerful models</b>: slower and often limited on free plans. Better for complex jobs.<br><b>Thinking / reasoning mode</b>: the model works through the problem step by step before answering. Best for tricky problems.<br><br><b>Why:</b> more powerful models do much more computing for every word they write, which takes longer and costs the provider more."
            },
            {
              type: "mc",
              question: "You want to fix the spelling in a two-line message. Which model?",
              options: [
                "A fast, lighter model",
                "The most powerful model with thinking mode on",
                "It must be done by hand",
                "An image model"
              ],
              answer: 0,
              explain: "Why: it's a simple task. A bigger model won't do it noticeably better; it will just be slower and use up your limits."
            },
            {
              type: "mc",
              question: "You want help comparing three job offers on salary, pension, commute and career growth. Which model?",
              options: [
                "A more powerful model, ideally with thinking mode",
                "The fastest model available",
                "A search-only tool",
                "A meeting note-taker"
              ],
              answer: 0,
              explain: "Why: the task has many factors that affect each other. Powerful and thinking models are better at weighing several things at once without missing steps."
            },
            {
              type: "tf",
              question: "Free plans often limit how much you can use the most powerful models.",
              answer: true,
              explain: "Why: powerful models cost more to run, so providers usually limit free use of them and offer more on paid plans."
            },
            {
              type: "mc",
              question: "What's the most reliable way to find which AI tool is best for YOUR task?",
              options: [
                "Try the same prompt in two tools and compare the results",
                "Use whichever one was in the news this week",
                "Pick the most expensive",
                "Ask a friend who uses AI for something different"
              ],
              answer: 0,
              explain: "Why: AI tools change and leapfrog each other every few months. Testing on your real task beats any ranking."
            }
          ]
        }
      ]
    }
  ]
});
