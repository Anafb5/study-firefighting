/* Tema 10 · presentaciones específicas para cada tipo de información.
   Mantiene todo el detalle del PDF; no replica la misma cuadrícula 29 veces. */
(function(){
"use strict";
const e=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const h=(title,note="")=>'<div class="st-caption"><h3>'+e(title)+'</h3>'+(note?'<span>'+e(note)+'</span>':"")+'</div>';
const line=p=>'<div class="st-line"><h4>'+e(p[0])+'</h4><p>'+e(p[1])+'</p></div>';
const list=(arr)=>'<div class="st-lines">'+arr.map(line).join("")+'</div>';
const seq=arr=>'<ol class="st-sequence">'+arr.map(p=>'<li>'+line(p)+'</li>').join("")+'</ol>';
const grid=(arr)=>'<div class="t10-notegrid">'+arr.map(p=>'<div class="t10-note"><strong>'+e(p[0])+'</strong><p>'+e(p[1])+'</p></div>').join("")+'</div>';
const notice=(title,body)=>'<div class="st-notice"><strong>'+e(title)+'</strong><p>'+e(body)+'</p></div>';
const table=(headers,rows)=>'<div class="st-table-scroll"><table class="st-table"><thead><tr>'+headers.map(x=>'<th>'+e(x)+'</th>').join("")+'</tr></thead><tbody>'+rows.map(row=>'<tr>'+row.map(c=>'<td>'+e(c)+'</td>').join("")+'</tr>').join("")+'</tbody></table></div>';
const rawTable=t=>t.table?table(t.table.headers,t.table.rows):"";
const badge=(number,label,desc)=>'<div class="t10-number-card"><strong>'+e(number)+'</strong><h4>'+e(label)+'</h4><p>'+e(desc)+'</p></div>';
const facts=(metrics)=>'<div class="t10-metrics">'+metrics.map(x=>'<div class="t10-metric"><span>'+e(x[0])+'</span><strong>'+e(x[1])+'</strong><small>'+e(x[2]||"")+'</small></div>').join("")+'</div>';
const iconSVG='<svg viewBox="0 0 560 260" role="img" aria-label="Ilustración esquemática de una autobomba; no representa las medidas reales de ningún modelo"><defs><linearGradient id="t10-cabin" x1="0" x2="1"><stop stop-color="#ec6b4a"/><stop offset="1" stop-color="#b93e30"/></linearGradient></defs><path d="M48 165h286V85H48Z" fill="#cd3e30"/><path d="M58 93h263v63H58Z" fill="#e5edf1"/><path d="M326 118h72l43-47h63l31 73v67H326Z" fill="url(#t10-cabin)"/><path d="M448 81h46l22 59h-111Z" fill="#cde9f4" stroke="#23495f" stroke-width="5"/><path d="M328 138h81v55h-81Z" fill="#da6547"/><path d="M36 171h297v39H36Z" fill="#da4a37"/><path d="M45 106h280" stroke="#abbac5" stroke-width="7"/><path d="M55 158h270" stroke="#7894a6" stroke-width="6"/><path d="M55 110v58m88-56v60m90-60v60" stroke="#7291a3" stroke-width="5"/><path d="M27 199h510v25H27Z" fill="#263c4e"/><rect x="7" y="190" width="30" height="31" rx="4" fill="#efb346"/><rect x="528" y="193" width="23" height="27" rx="3" fill="#ebaf4c"/><circle cx="125" cy="219" r="37" fill="#223549" stroke="#8e9ca5" stroke-width="10"/><circle cx="125" cy="219" r="13" fill="#b9c5c9"/><circle cx="431" cy="219" r="37" fill="#223549" stroke="#8e9ca5" stroke-width="10"/><circle cx="431" cy="219" r="13" fill="#b9c5c9"/><rect x="376" y="69" width="46" height="12" rx="4" fill="#315a8b"/><rect x="388" y="58" width="24" height="13" rx="4" fill="#477eb8"/><path d="M80 82V66h212v16" stroke="#9a2d25" stroke-width="8" fill="none"/></svg>';
const hotspots=[
 {x:14,y:34,title:"Cisterna / armarios"}, {x:37,y:60,title:"Compartimentos y carrocería"},
 {x:66,y:48,title:"Cabina"}, {x:84,y:70,title:"Autobastidor y ruedas"},
 {x:6,y:86,title:"Protecciones"}
];
const legends=[
 ["Cisterna y armarios","La cisterna contiene agua u otros agentes; los armarios guardan herramientas y materiales. Sus ubicaciones varían según el modelo."],
 ["Carrocería y compartimentos","Estructura que facilita transportar y alojar los equipos de intervención."],
 ["Cabina","Aloja al conductor y a los bomberos de la dotación. El documento cita una capacidad mínima de un conductor y dos bomberos."],
 ["Autobastidor y ruedas","El chasis integra bastidor, motor, suspensiones, frenos, ruedas, dirección y sistema eléctrico."],
 ["Protecciones","Parachoques destinados, entre otros fines, a proteger el sistema de bombeo."]
];
function anatomy(t){
 const marks=hotspots.map((p,i)=>'<button class="t10-hotspot '+(i===0?"active":"")+'" type="button" data-t10-hotspot="'+i+'" style="--x:'+p.x+'%;--y:'+p.y+'%" aria-label="'+e(p.title)+'" aria-pressed="'+(i===0?"true":"false")+'">'+(i+1)+'</button>').join("");
 return h("Conoce el conjunto autobastidor-cabina","Ilustración orientativa original, no a escala")+
 '<div class="t10-explorer" data-t10-anatomy><div class="t10-illustration">'+iconSVG+marks+'</div><aside class="t10-detail"><span>ELEMENTO 01 / 05</span><h4>'+e(legends[0][0])+'</h4><p>'+e(legends[0][1])+'</p><small>Selecciona uno de los puntos del dibujo.</small></aside></div>'+
 h("Datos técnicos del manual")+list(t.points);
}
function classifyMass(t){
 return h("Clases por masa","Masa total en carga; UNE-EN 1846-1:2011")+
 facts([["Ligero (L)","3–7,5 t","MTC"],["Medio (M)","7,5–16 t","MTC"],["Superior (S)",">16 t","MTC"]])+
 h("Comparación entre la edición 2011 y la de 1998")+rawTable(t)+
 h("Conceptos necesarios")+list([t.points[0],...t.points.slice(4)]);
}
function terrain(t){
 return h("Tres categorías de paso")+ '<div class="t10-terrain">'+[
 ["1","Urbano","Carreteras practicables"],
 ["2","Rural","Carreteras y terreno no demasiado accidentado"],
 ["3","Todoterreno","Campo a través y todo tipo de carreteras"]
 ].map(a=>badge(...a)).join("")+'</div>'+h("Ejemplos del tema")+rawTable(t)+list(t.points.slice(3));
}
function acronyms(t){
 return h("Diccionario de siglas","Filtra por nombre o código")+
 '<label class="t10-search-label" for="t10-acronym-search">Buscar una sigla o su denominación</label><input type="search" id="t10-acronym-search" class="t10-search" placeholder="Ej. BUP, aviones, mando…" autocomplete="off">'+
 '<div class="t10-acronym-wrap" data-t10-acronym-table>'+rawTable(t)+'</div>'+notice("Diferencia editorial del PDF","El furgón de apeos y apuntalamientos figura como FAV en p. 11 y como FAP en p. 35. No se ha corregido silenciosamente.")+
 h("Cómo memorizar las familias")+list(t.points);
}
function pumps(t){
 return h("De la fuente de agua a la lanza")+
 '<div class="t10-process"><div><span>01</span><strong>Abastecimiento</strong><small>Cisterna · red · aspiración</small></div><b aria-hidden="true">→</b><div><span>02</span><strong>Bomba centrífuga</strong><small>Presión + caudal</small></div><b aria-hidden="true">→</b><div><span>03</span><strong>Salidas</strong><small>Lanzas de ataque</small></div></div>'+
 h("Cómo leer el código de una bomba")+
 '<div class="t10-formula"><div><b>B</b><span>Bomba contra incendios</span></div><div><b>c</b><span>Baja y alta presión</span></div><div><b>16/8</b><span>1.600 L/min a 8 bar</span></div><div><b>2/30</b><span>200 L/min a 30 bar</span></div></div>'+
 h("Valores de las tablas del documento","En BRL hay una contradicción señalada más abajo")+
 rawTable(t)+h("Detalles técnicos completos")+list(t.points);
}
function dotations(t){
 const p=t.points;
 return h("Dos dotaciones con finalidades distintas")+
 facts([["Tipo A","437 kg","Imprescindible"],["Tipo B","200 kg","Complementaria"],["ERA tipo B","2 × 30 min","Autonomía mínima"]])+
 '<div class="t10-dotation"><section><h4>Tipo A · Elementos obligatorios</h4>'+list(p.slice(1,8))+'</section><section><h4>Tipo B · Equipo complementario</h4>'+list(p.slice(8))+'</section></div>'+
 notice("Precaución al memorizar cantidades","La lista impresa repite una manguera de 70 mm y contiene una anomalía de unidad «70 m de diámetro». Comprueba el origen antes de contarla dos veces.");
}
function compareVehicles(t){
 const headers=t.table?.headers||[];
 if(headers.length!==3)return rawTable(t)+list(t.points);
 const [typeA,typeB]=headers.slice(1);
 const rows=t.table.rows,entries=[typeA,typeB];
 const opts=entries.map((name,i)=>'<button class="t10-vehicle-picker '+(i===0?"active":"")+'" type="button" data-t10-vehicle="'+i+'" aria-pressed="'+(i===0?"true":"false")+'"><span class="t10-picker-no">0'+(i+1)+'</span><svg viewBox="0 0 60 37" aria-hidden="true"><rect x="2" y="11" width="37" height="19" rx="2"/><path d="M37 18h9l8-10h4v23H37Z"/><circle cx="17" cy="31" r="5"/><circle cx="49" cy="31" r="5"/></svg><strong>'+e(name)+'</strong><small>Consultar ficha →</small></button>').join("");
 function spec(i){
  const col=i+1;
  return '<div class="t10-spec-header"><span>FICHA TÉCNICA · '+e(entries[i])+'</span><h4>'+e(entries[i])+'</h4></div><div class="t10-spec-rows">'+rows.map(row=>'<div><span>'+e(row[0])+'</span><strong>'+e(row[col])+'</strong></div>').join("")+'</div>';
 }
 return h("Selecciona un vehículo y examina su ficha","Pulsa una unidad para cambiar la información completa")+
 '<div class="t10-vehicle-explorer" data-t10-vehicles data-vehicle-a="'+e(entries[0])+'" data-vehicle-b="'+e(entries[1])+'"><div class="t10-pickers">'+opts+'</div><div class="t10-spec-panel">'+spec(0)+'</div></div>'+
 '<details class="t10-details"><summary>Comparar los dos modelos en una sola tabla <span aria-hidden="true">⌄</span></summary>'+rawTable(t)+'</details>'+
 h("Aplicación operativa y particularidades")+list(t.points);
}
function rescueExplorer(t){
 const p=t.points;const actual=p.filter(x=>/^(FSV|AMB|FEA|FER|UMJ|UMC|UIV|UIS|UTP|UPC|BUS)/.test(x[0]));
 const base=actual.length?actual:p.slice(0,5);
 const buttons=base.map((x,i)=>'<button class="t10-rescue-btn '+(i===0?"active":"")+'" type="button" data-t10-unit="'+i+'" aria-pressed="'+(i===0?"true":"false")+'"><span>'+String(i+1).padStart(2,"0")+'</span><b>'+e(x[0])+'</b><i aria-hidden="true">→</i></button>').join("");
 const panel='<div class="t10-rescue-panel"><small>FICHA OPERATIVA</small><h4>'+e(base[0][0])+'</h4><p>'+e(base[0][1])+'</p></div>';
 return h("¿Qué vehículo corresponde a cada función?")+
 '<div class="t10-rescue-explorer" data-t10-units="'+e(t.id)+'"><div class="t10-unit-buttons">'+buttons+'</div>'+panel+'</div>'+
 (p.length>base.length?h("Contexto del bloque")+list(p.filter(x=>!base.includes(x))):"");
}
function headingAndTable(t){
 return h("Cuadro de consulta para el examen")+rawTable(t)+h("Contexto y detalles")+list(t.points);
}
function height(t){
 const p=t.points;
 return h("Vehículos de elevación")+facts([["Autoescaleras","AEA · AES · AEM","Automática / semiautomática / manual"],["Autobrazos","ABA · ABE","Articulado / extensible"]])+
 h("Lista de verificación por fase")+
 '<div class="t10-stage">'+[["ANTES DEL USO",p[2]],["EN DESPLAZAMIENTO",p[3]],["DURANTE LA INTERVENCIÓN",p[4]],["DESPUÉS DE INTERVENIR",p[5]]].map(([k,v],i)=>'<div class="t10-stage-line"><div class="t10-stage-no">'+String(i+1).padStart(2,"0")+'</div><div><strong>'+e(k)+'</strong><p>'+e(v[1])+'</p></div></div>').join("")+'</div>';
}
function law(t){
 if(t.id==="5-6")return h("Valores que imprime el Tema 10")+facts([["Sangre","0,3 g/L","Gramos por litro"],["Aire espirado","0,15 mg/L","Miligramos por litro"]])+notice("No implica vigencia actual","Son las cifras y unidades de la edición aportada; revisar la normativa aplicable a la convocatoria.")+list(t.points);
 if(t.id==="5-5")return h("Responsabilidades del conductor y del titular")+
 '<div class="st-pair"><div class="st-pair-item"><div class="st-pair-marker">CONDUCTOR</div><h4>Infracciones de circulación</h4><p>'+e(t.points[1][1])+'</p></div><div class="st-pair-item"><div class="st-pair-marker">TITULAR</div><h4>Documentación y conservación</h4><p>Las infracciones relativas a documentación y estado de conservación se atribuyen al titular, según el documento.</p></div></div>'+
 h("Permiso y obligaciones")+list([t.points[0],t.points[2],t.points[3]]);
 if(t.id==="5-1")return h("Señales de prioridad · artículo 68.2")+
 '<div class="t10-signals"><div class="t10-blue-light" aria-hidden="true"></div><div><strong>V-1 · Vehículo prioritario</strong><p>El manual cita el uso simultáneo de luz y señal acústica y su excepción cuando omitir la acústica no entraña peligro.</p></div></div>'+
 h("Regulación citada y matices")+list(t.points);
 if(t.id==="5-3"||t.id==="5-4")return h("Condiciones que no se pueden olvidar")+seq(t.points.slice(0,3))+h("Alcance y límites")+list(t.points.slice(3));
 return h("Precauciones y requisitos")+list(t.points);
}
function render(t){
 if(!t)return"";
 switch(t.id){
 case "1-1":return classifyMass(t);
 case "1-2":return terrain(t);
 case "2-2":return acronyms(t);
 case "3-1":return anatomy(t);
 case "3-5":return pumps(t);
 case "3-6":return dotations(t);
 case "4-2":case "4-3":case "4-4":case "4-5":return compareVehicles(t);
 case "4-6":return headingAndTable(t);
 case "4-7":case "4-8":return rescueExplorer(t);
 case "4-9":return height(t);
 case "5-1":case "5-2":case "5-3":case "5-4":case "5-5":case "5-6":return law(t);
 default:return t.table?headingAndTable(t):h("Conceptos y explicaciones")+list(t.points);
 }
}
document.addEventListener("click",event=>{
 const btn=event.target.closest("button");if(!btn)return;
 if(btn.dataset.t10Hotspot!==undefined){
  const box=btn.closest("[data-t10-anatomy]"),i=Number(btn.dataset.t10Hotspot),item=legends[i];
  if(!box||!item)return;
  box.querySelectorAll("[data-t10-hotspot]").forEach(el=>{const x=el===btn;el.classList.toggle("active",x);el.setAttribute("aria-pressed",String(x));});
  box.querySelector(".t10-detail").innerHTML='<span>ELEMENTO '+String(i+1).padStart(2,"0")+' / 05</span><h4>'+e(item[0])+'</h4><p>'+e(item[1])+'</p><small>Esquema orientativo, no a escala.</small>';
 }
 if(btn.dataset.t10Vehicle!==undefined){
  const box=btn.closest("[data-t10-vehicles]"),i=Number(btn.dataset.t10Vehicle);
  if(!box||!Number.isInteger(i)||i<0||i>1)return;
  const article=box.closest("article.lesson"),topic=TOPICS.find(x=>"lesson-"+x.id===article?.id);
  if(!topic||!topic.table)return;
  box.querySelectorAll("[data-t10-vehicle]").forEach(b=>{const active=b===btn;b.classList.toggle("active",active);b.setAttribute("aria-pressed",String(active));});
  const label=topic.table.headers[i+1];
  box.querySelector(".t10-spec-panel").innerHTML='<div class="t10-spec-header"><span>FICHA TÉCNICA · '+e(label)+'</span><h4>'+e(label)+'</h4></div><div class="t10-spec-rows">'+topic.table.rows.map(row=>'<div><span>'+e(row[0])+'</span><strong>'+e(row[i+1])+'</strong></div>').join("")+'</div>';
 }
 if(btn.dataset.t10Unit!==undefined){
  const box=btn.closest("[data-t10-units]"),i=Number(btn.dataset.t10Unit),topic=TOPICS.find(x=>x.id===box?.dataset.t10Units);
  const list=topic?.points.filter(x=>/^(FSV|AMB|FEA|FER|UMJ|UMC|UIV|UIS|UTP|UPC|BUS)/.test(x[0]));
  const item=list?.[i];if(!box||!item)return;
  box.querySelectorAll("[data-t10-unit]").forEach(b=>{const active=b===btn;b.classList.toggle("active",active);b.setAttribute("aria-pressed",String(active));});
  box.querySelector(".t10-rescue-panel").innerHTML='<small>FICHA OPERATIVA</small><h4>'+e(item[0])+'</h4><p>'+e(item[1])+'</p>';
 }
});
document.addEventListener("input",event=>{
 if(event.target.id!=="t10-acronym-search")return;
 const box=event.target.closest(".lesson")?.querySelector("[data-t10-acronym-table]");if(!box)return;
 const term=event.target.value.trim().toLocaleLowerCase("es");
 box.querySelectorAll("tbody tr").forEach(row=>row.hidden=!!term&&!row.textContent.toLocaleLowerCase("es").includes(term));
});
window.StudyLayouts={render,topicCount:TOPICS.length};
})();