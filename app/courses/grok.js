/*
  COURSE: Grok (by xAI) – beginner to advanced
  See courses/README-question-types.txt for how to write questions.
  Feature names and plans change often; review this course every few months.
*/

COURSES.push({
  id: "grok",
  group: "tool",
  levelJump: true, // learners can start at any level
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
            }
          ]
        }
      ]
    }
  ]
});
