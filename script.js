/* English Bridge functionality.
   Learning content lives in data/*.js.
*/
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const pages = $$(".page");
let currentQuiz = [];
let quizIndex = 0;
let quizScore = 0;
let currentQuizLength = 10;
let voices = [];

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showPage(id) {
  pages.forEach((p) => p.classList.toggle("active", p.id === id));
  $$(".nav-btn").forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === "#" + id),
  );
  closeMobileMenu();
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (id === "vocabulary") renderVocabulary();
}

function route() {
  const hash = location.hash.replace(/^#/, "") || "home";
  const allowed = [
    "home",
    "vocabulary",
    "conversations",
    "stories",
    "quiz",
    "about",
  ];
  showPage(allowed.includes(hash) ? hash : "home");
}

window.addEventListener("hashchange", route);

function renderHomeRoadmap() {
  const box = $("#homeLessonsPreview");
  if (!box) return;
  box.innerHTML = LESSONS.map(
    (l, i) => `
    <article class="roadmap-card">
      <div class="roadmap-number">${String(i + 1).padStart(2, "0")}</div>
      <div>
        <span class="topic">${l.topic}</span>
        <h3>${l.title}</h3>
        <p>${l.subtitle}</p>
   <a class="text-link" href="lessons/lesson.html?id=${l.id}">Open Lesson →</a>
      </div>
    </article>`,
  ).join("");
}

function renderHelpfulHome() {
  const box = $("#homeHelpful");
  if (!box) return;
  const items = [
    [
      "📖",
      "Study the lesson",
      "Read the rule and examples first, then practice the lesson before moving on.",
    ],
    [
      "🗣️",
      "Speak out loud",
      "Use the conversations and repeat each sentence instead of only reading silently.",
    ],
    [
      "🎧",
      "Listen and repeat",
      "Use the voice buttons with stories and conversations to train your listening.",
    ],
    [
      "🧠",
      "Review vocabulary",
      "Learn a few words at a time and use them in your own simple sentences.",
    ],
    [
      "✅",
      "Take the quiz",
      "Check what you remember and return to the lesson when you make mistakes.",
    ],
    [
      "📅",
      "Practice every day",
      "A short daily routine is better than studying a lot only once in a while.",
    ],
  ];
  box.innerHTML = items
    .map(
      (x) =>
        `<article class="helpful-card"><span class="helpful-icon">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`,
    )
    .join("");
}

function renderLessons() {
  const grid = $("#lessonGrid");
  const courseLessons = LESSONS.filter((l) => /^unit-\d+$/.test(l.id));
  if (!grid) return;
  grid.innerHTML = courseLessons.map(
    (l, i) => `
    <article class="lesson-card">
      <div class="unit-badge">${i + 1}</div>
      <div>
        <span class="topic">${l.topic}</span>
        <h3>${l.title}</h3>
        <p>${l.subtitle}</p>
        <a class="secondary lesson-open" href="lessons/lesson.html?id=${l.id}">Open Lesson →</a>
      </div>
    </article>`,
  ).join("");
}

function renderVocabulary() {
  const grid = $("#wordGrid");
  if (!grid) return;

  const search = ($("#wordSearch")?.value || "").trim().toLowerCase();
  const cat = $("#wordCategory")?.value || "all";
  const filtered = VOCABULARY.filter((v) => {
    const ms =
      !search ||
      v.word.toLowerCase().includes(search) ||
      v.pashto.toLowerCase().includes(search);
    const mc = cat === "all" || v.category === cat;
    return ms && mc;
  });

  // On the normal Words page, show the complete list in a fresh random order.
  // Search/category results stay stable so they are easy to scan.
  const displayWords = !search && cat === "all" ? shuffle(filtered) : filtered;

  grid.innerHTML =
    displayWords
      .map(
        (v) => `
    <article class="word-card">
      <h3>${v.word}</h3>
      <div class="meaning" dir="rtl">${v.pashto}</div>
      <div class="category">${v.category}</div>
      <div class="example">${v.example}</div>
      <button class="listen-btn" data-speak="${encodeURIComponent(v.word)}">🔊 Hear</button>
    </article>`,
      )
      .join("") ||
    `<div class="conversation-preview"><b>No words found.</b><p>Try another search.</p></div>`;
}

function setupVocabulary() {
  const select = $("#wordCategory");
  const searchInput = $("#wordSearch");
  const randomBtn = $("#randomWordBtn");
  const randomBox = $("#randomWord");
  if (!select || !searchInput || !randomBtn || !randomBox) return;

  [...new Set(VOCABULARY.map((v) => v.category))].sort().forEach((c) => {
    const o = document.createElement("option");
    o.value = c;
    o.textContent = c;
    select.appendChild(o);
  });

  searchInput.addEventListener("input", renderVocabulary);
  select.addEventListener("change", renderVocabulary);

  let lastRandomWord = "";
  randomBtn.addEventListener("click", () => {
    let choices = VOCABULARY.filter((v) => v.word !== lastRandomWord);
    if (!choices.length) choices = VOCABULARY;
    const v = choices[Math.floor(Math.random() * choices.length)];
    lastRandomWord = v.word;

    randomBox.classList.remove("hidden");
    randomBox.innerHTML = `
      <span class="eyebrow">RANDOM WORD</span>
      <div style="font-size:27px;font-weight:900;margin-top:4px">${v.word}</div>
      <div dir="rtl" style="font-size:20px;color:#ffd08a">${v.pashto}</div>
      <div style="margin-top:7px;color:#cbd1d9">${v.category}</div>
      <div style="margin-top:8px">${v.example}</div>
      <button class="listen-btn" style="margin-top:10px" data-speak="${encodeURIComponent(v.word)}">🔊 Hear word</button>`;
  });
}

function renderConversations() {
  const categories = ["All", ...new Set(CONVERSATIONS.map((c) => c.category))];
  const filterBox = $("#conversationFilters");
  if (filterBox) {
    filterBox.innerHTML = categories
      .map(
        (c, i) =>
          `<button class="conversation-filter ${i === 0 ? "active" : ""}" data-category="${c}">${c}</button>`,
      )
      .join("");
    $$(".conversation-filter").forEach((btn) =>
      btn.addEventListener("click", () => {
        $$(".conversation-filter").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderConversationCards(btn.dataset.category);
      }),
    );
  }
  renderConversationCards("All");
}

function renderConversationCards(category = "All") {
  const grid = $("#conversationGrid");
  if (!grid) return;
  const baseList =
    category === "All"
      ? CONVERSATIONS
      : CONVERSATIONS.filter((c) => c.category === category);
  const list = shuffle(baseList);
  grid.innerHTML = list
    .map(
      (c) => `
    <article class="conversation-card">
      <div class="conversation-meta">
        <span class="conversation-category">${c.category}</span>
        <span class="conversation-level">${c.level}</span>
      </div>
      <p class="conversation-description">${c.description}</p>
      ${dialogueHTML(c, false)}
    </article>`,
    )
    .join("");
}

function dialogueHTML(c, compact = false) {
  return `<h3>${c.title}</h3><div class="story-meta" dir="rtl">${c.pashtoTitle}</div>
  <div class="dialogue" style="margin-top:${compact ? 12 : 17}px">${c.lines
    .map(
      ([speaker, text]) => `
    <div class="line"><div class="speaker">${speaker}</div><div class="speech">${text}</div></div>`,
    )
    .join("")}</div>
  <div class="listen-row"><button class="listen-btn" data-speak="${encodeURIComponent(c.lines.map((x) => x[0] + ". " + x[1]).join(" "))}">🔊 Listen</button><button class="stop-btn" data-stop-speaking>Stop</button></div>`;
}

function renderStories() {
  const grid = $("#storyGrid");
  if (!grid) return;
  grid.innerHTML = shuffle(STORIES).map(
    (s) => `
    <article class="story-card">
      <span class="eyebrow">${s.level}</span>
      <h3>${s.title}</h3><div class="story-meta" dir="rtl">${s.pashtoTitle}</div>
      <div class="story-text">${s.text}</div>
      <div class="listen-row"><button class="listen-btn" data-speak="${encodeURIComponent(s.text)}">🔊 Listen to Story</button><button class="stop-btn" data-stop-speaking>Stop</button></div>
    </article>`,
  ).join("");
}

function speakText(text) {
  if (!("speechSynthesis" in window)) {
    alert("Voice is not supported in this browser.");
    return;
  }
  stopSpeaking();
  const u = new SpeechSynthesisUtterance(text);
  const english =
    voices.find((v) => /^en(-|_)/i.test(v.lang)) ||
    voices.find((v) => /English/i.test(v.name));
  if (english) u.voice = english;
  u.lang = english?.lang || "en-US";
  u.rate = 0.88;
  u.pitch = 1;
  speechSynthesis.speak(u);
}
function stopSpeaking() {
  if ("speechSynthesis" in window) speechSynthesis.cancel();
}
function loadVoices() {
  voices = speechSynthesis.getVoices();
}
if ("speechSynthesis" in window) {
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}

// One safe speech handler for dynamically rendered Words, Conversations and Stories.
document.addEventListener("click", (event) => {
  const speakButton = event.target.closest("[data-speak]");
  if (speakButton) {
    speakText(decodeURIComponent(speakButton.dataset.speak));
    return;
  }

  if (event.target.closest("[data-stop-speaking]")) {
    stopSpeaking();
  }
});

function buildVocabularyQuizQuestions(limit = 80) {
  if (!Array.isArray(VOCABULARY) || VOCABULARY.length < 4) return [];

  const questions = [];
  const sourceWords = shuffle(VOCABULARY);

  for (const word of sourceWords) {
    if (questions.length >= limit) break;
    const askPashto = questions.length % 2 === 0;
    const correctValue = askPashto ? word.pashto : word.word;
    const candidates = shuffle(
      VOCABULARY.filter((v) => v.word !== word.word),
    );

    const distractors = [];
    const seen = new Set([correctValue]);
    for (const candidate of candidates) {
      const value = askPashto ? candidate.pashto : candidate.word;
      if (!value || seen.has(value)) continue;
      seen.add(value);
      distractors.push(value);
      if (distractors.length === 3) break;
    }

    if (distractors.length < 3) continue;

    questions.push({
      id: `vocab-${askPashto ? "ps" : "en"}-${word.word}-${questions.length}`,
      unit: "Vocabulary",
      question: askPashto
        ? `What is the Pashto meaning of “${word.word}”?`
        : `What is the English word for “${word.pashto}”?`,
      options: shuffle([correctValue, ...distractors]),
      answer: correctValue,
      explanation: askPashto
        ? `${word.word} means ${word.pashto}.`
        : `${word.pashto} means ${word.word}.`,
    });
  }

  return questions;
}

function startQuiz(length) {
  const lessonQuizzes = QUIZZES.filter((q) => q.unit === "Vocabulary" || /^Unit\s+\d+$/i.test(q.unit));
  const pool = [...lessonQuizzes, ...buildVocabularyQuizQuestions(100)];
  currentQuizLength = Math.min(length, pool.length);
  currentQuiz = shuffle(pool).slice(0, currentQuizLength);
  quizIndex = 0;
  quizScore = 0;
  $("#quizIntro")?.classList.add("hidden");
  $("#quizResult")?.classList.add("hidden");
  $("#quizArea")?.classList.remove("hidden");
  renderQuestion();
}
function renderQuestion() {
  const q = currentQuiz[quizIndex];
  $("#qNumber").textContent = quizIndex + 1;
  $("#questionUnit").textContent = q.unit;
  $("#questionText").textContent = q.question;
  $("#liveScore").textContent = quizScore;
  $("#quizProgress").style.width = ((quizIndex + 1) / currentQuiz.length) * 100 + "%";
  $("#feedback").className = "feedback hidden";
  $("#feedback").textContent = "";
  $("#nextBtn").classList.add("hidden");
  $("#options").innerHTML = shuffle(q.options)
    .map(
      (opt, i) =>
        `<button class="option" data-answer="${encodeURIComponent(opt)}"><span class="letter">${String.fromCharCode(65 + i)}</span><span>${opt}</span></button>`,
    )
    .join("");
  $$(".option").forEach((btn) =>
    btn.addEventListener("click", () =>
      answerQuestion(decodeURIComponent(btn.dataset.answer)),
    ),
  );
}
function answerQuestion(answer) {
  const q = currentQuiz[quizIndex];
  $$(".option").forEach((btn) => {
    const value = decodeURIComponent(btn.dataset.answer);
    btn.disabled = true;
    if (value === q.answer) btn.classList.add("correct");
    if (value === answer && value !== q.answer) btn.classList.add("wrong");
  });
  const good = answer === q.answer;
  if (good) quizScore++;
  $("#liveScore").textContent = quizScore;
  const f = $("#feedback");
  f.classList.remove("hidden");
  f.classList.add(good ? "good" : "bad");
  f.textContent = (good ? "Correct! " : "Not quite. ") + q.explanation;
  $("#nextBtn").classList.remove("hidden");
}
function nextQuestion() {
  quizIndex++;
  if (quizIndex >= currentQuiz.length) finishQuiz();
  else renderQuestion();
}
function finishQuiz() {
  $("#quizArea").classList.add("hidden");
  $("#quizResult").classList.remove("hidden");
  $("#resultScore").textContent = quizScore;
  $("#resultTotal").textContent = currentQuiz.length;
  const pct = quizScore / currentQuiz.length;
  $("#resultTitle").textContent =
    pct >= 0.8
      ? "Excellent work!"
      : pct >= 0.6
        ? "Good progress!"
        : "Keep practicing!";
  $("#resultMessage").textContent =
    `You scored ${quizScore} out of ${currentQuiz.length}. Review the lessons and try again.`;
}
function setupQuiz() {
  $$("[data-quiz-length]").forEach((b) =>
    b.addEventListener("click", () => startQuiz(Number(b.dataset.quizLength))),
  );
  $("#nextBtn")?.addEventListener("click", nextQuestion);
  $("#tryAgain")?.addEventListener("click", () => startQuiz(currentQuizLength));
}
function closeMobileMenu() {
  const nav = $("#nav");
  if (nav) nav.style.display = "";
}
$("#mobileMenu")?.addEventListener("click", () => {
  const nav = $("#nav");
  if (nav) nav.style.display = nav.style.display === "flex" ? "" : "flex";
});
$("#brandLink")?.addEventListener("click", () => {
  if (location.hash !== "#home") location.hash = "home";
  else window.scrollTo({ top: 0, behavior: "smooth" });
});

renderHomeRoadmap();
renderHelpfulHome();
renderLessons();
renderVocabulary();
renderConversations();
renderStories();
setupVocabulary();
setupQuiz();
route();
