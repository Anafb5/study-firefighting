/* Aplicación estática: sin cuentas, sin analítica, sin dependencias externas.
   Progreso en localStorage del navegador. */
(function(){
"use strict";
const STORE=window.STUDY_CONFIG?.store||"study-firefighting-t11-v1";
const abc=["A","B","C","D"];
const $=id=>document.getElementById(id);
const esc=value=>String(value==null?"":value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const shuffled=a=>a.slice().sort(()=>Math.random()-.5);
let state={read:[],mastered:[],wrong:[],history:[]};
try{const saved=JSON.parse(localStorage.getItem(STORE)||"null");if(saved&&typeof saved==="object"){state={...state,...saved};for(const k of ["read","mastered","wrong","history"])if(!Array.isArray(state[k]))state[k]=[];}}catch(err){}
const save=()=>{try{localStorage.setItem(STORE,JSON.stringify(state));}catch(err){}};
const section=id=>SECTIONS.find(s=>s.id===id);
let cardOrder=[],cardIndex=0,cardFlipped=false;
let matchSet=0,matchPairs=[],matchDone=[],matchLeft=null;
let exam=null,view="inicio",toastTimeout;
function toast(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>t.classList.remove("show"),2200);}
function switchView(next){view=next;document.querySelectorAll(".view").forEach(node=>node.classList.toggle("active",node.id==="view-"+next));document.querySelectorAll(".nav-link").forEach(node=>node.classList.toggle("active",node.dataset.view===next));$("sidebar").classList.remove("open");window.scrollTo({top:0,behavior:"smooth"});if(next==="tarjetas")renderCards(true);if(next==="relacionar")renderMatch();if(next==="test")renderAvailability();if(next==="temario")renderTopics();}
function init(){
  $("sidebar-topics").innerHTML=SECTIONS.map(s=>'<button class="subnav-link" data-section="'+esc(s.id)+'"><b>'+s.n+'</b>'+esc(s.title)+'</button>').join("");
  $("home-topics").innerHTML=SECTIONS.map(s=>{const items=TOPICS.filter(t=>t.section===s.id);const completed=items.filter(t=>state.read.includes(t.id)).length;return '<button class="home-topic" data-section="'+esc(s.id)+'"><span class="number">BLOQUE '+s.n+'</span><h3>'+esc(s.title)+'</h3><p>'+esc(s.sub)+'</p><div class="meta-line"><span>'+items.length+' apartados · pp. '+esc(s.pages)+'</span><span>'+completed+'/'+items.length+' vistos →</span></div></button>';}).join("");
  $("toc").innerHTML='<button data-toc="all">Todo</button>'+SECTIONS.map(s=>'<button data-toc="'+esc(s.id)+'">'+s.n+' · '+esc(s.title)+'</button>').join("");
  $("cards-filter").insertAdjacentHTML("beforeend",SECTIONS.map(s=>'<option value="'+s.id+'">'+s.n+' · '+esc(s.title)+'</option>').join(""));
  $("exam-section").insertAdjacentHTML("beforeend",SECTIONS.map(s=>'<option value="'+s.id+'">'+s.n+' · '+esc(s.title)+'</option>').join(""));
  $("match-filter").innerHTML=MATCH_SETS.map((s,i)=>'<option value="'+i+'">'+esc(s.title)+'</option>').join("");
  $("topic-search").addEventListener("input",()=>renderTopics());
  $("cards-filter").addEventListener("change",()=>renderCards(true));
  $("cards-pending").addEventListener("change",()=>renderCards(true));
  $("cards-shuffle").addEventListener("click",()=>renderCards(true));
  $("match-filter").addEventListener("change",()=>{matchSet=Number($("match-filter").value);resetMatch();});
  $("match-reset").addEventListener("click",resetMatch);
  $("exam-section").addEventListener("change",renderAvailability);
  $("exam-pool").addEventListener("change",renderAvailability);
  $("exam-count").addEventListener("change",renderAvailability);
  $("exam-start").addEventListener("click",startExam);
  $("menu-button").addEventListener("click",()=>$("sidebar").classList.toggle("open"));
  $("reset-button").addEventListener("click",()=>{if(confirm("¿Quieres borrar las secciones vistas, tarjetas dominadas y resultados guardados en este dispositivo?")){state={read:[],mastered:[],wrong:[],history:[]};save();renderHome();renderStats();renderTopics();renderCards(true);toast("Progreso reiniciado");}});
  document.addEventListener("click",handleClick);
  renderHome();renderStats();renderTopics();renderMatch();renderAvailability();
}
function renderHome(){
 $("home-topics").innerHTML=SECTIONS.map(s=>{const items=TOPICS.filter(t=>t.section===s.id);const completed=items.filter(t=>state.read.includes(t.id)).length;return '<button class="home-topic" data-section="'+esc(s.id)+'"><span class="number">BLOQUE '+s.n+'</span><h3>'+esc(s.title)+'</h3><p>'+esc(s.sub)+'</p><div class="meta-line"><span>'+items.length+' apartados · pp. '+esc(s.pages)+'</span><span>'+completed+'/'+items.length+' vistos →</span></div></button>';}).join("");
}
function renderStats(){
 const total=TOPICS.length,read=state.read.length,mastered=state.mastered.length;
 const avg=state.history.length?Math.round(state.history.reduce((sum,t)=>sum+t.percent,0)/state.history.length):null;
 const stats=[
 ["",read+"/"+total,"Apartados estudiados",Math.round(read/total*100)],
 ["",mastered+"/"+CARDS.length,"Tarjetas dominadas",Math.round(mastered/CARDS.length*100)],
 ["",state.wrong.length,"Preguntas por repasar",null],
 ["",avg==null?"—":avg+" %","Media en tests · "+state.history.length+" realizados",avg]
 ];
 $("stats").innerHTML=stats.map(s=>'<div class="stat"><span class="num">'+s[1]+'</span><span class="meta">'+s[2]+'</span>'+(s[3]==null?"":'<div class="bar"><i style="width:'+Math.min(100,s[3])+'%"></i></div>')+'</div>').join("");
}
function renderTopics(selected){
 const search=$("topic-search").value.trim().toLocaleLowerCase("es");
 const existingOpen=new Set(Array.from(document.querySelectorAll(".lesson.open")).map(el=>el.id.replace("lesson-","")));
 const selectedSection=selected||document.querySelector("#toc button.selected")?.dataset.toc||"all";
 document.querySelectorAll("#toc button").forEach(b=>b.classList.toggle("selected",b.dataset.toc===selectedSection));
 let count=0;
 $("topic-list").innerHTML=SECTIONS.filter(s=>selectedSection==="all"||s.id===selectedSection).map(s=>{
  const lessons=TOPICS.filter(t=>t.section===s.id&&(!search||(t.number+" "+t.title+" "+t.lead+" "+t.points.map(p=>p.join(" ")).join(" ")).toLocaleLowerCase("es").includes(search)));
  count+=lessons.length;
  if(!lessons.length)return "";
  return '<section id="group-'+s.id+'"><div class="group-heading"><span class="index">'+s.n+'</span><h2>'+esc(s.title)+'</h2><span class="range">PÁGS. '+esc(s.pages)+'</span></div>'+
  lessons.map((t,index)=>{
   const read=state.read.includes(t.id);
   const isOpen=!!search||existingOpen.has(t.id)||(selected===s.id&&index===0)||(selectedSection==="all"&&t.id==="1-1"&&!existingOpen.size&&!selected);
   const study=window.StudyLayouts?window.StudyLayouts.render(t):'<div class="schematic">'+t.points.map(x=>'<div class="keypoint"><strong>'+esc(x[0])+'</strong><p>'+esc(x[1])+'</p></div>').join("")+'</div>';
   return '<article class="lesson'+(isOpen?" open":"")+'" id="lesson-'+t.id+'"><button class="lesson-header" data-lesson="'+esc(t.id)+'" aria-expanded="'+(isOpen?"true":"false")+'"><span class="lesson-id">'+esc(t.number)+'</span><span class="lesson-title">'+esc(t.title)+'</span>'+(read?'<span class="lesson-progress-mark">✓ Estudiado</span>':"")+'<span class="lesson-pages">p. '+esc(t.pages)+'</span><span class="chevron">⌄</span></button><div class="lesson-body"><p class="lesson-lead">'+esc(t.lead)+'</p>'+study+'<div class="st-final-actions"><div class="st-takeaway"><b>Para recordar · </b>'+esc(t.tip)+'</div><button class="btn btn-small '+(read?"btn-outline":"btn-accent")+'" data-read="'+esc(t.id)+'">'+(read?"✓ Estudiado":"Marcar como estudiado")+'</button><div class="lesson-footer"><span class="source">Referencia del documento · pp. '+esc(t.pages)+'</span></div>'+(t.note?'<div class="lesson-note">Atención al temario: '+esc(t.note)+'</div>':"")+'</div></div></article>';
  }).join("")+'</section>';
 }).join("")||'<div class="workspace muted">No hay apartados que coincidan con la búsqueda.</div>';
 $("search-count").textContent=count+" apartados";
}
function getCards(){
 const s=$("cards-filter").value,pending=$("cards-pending").checked;
 return CARDS.map((c,i)=>({c,i})).filter(item=>(s==="all"||item.c[0]===s)&&(!pending||!state.mastered.includes(item.i)));
}
function renderCards(reset){
 const pool=getCards();if(reset){cardOrder=shuffled(pool);cardIndex=0;cardFlipped=false;}
 if(!pool.length){$("flashcard-area").innerHTML='<div class="flashcard-empty"><h3>¡No quedan tarjetas pendientes!</h3><p>Desmarca «Solo pendientes» o elige otro bloque para seguir practicando.</p></div>';return;}
 const allowed=new Set(pool.map(x=>x.i));cardOrder=cardOrder.filter(x=>allowed.has(x.i));if(!cardOrder.length)cardOrder=shuffled(pool);
 cardIndex=Math.max(0,Math.min(cardIndex,cardOrder.length-1));
 const item=cardOrder[cardIndex];const card=item.c;const known=state.mastered.includes(item.i);
 $("flashcard-area").innerHTML='<div class="flash-progress"><span>'+esc(section(card[0]).title)+'</span><strong>Tarjeta '+(cardIndex+1)+' / '+cardOrder.length+'</strong></div>'+
 '<button class="flashcard'+(cardFlipped?" flipped":"")+'" id="flashcard-flip" aria-label="Girar tarjeta"><span class="face-label">'+(cardFlipped?"RESPUESTA · "+esc(card[3]):"PREGUNTA · PIÉNSALA ANTES DE GIRAR")+'</span><span class="face-text">'+esc(cardFlipped?card[2]:card[1])+'</span><span class="small-help">Pulsa en la tarjeta para '+(cardFlipped?"ver la pregunta":"descubrir la respuesta")+'</span></button>'+
 '<div class="flash-actions"><button class="btn btn-outline" id="cards-prev">← Anterior</button><button class="btn btn-outline" id="cards-flip">↻ Girar</button><button class="btn '+(known?"btn-outline":"btn-accent")+'" id="cards-mark">'+(known?"✓ Dominada":"La domino ✓")+'</button><button class="btn btn-outline" id="cards-next">Siguiente →</button></div>';
}
function toggleMastered(){
 const card=cardOrder[cardIndex];if(!card)return;
 if(state.mastered.includes(card.i)){state.mastered=state.mastered.filter(i=>i!==card.i);toast("Marcada como pendiente");}
 else {state.mastered.push(card.i);toast("Tarjeta marcada como dominada");}
 save();renderStats();renderCards(false);
}
function resetMatch(){
 matchPairs=shuffled(MATCH_SETS[matchSet].pairs.map((pair,i)=>({id:i,left:pair[0],right:pair[1]})));
 matchDone=[];matchLeft=null;renderMatch();
}
function renderMatch(){
 if(!matchPairs.length){resetMatch();return;}
 const right=shuffled(matchPairs); // Reordena para no poder deducir correspondencias por posición.
 const savedRight=matchPairs._right||right;matchPairs._right=savedRight;
 $("match-area").innerHTML='<div class="match-status">'+matchDone.length+' de '+matchPairs.length+' asociaciones correctas. Selecciona primero un concepto de la izquierda y luego su descripción.</div>'+
 '<div class="match-layout"><div class="match-column"><h3>Concepto</h3>'+matchPairs.map(p=>'<button class="match-option '+(matchDone.includes(p.id)?"matched":matchLeft===p.id?"selected":"")+'" data-match-left="'+p.id+'" '+(matchDone.includes(p.id)?"disabled":"")+'>'+esc(p.left)+'</button>').join("")+'</div><div class="match-column"><h3>Definición / correspondencia</h3>'+savedRight.map(p=>'<button class="match-option '+(matchDone.includes(p.id)?"matched":"")+'" data-match-right="'+p.id+'" '+(matchDone.includes(p.id)?"disabled":"")+'>'+esc(p.right)+'</button>').join("")+'</div></div>'+
 (matchDone.length===matchPairs.length?'<div class="lesson-note" style="background:#e6f8ef;color:#176347;border-color:#bce3cb">¡Excelente! Has completado todas las asociaciones. Puedes probar otro bloque o repetirlo con las opciones mezcladas.</div>':"");
}
function handleMatch(side,id){
 const val=Number(id);
 if(side==="left"){if(!matchDone.includes(val)){matchLeft=val;renderMatch();}return;}
 if(matchLeft===null){toast("Primero elige un concepto de la columna izquierda");return;}
 const chosen=matchPairs.find(p=>p.id===matchLeft),other=matchPairs.find(p=>p.id===val);
 // Algunas etiquetas de categoría son iguales; cualquiera de las tarjetas con igual respuesta es equivalente.
 if(chosen.right===other.right){matchDone.push(matchLeft);if(chosen.id!==other.id){ // evita reutilizar etiqueta de la derecha, manteniendo respuesta equivalente
  const array=matchPairs._right;const a=array.findIndex(p=>p.id===other.id),b=array.findIndex(p=>p.id===chosen.id);
  if(a>=0&&b>=0)[array[a],array[b]]=[array[b],array[a]];
 }
 matchLeft=null;renderMatch();if(matchDone.length===matchPairs.length)toast("Todas las asociaciones correctas");}
 else{toast("No coincide. Vuelve a intentarlo.");matchLeft=null;renderMatch();}
}
function renderAvailability(){
 const filter=$("exam-section").value,pool=$("exam-pool").value;
 const n=QUESTIONS.filter(q=>(filter==="all"||q.section===filter)&&(pool!=="wrong"||state.wrong.includes(q.id))).length;
 $("test-availability").textContent="Disponibles: "+n+" preguntas para esta selección. Puntuación por aciertos (sin penalización por fallo).";
 $("exam-start").disabled=n===0;
}
function startExam(){
 const sec=$("exam-section").value,pool=$("exam-pool").value;
 const candidates=QUESTIONS.filter(q=>(sec==="all"||q.section===sec)&&(pool!=="wrong"||state.wrong.includes(q.id)));
 if(!candidates.length){toast("No hay preguntas en la selección");return;}
 const number=$("exam-count").value==="all"?candidates.length:Math.min(Number($("exam-count").value),candidates.length);
 exam={items:shuffled(candidates).slice(0,number),pos:0,answers:{},checked:{},mode:$("exam-mode").value,start:Date.now()};
 $("test-setup").classList.add("hidden");$("test-results").classList.add("hidden");$("test-session").classList.remove("hidden");renderQuestion();window.scrollTo(0,0);
}
function renderQuestion(){
 if(!exam)return;
 const q=exam.items[exam.pos],chosen=exam.answers[q.id],locked=!!exam.checked[q.id];
 const n=Object.keys(exam.answers).length;
 const feedback=exam.mode==="practice"&&locked?'<div class="answer-feedback"><strong>'+(chosen===q.correct?"Respuesta correcta. ":"Respuesta incorrecta. ")+'</strong>'+esc(q.why)+' <span class="muted">PDF p. '+esc(q.page)+'</span></div>':"";
 $("test-session").innerHTML='<div class="exam-head"><strong>'+(exam.mode==="exam"?"SIMULACRO":"ENTRENAMIENTO")+' · '+(exam.pos+1)+' / '+exam.items.length+'</strong><span>'+n+' respuestas seleccionadas</span><button class="plain-button" data-exam="exit">Salir del test</button></div>'+
 '<div class="question-card"><div class="question-top"><span class="qnum">PREGUNTA '+String(exam.pos+1).padStart(2,"0")+'</span><span>'+esc(section(q.section).title)+'</span><span class="difficulty">'+esc(q.difficulty)+' · p. '+esc(q.page)+'</span></div><h3>'+esc(q.q)+'</h3>'+
 q.options.map((option,i)=>'<label class="answer-option '+(locked?(i===q.correct?"correct":i===chosen?"incorrect":""):"")+'"><input type="radio" name="answer" value="'+i+'" '+(chosen===i?"checked":"")+' '+(locked?"disabled":"")+'><span class="letter">'+abc[i]+'.</span><span>'+esc(option)+'</span></label>').join("")+feedback+'</div>'+
 '<div class="exam-actions"><button class="btn btn-outline" data-exam="prev" '+(exam.pos===0?"disabled":"")+'>← Anterior</button><div style="display:flex;gap:9px;flex-wrap:wrap">'+(exam.mode==="practice"&&!locked?'<button class="btn btn-outline" data-exam="check" '+(chosen===undefined?"disabled":"")+'>Comprobar respuesta</button>':"")+
 (exam.pos===exam.items.length-1?'<button class="btn btn-accent" data-exam="finish">Finalizar y corregir →</button>':'<button class="btn btn-accent" data-exam="next" '+(exam.mode==="practice"&&!locked?"disabled":"")+'>Siguiente →</button>')+'</div></div>';
 $("test-session").querySelectorAll('input[name="answer"]').forEach(el=>el.addEventListener("change",event=>{exam.answers[q.id]=Number(event.target.value);renderQuestion();}));
}
function finishExam(){
 if(!exam)return;
 const omitted=exam.items.filter(q=>exam.answers[q.id]===undefined).length;
 if(omitted&&!confirm("Has dejado "+omitted+" pregunta(s) sin contestar. ¿Quieres finalizar el test?"))return;
 let correct=0,wrong=0;
 const incorrect=[];
 exam.items.forEach(q=>{
  const answer=exam.answers[q.id];const good=answer===q.correct;
  if(good){correct++;state.wrong=state.wrong.filter(id=>id!==q.id);}
  else{if(answer!==undefined)wrong++;incorrect.push(q);if(!state.wrong.includes(q.id))state.wrong.push(q.id);}
 });
 const pct=Math.round(correct/exam.items.length*100);
 const duration=Math.floor((Date.now()-exam.start)/1000);
 state.history.unshift({date:new Date().toISOString(),percent:pct,total:exam.items.length,correct:correct});state.history=state.history.slice(0,100);save();renderStats();renderHome();renderAvailability();
 $("test-session").classList.add("hidden");$("test-results").classList.remove("hidden");
 $("test-results").innerHTML='<div class="result-banner"><div class="eyebrow">RESULTADO DEL TEST</div><div class="score">'+pct+'%</div><h2>'+ (pct>=90?"Dominio excelente":pct>=70?"Buen resultado":pct>=50?"Vas avanzando":"Necesitas reforzar este bloque")+'</h2><p>Aciertos sin penalización · Tiempo '+Math.floor(duration/60)+' min '+(duration%60)+' s · '+esc(exam.mode==="exam"?"Simulacro":"Entrenamiento")+'</p></div>'+
 '<div class="result-grid"><div class="result-cell"><strong style="color:var(--success)">'+correct+'</strong><small>Correctas</small></div><div class="result-cell"><strong style="color:var(--error)">'+wrong+'</strong><small>Incorrectas</small></div><div class="result-cell"><strong>'+omitted+'</strong><small>Sin contestar</small></div></div>'+
 '<div class="workspace"><h2>Revisión explicada</h2><p class="muted small">Cada respuesta indica la página del PDF. Repite tus errores desde «Solo preguntas falladas».</p>'+
 exam.items.map((q,i)=>{const choice=exam.answers[q.id],ok=choice===q.correct;return '<div class="result-review"><h3><span style="color:'+(ok?"var(--success)":"var(--error)")+'">'+(ok?"✓":"✕")+'</span> '+(i+1)+'. '+esc(q.q)+'</h3><p class="small muted">Tu respuesta: '+(choice===undefined?"Sin contestar":esc(abc[choice]+". "+q.options[choice]))+'</p><p class="small">Correcta: <strong>'+esc(abc[q.correct]+". "+q.options[q.correct])+'</strong></p><div class="answer-feedback">'+esc(q.why)+' <strong>— PDF p. '+esc(q.page)+'</strong></div><hr style="border:0;border-top:1px solid var(--line);margin:20px 0"></div>';}).join("")+
 '<button class="btn btn-accent" data-exam="restart">Preparar otro test →</button></div>';
 window.scrollTo(0,0);exam=null;
}
function handleClick(event){
 const btn=event.target.closest("button");if(!btn)return;
 if(btn.id==="reset-button-alt"){$("reset-button").click();return;}
 if(btn.dataset.view){switchView(btn.dataset.view);return;}
 if(btn.dataset.action==="start-study"){switchView("temario");return;}
 if(btn.dataset.action==="start-exam"){switchView("test");return;}
 if(btn.dataset.section){switchView("temario");$("topic-search").value="";renderTopics(btn.dataset.section);return;}
 if(btn.dataset.toc){renderTopics(btn.dataset.toc);return;}
 if(btn.dataset.lesson){const lesson=$("lesson-"+btn.dataset.lesson);lesson.classList.toggle("open");btn.setAttribute("aria-expanded",String(lesson.classList.contains("open")));return;}
 if(btn.dataset.read){const id=btn.dataset.read;state.read=state.read.includes(id)?state.read.filter(v=>v!==id):state.read.concat([id]);save();renderStats();renderHome();const open=$("lesson-"+id);renderTopics();const again=$("lesson-"+id);if(again){again.classList.add("open");again.querySelector(".lesson-header").setAttribute("aria-expanded","true");}toast(state.read.includes(id)?"Apartado marcado como estudiado":"Apartado marcado como pendiente");return;}
 if(btn.id==="flashcard-flip"||btn.id==="cards-flip"){cardFlipped=!cardFlipped;renderCards(false);return;}
 if(btn.id==="cards-prev"||btn.id==="cards-next"){cardIndex=(cardIndex+(btn.id==="cards-next"?1:-1)+cardOrder.length)%cardOrder.length;cardFlipped=false;renderCards(false);return;}
 if(btn.id==="cards-mark"){toggleMastered();return;}
 if(btn.dataset.matchLeft!==undefined){handleMatch("left",btn.dataset.matchLeft);return;}
 if(btn.dataset.matchRight!==undefined){handleMatch("right",btn.dataset.matchRight);return;}
 if(btn.dataset.exam){
  if(btn.dataset.exam==="exit"){if(confirm("¿Quieres salir? Las respuestas de este intento no se guardarán.")){exam=null;$("test-session").classList.add("hidden");$("test-setup").classList.remove("hidden");}return;}
  if(btn.dataset.exam==="restart"){$("test-results").classList.add("hidden");$("test-setup").classList.remove("hidden");renderAvailability();return;}
  if(!exam)return;
  if(btn.dataset.exam==="check"){const q=exam.items[exam.pos];if(exam.answers[q.id]!==undefined){exam.checked[q.id]=true;renderQuestion();}return;}
  if(btn.dataset.exam==="prev"){exam.pos=Math.max(0,exam.pos-1);renderQuestion();return;}
  if(btn.dataset.exam==="next"){exam.pos=Math.min(exam.items.length-1,exam.pos+1);renderQuestion();return;}
  if(btn.dataset.exam==="finish"){finishExam();return;}
 }
}

/* Puente de restauración de sesión: preserva el estado transitorio sin tocar el progreso. */
window.FireStudySession={
 snapshot(){
  return {
   cards:{order:cardOrder.map(x=>x.i),index:cardIndex,flipped:cardFlipped},
   match:{set:matchSet,leftOrder:matchPairs.map(x=>x.id),rightOrder:(matchPairs._right||[]).map(x=>x.id),done:matchDone.slice(),left:matchLeft},
   exam:exam?{ids:exam.items.map(q=>q.id),pos:exam.pos,answers:{...exam.answers},checked:{...exam.checked},mode:exam.mode,start:exam.start}:null
  };
 },
 restore(snapshot){
  if(!snapshot||typeof snapshot!=="object")return;
  if(snapshot.cards&&Array.isArray(snapshot.cards.order)){
   const available=new Set(getCards().map(x=>x.i));
   cardOrder=snapshot.cards.order.filter(x=>Number.isInteger(x)&&available.has(x)).map(i=>({i,c:CARDS[i]}));
   cardIndex=Math.max(0,Math.min(Number(snapshot.cards.index)||0,Math.max(cardOrder.length-1,0)));
   cardFlipped=!!snapshot.cards.flipped;
   if(cardOrder.length)renderCards(false);
  }
  if(snapshot.match){
   const m=snapshot.match,selected=Number(m.set);
   if(Number.isInteger(selected)&&MATCH_SETS[selected]){
    matchSet=selected;$("match-filter").value=String(selected);
    const base=MATCH_SETS[selected].pairs.map((p,i)=>({id:i,left:p[0],right:p[1]}));
    const order=Array.isArray(m.leftOrder)?m.leftOrder:base.map(x=>x.id);
    const seen=new Set();
    matchPairs=order.map(id=>base.find(x=>x.id===id)).filter(p=>p&&!seen.has(p.id)&&seen.add(p.id));
    for(const p of base)if(!seen.has(p.id))matchPairs.push(p);
    const right=Array.isArray(m.rightOrder)?m.rightOrder:base.map(x=>x.id);
    matchPairs._right=right.map(id=>base.find(x=>x.id===id)).filter(Boolean);
    if(matchPairs._right.length!==base.length)matchPairs._right=base.slice().reverse();
    matchDone=Array.isArray(m.done)?m.done.filter(id=>base.some(p=>p.id===id)):[];
    matchLeft=base.some(p=>p.id===m.left&&!matchDone.includes(m.left))?m.left:null;
    renderMatch();
   }
  }
  if(snapshot.exam&&Array.isArray(snapshot.exam.ids)){
   const x=snapshot.exam;
   const byId=new Map(QUESTIONS.map(q=>[q.id,q]));
   const items=x.ids.map(id=>byId.get(id)).filter(Boolean);
   if(items.length){
    const answers={};const checked={};
    for(const q of items){
     const a=x.answers?.[q.id];
     if(Number.isInteger(a)&&a>=0&&a<4)answers[q.id]=a;
     if(x.checked?.[q.id]===true)checked[q.id]=true;
    }
    exam={
      items,pos:Math.max(0,Math.min(Number(x.pos)||0,items.length-1)),
      answers,checked,mode:x.mode==="practice"?"practice":"exam",
      start:Number.isFinite(x.start)?x.start:Date.now()
    };
    $("test-setup").classList.add("hidden");
    $("test-results").classList.add("hidden");
    $("test-session").classList.remove("hidden");
    renderQuestion();
   }
  }
 }
};

document.addEventListener("DOMContentLoaded",init);
})();