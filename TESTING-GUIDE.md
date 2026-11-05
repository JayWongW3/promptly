# User testing guide (Phase 1, step 4)

Goal: before spending money on accounts, AI practice or payments, find out three things:

1. **Can people use it without help?**
2. **Do they find the lessons useful and pitched at the right level?**
3. **Would they come back tomorrow, and would they (or their employer) pay?**

Time needed: about 30 minutes per person, plus one week of light follow-up.

---

## 1. Before you start

- [ ] The app is online, with a link like `https://<your-username>.github.io/test/` (see README → "Go live").
- [ ] Analytics is switched on (see README → "Analytics"), so you can see what testers did afterwards.
- [ ] A feedback form exists and its link is in `app/config.js` (see README → "Feedback link").
- [ ] A notes sheet is ready (template at the bottom of this page).

## 2. Who to test with

- **5–10 people** is enough to find most problems. After about 5, you'll hear the same issues repeated.
- Pick people who match the audience you most want to sell to. For example:
  - business owners you know, for "AI for Business Owners"
  - non-technical friends or family, for "AI Basics"
  - a couple of developers, for "AI for Developers"
- Avoid people who'll just be polite. Tell them honest criticism is the most useful thing they can give you.

## 3. The session (20–30 minutes)

Do it in person, or on a video call with the tester sharing their phone or computer screen.

**Say this at the start** (roughly):

> "I'm testing the app, not you. There are no wrong answers. Please think out loud as you go: say what you're looking at, what you expect to happen, and anything confusing. I'll mostly stay quiet so I can see where the app needs improving."

**Tasks.** Give these one at a time. Don't explain how to do them.

1. "Here's the link. Open it and pick the course that sounds right for you."
   *Watch:* do they pick the course you expected? How long do they hesitate?
2. "Complete the first two lessons."
   *Watch:* where they pause, what they misread, and whether they read the explanations after a wrong answer.
3. "What do you think the orange 'Built with Claude today' box is? Would you click it?"
4. "Add the app to your phone's home screen."
   *Watch:* can they find out how? (On iPhone it's Share → Add to Home Screen in Safari.)

**Only help if they've been stuck for over a minute.** Write down every place you had to help; each one is a problem to fix.

## 4. Questions to ask afterwards

1. In one sentence, what is this app for?
2. Was anything confusing or annoying?
3. Were the lessons too easy, too hard or about right? Which one was most useful?
4. Did you learn something you'll actually use this week? What?
5. Would you open it again tomorrow? What would make you come back?
6. What's missing that you expected to see?
7. **Would you pay for this?** How much, and how often? Or would your employer pay for staff to use it?
8. Who else do you know who should use this?

Tip: questions 5 and 7 are where people are most likely to be polite. If someone says "yes, I'd pay", ask "what would you pay, and would you pay it today?"

## 5. The following week

- Ask testers to use it on their own for 7 days, with no reminders from you.
- After a week, check analytics (section 6) and send a 2-question message:
  "Did you use it after our session? Why or why not?"

## 6. What to look at in analytics

| Event | Question it answers |
|---|---|
| **App Opened**, `visitor` = returning, `days_since_last_lesson` | Are people coming back? (the most important number) |
| **Course Selected** | Which audience is most interested? |
| **Lesson Started** vs **Lesson Completed** | Do people finish what they start? |
| **Lesson Quit** with `lesson` and `percent` | Which lesson loses people, and how far in? |
| **Wrong Answer** with `question` and `text` | Which questions are confusing or badly worded? If one question is wrong far more often than others, rewrite it. |
| **Out Of Hearts** | Is the heart system too strict? |
| **Course Completed** | Does anyone get to the end? |
| **Spotlight Click** | Does the daily "Built with Claude" card interest people? |
| **App Installed** / **Install Prompt** | Do people want it on their phone? |
| **Feedback Clicked** | Are people motivated to give feedback? |
| **Sound Toggled** | Do people turn the sounds off? If many do, the sounds may be too loud or annoying. |
| **Signed In** / **Signed Out** / **Account Deleted** | How many learners create accounts, a sign of commitment |

In Plausible, each event appears only after you add it as a **goal**; see README → "Analytics". In Umami, events appear automatically under **Events**.

## 7. Deciding what to do next

Use these as rough guides, not hard rules:

- **3 or more of 10 testers used it on 3+ different days in the week, unprompted:** there's real pull. Go ahead with Phase 2 (accounts and AI practice).
- **Most people stopped after day 1:** fix the reasons they gave before building more features. Common causes are lessons that are too easy or too long, or no reason to return.
- **Business owners were noticeably keener than individuals, or said "my staff need this":** lean toward the team version in Phase 3.
- **Many people stumbled on the same thing:** fix it first. It's usually quick, and it will affect every future user.

---

## Notes template

Copy this for each tester.

```
Tester:                 Date:            Audience/course:
Device: phone / computer        Browser:

Task 1 (pick a course) - what happened:
Task 2 (two lessons) - where they paused / misread:
Task 3 (spotlight) - their interpretation:
Task 4 (install) - managed it? Y / N

Places I had to help:
-
Quotes worth remembering:
-
Would come back? (their words):
Would pay? How much / who pays:
Top problem to fix:
```
