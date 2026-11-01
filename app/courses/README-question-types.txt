
  LESSON CONTENT
  ==============
  Each course is one file in this folder. Edit the text without touching app.js.

  Each lesson has a list of "steps". A step can be:

  { type: "info", title: "...", body: "...", example: "optional example text" }
      A teaching card. No right or wrong answer; the learner just taps Continue.

  { type: "mc", question: "...", options: ["A", "B", "C"], answer: 0, explain: "..." }
      Multiple choice. "answer" is the position of the correct option, counting from 0.
      (0 = first option, 1 = second, and so on.) Options are shuffled automatically.

  { type: "better", question: "...", options: ["prompt A", "prompt B"], answer: 1, explain: "..." }
      "Which prompt is better?" Works the same way as multiple choice.

  { type: "tf", question: "...", answer: true, explain: "..." }
      True or false.

  { type: "order", question: "...", pieces: ["first", "second", "third"], explain: "..." }
      Put the pieces in the right order. Write them here in the CORRECT order;
      the app shuffles them for the learner.



  Optional on "info" steps:  code: true   shows the example in a dark code-style box.


  COURSE FILE LAYOUT
  ==================
  Each course file looks like this:

  COURSES.push({
    id: "business",                 // short unique name, no spaces
    icon: "💼",
    title: "AI for Business Owners",
    audience: "Business owners",    // shown in small capitals above the title
    description: "One or two sentences shown on the course picker.",
    units: [
      {
        id: "b1", title: "Unit 1: ...", description: "...",
        lessons: [
          { id: "b1l1", title: "...", icon: "📝", steps: [ ...steps... ] }
        ]
      }
    ]
  });

  Lesson ids must be unique within a course. Don't change an id after people have
  started the course, or their progress for that lesson will be lost.


  ADDING A NEW COURSE
  ===================
  1. Copy one of the course files in this folder and rename it (e.g. teachers.js).
  2. Change the id, title, audience, description and the units/lessons.
  3. Open app/index.html and add a line next to the others:
       <script src="courses/teachers.js"></script>
