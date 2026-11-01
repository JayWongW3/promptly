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
              options: [
                "Your business",
                "The AI company",
                "The customer",
                "Nobody"
              ],
              answer: 0,
              explain: "Courts have held businesses responsible for what their chatbots tell customers. Test it and limit what it can promise."
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
            }
          ]
        }
      ]
    }
  ]
});
