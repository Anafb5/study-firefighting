/* Maquetación editorial del estudio para los temas técnicos de lectura.
 * La elección de formato es por contenido, sin repetir las mismas fichas y la lista.
 * Se mantiene la interfaz sin dependencias externas. */
(function(){
"use strict";
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const heading=(s,note="")=>'<div class="st-caption"><h3>'+esc(s)+'</h3>'+(note?'<span>'+esc(note)+'</span>':"")+'</div>';
const item=([key,text])=>'<div class="st-line"><h4>'+esc(key)+'</h4><p>'+esc(text)+'</p></div>';
const notes=arr=>'<div class="st-lines">'+arr.map(item).join("")+'</div>';
const table=(t)=>'<div class="st-table-scroll"><table class="st-table"><thead><tr>'+t.headers.map(h=>'<th>'+esc(h)+'</th>').join("")+'</tr></thead><tbody>'+t.rows.map(row=>'<tr>'+row.map(c=>'<td>'+esc(c)+'</td>').join("")+'</tr>').join("")+'</tbody></table></div>';
const compare=(items)=>'<div class="reader-comparison">'+items.map(([key,value])=>
 '<div class="reader-comparison-row"><div class="reader-comp-label">'+esc(key)+'</div><div class="reader-comp-detail">'+esc(value)+'</div></div>').join("")+'</div>';
const timeline=items=>'<ol class="reader-steps">'+items.map(([key,desc])=>'<li><strong>'+esc(key)+'</strong><p>'+esc(desc)+'</p></li>').join("")+'</ol>';
const formulas=arr=>'<div class="reader-formulas">'+arr.map(([key,val])=>'<div class="reader-formula"><span>'+esc(key)+'</span><strong>'+esc(val)+'</strong></div>').join("")+'</div>';
function render(t){
 if(!t)return"";
 let body="";
 const diagram=(window.LegalVisuals&&t.visual)?window.LegalVisuals.render(t):"";

 if(t.table){
  body=heading("Tabla de referencia",t.tableNote||"Según el PDF aportado")+table(t.table);
 }else if(t.format==="steps"){
  body=heading("Cadena conceptual", "Secuencia de lectura, no necesariamente un protocolo operativo")+timeline(t.points);
 }else if(t.format==="compare"){
  body=heading("Conceptos para diferenciar")+compare(t.points);
 }else{
  body=heading("Conceptos y explicaciones")+notes(t.points);
 }
 if(t.formulas?.length)body=heading("Fórmulas y relaciones del apartado")+formulas(t.formulas)+body;
 const tail=t.tip?'<div class="st-notice"><strong>Idea clave</strong><p>'+esc(t.tip)+'</p></div>':"";
 return '<div class="reader-topic">'+(diagram?diagram+'<details class="legal-visual-details"><summary>Leer el contenido completo y sus matices (según el PDF)</summary><div>'+body+'</div></details>':body)+tail+(t.note?'<p class="reader-note">'+esc(t.note)+'</p>':"")+'</div>';
}
window.StudyLayouts={render,topicCount:TOPICS.length};
})();