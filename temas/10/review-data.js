/* Tema 10 · Ejercicios de clasificación, secuencias y afirmaciones según PDF aportado. */
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
    "BUL — bomba urbana ligera",
    0
   ],
   [
    "BUP — bomba urbana pesada",
    0
   ],
   [
    "BRL — bomba rural ligera",
    1
   ],
   [
    "BRP — bomba rural pesada",
    1
   ],
   [
    "BFL — bomba forestal ligera",
    2
   ],
   [
    "BFP — bomba forestal pesada",
    2
   ],
   [
    "Carretera practicable",
    0
   ],
   [
    "Campo a través",
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
    "UMJ: traslado de jefatura",
    0
   ],
   [
    "UMC: coordinación con emisoras y planos",
    1
   ],
   [
    "UIV: análisis de riesgos y vigilancia",
    2
   ],
   [
    "UIS: avituallamiento en siniestro largo",
    3
   ],
   [
    "UTP: transporte de material pesado",
    4
   ],
   [
    "UMJ: desplazar mandos",
    0
   ],
   [
    "UIS: ropa y material de apoyo",
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
    "FEA — rescate subacuático",
    0
   ],
   [
    "BSA — barca de salvamento",
    0
   ],
   [
    "AEA — autoescalera automática",
    1
   ],
   [
    "ABE — autobrazo extensible",
    1
   ],
   [
    "FSV — furgón de salvamentos varios",
    2
   ],
   [
    "FER — espeleología y montaña",
    2
   ],
   [
    "VAU — agente extintor único",
    3
   ],
   [
    "VMA — agentes múltiples",
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
    "Comprobar cesta abatida y escalera recogida",
    0
   ],
   [
    "Toma de fuerza auxiliar desconectada",
    0
   ],
   [
    "Prestar atención al radio de giro y altura",
    1
   ],
   [
    "Comprobar limitaciones en túneles",
    1
   ],
   [
    "Señalizar y acordonar la zona de trabajo",
    2
   ],
   [
    "Accionar los frenos de estacionamiento",
    2
   ],
   [
    "Revisar escalera por posibles daños",
    3
   ],
   [
    "Cerrar los armarios tras recoger el equipo",
    3
   ]
  ],
  "why": "Lista operativa del apartado 4.9, pp. 34–35."
 }
];
const REVIEW_ORDER=[
 {
  "name": "Seguridad en vehículos de altura",
  "steps": [
   "Comprobar equipos y escalera antes de salir",
   "Desplazarse valorando radio de giro y altura",
   "Estacionar, señalizar y acordonar en la intervención",
   "Recoger, revisar la escalera y guardar material"
  ],
  "why": "Cuatro momentos del apartado 4.9, pp. 34–35."
 },
 {
  "name": "Masa: tabla UNE-EN 1846-1:2011",
  "steps": [
   "Ligero: 3–7,5 t",
   "Medio: 7,5–16 t",
   "Superior: más de 16 t"
  ],
  "why": "Clases ordenadas por MTC, p. 8."
 },
 {
  "name": "Capacidad de paso: menos a más terreno",
  "steps": [
   "Categoría 1: urbano",
   "Categoría 2: rural",
   "Categoría 3: todoterreno"
  ],
  "why": "Categorías de paso por capacidad para circular campo a través, p. 9."
 },
 {
  "name": "Cisternas: capacidad creciente",
  "steps": [
   "BUL / BRL: 800 L",
   "BRP / BFP: 2.400 L",
   "BUP: 3.200 L",
   "BNL: 5.500 L",
   "BNP: 8.000 L"
  ],
  "why": "Capacidades mínimas de las fichas de pp. 20–29; se excluye BFL, descrita con 300–600 L."
 },
 {
  "name": "Procedimiento hidráulico de autobomba",
  "steps": [
   "Elegir fuente de agua: cisterna, red o aspiración",
   "Alimentar la bomba centrífuga",
   "Generar presión y caudal en la bomba",
   "Impulsar el agua por salidas hacia lanzas"
  ],
  "why": "Secuencia conceptual del apartado 3.5, pp. 14–15."
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
for(const item of REVIEW_MATCH_EXTRA)if(!MATCH_SETS.some(set=>set.title===item.title))MATCH_SETS.push(item);
