/* Reanudar donde se dejó la web, incluso dentro de un test.
 * Los datos permanecen en sessionStorage de ESTA pestaña; el progreso a largo
 * plazo sigue almacenado por app.js en localStorage. */
(function () {
"use strict";
const KEY="study-firefighting-resume-v1";
const SCREENS=new Set(["inicio","temario","tarjetas","relacionar","test"]);
const $=id=>document.getElementById(id);
let ready=false,restoring=false,queued=false;

try{if("scrollRestoration" in window.history)window.history.scrollRestoration="manual";}catch(e){}

function read(){
 try{
  const raw=sessionStorage.getItem(KEY);
  if(!raw)return null;
  const x=JSON.parse(raw);
  return x&&x.version===1&&SCREENS.has(x.view)?x:null;
 }catch(e){return null;}
}
function safeSelection(selector){
 const input=document.querySelector(selector);
 return input?input.value:null;
}
function visible(el){return el&&!el.classList.contains("hidden");}
function getVisualState(){
 const result={};
 document.querySelectorAll("#topic-list [data-st-workbench]").forEach(root=>{
  const active=root.querySelector("[data-st-node].is-active");
  result[root.dataset.stWorkbench]={node:active?Number(active.dataset.stNode):0};
 });
 return result;
}
function nearestLesson(){
 if(!$("view-temario")?.classList.contains("active"))return null;
 const lessons=Array.from(document.querySelectorAll("#topic-list .lesson"));
 let active=null;
 for(const item of lessons){
  if(item.getBoundingClientRect().top<Math.max(165,window.innerHeight*.25))active=item;
  else break;
 }
 if(!active)return null;
 return {id:active.id,viewportTop:active.getBoundingClientRect().top};
}
function snapshot(){
 const active=document.querySelector(".view.active");
 const phase=visible($("test-results"))?"results":visible($("test-session"))?"session":"setup";
 return {
  version:1,
  view:active?.id.slice(5)||"inicio",
  scroll:Math.round(window.scrollY),
  lessonAnchor:nearestLesson(),
  selectedSection:document.querySelector("#toc button.selected")?.dataset.toc||"all",
  topicSearch:$("topic-search")?.value||"",
  openLessons:Array.from(document.querySelectorAll("#topic-list .lesson.open")).map(el=>el.id.slice(7)),
  openDetails:Array.from(document.querySelectorAll("#topic-list .sv-study-details[open]")).map(el=>el.dataset.detailTopic),
  visual:getVisualState(),
  cardFilter:safeSelection("#cards-filter"),
  cardsPending:!!$("cards-pending")?.checked,
  matchFilter:safeSelection("#match-filter"),
  testFilters:{
   section:safeSelection("#exam-section"),
   count:safeSelection("#exam-count"),
   mode:safeSelection("#exam-mode"),
   pool:safeSelection("#exam-pool")
  },
  testPhase:phase,
  testResultsHtml:phase==="results"?$("test-results").innerHTML:null,
  engine:window.FireStudySession?.snapshot()||null
 };
}
function write(){
 if(!ready||restoring)return;
 try{sessionStorage.setItem(KEY,JSON.stringify(snapshot()));}catch(err){}
}
function queueWrite(){
 if(!ready||restoring||queued)return;
 queued=true;
 window.requestAnimationFrame(()=>{queued=false;write();});
}
function setSelect(id,value){
 const node=$(id);if(!node||value==null)return;
 const option=Array.from(node.options).some(x=>x.value===value);
 if(option)node.value=value;
}
function restoreVisuals(visual){
 if(!visual||typeof visual!=="object")return;
 for(const [id,info] of Object.entries(visual)){
  const root=Array.from(document.querySelectorAll("#topic-list [data-st-workbench]")).find(x=>x.dataset.stWorkbench===id);
  if(!root||!info)continue;
  const target=Array.from(root.querySelectorAll("[data-st-node]")).find(x=>Number(x.dataset.stNode)===info.node);
  if(target&&info.node!==0)target.click();
 }
}
function apply(snapshot){
 if(!snapshot)return;
 restoring=true;
 try{
  setSelect("cards-filter",snapshot.cardFilter);
  if($("cards-pending"))$("cards-pending").checked=!!snapshot.cardsPending;
  setSelect("match-filter",snapshot.matchFilter);
  if(snapshot.testFilters){
   setSelect("exam-section",snapshot.testFilters.section);
   setSelect("exam-count",snapshot.testFilters.count);
   setSelect("exam-mode",snapshot.testFilters.mode);
   setSelect("exam-pool",snapshot.testFilters.pool);
  }
  if(snapshot.view!=="inicio"){
   const target=document.querySelector('.nav-link[data-view="'+snapshot.view+'"]');
   target?.click();
  }
  const search=$("topic-search");
  if(search)search.value=String(snapshot.topicSearch||"");
  const section=SCREENS.has(snapshot.view)?snapshot.selectedSection:"all";
  const toc=Array.from(document.querySelectorAll("#toc [data-toc]")).find(x=>x.dataset.toc===section);
  if(toc)toc.click();
  // Recuperar EXACTAMENTE los apartados que el usuario dejó desplegados.
  if(Array.isArray(snapshot.openLessons)){
   const wanted=new Set(snapshot.openLessons);
   document.querySelectorAll("#topic-list .lesson").forEach(lesson=>{
    const shouldOpen=wanted.has(lesson.id.slice(7));
    if(lesson.classList.contains("open")!==shouldOpen)lesson.querySelector(".lesson-header")?.click();
   });
  }
  if(Array.isArray(snapshot.openDetails)){
   const wanted=new Set(snapshot.openDetails);
   document.querySelectorAll("#topic-list .sv-study-details").forEach(details=>{
    details.open=wanted.has(details.dataset.detailTopic);
   });
  }
  restoreVisuals(snapshot.visual);
  window.FireStudySession?.restore(snapshot.engine);
  if(snapshot.view==="test"&&snapshot.testPhase==="results"&&typeof snapshot.testResultsHtml==="string"&&snapshot.testResultsHtml.length){
   $("test-setup")?.classList.add("hidden");
   $("test-session")?.classList.add("hidden");
   $("test-results").innerHTML=snapshot.testResultsHtml;
   $("test-results").classList.remove("hidden");
  }
 }catch(err){
  // Nunca dejar la aplicación inutilizable por una sesión guardada incorrectamente.
  console.warn("No se pudo restaurar algún detalle de la sesión",err);
 }
 const savedScroll=Number.isFinite(snapshot.scroll)?Math.max(0,snapshot.scroll):0;
 const desiredAnchor=snapshot.view==="temario"?snapshot.lessonAnchor:null;
 const doScroll=()=>{
  if(desiredAnchor?.id){
   const node=$(desiredAnchor.id);
   if(node&&Number.isFinite(desiredAnchor.viewportTop)){
    const newY=window.scrollY+node.getBoundingClientRect().top-desiredAnchor.viewportTop;
    window.scrollTo(0,Math.max(0,newY));
    return;
   }
  }
  window.scrollTo(0,savedScroll);
 };
 window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>{
  doScroll();
  restoring=false;
  ready=true;
  write();
 }));
}
document.addEventListener("DOMContentLoaded",()=>{
 const saved=read();
 if(saved)apply(saved);
 else ready=true;
 document.addEventListener("click",queueWrite);
 document.addEventListener("change",queueWrite);
 document.addEventListener("input",queueWrite);
 document.addEventListener("toggle",event=>{
  if(event.target.matches?.(".sv-study-details"))queueWrite();
 },true);
 window.addEventListener("scroll",queueWrite,{passive:true});
 window.addEventListener("resize",queueWrite,{passive:true});
 window.addEventListener("pagehide",write);
 document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden")write();});
});
})();