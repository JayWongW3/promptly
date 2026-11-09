/*
  COURSE: Grok (by xAI) – beginner to advanced
  See courses/README-question-types.txt for how to write questions.
  Feature names and plans change often; review this course every few months.
*/

COURSES.push({
  id: "grok",
  group: "tool",
  levelJump: true,
  icon: "⚫",
  title: "Mastering Grok",
  audience: "Tool course · Grok by xAI",
  description: "From your first chat to real-time X insights, Think, DeepSearch, Imagine, and privacy settings. Three levels: beginner, intermediate, advanced.",
  units: [
    {
      id: "k1",
      title: "Level 1 · Beginner",
      description: "Get set up and understand what makes Grok different.",
      lessons: [
        {
          id: "k1l1",
          title: "Getting started with Grok",
          icon: "👋",
          steps: [
            {
              type: "info",
              title: "Where and how to use Grok",
              body: "Grok is made by <b>xAI</b>. You can use it at <b>grok.com</b>, in the <b>Grok apps</b> for iPhone and Android, and inside <b>X</b> (formerly Twitter).<br><br>There's free access with usage limits. Paid options, such as a <b>SuperGrok</b> subscription or certain X Premium plans, give higher limits and more features.<br><br>What sets Grok apart is its <b>live connection to X</b>: it can see public posts and conversations as they happen, as well as searching the wider web.<br><br><i>Feature names and plans change often. If something looks different, the idea is usually the same.</i>"
            },
            {
              type: "mc",
              question: "What's Grok's most distinctive feature compared with other AI assistants?",
              options: [
                "Live access to public posts on X",
                "It never makes mistakes",
                "It only works offline",
                "It can't search the web"
              ],
              answer: 0,
              explain: "Why: Grok is built into X and can read what people are posting right now. That's useful for trends and public reaction."
            },
            {
              type: "mc",
              question: "Where can you use Grok?",
              options: [
                "grok.com, the Grok apps, and inside X",
                "Only inside Microsoft Word",
                "Only on a desktop computer",
                "Only by email"
              ],
              answer: 0,
              explain: "Why: Grok is available on the web, as standalone apps, and built into X."
            },
            {
              type: "tf",
              question: "Like other AI assistants, Grok can state wrong information confidently.",
              answer: true,
              explain: "Why: all AI models can hallucinate. Check important facts, whichever tool you use."
            },
            {
              type: "mc",
              question: "Which company makes Grok?",
              options: ["xAI", "OpenAI", "Anthropic", "Google"],
              answer: 0,
              explain: "Grok is made by xAI, which is closely linked to X (formerly Twitter)."
            },
            {
              type: "tf",
              question: "You can use Grok without opening the X app, at grok.com or in the Grok apps.",
              answer: true,
              explain: "Why: Grok is available on the web and as standalone apps, as well as inside X."
            },
            {
              type: "mc",
              question: "What's a SuperGrok subscription for?",
              options: [
                "Higher limits and more features than the free tier",
                "A different social network",
                "A phone contract",
                "Free advertising on X"
              ],
              answer: 0,
              explain: "Why: paid plans raise usage limits and unlock extra features. Check the current details in the app."
            },
            {
              type: "better",
              question: "Which first prompt to Grok is better?",
              options: [
                "What are people on X saying about the new iPhone battery life this week? Summarise the main views with example posts.",
                "iPhone?"
              ],
              answer: 0,
              explain: "Why: the topic, timeframe and format make use of Grok's live X access."
            },
            {
              type: "mc",
              question: "Grok's answers can sound more casual than other assistants. What's the right response?",
              options: [
                "Ask for the tone you want, such as \"formal and concise\"",
                "Assume it can't be formal",
                "Stop using it",
                "Switch your phone language"
              ],
              answer: 0,
              explain: "Why: you can steer tone in any assistant by asking."
            }
          ]
        },
        {
          id: "k1l2",
          title: "Real-time info from X",
          icon: "⚡",
          steps: [
            {
              type: "info",
              title: "Using posts wisely",
              body: "Grok can summarise what people on X are saying about a topic, brand, event or product, often within minutes of it happening.<br><br>But <b>posts are not verified facts</b>. They include opinions, jokes, rumours, bots and misinformation. When news is breaking, early posts are often wrong.<br><br>Good habits:<br>• Ask Grok to <b>separate confirmed facts from claims in posts</b><br>• Ask for <b>links to the sources</b> and open them<br>• Check anything important against a reliable news outlet or official source",
              example: "What are people on X saying about [our brand] this week? Group it into praise, complaints and questions, with example posts. Note anything that looks like a rumour."
            },
            {
              type: "better",
              question: "Which prompt is better for understanding a breaking news story?",
              options: [
                "What happened?",
                "Summarise what's known about [event]. Separate facts confirmed by reliable news or official sources from unverified claims in X posts, and link the sources."
              ],
              answer: 1,
              explain: "Why: it makes Grok tell verified information apart from rumour, which matters most while a story is still developing."
            },
            {
              type: "mc",
              question: "Grok's summary says \"many users report a product recall\". What should you do before acting?",
              options: [
                "Check the manufacturer's or regulator's official announcement",
                "Assume it's true because many posts say so",
                "Repost it immediately",
                "Ask Grok the same question again"
              ],
              answer: 0,
              explain: "Why: a claim repeated many times isn't verified. Official sources confirm recalls."
            },
            {
              type: "mc",
              question: "Which is a great business use of Grok's X access?",
              options: [
                "Tracking public reaction to your brand or a competitor's launch",
                "Checking your bank balance",
                "Storing customer passwords",
                "Replacing legal advice"
              ],
              answer: 0,
              explain: "Why: sentiment and trend tracking is where live social data helps most. Treat it as a signal, not proof."
            },
            {
              type: "mc",
              question: "Which is a sign an X post might be unreliable?",
              options: [
                "A dramatic claim with no source from a brand-new account",
                "A link to an official announcement",
                "A verified news outlet with a link",
                "A company's own press release"
              ],
              answer: 0,
              explain: "Why: new accounts, no sources and dramatic claims are common signs of rumour."
            },
            {
              type: "tf",
              question: "When a story is breaking, early posts are often wrong or incomplete.",
              answer: true,
              explain: "Why: facts take time to confirm. Give it time and check reliable outlets."
            },
            {
              type: "better",
              question: "Which prompt is better for brand monitoring?",
              options: [
                "Summarise X posts from the last 7 days mentioning [our brand]. Group by complaint type, count each, and link 2 example posts per group.",
                "Are people talking about us?"
              ],
              answer: 0,
              explain: "Why: timeframe, grouping and examples turn chatter into something you can act on."
            },
            {
              type: "mc",
              question: "Grok says a product is \"trending\". What does that mean?",
              options: [
                "Many people are posting about it, not that the claims are true",
                "It's been officially verified",
                "It's on sale",
                "It's been banned"
              ],
              answer: 0,
              explain: "Why: popularity measures attention, not accuracy."
            },
            {
              type: "mc",
              question: "What should you do before replying publicly to a viral complaint about your business?",
              options: [
                "Check the facts and the original post first",
                "Reply instantly with Grok's summary",
                "Delete your account",
                "Ignore it forever"
              ],
              answer: 0,
              explain: "Why: a calm reply based on checked facts avoids making things worse."
            }
          ]
        }
      ]
    },
    {
      id: "k2",
      title: "Level 2 · Intermediate",
      description: "Think, DeepSearch and Imagine.",
      lessons: [
        {
          id: "k2l1",
          title: "Think & DeepSearch",
          icon: "🔎",
          steps: [
            {
              type: "info",
              title: "Deeper answers",
              body: "<b>Think</b> makes Grok reason through a problem before answering. It's slower, but better for maths, planning and tricky decisions.<br><br><b>DeepSearch</b> is Grok's research mode. It searches the web and X over a few minutes and returns a report with sources.<br><br>Use the quick default for simple questions, and these modes when accuracy and depth matter."
            },
            {
              type: "mc",
              question: "You need a sourced overview of how small retailers are reacting to a new regulation. Which mode?",
              options: ["DeepSearch", "A quick default reply", "Imagine", "Voice mode"],
              answer: 0,
              explain: "Why: DeepSearch gathers many sources, including the web and X, into one report with links you can check."
            },
            {
              type: "mc",
              question: "You're working out whether hiring a part-timer or a contractor is cheaper over a year, given several costs. Which mode?",
              options: ["Think", "Imagine", "The fastest default", "None; do it by hand only"],
              answer: 0,
              explain: "Why: several numbers and conditions interact, so reasoning step by step reduces mistakes. Still check the final figures."
            },
            {
              type: "tf",
              question: "DeepSearch reports can include claims taken from social posts, so you should check where key facts came from.",
              answer: true,
              explain: "Why: a report can mix reliable sources with posts. Look at the source behind anything important."
            },
            {
              type: "mc",
              question: "What does DeepSearch give you that a quick reply doesn't?",
              options: [
                "A researched report with sources, built over a few minutes",
                "A faster one-word answer",
                "An image",
                "A voice message"
              ],
              answer: 0,
              explain: "Why: it searches widely and cites sources, trading speed for depth."
            },
            {
              type: "tf",
              question: "Think mode is slower but tends to be more careful on multi-step problems.",
              answer: true,
              explain: "Why: reasoning before answering reduces mistakes on complex questions."
            },
            {
              type: "better",
              question: "Which DeepSearch prompt is better?",
              options: [
                "Research how UK independent gyms are using social media to win members in 2026. Include examples, what works, and sources.",
                "Gyms?"
              ],
              answer: 0,
              explain: "Why: scope, location, timeframe and the output you want guide the research."
            },
            {
              type: "mc",
              question: "When is the quick default reply enough?",
              options: [
                "\"Rewrite this tweet to be friendlier.\"",
                "\"Compare 10 suppliers with sources.\"",
                "\"Plan a year-long budget.\"",
                "\"Research a new regulation in depth.\""
              ],
              answer: 0,
              explain: "Why: simple edits don't need research or extra reasoning."
            },
            {
              type: "mc",
              question: "A DeepSearch report cites a post as evidence for a statistic. What should you do?",
              options: [
                "Look for the original data source behind the statistic",
                "Treat the post as proof",
                "Ignore the report entirely",
                "Repost it"
              ],
              answer: 0,
              explain: "Why: statistics should come from the original study or official data."
            }
          ]
        },
        {
          id: "k2l2",
          title: "Imagine: images & video",
          icon: "🎨",
          steps: [
            {
              type: "info",
              title: "Create pictures and short videos",
              body: "<b>Grok Imagine</b> creates images and short video clips from a text description, or animates an image you provide. It's useful for social media visuals, mood boards and quick concept art.<br><br>Use it responsibly:<br>• Don't create realistic images or videos of <b>real people</b> doing or saying things they didn't. That can be misleading, harmful and illegal.<br>• <b>Label AI-generated content</b> where people could mistake it for real.<br>• Be careful with <b>trademarks and other people's characters or artwork</b>."
            },
            {
              type: "better",
              question: "Which Imagine prompt is better for a café's social post?",
              options: [
                "Coffee picture.",
                "A cosy independent café at golden hour, latte with leaf art on a wooden table, warm tones, shallow depth of field, square format."
              ],
              answer: 1,
              explain: "Why: subject, setting, lighting, style and format give the generator a clear target."
            },
            {
              type: "tf",
              question: "Making a realistic video of a competitor's CEO saying something they never said is fine if it's meant as a joke.",
              answer: false,
              explain: "Why: realistic fakes of real people can be defamatory or illegal, and they mislead people whatever the intent."
            },
            {
              type: "mc",
              question: "You post an AI-generated \"photo\" of your product in use. What's good practice?",
              options: [
                "Make clear it's AI-generated where it could be mistaken for real",
                "Claim it's a real customer photo",
                "Add a famous person to it",
                "Remove any labels"
              ],
              answer: 0,
              explain: "Why: honesty protects trust, and advertising rules in many countries require that images don't mislead."
            },
            {
              type: "mc",
              question: "Which is a good use of Grok Imagine?",
              options: [
                "Concept art for a new product idea",
                "A realistic fake photo of a real politician",
                "A forged ID document",
                "A fake customer review screenshot"
              ],
              answer: 0,
              explain: "Why: creative concepts are fine; fakes of real people or documents are harmful and often illegal."
            },
            {
              type: "tf",
              question: "You can animate an image you provide into a short video clip.",
              answer: true,
              explain: "Why: Imagine can generate video from text or from an existing image."
            },
            {
              type: "better",
              question: "Which video prompt is better?",
              options: [
                "A 5-second clip of steam rising from a coffee cup on a café counter, slow camera push-in, warm morning light.",
                "Coffee video."
              ],
              answer: 0,
              explain: "Why: length, subject, camera movement and lighting give a clear target."
            },
            {
              type: "mc",
              question: "Before using a generated image in an advert, what should you check?",
              options: [
                "It doesn't copy someone's trademark or artwork, and isn't misleading",
                "That it's very colourful",
                "That it has a famous face",
                "Nothing"
              ],
              answer: 0,
              explain: "Why: ads must not mislead or infringe others' rights."
            },
            {
              type: "mc",
              question: "A generated image includes a well-known company's logo by accident. What should you do?",
              options: [
                "Regenerate or edit it out before using it",
                "Use it as is",
                "Make the logo bigger",
                "Claim a partnership"
              ],
              answer: 0,
              explain: "Why: using another brand's logo can imply a false connection and break trademark law."
            }
          ]
        }
      ]
    },
    {
      id: "k3",
      title: "Level 3 · Advanced",
      description: "Privacy settings and getting the most from Grok.",
      lessons: [
        {
          id: "k3l1",
          title: "Privacy & data settings",
          icon: "🔒",
          steps: [
            {
              type: "info",
              title: "Know what's shared",
              body: "If you use X, your <b>public posts and interactions</b> may be used to train and improve Grok. X lets you <b>opt out</b> in its <b>Privacy and safety</b> settings (look for the Grok / data-sharing option).<br><br>In Grok itself you can <b>delete conversations</b>, and you can use a private chat mode for things you don't want kept.<br><br>As with any AI tool, don't paste <b>passwords, customer personal data or confidential business information</b> unless your company has approved that use."
            },
            {
              type: "mc",
              question: "You don't want your X posts used to train Grok. What can you do?",
              options: [
                "Change the Grok data-sharing setting in X's Privacy and safety settings",
                "Nothing; it's impossible",
                "Post more often",
                "Delete the Grok app only"
              ],
              answer: 0,
              explain: "Why: the training setting is on your X account, so deleting the Grok app doesn't change it. Check the setting yourself; menus move over time."
            },
            {
              type: "mc",
              question: "Which is SAFE to paste into Grok?",
              options: [
                "A draft public blog post",
                "Your customers' names and phone numbers",
                "Your online banking password",
                "A confidential contract under NDA"
              ],
              answer: 0,
              explain: "Why: content that's meant to be public carries little risk. Personal data, passwords and confidential documents shouldn't go into consumer AI tools."
            },
            {
              type: "tf",
              question: "You can delete your Grok conversation history.",
              answer: true,
              explain: "Why: managing and deleting history is a basic control. Use it for anything you'd rather not keep."
            },
            {
              type: "mc",
              question: "Where is the setting that controls whether your X posts train Grok?",
              options: [
                "In X's Privacy and safety settings",
                "In your phone's battery settings",
                "In Grok Imagine",
                "There is no such setting"
              ],
              answer: 0,
              explain: "Why: it's an X account setting. Menus move, so look under Privacy and safety for the Grok / data-sharing option."
            },
            {
              type: "tf",
              question: "Deleting the Grok app removes all your past X posts from Grok's training data.",
              answer: false,
              explain: "Why: deleting an app doesn't change your X data settings or past data. Use the X privacy setting."
            },
            {
              type: "mc",
              question: "Which business information is safe to discuss with Grok?",
              options: [
                "Your public product launch announcement",
                "Your payroll file",
                "A client contract under NDA",
                "Staff home addresses"
              ],
              answer: 0,
              explain: "Why: public information is low risk; confidential and personal data isn't."
            },
            {
              type: "better",
              question: "Which way of getting help with a sensitive HR issue is safer?",
              options: [
                "Describe it in general terms with no names: 'An employee is often late. How do I raise it fairly?'",
                "Paste the employee's full file and ask what to do."
              ],
              answer: 0,
              explain: "Why: you get useful advice without sharing personal data."
            },
            {
              type: "mc",
              question: "Why check privacy settings on any AI tool?",
              options: [
                "To know how your data is stored, used and shared",
                "To change the app's colour",
                "To make it faster",
                "To unlock games"
              ],
              answer: 0,
              explain: "Why: settings decide what happens to your information."
            }
          ]
        },
        {
          id: "k3l2",
          title: "Getting the most from Grok",
          icon: "🎯",
          steps: [
            {
              type: "info",
              title: "Play to its strengths",
              body: "<b>Where Grok shines:</b> what's happening right now, public sentiment, trends and conversations on X, fast summaries of breaking topics, and image and video generation with Imagine.<br><br><b>Where to be careful:</b> social posts aren't reliable sources, so verify facts; and for long documents, coding projects or work inside office tools, compare it with other assistants and pick what works best for you.<br><br>Developers can also use Grok models through the <b>xAI API</b>.<br><br>The best approach is often to <b>combine tools</b>: Grok for real-time signals, then another assistant (or your own judgement) to check and write the final piece."
            },
            {
              type: "order",
              question: "Put this brand-monitoring workflow in order:",
              pieces: [
                "Ask Grok what people on X are saying about your brand",
                "Ask it to group posts into praise, complaints and questions",
                "Check the example posts and any facts it claims",
                "Decide on replies or fixes yourself"
              ],
              explain: "Why: Grok gathers and sorts the signal fast. Checking and deciding stay with you."
            },
            {
              type: "mc",
              question: "For which task is Grok's X access most valuable?",
              options: [
                "Seeing how people are reacting to a product launch today",
                "Summarising your private internal PDF policy",
                "Doing your bookkeeping",
                "Writing a legal contract"
              ],
              answer: 0,
              explain: "Why: live public reaction is exactly what X data captures. Private documents and specialist work don't need it."
            },
            {
              type: "tf",
              question: "Using more than one AI tool, each for what it does best, is a sensible strategy.",
              answer: true,
              explain: "Why: tools have different strengths and connections. Matching tool to task beats loyalty to one app."
            },
            {
              type: "mc",
              question: "Which job fits Grok best?",
              options: [
                "Spotting what people are saying about a competitor's launch today",
                "Editing a 50-page Word document",
                "Doing your bookkeeping",
                "Writing legal contracts"
              ],
              answer: 0,
              explain: "Why: live public conversation is Grok's main strength."
            },
            {
              type: "tf",
              question: "Grok models are also available to developers through the xAI API.",
              answer: true,
              explain: "Why: developers can build Grok into their own apps and tools."
            },
            {
              type: "better",
              question: "Which combined workflow is better?",
              options: [
                "Use Grok to gather this week's customer reactions on X, then use your main assistant to draft a response plan, then check it yourself.",
                "Post whatever Grok says straight to your company account."
              ],
              answer: 0,
              explain: "Why: each tool does what it's good at, and you stay in charge."
            },
            {
              type: "mc",
              question: "How should you judge which AI tool is best for you?",
              options: [
                "Test the same real task in two or three tools and compare",
                "Pick the most talked-about one",
                "Choose by logo",
                "Use only one forever"
              ],
              answer: 0,
              explain: "Why: your own tasks are the best test."
            },
            {
              type: "mc",
              question: "What's a good weekly habit with Grok for a business?",
              options: [
                "A Monday summary of last week's mentions and trends in your industry",
                "Auto-posting replies to every mention",
                "Sharing customer data for analysis",
                "Ignoring all feedback"
              ],
              answer: 0,
              explain: "Why: a regular, reviewed summary keeps you informed without risk."
            }
          ]
        }
      ]
    }
  ]
});
