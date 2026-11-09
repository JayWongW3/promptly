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
            },
            {
              type: "mc",
              question: "Which of these could you ask an AI assistant to do?",
              options: [
                "Explain a confusing letter from your bank in plain English",
                "Physically post a letter for you",
                "Make a phone call on a landline without any app",
                "Repair your laptop screen"
              ],
              answer: 0,
              explain: "AI assistants work with words, images and files on screen. They can't do physical tasks."
            },
            {
              type: "tf",
              question: "You can talk to most AI assistants by voice as well as by typing.",
              answer: true,
              explain: "Most apps have a microphone or voice mode, handy when your hands are busy, such as while cooking."
            },
            {
              type: "mc",
              question: "What does the AI use to write its reply?",
              options: [
                "Patterns it learned from huge amounts of text",
                "A human typing quickly behind the scenes",
                "A copy of the whole internet saved live",
                "Random words"
              ],
              answer: 0,
              explain: "AI models learn patterns of language during training, then predict a helpful reply word by word."
            },
            {
              type: "mc",
              question: "You don't like the AI's first answer. What can you do?",
              options: [
                "Ask it to try again, or tell it what to change",
                "Nothing; the first answer is final",
                "Pay extra for a second answer",
                "Restart your phone"
              ],
              answer: 0,
              explain: "You can always ask for another version or give feedback. It's a conversation."
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
            },
            {
              type: "mc",
              question: "Which answer from an AI should you double-check most carefully?",
              options: [
                "\"The law says you must pay this fine within 14 days.\"",
                "\"Here are 5 name ideas for your bakery.\"",
                "\"Here's a friendlier version of your email.\"",
                "\"Here's a shopping list for a pasta dinner.\""
              ],
              answer: 0,
              explain: "Legal, medical and financial facts carry real consequences if wrong. Creative suggestions are low risk."
            },
            {
              type: "tf",
              question: "If you ask an AI for a website link, the link might not exist.",
              answer: true,
              explain: "AI can invent realistic-looking links. Click them to check, or ask a tool that searches the web."
            },
            {
              type: "mc",
              question: "What's a good way to reduce made-up answers?",
              options: [
                "Ask it to say \"I'm not sure\" when it doesn't know",
                "Tell it to always sound confident",
                "Ask the same question in capital letters",
                "Ask it to answer as fast as possible"
              ],
              answer: 0,
              explain: "Giving permission to admit uncertainty makes the AI more likely to flag gaps instead of inventing."
            },
            {
              type: "mc",
              question: "An AI tells you a quote came from a famous author. What should you do before using it?",
              options: [
                "Search for the quote from a reliable source",
                "Use it; AI knows all quotes",
                "Change a few words so it's yours",
                "Ask the AI to promise it's real"
              ],
              answer: 0,
              explain: "Misattributed or invented quotes are common. Check before you publish."
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
            },
            {
              type: "mc",
              question: "You ask about something that happened yesterday and the AI has no web search. What's likely?",
              options: [
                "It may not know about it, or give outdated information",
                "It will always know",
                "It will refuse to talk to you again",
                "It will search your email instead"
              ],
              answer: 0,
              explain: "Without web search, the AI only knows what was in its training data, which stops at a cut-off date."
            },
            {
              type: "tf",
              question: "You can paste a document into the chat so the AI can use the information in it.",
              answer: true,
              explain: "Pasting or uploading gives the AI the exact facts it needs for your task."
            },
            {
              type: "mc",
              question: "Which detail would help the AI write a better job advert for your shop?",
              options: [
                "The hours, pay range and what the role involves",
                "Your favourite colour",
                "The weather today",
                "Nothing; it already knows your shop"
              ],
              answer: 0,
              explain: "Specific facts about the job let the AI write an accurate advert instead of a generic one."
            },
            {
              type: "tf",
              question: "When you start a brand-new chat, the AI always remembers everything you told it in older chats.",
              answer: false,
              explain: "Many chats start fresh. Some apps have a memory feature, but don't assume it, and check what it saved."
            },
            {
              type: "mc",
              question: "Why might two people get different answers to the same question?",
              options: [
                "AI replies vary, and each person may give different context",
                "One of them is using a broken AI",
                "AI picks a random person to help",
                "It only works on Mondays"
              ],
              answer: 0,
              explain: "Replies aren't fixed. Wording, context and settings all change the result."
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
            },
            {
              type: "better",
              question: "Which prompt is better?",
              options: ["Suggest 5 healthy dinners for a family of four, under 30 minutes, no nuts.", "Dinner ideas"],
              answer: 0,
              explain: "Number, audience, time limit and allergy all shape a useful answer."
            },
            {
              type: "mc",
              question: "Which of these makes a prompt more specific?",
              options: [
                "Saying who the result is for",
                "Adding \"please\" three times",
                "Writing it all in capitals",
                "Making it as short as possible"
              ],
              answer: 0,
              explain: "The audience changes tone, length and detail, so naming it gets a better fit."
            },
            {
              type: "better",
              question: "Which prompt is better for a thank-you note?",
              options: [
                "Write a warm 3-sentence thank-you note to my neighbour Sue for watering my plants while I was away.",
                "Write a thank-you note."
              ],
              answer: 0,
              explain: "Who, what for and how long turns a generic note into one you can send."
            },
            {
              type: "tf",
              question: "A longer prompt is always better than a shorter one.",
              answer: false,
              explain: "Relevant detail helps; padding doesn't. Add what changes the answer, not filler."
            },
            {
              type: "mc",
              question: "You want a summary of a news article for your 10-year-old. What should you add to the prompt?",
              options: [
                "\"Explain it for a 10-year-old in 5 short sentences.\"",
                "\"Make it long.\"",
                "\"Use lots of jargon.\"",
                "Nothing extra"
              ],
              answer: 0,
              explain: "Naming the reader's age and the length gives the AI a clear target."
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
            },
            {
              type: "mc",
              question: "Which is the most useful context to give when asking for help with a complaint reply?",
              options: [
                "What the customer said and what you can offer",
                "How long you've owned the business",
                "What you had for lunch",
                "Your favourite film"
              ],
              answer: 0,
              explain: "The complaint and your options are exactly what the reply depends on."
            },
            {
              type: "better",
              question: "Which prompt gives better context?",
              options: [
                "I'm a self-employed electrician. A customer says my quote is too high. Help me reply politely and explain what's included.",
                "Reply to a customer."
              ],
              answer: 0,
              explain: "Your job, the situation and your goal let the AI write a reply that fits."
            },
            {
              type: "tf",
              question: "You can tell the AI your goal, such as \"I want to keep this customer happy\", and it will write with that in mind.",
              answer: true,
              explain: "Stating the goal steers tone and content toward what you actually want."
            },
            {
              type: "order",
              question: "Put this party-planning prompt in order:",
              pieces: [
                "I'm planning a 40th birthday party.",
                "There will be 25 guests and a budget of £300.",
                "Suggest a theme, food and 3 activities",
                "in a simple checklist."
              ],
              explain: "Situation and constraints first, then the task and format."
            },
            {
              type: "mc",
              question: "Context can include...",
              options: ["All of these", "Who you are", "Who it's for", "What you've already tried"],
              answer: 0,
              explain: "Background, audience and past attempts all help the AI avoid suggestions that won't work for you."
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
            },
            {
              type: "mc",
              question: "You want a list of steps to set up a new phone. Which format?",
              options: ["A numbered list", "A poem", "A single long paragraph", "A table of prices"],
              answer: 0,
              explain: "Steps that must happen in order are easiest to follow as a numbered list."
            },
            {
              type: "better",
              question: "Which prompt is better for a quick read?",
              options: [
                "Summarise this article in 3 bullet points of under 15 words each.",
                "Summarise this article."
              ],
              answer: 0,
              explain: "A bullet count and word limit make the summary quick to scan."
            },
            {
              type: "tf",
              question: "You can ask the AI to put its answer in a table with columns you choose.",
              answer: true,
              explain: "Say the column names, such as Item, Price, Pros, Cons, and it will lay it out."
            },
            {
              type: "mc",
              question: "You need a reply short enough for a text message. What should you ask?",
              options: [
                "\"Under 30 words, casual tone\"",
                "\"As detailed as possible\"",
                "\"In a table\"",
                "\"With footnotes\""
              ],
              answer: 0,
              explain: "A word limit plus tone fits the format of a text message."
            },
            {
              type: "mc",
              question: "Which request gives a ready-to-use email?",
              options: [
                "\"Write it as an email with a subject line, greeting and sign-off.\"",
                "\"Write something.\"",
                "\"Give me ideas.\"",
                "\"Make it a list of keywords.\""
              ],
              answer: 0,
              explain: "Naming the format and its parts means you can copy and send it straight away."
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
            },
            {
              type: "mc",
              question: "Which role would help most when asking for advice on a CV?",
              options: [
                "\"Act as an experienced recruiter\"",
                "\"Act as a pirate\"",
                "\"Act as a chef\"",
                "\"Act as a weather forecaster\""
              ],
              answer: 0,
              explain: "A recruiter knows what employers look for, so the feedback is more relevant."
            },
            {
              type: "tf",
              question: "Giving the AI an example of the style you want is often more effective than describing the style.",
              answer: true,
              explain: "Showing is clearer than telling. The AI can copy tone, length and structure from an example."
            },
            {
              type: "better",
              question: "Which prompt will better match your brand voice?",
              options: [
                "Here are two of our past posts: [post 1] [post 2]. Write a new post about our summer sale in the same style.",
                "Write a post about our summer sale in our style."
              ],
              answer: 0,
              explain: "The AI can't know \"our style\" unless you show it."
            },
            {
              type: "mc",
              question: "Asking the AI to \"act as a sceptical investor\" is useful for...",
              options: [
                "Finding weaknesses in your business plan",
                "Making your plan sound perfect",
                "Checking your spelling",
                "Translating your plan"
              ],
              answer: 0,
              explain: "A critical role helps you spot problems before real investors do."
            },
            {
              type: "mc",
              question: "What's the main risk of giving the AI a role like \"act as a doctor\"?",
              options: [
                "It still isn't a real doctor, so check important advice with one",
                "It becomes legally qualified",
                "It will refuse to answer",
                "There is no risk at all"
              ],
              answer: 0,
              explain: "A role changes the style and focus of the answer, not the AI's actual qualifications."
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
            },
            {
              type: "mc",
              question: "You have messy notes from a call. What's a good prompt?",
              options: [
                "\"Turn these notes into a clear follow-up email with next steps: [notes]\"",
                "\"Read this.\"",
                "\"Notes.\"",
                "\"Make it longer.\""
              ],
              answer: 0,
              explain: "It says the input, the output and what to include."
            },
            {
              type: "better",
              question: "Which prompt is better for a difficult email?",
              options: [
                "Help me tell a client their project will be 2 weeks late. Be honest, apologise once, and offer a new date of 14 March.",
                "Write a late email."
              ],
              answer: 0,
              explain: "The facts, tone and offer let the AI write something accurate and professional."
            },
            {
              type: "tf",
              question: "You can ask the AI to check your own writing for spelling, grammar and tone.",
              answer: true,
              explain: "Paste your draft and ask for corrections, or ask for a friendlier or more formal version."
            },
            {
              type: "mc",
              question: "The AI wrote your email but used the wrong name for your client. What does this show?",
              options: [
                "Always read AI drafts before sending",
                "AI never makes mistakes with names",
                "You should stop using email",
                "The AI knows your client better"
              ],
              answer: 0,
              explain: "Names, dates and numbers are easy for AI to get wrong. Read everything before it goes out."
            },
            {
              type: "mc",
              question: "Which writing task is AI least suited to doing alone?",
              options: [
                "A heartfelt eulogy that needs your personal memories",
                "Fixing typos",
                "Shortening a paragraph",
                "Making a message more polite"
              ],
              answer: 0,
              explain: "Personal stories need your memories. AI can help you shape them, but can't supply them."
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
            },
            {
              type: "mc",
              question: "You upload a 40-page report. Which request gives the most useful summary?",
              options: [
                "\"Summarise the 5 key findings and what they mean for a small business.\"",
                "\"Summarise.\"",
                "\"Is this long?\"",
                "\"Count the pages.\""
              ],
              answer: 0,
              explain: "Asking for key findings and why they matter makes the summary actionable."
            },
            {
              type: "tf",
              question: "An AI summary can leave out an important detail from the original document.",
              answer: true,
              explain: "Summaries shorten by leaving things out. Check the original for anything you'll act on."
            },
            {
              type: "better",
              question: "Which prompt is better for understanding a contract?",
              options: [
                "Explain this tenancy agreement in plain English and list anything unusual or that could cost me money.",
                "Explain this."
              ],
              answer: 0,
              explain: "Plain English plus a list of risks gives you what you actually need to know."
            },
            {
              type: "mc",
              question: "What's a smart way to check a summary is fair?",
              options: [
                "Ask the AI to quote the parts of the document each point comes from",
                "Trust it without checking",
                "Ask for a shorter summary",
                "Print it out"
              ],
              answer: 0,
              explain: "Quotes let you find and check each point in the original quickly."
            },
            {
              type: "mc",
              question: "When researching a topic, what should you ask for alongside the answer?",
              options: ["Sources you can check", "More emojis", "A longer word count", "A different font"],
              answer: 0,
              explain: "Sources let you verify the information and dig deeper."
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
            },
            {
              type: "mc",
              question: "Which is the best brainstorming prompt?",
              options: [
                "\"Give me 20 ideas for a fundraising event for a primary school, from free to £500.\"",
                "\"Ideas please.\"",
                "\"Events?\"",
                "\"What should I do?\""
              ],
              answer: 0,
              explain: "Quantity, purpose and a budget range give lots of usable ideas."
            },
            {
              type: "tf",
              question: "It's a good idea to ask for more ideas than you need, then pick the best.",
              answer: true,
              explain: "Going wide first gives you more good options to choose from."
            },
            {
              type: "mc",
              question: "The AI's ideas are too expensive. What should you do?",
              options: [
                "Tell it your budget and ask for cheaper ideas",
                "Give up",
                "Pick the most expensive anyway",
                "Ask for the same ideas again"
              ],
              answer: 0,
              explain: "Adding a constraint steers the next round of ideas."
            },
            {
              type: "better",
              question: "Which prompt will give more creative names?",
              options: [
                "Suggest 15 playful names for a dog-walking business in Brighton. Mix puns, local references and simple names.",
                "Name for dog business."
              ],
              answer: 0,
              explain: "Number, style and location prompt more varied, relevant ideas."
            },
            {
              type: "mc",
              question: "Once you've picked a favourite idea, what's a good next step?",
              options: [
                "Ask the AI to turn it into a simple plan with steps",
                "Ask for 100 more ideas",
                "Delete the chat",
                "Ask the AI to choose a different one"
              ],
              answer: 0,
              explain: "Moving from ideas to a plan is where AI saves real time."
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
            },
            {
              type: "mc",
              question: "The AI's answer is too formal. What's the best reply?",
              options: [
                "\"Make it friendlier and more casual, keep the same points.\"",
                "\"Wrong.\"",
                "\"Again.\"",
                "\"No.\""
              ],
              answer: 0,
              explain: "Say what to change and what to keep."
            },
            {
              type: "tf",
              question: "You can ask the AI to change just one part of its answer and leave the rest alone.",
              answer: true,
              explain: "For example: \"Keep everything, but rewrite the last paragraph.\""
            },
            {
              type: "order",
              question: "Put this refining process in order:",
              pieces: [
                "Get a first draft",
                "Say what's missing or wrong",
                "Get an improved version",
                "Check it and repeat if needed"
              ],
              explain: "Each round gets closer to what you want."
            },
            {
              type: "mc",
              question: "Why build on an existing chat rather than starting over?",
              options: [
                "The AI keeps the context you've already given",
                "New chats cost money",
                "Old chats are faster to type in",
                "It's the only way to use AI"
              ],
              answer: 0,
              explain: "Staying in the same chat means you don't have to explain everything again."
            },
            {
              type: "mc",
              question: "When should you start a fresh chat instead?",
              options: [
                "When you switch to a completely different task",
                "After every single message",
                "Never",
                "Only on weekends"
              ],
              answer: 0,
              explain: "A fresh chat avoids old, unrelated context confusing the new task."
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
            },
            {
              type: "better",
              question: "Which prompt is better when you're not sure what details matter?",
              options: [
                "I need a short policy on staff using AI at work. Ask me 5 questions first, then write it.",
                "Write an AI policy."
              ],
              answer: 0,
              explain: "Letting the AI ask questions surfaces details you'd forget to include."
            },
            {
              type: "mc",
              question: "What's a good way to break down \"write my business plan\"?",
              options: [
                "First an outline, then each section one at a time",
                "One giant prompt asking for everything",
                "Ask for the final version only",
                "Don't use AI for this at all"
              ],
              answer: 0,
              explain: "Smaller steps let you check and steer each part."
            },
            {
              type: "tf",
              question: "You can ask the AI to check whether its answer actually covers everything you asked for.",
              answer: true,
              explain: "Asking it to review against your request often catches missed points."
            },
            {
              type: "mc",
              question: "You're writing a speech. Which prompt helps the AI help you best?",
              options: [
                "\"Ask me questions about the occasion, audience and length, then draft it.\"",
                "\"Write a speech.\"",
                "\"Speech, quick.\"",
                "\"Be funny.\""
              ],
              answer: 0,
              explain: "The AI can only tailor the speech once it knows the occasion and audience."
            },
            {
              type: "mc",
              question: "What's the main benefit of answering the AI's questions before it writes?",
              options: [
                "The result fits your situation first time",
                "It makes the AI faster",
                "It uses less electricity",
                "It stops the AI from ever being wrong"
              ],
              answer: 0,
              explain: "Better input gives better output, so you need fewer rewrites."
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
            },
            {
              type: "mc",
              question: "Which of these should you NOT paste into a free AI tool?",
              options: [
                "A list of customers with their home addresses",
                "A recipe you want doubled",
                "A public news article",
                "Your own holiday packing list"
              ],
              answer: 0,
              explain: "Personal data about other people needs protecting. Recipes and public articles are fine."
            },
            {
              type: "tf",
              question: "Removing names and replacing them with [Name] still lets the AI help with the task.",
              answer: true,
              explain: "The AI doesn't need real names to improve the wording or structure."
            },
            {
              type: "mc",
              question: "Where can you usually control whether your chats are used to train the AI?",
              options: [
                "In the app's privacy or data settings",
                "By typing \"don't train\" in every message",
                "You can never control it",
                "By using capital letters"
              ],
              answer: 0,
              explain: "Most AI apps have a data-control setting. Check it, and your company's policy."
            },
            {
              type: "mc",
              question: "Your company has an approved AI tool. A colleague uses their personal account for client work. What's the risk?",
              options: [
                "Client data may not be protected by the company's agreement",
                "There's no risk",
                "It makes the AI slower",
                "Their account will be upgraded"
              ],
              answer: 0,
              explain: "Business plans often come with data protections that personal accounts don't."
            },
            {
              type: "tf",
              question: "It's fine to paste a password into an AI chat as long as you delete the chat afterwards.",
              answer: false,
              explain: "Never share passwords with any AI tool. Deleting the chat may not remove it from every system."
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
            },
            {
              type: "mc",
              question: "AI suggests a health supplement for your symptoms. What should you do?",
              options: [
                "Speak to a pharmacist or doctor before taking it",
                "Order it straight away",
                "Double the dose to be safe",
                "Ignore your symptoms"
              ],
              answer: 0,
              explain: "AI can explain options, but health decisions need a qualified professional."
            },
            {
              type: "tf",
              question: "AI can repeat stereotypes it picked up from its training data.",
              answer: true,
              explain: "AI learns from human-written text, including its biases. Watch for unfair assumptions."
            },
            {
              type: "mc",
              question: "When is it a good idea to say content was made with AI?",
              options: [
                "When people could be misled into thinking a person made it",
                "Never",
                "Only if it's a poem",
                "Only if it's a mistake"
              ],
              answer: 0,
              explain: "Being open about AI use builds trust, especially for images and anything presented as real."
            },
            {
              type: "mc",
              question: "You use AI to draft a blog post. Who is responsible if it contains false claims?",
              options: ["You, as the publisher", "The AI company only", "Your readers", "Nobody"],
              answer: 0,
              explain: "Whoever publishes content is responsible for checking it."
            },
            {
              type: "better",
              question: "Which prompt is better for spotting bias in a job advert?",
              options: [
                "Review this job advert for wording that might put off older applicants, women or people with disabilities, and suggest neutral alternatives.",
                "Is this advert OK?"
              ],
              answer: 0,
              explain: "Naming what to look for gets a careful, specific review."
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
            },
            {
              type: "mc",
              question: "You want an image for a birthday invitation. Which type of tool?",
              options: ["An image generator", "A meeting note-taker", "A spreadsheet", "A search-only tool"],
              answer: 0,
              explain: "Image generators create pictures from a description. Check you're happy with how they'll be used."
            },
            {
              type: "tf",
              question: "Some AI assistants are built into apps you already use, like email and documents.",
              answer: true,
              explain: "For example Copilot in Microsoft apps and Gemini in Google apps. They can work on your files where they are."
            },
            {
              type: "mc",
              question: "You want to know which local restaurants opened this month. What's important?",
              options: [
                "Using a tool that searches the web",
                "Using the most creative AI",
                "Turning off search",
                "Asking for a poem"
              ],
              answer: 0,
              explain: "Recent local information needs a live web search, not just training data."
            },
            {
              type: "mc",
              question: "What's the best first step when choosing an AI tool?",
              options: [
                "Be clear what job you need it to do",
                "Pick the one with the best logo",
                "Buy every tool at once",
                "Ask a stranger online"
              ],
              answer: 0,
              explain: "Starting from the task tells you which features you need."
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
            },
            {
              type: "mc",
              question: "What's \"thinking mode\" in an AI app?",
              options: [
                "The model works through a problem step by step before answering",
                "The AI goes to sleep",
                "A mode that only answers yes or no",
                "A paid human helper"
              ],
              answer: 0,
              explain: "Thinking takes longer but helps with maths, planning and tricky decisions."
            },
            {
              type: "tf",
              question: "For a quick \"what's a synonym for happy?\", a fast model is usually fine.",
              answer: true,
              explain: "Simple questions don't need the most powerful model."
            },
            {
              type: "mc",
              question: "You're planning a 2-week trip with flights, budget and 4 cities. Which model choice?",
              options: [
                "A more powerful model, possibly with thinking mode",
                "The fastest, lightest model",
                "An image model",
                "A voice-only model"
              ],
              answer: 0,
              explain: "Many connected details benefit from a model that can keep track of them all."
            },
            {
              type: "mc",
              question: "Why do apps often limit the most powerful models on free plans?",
              options: [
                "They cost more to run",
                "They're worse at answering",
                "They only work at night",
                "They're illegal"
              ],
              answer: 0,
              explain: "Bigger models use more computing for every word, so providers limit free use."
            }
          ]
        }
      ]
    }
  ]
});
