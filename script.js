let currentQuiz=[],currentIndex=0,score=0,currentQuizLength=10;
let selectedQuizCategory="all";

function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.page===id));
  window.scrollTo({top:0,behavior:"smooth"});
  document.getElementById("nav").style.display="";
}
document.querySelectorAll(".nav-btn").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.page)));
document.getElementById("mobileMenu").addEventListener("click",()=>{
  const nav=document.getElementById("nav"); nav.style.display=nav.style.display==="flex"?"":"flex";
});

function renderHome(){
  document.getElementById("homeUnitCount").textContent=`Units 1–${units.length}`;
  document.getElementById("homeWordCount").textContent=`${vocabulary.length}+ vocabulary words`;
  document.getElementById("homeProgress").style.width=`${Math.min(100,units.length/8*100)}%`;
}
function renderLessons(){
  document.getElementById("lessonGrid").innerHTML=units.map(u=>`
    <div class="lesson-card">
      <div class="unit-badge">${u.id}</div>
      <div><div class="unit-number">UNIT ${u.id}</div><h3>${u.title}</h3><p>${u.preview}</p>
      <button onclick="openLesson(${u.id})">Open Lesson →</button></div>
    </div>`).join("");
}
function openLesson(id){
  const u=units.find(x=>x.id===id); const detail=document.getElementById("lessonDetail");
  detail.innerHTML=`<button class="back" onclick="closeLesson()">Close ×</button>
  <div class="unit-number">UNIT ${u.id}</div><h2>${u.title}</h2>
  ${u.sections.map(s=>`
    <h3>${s.title}</h3>
    <div class="definition">${s.definition}</div>
    <div class="pashto pashto-box">${s.pashto}</div>
    ${s.examples.length?`<div class="example">${s.examples.join("<br>")}</div>`:""}
  `).join("")}`;
  detail.classList.remove("hidden"); detail.scrollIntoView({behavior:"smooth",block:"start"});
}
function closeLesson(){document.getElementById("lessonDetail").classList.add("hidden")}

function renderVocabulary(list=vocabulary){
  const grid=document.getElementById("vocabGrid");
  if(!list.length){grid.innerHTML=`<div class="lesson-detail">No words found.</div>`;return}
  grid.innerHTML=list.map((v,i)=>`
    <div class="vocab-card">
      <div class="word">${escapeHTML(v.word)}</div>
      <div class="meaning pashto">${escapeHTML(v.meaning)}</div>
      <div class="part">${escapeHTML(v.part)}</div>
      <div class="example-text">${escapeHTML(v.example)}</div>
      <div class="label">Word ${i+1}</div>
    </div>`).join("");
}
document.getElementById("vocabSearch").addEventListener("input",e=>{
  const term=e.target.value.trim().toLowerCase();
  renderVocabulary(vocabulary.filter(v=>v.word.toLowerCase().includes(term)||v.meaning.toLowerCase().includes(term)));
});

function renderTenses(){
  document.getElementById("tenseGrid").innerHTML=tenses.map(t=>`
    <div class="tense-card">
      <h3>${escapeHTML(t.title)}</h3>
      <div class="formula">${escapeHTML(t.formula)}</div>
      <div class="english-def"><b>Definition:</b><br>${escapeHTML(t.english)}</div>
      <div class="pashto pashto-def"><b>پښتو:</b><br>${escapeHTML(t.pashto)}</div>
      <div class="tense-examples"><b>Examples:</b>${t.examples.map(x=>`<div>${escapeHTML(x)}</div>`).join("")}</div>
    </div>`).join("");
}

function escapeHTML(s){
  return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
}
function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}
  return a;
}
function makeVocabularyQuestions(){
  return vocabulary.map((v,i)=>{
    const distractors=shuffle(vocabulary.filter((x,j)=>j!==i)).slice(0,3);
    const choices=shuffle([{text:v.meaning,correct:true},...distractors.map(x=>({text:x.meaning,correct:false}))]);
    return {u:"Vocabulary",q:`What is the Pashto meaning of "${v.word}"?`,a:choices.map(x=>x.text),c:choices.findIndex(x=>x.correct),e:`"${v.word}" means "${v.meaning}".`};
  });
}
function setQuizCategory(category,btn){
  selectedQuizCategory=category;
  document.querySelectorAll(".category-btn").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
}
function startQuiz(category="all",n=10){
  selectedQuizCategory=category; currentQuizLength=n; score=0; currentIndex=0;
  const vocabQs=makeVocabularyQuestions();
  let pool=category==="lesson"?lessonQuestions:category==="vocabulary"?vocabQs:[...lessonQuestions,...vocabQs];
  if(pool.length<n) n=pool.length;
  currentQuiz=shuffle(pool).slice(0,n);
  document.getElementById("quizIntro").classList.add("hidden");
  document.getElementById("quizResult").classList.add("hidden");
  document.getElementById("quizArea").classList.remove("hidden");
  document.getElementById("liveScore").textContent="0";
  renderQuestion();
}
function renderQuestion(){
  const item=currentQuiz[currentIndex];
  document.getElementById("qNumber").textContent=`${currentIndex+1} / ${currentQuiz.length}`;
  document.getElementById("questionUnit").textContent=item.u==="Vocabulary"?"Vocabulary":`Unit ${item.u}`;
  document.getElementById("questionText").textContent=item.q;
  document.getElementById("quizProgress").style.width=`${(currentIndex/currentQuiz.length)*100}%`;
  const opts=shuffle(item.a.map((text,i)=>({text,correct:i===item.c})));
  document.getElementById("options").innerHTML=opts.map((o,i)=>`
    <button class="option" data-correct="${o.correct}" data-feedback="${escapeHTML(item.e)}" onclick="chooseAnswer(this,${o.correct})">
      <span class="letter">${String.fromCharCode(65+i)}</span><span>${escapeHTML(o.text)}</span>
    </button>`).join("");
  document.getElementById("feedback").className="feedback hidden";
  document.getElementById("nextBtn").classList.add("hidden");
}
function chooseAnswer(btn,correct){
  document.querySelectorAll(".option").forEach(o=>o.disabled=true);
  btn.classList.add(correct?"correct":"wrong");
  if(!correct) document.querySelectorAll(".option").forEach(o=>{if(o.dataset.correct==="true")o.classList.add("correct")});
  else{score++;document.getElementById("liveScore").textContent=score}
  const fb=document.getElementById("feedback");
  fb.textContent=correct?`Correct! ${btn.dataset.feedback}`:`Not quite. ${btn.dataset.feedback}`;
  fb.className=`feedback ${correct?"good":"bad"}`;
  document.getElementById("nextBtn").classList.remove("hidden");
}
function nextQuestion(){
  currentIndex++;
  if(currentIndex>=currentQuiz.length){finishQuiz();return}
  renderQuestion();
}
function finishQuiz(){
  document.getElementById("quizArea").classList.add("hidden");
  document.getElementById("quizResult").classList.remove("hidden");
  document.getElementById("resultScore").textContent=score;
  document.getElementById("resultTotal").textContent=currentQuiz.length;
  const pct=score/currentQuiz.length;
  document.getElementById("resultTitle").textContent=pct>=.9?"Excellent work!":pct>=.7?"Good job!":pct>=.5?"Keep practicing!":"Let's review and try again!";
  document.getElementById("resultMessage").textContent=`You answered ${score} out of ${currentQuiz.length} questions correctly (${Math.round(pct*100)}%).`;
}

renderHome();renderLessons();renderVocabulary();renderTenses();