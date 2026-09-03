/* English Bridge functionality.
   Learning content lives in data/*.js.
*/
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const pages = $$(".page");
let currentQuiz = [];
let quizIndex = 0;
let quizScore = 0;
let currentQuizLength = 10;
let voices = [];

function shuffle(arr){ return [...arr].sort(()=>Math.random()-0.5); }

function showPage(id){
  pages.forEach(p=>p.classList.toggle("active",p.id===id));
  $$(".nav-btn").forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+id));
  closeMobileMenu();
  window.scrollTo({top:0,behavior:"smooth"});
  if(id==="vocabulary") renderVocabulary();
}

function route(){
  const hash = location.hash.replace(/^#/,"") || "home";
  const allowed = ["home","lessons","vocabulary","conversations","stories","quiz","about"];
  showPage(allowed.includes(hash)?hash:"home");
}

window.addEventListener("hashchange", route);

function renderHomeRoadmap(){
  const box=$("#homeLessonsPreview");
  if(!box) return;
  box.innerHTML=LESSONS.map((l,i)=>`
    <article class="roadmap-card">
      <div class="roadmap-number">${String(i+1).padStart(2,"0")}</div>
      <div>
        <span class="topic">${l.topic}</span>
        <h3>${l.title}</h3>
        <p>${l.subtitle}</p>
        <a class="text-link" href="lessons/${l.id}.html">Open Lesson →</a>
      </div>
    </article>`).join("");
}

function renderHelpfulHome(){
  const box=$("#homeHelpful");
  if(!box) return;
  const items=[
    ["📖","Study the lesson","Read the rule and examples first, then practice the lesson before moving on."],
    ["🗣️","Speak out loud","Use the conversations and repeat each sentence instead of only reading silently."],
    ["🎧","Listen and repeat","Use the voice buttons with stories and conversations to train your listening."],
    ["🧠","Review vocabulary","Learn a few words at a time and use them in your own simple sentences."],
    ["✅","Take the quiz","Check what you remember and return to the lesson when you make mistakes."],
    ["📅","Practice every day","A short daily routine is better than studying a lot only once in a while."]
  ];
  box.innerHTML=items.map(x=>`<article class="helpful-card"><span class="helpful-icon">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("");
}

function renderLessons(){
  $("#lessonGrid").innerHTML=LESSONS.map((l,i)=>`
    <article class="lesson-card">
      <div class="unit-badge">${i+1}</div>
      <div>
        <span class="topic">${l.topic}</span>
        <h3>${l.title}</h3>
        <p>${l.subtitle}</p>
        <a class="secondary lesson-open" href="lessons/${l.id}.html">Open Lesson →</a>
      </div>
    </article>`).join("");
}

function renderVocabulary(){
  const search=($("#wordSearch")?.value||"").trim().toLowerCase();
  const cat=$("#wordCategory")?.value||"all";
  const filtered=VOCABULARY.filter(v=>{
    const ms=!search||v.word.toLowerCase().includes(search)||v.pashto.toLowerCase().includes(search);
    const mc=cat==="all"||v.category===cat;
    return ms&&mc;
  });
  $("#wordGrid").innerHTML=filtered.map(v=>`
    <article class="word-card">
      <h3>${v.word}</h3>
      <div class="meaning">${v.pashto}</div>
      <div class="category">${v.category}</div>
      <div class="example">${v.example}</div>
      <button class="listen-btn" onclick="speakText(${JSON.stringify(v.word)})">🔊 Hear</button>
    </article>`).join("")||`<div class="conversation-preview"><b>No words found.</b><p>Try another search.</p></div>`;
}

function setupVocabulary(){
  const select=$("#wordCategory");
  if(!select) return;
  [...new Set(VOCABULARY.map(v=>v.category))].sort().forEach(c=>{
    const o=document.createElement("option");o.value=c;o.textContent=c;select.appendChild(o);
  });
  $("#wordSearch").addEventListener("input",renderVocabulary);
  $("#wordCategory").addEventListener("change",renderVocabulary);
  $("#randomWordBtn").addEventListener("click",()=>{
    const v=VOCABULARY[Math.floor(Math.random()*VOCABULARY.length)];
    const box=$("#randomWord");box.classList.remove("hidden");
    box.innerHTML=`<span class="eyebrow">RANDOM WORD</span><div style="font-size:27px;font-weight:900;margin-top:4px">${v.word}</div><div dir="rtl" style="font-size:20px;color:#ffd08a">${v.pashto}</div><div style="margin-top:7px;color:#cbd1d9">${v.category}</div><button class="listen-btn" style="margin-top:10px" onclick="speakText(${JSON.stringify(v.word)})">🔊 Hear word</button>`;
  });
}

function renderConversations(){
  const categories=["All",...new Set(CONVERSATIONS.map(c=>c.category))];
  const filterBox=$("#conversationFilters");
  if(filterBox){
    filterBox.innerHTML=categories.map((c,i)=>`<button class="conversation-filter ${i===0?"active":""}" data-category="${c}">${c}</button>`).join("");
    $$(".conversation-filter").forEach(btn=>btn.addEventListener("click",()=>{
      $$(".conversation-filter").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      renderConversationCards(btn.dataset.category);
    }));
  }
  renderConversationCards("All");
}

function renderConversationCards(category="All"){
  const list=category==="All"?CONVERSATIONS:CONVERSATIONS.filter(c=>c.category===category);
  $("#conversationGrid").innerHTML=list.map(c=>`
    <article class="conversation-card">
      <div class="conversation-meta">
        <span class="conversation-category">${c.category}</span>
        <span class="conversation-level">${c.level}</span>
      </div>
      <p class="conversation-description">${c.description}</p>
      ${dialogueHTML(c,false)}
    </article>`).join("");
}

function dialogueHTML(c,compact=false){
  return `<h3>${c.title}</h3><div class="story-meta" dir="rtl">${c.pashtoTitle}</div>
  <div class="dialogue" style="margin-top:${compact?12:17}px">${c.lines.map(([speaker,text])=>`
    <div class="line"><div class="speaker">${speaker}</div><div class="speech">${text}</div></div>`).join("")}</div>
  <div class="listen-row"><button class="listen-btn" onclick="speakText(${JSON.stringify(c.lines.map(x=>x[0]+'. '+x[1]).join(' '))})">🔊 Listen</button><button class="stop-btn" onclick="stopSpeaking()">Stop</button></div>`;
}

function renderStories(){
  $("#storyGrid").innerHTML=STORIES.map(s=>`
    <article class="story-card">
      <span class="eyebrow">${s.level}</span>
      <h3>${s.title}</h3><div class="story-meta" dir="rtl">${s.pashtoTitle}</div>
      <div class="story-text">${s.text}</div>
      <div class="listen-row"><button class="listen-btn" onclick="speakText(${JSON.stringify(s.text)})">🔊 Listen to Story</button><button class="stop-btn" onclick="stopSpeaking()">Stop</button></div>
    </article>`).join("");
}

function speakText(text){
  if(!("speechSynthesis" in window)){alert("Voice is not supported in this browser.");return;}
  stopSpeaking();
  const u=new SpeechSynthesisUtterance(text);
  const english=voices.find(v=>/^en(-|_)/i.test(v.lang))||voices.find(v=>/English/i.test(v.name));
  if(english) u.voice=english;
  u.lang=english?.lang||"en-US";u.rate=.88;u.pitch=1;
  speechSynthesis.speak(u);
}
function stopSpeaking(){if("speechSynthesis" in window)speechSynthesis.cancel();}
function loadVoices(){voices=speechSynthesis.getVoices();}
if("speechSynthesis" in window){loadVoices();speechSynthesis.onvoiceschanged=loadVoices;}

function startQuiz(length){
  currentQuizLength=length;currentQuiz=shuffle(QUIZZES).slice(0,length);quizIndex=0;quizScore=0;
  $("#quizIntro").classList.add("hidden");$("#quizResult").classList.add("hidden");$("#quizArea").classList.remove("hidden");renderQuestion();
}
function renderQuestion(){
  const q=currentQuiz[quizIndex];
  $("#qNumber").textContent=quizIndex+1;$("#questionUnit").textContent=q.unit;$("#questionText").textContent=q.question;$("#liveScore").textContent=quizScore;
  $("#quizProgress").style.width=((quizIndex/currentQuiz.length)*100)+"%";
  $("#feedback").className="feedback hidden";$("#feedback").textContent="";$("#nextBtn").classList.add("hidden");
  $("#options").innerHTML=shuffle(q.options).map((opt,i)=>`<button class="option" data-answer="${encodeURIComponent(opt)}"><span class="letter">${String.fromCharCode(65+i)}</span><span>${opt}</span></button>`).join("");
  $$(".option").forEach(btn=>btn.addEventListener("click",()=>answerQuestion(decodeURIComponent(btn.dataset.answer))));
}
function answerQuestion(answer){
  const q=currentQuiz[quizIndex];
  $$(".option").forEach(btn=>{
    const value=decodeURIComponent(btn.dataset.answer);btn.disabled=true;
    if(value===q.answer)btn.classList.add("correct");
    if(value===answer&&value!==q.answer)btn.classList.add("wrong");
  });
  const good=answer===q.answer;if(good)quizScore++;
  $("#liveScore").textContent=quizScore;
  const f=$("#feedback");f.classList.remove("hidden");f.classList.add(good?"good":"bad");f.textContent=(good?"Correct! ":"Not quite. ")+q.explanation;
  $("#nextBtn").classList.remove("hidden");
}
function nextQuestion(){quizIndex++;if(quizIndex>=currentQuiz.length)finishQuiz();else renderQuestion();}
function finishQuiz(){
  $("#quizArea").classList.add("hidden");$("#quizResult").classList.remove("hidden");
  $("#resultScore").textContent=quizScore;$("#resultTotal").textContent=currentQuiz.length;
  const pct=quizScore/currentQuiz.length;
  $("#resultTitle").textContent=pct>=.8?"Excellent work!":pct>=.6?"Good progress!":"Keep practicing!";
  $("#resultMessage").textContent=`You scored ${quizScore} out of ${currentQuiz.length}. Review the lessons and try again.`;
}
function setupQuiz(){
  $$("[data-quiz-length]").forEach(b=>b.addEventListener("click",()=>startQuiz(Number(b.dataset.quizLength))));
  $("#nextBtn").addEventListener("click",nextQuestion);$("#tryAgain").addEventListener("click",()=>startQuiz(currentQuizLength));
}
function closeMobileMenu(){$("#nav").style.display="";}
$("#mobileMenu").addEventListener("click",()=>{$("#nav").style.display=$("#nav").style.display==="flex"?"":"flex";});
$("#brandLink").addEventListener("click",()=>{if(location.hash!=="#home")location.hash="home";else window.scrollTo({top:0,behavior:"smooth"});});

renderHomeRoadmap();
renderHelpfulHome();
renderLessons();
renderVocabulary();
renderConversations();
renderStories();
setupVocabulary();
setupQuiz();
route();
