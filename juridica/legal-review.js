/* Repaso activo de calidad: asociaciones, clasificación, secuencias, cifras y detección de errores.
   Las soluciones nunca aparecen en el enunciado antes de responder. */
(function(){
"use strict";
const $=id=>document.getElementById(id);
const esc=v=>String(v??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function shuffle(a){const r=a.slice();for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];}return r;}
const KEY=window.STUDY_CONFIG?.reviewKey||"fire-study-review-v1";
let tab="matching",ci=0,oi=0,vi=0,cs=null,os=null,vs=null,js=null;
const values=typeof REVIEW_VALUES!=="undefined"?REVIEW_VALUES:[];
const validTab=["matching","classify","order","values","judge"];
const score=(n,total)=>'<div class="rv-score"><strong>'+n+' / '+total+'</strong><p>Respuestas correctas en este intento.</p></div>';
function save(){try{sessionStorage.setItem(KEY,JSON.stringify({version:3,tab,ci,oi,vi,cs,os,vs,js}));}catch(e){}}
function load(){
 try{
  const x=JSON.parse(sessionStorage.getItem(KEY)||"null");
  if(!x||x.version!==3)return;
  tab=validTab.includes(x.tab)?x.tab:"matching";
  ci=Number.isInteger(x.ci)?x.ci:0;
  oi=Number.isInteger(x.oi)?x.oi:0;
  vi=Number.isInteger(x.vi)?x.vi:0;
  cs=x.cs||null;os=x.os||null;vs=x.vs||null;js=x.js||null;
 }catch(e){}
}
function newClass(){
 const x=REVIEW_CLASSIFY[ci];cs={ids:shuffle(x.items.map((_,i)=>i)),at:0,answers:{}};save();drawClass();
}
function drawClass(){
 const x=REVIEW_CLASSIFY[ci],target=$("review-classify-area");
 if(!cs||!Array.isArray(cs.ids)||cs.ids.length!==x.items.length){newClass();return;}
 const done=Object.keys(cs.answers).length;
 const correct=Object.entries(cs.answers).filter(([i,a])=>x.items[Number(i)]?.[1]===a).length;
 if(done===x.items.length){
  target.innerHTML=score(correct,done)+'<p class="rv-hint">Revisa tus errores antes de repetir.</p>'+
   x.items.map((item,i)=>'<p class="rv-resultline">'+(cs.answers[i]===item[1]?"✓":"✕")+' '+esc(item[0])+' → <b>'+esc(x.groups[item[1]])+'</b></p>').join("")+
   '<p class="rv-feedback">'+esc(x.why)+'</p><button class="rv-btn primary" data-rv="class-reset">Repetir con otro orden</button>';
  return;
 }
 const id=cs.ids[cs.at],q=x.items[id],answer=cs.answers[id],answered=answer!==undefined;
 target.innerHTML='<div class="rv-kicker">ELEMENTO '+(done+1)+' DE '+x.items.length+' · '+correct+' aciertos</div>'+
 '<div class="rv-prompt">'+esc(q[0])+'</div><div class="rv-options">'+x.groups.map((label,i)=>
 '<button class="rv-option '+(answered?(i===q[1]?"right":i===answer?"wrong":""):"")+'" data-rv-class="'+i+'" '+(answered?"disabled":"")+'>'+esc(label)+'</button>').join("")+'</div>'+
 (answered?'<p class="rv-feedback">'+(answer===q[1]?"Respuesta correcta. ":"Respuesta incorrecta. ")+esc(x.why)+' Solución: '+esc(x.groups[q[1]])+'.</p><button class="rv-btn primary" data-rv="class-next">Siguiente →</button>':"");
}
function newOrder(){
 const x=REVIEW_ORDER[oi],ids=shuffle(x.steps.map((_,i)=>i));
 if(ids.length>1&&ids.every((n,i)=>n===i))ids.reverse();
 os={ids,checked:false};save();drawOrder();
}
function drawOrder(){
 const x=REVIEW_ORDER[oi],target=$("review-order-area");
 if(!os||!Array.isArray(os.ids)||os.ids.length!==x.steps.length||new Set(os.ids).size!==x.steps.length){newOrder();return;}
 const correct=os.ids.filter((n,i)=>n===i).length,all=correct===x.steps.length;
 target.innerHTML=(x.prompt?'<p class="rv-task">'+esc(x.prompt)+'</p>':"")+
 '<p class="rv-hint">Utiliza las flechas para ordenar las actuaciones. Las respuestas se mostrarán al comprobar.</p>'+
 '<div class="rv-ordered">'+os.ids.map((id,i)=>'<div class="rv-sort '+(os.checked?(id===i?"right":"wrong"):"")+'"><span class="rv-rank">'+(i+1)+'</span><span>'+esc(x.steps[id])+'</span><div>'+
 '<button data-rv-move="-1" data-rv-at="'+i+'" '+(i===0||os.checked?"disabled":"")+' aria-label="Subir actuación">↑</button>'+
 '<button data-rv-move="1" data-rv-at="'+i+'" '+(i===os.ids.length-1||os.checked?"disabled":"")+' aria-label="Bajar actuación">↓</button></div></div>').join("")+'</div>'+
 (os.checked?
 '<div class="rv-feedback"><strong>'+(all?"Secuencia correcta.":"Secuencia incorrecta: "+correct+" de "+x.steps.length+" posiciones correctas.")+'</strong> '+esc(x.why)+'</div>'+
 (!all?'<details class="rv-solution" open><summary>Solución explicada</summary><ol>'+x.steps.map(s=>'<li>'+esc(s)+'</li>').join("")+'</ol></details>':"")+
 '<button class="rv-btn primary" data-rv="order-reset">Repetir sin pistas</button>':
 '<button class="rv-btn primary" data-rv="order-check">Comprobar secuencia</button>');
}
/* Extrae el número (o intervalo) de las respuestas del PDF; admite 2.000/2000 y 4,5/4.5.
   La unidad se muestra en la explicación, pero el campo no exige escribirla. */
function numericSignature(value){
 const cleaned=String(value??"").replace(/(\d)\.(?=\d{3}(?:\D|$))/g,"$1").replace(/,/g,".");
 const found=cleaned.match(/\d+(?:\.\d+)?/g)||[];
 return found.map(s=>String(Number(s))).join("|");
}
function newValues(){
 const x=values[vi],ids=shuffle(x.items.map((_,i)=>i)),optionOrders=x.items.map(()=>shuffle([0,1,2,3]));
 vs={ids,optionOrders,answers:{},hints:{},at:0};save();drawValues();
}
function drawValues(){
 const target=$("review-values-area"),x=values[vi];
 if(!x||!target)return;
 if(!vs||!Array.isArray(vs.ids)||vs.ids.length!==x.items.length||!Array.isArray(vs.optionOrders)||vs.optionOrders.length!==x.items.length){newValues();return;}
 const entries=Object.values(vs.answers);
 const known=entries.filter(a=>a.correct&&!a.hint).length;
 const helped=entries.filter(a=>a.correct&&a.hint).length;
 const errors=entries.filter(a=>!a.correct).length;
 if(vs.at>=x.items.length){
  target.innerHTML='<div class="rv-score"><strong>'+known+' / '+x.items.length+'</strong><p>Aciertos sin pistas · '+helped+' con opciones · '+errors+' incorrectas.</p></div>'+
   '<p class="rv-hint">Corrección del banco de cifras:</p>'+
   x.items.map((question,i)=>{
    const a=vs.answers[i];
    return '<p class="rv-resultline">'+(a?.correct?(a.hint?"◐":"✓"):"✕")+' '+esc(question[0])+
     ' → <b>'+esc(question[1][question[2]])+'</b>'+(a&&!a.correct?' (tu respuesta: '+esc(a.text)+')':"")+'</p>';
   }).join("")+
   '<p class="rv-feedback">'+esc(x.why)+'</p>'+
   '<button class="rv-btn primary" data-rv="value-reset">Repetir sin pistas</button>';
  return;
 }
 const id=vs.ids[vs.at],q=x.items[id],answer=vs.answers[id],answered=!!answer,withHint=!!vs.hints[id];
 const options=withHint?'<div class="rv-options">'+vs.optionOrders[id].map(idx=>
  '<button class="rv-option '+(answered?(idx===q[2]?"right":q[1][idx]===answer.text?"wrong":""):"")+
  '" data-rv-value="'+idx+'" '+(answered?"disabled":"")+'>'+esc(q[1][idx])+'</button>').join("")+'</div>':"";
 target.innerHTML='<div class="rv-kicker">DATO '+(vs.at+1)+' DE '+x.items.length+' · '+known+' sin pistas</div>'+
 '<div class="rv-prompt">'+esc(q[0])+'</div>'+
 (!answered?'<div class="rv-freeanswer"><label for="review-value-input">Escribe la cifra o intervalo (sin necesidad de indicar unidades)</label>'+
 '<div><input id="review-value-input" type="text" inputmode="decimal" autocomplete="off" placeholder="Tu respuesta" aria-label="Respuesta numérica sin pistas">'+
 '<button class="rv-btn primary" data-rv="value-check">Comprobar</button></div></div>':"")+
 options+
 (!answered&&!withHint?'<button class="rv-btn rv-hintbutton" data-rv="value-hint">Necesito una pista: mostrar opciones</button>':"")+
 (answered?'<p class="rv-feedback"><strong>'+(answer.correct?(answer.hint?"Correcto con ayuda. ":"¡Correcto sin pistas! "):"Respuesta incorrecta. ")+'</strong>'+
 esc(q[3])+(answer.text&&!answer.correct?" Tu respuesta: "+esc(answer.text)+".":"")+'</p>'+
 '<button class="rv-btn primary" data-rv="value-next">'+(vs.at===x.items.length-1?"Ver resultado":"Siguiente →")+'</button>':"");
}
function submitValue(text,viaHint=false){
 if(!vs||vs.at>=values[vi].items.length)return;
 const id=vs.ids[vs.at],q=values[vi].items[id];
 if(vs.answers[id]!==undefined)return;
 const raw=String(text??"").trim();
 if(!raw)return;
 const correct=numericSignature(raw)===numericSignature(q[1][q[2]]);
 vs.answers[id]={text:raw,correct,hint:viaHint||!!vs.hints[id]};
 save();drawValues();
}
function newJudge(){
 js={ids:shuffle(REVIEW_JUDGE.map((_,i)=>i)),at:0,answers:{}};save();drawJudge();
}
function drawJudge(){
 const target=$("review-judge-area");
 if(!js||!Array.isArray(js.ids)||js.ids.length!==REVIEW_JUDGE.length){newJudge();return;}
 const done=Object.keys(js.answers).length;
 const correct=Object.entries(js.answers).filter(([id,answer])=>String(REVIEW_JUDGE[Number(id)]?.[1])===answer).length;
 if(js.at>=REVIEW_JUDGE.length){
  target.innerHTML=score(correct,REVIEW_JUDGE.length)+
   REVIEW_JUDGE.map((row,i)=>'<p class="rv-resultline">'+(String(row[1])===js.answers[i]?"✓":"✕")+' '+esc(row[0])+' → <b>'+(row[1]?"Correcta":"Contiene un error")+'</b></p>').join("")+
   '<button class="rv-btn primary" data-rv="judge-reset">Otro intento mezclado</button>';return;
 }
 const id=js.ids[js.at],x=REVIEW_JUDGE[id],answer=js.answers[id],answered=answer!==undefined;
 target.innerHTML='<div class="rv-kicker">AFIRMACIÓN '+(js.at+1)+' / '+REVIEW_JUDGE.length+' · '+correct+' aciertos</div>'+
 '<div class="rv-prompt">“'+esc(x[0])+'”</div>'+
 '<div class="rv-options">'+[["true","Es correcta"],["false","Contiene un error"]].map(([v,label])=>
 '<button class="rv-option '+(answered?(v===String(x[1])?"right":v===answer?"wrong":""):"")+'" data-rv-judge="'+v+'" '+(answered?"disabled":"")+'>'+label+'</button>').join("")+'</div>'+
 (answered?'<p class="rv-feedback">'+(answer===String(x[1])?"Acertado. ":"Respuesta incorrecta. ")+esc(x[2])+'</p><button class="rv-btn primary" data-rv="judge-next">'+(js.at===REVIEW_JUDGE.length-1?"Ver resultado":"Siguiente →")+'</button>':"");
}
function show(next){
 tab=next;
 document.querySelectorAll("#review-workspace [data-review-tab]").forEach(b=>{b.classList.toggle("active",b.dataset.reviewTab===next);b.setAttribute("aria-selected",String(b.dataset.reviewTab===next));});
 document.querySelectorAll("#review-workspace [data-review-pane]").forEach(el=>el.hidden=el.dataset.reviewPane!==next);
 save();
}
function click(ev){
 const btn=ev.target.closest("button");if(!btn||!btn.closest("#review-workspace"))return;
 if(btn.dataset.reviewTab){show(btn.dataset.reviewTab);return;}
 const command=btn.dataset.rv;
 if(btn.dataset.rvClass!==undefined){
  const id=cs.ids[cs.at];if(cs.answers[id]===undefined){cs.answers[id]=Number(btn.dataset.rvClass);save();drawClass();}return;
 }
 if(command==="class-next"){cs.at=Math.min(cs.at+1,cs.ids.length-1);save();drawClass();return;}
 if(command==="class-reset"){newClass();return;}
 if(btn.dataset.rvMove){
  const from=Number(btn.dataset.rvAt),to=from+Number(btn.dataset.rvMove);
  if(to>=0&&to<os.ids.length&&!os.checked){[os.ids[from],os.ids[to]]=[os.ids[to],os.ids[from]];save();drawOrder();}return;
 }
 if(command==="order-check"){os.checked=true;save();drawOrder();return;}
 if(command==="order-reset"){newOrder();return;}
 if(btn.dataset.rvValue!==undefined){
  const id=vs.ids[vs.at],q=values[vi].items[id];
  submitValue(q[1][Number(btn.dataset.rvValue)],true);return;
 }
 if(command==="value-check"){submitValue($("review-value-input")?.value||"",false);return;}
 if(command==="value-hint"){
  vs.hints[vs.ids[vs.at]]=true;save();drawValues();return;
 }
 if(command==="value-next"){vs.at=Math.min(vs.at+1,vs.ids.length);save();drawValues();return;}
 if(command==="value-reset"){newValues();return;}
 if(btn.dataset.rvJudge!==undefined){
  const id=js.ids[js.at];if(js.answers[id]===undefined){js.answers[id]=btn.dataset.rvJudge;save();drawJudge();}return;
 }
 if(command==="judge-next"){js.at=Math.min(js.at+1,js.ids.length);save();drawJudge();return;}
 if(command==="judge-reset"){newJudge();return;}
}
function init(){
 if(!$("review-workspace"))return;
 load();
 ci=Math.max(0,Math.min(ci,REVIEW_CLASSIFY.length-1));
 oi=Math.max(0,Math.min(oi,REVIEW_ORDER.length-1));
 vi=Math.max(0,Math.min(vi,Math.max(0,values.length-1)));
 if(tab==="values"&&!values.length)tab="matching";
 const tabs=[["matching","Relacionar"],["classify","Clasificar"],["order","Ordenar"],["values","Cifras"],["judge","Detectar errores"]];
 $("review-tabs").innerHTML=tabs.filter(([id])=>id!=="values"||values.length).map(([id,label])=>'<button role="tab" data-review-tab="'+id+'" aria-selected="false">'+label+'</button>').join("");
 $("review-classify-select").innerHTML=REVIEW_CLASSIFY.map((x,i)=>'<option value="'+i+'">'+esc(x.name)+'</option>').join("");
 $("review-order-select").innerHTML=REVIEW_ORDER.map((x,i)=>'<option value="'+i+'">'+esc(x.name)+'</option>').join("");
 $("review-classify-select").value=String(ci);$("review-order-select").value=String(oi);
 $("review-classify-select").addEventListener("change",()=>{ci=Number($("review-classify-select").value);newClass();});
 $("review-order-select").addEventListener("change",()=>{oi=Number($("review-order-select").value);newOrder();});
 if(values.length&&$("review-values-select")){
  $("review-values-select").innerHTML=values.map((x,i)=>'<option value="'+i+'">'+esc(x.name)+'</option>').join("");
  $("review-values-select").value=String(vi);
  $("review-values-select").addEventListener("change",()=>{vi=Number($("review-values-select").value);newValues();});
 }
 document.addEventListener("click",click);
 document.addEventListener("keydown",event=>{if(event.key==="Enter"&&event.target.id==="review-value-input"){event.preventDefault();submitValue(event.target.value,false);}});
 if(!cs||cs.ids?.length!==REVIEW_CLASSIFY[ci].items.length)newClass();else drawClass();
 if(!os||os.ids?.length!==REVIEW_ORDER[oi].steps.length)newOrder();else drawOrder();
 if(values.length&&$("review-values-area")){if(!vs||vs.ids?.length!==values[vi].items.length)newValues();else drawValues();}
 if(!js||js.ids?.length!==REVIEW_JUDGE.length)newJudge();else drawJudge();
 show(tab);
}
document.addEventListener("DOMContentLoaded",init);
window.ReviewExercises={matching:MATCH_SETS.length,classify:REVIEW_CLASSIFY.length,order:REVIEW_ORDER.length,values:values.length,judge:REVIEW_JUDGE.length};
})();