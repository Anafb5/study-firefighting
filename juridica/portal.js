(function(){
"use strict";
const TOPICS=[
"La Constitución española de 1978","El Tribunal Constitucional","Las Cortes Generales y el Defensor del Pueblo","El Poder Judicial",
"El Gobierno y la Administración","La Administración General del Estado","La organización territorial del Estado","Organización de la Unión Europea",
"Fuentes del Derecho Administrativo","La relación jurídico-administrativa","El acto administrativo","El procedimiento administrativo",
"Políticas de igualdad de género","Prevención de riesgos laborales","Formas de la acción administrativa","El régimen local español",
"El municipio","La provincia","Otras entidades locales","Ingresos tributarios locales","Presupuesto de las entidades locales",
"El gasto público local","Las haciendas locales","Los bienes de las entidades locales","Contratación administrativa local",
"Personal al servicio de las entidades locales"];
const escapeHTML=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const items=TOPICS.map((title,i)=>({title,id:i+1,volume:i<8?"I":i<14?"II":"III"}));
function statistics(topic){
 let progress={};
 try{progress=JSON.parse(localStorage.getItem("study-firefighting-j"+topic.id+"-v1")||"{}");}catch(_){}
 const read=Array.isArray(progress.read)?new Set(progress.read).size:0,exams=Array.isArray(progress.history)?progress.history.length:0;
 let mastered=0;
 try{const p=JSON.parse(localStorage.getItem("study-firefighting-j"+topic.id+"-articles-v1")||"{}");mastered=Array.isArray(p.mastered)?p.mastered.length:0;}catch(_){}
 return {read,exams,mastered,started:read>0||exams>0||mastered>0};
}
function render(){
 const el=document.getElementById("legal-topic-grid"),summary=document.getElementById("legal-progress-summary");
 if(!el)return;
 const progress=items.map(t=>({...t,...statistics(t)}));
 const started=progress.filter(t=>t.started).length,studied=progress.reduce((n,t)=>n+t.read,0);
 if(summary)summary.textContent=started+" temas empezados · "+studied+" apartados estudiados";
 el.innerHTML=["I","II","III"].map(vol=>{
  const entries=progress.filter(x=>x.volume===vol);
  return '<div class="legal-volume"><h3>Volumen '+vol+' <span>'+entries.length+' temas</span></h3><div class="legal-volume-grid">'+entries.map(t=>
   '<article class="legal-entry"><span class="legal-entry-number">JURÍDICA '+String(t.id).padStart(2,"0")+'</span>'+
   '<h4>'+escapeHTML(t.title)+'</h4><p>'+(t.started?t.read+' apartados estudiados · '+t.exams+' tests · '+t.mastered+' artículos dominados':'Contenido, artículos y ejercicios disponibles')+'</p>'+
   '<a href="./juridica/'+t.id+'/">'+(t.started?'Continuar tema':'Abrir tema')+' →</a></article>').join("")+'</div></div>';
 }).join("");
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",render);
else render();
document.addEventListener("visibilitychange",()=>{if(!document.hidden)render();});
})();