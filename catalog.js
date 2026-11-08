(function(){
"use strict";
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const areas=[
{id:"tecnica",number:"01",name:"Técnica",description:"Materiales, intervenciones y protección contra incendios.",icon:"▤"},
{id:"juridica",number:"02",name:"Jurídica",description:"Normativa, administración y legislación.",icon:"§"},
{id:"psicotecnicos",number:"03",name:"Psicotécnicos",description:"Lógica, razonamiento y aptitudes.",icon:"◇"}];
const titles=[
"Magnitudes físicas","Hidráulica y mecánica de fluidos","La electricidad","Naturaleza del fuego",
"Agentes extintores y mecanismos de extinción","El agua como agente extintor","Espumas extintoras",
"Extintores","Instalaciones fijas","Vehículos contra incendios","Prendas y equipos de protección personal"];
const known={9:{topics:33,cards:159,questions:137},10:{topics:29,cards:88,questions:135},11:{topics:19,cards:63,questions:89}};
const chapters=titles.map((title,i)=>{const id=i+1,k=known[id];return {id,title,area:"tecnica",published:!!k,href:k?"./temas/"+id+"/":null,...k};});
let current="tecnica";const expanded={};
function progress(t){
 const k="study-firefighting-t"+t.id+"-v1";let p={};
 try{p=JSON.parse(localStorage.getItem(k)||"null")||{};}catch(e){}
 const read=t.published?Math.min(t.topics,new Set(Array.isArray(p.read)?p.read:[]).size):0;
 const mastered=t.published?Math.min(t.cards,new Set(Array.isArray(p.mastered)?p.mastered:[]).size):0;
 const wrong=t.published?new Set(Array.isArray(p.wrong)?p.wrong:[]).size:0;
 const exams=Array.isArray(p.history)?p.history:[];
 const started=read>0||mastered>0||wrong>0||exams.length>0;
 const complete=!!t.published&&read===t.topics;
 return {...t,read,mastered,wrong,exams,started,complete,percent:t.published?Math.round(read/t.topics*100):0};
}
const areaTopics=id=>chapters.filter(t=>t.area===id).map(progress);
const published=id=>areaTopics(id).filter(t=>t.published);
const bar=(p,title)=>'<div class="dash-bar" role="progressbar" aria-label="'+esc(title)+'" aria-valuenow="'+p+'" aria-valuemin="0" aria-valuemax="100"><span style="width:'+p+'%"></span></div>';
function renderDashboard(){
 const all=chapters.map(progress).filter(t=>t.published);
 const read=all.reduce((s,t)=>s+t.read,0),parts=all.reduce((s,t)=>s+t.topics,0),pct=parts?Math.round(read/parts*100):0;
 const cards=all.reduce((s,t)=>s+t.cards,0),mastered=all.reduce((s,t)=>s+t.mastered,0);
 const exams=all.flatMap(t=>t.exams).filter(x=>Number.isFinite(Number(x.percent)));
 const avg=exams.length?Math.round(exams.reduce((s,x)=>s+Number(x.percent),0)/exams.length)+" %":"—";
 const stats=[[all.filter(t=>t.complete).length,"Temas terminados"],[all.filter(t=>t.started&&!t.complete).length,"En curso"],[mastered+" / "+cards,"Tarjetas dominadas"],[all.reduce((s,t)=>s+t.wrong,0),"Errores por repasar"],[exams.length,"Tests realizados"],[avg,"Media de los tests"]];
 document.getElementById("catalog-stats").innerHTML='<div class="dash-overview"><div class="dash-main"><span class="section-label">AVANCE DEL TEMARIO DISPONIBLE</span><div class="dash-number">'+pct+'<small>%</small></div>'+bar(pct,"Progreso global")+'<p>'+read+' de '+parts+' apartados estudiados en '+all.length+' temas disponibles.</p></div><div class="dash-metrics">'+stats.map(([n,l])=>'<div class="dash-metric"><strong>'+esc(n)+'</strong><span>'+esc(l)+'</span></div>').join("")+'</div></div>'+
 '<div class="dash-areas">'+areas.map(area=>{
 const t=published(area.id),done=t.reduce((n,x)=>n+x.read,0),total=t.reduce((n,x)=>n+x.topics,0),pc=total?Math.round(done/total*100):0;
 return '<button type="button" data-area="'+area.id+'" class="dash-area"><span><strong>'+area.name+'</strong><small>'+t.filter(x=>x.complete).length+' archivados · '+t.filter(x=>x.started&&!x.complete).length+' en curso</small></span><b>'+pc+' %</b>'+bar(pc,area.name)+'</button>';
 }).join("")+'</div>';
 const active=all.find(t=>t.started&&!t.complete)||all.find(t=>!t.started);
 document.getElementById("study-focus").innerHTML=active?'<span class="section-label">TU SIGUIENTE PASO</span><h3>'+(active.started?"Continúa con el Tema ":"Empieza el Tema ")+active.id+'</h3><p>'+esc(active.title)+' · '+active.read+'/'+active.topics+' apartados</p><a class="focus-button" href="'+active.href+'">'+(active.started?"Continuar":"Empezar")+' →</a>':'<h3>Todos los temas publicados están completados</h3><p>Los encontrarás archivados en su área para poder repasarlos.</p>';
}
function renderAreas(){
 document.getElementById("catalog-areas").innerHTML=areas.map(a=>{
 const t=published(a.id),active=current===a.id;
 return '<button type="button" id="area-tab-'+a.id+'" role="tab" aria-selected="'+active+'" data-area="'+a.id+'" class="area-card '+(active?"active":"")+'"><span class="area-top"><span class="area-number">ÁREA '+a.number+'</span><span class="area-icon" aria-hidden="true">'+a.icon+'</span></span><span class="area-name">'+a.name+'</span><span class="area-description">'+a.description+'</span><span class="area-bottom"><span class="area-status">'+t.length+' '+(t.length===1?"tema publicado":"temas publicados")+'</span><span class="area-cta">Explorar ↗</span></span></button>';
 }).join("");
}
function card(t,compact=false){
 const status=!t.published?"En preparación":t.complete?"Terminado":t.started?"En curso":"Sin empezar";
 const cls=!t.published?"waiting":t.complete?"complete":t.started?"ongoing":"new";
 return '<article class="topic-card '+(compact?"compact-topic":"")+'"><div class="topic-meta"><span>TEMA '+String(t.id).padStart(2,"0")+'</span><span class="status '+cls+'">'+status+'</span></div><h3>'+esc(t.title)+'</h3>'+
 (t.published?'<div class="topic-features"><span>'+t.topics+' apartados</span><span>'+t.cards+' tarjetas</span><span>'+t.questions+' preguntas</span></div><div class="topic-progress"><span>'+t.read+' / '+t.topics+' estudiados</span><b>'+t.percent+' %</b></div>'+bar(t.percent,"Tema "+t.id):'<p>Este tema todavía no tiene contenido publicado.</p>')+
 '<div class="topic-footer"><strong>'+(!t.published?"Por preparar":t.complete?"Completado":t.started?"Retoma tu estudio":"Listo para empezar")+'</strong>'+(t.published?'<a href="'+t.href+'">'+(t.complete?"Repasar":t.started?"Continuar":"Empezar")+' →</a>':'<span>No disponible</span>')+'</div></article>';
}
function drawer(id,title,items){
 if(!items.length)return"";
 return '<details class="catalog-drawer" data-drawer="'+id+'" '+(expanded[id]?"open":"")+'><summary><span class="drawer-icon">'+(id.endsWith("archive")?"✓":"＋")+'</span><span><strong>'+title+'</strong><small>'+items.length+' '+(items.length===1?"tema":"temas")+'</small></span><span class="drawer-open">Mostrar / ocultar</span></summary><div class="topic-list drawer-list">'+items.map(t=>card(t,true)).join("")+'</div></details>';
}
function renderTopics(){
 const area=areas.find(x=>x.id===current)||areas[0],t=areaTopics(area.id),done=t.filter(x=>x.complete),ongoing=t.filter(x=>x.published&&x.started&&!x.complete),newOnes=t.filter(x=>x.published&&!x.started);
 const next=newOnes[0],visible=[...ongoing,...(next?[next]:[])],future=[...newOnes.slice(next?1:0),...t.filter(x=>!x.published)];
 document.getElementById("area-eyebrow").textContent="ÁREA "+area.number+" · "+area.name.toUpperCase();
 document.getElementById("area-title").textContent=area.id==="tecnica"?"Temario técnico":area.name;
 document.getElementById("area-intro").textContent=area.description;
 document.getElementById("area-summary").textContent=t.filter(x=>x.published).length+" publicados · "+done.length+" archivados";
 document.getElementById("area-panel").setAttribute("aria-labelledby","area-tab-"+area.id);
 document.getElementById("catalog-topic-list").innerHTML=
 '<div class="catalog-group"><div class="catalog-group-head"><div><span class="section-label">EN TU MESA DE ESTUDIO</span><h3>Ahora y a continuación</h3></div><span class="small">'+visible.length+' destacados</span></div>'+
 (visible.length?'<div class="topic-list">'+visible.map(x=>card(x)).join("")+'</div>':'<div class="empty-current">No tienes temas en curso en esta área. Los terminados se conservan en el archivo.</div>')+'</div>'+
 drawer(area.id+"-archive","Temas terminados · Archivo",done)+drawer(area.id+"-future","Próximos temas y sin empezar",future);
}
function selectArea(id,scroll=false,hash=false){
 if(!areas.some(a=>a.id===id))return;
 current=id;renderAreas();renderTopics();
 try{sessionStorage.setItem("study-firefighting-current-area",id);}catch(e){}
 if(hash)history.pushState({area:id},"","#"+id);
 if(scroll)document.getElementById("temas").scrollIntoView({behavior:"smooth",block:"start"});
}
function init(){
 const h=decodeURIComponent(location.hash.slice(1));
 try{current=areas.some(a=>a.id===h)?h:sessionStorage.getItem("study-firefighting-current-area")||"tecnica";}catch(e){current="tecnica";}
 if(!areas.some(a=>a.id===current))current="tecnica";
 renderDashboard();renderAreas();renderTopics();
 document.addEventListener("click",e=>{const b=e.target.closest("[data-area]");if(b)selectArea(b.dataset.area,true,true)});
 document.addEventListener("toggle",e=>{const b=e.target.closest?.("[data-drawer]");if(b)expanded[b.dataset.drawer]=b.open},true);
 window.addEventListener("popstate",()=>{const area=decodeURIComponent(location.hash.slice(1));if(areas.some(a=>a.id===area))selectArea(area)});
 document.addEventListener("visibilitychange",()=>{if(!document.hidden){renderDashboard();renderAreas();renderTopics()}});
}
document.addEventListener("DOMContentLoaded",init);
})();