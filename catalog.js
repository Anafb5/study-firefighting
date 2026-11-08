(function(){
"use strict";
const chapters=[
{id:11,title:"Prendas y equipos de protección personal",description:"Categorías de EPI, prendas de intervención, protección respiratoria, NRBQ y RD 773/1997.",published:true,href:"./temas/11/",topics:19,cards:63,questions:89,features:["19 apartados","63 tarjetas","89 preguntas","Repaso interactivo"]},
{id:10,title:"Vehículos contra incendios",description:"Espacio reservado para incorporar el tema y sus ejercicios cuando preparemos y publiquemos el contenido.",published:false,href:null,features:["Pendiente de preparar"]}
];
const esc=v=>String(v??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function getProgress(){
 try{const x=JSON.parse(localStorage.getItem("study-firefighting-t11-v1")||"null");return x&&typeof x==="object"?x:{}}catch(e){return{};}
}
function render(){
 const p=getProgress(),read=Array.isArray(p.read)?p.read.length:0,cards=Array.isArray(p.mastered)?p.mastered.length:0,wrong=Array.isArray(p.wrong)?p.wrong.length:0,history=Array.isArray(p.history)?p.history:[];
 const avg=history.length?Math.round(history.reduce((sum,x)=>sum+(Number(x.percent)||0),0)/history.length):null;
 document.getElementById("catalog-stats").innerHTML=[
 [read+"/19","Apartados del tema 11 estudiados"],[cards+"/63","Tarjetas dominadas"],[wrong,"Preguntas por repasar"],[avg===null?"—":avg+" %","Media en "+history.length+" tests"]
 ].map(([n,l])=>'<div class="stat"><strong>'+n+'</strong><span>'+esc(l)+'</span></div>').join("");
 document.getElementById("catalog-topic-list").innerHTML=chapters.map(x=>
 '<article class="topic-card '+(x.published?"featured":"")+'"><div class="topic-meta"><span>VOLUMEN IV · TEMA '+x.id+'</span><span class="status '+(x.published?"":"waiting")+'">'+(x.published?"Disponible":"En preparación")+'</span></div><h3>'+esc(x.title)+'</h3><p>'+esc(x.description)+'</p><div class="topic-features">'+x.features.map(y=>'<span>'+esc(y)+'</span>').join("")+'</div><div class="topic-footer"><strong>'+(x.published?read+' de '+x.topics+' apartados vistos':"Próximamente")+'</strong>'+(x.href?'<a href="'+esc(x.href)+'">Entrar al tema →</a>':'<span>No publicado</span>')+'</div></article>'
 ).join("");
}
document.addEventListener("DOMContentLoaded",render);
})();