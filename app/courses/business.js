/*
  COURSE: Business owners
  See courses/README-question-types.txt for how to write questions.
*/

COURSES.push({
  id: "business",
  icon: "💼",
  title: "AI for Business Owners",
  audience: "Business owners",
  description: "Prompting for business results, AI loops and automation, building a company \"second brain\", and practical uses across your business.",
  units: [
    {
      id: "b1",
      title: "Unit 1: Prompting for business",
      description: "Brief AI like you'd brief a capable new hire.",
      lessons: [
        {
          id: "b1l1",
          title: "The business brief formula",
          icon: "📝",
          steps: [
            {
              type: "info",
              title: "Role, context, task, format, constraints",
              body: "A reliable structure for business prompts:<br><b>Role</b>: who the AI should act as<br><b>Context</b>: your business, customer and situation<br><b>Task</b>: exactly what you want<br><b>Format</b>: how the output should look<br><b>Constraints</b>: length, tone, things to avoid",
              example: "Role: You're an experienced B2B copywriter.\nContext: We sell bookkeeping software to UK tradespeople. Our customers hate jargon.\nTask: Write a cold email introducing our free 30-day trial.\nFormat: Subject line + email body.\nConstraints: Under 120 words. No buzzwords. One clear call to action."
            },
            {
              type: "order",
              question: "Put the business brief in the standard order:",
              pieces: ["Role", "Context", "Task", "Format", "Constraints"],
              explain: "This order mirrors how you'd brief a person: who they are, the background, the job, then the details."
            },
            {
              type: "better",
              question: "Which prompt will get a usable sales email?",
              options: [
                "Write a sales email for my business.",
                "You're a sales copywriter. We're a commercial cleaning company in Bristol targeting dental practices. Write a short email offering a free deep clean for new contracts. Friendly, professional, under 100 words, one call to action: book a 10-minute call."
              ],
              answer: 1,
              explain: "Industry, target customer, offer, tone, length and call to action all make the output usable straight away."
            },
            {
              type: "mc",
              question: "Which part of the brief tells the AI \"under 150 words, no jargon\"?",
              options: ["Constraints", "Role", "Context", "Task"],
              answer: 0,
              explain: "Constraints set limits: length, tone and things to avoid."
            },
            {
              type: "mc",
              question: "In the brief formula, what does \"Context\" cover?",
              options: ["Your business, customer and situation", "The word count", "The AI's name", "Your password"],
              answer: 0,
              explain: "Context is the background a new hire would need to do the job well."
            },
            {
              type: "better",
              question: "Which brief is better for a price-increase email?",
              options: [
                "You're our customer success lead. We run a 12-person IT support firm. Write a short, respectful email telling clients prices rise 5% from 1 April, explaining why and thanking them.",
                "Write a price rise email."
              ],
              answer: 0,
              explain: "Role, context, task and tone let the AI handle a sensitive message well."
            },
            {
              type: "tf",
              question: "You don't have to use every part of the formula for small, simple tasks.",
              answer: true,
              explain: "Use as much of the brief as the task needs. A quick rewrite rarely needs a role."
            },
            {
              type: "mc",
              question: "Which is an example of a \"Format\" instruction?",
              options: [
                "\"A table with columns: Supplier, Price, Delivery time\"",
                "\"You are a buyer\"",
                "\"We sell furniture\"",
                "\"Find suppliers\""
              ],
              answer: 0,
              explain: "Format says how the output should be laid out."
            },
            {
              type: "mc",
              question: "The output keeps coming back too salesy. Which part of the brief should you adjust?",
              options: [
                "Constraints (tone and words to avoid)",
                "Role only",
                "Nothing; accept it",
                "The company name"
              ],
              answer: 0,
              explain: "Add constraints such as \"no hype, plain language, no exclamation marks\"."
            }
          ]
        },
        {
          id: "b1l2",
          title: "Reusable prompt templates",
          icon: "📑",
          steps: [
            {
              type: "info",
              title: "Write it once, use it forever",
              body: "When a prompt works well, save it as a <b>template</b> with blanks to fill in. Store templates in a shared document or as projects/custom assistants so your whole team gets consistent results.",
              example: "QUOTE FOLLOW-UP TEMPLATE\nYou're our account manager. Write a follow-up email for a quote we sent.\nCustomer name: [NAME]\nQuote for: [SERVICE]\nAmount: [£]\nSent: [DATE]\nTone: helpful, not pushy. Under 90 words. Offer a quick call."
            },
            {
              type: "mc",
              question: "What's the main business benefit of shared prompt templates?",
              options: [
                "Consistent quality across the team without everyone learning prompting from scratch",
                "They make the AI free to use",
                "They stop the AI from ever making mistakes",
                "They replace the need to review output"
              ],
              answer: 0,
              explain: "Templates capture what works so every employee gets similar results. Output still needs checking."
            },
            {
              type: "tf",
              question: "Square-bracket placeholders like [CUSTOMER NAME] make templates easier for staff to fill in correctly.",
              answer: true,
              explain: "Clear placeholders show exactly what to replace."
            },
            {
              type: "mc",
              question: "Where is the best place to keep your team's templates?",
              options: [
                "A shared, organised location (shared doc, wiki or team AI workspace)",
                "Each person's personal chat history",
                "Printed on paper in a drawer",
                "Nowhere; everyone should improvise"
              ],
              answer: 0,
              explain: "A shared, searchable location keeps templates up to date and easy to find."
            },
            {
              type: "mc",
              question: "What should a good prompt template include?",
              options: [
                "Fixed instructions plus clear blanks to fill in",
                "Only blanks",
                "Only the AI's name",
                "Customer passwords"
              ],
              answer: 0,
              explain: "The fixed part keeps quality consistent; the blanks make it reusable."
            },
            {
              type: "tf",
              question: "Templates should be reviewed and updated when your products, prices or policies change.",
              answer: true,
              explain: "Out-of-date templates produce out-of-date output."
            },
            {
              type: "better",
              question: "Which template line is better?",
              options: [
                "Product: [PRODUCT NAME]. Price: [£]. Main benefit for the customer: [BENEFIT].",
                "Put product stuff here."
              ],
              answer: 0,
              explain: "Clear labels tell staff exactly what to fill in."
            },
            {
              type: "mc",
              question: "Who should test a new template before it's shared with the team?",
              options: ["A couple of people who'll actually use it", "Nobody", "Only the CEO", "A random customer"],
              answer: 0,
              explain: "Real users spot gaps and confusing blanks quickly."
            },
            {
              type: "mc",
              question: "Which task is a great candidate for a template?",
              options: [
                "Weekly client update emails",
                "A one-off legal dispute",
                "Your personal wedding speech",
                "A task you do once a year with no pattern"
              ],
              answer: 0,
              explain: "Frequent, repeatable tasks benefit most."
            }
          ]
        }
      ]
    },
    {
      id: "b2",
      title: "Unit 2: Loops",
      description: "Improvement loops, automation loops and AI agents.",
      lessons: [
        {
          id: "b2l1",
          title: "The improvement loop",
          icon: "🔁",
          steps: [
            {
              type: "info",
              title: "Draft → critique → improve → repeat",
              body: "A <b>loop</b> means repeating a cycle until the result is good enough. The simplest is the <b>improvement loop</b>:<br>1. AI drafts<br>2. AI (or you) critiques against clear criteria<br>3. AI improves<br>4. Repeat until it meets the bar",
              example: "Critique this landing page copy against these criteria: clear in 5 seconds, speaks to a busy café owner, one call to action. Score each 1–10, then rewrite to score 9+ on all three."
            },
            {
              type: "order",
              question: "Put the improvement loop in order:",
              pieces: ["Draft", "Critique against criteria", "Improve", "Check if it meets the bar"],
              explain: "If it doesn't meet the bar, go round the loop again."
            },
            {
              type: "mc",
              question: "What makes an improvement loop work well?",
              options: [
                "Clear criteria for what \"good\" looks like",
                "Running it as many times as possible",
                "Never reading the output",
                "Using vague feedback like \"better\""
              ],
              answer: 0,
              explain: "Without criteria, the AI doesn't know what to improve toward."
            },
            {
              type: "tf",
              question: "You should decide when to stop the loop; endless rounds don't always make it better.",
              answer: true,
              explain: "After 2–3 rounds, returns usually diminish. Stop when it meets your criteria."
            },
            {
              type: "mc",
              question: "Which is a clear quality criterion?",
              options: [
                "\"A new customer understands the offer in one read\"",
                "\"Make it good\"",
                "\"Better\"",
                "\"Nicer\""
              ],
              answer: 0,
              explain: "Criteria you can check make the critique step useful."
            },
            {
              type: "tf",
              question: "You can ask the AI to score its own draft against your criteria before rewriting.",
              answer: true,
              explain: "Scoring first shows exactly where it falls short."
            },
            {
              type: "order",
              question: "Put this proposal-improvement loop in order:",
              pieces: [
                "Ask for a first draft of the proposal",
                "Ask it to score the draft on clarity, price justification and next steps",
                "Ask for a rewrite fixing the lowest score",
                "Read it yourself and decide if it's ready"
              ],
              explain: "Draft, score, fix the weakest part, then your judgement."
            },
            {
              type: "mc",
              question: "You've been round the loop 6 times and it's barely changing. What should you do?",
              options: [
                "Stop and finish it yourself, or change the criteria",
                "Keep going forever",
                "Start a new loop with no criteria",
                "Send the first draft instead"
              ],
              answer: 0,
              explain: "Diminishing returns mean the loop has done its job."
            },
            {
              type: "mc",
              question: "Who should define what \"good\" looks like?",
              options: ["You, based on your customers and goals", "The AI only", "Your competitors", "Nobody"],
              answer: 0,
              explain: "The AI can help, but your business knowledge sets the bar."
            }
          ]
        },
        {
          id: "b2l2",
          title: "Automation loops",
          icon: "⏰",
          steps: [
            {
              type: "info",
              title: "AI that runs on a schedule or trigger",
              body: "Automation tools (such as Zapier, Make, n8n or Microsoft Power Automate) connect your apps and can add an AI step. They run a <b>loop</b> on a trigger or schedule without you.<br><br><b>Trigger</b> → <b>AI step</b> → <b>Action</b>",
              example: "Trigger: new email arrives in support@\nAI step: classify as Billing / Technical / Sales / Other and draft a reply\nAction: add to the right team's queue with the draft attached"
            },
            {
              type: "order",
              question: "Order the parts of this automation:",
              pieces: [
                "Trigger: a new online review is posted",
                "AI step: judge if it's positive or negative and draft a reply",
                "Action: send the draft to the manager for approval"
              ],
              explain: "Trigger, then AI step, then action. Keeping a human approval step is wise for anything public."
            },
            {
              type: "mc",
              question: "Which task is the BEST first automation for a small business?",
              options: [
                "Sorting incoming enquiries and drafting replies for a human to approve",
                "Letting AI send refunds automatically with no checks",
                "Letting AI fire staff based on timesheets",
                "Letting AI sign contracts"
              ],
              answer: 0,
              explain: "Start with repetitive, low-risk tasks where a person still approves the final step."
            },
            {
              type: "tf",
              question: "\"Human in the loop\" means a person reviews or approves the AI's work before it takes effect.",
              answer: true,
              explain: "This is the safest way to automate anything customer-facing or financial."
            },
            {
              type: "mc",
              question: "In an automation, what is a \"trigger\"?",
              options: [
                "The event that starts it, like a new email or form",
                "The final action",
                "The AI's reply",
                "A billing alert"
              ],
              answer: 0,
              explain: "Triggers kick off the workflow automatically."
            },
            {
              type: "tf",
              question: "You can test an automation on a few sample items before switching it on for everything.",
              answer: true,
              explain: "Testing catches mistakes before they affect customers."
            },
            {
              type: "better",
              question: "Which automation idea is safer to start with?",
              options: [
                "New invoice in the inbox → AI extracts supplier, amount and due date → adds a row to a spreadsheet for review",
                "AI reads invoices and pays them automatically with no checks"
              ],
              answer: 0,
              explain: "Start with low-risk steps and keep a person reviewing money."
            },
            {
              type: "mc",
              question: "What should you check regularly once an automation is running?",
              options: [
                "A sample of its outputs and any errors",
                "Nothing; it runs itself",
                "Only the cost",
                "The logo"
              ],
              answer: 0,
              explain: "Spot-checks catch drift and edge cases."
            },
            {
              type: "mc",
              question: "Which tool type connects your apps and adds AI steps without coding?",
              options: [
                "Automation platforms like Zapier, Make or Power Automate",
                "A word processor",
                "A calculator",
                "A screen saver"
              ],
              answer: 0,
              explain: "These platforms link triggers, AI and actions across your apps."
            }
          ]
        },
        {
          id: "b2l3",
          title: "AI agents",
          icon: "🕹️",
          steps: [
            {
              type: "info",
              title: "Agents: AI that works in a loop by itself",
              body: "An <b>AI agent</b> is given a goal and tools (web search, email, spreadsheets, your software). It then loops:<br><b>Plan → Act → Check the result → Decide the next step</b><br>…until the goal is done.<br><br>Agents are powerful but can make mistakes at each step, so give them <b>limited permissions</b> and <b>check their work</b>."
            },
            {
              type: "order",
              question: "Put the agent loop in order:",
              pieces: ["Plan", "Act", "Check the result", "Decide the next step"],
              explain: "The agent repeats this cycle until it reaches the goal or gets stuck."
            },
            {
              type: "mc",
              question: "What's the main difference between a chatbot and an agent?",
              options: [
                "An agent can take actions with tools and keep going over many steps toward a goal",
                "An agent is always smarter",
                "Chatbots can't write text",
                "There is no difference"
              ],
              answer: 0,
              explain: "Agents act (search, click, send, update) in a loop, not just reply once."
            },
            {
              type: "mc",
              question: "You're trialling an agent to update your CRM. What's the safest setup?",
              options: [
                "Give it only the access it needs, start with a test copy, and review its changes",
                "Give it full admin access to everything",
                "Let it run unsupervised on live data from day one",
                "Share your personal password with it"
              ],
              answer: 0,
              explain: "Least access, test first, review. The same rules you'd use for a new contractor."
            },
            {
              type: "tf",
              question: "An AI agent can make a mistake at any step, and errors can build up over many steps.",
              answer: true,
              explain: "That's why limited access and reviews matter more for agents."
            },
            {
              type: "mc",
              question: "Which is a sensible first task for an AI agent?",
              options: [
                "Researching 10 potential suppliers and putting findings in a spreadsheet",
                "Signing a contract on your behalf",
                "Moving money between accounts",
                "Firing a staff member"
              ],
              answer: 0,
              explain: "Research tasks are useful and low risk; actions with money or people are not."
            },
            {
              type: "mc",
              question: "What does \"least privilege\" mean for an agent?",
              options: [
                "It gets only the access it needs for the task",
                "It gets admin access to everything",
                "It can't do anything",
                "It works only at night"
              ],
              answer: 0,
              explain: "Smaller access means smaller damage if something goes wrong."
            },
            {
              type: "better",
              question: "Which instruction to an agent is safer?",
              options: [
                "Find 5 venues for our team day under £1,000 and list them with prices. Don't book or contact anyone.",
                "Sort out our team day."
              ],
              answer: 0,
              explain: "A clear goal, budget and a boundary on actions keep the agent in check."
            },
            {
              type: "mc",
              question: "An agent asks for your confirmation before sending an email. What should you do?",
              options: [
                "Read the email before approving",
                "Always approve without reading",
                "Turn confirmations off",
                "Ignore it forever"
              ],
              answer: 0,
              explain: "Confirmation steps only help if you actually check."
            }
          ]
        }
      ]
    },
    {
      id: "b3",
      title: "Unit 3: Build a second brain",
      description: "Turn your business knowledge into something AI can use.",
      lessons: [
        {
          id: "b3l1",
          title: "What is a second brain?",
          icon: "🧠",
          steps: [
            {
              type: "info",
              title: "Your business knowledge, in one place",
              body: "A <b>second brain</b> is an organised, searchable store of what you and your business know: processes, decisions, client notes, pricing, templates, lessons learned.<br><br>Connected to AI, it lets you ask questions like <i>\"What did we agree with Client X last spring?\"</i> or <i>\"Draft an onboarding guide from our processes.\"</i>"
            },
            {
              type: "mc",
              question: "Why does a second brain make AI more useful for your business?",
              options: [
                "The AI can answer using YOUR information, not just general knowledge",
                "It makes the AI run faster",
                "It means you don't need to back up files",
                "It replaces your accounting software"
              ],
              answer: 0,
              explain: "AI only knows what you give it. A second brain gives it your business context."
            },
            {
              type: "mc",
              question: "Which is a good thing to put in a business second brain?",
              options: [
                "Step-by-step processes, like how we onboard a new client",
                "Staff passwords",
                "Customers' card details",
                "Random screenshots with no labels"
              ],
              answer: 0,
              explain: "Processes, decisions and know-how are valuable. Secrets and payment data are not for a shared knowledge base."
            },
            {
              type: "tf",
              question: "A second brain is mainly useful once you're too busy to remember everything, or when you want others to work without asking you.",
              answer: true,
              explain: "It gets knowledge out of your head so the business doesn't depend on your memory."
            },
            {
              type: "mc",
              question: "Which is an example of business knowledge worth capturing?",
              options: [
                "Why you chose your current supplier and the terms agreed",
                "Today's weather",
                "A random meme",
                "Your staff's passwords"
              ],
              answer: 0,
              explain: "Decisions and their reasons are easily forgotten and valuable later."
            },
            {
              type: "tf",
              question: "A second brain helps new staff learn how things are done without asking you every time.",
              answer: true,
              explain: "Written processes and decisions reduce the business's dependence on your memory."
            },
            {
              type: "mc",
              question: "What's the biggest risk of keeping all know-how in your head?",
              options: [
                "The business struggles when you're away or busy",
                "You'll forget your name",
                "Computers break",
                "None"
              ],
              answer: 0,
              explain: "Capturing knowledge makes the business resilient."
            },
            {
              type: "mc",
              question: "Which is a sensible structure for a second brain?",
              options: [
                "Projects, Areas, Resources, Archive",
                "One giant folder for everything",
                "Folders named after weekdays",
                "No structure at all"
              ],
              answer: 0,
              explain: "A simple, consistent structure makes things findable."
            },
            {
              type: "mc",
              question: "How often should you tidy your second brain?",
              options: [
                "Regularly, such as monthly, archiving old items",
                "Never",
                "Every hour",
                "Only when it breaks"
              ],
              answer: 0,
              explain: "Regular tidying keeps it accurate and useful for you and the AI."
            }
          ]
        },
        {
          id: "b3l2",
          title: "Capture, organise, use",
          icon: "📥",
          steps: [
            {
              type: "info",
              title: "The four steps",
              body: "<b>1. Capture</b>: save useful things as they happen (meeting notes, decisions, good emails)<br><b>2. Organise</b>: put them in a simple structure: Projects, Areas, Resources, Archive<br><b>3. Distil</b>: summarise to the key points (AI is great at this)<br><b>4. Use</b>: ask AI questions over it and create new work from it<br><br>Common tools: Notion, Obsidian, Google Drive or SharePoint, plus an AI project with files uploaded."
            },
            {
              type: "order",
              question: "Put the second-brain steps in order:",
              pieces: ["Capture", "Organise", "Distil", "Use"],
              explain: "Capture first. Don't worry about perfect organisation on day one."
            },
            {
              type: "mc",
              question: "You just finished a client call. What's the second-brain habit?",
              options: [
                "Ask AI to turn your notes into a summary with decisions and actions, then save it to the client's folder",
                "Try to remember it",
                "Write notes on a sticky note",
                "Record nothing; it'll be in your email somewhere"
              ],
              answer: 0,
              explain: "Capture plus an AI summary takes 2 minutes and makes it findable forever."
            },
            {
              type: "mc",
              question: "What does \"distil\" mean here?",
              options: [
                "Reduce a long note to its key points so it's quick to use later",
                "Delete old notes",
                "Translate notes into another language",
                "Print everything out"
              ],
              answer: 0,
              explain: "Short, clear summaries are faster for you and give the AI better material."
            },
            {
              type: "mc",
              question: "Which capture habit is easiest to keep?",
              options: [
                "A 2-minute AI summary saved after each important call",
                "Writing a full report after every call",
                "Recording nothing",
                "Memorising everything"
              ],
              answer: 0,
              explain: "Small, quick habits are the ones that last."
            },
            {
              type: "tf",
              question: "Voice notes are a fast way to capture ideas, and AI can turn them into tidy notes.",
              answer: true,
              explain: "Speak while it's fresh, then let AI structure it."
            },
            {
              type: "order",
              question: "Put this client-meeting habit in order:",
              pieces: [
                "Record or jot notes during the meeting",
                "Ask AI for decisions, actions and owners",
                "Save it in the client's folder",
                "Use it to prepare for the next meeting"
              ],
              explain: "Capture, distil, organise, then use."
            },
            {
              type: "mc",
              question: "What should a good meeting summary include?",
              options: ["Decisions, actions, owners and deadlines", "Every word said", "Only the date", "The weather"],
              answer: 0,
              explain: "That's what people need to act on."
            },
            {
              type: "mc",
              question: "Where should a captured note go so it's easy to find later?",
              options: [
                "In a clearly named folder for that client or project",
                "Your desktop",
                "A random email draft",
                "Nowhere"
              ],
              answer: 0,
              explain: "Consistent places make retrieval easy for you and the AI."
            }
          ]
        },
        {
          id: "b3l3",
          title: "Connect it to AI",
          icon: "🔌",
          steps: [
            {
              type: "info",
              title: "Ways to give AI your knowledge",
              body: "From simplest to most advanced:<br><b>1. Upload files</b> into an AI project<br><b>2. Connect apps</b>: many AI tools connect directly to Google Drive, Notion, SharePoint, Slack or email<br><b>3. Custom assistant</b>: a developer builds a tool that searches your documents (called <b>RAG</b>, retrieval-augmented generation)<br><br>Start with option 1 and move up only when you need to."
            },
            {
              type: "mc",
              question: "What's the simplest way to start using your documents with AI today?",
              options: [
                "Create a project in your AI app and upload your key documents",
                "Hire a developer to build a custom system",
                "Retype everything into a chat",
                "Wait for better technology"
              ],
              answer: 0,
              explain: "Uploading files to a project takes minutes and needs no technical skills."
            },
            {
              type: "tf",
              question: "If your knowledge base is out of date, the AI's answers based on it will be out of date too.",
              answer: true,
              explain: "Garbage in, garbage out. Schedule a regular tidy-up and archive old material."
            },
            {
              type: "mc",
              question: "Before connecting your company Drive to an AI tool, what should you check?",
              options: [
                "The tool's data and privacy terms, and who will be able to access what",
                "Only the price",
                "Nothing, connections are always safe",
                "Whether the logo matches your brand"
              ],
              answer: 0,
              explain: "Check how data is stored and used, and make sure staff only see what they're allowed to."
            },
            {
              type: "mc",
              question: "What does RAG mean in simple terms?",
              options: [
                "The AI looks up your documents first, then answers using them",
                "A cleaning cloth",
                "A type of spreadsheet",
                "A file format"
              ],
              answer: 0,
              explain: "Retrieval-augmented generation grounds answers in your own information."
            },
            {
              type: "tf",
              question: "Connecting AI to your company drive can let it see files staff shouldn't, if permissions aren't set up properly.",
              answer: true,
              explain: "Check sharing permissions before connecting so the AI only sees what each person should."
            },
            {
              type: "better",
              question: "Which question will get a better answer from your second brain?",
              options: [
                "Using our onboarding docs, list the steps for setting up a new client, with who does each step.",
                "How do we do stuff?"
              ],
              answer: 0,
              explain: "Pointing to the source and asking for a clear format gets a grounded answer."
            },
            {
              type: "mc",
              question: "The AI's answer from your documents seems wrong. What's the likely cause?",
              options: [
                "An outdated or conflicting document",
                "The AI is always wrong",
                "Your screen brightness",
                "The weather"
              ],
              answer: 0,
              explain: "Fix the source documents and the answers improve."
            },
            {
              type: "mc",
              question: "What's a sensible order to grow your setup?",
              options: [
                "Upload files to a project, then connectors, then a custom system if needed",
                "Start with a custom system",
                "Skip straight to hiring developers",
                "Do nothing"
              ],
              answer: 0,
              explain: "Start simple and only add complexity when it's justified."
            }
          ]
        }
      ]
    },
    {
      id: "b4",
      title: "Unit 4: AI across your business",
      description: "Practical uses in marketing, sales, customer service, operations and finance.",
      lessons: [
        {
          id: "b4l1",
          title: "Marketing & sales",
          icon: "📣",
          steps: [
            {
              type: "info",
              title: "Where AI helps most",
              body: "• Content drafts: social posts, blogs, newsletters, ads<br>• Repurposing: turn one blog post into 10 social posts<br>• Customer research: summarise reviews and survey answers into themes<br>• Sales: research prospects, personalise outreach, prepare call notes<br>• Proposals: first drafts from your templates"
            },
            {
              type: "mc",
              question: "You have 300 customer reviews. What's a high-value AI task?",
              options: [
                "Summarise the top 5 praises and top 5 complaints with example quotes",
                "Write fake 5-star reviews",
                "Delete the negative ones",
                "Reply to each with the same message"
              ],
              answer: 0,
              explain: "Turning lots of feedback into clear themes helps you decide what to fix and what to promote."
            },
            {
              type: "mc",
              question: "Which is a smart \"repurposing\" prompt?",
              options: [
                "\"Turn this blog post into 5 LinkedIn posts, 1 newsletter intro and 3 short video scripts.\"",
                "\"Write a blog.\"",
                "\"Copy my competitor's blog.\"",
                "\"Make it viral.\""
              ],
              answer: 0,
              explain: "One piece of work becomes many, saving hours each week."
            },
            {
              type: "tf",
              question: "Using AI to write fake customer reviews is a harmless marketing shortcut.",
              answer: false,
              explain: "Fake reviews are misleading to customers and illegal in many countries (including the UK and US)."
            },
            {
              type: "mc",
              question: "Which is a strong AI task for sales prospecting?",
              options: [
                "Summarising a prospect's public website into talking points for a call",
                "Sending 1,000 identical cold emails",
                "Inventing fake case studies",
                "Guessing their budget"
              ],
              answer: 0,
              explain: "Research and preparation save time and make calls more relevant."
            },
            {
              type: "tf",
              question: "AI-written marketing should still be checked for accuracy and brand tone before it's published.",
              answer: true,
              explain: "You're responsible for what you publish."
            },
            {
              type: "better",
              question: "Which prompt makes a better ad?",
              options: [
                "Write 3 Facebook ad versions for our 20% off spring boiler service. Audience: homeowners 35–60 in Leeds. Under 40 words, one clear call to action.",
                "Write an ad."
              ],
              answer: 0,
              explain: "Offer, audience, location, length and call to action make it ready to test."
            },
            {
              type: "mc",
              question: "What's A/B testing with AI-written ads?",
              options: [
                "Running two versions to see which performs better",
                "Writing ads in two languages",
                "Using two AI tools at once",
                "Sending ads twice"
              ],
              answer: 0,
              explain: "AI makes variations quickly; testing shows which works."
            },
            {
              type: "mc",
              question: "Which use of AI in marketing could breach rules?",
              options: [
                "Making up statistics or customer quotes",
                "Drafting a newsletter",
                "Suggesting subject lines",
                "Repurposing a blog post"
              ],
              answer: 0,
              explain: "Misleading claims can break advertising rules and damage trust."
            }
          ]
        },
        {
          id: "b4l2",
          title: "Customer service",
          icon: "🎧",
          steps: [
            {
              type: "info",
              title: "Faster, more consistent support",
              body: "• Draft replies using your policies and tone<br>• Build an FAQ from past emails<br>• Sort and prioritise incoming messages<br>• Website chatbots trained on your help content<br><br>Always give customers a clear way to reach a human."
            },
            {
              type: "mc",
              question: "What should you give the AI before it drafts customer replies?",
              options: [
                "Your policies (refunds, delivery, warranty) and examples of good replies",
                "Nothing; it knows your business",
                "Your bank details",
                "A list of difficult customers"
              ],
              answer: 0,
              explain: "Policies keep answers accurate, and example replies keep the tone on-brand."
            },
            {
              type: "tf",
              question: "A website chatbot should always offer an easy way to reach a real person.",
              answer: true,
              explain: "Customers get frustrated when stuck with a bot, and some issues need human judgement."
            },
            {
              type: "mc",
              question: "Your chatbot promises a refund your policy doesn't allow. Who is likely responsible?",
              options: ["Your business", "The AI company", "The customer", "Nobody"],
              answer: 0,
              explain: "Courts have held businesses responsible for what their chatbots tell customers. Test it and limit what it can promise."
            },
            {
              type: "mc",
              question: "What's a good way to build a help-centre FAQ with AI?",
              options: [
                "Give it a sample of real customer questions and ask for the top 10 with answers",
                "Ask it to guess what customers ask",
                "Copy a competitor's FAQ",
                "Skip the FAQ"
              ],
              answer: 0,
              explain: "Real questions make the FAQ relevant."
            },
            {
              type: "tf",
              question: "An AI chatbot should only answer from your approved help content and policies.",
              answer: true,
              explain: "Limiting it to approved content reduces wrong or made-up answers."
            },
            {
              type: "better",
              question: "Which prompt is better for replying to an angry customer?",
              options: [
                "Using our refund policy below, draft a calm, empathetic reply to this customer. Acknowledge the problem, explain the options, and offer a call. [policy] [message]",
                "Reply to this angry person."
              ],
              answer: 0,
              explain: "Policy, tone and structure make the reply accurate and calming."
            },
            {
              type: "mc",
              question: "Which support task should stay with a human?",
              options: [
                "A complaint involving a vulnerable or distressed customer",
                "Tagging tickets by topic",
                "Drafting a reply for review",
                "Summarising a long email thread"
              ],
              answer: 0,
              explain: "Sensitive situations need human judgement and care."
            },
            {
              type: "mc",
              question: "How can AI help a support team improve over time?",
              options: [
                "Summarise common complaints each month so you can fix root causes",
                "Reply to everything automatically",
                "Hide negative feedback",
                "Delete old tickets"
              ],
              answer: 0,
              explain: "Spotting patterns lets you fix problems, not just answer them."
            }
          ]
        },
        {
          id: "b4l3",
          title: "Operations & finance",
          icon: "📈",
          steps: [
            {
              type: "info",
              title: "Behind the scenes",
              body: "• Write SOPs (standard operating procedures) from a voice note or rough notes<br>• Summarise contracts and flag unusual terms (then have a professional check important ones)<br>• Analyse sales spreadsheets and spot trends<br>• Draft job descriptions and interview questions<br>• Meeting notes and action items"
            },
            {
              type: "mc",
              question: "What's a fast way to document a process that only you know?",
              options: [
                "Talk it through in a voice note, then ask AI to turn the transcript into a step-by-step SOP",
                "Hope you never get ill",
                "Ask the AI to guess your process",
                "Write a 50-page manual by hand"
              ],
              answer: 0,
              explain: "Speaking is fast; AI turns it into clean, structured documentation."
            },
            {
              type: "mc",
              question: "AI summarised a supplier contract and says there's no auto-renewal clause. What next?",
              options: [
                "Check the contract yourself (or with a professional) for anything that matters",
                "Sign it immediately",
                "Assume the AI read every word perfectly",
                "Ignore the contract"
              ],
              answer: 0,
              explain: "AI can miss clauses. Use it to speed up review, not to replace it on important documents."
            },
            {
              type: "tf",
              question: "AI-drafted job adverts should be checked for biased or exclusionary language.",
              answer: true,
              explain: "AI can reproduce biases. Check wording like age-coded or gendered terms."
            },
            {
              type: "mc",
              question: "Which finance task suits AI well?",
              options: [
                "Categorising transactions in a spreadsheet for you to check",
                "Filing your tax return with no review",
                "Moving money between accounts",
                "Signing off audited accounts"
              ],
              answer: 0,
              explain: "AI speeds up sorting and analysis; final financial decisions need review."
            },
            {
              type: "tf",
              question: "You can ask AI to turn a confusing supplier contract into a plain-English list of key terms and dates.",
              answer: true,
              explain: "Then check the important points against the original."
            },
            {
              type: "better",
              question: "Which prompt is better for a staff rota?",
              options: [
                "Create a weekly rota for 6 staff covering 8am–8pm, Mon–Sat. Nobody works more than 5 days. Sam can't do Saturdays. Show it as a table.",
                "Make a rota."
              ],
              answer: 0,
              explain: "Hours, rules and exceptions let the AI produce a usable draft."
            },
            {
              type: "mc",
              question: "What's a good use of AI in hiring?",
              options: [
                "Drafting job adverts and interview questions for you to edit",
                "Deciding who to hire on its own",
                "Rejecting candidates by age",
                "Writing fake references"
              ],
              answer: 0,
              explain: "AI helps with preparation; hiring decisions stay with people."
            },
            {
              type: "mc",
              question: "You've written an SOP with AI. What's the final step?",
              options: [
                "Have someone follow it and fix anything unclear",
                "Publish it unread",
                "Keep it secret",
                "Delete the draft"
              ],
              answer: 0,
              explain: "Real-world testing finds gaps in instructions."
            }
          ]
        }
      ]
    },
    {
      id: "b5",
      title: "Unit 5: Rolling out AI safely",
      description: "Policies, training and measuring whether it's worth it.",
      lessons: [
        {
          id: "b5l1",
          title: "Policy, privacy & ROI",
          icon: "🛡️",
          steps: [
            {
              type: "info",
              title: "A simple AI policy",
              body: "Write a one-page AI policy covering:<br>• <b>Approved tools</b> (ideally business plans with data protection)<br>• <b>What not to paste</b>: customer personal data, passwords, confidential info<br>• <b>Human review</b> required before anything goes to customers<br>• <b>Who to ask</b> when unsure<br><br>Then measure: pick a task, time it before and after AI, and track quality."
            },
            {
              type: "mc",
              question: "What is the BEST first step to roll out AI in a small team?",
              options: [
                "Pick approved tools, write a short policy, and train staff on 2–3 real tasks",
                "Ban AI completely",
                "Let everyone use any free tool with no guidance",
                "Replace staff immediately"
              ],
              answer: 0,
              explain: "Clear rules plus hands-on training on real tasks gets results quickly and safely."
            },
            {
              type: "mc",
              question: "How should you measure if AI is worth it?",
              options: [
                "Time a specific task before and after, and check the quality of the output",
                "Count how many times people open the AI app",
                "Ask whether it feels modern",
                "Compare subscription prices only"
              ],
              answer: 0,
              explain: "Time saved and quality maintained on real tasks is the clearest return on investment."
            },
            {
              type: "tf",
              question: "Staff may already be using personal AI accounts for work, so having a clear policy matters even if you haven't \"adopted\" AI.",
              answer: true,
              explain: "Many employees already use AI informally. A policy protects your business and customers' data."
            },
            {
              type: "mc",
              question: "What should an AI policy say about customer data?",
              options: [
                "What can and can't be pasted into AI tools",
                "Nothing",
                "That anything is allowed",
                "Only the office opening hours"
              ],
              answer: 0,
              explain: "Clear data rules protect customers and the business."
            },
            {
              type: "tf",
              question: "Training staff on 2–3 real tasks is usually more effective than a general AI lecture.",
              answer: true,
              explain: "People adopt tools they've used successfully on their own work."
            },
            {
              type: "better",
              question: "Which policy rule is clearer?",
              options: [
                "Don't paste customer names, contact details or payment information into AI tools. Use [Customer] instead.",
                "Be careful with data."
              ],
              answer: 0,
              explain: "Specific examples and an alternative make the rule easy to follow."
            },
            {
              type: "mc",
              question: "Which number best shows AI is paying off?",
              options: [
                "Hours saved on a task each week, with quality maintained",
                "Number of AI apps installed",
                "How often people mention AI",
                "The subscription price"
              ],
              answer: 0,
              explain: "Time saved without a drop in quality is real value."
            },
            {
              type: "mc",
              question: "How often should you review your AI policy?",
              options: [
                "Regularly, such as every 6 months, as tools change",
                "Never",
                "Once every 10 years",
                "Only after a data breach"
              ],
              answer: 0,
              explain: "AI tools change fast, so the policy needs updating too."
            }
          ]
        }
      ]
    },
    {
      id: "b6",
      title: "Unit 6: Choosing your AI tools",
      description: "Which tools and plans suit which business needs, and why.",
      lessons: [
        {
          id: "b6l1",
          title: "Picking an assistant for your team",
          icon: "🏢",
          steps: [
            {
              type: "info",
              title: "Five things to compare",
              body: "<b>1. Fit with your systems</b>: Microsoft 365 → Copilot is built in. Google Workspace → Gemini is built in. Standalone assistants like Claude and ChatGPT offer business plans with connectors to both.<br><b>2. Data protection</b>: business and enterprise plans usually don't train on your data by default, and they add admin controls and single sign-on.<br><b>3. Quality on your tasks</b>: run a trial with real work.<br><b>4. Cost per seat vs time saved.</b><br><b>5. Connectors</b>: can it reach your CRM, Drive, helpdesk and so on?<br><br><b>Why:</b> the \"best\" AI on a leaderboard is worth little if it can't reach your files or your data policy forbids using it."
            },
            {
              type: "mc",
              question: "Your business runs on Gmail, Google Docs and Drive. What's the most natural starting point?",
              options: [
                "Gemini in Google Workspace, or an assistant with a strong Google Drive connector",
                "A tool that can't access Google files",
                "An image generator",
                "Whatever a competitor uses"
              ],
              answer: 0,
              explain: "Why: an assistant that can already see your emails and documents saves copying and pasting, and staff adopt it faster."
            },
            {
              type: "mc",
              question: "Why pay for a business plan instead of letting staff use free personal accounts?",
              options: [
                "Stronger data-protection terms, admin controls and central billing",
                "The AI is always smarter on paid plans",
                "Free accounts can't write emails",
                "There's no difference"
              ],
              answer: 0,
              explain: "Why: on business plans, company and customer data is covered by the provider's business terms, and you control who has access. With personal accounts, you have neither."
            },
            {
              type: "mc",
              question: "What's the fairest way to choose between two AI assistants?",
              options: [
                "A 2-week trial on 3–5 real tasks, using the same prompts, with staff scoring the results",
                "Read one online review",
                "Choose the one with the most features listed",
                "Choose the cheapest without testing"
              ],
              answer: 0,
              explain: "Why: real tasks and the same prompts give a like-for-like comparison, and the people who'll use it judge the quality."
            },
            {
              type: "tf",
              question: "The most expensive plan is always the best value.",
              answer: false,
              explain: "Why: value is time saved compared with cost. Many teams get most of the benefit from a standard business plan."
            },
            {
              type: "mc",
              question: "Which question matters most before buying AI seats for your team?",
              options: [
                "Which tasks will people actually use it for?",
                "Which has the coolest name?",
                "How many emojis does it support?",
                "Is it trending online?"
              ],
              answer: 0,
              explain: "Clear use cases decide which tool and plan you need."
            },
            {
              type: "tf",
              question: "Admin controls let you manage who has access and remove it when someone leaves.",
              answer: true,
              explain: "That's one reason business plans are worth it."
            },
            {
              type: "mc",
              question: "Your team uses both Gmail and Microsoft Excel heavily. What should you check?",
              options: [
                "Whether the assistant connects well to both",
                "Only the price",
                "Only the logo colour",
                "Nothing"
              ],
              answer: 0,
              explain: "Connections to the tools you use daily decide how useful it is."
            },
            {
              type: "mc",
              question: "After a trial, staff loved one tool but it costs more. How should you decide?",
              options: [
                "Compare cost against measured time saved",
                "Pick the cheapest anyway",
                "Pick the most expensive",
                "Flip a coin"
              ],
              answer: 0,
              explain: "Value for money is about results, not price alone."
            }
          ]
        },
        {
          id: "b6l2",
          title: "Specialist tools vs general assistants",
          icon: "🧩",
          steps: [
            {
              type: "info",
              title: "General first, specialist where it pays",
              body: "A general assistant covers most everyday tasks. Specialist tools win when they're built into a workflow you run every day:<br>• <b>Meeting notes</b>: e.g. Fireflies, Granola, Otter<br>• <b>Customer support</b>: the AI built into helpdesks such as Intercom or Zendesk<br>• <b>Design</b>: e.g. Canva's AI features<br>• <b>Automation</b>: Zapier or Make with AI steps<br>• <b>Software</b>: coding tools like Claude Code or GitHub Copilot<br><br><b>Why:</b> specialists are already connected to your data and process, so there's less copying and pasting. The downside is more subscriptions, more logins and more places your data goes."
            },
            {
              type: "mc",
              question: "Your support team answers 200 tickets a day in a helpdesk system. What's the best fit?",
              options: [
                "The helpdesk's built-in AI, or one integrated with it",
                "Copying each ticket into a separate chat app",
                "An image generator",
                "No tools; hire more people first"
              ],
              answer: 0,
              explain: "Why: it can see ticket history and your help articles, and it drafts replies right where the team works. At 200 tickets a day, removing copy-and-paste matters."
            },
            {
              type: "mc",
              question: "You need to write one job advert. Which tool?",
              options: [
                "Your general AI assistant",
                "A new specialist recruitment-AI subscription",
                "A meeting note-taker",
                "A coding agent"
              ],
              answer: 0,
              explain: "Why: it's a one-off writing task. A general assistant does it well, and a new subscription isn't worth it."
            },
            {
              type: "mc",
              question: "What's the main downside of adding lots of specialist AI tools?",
              options: [
                "More costs and logins, and more companies holding your data",
                "They make staff slower",
                "They don't work on computers",
                "There is no downside"
              ],
              answer: 0,
              explain: "Why: each tool is another bill, another login and another data-protection review. Add one only where it clearly pays off."
            },
            {
              type: "order",
              question: "Put a sensible rollout in order:",
              pieces: [
                "Start with one general assistant",
                "Find repetitive, high-volume tasks",
                "Trial a specialist tool for those",
                "Keep it only if it saves measurable time"
              ],
              explain: "Why: you learn what you actually need before paying for extras, and you only keep the tools that prove their value."
            },
            {
              type: "mc",
              question: "When does a specialist meeting note-taker beat a general assistant?",
              options: [
                "When you have many calls each week",
                "For a single call a year",
                "Never",
                "Only for written documents"
              ],
              answer: 0,
              explain: "Specialists pay off when they remove a frequent manual step."
            },
            {
              type: "tf",
              question: "Before adding a specialist tool, check whether your existing assistant can already do the job well enough.",
              answer: true,
              explain: "Avoid paying twice for the same capability."
            },
            {
              type: "better",
              question: "Which way of adding a tool is better?",
              options: [
                "Trial it with 2 people for 2 weeks on one workflow, then decide with numbers",
                "Buy it for the whole company today"
              ],
              answer: 0,
              explain: "A small, measured trial reduces risk and wasted spend."
            },
            {
              type: "mc",
              question: "What should you do with a tool nobody is using after 3 months?",
              options: ["Cancel it", "Keep paying just in case", "Buy more seats", "Hide it from the budget"],
              answer: 0,
              explain: "Unused subscriptions are an easy saving."
            }
          ]
        }
      ]
    }
  ]
});
