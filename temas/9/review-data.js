/* Ejercicios de repaso revisados: enunciados sin pistas, correcciones y referencias al manual. */
const REVIEW_CLASSIFY=[
 {
  "name": "Elegir el detector por su comportamiento",
  "groups": [
   "Termostático",
   "Termovelocimétrico",
   "Óptico de humo",
   "Iónico de humo",
   "De llama",
   "Multisensorial"
  ],
  "items": [
   [
    "Actúa cuando se supera y mantiene una temperatura fijada",
    0
   ],
   [
    "Responde al cambio térmico muy rápido antes del umbral absoluto",
    1
   ],
   [
    "Reconoce pérdida/dispersión de luz al entrar partículas en el sensor",
    2
   ],
   [
    "Detecta alteraciones de una corriente eléctrica provocadas por humo",
    3
   ],
   [
    "Actúa al recibir radiación infrarroja o ultravioleta de una combustión",
    4
   ],
   [
    "Contrasta dos principios físicos antes de decidir la alarma",
    5
   ]
  ],
  "why": "Clasificación funcional de detectores, pp. 8–9."
 },
 {
  "name": "Sistemas de detección: norma asociada",
  "groups": [
   "EN 54-5",
   "EN 54-7",
   "EN 54-10",
   "EN 54-11",
   "EN 54-12",
   "EN 54-20"
  ],
  "items": [
   [
    "Detector de calor puntual",
    0
   ],
   [
    "Detector de humo puntual",
    1
   ],
   [
    "Detector de llama puntual",
    2
   ],
   [
    "Pulsador manual",
    3
   ],
   [
    "Detector de humo lineal",
    4
   ],
   [
    "Detector de humos por aspiración",
    5
   ]
  ],
  "why": "Normas UNE-EN 54 recogidas en las pp. 9–10."
 },
 {
  "name": "Distinguir hidrantes y columna seca de edificio",
  "groups": [
   "Hidrante de columna",
   "Hidrante enterrado",
   "Columna seca interior"
  ],
  "items": [
   [
    "Elemento exterior elevado para conectar las mangueras de abastecimiento",
    0
   ],
   [
    "Marcado CE de producto según UNE-EN 14384",
    0
   ],
   [
    "Toma instalada dentro de arqueta en el suelo",
    1
   ],
   [
    "Marcado CE de producto según UNE-EN 14339",
    1
   ],
   [
    "Tubería galvanizada DN 80, normalmente vacía, en edificio",
    2
   ],
   [
    "Salidas de planta con racores de 45 mm y toma exterior siamesa de 70 mm",
    2
   ]
  ],
  "why": "Hidrantes pp. 16–17; columna seca de edificio pp. 25–26. Los hidrantes de columna pueden ser húmedos o secos."
 },
 {
  "name": "BIE según riesgo industrial",
  "groups": [
   "Bajo",
   "Medio",
   "Alto"
  ],
  "items": [
   [
    "DN25, dos simultáneas, 60 minutos",
    0
   ],
   [
    "DN45, dos simultáneas, 60 minutos",
    1
   ],
   [
    "DN45, tres simultáneas, 90 minutos",
    2
   ],
   [
    "Instalación de BIE en edificio B a partir de 200 m²",
    2
   ],
   [
    "Instalación de BIE en edificio B a partir de 500 m²",
    1
   ],
   [
    "Instalación BIE en edificio C a partir de 1.000 m²",
    1
   ]
  ],
  "why": "Página 23. El requisito tipo A no se subdivide por riesgo; se utiliza como contraste con bajo en este ejercicio."
 },
 {
  "name": "Periodicidad de mantenimiento",
  "groups": [
   "3 meses",
   "6 meses",
   "1 año",
   "5 años"
  ],
  "items": [
   [
    "Hidrante: accesibilidad y señalización",
    0
   ],
   [
    "Hidrante: engrase y maniobra de válvula",
    1
   ],
   [
    "Hidrante: estanquidad de tapones",
    2
   ],
   [
    "Hidrante: cambio de juntas de racores",
    3
   ],
   [
    "BIE: señalización",
    0
   ],
   [
    "BIE: inspección UNE 671-3",
    2
   ],
   [
    "Columna seca: prueba en condiciones de recepción",
    3
   ],
   [
    "Columna seca: tapas, válvulas, accesos",
    1
   ],
   [
    "Suministro: curvas de abastecimiento",
    2
   ]
  ],
  "why": "Tablas de mantenimiento de pp. 20, 24, 27 y 38."
 },
 {
  "name": "Qué instalación corresponde al escenario",
  "groups": [
   "SDA",
   "Hidrante",
   "BIE",
   "Columna seca",
   "Rociadores automáticos",
   "Bomba jockey"
  ],
  "items": [
   [
    "La central recibe señales de humo y dispara sirenas, sin descargar agente",
    0
   ],
   [
    "Un camión conecta manguera a una boca exterior conectada a red urbana",
    1
   ],
   [
    "Ocupantes encuentran armario interior con devanadera y lanza",
    2
   ],
   [
    "Bomberos alimentan la boca siamesa de fachada para actuar en una planta alta",
    3
   ],
   [
    "Una ampolla térmica libera automáticamente descarga de agua desde techo",
    4
   ],
   [
    "Pequeñas pérdidas de presión se compensan sin encender bombas principales",
    5
   ]
  ],
  "why": "Funciones descritas en puntos 1–6 del tema."
 }
];
const REVIEW_ORDER=[
 {
  "name": "Señal de detector a alarma",
  "prompt": "Organiza la cadena de funcionamiento de un SDA, desde la presencia de indicios de incendio.",
  "steps": [
   "El sensor reconoce alteraciones de calor, humo o llama",
   "La conducción transmite la señal al equipo de control",
   "La central procesa la información de detección",
   "Los dispositivos de alarma avisan o se ejecuta una maniobra programada"
  ],
  "why": "Componentes y función de un SDA, pp. 7–8. Se trata de una cadena funcional."
 },
 {
  "name": "Activación de un rociador automático",
  "prompt": "Reconstruye la activación física de la descarga de un rociador térmico.",
  "steps": [
   "El entorno del rociador se calienta por el incendio",
   "El elemento termosensible se dilata",
   "La ampolla u obturador se rompe o libera",
   "El agua comienza a salir por el rociador"
  ],
  "why": "Rociadores térmicos del apartado 6.1, p. 30."
 },
 {
  "name": "Desde la fuente al consumo del agua",
  "prompt": "Ordena las partes del circuito que llevan agua al elemento de extinción en un sistema abastecido mediante bombeo.",
  "steps": [
   "La fuente o depósito dispone del agua de reserva",
   "El conjunto de bombeo proporciona la impulsión necesaria",
   "La red general distribuye el suministro",
   "El hidrante, BIE o rociador recibe el agua"
  ],
  "why": "Sistema de abastecimiento descrito en pp. 37–38. Orden funcional, no secuencia temporal obligatoria."
 }
];
const REVIEW_JUDGE=[
 [
  "La central de detección, por sí sola, sustituye a los dispositivos de descarga de un sistema de extinción automática.",
  false,
  "El SDA detecta y avisa; la extinción requiere otros sistemas (p. 7)."
 ],
 [
  "El pulsador manual debe estar a un recorrido máximo de 25 m desde un origen de evacuación, según el manual.",
  true,
  "RIPCI reproducido en p. 9."
 ],
 [
  "La parte superior del pulsador se ubica entre 80 y 120 cm de altura.",
  true,
  "Valor de p. 9."
 ],
 [
  "Un detector termovelocimétrico responde solo al valor absoluto de temperatura.",
  false,
  "Responde a rapidez de subida de la temperatura (p. 9)."
 ],
 [
  "Los detectores de llama pueden reaccionar a radiación IR, visible o UV.",
  true,
  "Clasificación de p. 9."
 ],
 [
  "Un detector óptico de humos se basa en presencia de gases combustibles exclusivamente.",
  false,
  "Detecta cambios ópticos por las partículas del humo (p. 9)."
 ],
 [
  "La alarma acústica general del tema debe superar los 65 dB.",
  true,
  "Regla indicada en p. 10."
 ],
 [
  "En recintos destinados a dormir, la alarma se evalúa con el mismo umbral acústico que en el resto de ocupaciones.",
  false,
  "En esa situación indica >75 dB (p. 10)."
 ],
 [
  "Un hidrante de columna y otro enterrado se regulan por la misma UNE-EN 14339.",
  false,
  "Columna 14384; bajo tierra 14339 (p. 16)."
 ],
 [
  "Según el manual, a cualquier hidrante urbano debe haber menos de 100 m de recorrido horizontal.",
  true,
  "Límite del p. 17."
 ],
 [
  "El caudal mínimo continuo por boca de hidrante es 500 L/min en el texto.",
  true,
  "Valor citado en p. 17."
 ],
 [
  "Los hidrantes no situados en vía pública deben estar a 2–4 m de la fachada.",
  false,
  "El manual establece 5–15 m (p. 17)."
 ],
 [
  "Una BIE semirrígida utiliza manguera de diámetro interior de 25 mm.",
  true,
  "UNE-EN 671-1 y p. 21."
 ],
 [
  "Una BIE de manguera plana puede tener una longitud máxima de 30 m, según el PDF.",
  false,
  "El PDF fija 20 m plana y 30 m semirrígida (p. 22)."
 ],
 [
  "La distancia máxima entre cada BIE y su más cercana es 50 m.",
  true,
  "Valor de p. 22."
 ],
 [
  "Para BIE de riesgo industrial alto, el manual indica tres unidades simultáneas durante 90 min.",
  true,
  "DN45, 3 y 90, p. 23."
 ],
 [
  "La manguera BIE sin vida útil marcada por fabricante se considera de 20 años.",
  true,
  "Mantenimiento BIE, p. 24."
 ],
 [
  "El racor de toma exterior de columna seca es de 45 mm y el de planta de 70 mm.",
  false,
  "Es a la inversa: fachada 70 mm, planta 45 mm (p. 25)."
 ],
 [
  "En columna seca ascendente hay salidas en plantas pares hasta la octava y en todas desde entonces.",
  true,
  "Distribución del manual p. 25."
 ],
 [
  "La altura del centro de las bocas de columna seca es 0,90 m.",
  true,
  "Punto 4.1, p. 25."
 ],
 [
  "La prueba mínima de columna seca de más de 30 m es 1.470 kPa.",
  false,
  "Más de 30 m: 2.450 kPa; hasta 30 m: 1.470 kPa (p. 26)."
 ],
 [
  "La bomba jockey debe arrancar la principal ante cualquier pequeña pérdida de presión.",
  false,
  "La jockey mantiene presión precisamente para evitar arranques de la principal (p. 29)."
 ],
 [
  "Los rociadores automáticos descritos se abren por aumento térmico.",
  true,
  "Se rompe/libera la ampolla térmica, p. 30."
 ],
 [
  "El sistema de polvo fijo requiere prealarma y retardo para evacuar antes de descargar.",
  true,
  "Medida exigida en p. 32."
 ],
 [
  "El sistema gaseoso solo puede usarse si se garantiza seguridad o evacuación.",
  true,
  "Condición recogida en p. 33."
 ],
 [
  "Un depósito de agua unido directamente a la red, sin equipo de impulsión, representa los tres componentes del abastecimiento que cita el manual.",
  false,
  "Fuentes de agua, equipos de impulsión y red general (p. 37)."
 ],
 [
  "En el documento, UNE 23500 se cita para abastecimiento de agua contra incendios.",
  true,
  "Norma del p. 37."
 ],
 [
  "El mantenimiento anual del suministro incluye comprobar curvas con cada fuente de agua y energía.",
  true,
  "Tabla de p. 38."
 ],
 [
  "El PDF da la misma cifra de detección para industria tipo A productiva y de almacenamiento.",
  false,
  "300 m² producción frente a 150 m² almacenamiento (p. 13)."
 ],
 [
  "El DB-SI que cita el PDF coloca las instalaciones de protección contra incendios en SI 4.",
  true,
  "Seis exigencias y SI 4, p. 11."
 ]
];
const REVIEW_VALUES=[
 {
  "name": "Detectores, pulsadores y alarmas",
  "why": "Cifras de la edición del PDF, con referencia al apartado indicado. Comprobar vigencia de requisitos legales.",
  "items": [
   [
    "¿Cuál es el recorrido máximo desde un origen de evacuación hasta un pulsador manual según el PDF?",
    [
     "15 m",
     "25 m",
     "40 m",
     "50 m"
    ],
    1,
    "25 m de recorrido (p. 9)."
   ],
   [
    "¿Qué altura mínima se establece para la parte superior del pulsador?",
    [
     "60 cm",
     "80 cm",
     "100 cm",
     "120 cm"
    ],
    1,
    "Mínimo 80 cm (p. 9)."
   ],
   [
    "¿Qué altura máxima se establece para la parte superior del pulsador?",
    [
     "100 cm",
     "120 cm",
     "150 cm",
     "180 cm"
    ],
    1,
    "Máximo 120 cm (p. 9)."
   ],
   [
    "¿Qué nivel sonoro mínimo se indica para la alarma general?",
    [
     ">55 dB",
     ">60 dB",
     ">65 dB",
     ">75 dB"
    ],
    2,
    ">65 dB, además de cumplir el diferencial de ruido persistente (p. 10)."
   ],
   [
    "Si la alarma debe despertar ocupantes, ¿qué nivel sonoro indica el manual?",
    [
     ">55 dB",
     ">60 dB",
     ">65 dB",
     ">75 dB"
    ],
    3,
    ">75 dB (p. 10)."
   ],
   [
    "Sin dato del fabricante, ¿qué vida útil se considera para detectores?",
    [
     "5 años",
     "10 años",
     "15 años",
     "20 años"
    ],
    1,
    "10 años supletorios (p. 15)."
   ]
  ]
 },
 {
  "name": "Hidrantes · caudales, distancias y presiones",
  "why": "Cifras de la edición del PDF, con referencia al apartado indicado. Comprobar vigencia de requisitos legales.",
  "items": [
   [
    "¿Qué recorrido máximo horizontal se indica hasta un hidrante urbano?",
    [
     "<40 m",
     "<60 m",
     "<100 m",
     "<150 m"
    ],
    2,
    "Zona urbana: menos de 100 m (p. 17)."
   ],
   [
    "¿Qué recorrido máximo se indica hasta un hidrante fuera de zona urbana?",
    [
     "<40 m",
     "<60 m",
     "<100 m",
     "<150 m"
    ],
    0,
    "Resto: menos de 40 m (p. 17)."
   ],
   [
    "¿Qué caudal mínimo continuo se cita por boca de hidrante?",
    [
     "200 L/min",
     "400 L/min",
     "500 L/min",
     "800 L/min"
    ],
    2,
    "Al menos 500 L/min por boca (p. 17)."
   ],
   [
    "¿Qué presión mínima cita el texto cuando el hidrante solo sirve para llenar camiones urbanos?",
    [
     "100 kPa",
     "300 kPa",
     "500 kPa",
     "1.470 kPa"
    ],
    0,
    "100 kPa (p. 17)."
   ],
   [
    "¿Qué presión mínima establece para otros usos del hidrante?",
    [
     "100 kPa",
     "300 kPa",
     "500 kPa",
     "1.470 kPa"
    ],
    2,
    "500 kPa (p. 17)."
   ],
   [
    "Si el hidrante no está en vía pública, ¿qué separación perpendicular a fachada indica el PDF?",
    [
     "1–3 m",
     "3–5 m",
     "5–15 m",
     "15–30 m"
    ],
    2,
    "Entre 5 y 15 m (p. 17)."
   ]
  ]
 },
 {
  "name": "BIE · instalación y mangueras",
  "why": "Cifras de la edición del PDF, con referencia al apartado indicado. Comprobar vigencia de requisitos legales.",
  "items": [
   [
    "¿Qué longitud máxima de manguera plana indica el manual para una BIE?",
    [
     "15 m",
     "20 m",
     "25 m",
     "30 m"
    ],
    1,
    "Plana: 20 m (p. 22)."
   ],
   [
    "¿Qué longitud máxima de manguera semirrígida indica el manual para una BIE?",
    [
     "15 m",
     "20 m",
     "25 m",
     "30 m"
    ],
    3,
    "Semirrígida: 30 m (p. 22)."
   ],
   [
    "¿Qué separación máxima permite entre BIE y BIE más próxima?",
    [
     "20 m",
     "30 m",
     "50 m",
     "60 m"
    ],
    2,
    "50 m (p. 22)."
   ],
   [
    "¿Cuál es la altura máxima de la boquilla/válvula de una BIE?",
    [
     "0,90 m",
     "1,20 m",
     "1,50 m",
     "1,80 m"
    ],
    2,
    "1,50 m (p. 21–22)."
   ],
   [
    "¿A qué distancia máxima de una salida de sector se coloca una BIE?",
    [
     "5 m",
     "10 m",
     "15 m",
     "25 m"
    ],
    0,
    "5 m (p. 22)."
   ],
   [
    "Para riesgo industrial alto, ¿qué simultaneidad de BIE exige el PDF?",
    [
     "1 BIE",
     "2 BIE",
     "3 BIE",
     "4 BIE"
    ],
    2,
    "3 BIE simultáneas y 90 min de autonomía (p. 23)."
   ],
   [
    "Sin indicación del fabricante, ¿qué vida útil se cita para mangueras de BIE?",
    [
     "5 años",
     "10 años",
     "15 años",
     "20 años"
    ],
    3,
    "20 años (p. 24)."
   ]
  ]
 },
 {
  "name": "Columna seca · diámetros y pruebas",
  "why": "Cifras de la edición del PDF, con referencia al apartado indicado. Comprobar vigencia de requisitos legales.",
  "items": [
   [
    "¿De qué diámetro son los racores de la toma siamesa de fachada?",
    [
     "25 mm",
     "45 mm",
     "70 mm",
     "100 mm"
    ],
    2,
    "70 mm (p. 25)."
   ],
   [
    "¿Qué diámetro tienen los racores de las salidas de plantas?",
    [
     "25 mm",
     "45 mm",
     "70 mm",
     "100 mm"
    ],
    1,
    "45 mm (p. 25)."
   ],
   [
    "¿A qué altura se sitúa el centro de las bocas de columna seca?",
    [
     "0,70 m",
     "0,90 m",
     "1,20 m",
     "1,50 m"
    ],
    1,
    "0,90 m (p. 25)."
   ],
   [
    "¿Qué presión mínima se exige en prueba de columna hasta 30 m de altura?",
    [
     "500 kPa",
     "1.000 kPa",
     "1.470 kPa",
     "2.450 kPa"
    ],
    2,
    "1.470 kPa durante al menos 2 horas sin fugas (p. 26)."
   ],
   [
    "¿Qué presión mínima se exige en prueba de columna de más de 30 m?",
    [
     "500 kPa",
     "1.000 kPa",
     "1.470 kPa",
     "2.450 kPa"
    ],
    3,
    "2.450 kPa durante al menos 2 horas sin fugas (p. 26)."
   ],
   [
    "¿Cuál es la duración mínima de la prueba de presión?",
    [
     "30 min",
     "60 min",
     "90 min",
     "120 min"
    ],
    3,
    "Al menos 2 horas (120 minutos), p. 26."
   ]
  ]
 },
 {
  "name": "Periodicidades de mantenimiento",
  "why": "Cifras de la edición del PDF, con referencia al apartado indicado. Comprobar vigencia de requisitos legales.",
  "items": [
   [
    "¿Cada cuánto indica el PDF cambiar las juntas de los racores de hidrantes?",
    [
     "3 meses",
     "6 meses",
     "1 año",
     "5 años"
    ],
    3,
    "Cada 5 años (p. 20)."
   ],
   [
    "¿Cada cuánto revisar engrase y maniobra de hidrantes?",
    [
     "3 meses",
     "6 meses",
     "1 año",
     "5 años"
    ],
    1,
    "Cada 6 meses (p. 20)."
   ],
   [
    "¿Cada cuánto figura la señalización de BIE?",
    [
     "3 meses",
     "6 meses",
     "1 año",
     "5 años"
    ],
    0,
    "Trimestral (p. 24)."
   ],
   [
    "¿Cada cuánto se comprueba accesibilidad y maniobra de columna seca?",
    [
     "3 meses",
     "6 meses",
     "1 año",
     "5 años"
    ],
    1,
    "Cada 6 meses (p. 27)."
   ],
   [
    "¿Cada cuánto se ensaya la columna seca en condiciones de recepción?",
    [
     "3 meses",
     "6 meses",
     "1 año",
     "5 años"
    ],
    3,
    "Cada 5 años (p. 27)."
   ],
   [
    "¿Cada cuánto señala el manual que se prueban las curvas de suministro con fuentes de agua y energía?",
    [
     "3 meses",
     "6 meses",
     "1 año",
     "5 años"
    ],
    2,
    "Anual (p. 38)."
   ]
  ]
 }
];
const REVIEW_MATCH_EXTRA=[
 {
  "title": "Revisión de equipos: intervenciones clave",
  "pairs": [
   [
    "SDA anual",
    "Prueba individual de detectores"
   ],
   [
    "Hidrante semestral",
    "Engrase y maniobra"
   ],
   [
    "BIE quinquenal",
    "Manguera UNE-EN 671-3"
   ],
   [
    "Columna seca quinquenal",
    "Ensayo en condiciones recepción"
   ],
   [
    "Extinción fija trimestral",
    "Boquillas libres de obstáculos"
   ],
   [
    "Rociadores 25 años",
    "Anexo K UNE-EN 12845"
   ],
   [
    "Abastecimiento anual",
    "Curva con fuentes de agua y energía"
   ]
  ]
 },
 {
  "title": "Sistemas fijos y normas UNE",
  "pairs": [
   [
    "UNE 23500",
    "Abastecimiento de agua PCI"
   ],
   [
    "UNE-EN 13565-2",
    "Diseño de espuma física fija"
   ],
   [
    "UNE-EN 13565-1",
    "Componentes de espuma fija"
   ],
   [
    "UNE-EN 671-1",
    "BIE semirrígida"
   ],
   [
    "UNE-EN 671-2",
    "BIE plana"
   ],
   [
    "UNE-EN 14972-1:2021",
    "Agua nebulizada"
   ],
   [
    "UNE-EN 12845",
    "Inspecciones de rociadores"
   ]
  ]
 }
];
for(const item of REVIEW_MATCH_EXTRA)if(!MATCH_SETS.some(s=>s.title===item.title))MATCH_SETS.push(item);
