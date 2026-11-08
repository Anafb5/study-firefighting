/* Tema 9 · Presentación editorial con formatos específicos según concepto. */
(function() {
"use strict";
const esc=x=>String(x??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const head=(s,sub="")=>'<div class="st-caption"><h3>'+esc(s)+'</h3>'+(sub?'<span>'+esc(sub)+'</span>':"")+'</div>';
const list=pts=>'<div class="st-lines">'+pts.map(p=>'<div class="st-line"><h4>'+esc(p[0])+'</h4><p>'+esc(p[1])+'</p></div>').join("")+'</div>';
const tb=t=>t.table?'<div class="st-table-scroll"><table class="st-table"><thead><tr>'+t.table.headers.map(x=>'<th>'+esc(x)+'</th>').join("")+'</tr></thead><tbody>'+t.table.rows.map(r=>'<tr>'+r.map(v=>'<td>'+esc(v)+'</td>').join("")+'</tr>').join("")+'</tbody></table></div>':"";
const notice=(a,b)=>'<div class="st-notice"><strong>'+esc(a)+'</strong><p>'+esc(b)+'</p></div>';
const facts=rows=>'<div class="n9-facts">'+rows.map(x=>'<div class="n9-fact"><small>'+esc(x[0])+'</small><b>'+esc(x[1])+'</b><span>'+esc(x[2]||"")+'</span></div>').join("")+'</div>';
const steps=rows=>'<div class="n9-flow">'+rows.map((r,i)=>'<div class="n9-step"><span>'+String(i+1).padStart(2,"0")+'</span><strong>'+esc(r[0])+'</strong><small>'+esc(r[1])+'</small></div>').join('<div class="n9-arrow" aria-hidden="true">→</div>')+'</div>';
const compare=rows=>'<div class="st-pair">'+rows.map(r=>'<div class="st-pair-item"><div class="st-pair-marker">'+esc(r[0])+'</div><h4>'+esc(r[1])+'</h4><p>'+esc(r[2])+'</p></div>').join("")+'</div>';
const groups={
detector:[
 ["Termostático","Umbral de temperatura","Activa la alarma al alcanzarse una temperatura crítica mantenida."],
 ["Termovelocimétrico","Rapidez de aumento","Activa la alarma si la temperatura aumenta rápidamente."],
 ["Humo iónico","Cambios eléctricos","Detecta la influencia del humo sobre una corriente eléctrica."],
 ["Humo óptico","Cambios de luz","Detecta el oscurecimiento o dispersión de la luz por el humo."],
 ["Detector de gases","Composición gaseosa","Responde a sustancias gaseosas presentes en el humo."],
 ["Detector de llamas","Radiación de llama","Detecta radiación infrarroja, visible o ultravioleta."],
 ["Multisensorial","Combinación","Combina dos o más métodos de detección."]
],
hydrant:[
 ["Columna húmeda","Cuerpo visible lleno de agua","Hidrante que sobresale del suelo y mantiene el cuerpo lleno."],
 ["Columna seca","Cuerpo visible sin agua","Hidrante que sobresale del suelo pero cuyo cuerpo no queda lleno de agua."],
 ["Hidrante enterrado","Arqueta bajo tierra","Alternativa cuando falta espacio o hay tráfico; UNE-EN 14339."]
],
bie:[
 ["BIE 25","Manguera semirrígida","25 mm de diámetro interior, hasta 30 m de longitud, UNE-EN 671-1."],
 ["BIE 45","Manguera plana","45 mm de diámetro interior, hasta 20 m de longitud, UNE-EN 671-2."]
],
pump:[
 ["Bomba eléctrica","Motor eléctrico","Extrae, llena e impulsa agua usando energía eléctrica."],
 ["Bomba de gasoil","Motor diésel","Alternativa de impulsión ante fallos de energía; arranque por baterías."],
 ["Bomba jockey","Auxiliar de presión","Compensa pequeñas pérdidas de presión sin activar bombas principales."]
],
agent:[
 ["Rociadores","Agua por activación térmica","Las boquillas liberan agua al romperse el elemento termosensible."],
 ["Agua nebulizada","Gotas muy finas","Agua pura o mezclada con otros agentes, descargada mediante boquillas."],
 ["Espuma","Líquidos inflamables","Espumógeno almacenado y dosificado, aplicado mediante boquillas."],
 ["Polvo","Gas propelente","El polvo viaja a presión por tuberías, con aviso previo y retardo."],
 ["Gases","Recipientes presurizados","Control y difusores; seguridad de ocupantes, retardo y prealarma."]
]};
function picker(kind){
 const entries=groups[kind];
 return '<div class="n9-selector" data-n9-select="'+kind+'"><div class="n9-choices">'+entries.map((x,i)=>'<button class="n9-option '+(i===0?"active":"")+'" data-n9-choice="'+i+'" aria-pressed="'+(i===0?"true":"false")+'" type="button"><small>'+String(i+1).padStart(2,"0")+'</small><strong>'+esc(x[0])+'</strong><span>›</span></button>').join("")+'</div><aside class="n9-panel" aria-live="polite"><small>CONCEPTO 01 / '+entries.length+'</small><h4>'+esc(entries[0][0])+'</h4><strong>'+esc(entries[0][1])+'</strong><p>'+esc(entries[0][2])+'</p><span>Elige un elemento para consultar los detalles.</span></aside></div>';
}
function maintenance(t){return head("Comprobaciones por periodicidad")+tb(t)+head("Operaciones y requisitos")+list(t.points);}
function standards(t){return head("Umbrales y condiciones del manual")+tb(t)+head("Explicación completa")+list(t.points)+notice("Vigencia normativa","Los umbrales proceden de la edición del PDF. Verifica la norma actualmente aplicable y la convocatoria.");}
function dryColumn(t){
 const svg='<svg viewBox="0 0 250 290" role="img" aria-label="Esquema ilustrativo de columna seca en edificio"><rect x="60" y="10" width="150" height="265" rx="4" fill="#eaf1f5" stroke="#637e90" stroke-width="3"/><path d="M60 53h150M60 96h150M60 139h150M60 182h150M60 225h150" stroke="#c6d3dc" stroke-width="2"/><path d="M100 12v250" stroke="#d25d3c" stroke-width="8"/><path d="M19 250h81" stroke="#d25d3c" stroke-width="7"/><circle cx="100" cy="53" r="8" fill="#e29a70"/><circle cx="100" cy="139" r="8" fill="#e29a70"/><circle cx="100" cy="225" r="8" fill="#e29a70"/><text x="118" y="50" font-size="12" fill="#2b495a">Salida</text><text x="118" y="136" font-size="12" fill="#2b495a">Salida</text><text x="118" y="222" font-size="12" fill="#2b495a">Salida</text><rect x="5" y="236" width="32" height="27" fill="#1d374b" rx="4"/><text x="21" y="254" font-size="12" text-anchor="middle" fill="white">70</text></svg>';
 return head("De la toma de fachada a las plantas","Dibujo orientativo")+
 '<div class="n9-illustration"><div class="n9-svgbox">'+svg+'</div><div class="n9-diagram-copy"><h4>Columna seca DN 80</h4><p>Se alimenta por el exterior mediante una toma siamesa de 70 mm. Las salidas de planta tienen racores de 45 mm y sus bocas se sitúan a 0,90 m.</p><p>No debe confundirse con un hidrante de columna seca.</p></div></div>'+head("Componentes y modo de uso")+list(t.points);
}
function render(t){
 if(!t)return"";
 switch(t.id){
 case "1-1":return head("Secuencia de detección y alarma")+steps([["Combustión","Calor · humo · llama"],["Detección","Sensor automático"],["Transmisión","Conducciones"],["Central","Control y señalización"],["Aviso","Alarma o actuación"]])+head("Normas y elementos del SDA")+list(t.points);
 case "1-3":return head("Tipos de detectores","Selecciona para ver su funcionamiento")+picker("detector")+head("Normas de marcado UNE-EN 54")+tb(t)+head("Otros aspectos del manual")+list([t.points[2],t.points[3],t.points[8]]);
 case "1-4":return head("Medidas de implantación")+facts([["Recorrido máximo","25 m","Desde origen evacuación"],["Parte superior","80–120 cm","Altura del pulsador"],["Marcado CE","EN 54-11","Manual"]])+head("Otros requisitos")+list([t.points[0],t.points[4],t.points[5]]);
 case "1-5":return head("Niveles de alarma acústica")+facts([["Alarma general",">65 dB","Según manual"],["Ocupantes durmiendo",">75 dB","Según manual"],["Sobre ruido constante","+5 dB","Ruido >30 s"]])+head("Alarma visual y activación")+list(t.points.slice(2));
 case "1-6":case "1-7":case "2-3":case "2-4":case "3-3":case "3-4":case "4-3":case "6-6":return standards(t);
 case "1-8":case "2-5":case "3-5":case "4-4":case "6-7":case "7-2":return maintenance(t);
 case "2-1":return head("Explora los hidrantes")+picker("hydrant")+head("Normas y composición")+list(t.points);
 case "2-2":return head("Valores de cobertura y suministro")+facts([["Zona urbana","<100 m","Recorrido horizontal"],["Resto","<40 m","Recorrido horizontal"],["Caudal mínimo","500 L/min","Por boca"]])+head("Distancias, presiones y entorno")+tb(t)+list([t.points[3],t.points[7]]);
 case "3-1":return head("Diferencias entre BIE 25 y BIE 45")+picker("bie")+head("Ficha comparativa")+tb(t)+head("Componentes y racores")+list([t.points[0],t.points[1],t.points[4],t.points[5]]);
 case "3-2":return head("Cotas para el montaje")+facts([["Altura máxima","1,50 m","Boquilla y válvula"],["Cercanía a salida","5 m","Recorrido máximo"],["Separación BIE","50 m","Máximo"]])+head("Cobertura y longitudes")+tb(t)+head("Reglas de medición y señales")+list([t.points[2],t.points[3],t.points[6],t.points[7]]);
 case "4-1":return dryColumn(t);
 case "4-2":return head("Distancias y ensayos")+facts([["Centro de bocas","0,90 m","Sobre el suelo"],["Entre columnas","<60 m","Recorrido evacuación"],["Ensayo sin fugas","2 h","Mínimo"]])+head("Presión según altura")+tb(t)+head("Distribución de plantas")+list(t.points.slice(0,6));
 case "5-1":return head("Diferencia de funciones entre bombas")+picker("pump")+head("Comparación y funcionamiento")+list(t.points);
 case "5-2":return head("Función de la jockey")+facts([["Caudal","Pequeño","Auxiliar"],["Objetivo","Presión","Compensa pérdidas"],["Motor","Eléctrico","Habitualmente"]])+head("Qué hace y qué evita")+list(t.points);
 case "6-1":return head("Cómo se activa un rociador")+steps([["Calor","Aumento de temperatura"],["Ampolla","Dilatación térmica"],["Apertura","Se libera la boquilla"],["Descarga","Sale agua"]])+head("Instalación y función")+list(t.points);
 case "6-2":return head("Boquillas, agente y suministro")+compare([["Alimentación","Botella o depósito",t.points[1][1]],["Descarga","Agua nebulizada",t.points[2][1]]])+head("Normativa del propio documento")+notice("Actualización mencionada",t.points[5][1])+list(t.points);
 case "6-3":return head("Circuito de espuma fija")+steps([["Tanque","Espumógeno"],["Dosificador","Proporciona mezcla"],["Tuberías","Transportan"],["Boquillas","Descargan espuma"]])+head("Componentes y referencias UNE")+list(t.points);
 case "6-4":case "6-5":return head("Componentes del sistema")+list(t.points.slice(0,5))+notice("Evacuación obligatoria en el temario","Los sistemas descritos exigen seguridad o evacuación, prealarma y retardo antes de la descarga.")+head("Condiciones de uso")+list(t.points.slice(5));
 case "7-1":return head("Cadena de abastecimiento")+steps([["Fuente","Agua disponible"],["Bombeo","Impulsión"],["Red","Distribución"],["Sistema","BIE, hidrante o rociador"]])+head("Tres parámetros de diseño")+facts([["Caudal","L/min","Suministro"],["Presión","kPa/bar","Impulsión"],["Autonomía","minutos","Duración"]])+list(t.points);
 default:return head("Elementos y descripción")+list(t.points)+tb(t);
 }
}
document.addEventListener("click",event=>{
 const b=event.target.closest("button[data-n9-choice]");if(!b)return;
 const root=b.closest("[data-n9-select]");if(!root)return;
 const entries=groups[root.dataset.n9Select],i=Number(b.dataset.n9Choice);
 if(!entries||!entries[i])return;
 root.querySelectorAll("[data-n9-choice]").forEach(btn=>{const ok=btn===b;btn.classList.toggle("active",ok);btn.setAttribute("aria-pressed",String(ok));});
 const p=entries[i];
 root.querySelector(".n9-panel").innerHTML='<small>CONCEPTO '+String(i+1).padStart(2,"0")+' / '+entries.length+'</small><h4>'+esc(p[0])+'</h4><strong>'+esc(p[1])+'</strong><p>'+esc(p[2])+'</p><span>Información tomada del Tema 9</span>';
});
window.StudyLayouts={render,topicCount:TOPICS.length};
})();