English Bridge — Advanced Beginner English Website

This version is designed around your requested style:
- Dark/modern hero similar to the reference design.
- The man is removed; your supplied image of three English-learning children is used instead.
- Clicking the E logo returns to Home.
- Lessons 1–5 have their own pages using hash URLs (#unit-1, #unit-2, etc.).
- Content is separated into data/ files.
- 400+ English words with Pashto meanings.
- Random-color vocabulary cards.
- Introduction conversations.
- Basic English stories with browser voice.
- Vocabulary and lesson quiz.
- Open Library API search on the Library page.
- Responsive mobile layout.

DATA FILES
- data/config.js
- data/lessons.js
- data/vocabulary.js
- data/quizzes.js

ASSETS
- assets/english-kids.jpeg

HOW TO EDIT
1. Open data/lessons.js to change lessons/topics/examples.
2. Open data/vocabulary.js to add or edit words and Pashto meanings.
3. Open data/quizzes.js to add questions.
4. Add stories/conversations in data/lessons.js.
5. Replace assets/english-kids.jpeg if you later want another classroom image.

BOOKS
When you provide the books, the existing data structure can be replaced/expanded with the exact material from your books without changing the website's main design.

VOICE
Stories and conversation buttons use the browser Web Speech API. Voice availability depends on the browser/device.

LIBRARY
The Library page uses Open Library's public Search API. It requires internet access.

RUN
You can open index.html in a modern browser. For best API behavior, use a small local server such as VS Code Live Server.


UPDATE: TOPICS now contain description, learning goals, and example sentences. CONVERSATIONS contains 10 categorized conversations. Edit data/lessons.js to add or change them.


NEW UPDATE:
- Topics now include descriptions, practice skills, and an example sentence.
- 10 conversations are included.
- Conversations are categorized and can be filtered by category.
- To edit topics or conversations, open data/lessons.js only.


V3 UPDATE:
- Removed the Topics section and TOPICS data.
- Removed Open Library and its API/configuration.
- Replaced the home Topics area with a 5-lesson "What you will learn" roadmap containing useful descriptions.
- Added helpful learning guidance sections: how to use lessons, speaking, listening, vocabulary, daily routine, and teacher tips.
- Added dedicated pages: lessons/unit-1.html through lessons/unit-5.html.
- Lesson cards now link directly to their own dedicated page.
- The English Bridge logo on every page links back to Home.
- Learning content remains in data/*.js for easy editing.
