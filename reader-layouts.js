/* Presentaciones de estudio para temas técnicos 1–8.
 * Cada subapartado elige concepto, tabla, proceso y comparación según contenido. */
(function(){
"use strict";
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const h=(s,minor="")=>'<div class="st-caption"><h3>'+esc(s)+'</h3>'+(minor?'<span>'+esc(minor)+'</span>':"")+'</div>';
const line=p=>'<div class="st-line"><h4>'+esc(p[0])+'</h4><p>'+esc(p[1])+'</p></div>';
const list=a=>'<div class="st-lines">'+a.map(line).join("")+'</div>';
const table=t=>t?'<div class="st-table-scroll"><table class="st-table"><thead><tr>'+t.headers.map(x=>'<th>'+esc(x)+'</th>').join("")+'</tr></thead><tbody>'+t.rows.map(row=>'<tr>'+row.map(x=>'<td>'+esc(x)+'</td>').join("")+'</tr>').join("")+'</tbody></table></div>':"";
const process=a=>'<ol class="reader-steps">'+a.map(x=>'<li>'+line(x)+'</li>').join("")+'</ol>';
const tiles=a=>'<div class="reader-tiles">'+a.map(([k,v])=>'<div class="reader-tile"><strong>'+esc(k)+'</strong><p>'+esc(v)+'</p></div>').join("")+'</div>';
const formulas=a=>'<div class="reader-formulas">'+a.map(([k,v])=>'<div class="reader-formula"><span>'+esc(k)+'</span><strong>'+esc(v)+'</strong></div>').join("")+'</div>';
function render(t){
 if(!t)return"";
 let visual="";
 if(t.formulas?.length)visual=h("Relaciones y expresiones del apartado")+formulas(t.formulas);
 else if(t.table)visual=h("Tabla comparativa",t.tableNote||"Datos de referencia del manual")+table(t.table);
 else if(t.format==="steps")visual=h("Secuencia y procedimiento")+process(t.points);
 else if(t.format==="compare")visual=h("Diferencias que debes reconocer")+tiles(t.points.slice(0,4));
 else visual=t.points.length>4?h("Panorama de conceptos")+tiles(t.points.slice(0,Math.min(4,t.points.length))):"";
 return '<div class="reader-topic">'+visual+
 (t.format==="steps"?h("Explicación completa")+list(t.points):h("Conceptos y detalles")+list(t.points))+
 (t.tip?'<div class="st-notice"><strong>Recuerda</strong><p>'+esc(t.tip)+'</p></div>':"")+
 (t.note?'<p class="reader-note">'+esc(t.note)+'</p>':"")+'</div>';
}
window.StudyLayouts={render,topicCount:TOPICS.length};
})();