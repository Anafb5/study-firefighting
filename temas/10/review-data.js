/* Repaso del Tema 10. Evita preguntas con la solución escrita en el enunciado. */
const REVIEW_CLASSIFY=[
 {
  "name": "Capacidad de paso y terreno",
  "groups": [
   "1 · Urbano",
   "2 · Rural",
   "3 · Todoterreno"
  ],
  "items": [
   [
    "BUL",
    0
   ],
   [
    "BUP",
    0
   ],
   [
    "BRL",
    1
   ],
   [
    "BRP",
    1
   ],
   [
    "BFL",
    2
   ],
   [
    "BFP",
    2
   ],
   [
    "Vehículo de extinción pensado para pistas poco accidentadas",
    1
   ],
   [
    "Autobomba que debe poder desplazarse campo a través",
    2
   ]
  ],
  "why": "Según capacidad de paso, p. 9, y fichas de autobombas, pp. 20–27."
 },
 {
  "name": "Reconocer el vehículo por su cisterna",
  "groups": [
   "800 L",
   "2.400 L",
   "3.200 L",
   "5.500 L",
   "8.000 L"
  ],
  "items": [
   [
    "Bomba urbana ligera (BUL)",
    0
   ],
   [
    "Bomba rural ligera (BRL)",
    0
   ],
   [
    "Bomba rural pesada (BRP)",
    1
   ],
   [
    "Bomba forestal pesada (BFP)",
    1
   ],
   [
    "Bomba urbana pesada (BUP)",
    2
   ],
   [
    "Bomba nodriza ligera (BNL)",
    3
   ],
   [
    "Bomba nodriza pesada (BNP)",
    4
   ]
  ],
  "why": "Capacidades mínimas del PDF, pp. 20–29; la forestal ligera se estudia aparte (300–600 L)."
 },
 {
  "name": "Funciones de vehículos de apoyo",
  "groups": [
   "Mando",
   "Comunicación",
   "Inspección",
   "Suministros",
   "Carga pesada"
  ],
  "items": [
   [
    "UMJ",
    0
   ],
   [
    "UMC",
    1
   ],
   [
    "UIV",
    2
   ],
   [
    "UIS",
    3
   ],
   [
    "UTP",
    4
   ],
   [
    "Vehículo cuyo equipo permite ejercer jefatura in situ",
    0
   ],
   [
    "Vehículo para mantener operativos víveres y suministros",
    3
   ]
  ],
  "why": "Clasificación y cometidos del apartado 4.8, pp. 32–33."
 },
 {
  "name": "Tipos de intervención especial",
  "groups": [
   "Acuática",
   "Altura",
   "Salvamento terrestre",
   "Agente extintor especial"
  ],
  "items": [
   [
    "FEA",
    0
   ],
   [
    "BSA",
    0
   ],
   [
    "AEA",
    1
   ],
   [
    "ABE",
    1
   ],
   [
    "FSV",
    2
   ],
   [
    "FER",
    2
   ],
   [
    "VAU",
    3
   ],
   [
    "VMA",
    3
   ]
  ],
  "why": "Familias y siglas de las pp. 10–11 y 30–36."
 },
 {
  "name": "Fases de seguridad en vehículo de altura",
  "groups": [
   "Antes de salir",
   "Desplazamiento",
   "Intervención",
   "Después"
  ],
  "items": [
   [
    "Verificar que los apoyos hidráulicos están recogidos",
    0
   ],
   [
    "Confirmar desconexión de toma de fuerza",
    0
   ],
   [
    "Vigilar el gálibo al aproximarse a un túnel",
    1
   ],
   [
    "Prever el barrido de la escalera al girar",
    1
   ],
   [
    "Acordonar el perímetro de operación",
    2
   ],
   [
    "Accionar freno de estacionamiento en el emplazamiento",
    2
   ],
   [
    "Inspeccionar la escalera por posibles daños de maniobra",
    3
   ],
   [
    "Recoger el material y cerrar armarios",
    3
   ]
  ],
  "why": "Lista operativa del apartado 4.9, pp. 34–35."
 }
];
const REVIEW_ORDER=[
 {
  "name": "Seguridad de una autoescalera en servicio",
  "prompt": "Ordena actuaciones de una salida con autoescalera, desde la preparación hasta finalizar el servicio.",
  "steps": [
   "Verificar que el equipo, apoyos y cesta están correctamente recogidos",
   "Prestar atención al gálibo y al radio de giro durante el recorrido",
   "Estacionar, asegurar frenos y señalizar el perímetro de intervención",
   "Recoger el equipo y comprobar daños en la escalera, apoyos y conexiones"
  ],
  "why": "Procedimiento antes, durante el desplazamiento, en la intervención y al terminar, apartado 4.9, pp. 34–35."
 },
 {
  "name": "Circuito hidráulico de una autobomba",
  "prompt": "Organiza la cadena funcional del agua, desde su origen hasta la lanza de ataque.",
  "steps": [
   "Abastecer desde depósito, red o aspiración",
   "Conducir el agua a la bomba centrífuga",
   "Proporcionarle presión y caudal por la bomba",
   "Enviar el agua por salidas y mangueras hacia las lanzas"
  ],
  "why": "Aspiración/abastecimiento, bombeo e impulsión según apartado 3.5, pp. 14–15. Es una secuencia funcional, no protocolo de actuación en emergencias."
 }
];
const REVIEW_JUDGE=[
 [
  "La clase de paso 3 corresponde al vehículo urbano.",
  false,
  "Categoría 1 urbano; 2 rural; 3 todoterreno (p. 9)."
 ],
 [
  "MTC se define incluyendo al personal y los pasajeros.",
  true,
  "Es la masa efectiva más la carga normalizada (p. 8)."
 ],
 [
  "El vehículo medio de la tabla de 2011 tiene MTC 7,5–16 t.",
  true,
  "Rango de la UNE-EN 1846-1:2011 citado (p. 8)."
 ],
 [
  "En la edición de 1998, el superior/pesado empezaba por encima de 16 t.",
  false,
  "En 1998, pesado S por encima de 14 t (p. 8)."
 ],
 [
  "La instalación eléctrica de las autobombas se describe con tensión nominal de 24 V.",
  true,
  "Dato del apartado 3.1.2, p. 12."
 ],
 [
  "La boca de aspiración citada en el PDF tiene diámetro de 70 mm.",
  false,
  "Aspiración 100 mm; llenado de cisterna habitualmente 70 mm (p. 14)."
 ],
 [
  "La bomba centrífuga del manual aspira hasta 7,5 m.",
  true,
  "Requisito de aspiración citado con UNE 23900:1983 (p. 14)."
 ],
 [
  "El código de bomba c significa «solo baja presión».",
  false,
  "b representa baja; c indica combinada (p. 15)."
 ],
 [
  "La dotación A es complementaria y pesa unos 200 kg.",
  false,
  "La A es imprescindible, unos 437 kg; la B complementaria, unos 200 kg (pp. 16–18)."
 ],
 [
  "La dotación B incluye dos ERA de 30 minutos mínimos.",
  true,
  "Dos ERA de aire comprimido y dos botellas de recambio (p. 18)."
 ],
 [
  "El peso considerado de un bombero equipado es 90 kg.",
  true,
  "Definición de carga normalizada, p. 19."
 ],
 [
  "La BUP lleva una cisterna mínima de 800 litros.",
  false,
  "BUP 3.200 L y BUL 800 L (pp. 20–21)."
 ],
 [
  "BRP y BFP se clasifican con la misma categoría de paso.",
  false,
  "BRP categoría 2; BFP categoría 3 (pp. 24 y 27)."
 ],
 [
  "BFL y BFP son de categoría de paso 3.",
  true,
  "Ambas se definen como todoterreno (pp. 26–27)."
 ],
 [
  "La BNP tiene cisterna mínima de 8.000 L, según el manual.",
  true,
  "Capacidad indicada en p. 29."
 ],
 [
  "VAU significa vehículo de múltiples agentes.",
  false,
  "VAU: agente único; VMA: múltiples agentes (pp. 10 y 30)."
 ],
 [
  "Los vehículos VMA suelen emplearse en aeropuertos.",
  true,
  "El texto indica uso frecuente en aeropuertos (p. 30)."
 ],
 [
  "La UIV se dedica a avituallamiento y transporte de ropa.",
  false,
  "Eso corresponde a UIS; UIV inspección y vigilancia (p. 32)."
 ],
 [
  "Los hovercraft se desplazan sobre un colchón de aire.",
  true,
  "Característica en el apartado 4.11.2, p. 36."
 ],
 [
  "El artículo 68.2 citado contempla usar solo señal luminosa en determinadas circunstancias.",
  true,
  "El temario cita el supuesto cuando omitir la señal acústica no entraña peligro (p. 37)."
 ],
 [
  "Los vehículos de emergencia pueden desobedecer órdenes de agentes de tráfico.",
  false,
  "El apartado 5.2 exige respetar las órdenes en todo caso (p. 38)."
 ],
 [
  "Según el PDF, el límite de alcohol en aire es 0,15 mg/L.",
  true,
  "Cifra del manual, pendiente de verificación de vigencia (p. 40)."
 ]
];
const REVIEW_VALUES=[
 {
  "name": "Capacidades mínimas de las autobombas",
  "why": "Fichas técnicas del Tema 10, pp. 20–29. Cifras de esta edición del manual.",
  "items": [
   [
    "Según la ficha, ¿cuál es la cisterna mínima de BUL?",
    [
     "2.400 L",
     "800 L",
     "3.200 L",
     "5.500 L"
    ],
    1,
    "BUL: 800 L (pp. 20–29)."
   ],
   [
    "Según la ficha, ¿cuál es la cisterna mínima de BRL?",
    [
     "800 L",
     "2.400 L",
     "3.200 L",
     "5.500 L"
    ],
    0,
    "BRL: 800 L (pp. 20–29)."
   ],
   [
    "Según la ficha, ¿cuál es la cisterna mínima de BRP?",
    [
     "800 L",
     "3.200 L",
     "5.500 L",
     "2.400 L"
    ],
    3,
    "BRP: 2.400 L (pp. 20–29)."
   ],
   [
    "Según la ficha, ¿cuál es la cisterna mínima de BFP?",
    [
     "800 L",
     "3.200 L",
     "2.400 L",
     "5.500 L"
    ],
    2,
    "BFP: 2.400 L (pp. 20–29)."
   ],
   [
    "Según la ficha, ¿cuál es la cisterna mínima de BUP?",
    [
     "800 L",
     "3.200 L",
     "2.400 L",
     "5.500 L"
    ],
    1,
    "BUP: 3.200 L (pp. 20–29)."
   ],
   [
    "Según la ficha, ¿cuál es la cisterna mínima de BNL?",
    [
     "5.500 L",
     "800 L",
     "2.400 L",
     "3.200 L"
    ],
    0,
    "BNL: 5.500 L (pp. 20–29)."
   ],
   [
    "Según la ficha, ¿cuál es la cisterna mínima de BNP?",
    [
     "800 L",
     "2.400 L",
     "3.200 L",
     "8.000 L"
    ],
    3,
    "BNP: 8.000 L (pp. 20–29)."
   ]
  ]
 },
 {
  "name": "Prestaciones de vehículos",
  "why": "Velocidad máxima y potencia/masa según fichas de autobombas pp. 20–29.",
  "items": [
   [
    "¿Qué velocidad máxima indica el manual para BUL?",
    [
     "80 km/h",
     "85 km/h",
     "90 km/h",
     "100 km/h"
    ],
    2,
    "BUL: 90 km/h (p. 20)."
   ],
   [
    "¿Qué velocidad máxima indica el manual para BUP?",
    [
     "80 km/h",
     "85 km/h",
     "90 km/h",
     "100 km/h"
    ],
    3,
    "BUP: 100 km/h (p. 21)."
   ],
   [
    "¿Qué velocidad máxima indica el manual para BRL y BRP?",
    [
     "80 km/h",
     "85 km/h",
     "90 km/h",
     "100 km/h"
    ],
    0,
    "BRL y BRP: 80 km/h (pp. 23–24)."
   ],
   [
    "¿Qué velocidad máxima indica el manual para BFL y BFP?",
    [
     "80 km/h",
     "85 km/h",
     "90 km/h",
     "100 km/h"
    ],
    1,
    "Forestales: 85 km/h (pp. 26–27)."
   ],
   [
    "¿Qué relación potencia/masa figura para BRP?",
    [
     "8 CV/t",
     "10 CV/t",
     "15 CV/t",
     "20 CV/t"
    ],
    1,
    "BRP: 10 CV/t (p. 24)."
   ],
   [
    "¿Qué relación potencia/masa indica el manual para BNL/BNP?",
    [
     "8 CV/t",
     "10 CV/t",
     "15 CV/t",
     "20 CV/t"
    ],
    0,
    "Nodrizas: 8 CV/t (pp. 28–29)."
   ]
  ]
 },
 {
  "name": "Componentes y dotaciones",
  "why": "Apartados 3.1, 3.5 y 3.6 del manual, pp. 12–18.",
  "items": [
   [
    "¿Qué tensión nominal corresponde al equipo eléctrico?",
    [
     "12 V",
     "24 V",
     "48 V",
     "230 V"
    ],
    1,
    "24 voltios (p. 12)."
   ],
   [
    "¿Qué diámetro normal de boca de aspiración se indica?",
    [
     "25 mm",
     "45 mm",
     "70 mm",
     "100 mm"
    ],
    3,
    "100 mm (p. 14)."
   ],
   [
    "¿Qué diámetro normal de boca de llenado de cisterna se indica?",
    [
     "25 mm",
     "45 mm",
     "70 mm",
     "100 mm"
    ],
    2,
    "70 mm (p. 14)."
   ],
   [
    "¿Hasta qué profundidad indica el manual que aspira la bomba?",
    [
     "5 m",
     "7,5 m",
     "10 m",
     "12 m"
    ],
    1,
    "7,5 m (p. 14)."
   ],
   [
    "¿Qué peso estimado atribuye el manual a la dotación tipo A?",
    [
     "90 kg",
     "200 kg",
     "437 kg",
     "750 kg"
    ],
    2,
    "Tipo A: 437 kg (p. 16)."
   ],
   [
    "¿Qué peso estimado atribuye el manual a la dotación tipo B?",
    [
     "90 kg",
     "200 kg",
     "437 kg",
     "750 kg"
    ],
    1,
    "Tipo B: 200 kg (p. 18)."
   ]
  ]
 },
 {
  "name": "Códigos y presión de las bombas",
  "why": "Notación del apartado 3.5.2, p. 15.",
  "items": [
   [
    "En B 16/8, ¿qué caudal nominal representa la cifra 16?",
    [
     "160 L/min",
     "800 L/min",
     "1.600 L/min",
     "2.400 L/min"
    ],
    2,
    "16 × 100 = 1.600 L/min (p. 15)."
   ],
   [
    "En B 16/8, ¿qué presión nominal representa la cifra 8?",
    [
     "8 bar",
     "16 bar",
     "30 bar",
     "35 bar"
    ],
    0,
    "8 bar (p. 15)."
   ],
   [
    "En c 2/30, ¿qué caudal nominal representa la cifra 2?",
    [
     "20 L/min",
     "200 L/min",
     "800 L/min",
     "2.000 L/min"
    ],
    1,
    "2 × 100 = 200 L/min (p. 15)."
   ],
   [
    "En c 2/30, ¿qué presión nominal indica el manual?",
    [
     "8 bar",
     "16 bar",
     "30 bar",
     "35 bar"
    ],
    2,
    "30 bar (p. 15)."
   ]
  ]
 }
];
const REVIEW_MATCH_EXTRA=[
 {
  "title": "Abreviaturas de rescate y agua",
  "pairs": [
   [
    "FSV",
    "Furgón salvamentos varios"
   ],
   [
    "AMB",
    "Ambulancia"
   ],
   [
    "FEA",
    "Furgón equipo acuático"
   ],
   [
    "FER",
    "Furgón escalada/espeleología"
   ],
   [
    "BSA",
    "Barca salvamento"
   ],
   [
    "BEA",
    "Barca extinción"
   ],
   [
    "HSR",
    "Helicóptero salvamento"
   ],
   [
    "AVR",
    "Avión reconocimiento"
   ]
  ]
 },
 {
  "title": "Autobombas: capacidad y zona",
  "pairs": [
   [
    "BUL",
    "Urbana ligera: 800 L"
   ],
   [
    "BUP",
    "Urbana pesada: 3.200 L"
   ],
   [
    "BRL",
    "Rural ligera: 800 L"
   ],
   [
    "BRP",
    "Rural pesada: 2.400 L"
   ],
   [
    "BFL",
    "Forestal ligera: 300–600 L"
   ],
   [
    "BFP",
    "Forestal pesada: 2.400 L"
   ],
   [
    "BNL",
    "Nodriza ligera: 5.500 L"
   ],
   [
    "BNP",
    "Nodriza pesada: 8.000 L"
   ]
  ]
 },
 {
  "title": "Tipos de agentes especiales",
  "pairs": [
   [
    "VAU",
    "Agente único"
   ],
   [
    "VMA",
    "Múltiples agentes"
   ],
   [
    "CO₂",
    "Fuegos con riesgo eléctrico"
   ],
   [
    "Polvo ABC",
    "Propulsión por nitrógeno"
   ],
   [
    "Absorbentes",
    "Áridos ante derrames"
   ],
   [
    "Espuma",
    "Baja, media y alta expansión"
   ],
   [
    "BCA",
    "Autobomba cisterna de agua"
   ],
   [
    "BCE",
    "Autobomba cisterna de espuma"
   ]
  ]
 },
 {
  "title": "Variables, unidades y valores",
  "pairs": [
   [
    "MTC",
    "Masa efectiva con carga normalizada"
   ],
   [
    "MMA",
    "Máximo peso autorizado"
   ],
   [
    "Caudal",
    "Litros por minuto"
   ],
   [
    "Presión",
    "Bar"
   ],
   [
    "Cuentahoras",
    "Horas de funcionamiento de bomba"
   ],
   [
    "Voltaje del vehículo",
    "24 voltios"
   ],
   [
    "Aspiración",
    "Hasta 7,5 m"
   ],
   [
    "Carga de bombero",
    "90 kg equipado"
   ]
  ]
 }
];
for(const item of REVIEW_MATCH_EXTRA)if(!MATCH_SETS.some(s=>s.title===item.title))MATCH_SETS.push(item);
