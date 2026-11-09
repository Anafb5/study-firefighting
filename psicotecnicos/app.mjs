import {TOPICS,TOPIC_BY_ID,EXTRA_MATERIAL} from "./topics.mjs";
import {createSession,VARIANTS,VARIANT_LABELS} from "./generator.mjs";
import {OfficialExamController} from "./official-ui.mjs";
import {renderAdvancedVisual,renderOptionVisual,renderAdvancedDemo,isAdvancedVisual} from "./visual-render.mjs";
import {LEVEL_LABELS} from "./advanced-visual.mjs";

const $=id=>document.getElementById(id);
const root=$("app");
const id=document.body.dataset.topic||"";
const topic=TOPIC_BY_ID[id]||null;
const home=topic?"../../../":"../";
const hub=topic?"../../":"./";
const escapeHTML=value=>String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const storeKey="fire-study-psico-v2";
let progress={};
try {const old=JSON.parse(localStorage.getItem(storeKey)||"{}");if(old&&typeof old==="object"&&!Array.isArray(old))progress=old;}catch(_){}
function safeStats(topicId){const value=progress[topicId];return{studied:!!value?.studied,attempts:Array.isArray(value?.attempts)?value.attempts.filter(a=>a&&typeof a.ok==="boolean").slice(-500):[]};}
function saveStats(topicId,modify){const v=safeStats(topicId);modify(v);progress[topicId]=v;try{localStorage.setItem(storeKey,JSON.stringify(progress));}catch(_){}}
function record(mode,q,chosen,assisted=false){saveStats(id,s=>{s.attempts.push({at:Date.now(),mode,variant:q.variant,difficulty:q.difficulty||"basico",assisted,ok:chosen===q.answer});s.attempts=s.attempts.slice(-500);});}
const statLine=topicId=>{const s=safeStats(topicId),n=s.attempts.length,ok=s.attempts.filter(a=>a.ok).length;return n?Math.round(100*ok/n)+" % aciertos · "+n+" ejercicios":"Sin prácticas registradas";};
const btn=(text,action,variant="secondary",other="")=>'<button type="button" class="btn '+variant+'" data-action="'+action+'" '+other+'>'+text+'</button>';
let view="contenido";
let current={entrenamiento:null,examen:null};
let settings={entrenamiento:{variant:"todos",length:10,difficulty:"progresiva"},examen:{variant:"todos",length:10}};
let ticker=null;
function stopTicker(){if(ticker!==null){clearInterval(ticker);ticker=null;}}
function header(){return '<header class="site-head"><a class="logo" href="'+home+'"><span class="logo-mark">F·</span><span>FUEGO & ESTUDIO</span></a><nav class="header-links"><a href="'+home+'">Biblioteca</a>'+ (topic?'<a href="'+hub+'">Psicotécnicos</a>':'<a href="'+home+'#temas">Temario</a>')+'</nav></header>';}
function renderHub(){const studied=TOPICS.filter(t=>safeStats(t.id).studied).length;
root.innerHTML=header()+'<main class="shell"><section class="hero"><span class="eyebrow">BIBLIOTECA DE PSICOTÉCNICOS · 8 TEMAS</span><h1>Entrena cada habilidad.<br>Comprende antes de memorizar.</h1><p>Cada documento de habilidades del temario se estudia como un tema: contenido y métodos de resolución, ejercicios de entrenamiento con corrección y examen cronometrado sin demostrador.</p></section>'+
'<div class="below-hero"><div><span class="eyebrow" style="color:#bc5b39">TEMARIO</span><h2>Las ocho habilidades</h2><p class="muted small">Temas estudiados: '+studied+' de '+TOPICS.length+'. El progreso se guarda en este navegador.</p></div></div>'+
'<div class="topic-grid">'+TOPICS.map(t=>{const s=safeStats(t.id);return '<article class="topic-card"><span class="n">TEMA '+t.number+' · '+escapeHTML(t.subtitle.toUpperCase())+'</span><h3>'+escapeHTML(t.title)+'</h3><p>'+escapeHTML(t.summary)+'</p><div class="footer"><span class="muted">'+(s.studied?"✓ Contenido estudiado · ":"")+escapeHTML(statLine(t.id))+'</span><a class="action-link" href="./temas/'+t.id+'/">Abrir tema →</a></div></article>';}).join("")+'</div>'+
'<section class="support"><h2>Material complementario del ZIP</h2><p class="muted small">Los cuatro documentos siguientes no son habilidades evaluables independientes: sirven como introducción, recursos y solucionarios. No se publican copias de los PDF.</p><ul>'+EXTRA_MATERIAL.map(x=>'<li><strong>'+escapeHTML(x.title)+'</strong> · '+escapeHTML(x.info)+' <span class="source">('+escapeHTML(x.source)+')</span></li>').join("")+'</ul></section>'+
'<p class="bottom-note">Ejercicios didácticos generados a partir de las categorías de los PDF; no son transcripciones de preguntas originales ni sustituyen al manual.</p></main>';}
const state={get session(){return current[view];}};
function topicShell(content){const s=safeStats(id),attempts=s.attempts,ok=attempts.filter(a=>a.ok).length;
return header()+'<main class="shell"><section class="hero"><div class="bread"><a href="'+hub+'">Psicotécnicos</a> / Tema '+topic.number+'</div><span class="eyebrow">TEMA '+topic.number+' · '+escapeHTML(topic.subtitle.toUpperCase())+'</span><h1>'+escapeHTML(topic.title)+'</h1><p>'+escapeHTML(topic.summary)+'</p></section>'+
'<div class="topic-layout"><aside class="side"><h3>Tu estudio</h3><div class="small"><strong>'+topic.strategies.length+' apartados</strong> · '+escapeHTML(topic.pages)+'</div><div class="progress"><i style="width:'+(s.studied?"100":"0")+'%"></i></div><p class="muted small">'+(s.studied?"Contenido marcado como estudiado":"Contenido pendiente de estudiar")+'</p><hr class="separator"><h3>Resultado acumulado</h3><strong style="font-size:27px">'+(attempts.length?Math.round(ok/attempts.length*100)+" %":"—")+'</strong><div class="small muted">'+attempts.length+' respuestas registradas</div><ol class="side-steps"><li>Comprende las reglas.</li><li>Practica con corrección.</li><li>Haz el examen sin ayudas.</li></ol><hr class="separator"><span class="source">Documento de referencia:<br>'+escapeHTML(topic.source)+'</span></aside>'+
'<section class="main-panel"><div class="tabs" role="tablist" aria-label="Apartados de estudio"><button role="tab" class="tab" data-tab="contenido" aria-selected="'+(view==="contenido")+'">1 · Contenido</button><button role="tab" class="tab" data-tab="entrenamiento" aria-selected="'+(view==="entrenamiento")+'">2 · Entrenamiento</button><button role="tab" class="tab" data-tab="examen" aria-selected="'+(view==="examen")+'">3 · Examen</button></div>'+content+'</section></div>'+
'<p class="bottom-note">Material elaborado como apoyo al estudio. Consulta los PDF originales para las láminas, sus respuestas y los enunciados exactos.</p></main>';}
function renderContent(){return '<div role="tabpanel"><span class="eyebrow" style="color:#bc5b39">APRENDER</span><h2 class="section-head">Qué tienes que saber</h2><p class="intro">'+escapeHTML(topic.summary)+'</p>'+
'<div class="learn-goal"><strong>Objetivo de este tema</strong>'+escapeHTML(topic.objective)+'</div>'+
'<h3 style="margin:22px 0 10px">Apartados y métodos</h3>'+topic.strategies.map((s,i)=>'<details class="lesson" '+(i===0?"open":"")+'><summary><span class="no">'+String(i+1).padStart(2,"0")+'</span><span>'+escapeHTML(s.name)+'</span></summary><div class="lesson-body"><span class="source">Referencia: '+escapeHTML(s.ref)+'</span><p>'+escapeHTML(s.text)+'</p><div class="strategy"><strong>Cómo resolverlo</strong><p>'+escapeHTML(s.method)+'</p></div><div class="example"><strong>Ejemplo:</strong> '+escapeHTML(s.example)+'</div></div></details>').join("")+
'<div class="notice"><strong>Sobre el material:</strong> '+escapeHTML(topic.caution)+'</div><div class="content-actions">'+btn(safeStats(id).studied?"✓ Contenido estudiado":"Marcar contenido como estudiado","studied",safeStats(id).studied?"good":"secondary")+btn("Ir a entrenamiento →","go-training","accent")+'</div></div>';}
function settingControls(mode){
 const cfg=settings[mode];
 const special=mode==="entrenamiento"&&["espacial","grafico"].includes(id);
 const difficulty=special?'<div class="field"><label for="difficulty">Dificultad</label><select id="difficulty" data-setting="difficulty">'+
 [["progresiva","Progresiva (recomendada)"],["adaptativa","Según mis resultados"],["basico","Básico"],["intermedio","Intermedio"],["avanzado","Avanzado"]].map(([value,label])=>
 '<option value="'+value+'" '+(cfg.difficulty===value?"selected":"")+'>'+label+'</option>').join("")+'</select></div>':"";
 return '<div class="trainer-settings '+(special?"with-difficulty":"")+'"><div class="field"><label for="variant">Tipo de ejercicio</label><select id="variant" data-setting="variant"><option value="todos">Mezclar subtipos del tema</option>'+
 VARIANTS[id].map(v=>'<option value="'+v+'" '+(cfg.variant===v?"selected":"")+'>'+escapeHTML(VARIANT_LABELS[v])+'</option>').join("")+
 '</select></div><div class="field"><label for="length">Duración</label><select id="length" data-setting="length">'+
 [5,10,15].map(n=>'<option value="'+n+'" '+(cfg.length===n?"selected":"")+'>'+n+' preguntas</option>').join("")+'</select></div>'+difficulty+'</div>'+
 (special?'<p class="hint-note">Progresiva: comienza con figuras sencillas y aumenta hasta las matrices, espejos y cubos más exigentes. Según mis resultados: ajusta cada subtipo a tus últimos aciertos.</p>':"");
}
function renderConfig(mode){const exam=mode==="examen";return '<div role="tabpanel"><span class="eyebrow" style="color:#b95839">'+(exam?"EVALUAR":"ENTRENAR")+'</span><h2 class="section-head">'+(exam?"Simulacro del tema":"Practica con correcciones")+'</h2><p class="intro">'+(exam?"Responde sin pistas ni demostraciones. Tendrás 45 segundos por pregunta, con una fase previa de memorización cuando proceda. Verás las respuestas al finalizar.":"Practica con ejercicios generados a partir de las habilidades del manual; recibirás la solución razonada después de responder. Las demostraciones visuales solo aparecen cuando aportan valor.")+'</p>'+
settingControls(mode)+'<div class="setting-actions">'+btn(exam?"Comenzar examen":"Comenzar entrenamiento","start-session","accent")+'</div>'+
'<div class="notice">'+(exam?"Sin ayudas ni correcciones durante el examen. Al terminar podrás ver la puntuación y las soluciones en texto.":"Si una respuesta admite una demostración, su botón solo aparecerá después de corregirla. En memoria, los estímulos se ocultan antes de responder.")+'</div></div>';}
function svgPoint(x,y){return x.toFixed(1)+","+y.toFixed(1);}
function drawingPath(demo,directions){let x=0,y=0;const pts=[[x,y]],moves={E:[1,0],W:[-1,0],N:[0,-1],S:[0,1]};
for(const d of directions){x+=moves[d][0];y+=moves[d][1];pts.push([x,y]);}
const xs=pts.map(p=>p[0]),ys=pts.map(p=>p[1]),minX=Math.min(...xs),minY=Math.min(...ys),maxX=Math.max(...xs),maxY=Math.max(...ys),w=(maxX-minX+2)*46,h=(maxY-minY+2)*46;
const draw=pts.map(([a,b])=>svgPoint(40+(a-minX)*46,40+(b-minY)*46)).join(" ");
const s=pts[0],e=pts[pts.length-1],p=([a,b])=>[40+(a-minX)*46,40+(b-minY)*46];
const [sx,sy]=p(s),[ex,ey]=p(e);return '<svg viewBox="0 0 '+w+' '+h+'" width="'+Math.min(w,560)+'" role="img" aria-label="Recorrido con cambios de dirección"><polyline points="'+draw+'" stroke="#cedce4" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" fill="none"/><polyline '+(demo?'class="demo-path"':'')+' points="'+draw+'" stroke="#e76a3f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="'+sx+'" cy="'+sy+'" r="9" fill="#32866b"/><circle cx="'+ex+'" cy="'+ey+'" r="9" fill="#2f6f9d"/><text x="'+(sx+11)+'" y="'+(sy-12)+'" font-size="12">Inicio</text><text x="'+(ex+11)+'" y="'+(ey+17)+'" font-size="12">Final</text></svg>';}
function connectionsSVG(map,selected,demo){const paths=map.map((n,i)=>{const y1=32+i*50,y2=32+(n-1)*50,stroke=demo&&i===selected?"#e85e36":"#718da1";return '<path d="M65 '+y1+' C175 '+y1+', 175 '+y2+', 325 '+y2+'" fill="none" stroke="'+stroke+'" stroke-width="'+(i===selected?5:3)+'" '+(demo&&i===selected?'class="demo-path"':"")+' />';}).join("");
const labels=Array.from({length:4},(_,i)=>'<text x="42" y="'+(37+i*50)+'" font-size="14" text-anchor="middle">'+(i+1)+'</text><text x="350" y="'+(37+i*50)+'" font-size="14" text-anchor="middle">'+(i+1)+'</text>').join("");return '<svg viewBox="0 0 392 226" width="500" role="img" aria-label="Cuatro trazados entre los números de la izquierda y derecha">'+paths+labels+'</svg>';}
function blocksSVG(heights,cols=3){const project=(x,y,z)=>[190+(x-y)*37,155+(x+y)*19-z*27],points=verts=>verts.map(v=>svgPoint(...project(...v))).join(" ");
const nodes=[];for(let i=0;i<heights.length;i++){const x=i%cols,y=Math.floor(i/cols);for(let z=0;z<heights[i];z++)nodes.push({x,y,z});}
nodes.sort((a,b)=>(a.x+a.y+a.z)-(b.x+b.y+b.z));
const shapes=nodes.map(({x,y,z})=>{const top=points([[x,y,z+1],[x+1,y,z+1],[x+1,y+1,z+1],[x,y+1,z+1]]);const side1=points([[x+1,y,z+1],[x+1,y+1,z+1],[x+1,y+1,z],[x+1,y,z]]);const side2=points([[x,y+1,z+1],[x+1,y+1,z+1],[x+1,y+1,z],[x,y+1,z]]);return '<polygon points="'+side1+'" fill="#81a7c4" stroke="#fff"/><polygon points="'+side2+'" fill="#547fa1" stroke="#fff"/><polygon points="'+top+'" fill="#cce1ef" stroke="#fff"/>';}).join("");
return '<svg width="480" viewBox="0 0 480 305" role="img" aria-label="Construcción isométrica de columnas de cubos">'+shapes+'</svg>';}
function renderVisual(q,mode,stage,demonstration=false){const v=q.visual;if(isAdvancedVisual(v.kind))return renderAdvancedVisual(v,demonstration,q.optionVisuals?.[q.answer]);switch(v.kind){
case"words":return '<div class="chips">'+v.words.map(x=>'<span class="chip">'+escapeHTML(x)+'</span>').join("")+'</div>';
case"analogy":return '<div class="sequence"><span>'+escapeHTML(v.parts[0])+'</span> : <span>'+escapeHTML(v.parts[1])+'</span> :: <span>'+escapeHTML(v.parts[2])+'</span> : <span>?</span></div>';
case"ranking":return '<div class="chips">'+v.lines.map(x=>'<span class="chip">'+escapeHTML(x)+'</span>').join("")+'</div>';
case"numberLine":return '<div class="sequence">'+v.numbers.map(x=>'<span>'+escapeHTML(x)+'</span>').join("")+'<span>?</span></div>';
case"matrix":return '<div class="table-matrix">'+v.cells.map(x=>'<span>'+escapeHTML(x)+'</span>').join("")+'</div>';
case"equation":return '<div class="sequence"><span>'+escapeHTML(v.formula)+'</span></div>';
case"arrows":return '<div class="sequence"><span style="font-size:64px;color:#286891;min-width:100px">'+escapeHTML(v.arrows[0])+'</span><span>↻ '+v.step*90+'°</span><span>?</span></div>';
case"symbolLine":return '<div class="sequence">'+v.symbols.map(x=>'<span>'+escapeHTML(x)+'</span>').join("")+'<span>?</span></div>';
case"cubeNet":return '<div class="visual-stack"><div class="net">'+v.marks.map((x,i)=>'<span class="'+["a","b","c","d","e","f"][i]+' '+(i===v.selected?"selected":"")+'">'+escapeHTML(x)+'</span>').join("")+'</div><p class="muted">Cara de referencia: '+escapeHTML(v.marks[v.selected])+' (borde naranja)</p></div>';
case"blocks":return blocksSVG(v.heights,v.cols||3);
case"path":return drawingPath(demonstration,v.directions);
case"connections":return connectionsSVG(v.map,v.selected,demonstration);
case"balance":return '<div class="visual-stack"><div class="sequence"><span>● = '+v.unit+' ■</span></div><p class="muted">¿Cuántos cuadrados equivalen a '+v.amount+' círculos?</p><div class="sequence"><span>'+("● ".repeat(v.amount)).trim()+'</span><span>=</span><span> ? ■</span></div></div>';
case"characters":{const chunks=demonstration?v.text.split(v.target):null;return '<div class="monospace">'+(chunks?chunks.map(escapeHTML).join('<mark>'+escapeHTML(v.target)+'</mark>'):escapeHTML(v.text))+'</div>';}
case"comparison":return '<div class="columns"><div><strong>MODELO</strong>'+v.left.map(x=>'<span>'+escapeHTML(x)+'</span>').join("")+'</div><div><strong>COPIA</strong>'+v.right.map((x,i)=>'<span>'+Array.from(x).map((char,j)=>{const changed=v.changed.includes(i*12+j);return demonstration&&changed?'<mark>'+escapeHTML(char)+'</mark>':escapeHTML(char);}).join("")+'</span>').join("")+'</div></div>';
case"memory":return stage==="observe"?'<div class="visual-stack"><p class="muted">Memoriza el contenido. No podrás volver a verlo durante la pregunta.</p><div class="chips">'+v.words.map(x=>'<span class="chip">'+escapeHTML(x)+'</span>').join("")+'</div></div>':'<div class="memory-blank"><strong>Estímulo oculto</strong><p>Responde usando únicamente lo que recuerdas.</p></div>';
default:return '<p>No hay visualización para este ejercicio.</p>';}}
function renderChoices(q,selected,locked){return '<div class="choices '+(q.optionVisuals?"visual-choices":"")+'" role="group" aria-label="Opciones de respuesta">'+q.options.map((value,i)=>'<button type="button" class="choice '+(locked&&value===q.answer?"correct":locked&&value===selected?"wrong":"")+'" data-answer="'+i+'" '+(locked?"disabled":"")+'><span class="letter">'+("ABCD"[i])+'</span>'+(q.optionVisuals?'<span class="choice-art">'+renderOptionVisual(q,value)+'</span>':'<span>'+escapeHTML(value)+'</span>')+'</button>').join("")+'</div>';}
function showDemo(q){if(!q.demo)return "";const d=q.demo;let scene="";
if(isAdvancedVisual(q.visual.kind))scene=renderAdvancedDemo(q,btn);
else if(d.kind==="cube")scene='<div class="fold-stage"><div class="fold-cube" id="fold-cube">'+d.marks.map(m=>'<span class="fold-face">'+escapeHTML(m)+'</span>').join("")+'</div></div><p>Observa cómo se pliega esta red. Los pares opuestos se mantienen al girar el cubo.</p>'+btn("Plegar cubo","fold","accent");
else if(d.kind==="rotation")scene='<div class="rotate-demo"><div class="rotate-figure">'+escapeHTML(q.visual.arrows[0])+'</div><span style="font-size:24px">→</span><div class="rotate-figure" id="rotate-demo">'+escapeHTML(q.visual.arrows[0])+'</div></div>'+btn("Reproducir rotación","play-rotation","accent");
else scene='<div class="visual">'+renderVisual(q,"entrenamiento","answer",true)+'</div><p>'+escapeHTML(q.explanation)+'</p>'+(["path","connections"].includes(d.kind)?btn("Seguir recorrido","trace","accent"):"");
return '<section class="demo" id="demonstration" aria-label="Demostración de la respuesta"><div class="demo-head"><h4>Demostración visual</h4>'+btn("Cerrar","close-demo")+'</div>'+scene+'</section>';}
function scoreResult(sess){const count=sess.questions.length,correct=sess.questions.reduce((n,q,i)=>n+(sess.answers[i]===q.answer?1:0),0),pct=Math.round(correct/count*100);return{count,correct,pct};}
function resultsHTML(mode,sess){const score=scoreResult(sess);return '<div class="result"><span class="eyebrow" style="color:#be5d3f">SESIÓN FINALIZADA</span><h2 class="section-head">'+(mode==="examen"?"Resultado del examen":"Resultado del entrenamiento")+'</h2><div class="score">'+score.pct+' %</div><p class="muted">'+score.correct+' aciertos de '+score.count+' preguntas.</p><h3>Revisión de respuestas</h3><ol class="answer-review">'+sess.questions.map((q,i)=>'<li><span class="'+(sess.answers[i]===q.answer?"ok":"bad")+'">'+(sess.answers[i]===q.answer?"✓":"✕")+'</span> <strong>'+escapeHTML(VARIANT_LABELS[q.variant])+'</strong> · '+escapeHTML(q.prompt)+'<div>Tu respuesta: '+(sess.answers[i]==null?"Sin responder":escapeHTML(sess.answers[i]))+' · Correcta: <strong>'+escapeHTML(q.answer)+'</strong></div>'+(mode==="entrenamiento"?'<div class="muted">'+escapeHTML(q.explanation)+'</div>':"")+'</li>').join("")+'</ol>'+btn("Iniciar otra sesión","reset-session","accent")+'</div>';}
function beginQuestion(sess,mode){const q=sess.questions[sess.index];sess.stage=q.visual.kind==="memory"?"observe":"answer";sess.shownDemo=false;sess.shownHint=false;sess.expiresAt=sess.stage==="observe"?Date.now()+25000:mode==="examen"?Date.now()+45000:0;}
function initSession(mode){const cfg=settings[mode];current[mode]={questions:createSession(id,cfg.length,cfg.variant,Math.random,{difficulty:cfg.difficulty||"basico",history:safeStats(id).attempts}),answers:[],index:0,stage:"answer",expiresAt:0,shownDemo:false,complete:false};beginQuestion(current[mode],mode);renderTopic();}
function advance(mode){const sess=current[mode];if(!sess)return;if(sess.index+1>=sess.questions.length){sess.complete=true;if(mode==="examen"&&!sess.recorded){sess.questions.forEach((q,i)=>record("examen",q,sess.answers[i]));sess.recorded=true;}}else{sess.index++;beginQuestion(sess,mode);}renderTopic();}
function closeObservation(){const sess=current[view];if(!sess||sess.complete||sess.stage!=="observe")return;sess.stage="answer";sess.expiresAt=view==="examen"?Date.now()+45000:0;renderTopic();}
function respond(value){const mode=view,sess=current[mode];if(!sess||sess.complete||sess.stage!=="answer"||sess.answers[sess.index]!==undefined)return;
const q=sess.questions[sess.index];if(value!==null&&!q.options.includes(value))return;
sess.answers[sess.index]=value;if(mode==="entrenamiento"){record("entrenamiento",q,value,!!sess.shownHint);renderTopic();}else advance(mode);}
function countdown(){const sess=current[view];if(!sess||sess.complete)return;const timed=sess.stage==="observe"||(view==="examen"&&sess.stage==="answer");if(!timed)return;const ms=Math.max(0,sess.expiresAt-Date.now()),node=$("timer");if(node){node.textContent=(sess.stage==="observe"?"Memoriza: ":"Tiempo: ")+Math.ceil(ms/1000)+" s";node.classList.toggle("urgent",ms<=10000);}if(ms===0){if(sess.stage==="observe")closeObservation();else respond(null);}}
function installTicker(){stopTicker();const sess=current[view];if(!sess||sess.complete)return;const timed=sess.stage==="observe"||(view==="examen"&&sess.stage==="answer");if(timed){ticker=setInterval(countdown,220);countdown();}}
function renderSession(mode){const sess=current[mode];if(!sess)return renderConfig(mode);if(sess.complete)return resultsHTML(mode,sess);
const q=sess.questions[sess.index],selected=sess.answers[sess.index],answered=selected!==undefined,isObservation=sess.stage==="observe";
const heading='<div class="board-head"><span class="pill">'+escapeHTML(VARIANT_LABELS[q.variant])+(["espacial","grafico"].includes(id)?' · '+escapeHTML(LEVEL_LABELS[q.difficulty]||"Básico"):"")+' · '+(sess.index+1)+' / '+sess.questions.length+'</span><span id="timer" class="timer">'+(mode==="examen"?"45 s por pregunta":"Entrenamiento sin límite")+'</span></div>';
let actions="",options="";
if(isObservation){actions=mode==="entrenamiento"?btn("Ocultar y responder","hide-memory","accent"):'<p class="hint-note">La lista se ocultará automáticamente al terminar el tiempo.</p>';}
else if(mode==="examen"){options=renderChoices(q,null,false);actions='<p class="hint-note">El examen no muestra explicaciones ni demostraciones antes del resultado.</p>';}
else {options=renderChoices(q,selected,answered);if(answered){actions=btn(sess.index+1===sess.questions.length?"Ver resultados":"Siguiente pregunta →","next-question","accent")+(q.demo&&!sess.shownDemo?btn("Ver demostración","open-demo"):"");}else if(q.hint&&!sess.shownHint){actions=btn("Ver una pista","show-hint");}}
const hint=mode==="entrenamiento"&&sess.shownHint&&q.hint?'<div class="hint-callout"><strong>Pista para razonar</strong><p>'+escapeHTML(q.hint)+'</p></div>':"";
const feedback=mode==="entrenamiento"&&answered?'<div class="feedback '+(selected===q.answer?"right":"wrong")+'"><h3>'+(selected===q.answer?"Respuesta correcta":"Respuesta incorrecta")+'</h3><p>La respuesta es <strong>'+escapeHTML(q.answer)+'</strong>. '+escapeHTML(q.explanation)+'</p></div>':"";
return '<div role="tabpanel" class="board">'+heading+'<h2 class="q-title">'+escapeHTML(q.title)+'</h2><p class="prompt">'+escapeHTML(isObservation?"Memoriza las palabras; la pregunta aparecerá al ocultarlas.":q.prompt)+'</p><div class="visual">'+renderVisual(q,mode,sess.stage)+'</div>'+options+hint+feedback+'<div class="board-actions">'+actions+'</div>'+(mode==="entrenamiento"&&answered&&sess.shownDemo?showDemo(q):"")+'</div>';}
function renderTopic(){if(!topic)return renderHub();stopTicker();const body=view==="contenido"?renderContent():view==="examen"?official.render():current[view]?renderSession(view):renderConfig(view);root.innerHTML=topicShell(body);installTicker();}
const official=topic?new OfficialExamController(id,renderTopic,record):null;
root.addEventListener("click",event=>{
 if(view==="examen"&&official){const o=event.target.closest("[data-official-action]");if(o&&official.onAction(o.dataset.officialAction))return;}
 const tab=event.target.closest("[data-tab]");if(tab&&topic){view=tab.dataset.tab;renderTopic();window.scrollTo({top:0,behavior:"instant"});return;}
 const answer=event.target.closest("[data-answer]");if(answer&&view!=="contenido"){const sess=current[view];if(sess&&!sess.complete&&sess.stage==="answer"){respond(sess.questions[sess.index].options[Number(answer.dataset.answer)]);}return;}
 const action=event.target.closest("[data-action]");if(!action||!topic)return;
 switch(action.dataset.action){
 case"studied":saveStats(id,s=>{s.studied=!s.studied;});renderTopic();break;
 case"go-training":view="entrenamiento";renderTopic();break;
 case"start-session":initSession(view);break;
 case"reset-session":current[view]=null;renderTopic();break;
 case"hide-memory":closeObservation();break;
 case"next-question":{const sess=current[view];if(view==="entrenamiento"&&sess&&sess.answers[sess.index]!==undefined)advance(view);break;}
 case"show-hint":{const sess=current.entrenamiento;if(view==="entrenamiento"&&sess&&!sess.complete&&sess.stage==="answer"&&sess.answers[sess.index]===undefined&&sess.questions[sess.index].hint&&!sess.shownHint){sess.shownHint=true;renderTopic();}break;}
 case"open-demo":{const sess=current.entrenamiento;if(view==="entrenamiento"&&sess&&!sess.complete&&sess.stage==="answer"&&sess.answers[sess.index]!==undefined&&sess.questions[sess.index].demo&&!sess.shownDemo){sess.shownDemo=true;renderTopic();}break;}
 case"close-demo":{const sess=current.entrenamiento;if(view==="entrenamiento"&&sess){sess.shownDemo=false;renderTopic();}break;}
 case"fold":{const el=$("fold-cube");if(el){const folded=el.classList.toggle("folded");action.textContent=folded?"Desplegar cubo":"Plegar cubo";}break;}
 case"play-rotation":{const el=$("rotate-demo"),sess=current.entrenamiento;if(el&&sess){el.style.transition="none";el.style.transform="rotate(0deg)";requestAnimationFrame(()=>requestAnimationFrame(()=>{el.style.transition="transform .9s ease";el.style.transform="rotate("+(sess.questions[sess.index].demo.steps*90)+"deg)";}));}break;}
 case"turn-cube-left":
 case"turn-cube-right":{const cube=$("spatial-cube");if(cube){const direction=action.dataset.action==="turn-cube-left"?-90:90;const y=(Number(cube.dataset.y)||0)+direction;cube.dataset.y=String(y);cube.style.transform="rotateX(-23deg) rotateY("+y+"deg)";}break;}
 case"trace":{const path=root.querySelector(".demo-path");if(path){path.classList.remove("play");requestAnimationFrame(()=>requestAnimationFrame(()=>path.classList.add("play")));}break;}
 }});
root.addEventListener("change",event=>{if(view==="examen"&&official&&official.onChange(event.target))return;const field=event.target.closest("[data-setting]");if(!field||!topic||view==="contenido")return;const kind=field.dataset.setting;if(kind==="variant"&&(field.value==="todos"||VARIANTS[id].includes(field.value)))settings[view].variant=field.value;if(kind==="length"&&[5,10,15].includes(Number(field.value)))settings[view].length=Number(field.value);if(kind==="difficulty"&&["basico","intermedio","avanzado","progresiva","adaptativa"].includes(field.value))settings[view].difficulty=field.value;});
window.addEventListener("pagehide",()=>{stopTicker();if(official)official.dispose();});
window.addEventListener("focus",()=>{if(view==="examen"&&official)official.handleVisibility();});
if(topic)renderTopic();else renderHub();
