/* Material elaborado a partir del tema 11 facilitado (edición del PDF, 44 páginas).
   Las páginas son las del documento impreso. No se ha sustituido el contenido por normativa externa. */
const SECTIONS=[
{id:"epi",n:"01",title:"Descripción y categorías de EPI",sub:"Definiciones, niveles de riesgo, requisitos y documentación",pages:"7–11"},
{id:"prendas",n:"02",title:"Prendas y protección respiratoria",sub:"Casco, capuz, traje, botas, guantes, filtros y ERA",pages:"12–27"},
{id:"nrbq",n:"03",title:"Equipos de protección NRBQ",sub:"Riesgo nuclear, radiológico, biológico y químico",pages:"28–33"},
{id:"rd",n:"04",title:"Real Decreto 773/1997",sub:"Diez artículos y obligaciones concretas",pages:"34–38"}
];
const TOPICS=[
{id:"1-1",section:"epi",number:"1.1",title:"Concepto de EPI y sus tres categorías",pages:"7–8",lead:"El Reglamento (UE) 2016/425 define qué se considera EPI y delimita tres categorías según la gravedad del riesgo protegido. Memoriza las listas y los umbrales.",points:[
["Definición: tres supuestos","a) Equipo diseñado para llevar puesto o sujetar frente a riesgos para salud o seguridad. b) Componentes intercambiables esenciales para su función protectora. c) Sistemas de conexión a estructuras, dispositivos o anclajes seguros que cumplan las condiciones del Reglamento."],
["Categoría I — riesgos mínimos","Lesiones mecánicas superficiales; productos de limpieza de acción débil o contacto prolongado con agua; superficies calientes hasta 50 °C; luz solar en ojos (no observación directa del sol); condiciones atmosféricas no extremas."],
["Categoría II — exclusión","Incluye los riesgos que NO estén enumerados en I ni en III. No es una lista de riesgos propios."],
["Categoría III — consecuencias muy graves","Riesgos que pueden causar muerte o daños irreversibles: sustancias peligrosas; falta de oxígeno; agentes biológicos nocivos; radiaciones ionizantes; calor equivalente a aire ≥100 °C; frío equivalente a aire ≤−50 °C."],
["Categoría III — otros riesgos","Caídas de altura; descargas eléctricas/trabajos en tensión; ahogamiento; cortes por sierras de cadena manuales; chorros de alta presión; heridas de bala o arma blanca; ruidos nocivos."],
["Evolución normativa que cita el tema","El RD 1407/1992 fue derogado por el RD 542/2020 y el manual toma como normativa aplicable el Reglamento (UE) 2016/425. Advierte que conserva algunas clasificaciones tradicionales por compatibilidad con bibliografía previa."]
],table:{headers:["Categoría","Criterio","Dato de examen"],rows:[["I","Riesgo mínimo","Superficie caliente: hasta 50 °C"],["II","Riesgos no incluidos en I o III","Clasificación residual"],["III","Muerte o daño irreversible","Calor ≥100 °C; frío ≤−50 °C; O₂ insuficiente, radiación, altura, electricidad…"]]},tip:"No confundas el umbral de temperatura de I (50 °C) con el de III (100 °C)."},
{id:"1-2",section:"epi",number:"1.2",title:"Requisitos esenciales de diseño",pages:"9",lead:"El fabricante debe evaluar riesgos y proporcionar el mayor nivel de protección compatible con que el trabajador pueda realizar su actividad.",points:[
["Evaluación obligatoria","El fabricante identifica los riesgos aplicables y diseña y fabrica el EPI conforme a esa evaluación. Los requisitos esenciales de salud y seguridad del Reglamento son imperativos."],
["Protección frente a funcionalidad","El nivel óptimo es el máximo posible sin que las limitaciones del EPI impidan realizar normalmente la tarea o usarlo eficazmente durante la exposición."],
["No añadir riesgos","El EPI no debe ocasionar riesgos propios ni molestias previsibles; ni sus materiales, ni sus productos de descomposición, deben afectar la salud."],
["Contacto con el usuario","No presentar superficies ásperas, aristas vivas, puntas salientes ni elementos que provoquen irritaciones o lesiones."],
["Ergonomía","Limitar interferencias con movimientos, posturas y percepciones sensoriales; facilitar colocación, permanencia y ajuste anatómico (tallas, sistemas de fijación…)."],
["Ligereza, resistencia y compatibilidad","Tan ligero como sea posible sin comprometer la eficacia; resistente a los factores ambientales previsibles. Los modelos del fabricante que protejan zonas contiguas deben ser compatibles."]
],tip:"Tríada preguntable: PROTEGER sin crear riesgo, ADAPTARSE al portador y SER COMPATIBLES entre sí."},
{id:"1-3",section:"epi",number:"1.3",title:"Documentación técnica del EPI",pages:"10–11",lead:"La documentación técnica reúne evidencias de diseño, evaluación de riesgos y conformidad, junto con instrucciones precisas para uso y mantenimiento.",points:[
["Identificación y diseño","Descripción completa del EPI y uso previsto; evaluación de riesgos; requisitos esenciales aplicables; dibujos, esquemas y explicaciones del funcionamiento."],
["Normas y ensayos","Normas armonizadas y qué partes se aplican; otras especificaciones técnicas cuando procedan; cálculos, inspecciones, exámenes e informes de ensayos que acreditan protección."],
["Producción y conformidad","Descripción de medios de fabricación que garantizan conformidad con el diseño; instrucciones e información del fabricante."],
["Instrucciones de uso","Almacenamiento, colocación, uso, limpieza, mantenimiento, revisión y desinfección; productos recomendados que no perjudican al usuario ni al equipo."],
["Información complementaria","Prestaciones verificadas; accesorios y recambios; clases y límites de protección; caducidad; embalaje; riesgo protegido; referencias legales y a normas; organismos notificados; dirección web de declaración de conformidad."],
["EPI individualizados","Si es una unidad para usuario concreto: instrucciones para fabricarlo según modelo aprobado. Si es serie adaptada a cada usuario: medidas para garantizar conformidad de cada unidad."]
],tip:"Ojo: la documentación no se limita a un folleto; incluye ensayos, control de producción y declaración de conformidad."},
{id:"2-1",section:"prendas",number:"2.1",title:"Familias de protección individual",pages:"12–14",lead:"El apartado 2.1 presenta una lista indicativa de ocho grandes familias. Reconoce sus aplicaciones y ejemplos característicos.",points:[
["1. Cabeza","Cascos de seguridad, contra choques, protección textil para cabeza y cascos especiales (incendios o químicos). Elección: choques, agentes químicos/eléctricos, proyecciones incandescentes y comodidad."],
["2. Oído","Tapones desechables o reutilizables, orejeras, cascos antirruido, protectores acoplables, dependientes del nivel y con intercomunicación."],
["3. Ojos y cara","Gafas universales, integrales, de cazoletas, pantallas faciales y pantallas de soldadura."],
["4. Vías respiratorias","Filtrantes de partículas, gases/vapores y mixtos; aislantes de aire libre o con suministro; equipos para soldadura y submarinismo."],
["5. Manos y brazos","Guantes contra agentes mecánicos, químicos, eléctricos y térmicos; manoplas, mangas y manguitos."],
["6. Pies y piernas","Calzado de seguridad, protección o trabajo, para calor/frío, electricidad o motosierra; cubrecalzado, polainas, plantillas especiales y rodilleras."],
["7. Piel","Cremas de protección y pomadas."],
["8. Tronco y abdomen","Chalecos, chaquetas y mandiles mecánicos/químicos; chalecos termógenos o salvavidas; mandiles contra rayos X; cinturones, fajas y sistemas antivibraciones."]
],tip:"Secuencia del manual: cabeza → oído → ojos/cara → respiración → manos/brazos → pies/piernas → piel → tronco/abdomen."},
{id:"2-2",section:"prendas",number:"2.2",title:"Dotación mínima y categorías de bombero",pages:"14–15",lead:"El tema enumera las piezas de intervención general y sus categorías. Es una tabla de memorización obligatoria, con matices respecto a NRBQ.",points:[
["Intervención general","Casco, verdugo, chaquetón, cubrepantalón, botas, guantes, gafas y equipo de respiración."],
["Distribución de categorías del cuadro","Casco III; verdugo II; chaquetón III; cubrepantalón III; botas II; guantes III; gafas I; respiración III."],
["Equipo NRBQ del cuadro","Traje III; guantes III; gafas III; botas III; equipo de respiración III."],
["Precaución interpretativa","La tabla general del manual para NRBQ indica III para todas las piezas; más adelante, la sección 3.4.1 llama categoría II al conjunto de nivel II. Se recogen ambas afirmaciones, sin reconciliarlas artificialmente."]
],table:{headers:["Elemento de intervención general","Categoría (según cuadro del PDF)"],rows:[["Casco","III"],["Verdugo/capuz","II"],["Chaquetón y cubrepantalón","III"],["Botas","II"],["Guantes","III"],["Gafas","I"],["Equipo respiratorio","III"]]},tip:"En este manual, casco, traje, guantes y respiración: III. Capuz y botas: II. Gafas de intervención: I.",note:"Discrepancia del PDF: el cuadro de la p. 15 clasifica piezas NRBQ como III, mientras que el apartado 3.4.1 (p. 32) llama categoría II al conjunto de nivel II."},
{id:"2-3",section:"prendas",number:"2.2.1",title:"Casco: componentes, requisitos y tipos",pages:"15–17",lead:"Protege cabeza y nuca, frecuentemente también ojos. El texto describe un composite de kevlar y fibra de vidrio, obtenido por termomoldeo.",points:[
["Ocho componentes","1 Casquete (armazón rígido); 2 Cresta (saliente superior); 3 Ala (borde inferior); 4 Accesorios; 5 Barboquejo (cinta bajo mentón); 6 Protector de cuello; 7 Fijadores de máscara; 8 Visor/pantalla."],
["Protección química y mecánica","Resistencia a choques y al ataque de ácidos, álcalis y otros agentes. Visor sin distorsión óptica y con separación para evitar empañamiento."],
["Calor radiante","Dos niveles: 7 kW/m² (sin marca) y 14 kW/m² (marca «14»)."],
["Aislamiento eléctrico","E1: aislamiento simple de la cabeza. E2: aislamiento de transmisión de corrientes al interior. E3: aislamiento en la superficie del casco. Marcado: sin indicación / E2 / E3."],
["Bajas temperaturas","−10 °C: sin estrellas; −20 °C: 2 estrellas; −30 °C: 3 estrellas; −40 °C: 4 estrellas."],
["Zonas UNE-EN 443:2009","1a: por encima de un plano poco superior a las orejas. 1b: entre el límite de 1a y parte inferior de orejas. 2: zona mínima para visor corto. 3a: zona posterior del protector de cuello. 3b: cara de nariz a labio inferior."],
["Tipos de casco","Tipo A: excluye la zona 1b; tipo B: incluye la zona 1b (protección más integral). El texto identifica al B con uso preferido en Europa."]
],table:{headers:["Ensayo/marcado","Nivel 1","Otros niveles"],rows:[["Radiación térmica","7 kW/m² (sin marca)","14 kW/m² («14»)"],["Aislamiento","E1","E2, E3"],["Frío","−10 °C (sin marca)","−20 °C (**), −30 °C (***), −40 °C (****)"],["Casco A / B","A: no cubre 1b","B: sí cubre 1b"]]},tip:"Frío: −20, −30, −40 corresponden a 2, 3 y 4 estrellas. Casco tipo B = cobertura 1b."},
{id:"2-4",section:"prendas",number:"2.2.2–3",title:"Verdugo y traje de intervención",pages:"18",lead:"El capuz complementa el casco; el traje de intervención requiere chaquetón y cubrepantalón usados al mismo tiempo.",points:[
["Verdugo o capuz","Cubre cabeza, cuello y hombros, dejando abertura para ojos y nariz. Se coloca bajo el casco; tejido ignífugo según UNE-EN 13911:2017. Categoría II en el PDF."],
["Traje de dos piezas","Chaquetón y cubrepantalón; ambos simultáneos. Protege del calor y las llamas salvo cabeza, manos y pies, protegidos por elementos específicos."],
["Norma del traje","UNE-EN 469:2020. Exige limitar propagación de llamas, calor por convección y radiación y penetración de productos químicos líquidos."],
["Otras prestaciones","Resistencia a tracción, desgarramiento, costuras, impermeabilidad y transpirabilidad parcial."],
["Lo que NO garantiza","El manual advierte que no se exige protección general frente a riesgos químicos, biológicos o radiación ionizante: para esos riesgos se emplean equipos alternativos."],
["Categoría del traje","El traje de intervención es de categoría III."]
],table:{headers:["Pieza","Norma del manual","Categoría"],rows:[["Verdugo","UNE-EN 13911:2017","II"],["Traje (chaquetón + cubrepantalón)","UNE-EN 469:2020","III"]]},tip:"No confundas resistencia a penetración de productos químicos líquidos con protección NRBQ integral."},
{id:"2-5",section:"prendas",number:"2.2.4",title:"Botas: tipos, marcado y códigos",pages:"19–20",lead:"La referencia específica de las botas es UNE-EN 15090:2012; la general de calzado de seguridad es UNE-EN ISO 20345:2012. El manual las clasifica como EPI II.",points:[
["Riesgos cubiertos","Golpes, torceduras, resbalones, calor, productos químicos y riesgos eléctricos; requieren ensayos de conformidad."],
["Marcado obligatorio","Talla y fabricante; año/trimestre de fabricación; UNE-EN 15090:2012; pictograma y código; TIPO I, II o III."],
["F y FP","F = requisitos de extinción. FP = F + resistencia a la perforación."],
["FA y FPA","FA = F + propiedades antiestáticas. FPA = F + perforación + antiestaticidad."],
["FPI, FIS y FPIS","FPI = F + perforación + aislamiento eléctrico. FIS = F + suela de alta resistencia eléctrica. FPIS = F + perforación + suela de alta resistencia eléctrica."],
["Tipo I — forestales","Rescate general e incendios de combustible vegetal; piel/cuero y otros materiales, no enteramente caucho o polímero."],
["Tipo II — intervención","Rescate y extinción en edificios, estructuras cerradas y vehículos; el temario cita fabricación «todo-cuero (vulcanizada) o todo-polímero (moldeado)»."],
["Tipo III — químicas","Emergencias con materiales que emitan sustancias peligrosas o potencialmente mortales."]
],table:{headers:["Tipo","Servicio","Recuerda"],rows:[["I","Forestal y rescate general","Combustibles vegetales"],["II","Incendio estructural y vehículos","Intervención"],["III","Sustancias peligrosas","Química"]]},tip:"La «P» en FP/FPA/FPI/FPIS indica perforación. La «A» indica antiestática; IS indica suela de alta resistencia eléctrica."},
{id:"2-6",section:"prendas",number:"2.2.5",title:"Guantes: normativa y prestaciones numéricas",pages:"20–22",lead:"Guantes de intervención: EPI III. Combinan protección mecánica (golpes/cortes) y térmica (llamas, conducción y radiación), con menor sensibilidad táctil.",points:[
["Normas que debes asociar","UNE-EN ISO 21420:2020 (tallas); UNE-EN 388:2016+A1:2018 (riesgos mecánicos); UNE-EN 407:2020 (riesgos térmicos); UNE-EN 659:2009+A1:2009 (guantes de bombero)."],
["Tallas 6 a 11","Perímetros de mano (mm): 152, 178, 203, 229, 254, 279. Longitudes de mano (mm): 160, 171, 182, 192, 204, 215. Longitudes mínimas del guante (mm): 220, 230, 240, 250, 260, 270."],
["EN 388 — abrasión","Niveles 1/2/3/4: 100 / 500 / 2.000 / 8.000 ciclos Martindale."],
["EN 388 — corte por cuchilla","Niveles 1 a 5: índices 1,2 / 2,5 / 5 / 10 / 20."],
["EN 388 — rasgado y perforación","Rasgado N1–4: 10/25/50/75 N. Perforación N1–4: 20/60/100/150 N."],
["EN 407 — contacto","Mantener 15 segundos a 100/250/350/500 °C según niveles 1/2/3/4. Protección térmica también evalúa inflamabilidad, convección, radiación y metal fundido."],
["EN 407 — transmisión de calor","Convectivo niveles 1–4: ≥4/7/10/18 s. Radiante: ≥7/20/50/95 s."],
["Requisitos del guante de bombero EN 659","EN 388: abrasión nivel 3, corte 2, rasgado 3, perforación 3. EN 407: inflamabilidad 4, convectivo 3, contacto 2, radiante 2."],
["Estructura del guante","Capa interior ligera impermeable y transpirable, dos capas resistentes al calor de aramida, refuerzos en palma, nudillos y pulgar; se citan membranas de fluoropolímeros."]
],table:{headers:["Norma","Estudia"],rows:[["UNE-EN ISO 21420","Tallas"],["UNE-EN 388","Abrasión, corte, rasgado, perforación"],["UNE-EN 407","Inflamabilidad, contacto, convección, radiación, metal fundido"],["UNE-EN 659","Niveles exigidos a guantes de bombero"]]},tip:"Mnemotecnia para EN 659: mecánica 3-2-3-3; térmica 4-3-2-2 (en el orden que enumera el PDF)."},
{id:"2-7",section:"prendas",number:"2.3.1",title:"Protección respiratoria dependiente del ambiente",pages:"22–24",lead:"Los equipos respiratorios son EPI III. Los dependientes FILTRAN el aire del entorno: partículas, gases/vapores o mezcla.",points:[
["Clasificación general del manual","1 Dependientes del medio; 2 Independientes (aislantes); 3 Equipos de autosalvamento."],
["Dependientes = filtrantes","Usan el aire ambiente, después de eliminar contaminantes con filtros. Pueden ser adaptador facial, mascarilla o filtrante ventilado."],
["FFP1","Partículas de toxicidad baja y concentraciones pequeñas. FPN 4,5 según el manual."],
["FFP2","Partículas sólidas/líquidas de toxicidad media. FPN 12 según el manual."],
["FFP3","Partículas sólidas/líquidas de toxicidad media o alta; entre otros riesgos biológicos. FPN 50 según el manual."],
["Filtros P1 / P2 / P3","P1 para partículas sólidas gruesas sin toxicidad específica; P2 aerosoles sólidos/líquidos peligrosos o irritantes; P3 aerosoles tóxicos."],
["Filtros A y AX","A: vapores orgánicos con punto de ebullición >65 °C (marrón). AX: vapores orgánicos con punto de ebullición <65 °C (marrón)."],
["Otros filtros por código","B: gases/vapores inorgánicos (gris). E: gases ácidos como SO₂ y HCl (amarillo). K: amoníaco (verde). CO: monóxido de carbono (negro). Hg: vapores de mercurio (rojo). NO: gas nitroso (azul). Reactor: yodo radiactivo (naranja). P: partículas (blanco)."],
["Filtros mixtos","Combinan retención de partículas y de gases/vapores en un mismo equipo."]
],table:{headers:["Filtro","Color citado","Protección"],rows:[["P","Blanco","Partículas"],["A / AX","Marrón","Vapores orgánicos según p. ebullición"],["B","Gris","Inorgánicos"],["E","Amarillo","Gases ácidos"],["K","Verde","Amoníaco"],["CO","Negro","Monóxido de carbono"],["Hg","Rojo","Mercurio"],["NO","Azul","Gas nitroso"],["Reactor","Naranja","Yodo radiactivo"]]},tip:"Memoriza los FPN que da el PDF: FFP1 4,5; FFP2 12; FFP3 50. Son los valores de ESTA edición del temario, no una tabla universal vigente.",note:"El documento usa cifras y denominaciones históricas de filtros y FPN: en una oposición debes contrastarlas con las bases y la edición exigida."},
{id:"2-8",section:"prendas",number:"2.3.2",title:"Equipos independientes: semiautónomos y ERA",pages:"24–27",lead:"Los aislantes no necesitan usar el aire de la atmósfera contaminada. El temario cita su uso con oxígeno inferior al 17 % o mucha contaminación.",points:[
["Características generales","Aire respirable ante contaminantes o déficit de O₂; materiales higiénicos, estanqueidad, fabricante e instrucciones identificados; ajuste que no se libera involuntariamente; buen campo visual y recambios fáciles."],
["Semiautónomo","Recibe aire desde una botella o compresor EXTERNO a través de manguera. Puede incorporar semimáscara, máscara completa o capucha. Flujo continuo equilibrado."],
["Limitaciones del semiautónomo","Movilidad condicionada por longitud de manguera; evitar enredos, golpes y alteración química; comprobar aire no contaminado, hermeticidad y formación; ante fallo se requiere salida segura."],
["Presión en semiautónomos","El manual cita insuflación por bomba manual para baja presión y por compresor con regulador para alta presión."],
["Autónomo / ERA","El propio usuario TRANSPORTA su fuente de aire. Autonomía limitada a la capacidad de la fuente. Colocación rápida; sistema de fijación estable; alarmas perceptibles y uso por personal entrenado."],
["ERA de circuito abierto","Aire comprimido (exhalación al exterior), con máscara, válvula, tráquea, dosificador, regulador, manómetro y cilindro. Variante de demanda con presión positiva y dos etapas."],
["ERA de circuito cerrado: oxígeno","Recircula sistema de oxígeno, bolsa respiratoria y válvula de sobrepresión; cilindro de O₂ en espalda o pecho; el manual indica mayor autonomía que equipos anteriores."],
["ERA de circuito cerrado: generación de oxígeno","Purifica aire exhalado en cartucho y mezcla con oxígeno antes de devolverlo al usuario; el PDF indica autonomía inferior a una hora para esta modalidad."]
],table:{headers:["Equipo","Fuente de aire","Clave"],rows:[["Dependiente","Ambiente filtrado","No aisla completamente"],["Semiautónomo","Fuente externa por manguera","Movilidad limitada"],["ERA","Fuente portada por usuario","Autonomía limitada al depósito/sistema"],["Circuito abierto","Aire comprimido","Exhalación al exterior"],["Circuito cerrado","Oxígeno o generación de O₂","Recirculación"]]},tip:"El contraste que se pregunta: SEMIAUTÓNOMO = suministro EXTERNO; AUTÓNOMO = suministro TRANSPORTADO."},
{id:"3-1",section:"nrbq",number:"3.1",title:"Riesgos nuclear y radiológico",pages:"28–30",lead:"NRBQ identifica riesgos nucleares, radiológicos, biológicos y químicos. El manual diferencia los accidentes en instalaciones nucleares de otras fuentes de radiación.",points:[
["Estructura del átomo","Núcleo con protones positivos y neutrones sin carga; corteza electrónica negativa."],
["Fisión","Separación de un núcleo inestable que libera energía y puede provocar una reacción en cadena. El texto relaciona núcleos con número atómico >83 con radiactividad natural."],
["Fusión","Unión de núcleos que forma un nuevo núcleo y libera energía. Contrasta con la división de la fisión."],
["Radionúclido","Isótopo que emite radiación de naturaleza nuclear. Las radiaciones ionizantes pueden arrancar electrones a la materia (incluidas biomoléculas)."],
["Orden del espectro citado","Radio → microondas → infrarrojo → visible → ultravioleta → rayos X → rayos gamma; de menor a mayor frecuencia/energía (y longitud de onda decreciente)."],
["Riesgo nuclear","Peligros de accidentes en instalaciones nucleares, especialmente centrales. Ejemplo didáctico: Chernóbil."],
["Riesgo radiológico","Exposición fuera de esos accidentes: uso, transporte y eliminación de materiales/residuos radiactivos, por ejemplo en ámbitos sanitarios."],
["Límite fundamental del traje","El traje NRBQ no detiene directamente la radiación penetrante; limita el contacto/contaminación con partículas radiactivas."]
],tip:"NUCLEAR = accidente en instalación. RADIOLÓGICO = fuente radiactiva en otros contextos. Protección frente a contaminación ≠ blindaje de radiación."},
{id:"3-2",section:"nrbq",number:"3.2–3.3",title:"Riesgo químico y biológico",pages:"31",lead:"Tres vías fundamentales de entrada de químicos; distingue gases que intoxican de los que desplazan al oxígeno. Los agentes biológicos pueden viajar por múltiples medios.",points:[
["Vías de entrada química","Inhalación, absorción cutánea e ingestión."],
["Agentes químicos: daños locales","Corrosivos (ácidos, bases); irritantes (cloro, amoníaco…); alérgenos."],
["Agentes químicos: daño sistémico","Neumoconióticos (lesiones pulmonares crónicas por inhalación); anestésicos/narcóticos; cancerígenos (asbesto, arsénico); tóxicos sistémicos (órganos diana)."],
["Gases asfixiantes","El manual diferencia gases tóxicos, que interfieren en procesos respiratorios, y no tóxicos, que desplazan oxígeno en lugares cerrados."],
["Riesgo biológico","Exposición a virus, bacterias y hongos potencialmente causantes de infecciones."],
["Vías de transmisión biológica","Agua, aire, suelo, animales, materias primas y fluidos corporales contaminados (sangre, orina, etc.)."]
],tip:"Químico: memoriza inhalación / piel / ingestión. No confundas asfixiante simple con tóxico."},
{id:"3-3",section:"nrbq",number:"3.4",title:"Niveles NRBQ II y III",pages:"32–33",lead:"La distinción operativa central del manual es la estanqueidad: nivel II protege de sólidos/líquidos; nivel III añade gases.",points:[
["Advertencia sobre radiación","Los trajes NRBQ aíslan del contacto con material contaminante; no bloquean por sí solos la radiación ionizante."],
["Nivel II — alcance","Protege del contacto de sólidos o líquidos, pero NO de gases. El apartado 3.4.1 lo designa EPI categoría II."],
["Nivel II — componentes","Casco tipo B; traje impermeable a líquidos y resistente a ciertos corrosivos/entrada de sólidos; botas de hypalon y PVC; guantes de neopreno; ERA."],
["Nivel III — alcance","Estanco a sólidos, líquidos Y gases. Traje resistente a acciones corrosivas. El apartado 3.4.2 lo designa EPI categoría III."],
["Nivel III — componentes","Casco tipo B; traje estanco; guantes integrados, más guantes de algodón y látex; botas integradas; ERA."],
["Punto conflictivo del PDF","En la página 15 la tabla «Equipo NRBQ» asigna categoría III a sus piezas, mientras que aquí el conjunto de nivel II se llama categoría II. Memoriza que se trata de dos pasajes distintos."]
],table:{headers:["Característica","Nivel II","Nivel III"],rows:[["Sólidos y líquidos","Sí","Sí"],["Gases","No","Sí"],["Traje","Impermeable a líquidos; barrera sólidos","Estanco a sólidos, líquidos y gases"],["Guantes","Neopreno","Integrados + algodón + látex"],["Botas","Hypalon y PVC","Integradas"],["Casco y respiración","Tipo B + ERA","Tipo B + ERA"],["Categoría (apartado 3.4)","II","III"]]},tip:"Regla clave del examen: N II = sólidos/líquidos; N III = sólidos/líquidos/gases.",note:"Discrepancia interna con la tabla de la p. 15. No la borres: la web mantiene el dato de cada pasaje."},
{id:"4-1",section:"rd",number:"Arts. 1–2",title:"Objeto, definición y exclusiones",pages:"34–35",lead:"El RD 773/1997 regula elección, utilización y mantenimiento del EPI en el trabajo, en el marco de la Ley 31/1995 y con relación al RD 39/1997.",points:[
["Artículo 1 — objeto","Disposiciones mínimas de seguridad y salud sobre elección, utilización y mantenimiento de los EPI. Se aplica también el Reglamento de los Servicios de Prevención (RD 39/1997), sin perjuicio de normas específicas."],
["Artículo 2 — definición funcional","Equipo llevado o sujetado por el trabajador para proteger contra uno o varios riesgos y sus complementos/accesorios."],
["Exclusión a","Ropa de trabajo corriente y uniformes NO específicamente protectores."],
["Exclusiones b, c y d","Equipos de socorro y salvamento; equipos de militares, policías y mantenimiento del orden; EPI de medios de transporte por carretera."],
["Exclusiones e, f y g","Material deportivo; material de autodefensa o disuasión; aparatos portátiles de detección/señalización de riesgos y molestias."]
],tip:"Pregunta de excepción muy habitual: el RD 773/1997 excluye de su definición los equipos de los servicios de socorro y salvamento (art. 2.2.b); no debes obviar esta particularidad del texto legal."},
{id:"4-2",section:"rd",number:"Arts. 3–4",title:"Obligaciones del empresario y uso del EPI",pages:"35",lead:"El empresario suministra y mantiene los EPI gratuitamente. La protección individual no sustituye a las medidas preventivas colectivas u organizativas.",points:[
["Artículo 3.a — puestos y riesgos","Precisar los puestos que requieren EPI, riesgos, zonas corporales y equipos pertinentes."],
["Artículo 3.b — elección e información","Elegir conforme a los arts. 5 y 6, conservar información pertinente y facilitar información sobre cada equipo."],
["Artículo 3.c — gratuidad","Proporcionar EPI gratuitamente y reponerlos cuando sea necesario."],
["Artículo 3.d–e — utilización/mantenimiento","Velar por uso y mantenimiento según el artículo 7."],
["Artículo 4 — subsidiariedad","Se usa EPI ante riesgos que no se hayan evitado o limitado suficientemente mediante protección colectiva o medidas organizativas. El manual remite al anexo III y a documentación del art. 23 de la LPRL."]
],tip:"Empresario: IDENTIFICAR → ELEGIR → ENTREGAR GRATIS → VIGILAR USO → GARANTIZAR MANTENIMIENTO."},
{id:"4-3",section:"rd",number:"Arts. 5–6",title:"Condiciones y elección de los EPI",pages:"35–36",lead:"Los equipos deben ofrecer protección eficaz sin molestias o riesgos adicionales y deben seleccionarse tras una evaluación adecuada.",points:[
["Artículo 5.1 — tres exigencias","Responder al lugar de trabajo; tener en cuenta anatomía, fisiología y salud; adecuarse al usuario mediante ajustes."],
["Artículo 5.2 — varios EPI simultáneos","Compatibles entre sí y eficaces frente a sus respectivos riesgos."],
["Artículo 5.3 — conformidad","Deben cumplir las disposiciones legales y reglamentarias de diseño y fabricación."],
["Artículo 6.1 — análisis previo","Evaluar riesgos no eliminables mediante otras medidas; definir características requeridas del EPI; comparar los EPI del mercado."],
["Artículo 6.2 — verificación","Comprobar la conformidad del equipo elegido con el art. 5."],
["Artículo 6.3 — revisión","Revisar características si cambian las condiciones, riesgos, técnica, protección colectiva, medidas organizativas o prestaciones del equipo."]
],tip:"Art. 5 = condiciones del producto/ajuste. Art. 6 = procedimiento de elección y revisión."},
{id:"4-4",section:"rd",number:"Arts. 7–8",title:"Utilización, mantenimiento, información y formación",pages:"36–37",lead:"El artículo 7 regula el ciclo de uso; el 8 la información y capacitación del trabajador antes de utilizar los equipos.",points:[
["Artículo 7.1 — instrucciones","Uso, almacenamiento, mantenimiento, limpieza, desinfección y reparación según el fabricante. Como regla, usos previstos."],
["Artículo 7.2 — tiempo de uso","Se fija por gravedad del riesgo; tiempo/frecuencia de exposición; condiciones del puesto; prestaciones del EPI; riesgos adicionales del propio equipo."],
["Artículo 7.3 — uso personal","En principio personal; si se comparte, prevenir problemas de salud e higiene entre usuarios."],
["Artículo 8.1 — sujetos informados","Trabajadores y sus representantes reciben información y formación sobre las medidas del RD."],
["Artículo 8.2 — información previa","Antes del uso: riesgos cubiertos, actividades que requieren protección, instrucciones preferentemente escritas, manual disponible y lenguaje comprensible."],
["Artículo 8.3 — entrenamiento","El empresario garantiza formación y organiza prácticas cuando sean necesarias, especialmente con varios EPI complejos usados juntos."]
],tip:"Art. 7: uso, conservación y duración. Art. 8: información previa, instrucciones y entrenamiento."},
{id:"4-5",section:"rd",number:"Arts. 9–10",title:"Participación y deberes del trabajador",pages:"37–38",lead:"El último artículo enumera tres deberes claros del trabajador. La consulta sigue las reglas de participación de la LPRL.",points:[
["Artículo 9 — consulta","Consulta y participación de trabajadores o representantes conforme al art. 18.2 de la Ley de Prevención de Riesgos Laborales."],
["Artículo 10.a — cuidar","Utilizar y cuidar correctamente los EPI con arreglo a su formación e instrucciones."],
["Artículo 10.b — guardar","Colocar el EPI, después de su utilización, en el lugar indicado."],
["Artículo 10.c — comunicar","Informar de inmediato al superior jerárquico directo de defectos, anomalías o daños que puedan reducir la eficacia protectora."]
],tip:"Art. 10: USAR/CUIDAR – GUARDAR – AVISAR. El aviso se dirige al superior directo y es inmediato."}
];
const CARDS=[
["epi","¿Qué tres tipos de elementos entran en la definición de EPI del Reglamento 2016/425?","Equipos portados/sujetados; componentes intercambiables esenciales; sistemas de conexión con las condiciones previstas.","p. 7"],
["epi","¿Qué riesgo de temperatura incluye la categoría I?","Contacto con superficies calientes que NO excedan 50 °C.","p. 7"],
["epi","¿Qué temperaturas extremas aparecen en la categoría III?","Calor comparable a aire ≥100 °C; frío comparable a aire ≤−50 °C.","p. 8"],
["epi","¿Qué define la categoría II?","Riesgos distintos de los enumerados en I y III: es residual.","p. 8"],
["epi","Cita cuatro riesgos de categoría III distintos de temperatura.","Por ejemplo: falta de O₂, radiación ionizante, caída de altura, electricidad, agentes biológicos, ahogamiento, ruido nocivo.","p. 8"],
["epi","¿Qué debe hacer el fabricante antes de diseñar un EPI?","Evaluar los riesgos aplicables al EPI y diseñar considerando esa evaluación.","p. 9"],
["epi","¿Los EPI para zonas contiguas deben ser compatibles?","Sí: requisito explícito de diseño cuando proceden del mismo fabricante.","p. 9"],
["epi","¿Dónde se recoge la caducidad y los límites de uso?","En las instrucciones/información del fabricante incorporadas a la documentación técnica.","pp. 10–11"],
["prendas","Categoría del casco de intervención general (según la tabla).","III.","p. 14"],
["prendas","Categoría del verdugo/capuz de intervención general.","II.","pp. 14, 18"],
["prendas","Categoría de las gafas de intervención general (según cuadro).","I.","p. 14"],
["prendas","Norma UNE para casco de bombero.","UNE-EN 443 (el texto cita UNE-EN 443:2009).","pp. 16–17"],
["prendas","Casco tipo A frente a tipo B: diferencia esencial.","El tipo A no incluye la zona 1b; el B sí la incluye.","p. 17"],
["prendas","Marcado de casco para −30 °C.","Tres estrellas (***).","p. 16"],
["prendas","¿Qué etiqueta identifica casco de 14 kW/m²?","«14». El nivel 7 kW/m² aparece sin marca.","p. 16"],
["prendas","¿Cómo se llaman las piezas 1, 2, 3, 5 del casco?","1 Casquete; 2 cresta; 3 ala; 5 barboquejo.","pp. 15–16"],
["prendas","Norma y categoría del capuz.","UNE-EN 13911:2017. Categoría II.","p. 18"],
["prendas","Norma y categoría del traje de intervención.","UNE-EN 469:2020. Categoría III.","p. 18"],
["prendas","¿Se pueden usar solo chaquetón o solo cubrepantalón?","No según el temario: deben utilizarse simultáneamente.","p. 18"],
["prendas","Norma UNE de botas de bombero y categoría.","UNE-EN 15090:2012. Categoría II.","p. 19"],
["prendas","¿Qué tipo de bota se usa para incendios forestales?","Tipo I.","p. 19"],
["prendas","¿Qué tipo de bota se usa para incendio estructural?","Tipo II.","p. 20"],
["prendas","¿Qué tipo de bota se usa ante sustancias peligrosas?","Tipo III.","p. 20"],
["prendas","¿Qué significa FP en el código de botas?","F + protección contra perforación.","p. 19"],
["prendas","¿Qué significa FPA en botas?","F + perforación + propiedades antiestáticas.","p. 19"],
["prendas","¿Qué significa FPIS en botas?","F + perforación + suela de alta resistencia eléctrica.","p. 19"],
["prendas","¿Qué norma regula las tallas de guante?","UNE-EN ISO 21420:2020.","p. 20"],
["prendas","¿Cuáles son las cuatro prestaciones mecánicas de EN 388?","Abrasión, corte, rasgado y perforación.","pp. 20–21"],
["prendas","¿Cuántos ciclos de abrasión exige nivel 4 EN 388 según el PDF?","8.000 ciclos Martindale.","p. 20"],
["prendas","Contacto térmico nivel 3, UNE-EN 407, ¿a qué temperatura durante 15 s?","350 °C.","p. 21"],
["prendas","¿Qué norma es propia de guantes de bombero?","UNE-EN 659:2009+A1:2009.","p. 22"],
["prendas","Guante bombero EN 659: niveles de abrasión, corte, rasgado, perforación.","3 – 2 – 3 – 3.","p. 22"],
["prendas","Guante bombero EN 659: inflamabilidad, convectivo, contacto, radiante.","4 – 3 – 2 – 2.","p. 22"],
["prendas","FFP1, FFP2, FFP3: FPN según el documento.","4,5 / 12 / 50, respectivamente.","p. 23"],
["prendas","Código K de filtros: ¿agente y color?","Amoníaco; verde.","p. 24"],
["prendas","Código E de filtros: ¿uso y color?","Gases ácidos (SO₂, HCl); amarillo.","p. 24"],
["prendas","Código B de filtros: ¿uso y color?","Gases/vapores inorgánicos; gris.","p. 24"],
["prendas","Código AX frente a A: ¿umbral?","AX orgánicos con p. ebullición <65 °C; A >65 °C.","p. 24"],
["prendas","Código Hg de filtros: ¿agente y color?","Vapores de mercurio; rojo.","p. 24"],
["prendas","¿De dónde obtiene aire un semiautónomo?","De fuente externa (botella o compresor), por manguera.","p. 25"],
["prendas","¿De dónde obtiene aire un ERA?","Fuente respirable que transporta el propio usuario.","p. 26"],
["prendas","¿Qué hace un ERA de circuito abierto con el aire exhalado?","Lo expulsa al exterior.","p. 26"],
["prendas","¿Qué dos variantes de circuito cerrado cita el PDF?","De oxígeno y de generación de oxígeno.","p. 27"],
["nrbq","Fisión frente a fusión.","Fisión: divide núcleos; fusión: une núcleos.","pp. 28–29"],
["nrbq","¿Qué es un radionúclido?","Isótopo que emite radiación de naturaleza nuclear.","p. 29"],
["nrbq","¿Qué diferencia riesgo nuclear de radiológico en el temario?","Nuclear: accidente en instalación. Radiológico: fuentes en uso, transporte o eliminación fuera de ese contexto.","p. 30"],
["nrbq","Vías de entrada de productos químicos.","Inhalación, absorción cutánea e ingestión.","p. 31"],
["nrbq","¿Qué es un asfixiante simple según el manual?","Gas que desplaza el oxígeno en espacios cerrados.","p. 31"],
["nrbq","¿Qué diferencia esencialmente nivel NRBQ II y III?","II: sólidos y líquidos, no gases. III: también gases.","p. 32"],
["nrbq","¿Qué materiales se citan en nivel II NRBQ?","Botas de hypalon/PVC y guantes de neopreno.","p. 32"],
["nrbq","¿Qué equipo respiratorio integra ambos niveles NRBQ?","ERA.","pp. 32–33"],
["nrbq","¿Un traje NRBQ bloquea directamente radiaciones ionizantes?","No. Limita contacto/contaminación; no es un blindaje directo.","p. 32"],
["rd","¿Qué artículo regula obligaciones generales del empresario?","Artículo 3 del RD 773/1997.","p. 35"],
["rd","¿Qué artículo contiene criterios para emplear EPI?","Artículo 4 del RD 773/1997.","p. 35"],
["rd","¿Qué artículo regula las condiciones de los EPI?","Artículo 5 del RD 773/1997.","pp. 35–36"],
["rd","¿Qué artículo establece el procedimiento de elección?","Artículo 6 del RD 773/1997.","p. 36"],
["rd","¿Qué artículo regula uso y mantenimiento?","Artículo 7 del RD 773/1997.","pp. 36–37"],
["rd","¿Qué artículo regula información y formación?","Artículo 8 del RD 773/1997.","p. 37"],
["rd","¿Qué artículo recoge consulta y participación?","Artículo 9 del RD 773/1997.","p. 37"],
["rd","¿Qué artículo determina deberes del trabajador?","Artículo 10 del RD 773/1997.","p. 38"],
["rd","¿Debe el empresario facilitar gratuitamente EPI?","Sí; artículo 3.c. También debe reponerlos cuando resulte necesario.","p. 35"],
["rd","¿Qué hacer ante defectos que reduzcan la protección del EPI?","Avisar de inmediato al superior jerárquico directo, artículo 10.c.","p. 38"],
["rd","¿Qué excluye el artículo 2.2.b del RD 773/1997?","Equipos de los servicios de socorro y salvamento.","p. 34"]
];
const MATCH_SETS=[
{title:"Normas UNE ↔ equipos",pairs:[["UNE-EN 443","Casco de bombero"],["UNE-EN 13911","Verdugo / capuz"],["UNE-EN 469","Traje de intervención"],["UNE-EN 15090","Botas de bombero"],["UNE-EN 659","Guantes de bombero"],["UNE-EN 388","Riesgos mecánicos: guantes"],["UNE-EN 407","Riesgos térmicos: guantes"],["UNE-EN ISO 21420","Tallas y requisitos generales: guantes"]]},
{title:"Filtro ↔ protección",pairs:[["P (blanco)","Partículas"],["A / AX (marrón)","Vapores orgánicos"],["B (gris)","Gases inorgánicos"],["E (amarillo)","Gases ácidos"],["K (verde)","Amoníaco"],["CO (negro)","Monóxido de carbono"],["Hg (rojo)","Vapores de mercurio"],["NO (azul)","Gas nitroso"],["Reactor (naranja)","Yodo radiactivo"]]},
{title:"Artículos RD 773/1997 ↔ contenido",pairs:[["Art. 1","Objeto"],["Art. 2","Definición y exclusiones"],["Art. 3","Obligaciones empresario"],["Art. 4","Criterios de empleo"],["Art. 5","Condiciones del equipo"],["Art. 6","Elección del equipo"],["Art. 7","Utilización y mantenimiento"],["Art. 8","Información y formación"],["Art. 9","Consulta y participación"],["Art. 10","Obligaciones trabajador"]]},
{title:"Categoría de EPI ↔ elemento (cuadro general)",pairs:[["Casco intervención","III"],["Verdugo","II"],["Traje de intervención","III"],["Botas intervención","II"],["Guantes intervención","III"],["Gafas intervención","I"],["Protección respiratoria","III"]]},
{title:"Códigos de botas ↔ requisitos",pairs:[["F","Extinción"],["FP","Extinción y perforación"],["FA","Extinción y antiestática"],["FPA","Extinción, perforación y antiestática"],["FPI","Extinción, perforación y aislamiento eléctrico"],["FIS","Extinción y suela de alta resistencia eléctrica"],["FPIS","Extinción, perforación y suela de alta resistencia eléctrica"]]}
];
