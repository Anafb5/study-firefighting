/* Entrenador jurídico: la respuesta proviene del PDF; los avisos oficiales nunca cambian la corrección.
 * Recuperación libre de número/ apartado, prueba inversa de contenido y autovaloración.
 * Estado propio y exportable por tema: study-firefighting-jN-articles-v1. */
(function(){
"use strict";
const config=window.STUDY_CONFIG||{}, key=(config.store||"study-firefighting-j1-v1").replace(/-v1$/,"")+"-articles-v1";
const sessKey=key+"-session";
const records=(window.LEGAL_ARTICLES||[]).map((a,i)=>({...a,key:a.norm+":"+a.art,id:i}));
const id=x=>document.getElementById(x);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const shuffle=arr=>arr.slice().sort(()=>Math.random()-.5);
const distinct=x=>Array.from(new Set(x));
const blank=()=>({mastered:[],repeat:[],attempts:{},direction:"to-number",section:"all",pending:false});
let data=blank();try{const stored=JSON.parse(localStorage.getItem(key)||"null");if(stored&&typeof stored==="object"){data={...data,...stored};for(const f of ["mastered","repeat"])if(!Array.isArray(data[f]))data[f]=[];if(!data.attempts||typeof data.attempts!=="object")data.attempts={};}}catch(e){}
let order=[],cursor=0,answer=null,hint=false,visible=null;
try{const s=JSON.parse(sessionStorage.getItem(sessKey)||"null");if(s&&Array.isArray(s.order)){order=s.order.filter(Number.isInteger);cursor=Number(s.cursor)||0;answer=s.answer??null;hint=!!s.hint;visible=Number.isInteger(s.visible)?s.visible:null;}}catch(e){}
const persist=()=>{
 try{localStorage.setItem(key,JSON.stringify(data));}catch(e){}
 try{sessionStorage.setItem(sessKey,JSON.stringify({order,cursor,answer,hint,visible}));}catch(e){}
};
const normNum=str=>{
 const clean=String(str??"").normalize("NFKC").trim().toLowerCase()
  .replace(/[ºª]/g,"").replace(/^art(?:[íi]culo)?\.?\s*/i,"")
  .replace(/\s+/g," ").trim();
 // Rechazar sufijos extraños y respetar el apartado y la letra cuando existen.
 // Ej.: 17, 17.2, 4.1.d, 92 bis y 24 bis; nunca reducir «92 bis» a «92».
 const match=clean.match(/^(\d{1,4})(?:\s*[.,]\s*(\d{1,3}))?(?:\s*[.,]\s*([a-z]))?(?:\s+(bis|ter|quáter|quater))?$/i);
 if(!match)return "";
 return match[1]+(match[2]?"."+match[2]:"")+(match[3]?"."+match[3]:"")+
  (match[4]?" "+(match[4]==="quater"?"quáter":match[4]):"");
};
const pool=()=>records.filter(a=>(data.section==="all"||a.section===data.section)&&(!data.pending||!data.mastered.includes(a.key)));
const current=()=>records.find(a=>a.id===order[cursor])||null;
function restart(){
 order=shuffle(pool().map(a=>a.id));cursor=0;visible=null;answer=null;hint=false;persist();
}
function choices(a,type){
 let alternatives=shuffle(records.filter(b=>b.norm===a.norm&&b.id!==a.id));
 alternatives.sort((x,y)=>Number(x.section!==a.section)-Number(y.section!==a.section));
 alternatives=alternatives.slice(0,3);
 return shuffle([a,...alternatives]).map(b=>({id:b.id,text:type==="to-number"?"Art. "+b.art:b.label}));
}
let options=[];
function makeOptions(a){
 if(visible!==a.id){visible=a.id;answer=null;hint=false;options=[];}
 if(!options.length){options=choices(a,data.direction);}
}
function render(){
 const target=id("legal-practice-area");if(!target)return;
 id("legal-filter").value=data.pending?"pending":"all";
 id("legal-direction").value=data.direction;
 id("legal-section").value=data.section;
 const eligible=pool();if(!eligible.length){
  target.innerHTML='<div class="legal-empty"><h3>Has dominado todos los artículos de este filtro.</h3><p>Desactiva «Solo pendientes» o cambia el bloque para volver a practicar.</p><button type="button" data-legal="all" class="btn btn-outline">Mostrar todos</button></div>';
  id("legal-progress").textContent="0 pendientes";return;
 }
 const allowed=new Set(eligible.map(a=>a.id));
 order=order.filter(x=>allowed.has(x));
 if(!order.length)restart();
 cursor=Math.max(0,Math.min(cursor,order.length-1));
 const a=current();if(!a)return;
 makeOptions(a);
 const answered=answer!==null,form=data.direction==="to-number";
 const prefix='<div class="legal-quiz-number"><span>ARTÍCULO · SEGÚN EL PDF</span><strong>'+(cursor+1)+' / '+order.length+'</strong></div>';
 const prompt=form?'¿Qué número de artículo de <strong>'+esc(a.norm)+'</strong> regula esta materia?':'Según el PDF, ¿qué regula el <strong>artículo '+esc(a.art)+' de '+esc(a.norm)+'</strong>?';
 const question='<div class="legal-question">'+prompt+'</div>'+(form?'<div class="legal-topic-prompt">'+esc(a.label)+'</div>':'');
 let controls="";
 if(form){
  controls='<div class="legal-entry"><label for="legal-input">Número de artículo'+(a.art.includes(".")?" (puede incluir apartado)":"")+'</label>'+
   '<div><input id="legal-input" type="text" autocomplete="off" inputmode="decimal" placeholder="Ej.: 14 o 17.2"'+(answered?' disabled':'')+' value="'+esc(typeof answer==="string"?answer:"")+'"/>'+
   '<button class="btn btn-accent" data-legal="check"'+(answered?' disabled':'')+'>Comprobar</button></div></div>'+
   (!answered?'<button class="legal-hint" type="button" data-legal="hint"'+(hint?' disabled':'')+'>¿Necesitas una pista? Mostrar alternativas</button>':'');
  if(hint&&!answered)controls+='<div class="legal-hint-options">'+options.map(o=>'<button type="button" data-legal-answer="'+o.id+'">'+esc(o.text)+'</button>').join("")+'</div>';
 }else{
  controls='<div class="legal-choice-list">'+options.map((o,i)=>{
   const isRight=answered&&o.id===a.id,isWrong=answered&&o.id===answer&&answer!==a.id;
   return '<button type="button" class="legal-choice'+(isRight?" right":isWrong?" wrong":"")+'" data-legal-answer="'+o.id+'"'+(answered?' disabled':'')+'><b>'+["A","B","C","D"][i]+'</b><span>'+esc(o.text)+'</span>'+(isRight?" ✓":isWrong?" ×":"")+'</button>';
  }).join("")+'</div>';
 }
 let result="";
 if(answered){
  const correct=form?normNum(answer)===a.art:String(answer)===String(a.id);
  result='<div class="legal-feedback" role="status"><strong class="'+(correct?"right":"wrong")+'">'+(correct?"Respuesta correcta":"Respuesta incorrecta")+(hint?" · con pista":"")+'</strong>'+
   '<p>Referencia del temario: <b>'+esc(a.norm)+' · artículo '+esc(a.art)+'</b> — '+esc(a.label)+'.</p>'+
   (a.note?'<p>'+esc(a.note)+'</p>':"")+'<small>Página '+esc(a.page)+' del PDF aportado.</small></div>'+
   '<div class="legal-selfgrade"><strong>¿Lo recuerdas suficientemente bien?</strong><p>Tú decides: un acierto por intuición puede quedar pendiente y un fallo comprendido puede marcarse como aprendido.</p>'+
   '<div><button type="button" data-legal="repeat" class="btn btn-outline">Necesito repasarlo</button><button type="button" data-legal="mastered" class="btn btn-accent">Ya domino este artículo</button></div></div>';
 }
 const nav='<div class="legal-nav"><button type="button" data-legal="prev" class="btn btn-outline">← Anterior</button><button type="button" data-legal="next" class="btn btn-outline">Siguiente →</button></div>';
 target.innerHTML='<div class="legal-question-card">'+prefix+question+controls+result+'</div>'+nav;
 const known=eligible.filter(x=>data.mastered.includes(x.key)).length;
 id("legal-progress").textContent=data.mastered.length+' / '+records.length+' artículos dominados';
 persist();
}
function next(dir){
 if(!order.length)return;
 cursor=(cursor+dir+order.length)%order.length;visible=null;answer=null;hint=false;options=[];render();
}
function grade(mastered){
 const a=current();if(!a||answer===null)return;
 const nextID=order[(cursor+1)%order.length];
 data.mastered=mastered?distinct([...data.mastered,a.key]):data.mastered.filter(x=>x!==a.key);
 data.repeat=mastered?data.repeat.filter(x=>x!==a.key):distinct([...data.repeat,a.key]);
 order=order.filter(i=>pool().some(x=>x.id===i));
 if(order.length){const n=order.indexOf(nextID);cursor=n>=0?n:Math.min(cursor,order.length-1);}else cursor=0;
 visible=null;answer=null;hint=false;options=[];persist();render();
}
function answerNow(value){
 if(answer!==null)return;
 answer=value;
 const a=current();
 const correct=data.direction==="to-number"?normNum(value)===a.art:Number(value)===a.id;
 const previous=data.attempts[a.key]||{seen:0,correct:0,aided:0};
 data.attempts[a.key]={seen:previous.seen+1,correct:previous.correct+(correct?1:0),aided:previous.aided+(hint?1:0)};
 render();
}
function renderNotes(){
 const target=id("legal-notes");if(!target)return;
 const notes=Array.isArray(window.LEGAL_NOTICE)?window.LEGAL_NOTICE:[];
 target.innerHTML=notes.map(note=>{
  const pdf=esc(note.pdf||""),current=esc(note.official||"");
  const url=typeof note.url==="string"&&/^https:\/\/(?:www\.)?boe\.es\//.test(note.url)?note.url:null;
  return '<div class="legal-official-note"><strong>Nota · '+esc(note.tag||"Contraste normativo")+'</strong>'+
   '<p><b>Según el PDF:</b> '+pdf+'</p><p><b>Texto oficial posterior:</b> '+current+'</p>'+
   (url?'<a href="'+esc(url)+'" target="_blank" rel="noopener noreferrer">Consultar publicación oficial BOE</a>':"")+'</div>';
 }).join("");
}
function init(){
 if(!id("legal-practice-area"))return;
 renderNotes();
 const sec=id("legal-section");
 sec.innerHTML='<option value="all">Todos los bloques</option>'+
 (window.LEGAL_SOURCE?.sections||[]).map(x=>'<option value="'+esc(x.id)+'">'+esc(x.title)+'</option>').join("");
 id("legal-direction").addEventListener("change",e=>{data.direction=e.target.value==="to-content"?"to-content":"to-number";restart();render();});
 id("legal-filter").addEventListener("change",e=>{data.pending=e.target.value==="pending";restart();render();});
 sec.addEventListener("change",e=>{data.section=e.target.value;restart();render();});
 document.addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b)return;
  if(b.dataset.view==="articulos")render();
  if(b.dataset.legalAnswer!==undefined){
   const n=Number(b.dataset.legalAnswer),a=current();
   if(!a)return;
   if(data.direction==="to-number")answerNow(records.find(x=>x.id===n)?.art||"");
   else answerNow(n);
  }
  const action=b.dataset.legal;
  if(action==="check"){answerNow(id("legal-input")?.value||"");}
  else if(action==="hint"){hint=true;render();}
  else if(action==="prev")next(-1);
  else if(action==="next")next(1);
  else if(action==="mastered")grade(true);
  else if(action==="repeat")grade(false);
  else if(action==="all"){data.pending=false;restart();render();}
 });
 document.addEventListener("keydown",e=>{if(e.key==="Enter"&&document.activeElement?.id==="legal-input"&&answer===null){e.preventDefault();answerNow(id("legal-input").value);}});
 render();
}
window.LegalStudy={reset:()=>{data=blank();restart();render();}};
document.addEventListener("DOMContentLoaded",init);
})();
