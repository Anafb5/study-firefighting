/* Maquetación editorial de Tema 11. Cada apartado usa el recurso más apropiado:
 * tabla, lista, proceso, diagrama, comparativa, artículo legal o explorador.
 * La información se extrae de TOPICS (data.js); no se oculta tras resúmenes. */
(function(){
"use strict";
const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const point=(t,i)=>t.points[i]||["",""];
const heading=(name,aside="")=>'<div class="st-caption"><h3>'+esc(name)+'</h3>'+(aside?'<span>'+esc(aside)+'</span>':"")+'</div>';
const line=(h,b)=>'<div class="st-line"><h4>'+esc(h)+'</h4><p>'+esc(b)+'</p></div>';
const lines=(t,indices)=>'<div class="st-lines">'+indices.map(i=>line(...point(t,i))).join("")+'</div>';
const numbered=(t,indices)=>'<ol class="st-sequence">'+indices.map(i=>'<li>'+line(...point(t,i))+'</li>').join("")+'</ol>';
const table=(headers,rows,kind="")=>'<div class="st-table-scroll"><table class="st-table '+kind+'"><thead><tr>'+headers.map(h=>'<th>'+esc(h)+'</th>').join("")+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map(s=>'<td>'+esc(s)+'</td>').join("")+'</tr>').join("")+'</tbody></table></div>';
const dataTable=t=>t.table?table(t.table.headers,t.table.rows):"";
const explainer=(title,detail)=>'<div class="st-notice"><strong>'+esc(title)+'</strong><p>'+esc(detail)+'</p></div>';
const articleGroups=(t)=>'<div class="st-legal">'+t.points.map(p=>'<section class="st-legal-clause"><div class="st-legal-label">'+esc(p[0])+'</div><p>'+esc(p[1])+'</p></section>').join("")+'</div>';
const comparison=(items)=>'<div class="st-pair">'+items.map(x=>'<div class="st-pair-item"><div class="st-pair-marker">'+esc(x.marker)+'</div><h4>'+esc(x.title)+'</h4><p>'+esc(x.body)+'</p></div>').join("")+'</div>';
const familyNames=["Cabeza","Oído","Ojos y cara","Respiración","Manos y brazos","Pies y piernas","Piel","Tronco y abdomen"];
const familyLabels=["Casco y prendas","Tapones y orejeras","Gafas y pantallas","Filtrantes y aislantes","Guantes y manguitos","Calzado y polainas","Cremas y pomadas","Chalecos y mandiles"];
const familyIcons=["◉","◖","◉","◎","✦","▰","◈","▤"];
const helmetParts=[
["Casquete","Estructura rígida","Elemento duro que conforma el esqueleto fundamental del casco."],
["Cresta","Protección superior","Protuberancia situada en la zona superior del casco."],
["Ala","Borde perimetral","Parte inferior del casco que rodea el casquete y sobresale de él."],
["Accesorios","Soportes y anclajes","Elementos adicionales fijados al casco, por ejemplo para sujetar herramientas."],
["Barboquejo","Sujeción","Cinta o correa que mantiene el casco sujeto por debajo de la barbilla."],
["Protector de cuello","Protección complementaria","Elemento que cubre el cuello y, según el modelo, zonas próximas del hombro."],
["Fijadores de máscara","Acoplamiento","Elementos de fijación de la máscara del equipo de respiración."],
["Pantalla o visor","Protección facial","Protege el rostro y los ojos; debe evitar distorsión óptica y favorecer una separación que reduzca el empañamiento."]
];
const helmetSvg='<svg viewBox="0 0 440 300" role="img" aria-label="Esquema ilustrativo de un casco de intervención"><defs><linearGradient id="st-helmet-g" x1="0" x2="1"><stop stop-color="#fb9b64"/><stop offset="1" stop-color="#cb4c2c"/></linearGradient></defs><path d="M101 183 Q104 74 191 55 Q277 36 329 114 L341 171 Q350 191 362 206 L346 218 L310 216 L294 264 L165 264 L152 223 L103 218 Q92 201 101 183Z" fill="url(#st-helmet-g)" stroke="#89391c" stroke-width="6"/><path d="M92 213 Q216 205 357 203 L363 225 Q206 239 88 230 Z" fill="#293b4f" stroke="#162335" stroke-width="4"/><path d="M110 188 L173 178 L167 233 L99 234 Z" fill="#c8edf2" fill-opacity=".66" stroke="#547b8b" stroke-width="4"/><path d="M166 228 L166 262 L308 262 L321 224 Z" fill="#444f5e" opacity=".45"/><path d="M193 222 Q189 259 235 277 Q275 280 291 221" fill="none" stroke="#1d2c3c" stroke-width="8"/><path d="M218 61 Q232 118 227 200" stroke="#ffd0b7" stroke-width="9" fill="none" opacity=".5"/><circle cx="285" cy="153" r="16" fill="#ffb78f" stroke="#7d3b25" stroke-width="5"/><path d="M283 154 L322 172" stroke="#f4bd9b" stroke-width="5"/><path d="M159 129 L129 163" fill="none" stroke="#2a3b4e" stroke-width="8"/><circle cx="159" cy="126" r="9" fill="#26394b"/></svg>';
const helmetPositions=[[49,25],[51,11],[79,73],[27,48],[52,85],[77,88],[24,66],[31,65]];
function explorer(id,names,labels,contents,illustration=null){
 const nav=names.map((name,i)=>'<button class="st-explore-button '+(i===0?"is-active":"")+'" type="button" data-st-node="'+i+'" aria-pressed="'+(i===0?"true":"false")+'"><span class="st-explore-index">'+String(i+1).padStart(2,"0")+'</span><span class="st-explore-text"><strong>'+esc(name)+'</strong><small>'+esc(labels[i])+'</small></span><span aria-hidden="true">›</span></button>').join("");
 const panel='<aside class="st-explore-panel" aria-live="polite"><span class="st-panel-eyebrow">ELEMENTO 01 / '+names.length+'</span><h3>'+esc(names[0])+'</h3><strong>'+esc(labels[0])+'</strong><p>'+esc(contents[0])+'</p><small>Selecciona cualquier elemento para consultar su descripción.</small></aside>';
 let main=illustration||'<div class="st-explore-nav">'+nav+'</div>';
 return '<div class="st-explorer" data-st-workbench="'+esc(id)+'">'+
 '<div class="st-explore-layout">'+main+panel+'</div></div>';
}
function families(t){
 const descriptions=t.points.map(x=>x[1]);
 return heading("Las ocho familias de EPI","Punto 2.1 · selección interactiva")+
 explainer("Cómo estudiar esta clasificación","Recorre las familias y consulta directamente a la derecha sus ejemplos y aplicaciones. No hace falta abrir unos apuntes adicionales.")+
 explorer(t.id,familyNames,familyLabels,descriptions)+
 '<p class="st-source">Clasificación indicativa del punto 2.1 · PDF pp. 12–14.</p>';
}
function helmet(t){
 const hotspots=helmetParts.map((part,i)=>'<button class="st-helmet-point '+(i===0?"is-active":"")+'" style="--x:'+helmetPositions[i][0]+'%;--y:'+helmetPositions[i][1]+'%" type="button" data-st-node="'+i+'" aria-label="'+esc(part[0])+'" title="'+esc(part[0])+'" aria-pressed="'+(i===0?"true":"false")+'">'+(i+1)+'</button>').join("");
 const illustration='<div class="st-helmet-illustration">'+helmetSvg+hotspots+'<div class="st-helmet-legend">Selecciona el número de una pieza del casco</div></div>';
 return heading("Anatomía del casco","8 componentes · pulsa un número")+
 explorer(t.id,helmetParts.map(p=>p[0]),helmetParts.map(p=>p[1]),helmetParts.map(p=>p[2]),illustration)+
 heading("Prestaciones, marcado y tipos","No confundir los diferentes ensayos")+
 dataTable(t)+lines(t,[1,2,3,4,5,6]);
}
function categories(t){
 return heading("La clasificación se basa en la gravedad del riesgo")+
 '<div class="st-category-ribbon">'+[
 ["I","Riesgos mínimos","Contacto con superficies hasta 50 °C, entre otros."],
 ["II","Riesgos intermedios","Los no incluidos expresamente en I o III."],
 ["III","Daño grave o irreversible","Muerte o daño irreversible; incluye extremos de temperatura."]
 ].map(x=>'<div class="st-category"><b>'+esc(x[0])+'</b><strong>'+esc(x[1])+'</strong><span>'+esc(x[2])+'</span></div>').join("")+'</div>'+
 heading("Riesgos y definiciones que debes dominar")+
 dataTable(t)+
 heading("Detalles y excepciones")+
 lines(t,[0,1,2,3,4,5]);
}
function boots(t){
 return heading("Tipos de calzado por intervención")+
 table(["TIPO","USO","PROTECCIÓN CARACTERÍSTICA"],[
 ["I — Forestal","Rescate general e incendios vegetales",point(t,5)[1]],
 ["II — Intervención","Edificios, estructuras cerradas y vehículos",point(t,6)[1]],
 ["III — Química","Escenarios con sustancias peligrosas",point(t,7)[1]]
 ])+
 heading("Códigos de marcado: lee la secuencia como una fórmula")+
 '<div class="st-code-grid">'+[
 ["F","Requisitos de extinción"],["FP","F + perforación"],["FA","F + antiestática"],["FPA","F + perforación + antiestática"],
 ["FPI","F + perforación + aislamiento eléctrico"],["FIS","F + suela de alta resistencia eléctrica"],["FPIS","F + perforación + suela de alta resistencia eléctrica"]
 ].map(x=>'<div class="st-code"><strong>'+x[0]+'</strong><span>'+x[1]+'</span></div>').join("")+'</div>'+
 heading("Marcado, norma y riesgos") +lines(t,[0,1,2,3,4]) ;
}
function gloves(t){
 return heading("Normas UNE y campo de ensayo")+
 dataTable(t)+heading("Valores numéricos que pueden caer en el examen")+
 table(["ENSAYO / NORMA","VALORES DEL MANUAL"],[
 ["Tallas EN ISO 21420",point(t,1)[1]],["EN 388 · abrasión",point(t,2)[1]],["EN 388 · corte",point(t,3)[1]],["EN 388 · rasgado/perforación",point(t,4)[1]],["EN 407 · contacto",point(t,5)[1]],["EN 407 · convección/radiación",point(t,6)[1]],
 ["EN 659 · nivel del guante bombero",point(t,7)[1]]
 ])+
 heading("Requisitos de fabricación y estructura")+
 lines(t,[0,8]);
}
function filters(t){
 const chips=[
 ["P","Blanco","Partículas","#f5f5f1"],["A/AX","Marrón","Orgánicos","#95683d"],
 ["B","Gris","Inorgánicos","#93979c"],["E","Amarillo","Gases ácidos","#f4d04b"],
 ["K","Verde","Amoníaco","#67965c"],["CO","Negro","Monóxido de carbono","#34393f"],
 ["Hg","Rojo","Mercurio","#d9625e"],["NO","Azul","Gas nitroso","#588bc1"],
 ["Reactor","Naranja","Yodo radiactivo","#e3a457"]
 ];
 return heading("Códigos de los filtros contra gases y vapores")+
 '<div class="st-filter-legend">'+chips.map(x=>'<div class="st-filter"><span class="st-filter-strip" style="background:'+x[3]+'"></span><b>'+x[0]+'</b><strong>'+x[1]+'</strong><span>'+x[2]+'</span></div>').join("")+'</div>'+
 heading("Filtración de partículas · factores FPN del temario")+
 '<div class="st-scale">'+[["FFP1","4,5","Toxicidad baja"],["FFP2","12","Toxicidad media"],["FFP3","50","Toxicidad media/alta"]].map(x=>'<div><strong>'+x[0]+'</strong><b>'+x[1]+'</b><span>'+x[2]+'</span></div>').join("")+'</div>'+
 explainer("Importante para la oposición","Los FPN, denominaciones y colores aquí mostrados son los de la edición facilitada del PDF; compáralos con las normas exigidas en tu convocatoria.")+
 heading("Diferencias, niveles y equipos")+
 lines(t,[0,1,2,3,4,5,6,7,8])+
 dataTable(t);
}
function respiratory(t){
 return heading("Árbol conceptual del suministro respirable")+
 '<div class="st-tree"><div class="st-tree-root">PROTECCIÓN RESPIRATORIA</div><div class="st-tree-branches"><div><b>DEPENDIENTE DEL MEDIO</b><span>Filtra el aire del entorno</span><small>FFP · gases · combinados</small></div><div><b>INDEPENDIENTE DEL MEDIO</b><span>Aire respirable aislado del entorno</span><small>Semiautónomos · autónomos</small></div></div></div>'+
 heading("De dónde procede el aire")+
 dataTable(t)+heading("Composición y condiciones de utilización")+
 lines(t,[0,1,2,3,4,5,6,7]);
}
function spectrum(t){
 const names=[["Radio","#6795c7"],["Microondas","#6cb8c7"],["Infrarrojo","#daa46e"],["Visible","#e9b863"],["Ultravioleta","#9c80c7"],["Rayos X","#686eb2"],["Gamma","#b3598e"]];
 return heading("Espectro electromagnético: frecuencia y energía crecientes")+
 '<div class="st-spectrum">'+names.map(x=>'<span style="--beam:'+x[1]+'">'+x[0]+'</span>').join("")+'</div><div class="st-spectrum-legend">Menor frecuencia y energía <span>→</span> Mayor frecuencia y energía · menor longitud de onda</div>'+
 heading("Conceptos nucleares y diferencias terminológicas")+
 lines(t,[0,1,2,3,4,5,6,7]);
}
function nrbq(t){
 return heading("Diferencia clave: ¿el traje es estanco a gases?")+
 comparison([
 {marker:"NIVEL II",title:"Sólidos y líquidos",body:point(t,1)[1]+" "+point(t,2)[1]},
 {marker:"NIVEL III",title:"Sólidos, líquidos y gases",body:point(t,3)[1]+" "+point(t,4)[1]}
 ])+
 dataTable(t)+explainer(point(t,0)[0],point(t,0)[1])+
 lines(t,[5]);
}
function chemicals(t){
 return heading("Tres vías de entrada de sustancias químicas")+
 '<div class="st-route-list">'+[["01","INHALACIÓN","Vías respiratorias"],["02","ABSORCIÓN","A través de la piel"],["03","INGESTIÓN","Vía digestiva"]].map(x=>'<div><b>'+x[0]+'</b><strong>'+x[1]+'</strong><span>'+x[2]+'</span></div>').join("")+'</div>'+
 heading("Efectos sobre el organismo")+
 lines(t,[1,2,3])+
 heading("Riesgo biológico: agentes y medios de transmisión")+
 lines(t,[4,5]);
}
function pairTopic(t,groups){
 return heading("Comparación rápida")+
 comparison(groups.map(x=>({marker:x.label,title:x.title,body:x.body})))+
 heading("Explicación del temario")+
 lines(t,t.points.map((p,i)=>i));
}
function render(t){
 if(!t)return"";
 switch(t.id){
 case "1-1":return categories(t);
 case "1-2":return heading("Secuencia lógica de diseño")+numbered(t,[0,1,2,3,4,5]);
 case "1-3":return heading("Expediente técnico del fabricante","Elementos que deben justificarse")+lines(t,[0,1,2,3,4,5]);
 case "2-1":return families(t);
 case "2-2":return heading("Categorías según el cuadro de intervención general")+dataTable(t)+heading("Interpretación y particularidades")+lines(t,[0,1,2,3]);
 case "2-3":return helmet(t);
 case "2-4":return pairTopic(t,[{label:"EPI II",title:"Verdugo / capuz",body:point(t,0)[1]},{label:"EPI III",title:"Traje de intervención",body:point(t,1)[1]}])+dataTable(t);
 case "2-5":return boots(t);
 case "2-6":return gloves(t);
 case "2-7":return filters(t);
 case "2-8":return respiratory(t);
 case "3-1":return spectrum(t);
 case "3-2":return chemicals(t);
 case "3-3":return nrbq(t);
 case "4-1":return heading("Artículos 1 y 2: alcance de la norma")+articleGroups(t);
 case "4-2":return heading("Del riesgo a la entrega del equipo")+numbered(t,[0,1,2,3,4]);
 case "4-3":return heading("Artículo 5: condiciones · Artículo 6: elección")+articleGroups(t);
 case "4-4":return heading("Artículo 7: uso y conservación · Artículo 8: formación")+articleGroups(t);
 case "4-5":return heading("Participación y obligaciones del trabajador")+articleGroups(t);
 default:return lines(t,t.points.map((x,i)=>i))+dataTable(t);
 }
}
function onClick(event){
 const btn=event.target.closest("[data-st-node]");
 if(!btn)return;
 const root=btn.closest("[data-st-workbench]");
 const id=root?.dataset.stWorkbench;
 const index=Number(btn.dataset.stNode);
 const t=TOPICS.find(x=>x.id===id);
 const nodes=id==="2-1"?familyNames.map((x,i)=>[x,familyLabels[i],t.points[i]?.[1]||""]):id==="2-3"?helmetParts:null;
 if(!nodes||!nodes[index])return;
 root.querySelectorAll("[data-st-node]").forEach(x=>{
  const selected=x===btn;x.classList.toggle("is-active",selected);x.setAttribute("aria-pressed",String(selected));
 });
 const node=nodes[index];const panel=root.querySelector(".st-explore-panel");
 panel.innerHTML='<span class="st-panel-eyebrow">ELEMENTO '+String(index+1).padStart(2,"0")+' / '+nodes.length+'</span><h3>'+esc(node[0])+'</h3><strong>'+esc(node[1])+'</strong><p>'+esc(node[2])+'</p><small>Referencia del temario · PDF '+esc(t.pages)+'</small>';
}
document.addEventListener("click",onClick);
window.StudyLayouts={render,topicCount:TOPICS.length};
})();