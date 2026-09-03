ENGLISH STARTER V2

Files:
- index.html: page structure
- style.css: design
- script.js: website functions
- data/lessons.js: lessons and Pashto definitions
- data/vocabulary.js: English words + Pashto meanings
- data/tenses.js: tense definitions + English examples
- data/quizzes.js: lesson quiz questions

HOW TO ADD A NEW UNIT:
1. Open data/lessons.js.
2. Add another object inside const units = [ ... ].
3. Give it an id, title, preview, and sections.
4. Save. The website automatically displays the new unit.

HOW TO ADD VOCABULARY:
Open data/vocabulary.js and add:
{word:"example",meaning:"پښتو معنا",part:"noun",example:"This is an example."}

HOW TO ADD TENSES:
Open data/tenses.js. Keep the example sentences in English if that is your teaching rule.

HOW TO ADD LESSON QUIZ QUESTIONS:
Open data/quizzes.js and add:
{u:6,q:"Question?",a:["A","B","C","D"],c:0,e:"Explanation."}

IMPORTANT:
For a new book, send me the PDF. I can prepare the data/lessons.js, data/quizzes.js and vocabulary data for you while keeping the same website design.
