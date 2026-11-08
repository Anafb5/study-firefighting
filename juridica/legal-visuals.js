/* Diagramas de estudio jurídicos seleccionados editorialmente.
 * Se basan en los conceptos del PDF de cada tema y no sustituyen su redacción.
 * Si un apartado no tiene visual, se mantiene el diseño convencional. */
(function(){
"use strict";
const esc=value=>String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
const base=(v,t,body)=>{
 const subtitle=v.subtitle||"Esquema de orientación; consulta el detalle del temario para memorizar la norma.";
 return '<section class="legal-diagram legal-diagram-'+esc(v.type)+'" aria-label="'+esc(v.title||t.title)+'">'+
  '<div class="legal-diagram-head"><div><span>ESQUEMA DEL TEMARIO</span><h4>'+esc(v.title||t.title)+'</h4></div>'+
  '<small>PDF · pp. '+esc(t.pages)+'</small></div>'+body+
  '<p class="legal-diagram-caption">'+esc(subtitle)+'</p></section>';
};
function fromPoints(t,keys){
 return keys.map(key=>{
  const item=t.points.find(row=>row[0]===key);
  if(!item)throw Error("Esquema jurídico sin concepto fuente: "+t.title+" · "+key);
  return {key:item[0],value:item[1]};
 });
}
function timeline(v,t){
 const steps=fromPoints(t,v.keys);
 return base(v,t,'<ol class="legal-visual-timeline">'+steps.map((s,i)=>
  '<li><div class="legal-visual-index">'+String(i+1).padStart(2,"0")+'</div>'+
  '<div class="legal-visual-timeline-text"><b>'+esc(s.key)+'</b><p>'+esc(s.value)+'</p></div></li>').join("")+'</ol>');
}
function structure(v,t){
 const groups=v.groups.map((g,i)=>{
  const items=fromPoints(t,g.keys);
  return '<div class="legal-structure-group"><div class="legal-structure-heading"><span>'+esc(g.number||String(i+1).padStart(2,"0"))+'</span>'+
    '<strong>'+esc(g.title)+'</strong></div><div class="legal-structure-items">'+items.map(x=>
    '<div><b>'+esc(x.key)+'</b><p>'+esc(x.value)+'</p></div>').join("")+'</div></div>';
 });
 return base(v,t,'<div class="legal-structure-layout">'+groups.join("")+'</div>');
}
function ranges(v,t){
 return base(v,t,'<div class="legal-range-list">'+v.ranges.map((r,i)=>
  '<div class="legal-range-row legal-range-row-'+i%4+'"><div class="legal-range-num"><small>Artículos</small><strong>'+esc(r.range)+'</strong></div>'+
  '<div class="legal-range-content"><strong>'+esc(r.title)+'</strong><p>'+esc(r.description)+'</p></div></div>').join("")+'</div>');
}
function matrix(v,t){
 const entries=fromPoints(t,v.keys);
 return base(v,t,'<div class="legal-matrix-grid">'+entries.map((s,i)=>
  '<div class="legal-matrix-cell"><div class="legal-matrix-label"><span>'+String(i+1).padStart(2,"0")+'</span><b>'+esc(s.key)+'</b></div>'+
  '<p>'+esc(s.value)+'</p></div>').join("")+'</div>');
}
function allocation(v,t){
 const total=v.pieces.reduce((n,p)=>n+p.count,0);
 if(total!==v.total||!v.pieces.length||v.pieces.some(p=>!Number.isInteger(p.count)||p.count<=0))throw Error("Reparto del Tribunal sin total exacto");
 return base(v,t,'<div class="legal-allocation-main"><span>Total de magistrados</span><strong>'+v.total+'</strong></div>'+
 '<div class="legal-allocation-track" role="img" aria-label="'+esc(v.pieces.map(x=>x.label+": "+x.count).join("; "))+'">'+
 v.pieces.map((p,i)=>'<span class="legal-allocation-segment legal-allocation-segment-'+i+'" style="width:'+(p.count*100/total)+'%"></span>').join("")+
 '</div><div class="legal-allocation-key">'+v.pieces.map((p,i)=>
 '<div><span class="legal-allocation-dot legal-allocation-segment-'+i+'"></span><b>'+esc(p.label)+'</b><strong>'+p.count+'</strong></div>').join("")+
 '</div>'+(v.footer?'<p class="legal-allocation-footer">'+esc(v.footer)+'</p>':""));
}
function routes(v,t){
 if(!Array.isArray(v.routes)||v.routes.length!==2)throw Error("Comparativa de procedimientos incompleta");
 return base(v,t,'<div class="legal-routes-grid">'+v.routes.map((r,i)=>
 '<div class="legal-route"><div class="legal-route-header"><span>'+esc(r.article)+'</span><h5>'+esc(r.title)+'</h5></div>'+
 '<ul>'+r.steps.map(step=>'<li>'+esc(step)+'</li>').join("")+'</ul></div>').join("")+'</div>'+
 (v.footer?'<p class="legal-route-footer">'+esc(v.footer)+'</p>':""));
}
function process(v,t){
 const set=(window.LEGAL_SOURCE?.order||[]).find(x=>x.name===v.orderName);
 if(!set||set.steps.length<3)throw Error("Secuencia jurídica sin ejercicio fuente: "+v.orderName);
 return base(v,t,'<ol class="legal-process-grid">'+set.steps.map((s,i)=>
 '<li><span>'+String(i+1).padStart(2,"0")+'</span><p>'+esc(s)+'</p></li>').join("")+'</ol>');
}
const methods={timeline,structure,ranges,matrix,allocation,routes,process};
function render(t){
 if(!t?.visual)return"";
 const method=methods[t.visual.type];
 if(!method)throw Error("Visualización jurídica no soportada: "+t.visual.type);
 return method(t.visual,t);
}
window.LegalVisuals={render};
})();