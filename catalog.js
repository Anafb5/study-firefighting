/* Índice de la oposición: áreas independientes y temas publicados.
   Los temas en preparación nunca se muestran como disponibles. */
(function(){
"use strict";
const areas=[
 {id:"tecnica",number:"01",name:"Técnica",title:"Temario técnico",
  eyebrow:"ÁREA 01 · TÉCNICA",description:"Equipos, materiales, intervención y procedimientos operativos.",
  intro:"Temas, esquemas, tablas, tarjetas y ejercicios sobre la parte técnica.",
  icon:"<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M12 2 4 6v6c0 5 3.4 8.1 8 10 4.6-1.9 8-5 8-10V6l-8-4Z'/><path d='m9 12 2 2 4-4'/></svg>"},
 {id:"juridica",number:"02",name:"Jurídica",title:"Temario jurídico",
  eyebrow:"ÁREA 02 · JURÍDICA",description:"Legislación, normativa y organización administrativa.",
  intro:"Aquí incorporaremos los temas jurídicos y sus ejercicios cuando dispongamos del material correspondiente.",
  icon:"<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M3 21h18M6 18h12M12 3l9 6H3l9-6Zm-6 6v9m4-9v9m4-9v9m4-9v9'/></svg>"},
 {id:"psicotecnicos",number:"03",name:"Psicotécnicos",title:"Psicotécnicos",
  eyebrow:"ÁREA 03 · PSICOTÉCNICOS",description:"Práctica de aptitudes y razonamiento mediante ejercicios.",
  intro:"Este espacio tendrá pruebas y ejercicios psicotécnicos organizados por tipo de habilidad.",
  icon:"<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M12 6.5a4.5 4.5 0 0 0-8.4 2.2A4.7 4.7 0 0 0 5 17.4M12 6.5a4.5 4.5 0 0 1 8.4 2.2 4.7 4.7 0 0 1-1.4 8.7M12 4v16M5 14a3.5 3.5 0 0 0 4 4m10-4a3.5 3.5 0 0 1-4 4M9 8.5c.8.9 1.8 1.3 3 1.3s2.2-.4 3-1.3'/></svg>"}
];
const chapters=[
 {id:11,area:"tecnica",title:"Prendas y equipos de protección personal",
  description:"Categorías de EPI, prendas de intervención, protección respiratoria, NRBQ y RD 773/1997.",
  published:true,href:"./temas/11/",topics:19,cards:63,questions:89,
  features:["19 apartados","63 tarjetas","89 preguntas","Repaso interactivo"]},
 {id:10,area:"tecnica",title:"Vehículos contra incendios",
  description:"Clasificación, siglas, componentes, bombas hidráulicas, vehículos urbanos, rurales, forestales, nodrizas, salvamento y circulación.",
  published:true,href:"./temas/10/",topics:29,cards:88,questions:135,features:["29 apartados","88 tarjetas","135 preguntas","Repaso interactivo"]}
];
const esc=v=>String(v??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
let selectedArea="tecnica";
function getProgress(id){
 try{
  const x=JSON.parse(localStorage.getItem("study-firefighting-t"+id+"-v1")||"null");
  return x&&typeof x==="object"&&!Array.isArray(x)?x:{};
 }catch(e){return{};}
}
function progressCount(items){
 return items.reduce((sum,x)=>sum+(Array.isArray(getProgress(x.id).read)?getProgress(x.id).read.length:0),0);
}
function renderStats(){
 const published=chapters.filter(t=>t.published);
 let completed=0,total=0,mastered=0,cards=0,wrong=0,history=[];
 published.forEach(t=>{
  const p=getProgress(t.id);
  completed+=Array.isArray(p.read)?p.read.length:0;
  total+=t.topics||0;
  mastered+=Array.isArray(p.mastered)?p.mastered.length:0;
  cards+=t.cards||0;
  wrong+=Array.isArray(p.wrong)?p.wrong.length:0;
  if(Array.isArray(p.history))history=history.concat(p.history);
 });
 const avg=history.length?Math.round(history.reduce((sum,x)=>sum+(Number(x.percent)||0),0)/history.length):null;
 document.getElementById("catalog-stats").innerHTML=[
  [completed+"/"+total,"Apartados estudiados"],
  [mastered+"/"+cards,"Tarjetas dominadas"],
  [wrong,"Preguntas por repasar"],
  [avg===null?"—":avg+" %","Media de "+history.length+" tests"]
 ].map(([n,label])=>'<div class="stat"><strong>'+esc(n)+'</strong><span>'+esc(label)+'</span></div>').join("");
}
function areaStatus(area){
 const items=chapters.filter(x=>x.area===area.id);
 const available=items.filter(x=>x.published).length;
 const pending=items.length-available;
 return {available,pending};
}
function renderAreas(){
 document.getElementById("catalog-areas").innerHTML=areas.map(area=>{
  const count=areaStatus(area),active=area.id===selectedArea;
  const status=count.available?count.available+" tema disponible":count.pending?count.pending+" tema en preparación":"Sin temas publicados";
  return '<button type="button" role="tab" id="area-tab-'+area.id+'" aria-controls="area-panel" aria-selected="'+active+'" data-area="'+area.id+'" class="area-card area-'+area.id+(active?" active":"")+'">'+
   '<span class="area-top"><span class="area-number">ÁREA '+area.number+'</span><span class="area-icon">'+area.icon+'</span></span>'+
   '<span class="area-name">'+esc(area.name)+'</span><span class="area-description">'+esc(area.description)+'</span>'+
   '<span class="area-bottom"><span class="area-status">'+esc(status)+'</span><span class="area-cta" aria-hidden="true">Explorar ↗</span></span></button>';
 }).join("");
}
function renderTopics(){
 const area=areas.find(a=>a.id===selectedArea)||areas[0];
 const items=chapters.filter(x=>x.area===area.id);
 const published=items.filter(x=>x.published);
 document.getElementById("area-eyebrow").textContent=area.eyebrow;
 document.getElementById("area-title").textContent=area.title;
 document.getElementById("area-intro").textContent=area.intro;
 document.getElementById("area-summary").textContent=published.length+" disponibles"+(items.length-published.length?" · "+(items.length-published.length)+" en preparación":"");
 const panel=document.getElementById("area-panel");
 panel.setAttribute("aria-labelledby","area-tab-"+area.id);
 document.getElementById("catalog-topic-list").innerHTML=items.length?items.map(x=>{
  const read=x.published?Math.min(x.topics||0,Array.isArray(getProgress(x.id).read)?getProgress(x.id).read.length:0):0;
  return '<article class="topic-card '+(x.published?"featured":"")+'"><div class="topic-meta"><span>TEMA '+x.id+'</span><span class="status '+(x.published?"":"waiting")+'">'+(x.published?"Disponible":"En preparación")+'</span></div><h3>'+esc(x.title)+'</h3><p>'+esc(x.description)+'</p><div class="topic-features">'+x.features.map(y=>'<span>'+esc(y)+'</span>').join("")+'</div><div class="topic-footer"><strong>'+(x.published?read+' de '+x.topics+' apartados vistos':"Próximamente")+'</strong>'+(x.published&&x.href?'<a href="'+esc(x.href)+'">Entrar al tema →</a>':'<span>No publicado</span>')+'</div></article>';
 }).join(""):'<div class="empty-area"><div class="empty-area-icon">'+area.icon+'</div><strong>Esta área está preparada para recibir contenidos</strong><p>Todavía no hemos incorporado temas de '+esc(area.name.toLowerCase())+'. En cuanto dispongamos del material, aparecerán aquí sus apuntes y ejercicios.</p><button type="button" class="area-empty-button" data-area="tecnica">Ver los temas de Técnica →</button></div>';
}
function selectArea(id,scroll=false,changeUrl=false){
 if(!areas.some(a=>a.id===id))return;
 selectedArea=id;
 renderAreas();
 renderTopics();
 try{sessionStorage.setItem("study-firefighting-current-area",id);}catch(e){}
 if(changeUrl){history.pushState({area:id},"","#"+id);}
 if(scroll)document.getElementById("temas").scrollIntoView({behavior:"smooth",block:"start"});
}
function initialArea(){
 const hash=decodeURIComponent(location.hash.slice(1));
 if(areas.some(a=>a.id===hash))return hash;
 try{const saved=sessionStorage.getItem("study-firefighting-current-area");if(areas.some(a=>a.id===saved))return saved;}catch(e){}
 return "tecnica";
}
function init(){
 selectedArea=initialArea();
 renderStats();
 renderAreas();
 renderTopics();
 document.addEventListener("click",event=>{
  const btn=event.target.closest("[data-area]");
  if(btn)selectArea(btn.dataset.area,true,true);
 });
 window.addEventListener("popstate",()=>{
  const id=decodeURIComponent(location.hash.slice(1));
  if(areas.some(a=>a.id===id))selectArea(id,false,false);
 });
}
document.addEventListener("DOMContentLoaded",init);
})();