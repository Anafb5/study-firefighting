/* Tema 8 · Preguntas originales basadas en el PDF, con explicación y página. */
const QUESTIONS=[
 {
  "id": "q001",
  "section": "tipos",
  "q": "¿Qué tipo de fuego corresponde a madera que deja brasas?",
  "options": [
   "B",
   "A",
   "C",
   "D"
  ],
  "correct": 1,
  "why": "En clase A arden sólidos orgánicos con formación de brasas (p. 7).",
  "page": "7",
  "difficulty": "Detalle"
 },
 {
  "id": "q002",
  "section": "tipos",
  "q": "¿En qué clase se encuadra el gas butano?",
  "options": [
   "C",
   "A",
   "B",
   "F"
  ],
  "correct": 0,
  "why": "Los gases combustibles pertenecen a clase C (p. 7).",
  "page": "7",
  "difficulty": "Detalle"
 },
 {
  "id": "q003",
  "section": "tipos",
  "q": "¿Qué clase requiere tratamiento especial por combustión de metales?",
  "options": [
   "A",
   "B",
   "F",
   "D"
  ],
  "correct": 3,
  "why": "Magnesio, sodio y potasio son ejemplos de clase D (p. 7).",
  "page": "7",
  "difficulty": "Detalle"
 },
 {
  "id": "q004",
  "section": "tipos",
  "q": "Un incendio de aceite de freidora pertenece a la clase…",
  "options": [
   "B",
   "C",
   "F",
   "D"
  ],
  "correct": 2,
  "why": "Los aceites y grasas de cocina son clase F (p. 7).",
  "page": "7",
  "difficulty": "Detalle"
 },
 {
  "id": "q005",
  "section": "tipos",
  "q": "¿Qué describe la clase B?",
  "options": [
   "Sólidos con brasas",
   "Líquidos inflamables y sólidos licuables",
   "Gases únicamente",
   "Metales combustibles"
  ],
  "correct": 1,
  "why": "Clase B agrupa líquidos y sólidos licuables (p. 7).",
  "page": "7",
  "difficulty": "Detalle"
 },
 {
  "id": "q006",
  "section": "agentes",
  "q": "¿Qué mecanismo actúa retirando o aislando el combustible?",
  "options": [
   "Eliminación",
   "Sofocación",
   "Enfriamiento",
   "Inhibición"
  ],
  "correct": 0,
  "why": "Puede retirarse combustible directamente o impedir que alcance otros materiales (p. 8).",
  "page": "8",
  "difficulty": "Detalle"
 },
 {
  "id": "q007",
  "section": "agentes",
  "q": "¿Qué mecanismo actúa sobre la energía térmica del foco?",
  "options": [
   "Eliminación",
   "Sofocación",
   "Inhibición",
   "Enfriamiento"
  ],
  "correct": 3,
  "why": "El enfriamiento extrae calor de la combustión (p. 8).",
  "page": "8",
  "difficulty": "Detalle"
 },
 {
  "id": "q008",
  "section": "agentes",
  "q": "¿Qué mecanismo interrumpe la reacción en cadena?",
  "options": [
   "Sofocación",
   "Eliminación",
   "Inhibición",
   "Dilución de aire"
  ],
  "correct": 2,
  "why": "La inhibición interfiere químicamente con las reacciones en cadena (p. 8).",
  "page": "8",
  "difficulty": "Detalle"
 },
 {
  "id": "q009",
  "section": "agentes",
  "q": "¿Qué mecanismo evita el contacto combustible-comburente?",
  "options": [
   "Enfriamiento",
   "Sofocación",
   "Eliminación",
   "Inhibición"
  ],
  "correct": 1,
  "why": "La sofocación separa el combustible del oxígeno (p. 8).",
  "page": "8",
  "difficulty": "Detalle"
 },
 {
  "id": "q010",
  "section": "agentes",
  "q": "¿Qué agente del temario se asocia a fuegos de cocina clase F?",
  "options": [
   "Acetato de potasio",
   "Polvo BC",
   "Nitrógeno puro",
   "Agua a chorro"
  ],
  "correct": 0,
  "why": "El acetato potásico es el agente específico destacado (p. 14–15).",
  "page": "14–15",
  "difficulty": "Detalle"
 },
 {
  "id": "q011",
  "section": "agentes",
  "q": "¿Qué polvo está formulado para actuar sobre clases A, B y C?",
  "options": [
   "Polvo BC",
   "Polvo D exclusivamente",
   "Polvo metálico puro",
   "Polvo ABC"
  ],
  "correct": 3,
  "why": "ABC extiende el uso sobre sólidos con brasas (p. 15).",
  "page": "15",
  "difficulty": "Detalle"
 },
 {
  "id": "q012",
  "section": "agentes",
  "q": "¿Qué polvo suele limitarse a clases B y C?",
  "options": [
   "Polvo ABC",
   "Polvo D",
   "Polvo BC",
   "Acetato de potasio"
  ],
  "correct": 2,
  "why": "El convencional BC no tiene respuesta suficiente sobre clase A (p. 14–15).",
  "page": "14–15",
  "difficulty": "Detalle"
 },
 {
  "id": "q013",
  "section": "agentes",
  "q": "¿Qué tipo de agente debe seleccionarse para sodio ardiendo?",
  "options": [
   "Agua a chorro",
   "Agente especial clase D",
   "Espuma convencional",
   "Polvo BC indiscriminado"
  ],
  "correct": 1,
  "why": "Los metales combustibles precisan agentes especiales adecuados (p. 15).",
  "page": "15",
  "difficulty": "Detalle"
 },
 {
  "id": "q014",
  "section": "agentes",
  "q": "¿Qué extintor permite normalmente evitar residuos sólidos cerca de un cuadro electrónico?",
  "options": [
   "CO₂",
   "Polvo ABC",
   "Polvo BC",
   "Agente líquido espumante"
  ],
  "correct": 0,
  "why": "El CO₂ es gaseoso y no deja residuos de polvo (pp. 9 y 19).",
  "page": "9, 19",
  "difficulty": "Detalle"
 },
 {
  "id": "q015",
  "section": "agentes",
  "q": "Según el PDF, ¿qué agentes no son aceptables bajo tensión eléctrica en el cuadro de elección?",
  "options": [
   "CO₂ y nitrógeno",
   "Polvo ensayado y CO₂",
   "Polvo BC y ABC con ensayo",
   "Agua a chorro y espuma"
  ],
  "correct": 3,
  "why": "La nota (2) desaconseja agua a chorro y espuma (p. 15).",
  "page": "15",
  "difficulty": "Detalle"
 },
 {
  "id": "q016",
  "section": "portatiles",
  "q": "¿Qué definición caracteriza un extintor según RIPCI citado?",
  "options": [
   "Equipo que solo sofoca sin presión",
   "Sistema fijo de rociadores",
   "Equipo que proyecta agente por presión interna",
   "Hidrante conectado a red pública"
  ],
  "correct": 2,
  "why": "El agente se proyecta por presión almacenada o gas auxiliar (p. 16).",
  "page": "16",
  "difficulty": "Detalle"
 },
 {
  "id": "q017",
  "section": "portatiles",
  "q": "¿Cuál es la masa máxima del extintor portátil en servicio según el texto?",
  "options": [
   "10 kg",
   "20 kg",
   "30 kg",
   "50 kg"
  ],
  "correct": 1,
  "why": "Definición reproducida: masa igual o menor de 20 kg (p. 16–19).",
  "page": "16, 19",
  "difficulty": "Detalle"
 },
 {
  "id": "q018",
  "section": "portatiles",
  "q": "¿Qué rasgo distingue al extintor móvil?",
  "options": [
   "Está sobre ruedas y supera 20 kg",
   "Siempre contiene agua",
   "Tiene masa inferior a 5 kg",
   "No necesita presión"
  ],
  "correct": 0,
  "why": "El portátil es ≤20 kg; el móvil va en ruedas y supera 20 kg (p. 19).",
  "page": "19",
  "difficulty": "Detalle"
 },
 {
  "id": "q019",
  "section": "portatiles",
  "q": "¿Qué porcentaje del cuerpo señala el PDF que debe ser rojo?",
  "options": [
   "50 %",
   "70 %",
   "100 %",
   "95 %"
  ],
  "correct": 3,
  "why": "Descripción del cuerpo en p. 16.",
  "page": "16",
  "difficulty": "Detalle"
 },
 {
  "id": "q020",
  "section": "portatiles",
  "q": "¿Qué componente impide que se accione accidentalmente la válvula?",
  "options": [
   "Manómetro",
   "Tubo sifón",
   "Anilla de seguridad",
   "Boquilla"
  ],
  "correct": 2,
  "why": "La anilla de seguridad bloquea la activación involuntaria (p. 18).",
  "page": "18",
  "difficulty": "Detalle"
 },
 {
  "id": "q021",
  "section": "portatiles",
  "q": "¿Qué función tiene el tubo sifón?",
  "options": [
   "Medir presión interna",
   "Conducir el agente desde el cuerpo hacia la válvula",
   "Impedir presión excesiva",
   "Limitar tiempo de descarga"
  ],
  "correct": 1,
  "why": "El tubo sifón es interior; conduce el producto (p. 17).",
  "page": "17",
  "difficulty": "Detalle"
 },
 {
  "id": "q022",
  "section": "portatiles",
  "q": "¿Qué indica el manómetro en extintores que lo incorporan?",
  "options": [
   "Presión interna",
   "Carga de fuego del edificio",
   "Tipo de combustible",
   "Temperatura exterior"
  ],
  "correct": 0,
  "why": "El manómetro informa de la presión (p. 18).",
  "page": "18",
  "difficulty": "Detalle"
 },
 {
  "id": "q023",
  "section": "portatiles",
  "q": "Para agentes de agua, ¿cómo se expresa la carga?",
  "options": [
   "Newtons",
   "Julios",
   "Pascales",
   "Litros"
  ],
  "correct": 3,
  "why": "Los agentes basados en agua se expresan en volumen (p. 18).",
  "page": "18",
  "difficulty": "Detalle"
 },
 {
  "id": "q024",
  "section": "portatiles",
  "q": "¿Qué representa el número de una eficacia 34A?",
  "options": [
   "Litros de agua del envase",
   "Altura de evacuación en metros",
   "Tamaño del hogar-tipo de clase A superado en ensayo",
   "Número de extintores por sector"
  ],
  "correct": 2,
  "why": "La eficacia combina capacidad ensayada y clase (pp. 18–19).",
  "page": "18–19",
  "difficulty": "Detalle"
 },
 {
  "id": "q025",
  "section": "portatiles",
  "q": "En eficacia 183B, ¿qué clase de combustible representa la letra?",
  "options": [
   "A: sólido con brasas",
   "B: líquido o sólido licuable",
   "C: gas",
   "F: cocina"
  ],
  "correct": 1,
  "why": "La letra identifica la clase del hogar de ensayo (pp. 18–19).",
  "page": "18–19",
  "difficulty": "Detalle"
 },
 {
  "id": "q026",
  "section": "portatiles",
  "q": "¿Qué sistema mantiene el agente ya presurizado en el recipiente?",
  "options": [
   "Presión permanente",
   "Cartucho auxiliar externo únicamente",
   "Bomba jockey",
   "Conducción de hidrante"
  ],
  "correct": 0,
  "why": "En presión permanente el recipiente está sometido a presión antes del uso (p. 21).",
  "page": "21",
  "difficulty": "Detalle"
 },
 {
  "id": "q027",
  "section": "portatiles",
  "q": "¿Qué debe verificarse antes de emplear un extintor?",
  "options": [
   "Solo el color del cuerpo",
   "Que sea el más pesado",
   "Solo la temperatura de la sala",
   "La clase de fuego y la compatibilidad del agente"
  ],
  "correct": 3,
  "why": "Selección de agente y seguridad son pasos previos (pp. 15 y 37).",
  "page": "15, 37",
  "difficulty": "Detalle"
 },
 {
  "id": "q028",
  "section": "portatiles",
  "q": "¿Qué significa que el extintor tenga eficacia 34A?",
  "options": [
   "Una presión exacta de 34 bar",
   "Una masa de 34 kg",
   "Una clasificación de eficacia probada para clase A",
   "Un volumen de 34 litros"
  ],
  "correct": 2,
  "why": "El valor se obtiene frente a hogar de ensayo, no es carga de extintor (p. 18).",
  "page": "18",
  "difficulty": "Detalle"
 },
 {
  "id": "q029",
  "section": "mantas",
  "q": "¿Qué mecanismo principal utiliza una manta ignífuga?",
  "options": [
   "Inhibición catalítica",
   "Sofocación",
   "Ruptura de chorro",
   "Filtrado de gases"
  ],
  "correct": 1,
  "why": "La manta aísla el foco del oxígeno (p. 28).",
  "page": "28",
  "difficulty": "Detalle"
 },
 {
  "id": "q030",
  "section": "mantas",
  "q": "¿Cuál es la caducidad máxima que menciona el temario para mantas ignífugas?",
  "options": [
   "20 años",
   "5 años",
   "10 años",
   "30 años"
  ],
  "correct": 0,
  "why": "El texto indica caducidad no superior a 20 años (p. 28).",
  "page": "28",
  "difficulty": "Detalle"
 },
 {
  "id": "q031",
  "section": "industria",
  "q": "¿En qué unidades se expresa la densidad de carga de fuego?",
  "options": [
   "V o A",
   "L/min",
   "kg·m/s",
   "MJ/m² o Mcal/m²"
  ],
  "correct": 3,
  "why": "Carga de fuego por superficie, según p. 29.",
  "page": "29",
  "difficulty": "Detalle"
 },
 {
  "id": "q032",
  "section": "industria",
  "q": "¿Qué es un sector de incendios?",
  "options": [
   "Recorrido exclusivo de mangueras",
   "Área de almacenamiento de extintores",
   "Zona delimitada para confinar o excluir propagación durante un tiempo",
   "Conjunto de vehículos de emergencia"
  ],
  "correct": 2,
  "why": "Definición del RSCIEI resumida en p. 29.",
  "page": "29",
  "difficulty": "Detalle"
 },
 {
  "id": "q033",
  "section": "industria",
  "q": "Cuando la carga de fuego de clase A es al menos 90 %, ¿cómo se considera la clase del sector?",
  "options": [
   "Clase B",
   "Clase A",
   "Clase C",
   "Clase D"
  ],
  "correct": 1,
  "why": "El manual usa umbral de predominancia del 90 % (p. 35).",
  "page": "35",
  "difficulty": "Detalle"
 },
 {
  "id": "q034",
  "section": "industria",
  "q": "Si no predomina al menos un 90 % A o B, ¿cómo evalúa el texto la dotación?",
  "options": [
   "Como A-B, sumando las necesidades de A y B",
   "Solo como clase C",
   "Solo clase D",
   "Sin extintores portátiles"
  ],
  "correct": 0,
  "why": "La dotación se obtiene por ambas clases por separado (p. 35).",
  "page": "35",
  "difficulty": "Detalle"
 },
 {
  "id": "q035",
  "section": "industria",
  "q": "¿Cuál es recorrido máximo horizontal citado en sectores industriales hasta un extintor?",
  "options": [
   "5 m",
   "25 m",
   "50 m",
   "15 m"
  ],
  "correct": 3,
  "why": "El manual indica un máximo general de 15 m en sectores industriales (p. 36).",
  "page": "36",
  "difficulty": "Detalle"
 },
 {
  "id": "q036",
  "section": "industria",
  "q": "¿Qué distancia recoge para determinadas áreas industriales D/E?",
  "options": [
   "5 m",
   "10 m",
   "25 m",
   "60 m"
  ],
  "correct": 2,
  "why": "Cita de ampliación a 25 m en determinadas áreas D/E (p. 36).",
  "page": "36",
  "difficulty": "Detalle"
 },
 {
  "id": "q037",
  "section": "uso",
  "q": "En interior, ¿qué posición permite retirarse al utilizar un extintor?",
  "options": [
   "Con el fuego bloqueando la salida",
   "Entre el fuego y una salida disponible",
   "En la zona de mayor concentración de humo",
   "Dentro del foco de calor"
  ],
  "correct": 1,
  "why": "Mantener vía de escape antes y durante la descarga (p. 37).",
  "page": "37",
  "difficulty": "Detalle"
 },
 {
  "id": "q038",
  "section": "uso",
  "q": "¿A qué punto se dirige normalmente el chorro?",
  "options": [
   "A la base del fuego",
   "A la punta de la llama",
   "A la superficie superior del humo",
   "Siempre al techo"
  ],
  "correct": 0,
  "why": "Dirigir el agente a la base del combustible ardiendo (p. 37).",
  "page": "37",
  "difficulty": "Detalle"
 },
 {
  "id": "q039",
  "section": "uso",
  "q": "Ante fuego de un gas combustible, ¿qué prioridad cita el manual?",
  "options": [
   "Extender el combustible con un chorro",
   "Romper las conexiones",
   "Soplar aire al foco",
   "Cortar el flujo cuando sea posible y seguro"
  ],
  "correct": 3,
  "why": "El texto destaca el cierre del suministro (p. 37).",
  "page": "37",
  "difficulty": "Detalle"
 },
 {
  "id": "q040",
  "section": "uso",
  "q": "¿Cómo se evita esparcir líquido incendiado al emplear un extintor?",
  "options": [
   "Disparando perpendicular con máxima fuerza",
   "Sacudiendo el recipiente",
   "Aplicando el chorro tangencialmente",
   "Aumentando aporte de aire"
  ],
  "correct": 2,
  "why": "El chorro tangencial limita la dispersión (p. 37).",
  "page": "37",
  "difficulty": "Detalle"
 },
 {
  "id": "q041",
  "section": "uso",
  "q": "En exterior, ¿qué orientación general recomienda el temario?",
  "options": [
   "Viento de frente",
   "Viento a la espalda",
   "Viento lateral obligatorio",
   "Dar la espalda al fuego"
  ],
  "correct": 1,
  "why": "El documento recomienda viento a la espalda (p. 37).",
  "page": "37",
  "difficulty": "Detalle"
 }
];
