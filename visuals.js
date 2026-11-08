/* StudyVisuals — esquemas interactivos para los 19 apartados del Tema 11.
   Los contenidos se basan en el PDF aportado. Cada nodo despliega una explicación.
   Gráficos ilustrativos y de memorización: NO son diagramas de certificación. */
(function(){
"use strict";
const e=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const N=(label,short,detail,tone)=>({label,short,detail,tone:tone||""});
const V={
"1-1":{mode:"categories",title:"Tres categorías, tres niveles de riesgo",subtitle:"El criterio que decide la categoría es el riesgo protegido, no el tamaño del equipo.",nodes:[
N("Categoría I","Riesgos mínimos","Lesiones superficiales, agua o limpieza débil, superficie hasta 50 °C, radiación solar ocular ordinaria y clima no extremo.","mint"),
N("Categoría II","Categoría residual","Todo riesgo que no esté enumerado en I ni en III. No es una lista cerrada de daños.","sky"),
N("Categoría III","Muerte / daño irreversible","Sustancias peligrosas, poco oxígeno, agentes biológicos, ionizantes, calor ≥100 °C, frío ≤−50 °C, altura, electricidad, ahogamiento, motosierra, presión, armas y ruido nocivo.","fire")
],challenge:["Una atmósfera con falta de oxígeno, ¿qué categoría exige?","Categoría III (articulación de riesgos del anexo I del Reglamento UE 2016/425)."],foot:"PDF pp. 7–8"},
"1-2":{mode:"steps",title:"El diseño de un EPI, paso a paso",subtitle:"No se trata solo de resistir: tiene que proteger sin impedir trabajar.",nodes:[
N("01 · Evaluar","Identificar todos los riesgos","El fabricante evalúa los riesgos que corresponden al uso previsto."),
N("02 · Proteger","Máximo nivel compatible","La protección debe ser tan elevada como sea posible sin inutilizar el equipo."),
N("03 · No dañar","Materiales y contacto seguros","Sin aristas peligrosas, sustancias perjudiciales ni molestias innecesarias."),
N("04 · Ajustar","Ergonomía y tallas","Colocación sencilla, fijación estable, movimientos y percepciones conservados."),
N("05 · Combinar","Resistir y ser compatible","Ligereza sin perder robustez y compatibilidad entre modelos que cubran zonas contiguas.")
],challenge:["¿Puede un EPI considerarse óptimo si protege mucho pero impide realizar la intervención?","No. El diseño equilibra protección elevada y posibilidad de realizar la actividad en condiciones previsibles."],foot:"PDF p. 9"},
"1-3":{mode:"grid",title:"Los cuatro pilares del expediente técnico",subtitle:"Una ficha comercial no sustituye las evidencias de conformidad.",nodes:[
N("Diseño","Descripción + planos","Finalidad, riesgos cubiertos, requisitos esenciales, planos y explicaciones del producto."),
N("Validación","Normas + ensayos","Normas aplicadas (y partes concretas), cálculos, inspecciones, exámenes e informes de ensayo."),
N("Fabricación","Control de conformidad","Medios productivos para garantizar que el EPI fabricado corresponde al diseño aprobado."),
N("Instrucciones","Uso + límites","Almacenamiento, limpieza, mantenimiento, desinfección, prestaciones, recambios, caducidad, organismos y declaración de conformidad.")
],challenge:["Si se aplica solo una parte de una norma armonizada, ¿qué debe detallarse?","Las partes de esa norma que efectivamente se aplicaron."],foot:"PDF pp. 10–11"},
"2-1":{mode:"body",title:"Ocho familias de protección",subtitle:"Recorre el cuerpo y comprueba qué elementos pertenecen a cada familia.",nodes:[
N("01 · Cabeza","Cascos y prendas","Cascos contra impacto, cascos especiales y prendas protectoras de cabeza."),
N("02 · Oído","Tapones y orejeras","Tapones, orejeras, protectores acoplables, activos o con intercomunicación."),
N("03 · Ojos y cara","Gafas y pantallas","Gafas universales, integrales, cazoletas y pantallas faciales o de soldadura."),
N("04 · Respiración","Filtrar o aislar","Filtrantes de partículas, gases y mixtos; aislantes, suministro y otros."),
N("05 · Manos y brazos","Guantes y manguitos","Frente a agresiones mecánicas, químicas, eléctricas o térmicas."),
N("06 · Pies y piernas","Calzado y polainas","Calzado de seguridad/especial, polainas, rodilleras y plantillas."),
N("07 · Piel","Cremas y pomadas","Protectores tópicos de la piel."),
N("08 · Tronco y abdomen","Chalecos y mandiles","Contra golpes, químicos, radiación X; salvavidas y sujeciones.")
],challenge:["¿En cuál de las ocho familias sitúa el manual las cremas protectoras?","En los protectores de la piel (familia 7)."],foot:"PDF pp. 12–14"},
"2-2":{mode:"categories",title:"Categorías de la intervención general",subtitle:"Pulsa cada grupo y memoriza los elementos del cuadro del temario.",nodes:[
N("Categoría I","Gafas","En la tabla de intervención general se clasifican como categoría I.","mint"),
N("Categoría II","Verdugo + botas","Tanto el capuz como el calzado figuran con categoría II.","sky"),
N("Categoría III","Casco · traje · guantes · ERA","Casco, chaquetón, cubrepantalón, guantes y equipo de respiración figuran con categoría III.","fire")
],challenge:["Según la tabla de intervención general, ¿qué categoría corresponde a las botas?","Categoría II. En el mismo cuadro el verdugo también es categoría II."],foot:"PDF pp. 14–15"},
"2-3":{mode:"helmet",title:"Explora las ocho piezas del casco",subtitle:"Selecciona los puntos numerados en el esquema y aprende su función.",nodes:[
N("1 · Casquete","Estructura rígida","Elemento duro que conforma el esqueleto fundamental del casco."),
N("2 · Cresta","Protuberancia superior","Saliente superior del casco."),
N("3 · Ala","Borde inferior","Borde saliente alrededor de la parte inferior."),
N("4 · Accesorios","Anclajes","Elementos adicionales fijados al casco, por ejemplo para sujetar herramientas."),
N("5 · Barboquejo","Sujeción bajo mentón","Cinta que asegura el casco por debajo de la barbilla."),
N("6 · Protector de cuello","Protección textil","Elemento textil homologado que protege cuello y, a veces, hombros."),
N("7 · Fijadores de máscara","Acoplamiento respiratorio","Piezas para ayudar a colocar la máscara de respiración."),
N("8 · Pantalla o visor","Ojos y cara","Protección facial sin distorsión óptica y separada para reducir empañamiento.")
],challenge:["¿Qué diferencia a los cascos tipo A y B según UNE-EN 443?","El tipo B incluye la zona 1b, que el tipo A excluye."],foot:"PDF pp. 15–17"},
"2-4":{mode:"compare",title:"Dos piezas con misiones distintas",subtitle:"Normas y categorías que suelen mezclarse en los test.",nodes:[
N("Verdugo / capuz","UNE-EN 13911:2017 · Cat. II","Bajo el casco; cubre cabeza, cuello y hombros. Tejido ignífugo; abertura de ojos y nariz.","sky"),
N("Chaquetón + cubrepantalón","UNE-EN 469:2020 · Cat. III","Se usan juntos. Contra llamas y calor radiante/convectivo; no confundir resistencia a penetración de químicos líquidos con protección NRBQ completa.","fire")
],challenge:["¿Se pueden usar por separado las dos piezas del traje según el manual?","No. Chaquetón y cubrepantalón deben usarse simultáneamente."],foot:"PDF p. 18"},
"2-5":{mode:"boots",title:"Tres escenarios, tres tipos de bota",subtitle:"Después, memoriza qué protección añade cada letra del marcado.",nodes:[
N("Tipo I","Forestal","Rescate general y fuegos de combustibles vegetales; no íntegramente caucho o polímero.","mint"),
N("Tipo II","Intervención estructural","Rescate y extinción en edificios, estructuras y vehículos; materiales descritos en el manual.","sky"),
N("Tipo III","Química","Emergencias con sustancias peligrosas para el entorno o capaces de causar la muerte.","fire")
],extra:"boots",challenge:["¿Qué significa FPA en el marcado de botas?","F (extinción) + P (perforación) + A (propiedades antiestáticas)."],foot:"PDF pp. 19–20"},
"2-6":{mode:"gloves",title:"Guantes: niveles que se preguntan",subtitle:"Relaciona la prestación, la norma y el nivel mínimo de EN 659 del temario.",nodes:[
N("Abrasión","EN 388 · Nivel 3","EN 388: 1=100, 2=500, 3=2.000 y 4=8.000 ciclos Martindale. EN 659 exige nivel 3."),
N("Corte","EN 388 · Nivel 2","Índices por cuchilla en el PDF: 1,2 / 2,5 / 5 / 10 / 20 para niveles 1–5. EN 659 exige nivel 2."),
N("Rasgado","EN 388 · Nivel 3","Niveles 1–4: 10, 25, 50 y 75 N. EN 659 exige nivel 3."),
N("Perforación","EN 388 · Nivel 3","Niveles 1–4: 20, 60, 100 y 150 N. EN 659 exige nivel 3."),
N("Inflamabilidad","EN 407 · Nivel 4","EN 659 exige el máximo nivel de inflamabilidad recogido en su tabla."),
N("Convección","EN 407 · Nivel 3","Según el PDF, transmisión del calor: 4/7/10/18 segundos para niveles 1–4."),
N("Contacto","EN 407 · Nivel 2","Temperatura que soporta 15 s: 100/250/350/500 °C en niveles 1–4."),
N("Radiación","EN 407 · Nivel 2","Según el PDF, transmisión por calor radiante: 7/20/50/95 segundos en niveles 1–4.")
],extra:"gloves",challenge:["Recita los niveles mecánicos EN 659 en orden abrasión, corte, rasgado y perforación.","3 – 2 – 3 – 3. Los térmicos son 4 – 3 – 2 – 2 (inflamabilidad, convectivo, contacto y radiante)."],foot:"PDF pp. 20–22"},
"2-7":{mode:"filters",title:"El código de colores de los filtros",subtitle:"Elige un filtro para ver el gas o contaminante. Diferencia además FFP1, FFP2 y FFP3.",nodes:[
N("P","Blanco · partículas","P1: gruesas sin toxicidad específica; P2: aerosoles peligrosos/irritantes; P3: aerosoles tóxicos.","#f8fafc"),
N("A / AX","Marrón · orgánicos","A: compuestos orgánicos con punto de ebullición >65 °C; AX: <65 °C.","#8e613b"),
N("B","Gris · inorgánicos","Gases y vapores inorgánicos.","#84939f"),
N("E","Amarillo · gases ácidos","Ejemplos del manual: SO₂ y HCl.","#e6bb22"),
N("K","Verde · amoníaco","Protección frente a amoníaco NH₃.","#5d9851"),
N("CO","Negro · monóxido de carbono","El código CO corresponde al monóxido de carbono.","#253144"),
N("Hg","Rojo · mercurio","Protección frente a vapores de mercurio.","#d94e52"),
N("NO","Azul · gas nitroso","El código NO se asocia a gas nitroso en el documento.","#437ab7"),
N("Reactor","Naranja · yodo radiactivo","Filtro identificado para yodo radiactivo.","#dd8739")
],extra:"ffp",challenge:["En la tabla del PDF, ¿qué valores FPN corresponden a FFP1/FFP2/FFP3?","4,5 / 12 / 50, respectivamente. Son los valores de esta edición del temario."],foot:"PDF pp. 22–24"},
"2-8":{mode:"tree",title:"¿De dónde viene el aire respirable?",subtitle:"La pregunta más importante es si el sistema depende del ambiente o de una fuente independiente.",nodes:[
N("Filtrantes","Aire del ambiente","El contaminante queda retenido en un filtro, pero se utiliza el aire del lugar."),
N("Semiautónomos","Fuente exterior + manguera","Botella o compresor fuera del usuario; el alcance depende de la manguera."),
N("ERA autónomos","Fuente transportada","El bombero porta el suministro. La autonomía la limita la capacidad de la fuente."),
N("Circuito abierto","Aire comprimido","El aire exhalado se expulsa; incluye variante con demanda a presión positiva."),
N("Circuito cerrado","Oxígeno / generación","Bolsa respiratoria y recirculación; se describen dos modalidades en el PDF.")
],challenge:["¿Qué diferencia principal separa un equipo semiautónomo de un ERA?","Semiautónomo: suministro por manguera desde fuera. ERA: fuente transportada por el usuario."],foot:"PDF pp. 22–27"},
"3-1":{mode:"spectrum",title:"Escala de energía de las radiaciones",subtitle:"De menos a más frecuencia y energía (longitud de onda decreciente).",nodes:[
N("Radio","Menor frecuencia","Primer extremo del espectro enumerado en el temario.","#6e9bc7"),
N("Microondas","Vibración molecular","Pueden producir vibración de moléculas.","#70bbc2"),
N("Infrarrojo","Cuerpos calientes","Radiación asociada a emisión térmica.","#e9bb73"),
N("Visible","Luz percibida","Fracción del espectro que detectan nuestros ojos.","#de965a"),
N("Ultravioleta","Rompe enlaces","La parte más energética puede ionizar la materia.","#b17aac"),
N("Rayos X","Ionizantes","Usados en diagnóstico e investigación; peligrosos a determinadas dosis.","#7d6fc0"),
N("Gamma","Alta energía","Asociados a emisiones nucleares en el material de estudio.","#b65e95")
],challenge:["¿Qué diferencia establece el texto entre riesgo nuclear y radiológico?","Nuclear: accidente en instalación; radiológico: materiales o fuentes fuera de ese contexto, como transporte o residuos."],foot:"PDF pp. 28–30"},
"3-2":{mode:"routes",title:"Tres puertas de entrada del riesgo químico",subtitle:"Los efectos pueden ser locales, respiratorios, sistémicos o cancerígenos.",nodes:[
N("Inhalación","Vía respiratoria","Entrada de gases, vapores, polvo y aerosoles por las vías respiratorias."),
N("Piel","Absorción cutánea","Sustancias capaces de atravesar la piel y ocasionar daños."),
N("Ingestión","Vía digestiva","Entrada de contaminantes por boca y tubo digestivo.")
],extra:"nrbq-risk",challenge:["¿Cómo actúan los gases asfixiantes no tóxicos descritos en el tema?","Desplazan al oxígeno, especialmente en recintos cerrados; no necesitan toxicidad química directa para asfixiar."],foot:"PDF p. 31"},
"3-3":{mode:"compare",title:"La frontera es la estanqueidad frente a gases",subtitle:"El traje NRBQ no sustituye un blindaje frente a radiación penetrante.",nodes:[
N("NRBQ · Nivel II","Sólidos y líquidos","No protege de gases. Casco B, traje impermeable, botas de hypalon/PVC, guantes de neopreno y ERA. El punto 3.4.1 lo llama EPI II.","sky"),
N("NRBQ · Nivel III","Sólidos, líquidos y gases","Traje estanco; guantes integrados, de algodón y látex; botas integradas, casco B y ERA. El punto 3.4.2 lo llama EPI III.","fire")
],extra:"nrbq-shield",challenge:["¿Un traje NRBQ nivel III detiene directamente la radiación ionizante?","No. La protección descrita es fundamentalmente contra la contaminación por partículas, no blindaje frente a radiación."],foot:"PDF pp. 32–33"},
"4-1":{mode:"articles",title:"El Real Decreto empieza delimitando qué regula",subtitle:"Los artículos 1 y 2 fijan el alcance y las exclusiones de la definición.",nodes:[
N("Artículo 1","Objeto","Elección, utilización y mantenimiento de EPI en el trabajo; marco Ley 31/1995 y RD 39/1997."),
N("Artículo 2","Definición y exclusiones","Incluye equipo llevado/sujetado con fines de protección y sus accesorios. Excluye, entre otros, ropa ordinaria, equipos de socorro/salvamento y detectores portátiles.")
],challenge:["¿Qué dice el art. 2.2.b del RD 773/1997?","Excluye de esa definición los equipos de los servicios de socorro y salvamento."],foot:"PDF pp. 34–35"},
"4-2":{mode:"steps",title:"Responsabilidades del empresario",subtitle:"La protección individual se exige si los medios colectivos u organizativos no bastan.",nodes:[
N("01 · Identificar","Puestos y riesgos","Concretar puestos, riesgos, zonas corporales y equipos correspondientes (art. 3.a)."),
N("02 · Elegir","Condiciones y mercado","Seleccionar conforme a los arts. 5 y 6 e informar sobre cada equipo (art. 3.b)."),
N("03 · Entregar","Gratis y reponer","Proporcionar EPI gratuitamente y sustituirlo cuando sea necesario (art. 3.c)."),
N("04 · Vigilar","Uso y mantenimiento","Velar por la utilización y el mantenimiento conforme al art. 7 (art. 3.d-e)."),
N("05 · Justificar","Subsidiariedad","Art. 4: emplear EPI cuando otras medidas no eviten o limiten suficientemente el riesgo.")
],challenge:["¿Debe el trabajador pagar el EPI obligatorio?","No. El art. 3.c impone entrega gratuita y reposición cuando resulte necesaria."],foot:"PDF p. 35"},
"4-3":{mode:"steps",title:"Cómo se elige un EPI",subtitle:"Diferencia el artículo 5 (condiciones) del artículo 6 (procedimiento).",nodes:[
N("1 · Evaluar","Riesgos residuales","Analizar los riesgos que no se eliminan suficientemente por otros medios."),
N("2 · Definir","Prestaciones necesarias","Establecer características según magnitud y naturaleza del riesgo."),
N("3 · Comparar","Equipos disponibles","Contrastar opciones existentes en el mercado."),
N("4 · Verificar","Conformidad con art. 5","Ajuste, protección eficaz, compatibilidad y cumplimiento legal."),
N("5 · Revisar","Cambios técnicos o de riesgo","Modificar características si cambian las condiciones o las prestaciones exigibles.")
],challenge:["¿Qué artículo obliga a revisar la selección del EPI ante cambios de riesgos o técnica?","El artículo 6.3 del RD 773/1997."],foot:"PDF pp. 35–36"},
"4-4":{mode:"compare",title:"Artículo 7 frente a artículo 8",subtitle:"Una cosa es la gestión del equipo; otra, la capacitación de quien lo usa.",nodes:[
N("Artículo 7","Uso y mantenimiento","Instrucciones del fabricante; limpieza, almacenaje, reparación; tiempo según riesgo y exposición; si se comparte, higiene.","sky"),
N("Artículo 8","Información y formación","Antes del uso, informar riesgos y situaciones de empleo; instrucciones preferentemente escritas y sesiones prácticas cuando proceda.","fire")
],challenge:["¿Quién debe organizar entrenamiento con varios EPI complejos, cuando resulte necesario?","El empresario, conforme al art. 8.3."],foot:"PDF pp. 36–37"},
"4-5":{mode:"steps",title:"Los tres deberes del trabajador",subtitle:"El artículo 9 regula participación; el 10 establece obligaciones directas.",nodes:[
N("1 · Usar","Y cuidar correctamente","Respetar la formación recibida y las instrucciones del empresario (art. 10.a)."),
N("2 · Guardar","En lugar indicado","Después de usarlo, colocar el equipo en el lugar designado (art. 10.b)."),
N("3 · Avisar","Inmediatamente","Comunicar al superior jerárquico directo defectos, anomalías o daños que reduzcan eficacia (art. 10.c).")
],challenge:["¿A quién debe avisarse de inmediato de un EPI defectuoso?","Al superior jerárquico directo (art. 10.c)."],foot:"PDF pp. 37–38"}
};
const positions=[[48,14],[49,3],[78,72],[21,54],[52,83],[82,90],[18,71],[78,39]];
const helmetSvg='<svg class="sv-helmet-svg" viewBox="0 0 440 300" role="img" aria-label="Ilustración esquemática de un casco de intervención de bombero, no a escala"><defs><linearGradient id="helm-gradient" x1="0" x2="1"><stop stop-color="#fb9b64"/><stop offset="1" stop-color="#cb4c2c"/></linearGradient></defs><path d="M101 183 Q104 74 191 55 Q277 36 329 114 L341 171 Q350 191 362 206 L346 218 L310 216 L294 264 L165 264 L152 223 L103 218 Q92 201 101 183Z" fill="url(#helm-gradient)" stroke="#89391c" stroke-width="6"/><path d="M92 213 Q216 205 357 203 L363 225 Q206 239 88 230 Z" fill="#293b4f" stroke="#162335" stroke-width="4"/><path d="M110 188 L173 178 L167 233 L99 234 Z" fill="#c8edf2" fill-opacity=".66" stroke="#547b8b" stroke-width="4"/><path d="M166 228 L166 262 L308 262 L321 224 Z" fill="#444f5e" opacity=".45"/><path d="M193 222 Q189 259 235 277 Q275 280 291 221" fill="none" stroke="#1d2c3c" stroke-width="8"/><path d="M218 61 Q232 118 227 200" stroke="#ffd0b7" stroke-width="9" fill="none" opacity=".5"/><circle cx="285" cy="153" r="16" fill="#ffb78f" stroke="#7d3b25" stroke-width="5"/><path d="M283 154 L322 172" stroke="#f4bd9b" stroke-width="5"/><path d="M159 129 L129 163" fill="none" stroke="#2a3b4e" stroke-width="8"/><circle cx="159" cy="126" r="9" fill="#26394b"/></svg>';
function extras(cfg){
 switch(cfg.extra){
  case "boots":return '<div class="sv-extra"><span class="sv-extra-label">CÓDIGOS DE MARCADO</span><div class="sv-code-grid">'+[["F","Extinción"],["FP","+ perforación"],["FA","+ antiestática"],["FPA","+ perforación y antiestática"],["FPI","+ perforación y aislamiento eléctrico"],["FIS","+ suela de alta resistencia eléctrica"],["FPIS","+ perforación y suela de alta resistencia eléctrica"]].map(x=>'<div class="sv-code"><b>'+e(x[0])+'</b><span>'+e(x[1])+'</span></div>').join("")+'</div></div>';
  case "gloves":return '<div class="sv-extra"><span class="sv-extra-label">NIVELES EN 659 SEGÚN EL PDF</span><div class="sv-performance"><div><b>EN 388 · MECÁNICOS</b><span>Abrasión / Corte / Rasgado / Perforación</span><div class="sv-perf-bars">'+[3,2,3,3].map(n=>'<i style="--level:'+n+'"><small>'+n+'</small></i>').join("")+'</div></div><div><b>EN 407 · TÉRMICOS</b><span>Inflamabilidad / Convección / Contacto / Radiación</span><div class="sv-perf-bars">'+[4,3,2,2].map(n=>'<i style="--level:'+n+'"><small>'+n+'</small></i>').join("")+'</div></div></div></div>';
  case "ffp":return '<div class="sv-extra"><span class="sv-extra-label">FACTORES DE PROTECCIÓN NOMINAL DEL MANUAL</span><div class="sv-mini-scale"><div><b>FFP1</b><strong>4,5</strong><span>toxicidad baja</span></div><div><b>FFP2</b><strong>12</strong><span>toxicidad media</span></div><div><b>FFP3</b><strong>50</strong><span>toxicidad media/alta</span></div></div><p class="sv-extra-note">Valores de esta edición del temario; comprobar la norma exigida en la convocatoria.</p></div>';
  case "nrbq-risk":return '<div class="sv-extra"><span class="sv-extra-label">CLASES DE EFECTOS QUÍMICOS</span><div class="sv-pill-row">'+["Corrosivos","Irritantes","Alérgenos","Neumoconióticos","Asfixiantes","Anestésicos/narcóticos","Cancerígenos","Tóxicos sistémicos"].map(x=>'<span class="sv-mini-pill">'+e(x)+'</span>').join("")+'</div><p class="sv-extra-note">Riesgo biológico: virus, bacterias y hongos; transmisión por aire, agua, suelo, animales y fluidos.</p></div>';
  case "nrbq-shield":return '<div class="sv-extra"><span class="sv-extra-label">BARRERAS DE PROTECCIÓN DESCRITAS</span><div class="sv-shield-grid"><div><b>NIVEL II</b><div class="sv-barrier">Sólidos <span>✓</span></div><div class="sv-barrier">Líquidos <span>✓</span></div><div class="sv-barrier no">Gases <span>✕</span></div></div><div><b>NIVEL III</b><div class="sv-barrier">Sólidos <span>✓</span></div><div class="sv-barrier">Líquidos <span>✓</span></div><div class="sv-barrier">Gases <span>✓</span></div></div></div><p class="sv-extra-note">Atención: la categoría citada para el nivel II en p. 32 difiere del cuadro general NRBQ de p. 15.</p></div>';
  default:return "";
 }
}
function nodeVisual(cfg,node,index){
 let cue="<span class=\"sv-node-index\">"+String(index+1).padStart(2,"0")+"</span>";
 if(cfg.mode==="filters")cue='<span class="sv-swatch" style="--swatch:'+e(node.tone)+'"></span>';
 if(cfg.mode==="spectrum")cue='<span class="sv-spectrum-swatch" style="--swatch:'+e(node.tone)+'"></span>';
 if(cfg.mode==="boots")cue='<span class="sv-boot-icon" aria-hidden="true"><svg viewBox="0 0 90 60"><path d="M15 6 H48 V32 Q58 42 78 42 V54 H8 V40 H15 Z" fill="currentColor" opacity=".85"/><path d="M15 6 H48 M8 54 H78" fill="none" stroke="currentColor" stroke-width="4"/></svg></span>';
 return '<button type="button" class="sv-node '+(index===0?"is-active ":"")+(node.tone==="fire"?"sv-hot ":"")+(node.tone==="mint"?"sv-cool ":"")+'" data-sv-node="'+index+'" data-sv-topic="'+e(cfg._id)+'" aria-pressed="'+(index===0?"true":"false")+'">'+cue+'<span class="sv-node-name">'+e(node.label)+'</span><span class="sv-node-short">'+e(node.short)+'</span></button>';
}
function render(topic){
 const cfg=V[topic.id];if(!cfg)return"";
 cfg._id=topic.id;
 const graph=cfg.mode==="helmet"?
 '<div class="sv-helmet-diagram">'+helmetSvg+cfg.nodes.map((node,i)=>'<button type="button" class="sv-helmet-hotspot '+(i===0?"is-active":"")+'" style="--x:'+positions[i][0]+'%;--y:'+positions[i][1]+'%" aria-label="'+e(node.label)+'" title="'+e(node.label)+'" data-sv-node="'+i+'" data-sv-topic="'+e(topic.id)+'">'+(i+1)+'</button>').join("")+'<div class="sv-diagram-caption">Esquema orientativo de componentes · selecciona cada número</div></div>':
 '<div class="sv-nodes sv-mode-'+e(cfg.mode)+'">'+cfg.nodes.map((node,i)=>nodeVisual(cfg,node,i)).join("")+'</div>';
 const first=cfg.nodes[0];
 return '<section class="sv-workbench" data-sv-workbench="'+e(topic.id)+'">'+
 '<div class="sv-head"><div class="sv-eyebrow">ESQUEMA INTERACTIVO <span class="sv-counter">· '+cfg.nodes.length+' CONCEPTOS</span></div><h3>'+e(cfg.title)+'</h3><p>'+e(cfg.subtitle)+'</p></div>'+
 '<div class="sv-controls"><span class="sv-control-hint">Selecciona un elemento para explorar</span><button type="button" data-sv-mask="'+e(topic.id)+'" class="sv-tool-btn" aria-pressed="false">◌ Ocultar etiquetas</button></div>'+
 '<div class="sv-graph">'+graph+'<div class="sv-inspector" role="status" aria-live="polite"><div class="sv-inspector-label">CONCEPTO '+String(1).padStart(2,"0")+' / '+cfg.nodes.length+'</div><h4>'+e(first.label)+'</h4><div class="sv-inspector-key">'+e(first.short)+'</div><p>'+e(first.detail)+'</p><span class="sv-inspector-page">'+e(cfg.foot)+'</span></div></div>'+
 extras(cfg)+
 '<div class="sv-recall"><div class="sv-recall-heading"><span class="sv-recall-icon">?</span><div><strong>Comprueba si lo recuerdas</strong><p>'+e(cfg.challenge[0])+'</p></div></div><button type="button" data-sv-answer="'+e(topic.id)+'" class="sv-tool-btn sv-answer-button" aria-expanded="false">Mostrar respuesta ↓</button><p class="sv-recall-answer" hidden>'+e(cfg.challenge[1])+'</p></div>'+
 '</section>';
}
function onClick(event){
 const btn=event.target.closest("button");if(!btn)return;
 if(btn.dataset.svNode!==undefined){
  const root=btn.closest("[data-sv-workbench]");const topic=root?.dataset.svWorkbench;
  const cfg=V[topic],index=Number(btn.dataset.svNode);if(!cfg||!cfg.nodes[index])return;
  root.querySelectorAll("[data-sv-node]").forEach(b=>{const current=Number(b.dataset.svNode)===index;b.classList.toggle("is-active",current);b.setAttribute("aria-pressed",String(current));});
  const node=cfg.nodes[index],panel=root.querySelector(".sv-inspector");
  panel.innerHTML='<div class="sv-inspector-label">CONCEPTO '+String(index+1).padStart(2,"0")+' / '+cfg.nodes.length+'</div><h4>'+e(node.label)+'</h4><div class="sv-inspector-key">'+e(node.short)+'</div><p>'+e(node.detail)+'</p><span class="sv-inspector-page">'+e(cfg.foot)+'</span>';
  panel.classList.remove("sv-inspector-pop");void panel.offsetWidth;panel.classList.add("sv-inspector-pop");
  return;
 }
 if(btn.dataset.svMask!==undefined){const root=btn.closest("[data-sv-workbench]");const on=root.classList.toggle("sv-masked");btn.textContent=on?"◉ Mostrar etiquetas":"◌ Ocultar etiquetas";btn.setAttribute("aria-pressed",String(on));return;}
 if(btn.dataset.svAnswer!==undefined){const root=btn.closest("[data-sv-workbench]");const answer=root.querySelector(".sv-recall-answer");answer.hidden=!answer.hidden;btn.textContent=answer.hidden?"Mostrar respuesta ↓":"Ocultar respuesta ↑";btn.setAttribute("aria-expanded",String(!answer.hidden));return;}
}
document.addEventListener("click",onClick);
window.StudyVisuals={render,topics:Object.keys(V)};
})();