/* Tema 10 · preguntas originales de 4 respuestas, basadas en el PDF de 46 páginas. 
   Los datos legales se preguntan tal como se imprimen, NO como legislación necesariamente vigente. */
const QUESTIONS=[
 {
  "section": "clasificacion",
  "q": "¿Qué magnitud emplea UNE-EN 1846-1:2011 para clasificar los vehículos por masa?",
  "options": [
   "Masa en vacío",
   "Masa total en carga (MTC)",
   "Masa del motor",
   "Masa de la cisterna exclusivamente"
  ],
  "correct": 1,
  "why": "La clasificación por masa se basa en la MTC.",
  "page": "8",
  "difficulty": "Detalle",
  "id": "q001"
 },
 {
  "section": "clasificacion",
  "q": "Según el temario, ¿qué incluye la MTC?",
  "options": [
   "Masa del vehículo, carga normalizada, personal y pasajeros",
   "Solo motor y bastidor",
   "Únicamente cisterna y espumógeno",
   "Peso vacío y carga máxima legal"
  ],
  "correct": 0,
  "why": "La MTC es masa efectiva con carga normalizada, incluida dotación.",
  "page": "8",
  "difficulty": "Detalle",
  "id": "q002"
 },
 {
  "section": "clasificacion",
  "q": "Un vehículo de MTC de 6 toneladas es, en la tabla de 2011…",
  "options": [
   "Medio (M)",
   "Superior (S)",
   "Categoría 2",
   "Ligero (L)"
  ],
  "correct": 3,
  "why": "Entre 3 y 7,5 t corresponde a ligero.",
  "page": "8",
  "difficulty": "Detalle",
  "id": "q003"
 },
 {
  "section": "clasificacion",
  "q": "Según la tabla de 2011, la clase media abarca…",
  "options": [
   "2 a 7,5 t",
   "7,5 a 14 t",
   "7,5 a 16 t",
   "Más de 16 t"
  ],
  "correct": 2,
  "why": "El rango medio de 2011 es 7,5–16 t.",
  "page": "8",
  "difficulty": "Detalle",
  "id": "q004"
 },
 {
  "section": "clasificacion",
  "q": "¿Cuándo es «superior (S)» un vehículo según el cuadro de 2011?",
  "options": [
   "Si supera 7,5 t",
   "Si supera las 16 t de MTC",
   "Si supera 14 t exclusivamente",
   "Cuando circula campo a través"
  ],
  "correct": 1,
  "why": "Superior es MTC mayor de 16 toneladas.",
  "page": "8",
  "difficulty": "Detalle",
  "id": "q005"
 },
 {
  "section": "clasificacion",
  "q": "En la tabla antigua EN 1846-1:1998, ¿desde dónde se consideraba pesado (S)?",
  "options": [
   "Más de 14 t",
   "Más de 16 t",
   "Desde 7,5 t",
   "Desde 2 t"
  ],
  "correct": 0,
  "why": "La frontera antigua era >14 t.",
  "page": "8",
  "difficulty": "Detalle",
  "id": "q006"
 },
 {
  "section": "clasificacion",
  "q": "¿Cuál era el límite superior del vehículo medio en la edición de 1998?",
  "options": [
   "16 t",
   "7,5 t",
   "18 t",
   "14 t"
  ],
  "correct": 3,
  "why": "La tabla antigua indica 7,5–14 t.",
  "page": "8",
  "difficulty": "Detalle",
  "id": "q007"
 },
 {
  "section": "clasificacion",
  "q": "¿Cómo se llama la categoría de paso 1?",
  "options": [
   "Rural",
   "Todoterreno",
   "Urbano",
   "Nodriza"
  ],
  "correct": 2,
  "why": "Categoría 1: urbano.",
  "page": "9",
  "difficulty": "Detalle",
  "id": "q008"
 },
 {
  "section": "clasificacion",
  "q": "¿Cómo se llama la categoría de paso 2?",
  "options": [
   "Urbano",
   "Rural",
   "Todoterreno",
   "Aéreo"
  ],
  "correct": 1,
  "why": "Categoría 2: rural.",
  "page": "9",
  "difficulty": "Detalle",
  "id": "q009"
 },
 {
  "section": "clasificacion",
  "q": "¿Cómo se llama la categoría de paso 3?",
  "options": [
   "Todoterreno",
   "Urbano",
   "Rural",
   "Pesado"
  ],
  "correct": 0,
  "why": "Categoría 3: todoterreno.",
  "page": "9",
  "difficulty": "Detalle",
  "id": "q010"
 },
 {
  "section": "clasificacion",
  "q": "¿Qué vehículos están diseñados para carreteras practicables?",
  "options": [
   "Los de categoría 2 exclusivamente",
   "Los de categoría 3 exclusivamente",
   "Los de masa S",
   "Los de categoría 1"
  ],
  "correct": 3,
  "why": "Categoría 1 se define para carreteras practicables.",
  "page": "9",
  "difficulty": "Detalle",
  "id": "q011"
 },
 {
  "section": "clasificacion",
  "q": "¿Qué categoría puede circular campo a través según su diseño?",
  "options": [
   "Categoría 1",
   "Categoría 2 únicamente",
   "Categoría 3",
   "Categoría S"
  ],
  "correct": 2,
  "why": "La categoría 3 es todoterreno.",
  "page": "9",
  "difficulty": "Detalle",
  "id": "q012"
 },
 {
  "section": "clasificacion",
  "q": "Una carretera con terreno poco accidentado corresponde preferentemente a…",
  "options": [
   "Categoría 1 únicamente",
   "Categoría 2",
   "Categoría 3 únicamente",
   "Clasificación S"
  ],
  "correct": 1,
  "why": "La categoría rural contempla ese terreno.",
  "page": "9",
  "difficulty": "Detalle",
  "id": "q013"
 },
 {
  "section": "clasificacion",
  "q": "¿En cuál de las clasificaciones se distingue escalera giratoria y plataforma hidráulica?",
  "options": [
   "Según la aplicación",
   "Según la masa",
   "Según la carga normalizada",
   "Según el voltaje"
  ],
  "correct": 0,
  "why": "Ambas son vehículos de alta elevación aérea por aplicación.",
  "page": "9",
  "difficulty": "Detalle",
  "id": "q014"
 },
 {
  "section": "clasificacion",
  "q": "¿Qué medio incluye la categoría de camiones de alta elevación aérea?",
  "options": [
   "Furgón de control de daños",
   "Ambulancia",
   "Remolque de carga de aire",
   "Plataforma hidráulica"
  ],
  "correct": 3,
  "why": "La clasificación por aplicación incluye escaleras giratorias y plataformas.",
  "page": "9",
  "difficulty": "Detalle",
  "id": "q015"
 },
 {
  "section": "clasificacion",
  "q": "¿Cuántos criterios de clasificación desarrolla el punto 1?",
  "options": [
   "Dos",
   "Cuatro",
   "Tres",
   "Cinco"
  ],
  "correct": 2,
  "why": "Masa, capacidad de paso y aplicación.",
  "page": "8–9",
  "difficulty": "Detalle",
  "id": "q016"
 },
 {
  "section": "clasificacion",
  "q": "¿Es sinónimo «clase media» de «categoría de paso 2»?",
  "options": [
   "Sí, siempre",
   "No: una clasifica masa y la otra terreno",
   "Solo si es urbano",
   "Solo en nodrizas"
  ],
  "correct": 1,
  "why": "Son clasificaciones independientes.",
  "page": "8–9",
  "difficulty": "Detalle",
  "id": "q017"
 },
 {
  "section": "clasificacion",
  "q": "¿Qué denominación permanece en uso pese al cambio de «pesado» por «superior»?",
  "options": [
   "Pesado",
   "Urbano",
   "Todoterreno",
   "Automática"
  ],
  "correct": 0,
  "why": "El manual lo explica tras comparar las dos tablas.",
  "page": "8",
  "difficulty": "Detalle",
  "id": "q018"
 },
 {
  "section": "nomenclatura",
  "q": "¿Qué sigla corresponde a bomba urbana ligera?",
  "options": [
   "BUP",
   "BRL",
   "BNL",
   "BUL"
  ],
  "correct": 3,
  "why": "BUL significa bomba urbana ligera.",
  "page": "10",
  "difficulty": "Detalle",
  "id": "q019"
 },
 {
  "section": "nomenclatura",
  "q": "¿Qué sigla corresponde a bomba rural pesada?",
  "options": [
   "BRL",
   "BFP",
   "BRP",
   "BUP"
  ],
  "correct": 2,
  "why": "BRP es bomba rural pesada.",
  "page": "10",
  "difficulty": "Detalle",
  "id": "q020"
 },
 {
  "section": "nomenclatura",
  "q": "¿Qué sigla corresponde a bomba forestal ligera?",
  "options": [
   "BUL",
   "BFL",
   "BRL",
   "BNL"
  ],
  "correct": 1,
  "why": "BFL es forestal ligera.",
  "page": "10",
  "difficulty": "Detalle",
  "id": "q021"
 },
 {
  "section": "nomenclatura",
  "q": "¿Qué sigla corresponde a bomba nodriza pesada?",
  "options": [
   "BNP",
   "BUP",
   "BFP",
   "BNL"
  ],
  "correct": 0,
  "why": "BNP es nodriza pesada.",
  "page": "10",
  "difficulty": "Detalle",
  "id": "q022"
 },
 {
  "section": "nomenclatura",
  "q": "VAU designa…",
  "options": [
   "Vehículo de múltiples agentes",
   "Vehículo de apoyo urbano",
   "Vehículo anfibio universal",
   "Vehículo de agente único"
  ],
  "correct": 3,
  "why": "VAU en el cuadro de agentes específicos.",
  "page": "10",
  "difficulty": "Detalle",
  "id": "q023"
 },
 {
  "section": "nomenclatura",
  "q": "VMA designa…",
  "options": [
   "Vehículo de agente único",
   "Vehículo de mando auxiliar",
   "Vehículo de múltiples agentes",
   "Vehículo de material acuático"
  ],
  "correct": 2,
  "why": "VMA está en agentes específicos.",
  "page": "10",
  "difficulty": "Detalle",
  "id": "q024"
 },
 {
  "section": "nomenclatura",
  "q": "¿Qué es FEA?",
  "options": [
   "Furgón de escalada aérea",
   "Furgón de equipo acuático",
   "Furgón extintor auxiliar",
   "Furgón eléctrico de apoyo"
  ],
  "correct": 1,
  "why": "FEA se destina a rescate acuático.",
  "page": "10",
  "difficulty": "Detalle",
  "id": "q025"
 },
 {
  "section": "nomenclatura",
  "q": "¿Qué es FER?",
  "options": [
   "Furgón de escalada y espeleología",
   "Furgón de espuma rápida",
   "Furgón de extinción rural",
   "Furgón eléctrico de rescate"
  ],
  "correct": 0,
  "why": "FER: escalada y espeleología.",
  "page": "10",
  "difficulty": "Detalle",
  "id": "q026"
 },
 {
  "section": "nomenclatura",
  "q": "¿Cuál es la sigla de autoescalera automática?",
  "options": [
   "AES",
   "AEM",
   "ABA",
   "AEA"
  ],
  "correct": 3,
  "why": "Autoescalera automática: AEA.",
  "page": "11",
  "difficulty": "Detalle",
  "id": "q027"
 },
 {
  "section": "nomenclatura",
  "q": "¿Cuál es la sigla de autoescalera semiautomática?",
  "options": [
   "AEA",
   "AEM",
   "AES",
   "ABE"
  ],
  "correct": 2,
  "why": "AES significa autoescalera semiautomática.",
  "page": "11",
  "difficulty": "Detalle",
  "id": "q028"
 },
 {
  "section": "nomenclatura",
  "q": "¿Cuál es la sigla de autobrazo articulado?",
  "options": [
   "ABE",
   "ABA",
   "AEA",
   "AEM"
  ],
  "correct": 1,
  "why": "ABA se reserva al brazo articulado.",
  "page": "11",
  "difficulty": "Detalle",
  "id": "q029"
 },
 {
  "section": "nomenclatura",
  "q": "¿Cuál es la sigla de autobrazo extensible?",
  "options": [
   "ABE",
   "ABA",
   "AEA",
   "AES"
  ],
  "correct": 0,
  "why": "ABE es extensible.",
  "page": "11",
  "difficulty": "Detalle",
  "id": "q030"
 },
 {
  "section": "nomenclatura",
  "q": "¿Cuál corresponde a unidad de inspección y vigilancia?",
  "options": [
   "UIS",
   "UMJ",
   "UMC",
   "UIV"
  ],
  "correct": 3,
  "why": "UIV, en vehículos auxiliares.",
  "page": "11",
  "difficulty": "Detalle",
  "id": "q031"
 },
 {
  "section": "nomenclatura",
  "q": "¿Qué significa UIS?",
  "options": [
   "Unidad de inspección y vigilancia",
   "Unidad de intervención subacuática",
   "Unidad de intendencia y suministro",
   "Unidad de iluminación sanitaria"
  ],
  "correct": 2,
  "why": "UIS: intendencia y suministro.",
  "page": "11",
  "difficulty": "Detalle",
  "id": "q032"
 },
 {
  "section": "nomenclatura",
  "q": "¿Cuál es el avión de reconocimiento?",
  "options": [
   "AVE",
   "AVR",
   "HSR",
   "BSA"
  ],
  "correct": 1,
  "why": "AVR en aeronaves.",
  "page": "11",
  "difficulty": "Detalle",
  "id": "q033"
 },
 {
  "section": "nomenclatura",
  "q": "¿Cuál es el avión de extinción?",
  "options": [
   "AVE",
   "AVR",
   "HSR",
   "BEA"
  ],
  "correct": 0,
  "why": "AVE en aeronaves.",
  "page": "11",
  "difficulty": "Detalle",
  "id": "q034"
 },
 {
  "section": "nomenclatura",
  "q": "¿Cuál es la barca de salvamento?",
  "options": [
   "BEA",
   "BCE",
   "BCA",
   "BSA"
  ],
  "correct": 3,
  "why": "BSA: barca salvamento.",
  "page": "11",
  "difficulty": "Detalle",
  "id": "q035"
 },
 {
  "section": "nomenclatura",
  "q": "¿Qué sigla tiene la barca de extinción?",
  "options": [
   "BSA",
   "BCA",
   "BEA",
   "BCE"
  ],
  "correct": 2,
  "why": "BEA: barca extinción.",
  "page": "11",
  "difficulty": "Detalle",
  "id": "q036"
 },
 {
  "section": "nomenclatura",
  "q": "¿Qué sigla corresponde a traslado de mandos y jefatura?",
  "options": [
   "UMC",
   "UMJ",
   "UIV",
   "UIS"
  ],
  "correct": 1,
  "why": "UMJ: mando y jefatura.",
  "page": "11",
  "difficulty": "Detalle",
  "id": "q037"
 },
 {
  "section": "nomenclatura",
  "q": "¿Qué significa UTP?",
  "options": [
   "Unidad de transporte pesado",
   "Unidad transporte personal",
   "Unidad taller pesado",
   "Unidad transporte de peligrosos"
  ],
  "correct": 0,
  "why": "UTP es transporte pesado.",
  "page": "11",
  "difficulty": "Detalle",
  "id": "q038"
 },
 {
  "section": "nomenclatura",
  "q": "¿Qué significa TPP?",
  "options": [
   "Transporte de personal prioritario",
   "Toma de presión de bomba",
   "Taller de protección personal",
   "Trasvase de productos peligrosos"
  ],
  "correct": 3,
  "why": "TPP en vehículos especiales.",
  "page": "11",
  "difficulty": "Detalle",
  "id": "q039"
 },
 {
  "section": "nomenclatura",
  "q": "¿Qué sigla se asocia a furgón de reserva de aire?",
  "options": [
   "FAV",
   "FUV",
   "FRA",
   "FER"
  ],
  "correct": 2,
  "why": "FRA es furgón reserva de aire.",
  "page": "11",
  "difficulty": "Detalle",
  "id": "q040"
 },
 {
  "section": "nomenclatura",
  "q": "¿Cuál es un remolque no autopropulsado?",
  "options": [
   "BRL",
   "RMB",
   "VMA",
   "UMJ"
  ],
  "correct": 1,
  "why": "RMB es remolque motobomba.",
  "page": "11",
  "difficulty": "Detalle",
  "id": "q041"
 },
 {
  "section": "nomenclatura",
  "q": "¿Qué norma y disposición cita el tema como origen de la nomenclatura?",
  "options": [
   "RD 1053/1985 y Orden de 31/10/1985",
   "RD 773/1997 únicamente",
   "Ley 31/1995 únicamente",
   "UNE-EN 443"
  ],
  "correct": 0,
  "why": "El apartado 2 atribuye la nomenclatura a esas disposiciones.",
  "page": "10",
  "difficulty": "Detalle",
  "id": "q042"
 },
 {
  "section": "componentes",
  "q": "¿A qué se llama autobastidor?",
  "options": [
   "Solo cisterna",
   "Solo armarios",
   "Solo cabina",
   "Bastidor y conjunto de órganos mecánicos"
  ],
  "correct": 3,
  "why": "El chasis comprende bastidor, motor, frenos, ruedas, etc.",
  "page": "12",
  "difficulty": "Detalle",
  "id": "q043"
 },
 {
  "section": "componentes",
  "q": "¿Qué motor describe el manual en los vehículos de extinción?",
  "options": [
   "Eléctrico exclusivamente",
   "Gasolina obligatoria",
   "Diésel",
   "Hidrógeno"
  ],
  "correct": 2,
  "why": "El apartado 3.1.1 indica diésel.",
  "page": "12",
  "difficulty": "Detalle",
  "id": "q044"
 },
 {
  "section": "componentes",
  "q": "¿Qué tensión nominal indica el manual?",
  "options": [
   "12 V",
   "24 V",
   "48 V",
   "230 V"
  ],
  "correct": 1,
  "why": "El sistema eléctrico se describe a 24 voltios.",
  "page": "12",
  "difficulty": "Detalle",
  "id": "q045"
 },
 {
  "section": "componentes",
  "q": "¿Qué diámetro mínimo indica el faro orientable delantero?",
  "options": [
   "200 mm",
   "70 mm",
   "100 mm",
   "300 mm"
  ],
  "correct": 0,
  "why": "Faro orientable de al menos 200 mm.",
  "page": "12",
  "difficulty": "Detalle",
  "id": "q046"
 },
 {
  "section": "componentes",
  "q": "¿Cuántos focos indica para autobombas cisterna?",
  "options": [
   "Uno delantero",
   "Tres, todos traseros",
   "Ninguno",
   "Dos, uno delantero y otro posterior"
  ],
  "correct": 3,
  "why": "El apartado 3.1.2 describe dos focos.",
  "page": "12",
  "difficulty": "Detalle",
  "id": "q047"
 },
 {
  "section": "componentes",
  "q": "¿Qué dotación mínima de cabina indica el manual?",
  "options": [
   "Dos conductores y un bombero",
   "Un conductor solo",
   "Un conductor y dos bomberos",
   "Un mando y cinco bomberos"
  ],
  "correct": 2,
  "why": "Una cabina puede ser simple o doble, mínimo conductor + dos.",
  "page": "13",
  "difficulty": "Detalle",
  "id": "q048"
 },
 {
  "section": "componentes",
  "q": "¿Qué sistema protegen especialmente los parachoques en el documento?",
  "options": [
   "Los espejos",
   "El de bombeo",
   "El radiador exclusivamente",
   "Los neumáticos delanteros exclusivamente"
  ],
  "correct": 1,
  "why": "Se indica protección del bombeo, por lo general en zona posterior.",
  "page": "13",
  "difficulty": "Detalle",
  "id": "q049"
 },
 {
  "section": "componentes",
  "q": "¿Qué instrumento registra horas de servicio de la bomba?",
  "options": [
   "Cuenta-horas de bomba",
   "Cuentakilómetros",
   "Amperímetro",
   "Termómetro"
  ],
  "correct": 0,
  "why": "No debe confundirse con kilómetros recorridos.",
  "page": "13",
  "difficulty": "Detalle",
  "id": "q050"
 },
 {
  "section": "componentes",
  "q": "¿Cuál es boca usual de llenado de cisterna?",
  "options": [
   "45 mm",
   "25 mm",
   "100 mm",
   "70 mm"
  ],
  "correct": 3,
  "why": "El PDF indica entrada de llenado generalmente 70 mm.",
  "page": "14",
  "difficulty": "Detalle",
  "id": "q051"
 },
 {
  "section": "componentes",
  "q": "¿Cuál es la boca de aspiración citada?",
  "options": [
   "25 mm",
   "45 mm",
   "100 mm",
   "70 mm"
  ],
  "correct": 2,
  "why": "Se indica 100 mm en la aspiración.",
  "page": "14",
  "difficulty": "Detalle",
  "id": "q052"
 },
 {
  "section": "componentes",
  "q": "¿Cuál es una condición de la cisterna?",
  "options": [
   "Debe ser de aluminio exclusivamente",
   "Resistente a corrosión y compatible con agente",
   "Debe ser desmontable",
   "Debe ser necesariamente de 200 L"
  ],
  "correct": 1,
  "why": "El material no debe alterar las propiedades del extintor.",
  "page": "14",
  "difficulty": "Detalle",
  "id": "q053"
 },
 {
  "section": "componentes",
  "q": "¿Qué tipo de bomba se utiliza según el texto?",
  "options": [
   "Centrífuga",
   "De tornillo exclusivamente",
   "De pistón únicamente",
   "Peristáltica"
  ],
  "correct": 0,
  "why": "El apartado 3.5.2 habla de bomba centrífuga.",
  "page": "14",
  "difficulty": "Detalle",
  "id": "q054"
 },
 {
  "section": "componentes",
  "q": "¿Hasta qué profundidad se cita capacidad de aspiración?",
  "options": [
   "5 m",
   "10 m",
   "12 m",
   "7,5 m"
  ],
  "correct": 3,
  "why": "UNE 23900:1983 según el PDF.",
  "page": "14",
  "difficulty": "Detalle",
  "id": "q055"
 },
 {
  "section": "componentes",
  "q": "En el marcado de bomba, «b» indica…",
  "options": [
   "Alta presión exclusivamente",
   "Presión combinada",
   "Solo baja presión",
   "Tipo barca"
  ],
  "correct": 2,
  "why": "b frente a c combinada.",
  "page": "15",
  "difficulty": "Detalle",
  "id": "q056"
 },
 {
  "section": "componentes",
  "q": "En el marcado de bomba, «c» indica…",
  "options": [
   "Baja exclusivamente",
   "Presión combinada",
   "Vehículo cisterna",
   "Compresor"
  ],
  "correct": 1,
  "why": "c = baja y alta.",
  "page": "15",
  "difficulty": "Detalle",
  "id": "q057"
 },
 {
  "section": "componentes",
  "q": "¿A qué caudal se corresponde B 16/8?",
  "options": [
   "1.600 L/min",
   "160 L/min",
   "800 L/min",
   "2.400 L/min"
  ],
  "correct": 0,
  "why": "16 × 100 L/min a 8 bar.",
  "page": "15",
  "difficulty": "Detalle",
  "id": "q058"
 },
 {
  "section": "componentes",
  "q": "¿A qué presión corresponde la cifra 8 de B 16/8?",
  "options": [
   "16 bar",
   "30 bar",
   "35 bar",
   "8 bar"
  ],
  "correct": 3,
  "why": "El segundo número es presión nominal (bar).",
  "page": "15",
  "difficulty": "Detalle",
  "id": "q059"
 },
 {
  "section": "componentes",
  "q": "¿Qué prestaciones indica c 2/30?",
  "options": [
   "2.000 L/min a 30 bar",
   "200 L/min a 8 bar",
   "200 L/min a 30 bar",
   "800 L/min a 30 bar"
  ],
  "correct": 2,
  "why": "2 equivale a 200 L/min.",
  "page": "15",
  "difficulty": "Detalle",
  "id": "q060"
 },
 {
  "section": "componentes",
  "q": "¿Qué peso estimado tiene la dotación A?",
  "options": [
   "200 kg",
   "437 kg",
   "90 kg",
   "1.000 kg"
  ],
  "correct": 1,
  "why": "Dotación imprescindible A del PDF.",
  "page": "16",
  "difficulty": "Detalle",
  "id": "q061"
 },
 {
  "section": "componentes",
  "q": "¿Qué peso estimado tiene la dotación B?",
  "options": [
   "200 kg",
   "437 kg",
   "100 kg",
   "750 kg"
  ],
  "correct": 0,
  "why": "Dotación B complementaria.",
  "page": "18",
  "difficulty": "Detalle",
  "id": "q062"
 },
 {
  "section": "componentes",
  "q": "¿Qué clase de material es la dotación A?",
  "options": [
   "Opcional",
   "Exclusivamente sanitaria",
   "Solo para aeronaves",
   "Imprescindible"
  ],
  "correct": 3,
  "why": "Equipamiento imprescindible para siniestros.",
  "page": "16",
  "difficulty": "Detalle",
  "id": "q063"
 },
 {
  "section": "componentes",
  "q": "¿Cuántos mangotes se citan en dotación A?",
  "options": [
   "2 de 70 mm × 4 m",
   "8 de 45 mm × 1 m",
   "4 de 100 mm × 2 m",
   "4 de 25 mm × 3 m"
  ],
  "correct": 2,
  "why": "Apartado 3.6.1.",
  "page": "16",
  "difficulty": "Detalle",
  "id": "q064"
 },
 {
  "section": "componentes",
  "q": "¿Qué longitud de manguera de 45 mm cita la dotación A?",
  "options": [
   "120 m",
   "160 m",
   "40 m",
   "200 m"
  ],
  "correct": 1,
  "why": "Manguera de 45 mm en rollos de 20 m.",
  "page": "16",
  "difficulty": "Detalle",
  "id": "q065"
 },
 {
  "section": "componentes",
  "q": "¿Cuántos ERA de aire comprimido incluye la dotación B?",
  "options": [
   "Dos",
   "Uno",
   "Cuatro",
   "Seis"
  ],
  "correct": 0,
  "why": "La B añade dos ERA con dos botellas de recambio.",
  "page": "18",
  "difficulty": "Detalle",
  "id": "q066"
 },
 {
  "section": "componentes",
  "q": "¿Qué autonomía mínima tienen los ERA tipo B del manual?",
  "options": [
   "10 minutos",
   "15 minutos",
   "60 minutos",
   "30 minutos"
  ],
  "correct": 3,
  "why": "Cada ERA de la dotación B, al menos 30 min.",
  "page": "18",
  "difficulty": "Detalle",
  "id": "q067"
 },
 {
  "section": "componentes",
  "q": "¿Cuál es el límite de aislamiento de la pértiga tipo B según el documento?",
  "options": [
   "4 kV",
   "10 kV",
   "40 kV",
   "100 kV"
  ],
  "correct": 2,
  "why": "Pértiga desmontable hasta 40 kilovoltios.",
  "page": "18",
  "difficulty": "Detalle",
  "id": "q068"
 },
 {
  "section": "componentes",
  "q": "¿Qué peso usa el manual para cada bombero equipado en carga normalizada?",
  "options": [
   "70 kg",
   "90 kg",
   "80 kg",
   "120 kg"
  ],
  "correct": 1,
  "why": "Valor de definición p. 19.",
  "page": "19",
  "difficulty": "Detalle",
  "id": "q069"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué significa BUL?",
  "options": [
   "Bomba urbana ligera",
   "Bomba urbana pesada",
   "Bomba rural ligera",
   "Bomba nodriza ligera"
  ],
  "correct": 0,
  "why": "BUL es urbana ligera.",
  "page": "19",
  "difficulty": "Detalle",
  "id": "q070"
 },
 {
  "section": "vehiculos",
  "q": "¿Cuál es la cisterna mínima de BUL?",
  "options": [
   "2.400 L",
   "3.200 L",
   "5.500 L",
   "800 L"
  ],
  "correct": 3,
  "why": "Ficha BUL p. 20.",
  "page": "20",
  "difficulty": "Detalle",
  "id": "q071"
 },
 {
  "section": "vehiculos",
  "q": "¿Cuáles son dimensiones máximas de BUL?",
  "options": [
   "7,5 × 2,5 × 3,25 m",
   "6,5 × 2,5 × 3,5 m",
   "6 × 2,2 × 3 m",
   "8 × 3 × 4 m"
  ],
  "correct": 2,
  "why": "Dimensiones de ficha BUL.",
  "page": "20",
  "difficulty": "Detalle",
  "id": "q072"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué velocidad máxima se indica para BUL?",
  "options": [
   "80 km/h",
   "90 km/h",
   "85 km/h",
   "100 km/h"
  ],
  "correct": 1,
  "why": "Ficha BUL.",
  "page": "20",
  "difficulty": "Detalle",
  "id": "q073"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué bomba figura para BUL?",
  "options": [
   "Bb 16/8 o Bc 16/8-2/30",
   "Bb 8/8 o Bc 8/8-2/30",
   "Bb 16/8 o Bc 16/8-2,5/35",
   "Bb 8/8 únicamente"
  ],
  "correct": 0,
  "why": "Ficha BUL.",
  "page": "20",
  "difficulty": "Detalle",
  "id": "q074"
 },
 {
  "section": "vehiculos",
  "q": "¿Cuál es la cisterna mínima BUP?",
  "options": [
   "800 L",
   "2.400 L",
   "5.500 L",
   "3.200 L"
  ],
  "correct": 3,
  "why": "Ficha BUP p. 21.",
  "page": "21",
  "difficulty": "Detalle",
  "id": "q075"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué velocidad máxima figura en BUP?",
  "options": [
   "80 km/h",
   "85 km/h",
   "100 km/h",
   "90 km/h"
  ],
  "correct": 2,
  "why": "Ficha BUP.",
  "page": "21",
  "difficulty": "Detalle",
  "id": "q076"
 },
 {
  "section": "vehiculos",
  "q": "¿Cuáles son las dimensiones máximas BUP?",
  "options": [
   "6 × 2,2 × 3 m",
   "7,5 × 2,5 × 3,25 m",
   "6,5 × 2,5 × 3,5 m",
   "8 × 3 × 4 m"
  ],
  "correct": 1,
  "why": "Ficha BUP.",
  "page": "21",
  "difficulty": "Detalle",
  "id": "q077"
 },
 {
  "section": "vehiculos",
  "q": "¿Cuál es la capacidad de remolque citada para BUP?",
  "options": [
   "1.500 kg",
   "750 kg",
   "500 kg",
   "2.000 kg"
  ],
  "correct": 0,
  "why": "Ficha BUP.",
  "page": "22",
  "difficulty": "Detalle",
  "id": "q078"
 },
 {
  "section": "vehiculos",
  "q": "¿Cuál es la categoría de paso de BUP?",
  "options": [
   "2 (rural)",
   "3 (todoterreno)",
   "Variable",
   "1 (urbano)"
  ],
  "correct": 3,
  "why": "Ficha BUP.",
  "page": "21",
  "difficulty": "Detalle",
  "id": "q079"
 },
 {
  "section": "vehiculos",
  "q": "¿Cuál es la cisterna mínima BRL?",
  "options": [
   "3.200 L",
   "2.400 L",
   "800 L",
   "5.500 L"
  ],
  "correct": 2,
  "why": "Ficha BRL p. 23.",
  "page": "23",
  "difficulty": "Detalle",
  "id": "q080"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué bomba figura para BRL?",
  "options": [
   "Bb 16/8 o Bc 16/8-2/30",
   "Bb 8/8 o Bc 8/8-2/30",
   "Bb 16/8 o Bc 16/8-2,5/35",
   "Solo bomba de 2.400 L/min"
  ],
  "correct": 1,
  "why": "Ficha BRL.",
  "page": "23",
  "difficulty": "Detalle",
  "id": "q081"
 },
 {
  "section": "vehiculos",
  "q": "¿Cuál es la categoría de paso BRL?",
  "options": [
   "2 (rural)",
   "1 (urbano)",
   "3 (todoterreno)",
   "Variable"
  ],
  "correct": 0,
  "why": "Ficha BRL.",
  "page": "23",
  "difficulty": "Detalle",
  "id": "q082"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué velocidad máxima tienen BRL y BRP según las fichas?",
  "options": [
   "85 km/h",
   "90 km/h",
   "100 km/h",
   "80 km/h"
  ],
  "correct": 3,
  "why": "Fichas rurales.",
  "page": "23–24",
  "difficulty": "Detalle",
  "id": "q083"
 },
 {
  "section": "vehiculos",
  "q": "¿Cuánto vale la capacidad mínima de BRP?",
  "options": [
   "800 L",
   "3.200 L",
   "2.400 L",
   "8.000 L"
  ],
  "correct": 2,
  "why": "Ficha BRP p. 24.",
  "page": "24",
  "difficulty": "Detalle",
  "id": "q084"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué relación potencia/masa figura en BRP?",
  "options": [
   "8 CV/t",
   "10 CV/t",
   "15 CV/t",
   "20 CV/t"
  ],
  "correct": 1,
  "why": "Ficha BRP.",
  "page": "24",
  "difficulty": "Detalle",
  "id": "q085"
 },
 {
  "section": "vehiculos",
  "q": "¿Cuáles son dimensiones máximas BRP?",
  "options": [
   "6,5 × 2,5 × 3,5 m",
   "6 × 2,2 × 3 m",
   "7,5 × 2,5 × 3,25 m",
   "10 × 3 × 4 m"
  ],
  "correct": 0,
  "why": "Ficha BRP.",
  "page": "24",
  "difficulty": "Detalle",
  "id": "q086"
 },
 {
  "section": "vehiculos",
  "q": "¿Cuántos ejes de tracción cita BRP?",
  "options": [
   "Uno",
   "Tres",
   "Ninguno",
   "Dos"
  ],
  "correct": 3,
  "why": "Ficha BRP.",
  "page": "24",
  "difficulty": "Detalle",
  "id": "q087"
 },
 {
  "section": "vehiculos",
  "q": "¿Cuál es la categoría de paso forestal BFL?",
  "options": [
   "1 (urbano)",
   "2 (rural)",
   "3 (todoterreno)",
   "Variable"
  ],
  "correct": 2,
  "why": "Ficha BFL.",
  "page": "26",
  "difficulty": "Detalle",
  "id": "q088"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué capacidad se imprime para cisterna BFL?",
  "options": [
   "800 L",
   "300–600 L",
   "2.400 L",
   "3.200 L"
  ],
  "correct": 1,
  "why": "Apartado BFL, p. 26.",
  "page": "26",
  "difficulty": "Detalle",
  "id": "q089"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué velocidad máxima se indica para BFL y BFP?",
  "options": [
   "85 km/h",
   "80 km/h",
   "90 km/h",
   "100 km/h"
  ],
  "correct": 0,
  "why": "Ambas fichas forestales.",
  "page": "26–27",
  "difficulty": "Detalle",
  "id": "q090"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué dotación en cabina se atribuye a BFL?",
  "options": [
   "Conductor y dos bomberos",
   "Conductor y cuatro bomberos",
   "Mando, dos conductores y tres bomberos",
   "Mando, conductor y un bombero"
  ],
  "correct": 3,
  "why": "Ficha BFL.",
  "page": "26",
  "difficulty": "Detalle",
  "id": "q091"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué capacidad mínima BFP?",
  "options": [
   "800 L",
   "3.200 L",
   "2.400 L",
   "5.500 L"
  ],
  "correct": 2,
  "why": "Ficha BFP.",
  "page": "27",
  "difficulty": "Detalle",
  "id": "q092"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué relación potencia/masa mínima BFP?",
  "options": [
   "8 CV/t",
   "10 CV/t",
   "15 CV/t",
   "20 CV/t"
  ],
  "correct": 1,
  "why": "Ficha BFP.",
  "page": "27",
  "difficulty": "Detalle",
  "id": "q093"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué tarea es principal en las nodrizas?",
  "options": [
   "Transportar agua como depósito móvil",
   "Transporte sanitario exclusivamente",
   "Rescate subacuático",
   "Mando y telecomunicaciones"
  ],
  "correct": 0,
  "why": "Nodrizas también pueden atacar directamente.",
  "page": "28",
  "difficulty": "Detalle",
  "id": "q094"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué capacidad mínima BNL?",
  "options": [
   "3.200 L",
   "2.400 L",
   "8.000 L",
   "5.500 L"
  ],
  "correct": 3,
  "why": "Ficha BNL.",
  "page": "28",
  "difficulty": "Detalle",
  "id": "q095"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué espuma adicional cita BNL?",
  "options": [
   "200 L",
   "800 L",
   "500 L",
   "1.000 L"
  ],
  "correct": 2,
  "why": "Ficha BNL.",
  "page": "29",
  "difficulty": "Detalle",
  "id": "q096"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué capacidad mínima BNP?",
  "options": [
   "5.500 L",
   "8.000 L",
   "3.200 L",
   "2.400 L"
  ],
  "correct": 1,
  "why": "Ficha BNP.",
  "page": "29",
  "difficulty": "Detalle",
  "id": "q097"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué espuma adicional cita BNP?",
  "options": [
   "800 L",
   "500 L",
   "200 L",
   "1.500 L"
  ],
  "correct": 0,
  "why": "Ficha BNP.",
  "page": "29",
  "difficulty": "Detalle",
  "id": "q098"
 },
 {
  "section": "vehiculos",
  "q": "¿Cuántas salidas de 70 mm tiene BNP según la ficha?",
  "options": [
   "Una",
   "Dos",
   "Tres",
   "Cuatro"
  ],
  "correct": 3,
  "why": "Ficha BNP.",
  "page": "29",
  "difficulty": "Detalle",
  "id": "q099"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué es VAU?",
  "options": [
   "Autobomba urbana pesada",
   "Vehículo acuático",
   "Vehículo con un único tipo de agente específico",
   "Vehículo de mando"
  ],
  "correct": 2,
  "why": "VAU: agente único.",
  "page": "30",
  "difficulty": "Detalle",
  "id": "q100"
 },
 {
  "section": "vehiculos",
  "q": "¿Cuáles son agentes habituales en un VMA de aeropuerto?",
  "options": [
   "Solo agua",
   "Agua, espuma y polvo",
   "Solo arena",
   "Solo CO₂"
  ],
  "correct": 1,
  "why": "VMA transporta varios agentes.",
  "page": "30",
  "difficulty": "Detalle",
  "id": "q101"
 },
 {
  "section": "vehiculos",
  "q": "¿Cuál es agente propulsor del vehículo de polvo del PDF?",
  "options": [
   "Nitrógeno",
   "Oxígeno",
   "Aire atmosférico exclusivamente",
   "Dióxido de carbono necesariamente"
  ],
  "correct": 0,
  "why": "El manual cita nitrógeno.",
  "page": "30",
  "difficulty": "Detalle",
  "id": "q102"
 },
 {
  "section": "vehiculos",
  "q": "¿Cuál es cantidad de polvo químico para VAU de polvo?",
  "options": [
   "50–200 L",
   "200–500 L",
   "8.000–12.000 L",
   "1.000–6.000 L"
  ],
  "correct": 3,
  "why": "Apartado VAU polvo.",
  "page": "30",
  "difficulty": "Detalle",
  "id": "q103"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué vehículo se dedica a salvamento acuático/subacuático?",
  "options": [
   "FER",
   "FSV exclusivamente",
   "FEA",
   "UTP"
  ],
  "correct": 2,
  "why": "FEA: equipo acuático.",
  "page": "31",
  "difficulty": "Detalle",
  "id": "q104"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué vehículo está pensado para montaña, pozos y cuevas?",
  "options": [
   "FEA",
   "FER",
   "AMB",
   "UMC"
  ],
  "correct": 1,
  "why": "FER escalada y espeleología.",
  "page": "31",
  "difficulty": "Detalle",
  "id": "q105"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué unidad transporta personal especializado en prevención y riesgos?",
  "options": [
   "UIV",
   "UIS",
   "UMJ",
   "UTP"
  ],
  "correct": 0,
  "why": "Unidad de Inspección y Vigilancia.",
  "page": "32",
  "difficulty": "Detalle",
  "id": "q106"
 },
 {
  "section": "vehiculos",
  "q": "¿Cuál transporta avituallamiento y equipamiento en siniestros largos?",
  "options": [
   "UMJ",
   "UIV",
   "AEA",
   "UIS"
  ],
  "correct": 3,
  "why": "Intendencia y suministro.",
  "page": "32",
  "difficulty": "Detalle",
  "id": "q107"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué unidad es de mando y comunicación?",
  "options": [
   "UMJ",
   "UIS",
   "UMC",
   "UPC"
  ],
  "correct": 2,
  "why": "UMC dispone de equipos de comunicación.",
  "page": "32",
  "difficulty": "Detalle",
  "id": "q108"
 },
 {
  "section": "vehiculos",
  "q": "¿Cuál es la autoescalera automática?",
  "options": [
   "AES",
   "AEA",
   "AEM",
   "ABE"
  ],
  "correct": 1,
  "why": "AEA.",
  "page": "33",
  "difficulty": "Detalle",
  "id": "q109"
 },
 {
  "section": "vehiculos",
  "q": "¿Cuál es el autobrazo extensible?",
  "options": [
   "ABE",
   "ABA",
   "AEA",
   "AEM"
  ],
  "correct": 0,
  "why": "ABE.",
  "page": "34",
  "difficulty": "Detalle",
  "id": "q110"
 },
 {
  "section": "vehiculos",
  "q": "Antes de conducir un vehículo de altura, la escalera debe…",
  "options": [
   "Estar extendida",
   "Estar parcialmente desplegada",
   "Estar sin fijación",
   "Estar recogida y apoyada en el portaescalera"
  ],
  "correct": 3,
  "why": "Lista antes del uso.",
  "page": "34",
  "difficulty": "Detalle",
  "id": "q111"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué se debe hacer durante la intervención con vehículo de altura?",
  "options": [
   "Circular sin luces",
   "Desconectar frenos de estacionamiento",
   "Acordonar la zona de trabajo",
   "Abrir armarios durante la marcha"
  ],
  "correct": 2,
  "why": "Precauciones del apartado 4.9.",
  "page": "35",
  "difficulty": "Detalle",
  "id": "q112"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué equipo se verifica al terminar con vehículo de altura?",
  "options": [
   "Solo el claxon",
   "Escalera, apoyo hidráulico e instalación eléctrica",
   "Solo matrícula",
   "Solo número de mangueras"
  ],
  "correct": 1,
  "why": "Lista tras intervención.",
  "page": "35",
  "difficulty": "Detalle",
  "id": "q113"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué medio se mueve sobre aire a presión sin contacto directo con el suelo?",
  "options": [
   "Hovercraft",
   "BSA",
   "BEA",
   "FSV"
  ],
  "correct": 0,
  "why": "Colchón de aire.",
  "page": "36",
  "difficulty": "Detalle",
  "id": "q114"
 },
 {
  "section": "vehiculos",
  "q": "¿Cuál es la embarcación para extinción de incendios?",
  "options": [
   "BSA",
   "AVR",
   "HSR",
   "BEA"
  ],
  "correct": 3,
  "why": "BEA: barca de extinción.",
  "page": "36",
  "difficulty": "Detalle",
  "id": "q115"
 },
 {
  "section": "vehiculos",
  "q": "¿Qué avión se emplea para reconocimiento?",
  "options": [
   "AVE",
   "HSR",
   "AVR",
   "BFP"
  ],
  "correct": 2,
  "why": "AVR: avión de reconocimiento.",
  "page": "36",
  "difficulty": "Detalle",
  "id": "q116"
 },
 {
  "section": "vehiculos",
  "q": "¿Cuál es la aeronave destinada a extinción?",
  "options": [
   "AVR",
   "AVE",
   "HSR",
   "BSA"
  ],
  "correct": 1,
  "why": "AVE: avión de extinción.",
  "page": "36",
  "difficulty": "Detalle",
  "id": "q117"
 },
 {
  "section": "circulacion",
  "q": "¿Qué RD aprueba el Reglamento General de Circulación citado en el tema?",
  "options": [
   "RD 1428/2003",
   "RD 1053/1985",
   "RD 773/1997",
   "RD 2822/1998"
  ],
  "correct": 0,
  "why": "Es el RD citado por el punto 5.",
  "page": "37",
  "difficulty": "Detalle",
  "id": "q118"
 },
 {
  "section": "circulacion",
  "q": "¿Qué artículo del RGC se cita para las señales de prioritarios?",
  "options": [
   "Artículo 9",
   "Artículo 142",
   "Artículo 18",
   "Artículo 68.2"
  ],
  "correct": 3,
  "why": "Apartado 5.1.",
  "page": "37",
  "difficulty": "Detalle",
  "id": "q119"
 },
 {
  "section": "circulacion",
  "q": "¿Qué señal identifica a vehículos prioritarios según el punto 5?",
  "options": [
   "V-3",
   "V-8",
   "V-1",
   "V-12"
  ],
  "correct": 2,
  "why": "Artículo 173 del RGC citado.",
  "page": "37",
  "difficulty": "Detalle",
  "id": "q120"
 },
 {
  "section": "circulacion",
  "q": "Según el artículo 68.2 reproducido, ¿cuál es regla general de advertencia?",
  "options": [
   "Solo claxon normal",
   "Señales luminosa y acústica simultáneas",
   "Solo luces de cruce",
   "Sin señalizar nunca"
  ],
  "correct": 1,
  "why": "Señal V-1 y emisor acústico especial.",
  "page": "37",
  "difficulty": "Detalle",
  "id": "q121"
 },
 {
  "section": "circulacion",
  "q": "Según el texto del art. 68.2, ¿cuándo podría utilizarse solo la luz?",
  "options": [
   "Si omitir la sirena no entraña peligro para los demás",
   "Siempre, sin criterio",
   "Solo en autopistas",
   "Nunca"
  ],
  "correct": 0,
  "why": "Excepción expresamente citada.",
  "page": "37",
  "difficulty": "Detalle",
  "id": "q122"
 },
 {
  "section": "circulacion",
  "q": "¿Qué criterio aparece para decidir el uso de la sirena?",
  "options": [
   "Color del vehículo",
   "Número de puertas",
   "Antigüedad del vehículo",
   "Distancia al incendio e importancia del suceso"
  ],
  "correct": 3,
  "why": "Apartado 5.1 del documento.",
  "page": "38",
  "difficulty": "Detalle",
  "id": "q123"
 },
 {
  "section": "circulacion",
  "q": "¿A quién se debe obedecer en todo caso, incluso si hay prioridad?",
  "options": [
   "Solo acompañantes",
   "Solo peatones",
   "Agentes de tráfico",
   "Solo mandos por radio"
  ],
  "correct": 2,
  "why": "El temario lo establece explícitamente.",
  "page": "38",
  "difficulty": "Detalle",
  "id": "q124"
 },
 {
  "section": "circulacion",
  "q": "¿En qué situación debe extremarse precaución con prioridad de paso?",
  "options": [
   "Solo en autopista vacía",
   "Al aproximarse a un paso de peatones",
   "Solo en el parque",
   "Nunca por ser prioritario"
  ],
  "correct": 1,
  "why": "Lista de riesgos del apartado 5.2.",
  "page": "38",
  "difficulty": "Detalle",
  "id": "q125"
 },
 {
  "section": "circulacion",
  "q": "¿Se menciona especial cuidado al acercarse a un autobús parado?",
  "options": [
   "Sí",
   "No",
   "Solo sin urgencia",
   "Únicamente con nieve"
  ],
  "correct": 0,
  "why": "Lista de puntos peligrosos.",
  "page": "38",
  "difficulty": "Detalle",
  "id": "q126"
 },
 {
  "section": "circulacion",
  "q": "¿En qué artículo del RGC ubica el manual las excepciones de velocidad?",
  "options": [
   "Artículo 2",
   "Artículo 173",
   "Artículo 10",
   "Artículo 67"
  ],
  "correct": 3,
  "why": "Apartado 5.3.",
  "page": "38",
  "difficulty": "Detalle",
  "id": "q127"
 },
 {
  "section": "circulacion",
  "q": "¿Cuál es condición indispensable para exceder velocidad según el resumen del PDF?",
  "options": [
   "Conducir vehículo rojo",
   "Llevar al menos cinco bomberos",
   "Prestar servicio urgente sin poner a otros en peligro",
   "Superar 7,5 t de MTC"
  ],
  "correct": 2,
  "why": "El deber de seguridad se mantiene.",
  "page": "38–39",
  "difficulty": "Detalle",
  "id": "q128"
 },
 {
  "section": "circulacion",
  "q": "¿Qué maniobra excepcional contempla el art. 68 según el PDF?",
  "options": [
   "Girar libremente en cualquier calle",
   "Marcha atrás o media vuelta en autopista bajo condiciones",
   "Circular por acera sin restricciones",
   "Ignorar peatones"
  ],
  "correct": 1,
  "why": "Las maniobras se condicionan a urgencia y seguridad.",
  "page": "39",
  "difficulty": "Detalle",
  "id": "q129"
 },
 {
  "section": "circulacion",
  "q": "¿Por dónde cita el texto que podría circularse excepcionalmente en sentido contrario?",
  "options": [
   "Por el arcén",
   "Por cualquier carril",
   "Por carril contrario sin condiciones",
   "Solo por carril BUS"
  ],
  "correct": 0,
  "why": "Cita del artículo 68 en p. 39.",
  "page": "39",
  "difficulty": "Detalle",
  "id": "q130"
 },
 {
  "section": "circulacion",
  "q": "¿Qué permiso especifica el manual para conducir este tipo de vehículo?",
  "options": [
   "Permiso AM",
   "Permiso A1",
   "Permiso BTP",
   "Permiso C"
  ],
  "correct": 3,
  "why": "La fuente dice permiso C, pendiente de verificación para cada vehículo y norma vigente.",
  "page": "39",
  "difficulty": "Detalle",
  "id": "q131"
 },
 {
  "section": "circulacion",
  "q": "¿Quién responde de infracciones de documentación y conservación según el texto?",
  "options": [
   "Solo el conductor",
   "Los pasajeros",
   "El titular del vehículo",
   "El centro de coordinación"
  ],
  "correct": 2,
  "why": "Excepción a regla de responsabilidad del conductor.",
  "page": "39",
  "difficulty": "Detalle",
  "id": "q132"
 },
 {
  "section": "circulacion",
  "q": "¿Qué límite de alcohol en sangre imprime el PDF?",
  "options": [
   "0,5 g/L",
   "0,3 g/L",
   "0,15 g/L",
   "0,8 g/L"
  ],
  "correct": 1,
  "why": "Cifra literal de p. 40; comprobar vigencia.",
  "page": "40",
  "difficulty": "Detalle",
  "id": "q133"
 },
 {
  "section": "circulacion",
  "q": "¿Qué límite de alcohol en aire espirado imprime el PDF?",
  "options": [
   "0,15 mg/L",
   "0,3 mg/L",
   "0,5 mg/L",
   "0,8 mg/L"
  ],
  "correct": 0,
  "why": "Cifra literal de p. 40; comprobar vigencia.",
  "page": "40",
  "difficulty": "Detalle",
  "id": "q134"
 },
 {
  "section": "circulacion",
  "q": "Según el punto 5, ¿la prioridad equivale a que pueda ponerse en peligro a otro usuario?",
  "options": [
   "Sí, siempre",
   "Solo cuando se usa la sirena",
   "Sí, en rotondas",
   "No, debe garantizarse la seguridad"
  ],
  "correct": 3,
  "why": "Los artículos citados mantienen deber de precaución.",
  "page": "38–39",
  "difficulty": "Detalle",
  "id": "q135"
 }
];
