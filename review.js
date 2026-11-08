/* Repaso activo: conserva el juego de relaciones y añade tres métodos. */
(function(){
"use strict";
const $=id=>document.getElementById(id);
const esc=v=>String(v??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const shuffle=a=>a.slice().sort(()=>Math.random()-.5),KEY=window.STUDY_CONFIG?.reviewKey||"fire-study-review-v1";
let tab="matching",ci=0,oi=0,cs=null,os=null,ji=0,ja=null;
function save(){try{sessionStorage.setItem(KEY,JSON.stringify({tab,ci,oi,cs,os,ji,ja}));}catch(e){}}
function load(){try{const x=JSON.parse(sessionStorage.getItem(KEY)||"null");if(!x)return;tab=["matching","classify","order","judge"].includes(x.tab)?x.tab:"matching";ci=Number(x.ci)||0;oi=Number(x.oi)||0;cs=x.cs||null;os=x.os||null;ji=Number(x.ji)||0;ja=x.ja??null;}catch(e){}}
function newClass(){const x=REVIEW_CLASSIFY[ci];cs={ids:shuffle(x.items.map((_,i)=>i)),at:0,answers:{}};save();drawClass();}
function newOrder(){const x=REVIEW_ORDER[oi];os={ids:shuffle(x.steps.map((_,i)=>i)),checked:false};if(os.ids.every((n,i)=>n===i))os.ids.reverse();save();drawOrder();}
function drawClass(){
 const x=REVIEW_CLASSIFY[ci];if(!cs||!Array.isArray(cs.ids)||cs.ids.length!==x.items.length){newClass();return;}
 const done=Object.keys(cs.answers).length;
 const correct=Object.entries(cs.answers).filter(([i,a])=>x.items[Number(i)]?.[1]===a).length;
 if(done===x.items.length){
  $("review-classify-area").innerHTML='<div class="rv-score"><strong>'+correct+' / '+done+'</strong><p>Clasificación completada.</p><button class="rv-btn primary" data-rv="class-reset">Repetir con otro orden</button></div>'+x.items.map((item,i)=>'<p class="rv-resultline">'+(cs.answers[i]===item[1]?"✓":"✕")+' '+esc(item[0])+' → <b>'+esc(x.groups[item[1]])+'</b></p>').join("");
  return;
 }
 const id=cs.ids[cs.at],q=x.items[id],answer=cs.answers[id],answered=answer!==undefined;
 $("review-classify-area").innerHTML='<div class="rv-kicker">ELEMENTO '+(done+1)+' DE '+x.items.length+' · '+correct+' aciertos</div><div class="rv-prompt">'+esc(q[0])+'</div><div class="rv-options">'+x.groups.map((label,i)=>'<button class="rv-option '+(answered?(i===q[1]?"right":i===answer?"wrong":""):"")+'" data-rv-class="'+i+'" '+(answered?"disabled":"")+'>'+esc(label)+'</button>').join("")+'</div>'+
 (answered?'<p class="rv-feedback">'+(answer===q[1]?"Respuesta correcta. ":"Respuesta incorrecta. ")+esc(x.why)+' La opción es: '+esc(x.groups[q[1]])+'.</p><button class="rv-btn primary" data-rv="class-next">Siguiente →</button>':"");
}
function drawOrder(){
 const x=REVIEW_ORDER[oi];if(!os||!Array.isArray(os.ids)||os.ids.length!==x.steps.length){newOrder();return;}
 $("review-order-area").innerHTML='<p class="rv-hint">Usa las flechas ↑ y ↓ para ordenar de arriba a abajo.</p><div class="rv-ordered">'+os.ids.map((id,i)=>'<div class="rv-sort '+(os.checked?(id===i?"right":"wrong"):"")+'"><span class="rv-rank">'+(i+1)+'</span><span>'+esc(x.steps[id])+'</span><div><button data-rv-move="-1" data-rv-at="'+i+'" '+(i===0||os.checked?"disabled":"")+' aria-label="Subir">↑</button><button data-rv-move="1" data-rv-at="'+i+'" '+(i===os.ids.length-1||os.checked?"disabled":"")+' aria-label="Bajar">↓</button></div></div>').join("")+'</div>'+
 (os.checked?'<p class="rv-feedback">'+(os.ids.every((n,i)=>n===i)?"Orden correcto. ":"Hay pasos fuera de su posición. ")+esc(x.why)+'</p><button class="rv-btn primary" data-rv="order-reset">Repetir ejercicio</button>':'<button class="rv-btn primary" data-rv="order-check">Comprobar orden</button>');
}
function drawJudge(){
 const x=REVIEW_JUDGE[ji];
 $("review-judge-area").innerHTML='<div class="rv-kicker">AFIRMACIÓN '+(ji+1)+' / '+REVIEW_JUDGE.length+'</div><div class="rv-prompt">“'+esc(x[0])+'”</div><div class="rv-options">'+[["true","Es correcta"],["false","Contiene un error"]].map(([v,label])=>'<button class="rv-option '+(ja!==null?(v===String(x[1])?"right":v===ja?"wrong":""):"")+'" data-rv-judge="'+v+'" '+(ja!==null?"disabled":"")+'>'+label+'</button>').join("")+'</div>'+
 (ja!==null?'<p class="rv-feedback">'+(ja===String(x[1])?"Acertado. ":"Respuesta incorrecta. ")+esc(x[2])+'</p><button class="rv-btn primary" data-rv="judge-next">Siguiente →</button>':"");
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
 if(btn.dataset.rvClass!==undefined){const id=cs.ids[cs.at];if(cs.answers[id]===undefined){cs.answers[id]=Number(btn.dataset.rvClass);save();drawClass();}return;}
 if(command==="class-next"){cs.at=Math.min(cs.at+1,cs.ids.length-1);save();drawClass();return;}
 if(command==="class-reset"){newClass();return;}
 if(btn.dataset.rvMove){const from=Number(btn.dataset.rvAt),to=from+Number(btn.dataset.rvMove);if(to>=0&&to<os.ids.length&&!os.checked){[os.ids[from],os.ids[to]]=[os.ids[to],os.ids[from]];save();drawOrder();}return;}
 if(command==="order-check"){os.checked=true;save();drawOrder();return;}
 if(command==="order-reset"){newOrder();return;}
 if(btn.dataset.rvJudge!==undefined){if(ja===null){ja=btn.dataset.rvJudge;save();drawJudge();}return;}
 if(command==="judge-next"){ji=(ji+1)%REVIEW_JUDGE.length;ja=null;save();drawJudge();return;}
}
function init(){
 if(!$("review-workspace"))return;
 load();
 ci=Math.max(0,Math.min(ci,REVIEW_CLASSIFY.length-1));
 oi=Math.max(0,Math.min(oi,REVIEW_ORDER.length-1));
 ji=Math.max(0,Math.min(ji,REVIEW_JUDGE.length-1));
 $("review-tabs").innerHTML=[["matching","Relacionar"],["classify","Clasificar"],["order","Ordenar"],["judge","Detectar errores"]].map(([key,label])=>'<button role="tab" data-review-tab="'+key+'" aria-selected="false">'+label+'</button>').join("");
 $("review-classify-select").innerHTML=REVIEW_CLASSIFY.map((x,i)=>'<option value="'+i+'">'+esc(x.name)+'</option>').join("");
 $("review-order-select").innerHTML=REVIEW_ORDER.map((x,i)=>'<option value="'+i+'">'+esc(x.name)+'</option>').join("");
 $("review-classify-select").value=String(ci);
 $("review-order-select").value=String(oi);
 $("review-classify-select").addEventListener("change",()=>{ci=Number($("review-classify-select").value);newClass();});
 $("review-order-select").addEventListener("change",()=>{oi=Number($("review-order-select").value);newOrder();});
 document.addEventListener("click",click);
 if(!cs||cs.ids?.length!==REVIEW_CLASSIFY[ci].items.length)newClass();else drawClass();
 if(!os||os.ids?.length!==REVIEW_ORDER[oi].steps.length)newOrder();else drawOrder();
 drawJudge();show(tab);
}
document.addEventListener("DOMContentLoaded",init);
window.ReviewExercises={matching:MATCH_SETS.length,classify:REVIEW_CLASSIFY.length,order:REVIEW_ORDER.length,judge:REVIEW_JUDGE.length};
})();