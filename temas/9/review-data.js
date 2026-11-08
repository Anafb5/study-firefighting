/* Tema 9 · ejercicio activo a partir del documento aportado. Valores normativos del manual: verificar vigencia. */
const REVIEW_CLASSIFY=[
 {
  "name": "Tipos de detectores y señal",
  "groups": [
   "Calor",
   "Humo",
   "Gases",
   "Llamas",
   "Multisensor"
  ],
  "items": [
   [
    "Temperatura alcanza el valor crítico",
    0
   ],
   [
    "Aumento brusco de temperatura",
    0
   ],
   [
    "Partículas producen dispersión óptica",
    1
   ],
   [
    "Humo altera una corriente eléctrica",
    1
   ],
   [
    "Sustancias gaseosas de la combustión",
    2
   ],
   [
    "Radiación ultravioleta/infrarroja",
    3
   ],
   [
    "Dos señales físicas en un único detector",
    4
   ],
   [
    "Detector óptico de oscurecimiento",
    1
   ]
  ],
  "why": "Clasificación de los detectores del manual, pp. 8–9."
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
  "name": "Características de los tipos de hidrante",
  "groups": [
   "Columna húmeda",
   "Columna seca",
   "Bajo tierra",
   "Sistema interior de columna seca"
  ],
  "items": [
   [
    "El cuerpo visible está lleno de agua",
    0
   ],
   [
    "La columna del hidrante no permanece llena de agua",
    1
   ],
   [
    "Instalado en arqueta enterrada",
    2
   ],
   [
    "Tubería DN 80 en edificio alimentada desde fachada",
    3
   ],
   [
    "UNE-EN 14339 y marcado CE",
    2
   ],
   [
    "UNE-EN 14384 y marcado CE",
    0
   ],
   [
    "Salida de planta con racores de 45 mm",
    3
   ]
  ],
  "why": "Hidrantes pp. 16–17 y columnas secas pp. 25–26. Para UNE-EN 14384 se incluyen tanto columnas húmedas como secas: la clasificación en este ejercicio utiliza el ejemplo húmedo."
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
    "Tipo B con umbral instalación ≥200 m²",
    2
   ],
   [
    "Tipo C con umbral instalación ≥1.000 m²",
    1
   ],
   [
    "Tipo A ≥300 m² (sin subdivisión indicada)",
    0
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
    "Avisar mediante humo y alarma centralizada",
    0
   ],
   [
    "Conectar manguera a toma exterior de gran caudal",
    1
   ],
   [
    "Usar manguera interior desde armario",
    2
   ],
   [
    "Alimentar las plantas desde el exterior con racores siameses",
    3
   ],
   [
    "Descargar agua por cápsula termosensible rota",
    4
   ],
   [
    "Compensar pequeñas pérdidas de presión sin arrancar bomba principal",
    5
   ]
  ],
  "why": "Funciones descritas en puntos 1–6 del tema."
 }
];
const REVIEW_ORDER=[
 {
  "name": "Cadena funcional de detección y alarma",
  "steps": [
   "Los sensores identifican indicios del incendio",
   "La señal llega a la central por la instalación",
   "El equipo de control procesa la señal",
   "Se activa la alarma / comunicación o extinción programada"
  ],
  "why": "Diferencia entre detector, conducción, central y salida de alarma, pp. 7–8."
 },
 {
  "name": "Activación de rociador automático",
  "steps": [
   "El incendio produce aumento de temperatura",
   "El líquido termosensible de la ampolla se dilata",
   "La cápsula o elemento obturador se rompe o libera",
   "El agua se descarga por el rociador"
  ],
  "why": "Funcionamiento descrito en p. 30."
 },
 {
  "name": "Escala de revisión: de menor a mayor periodicidad",
  "steps": [
   "Comprobación trimestral",
   "Comprobación semestral",
   "Comprobación anual",
   "Comprobación quinquenal"
  ],
  "why": "Estructura de las tablas de mantenimiento del tema, pp. 14–38."
 },
 {
  "name": "Proceso de extinción mediante espuma física",
  "steps": [
   "Suministro desde la red de tuberías",
   "Aportación de espumógeno almacenado",
   "Dosificación del concentrado",
   "Descarga por boquillas de aplicación"
  ],
  "why": "Componentes de un sistema fijo de espuma, p. 32. Es un orden conceptual, no el esquema obligatorio de todas las instalaciones."
 },
 {
  "name": "De abastecimiento a aplicación de agua",
  "steps": [
   "Fuente o reserva de agua",
   "Equipo de impulsión",
   "Red general contra incendios",
   "Instalación receptora: BIE/hidrante/rociador"
  ],
  "why": "Conjunto fuente, impulsión y red del punto 7, p. 37."
 }
];
const REVIEW_JUDGE=[
 [
  "El sistema de detección tiene por cometido principal extinguir el incendio directamente.",
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
  "En el manual, una alarma para ocupantes que duermen debe superar 60 dB.",
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
  "El abastecimiento de agua se compone solo del depósito, sin bombas ni red.",
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
