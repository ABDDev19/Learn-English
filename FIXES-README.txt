ENGLISH BRIDGE — FIXED VERSION

Important fixes made:
1. Renamed lessons/Lesson.html to lessons/lesson.html (Vercel/Linux is case-sensitive).
2. Removed stale unit-1.html ... unit-5.html duplicate lesson pages.
3. Fixed homepage Start Learning / Explore Lessons / Review Lessons links.
4. Fixed a JavaScript crash caused by renderLessons() trying to use a removed #lessonGrid element.
5. That crash was stopping Vocabulary, Conversations, Stories, and Quiz from initializing.
6. Vocabulary now appears in a fresh random order by default; search/category filtering still works.
7. Random Word avoids immediately repeating the same word and now shows its example sentence.
8. Conversations and stories are shuffled when rendered.
9. Added Conversations to the main navigation.
10. Quiz now mixes fixed lesson questions with dynamically generated questions from the 400+ vocabulary list.
11. Fixed quiz progress so Question 1 starts with visible progress instead of 0%.
12. Added defensive DOM checks so one missing optional section cannot break the whole site.
13. Added vercel.json for explicit static-site URL behavior.

GitHub/Vercel:
- Copy ALL files/folders from this fixed project into the ROOT DIRECTORY that Vercel deploys.
- Make sure GitHub shows: lessons/lesson.html (lowercase l).
- Commit deleted old lesson files too.
- Deploy the latest commit on Vercel.
- Test: /lessons/lesson.html?id=unit-1


LESSON DATA FIX: data/lessons.js contains lesson objects plus conversation/story data for legacy compatibility. The dedicated lesson page now filters strictly to unit-1 through unit-35, so conversations/stories can never appear as lessons or in previous/next navigation.
