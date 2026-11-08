/* Tema 10 · Volumen IV · 1.ª parte técnica. Fuente única: PDF facilitado (46 págs., páginas impresas en referencias). No revisión legal de vigencia. */
const SECTIONS=[
 {
  "id": "clasificacion",
  "n": "01",
  "title": "Descripción y clasificación",
  "sub": "Masa total en carga, capacidad de paso y función",
  "pages": "8–9"
 },
 {
  "id": "nomenclatura",
  "n": "02",
  "title": "Nomenclatura de vehículos",
  "sub": "Siglas oficiales y familias de vehículos",
  "pages": "10–11"
 },
 {
  "id": "componentes",
  "n": "03",
  "title": "Componentes y dotaciones",
  "sub": "Chasis, bomba, carrocería, control y material",
  "pages": "12–18"
 },
 {
  "id": "vehiculos",
  "n": "04",
  "title": "Vehículos y equipamientos",
  "sub": "Autobombas, rescate, altura, auxiliares y aeronaves",
  "pages": "19–36"
 },
 {
  "id": "circulacion",
  "n": "05",
  "title": "Reglamento de circulación",
  "sub": "Señales, prioridad, velocidad y responsabilidad",
  "pages": "37–40"
 }
];
const TOPICS=[
 {
  "id": "1-1",
  "section": "clasificacion",
  "number": "1.1",
  "title": "Clasificación según la masa total en carga",
  "pages": "8",
  "lead": "El criterio no es la masa en vacío, sino la masa total en carga (MTC): vehículo y carga normalizada, incluido el personal.",
  "points": [
   [
    "MTC: concepto esencial",
    "Masa efectiva del vehículo y su carga normalizada, incluida la masa del personal y de los pasajeros. Definición de UNE-EN 1846-1:2011 según el manual."
   ],
   [
    "Ligero (L) — tabla de 2011",
    "Entre 3 y 7,5 toneladas de MTC."
   ],
   [
    "Medio (M) — tabla de 2011",
    "Entre 7,5 y 16 toneladas de MTC."
   ],
   [
    "Superior (S) — tabla de 2011",
    "MTC mayor que 16 toneladas."
   ],
   [
    "Criterios anteriores (1998)",
    "Ligero entre 2 y 7,5 t; medio entre 7,5 y 14 t; pesado (S) por encima de 14 t."
   ],
   [
    "Denominación comercial",
    "Aunque el cuadro de 2011 diga «superior», se mantienen las denominaciones «pesada/o» en los modelos de autobombas."
   ]
  ],
  "tip": "MTC de 2011: L 3–7,5 t; M 7,5–16 t; S mayor de 16 t.",
  "table": {
   "headers": [
    "Clase",
    "UNE-EN 1846-1:2011",
    "EN 1846-1:1998"
   ],
   "rows": [
    [
     "Ligero (L)",
     "3–7,5 t",
     "2–7,5 t"
    ],
    [
     "Medio (M)",
     "7,5–16 t",
     "7,5–14 t"
    ],
    [
     "Superior/Pesado (S)",
     "> 16 t",
     "> 14 t"
    ]
   ]
  }
 },
 {
  "id": "1-2",
  "section": "clasificacion",
  "number": "1.2",
  "title": "Categorías según la capacidad de paso",
  "pages": "9",
  "lead": "La categoría 1, 2 o 3 expresa para qué superficie de circulación se ha concebido el vehículo.",
  "points": [
   [
    "Categoría 1: urbano",
    "Diseñado para carreteras practicables."
   ],
   [
    "Categoría 2: rural",
    "Apto para cualquier tipo de carretera y terrenos no demasiado accidentados."
   ],
   [
    "Categoría 3: todoterreno",
    "Diseñado para transitar todo tipo de carretera y circular campo a través."
   ],
   [
    "No confundir con la masa",
    "La categoría de paso y la clase de masa son clasificaciones independientes: una autobomba puede ser ligera y todoterreno."
   ]
  ],
  "tip": "1 = urbano; 2 = rural; 3 = todoterreno.",
  "table": {
   "headers": [
    "Categoría",
    "Uso definido por el documento",
    "Vehículos de ejemplo"
   ],
   "rows": [
    [
     "1 — urbano",
     "Carreteras practicables",
     "BUL, BUP"
    ],
    [
     "2 — rural",
     "Carreteras y terreno poco accidentado",
     "BRL, BRP"
    ],
    [
     "3 — todoterreno",
     "Carretera y campo a través",
     "BFL, BFP"
    ]
   ]
  }
 },
 {
  "id": "1-3",
  "section": "clasificacion",
  "number": "1.3",
  "title": "Clasificación según su aplicación",
  "pages": "9",
  "lead": "El criterio es la función durante la emergencia; no sustituye a la clasificación por masa o capacidad de paso.",
  "points": [
   [
    "Lucha contra incendios y salvamento",
    "Camiones con bombeo (autobombas) y camiones para incendios especiales."
   ],
   [
    "Alta elevación aérea",
    "Escalera giratoria y plataforma hidráulica."
   ],
   [
    "Auxiliares y rescate",
    "Vehículo auxiliar de salvamento, furgón de control de daños y ambulancia del servicio de bomberos."
   ],
   [
    "Mando, transporte y logística",
    "Camión de mando y control; vehículos de transporte de personal y de logística."
   ],
   [
    "Vehículos especializados",
    "Otros vehículos a motor con aplicaciones específicas."
   ]
  ],
  "tip": "Las tres clasificaciones del punto 1 son independientes: masa, paso y aplicación."
 },
 {
  "id": "2-1",
  "section": "nomenclatura",
  "number": "2.1",
  "title": "Origen y grandes grupos de la nomenclatura",
  "pages": "10",
  "lead": "El manual atribuye la unificación de nomenclatura al RD 1053/1985 y a la Orden Ministerial de 31 de octubre de 1985.",
  "points": [
   [
    "Autobombas",
    "Vehículos con bombas de agua, escaleras desplegables y otras herramientas de su actividad."
   ],
   [
    "Agentes específicos",
    "Similares a autobombas, pero destinados a transportar y proyectar extintores distintos al agua."
   ],
   [
    "Salvamento",
    "Unidades para rescate en múltiples situaciones."
   ],
   [
    "Aeronaves y barcas",
    "Medios aéreos y embarcaciones para extinción o rescate, respectivamente."
   ],
   [
    "Vehículos especiales",
    "Camiones con equipos especiales de extinción o de apoyo operativo."
   ],
   [
    "Vehículos auxiliares",
    "Unidades de mando, supervisión, logística, transporte o apoyo."
   ],
   [
    "Remolques",
    "Complementos no autopropulsados para material y equipos."
   ]
  ],
  "tip": "Nomenclatura: vehículos autopropulsados y remolques; ocho familias en el manual."
 },
 {
  "id": "2-2",
  "section": "nomenclatura",
  "number": "2.2",
  "title": "Siglas de vehículos contra incendios",
  "pages": "10–11",
  "lead": "Memorizar los códigos es fundamental: aparecen posteriormente como denominación abreviada en las fichas técnicas.",
  "points": [
   [
    "Autobombas",
    "BUL/BUP urbanas; BRL/BRP rurales; BFL/BFP forestales; BNL/BNP nodrizas. La segunda letra del par habitual L/P indica ligera/pesada."
   ],
   [
    "Agentes extintores específicos",
    "VAU (agente único) y VMA (múltiples agentes)."
   ],
   [
    "Rescate y salvamento",
    "FSV (salvamentos varios), AMB (ambulancia), FEA (equipo acuático), FER (escalada y espeleología)."
   ],
   [
    "Aeronaves y barcas",
    "HSR, AVR, AVE; BSA (salvamento) y BEA (extinción)."
   ],
   [
    "Vehículos de altura",
    "AEA (autoescalera automática), AES (semiautomática), AEM (manual), ABA (autobrazo articulado), ABE (extensible)."
   ],
   [
    "Auxiliares y especiales",
    "UMJ, UMC, UIV, UIS, UTP, UPC, BUS; FUV, FAV, AGT, VIL, VGE, MEC, AGP, VTR, VTB, FRA, TPP y NBQ."
   ],
   [
    "Remolques",
    "REM, RMB, REL, RGE, RBS, RUV y RCA."
   ]
  ],
  "tip": "Repasa los códigos completos en la tabla y en los ejercicios de asociación.",
  "table": {
   "headers": [
    "Familia",
    "Sigla",
    "Significado"
   ],
   "rows": [
    [
     "Autobomba",
     "BUL / BUP",
     "Bomba urbana ligera / pesada"
    ],
    [
     "Autobomba",
     "BRL / BRP",
     "Bomba rural ligera / pesada"
    ],
    [
     "Autobomba",
     "BFL / BFP",
     "Bomba forestal ligera / pesada"
    ],
    [
     "Autobomba",
     "BNL / BNP",
     "Bomba nodriza ligera / pesada"
    ],
    [
     "Agentes",
     "VAU / VMA",
     "Vehículo de agente único / múltiples agentes"
    ],
    [
     "Salvamento",
     "FSV / AMB",
     "Salvamentos varios / ambulancia"
    ],
    [
     "Salvamento",
     "FEA / FER",
     "Equipo acuático / escalada y espeleología"
    ],
    [
     "Aeronaves",
     "HSR / AVR / AVE",
     "Helicóptero salvamento / avión reconocimiento / avión extinción"
    ],
    [
     "Barcas",
     "BSA / BEA",
     "Barca salvamento / barca extinción"
    ],
    [
     "Altura",
     "AEA / AES / AEM",
     "Autoescalera automática / semiautomática / manual"
    ],
    [
     "Altura",
     "ABA / ABE",
     "Autobrazo articulado / extensible"
    ],
    [
     "Especiales",
     "FUV / FAV",
     "Furgón útiles varios / apeos y apuntalamientos"
    ],
    [
     "Especiales",
     "AGT / AGP",
     "Autogrúa taller / autogrúa pesada"
    ],
    [
     "Especiales",
     "VIL / VGE",
     "Vehículo de iluminación / generador eléctrico"
    ],
    [
     "Especiales",
     "MEC / VTR / VTB",
     "Excavadora-cargadora / taller de reparaciones / transporte bombas"
    ],
    [
     "Especiales",
     "FRA / TPP / NBQ",
     "Reserva de aire / trasvase productos peligrosos / nuclear-biológico-químico"
    ],
    [
     "Auxiliares",
     "UMJ / UMC",
     "Mando y jefatura / mando y comunicación"
    ],
    [
     "Auxiliares",
     "UIV / UIS",
     "Inspección y vigilancia / intendencia y suministro"
    ],
    [
     "Auxiliares",
     "UTP / UPC / BUS",
     "Transporte pesado / personal y carga / transporte personal"
    ],
    [
     "Remolques",
     "REM / RMB / REL",
     "Escala manual / motobomba / generador espuma"
    ],
    [
     "Remolques",
     "RGE / RBS / RUV / RCA",
     "Generador eléctrico / barcas salvamento / usos varios / carga de aire"
    ]
   ]
  },
  "note": "El apartado 4.10 denomina «FAP» al furgón de apeos y apuntalamientos, mientras el cuadro de siglas de la p. 11 utiliza «FAV». Se conservan ambas referencias y se señala la discrepancia."
 },
 {
  "id": "3-1",
  "section": "componentes",
  "number": "3.1",
  "title": "Autobastidor, motor y equipo eléctrico",
  "pages": "12",
  "lead": "El autobastidor o chasis reúne el bastidor y los órganos mecánicos del vehículo.",
  "points": [
   [
    "Elementos del chasis",
    "Incluye motor, sistema de alimentación, depósito y escape; suspensiones; frenos; ruedas; dirección e instalación eléctrica."
   ],
   [
    "Motor según el manual",
    "Se indica motor diésel para estos vehículos."
   ],
   [
    "Tensión nominal",
    "El equipo eléctrico funciona a 24 voltios."
   ],
   [
    "Faro delantero",
    "Faro orientable y móvil en la parte anterior de la cabina, con 200 mm de diámetro como mínimo."
   ],
   [
    "Autobomba cisterna",
    "Según el documento, debe montar dos focos: uno anterior y otro posterior."
   ]
  ],
  "tip": "Dato típico: 24 V y faro delantero orientable de al menos 200 mm."
 },
 {
  "id": "3-2",
  "section": "componentes",
  "number": "3.2",
  "title": "Carrocería, cabina y armarios",
  "pages": "13",
  "lead": "La carrocería permite transportar tanto al personal como el equipo necesario para actuar en el siniestro.",
  "points": [
   [
    "Cabina",
    "Como mínimo conductor y dos bomberos; puede ser sencilla o doble, según dotación y configuración."
   ],
   [
    "Armarios",
    "Alojan los elementos y materiales destinados a la intervención."
   ],
   [
    "Distribución funcional",
    "Separación entre espacio de transporte del personal y compartimentos de material."
   ],
   [
    "Protecciones / parachoques",
    "El documento destaca su misión de proteger el sistema de bombeo, habitualmente en la parte posterior del vehículo."
   ]
  ],
  "tip": "Cabina mínima descrita: un conductor y dos bomberos."
 },
 {
  "id": "3-3",
  "section": "componentes",
  "number": "3.3–3.4",
  "title": "Protecciones e instrumentos de control",
  "pages": "13–14",
  "lead": "Los órganos de control permiten supervisar la conducción y el funcionamiento de la bomba.",
  "points": [
   [
    "Protecciones",
    "Parachoques o elementos de defensa del conjunto hidráulico, en especial del sistema de bombeo trasero."
   ],
   [
    "Cuentakilómetros",
    "Registra el recorrido del vehículo."
   ],
   [
    "Cuenta-horas de bomba",
    "Indica tiempo de funcionamiento de la bomba, diferente del kilometraje."
   ],
   [
    "Otros instrumentos",
    "Amperímetro, termómetro de refrigeración, nivel de combustible e indicadores de calefacción."
   ],
   [
    "Indicadores adicionales",
    "Luces intermitentes e instalación hidráulica, entre otros."
   ]
  ],
  "tip": "No confundir cuentakilómetros con cuenta-horas de bomba."
 },
 {
  "id": "3-4",
  "section": "componentes",
  "number": "3.5.1",
  "title": "Depósito cisterna, entradas y salidas",
  "pages": "14",
  "lead": "El depósito contiene agua u otros agentes extintores y su construcción debe ser compatible con el líquido almacenado.",
  "points": [
   [
    "Entrada de llenado",
    "El tema indica bocas de llenado normalmente de 70 mm de diámetro."
   ],
   [
    "Boca de aspiración",
    "Diámetro de aspiración de bomba de 100 mm según el documento."
   ],
   [
    "Salidas de impulsión",
    "Sus diámetros normalizados dependen del tipo de vehículo; se detallan en cada ficha posterior."
   ],
   [
    "Materiales habituales de la cisterna",
    "Acero inoxidable o planchas de polietileno reforzado con fibra de vidrio."
   ],
   [
    "Condiciones del depósito",
    "Resistencia a la corrosión interior y no alteración de las propiedades del agente extintor."
   ],
   [
    "Capacidad variable",
    "Dimensiones y volumen se definen por tipo y modelo de vehículo."
   ]
  ],
  "tip": "70 mm para llenado habitual y 100 mm para aspiración de bomba."
 },
 {
  "id": "3-5",
  "section": "componentes",
  "number": "3.5.2",
  "title": "Bomba centrífuga y nomenclatura hidráulica",
  "pages": "14–15",
  "lead": "La bomba transforma energía mecánica del motor en energía para impulsar el agua, dotándola de caudal y presión.",
  "points": [
   [
    "Cómo se alimenta",
    "Desde cisterna; directamente desde la red urbana a presión; o desde otras fuentes por aspiración."
   ],
   [
    "Aspiración según UNE 23900:1983",
    "El temario exige poder aspirar a profundidad de hasta 7,5 m y lanzar o llenar la cisterna."
   ],
   [
    "Etapas de presión",
    "Generalmente baja y alta presión, que permiten adaptarse al caudal/alcance requerido."
   ],
   [
    "Significado de B, b y c",
    "B = bomba contra incendios; b = solo baja presión; c = presión combinada."
   ],
   [
    "Lectura del código",
    "El caudal nominal se divide por 100 en la notación numérica; el otro número expresa presión en bar. La bomba combinada agrega un segundo par de números."
   ],
   [
    "Ejemplo Bb 16/8",
    "Bomba contra incendios de baja presión; 1.600 L/min a 8 bar según la tabla del PDF."
   ],
   [
    "Ejemplo Bc 16/8-2/30",
    "Combinada: 1.600 L/min a 8 bar en baja y 200 L/min a 30 bar en alta."
   ]
  ],
  "tip": "B 16/8 equivale a 1.600 L/min y 8 bar; c indica la etapa combinada.",
  "table": {
   "headers": [
    "Vehículo / ejemplo",
    "Baja presión (bar; L/min)",
    "Alta presión (bar; L/min)"
   ],
   "rows": [
    [
     "BUL, BUP, BRP",
     "8 bar; 1.600 L/min",
     "30 bar; 200 L/min"
    ],
    [
     "BRL (tabla p. 15)",
     "80 bar; 800 L/min (así figura)",
     "30 bar; 200 L/min"
    ],
    [
     "BCA (tabla p. 15)",
     "8 bar; 2.400 L/min",
     "No indicada"
    ],
    [
     "B 8/8",
     "8 bar; 800 L/min",
     "—"
    ],
    [
     "c 2/30",
     "—",
     "30 bar; 200 L/min"
    ],
    [
     "B 16/8",
     "8 bar; 1.600 L/min",
     "—"
    ],
    [
     "c 2,5/35",
     "—",
     "35 bar; 250 L/min"
    ]
   ]
  },
  "note": "Posible errata interna: la tabla de p. 15 imprime «80 bar» para BRL en baja presión, mientras el propio manual da bomba Bb 8/8 o Bc 8/8-2/30 en p. 23. Se mantiene el «80» solo como cita del documento, sin adoptarlo como valor técnico contrastado."
 },
 {
  "id": "3-6",
  "section": "componentes",
  "number": "3.6",
  "title": "Dotaciones A y B: material obligatorio y complementario",
  "pages": "16–18",
  "lead": "La dotación A es imprescindible para actuar según el manual; la B es complementaria. Las dos listas son extensas y aparecen desglosadas.",
  "points": [
   [
    "Dotación A: peso estimado",
    "437 kg. Comprende materiales de extinción, demolición, iluminación y señalización, y salvamento."
   ],
   [
    "Extinción A: equipos iniciales",
    "Extintor ABC de 12 kg; cuatro mangotes de 100 mm × 2 m; avispero; mangueras de 70, 45 y 25 mm; carrete de socorro semirrígido de 25 mm × 40 m."
   ],
   [
    "Extinción A: mangueras y lanzas",
    "120 m de 70 mm (mencionados dos veces en el documento), 160 m de 45 mm y 160 m de 25 mm; lanzas de 70, 45 y 25 mm de tres efectos; pistola para carrete; dos lanzas de espuma de 200 L/min."
   ],
   [
    "Extinción A: conexiones",
    "Colector 2×70/100 mm; torre boca 100 mm a dos salidas 70; 2 bifurcaciones 70/(2×45); 1 bifurcación 45/(2×25); reducciones 70/45 y 45/25; 2 premezcladores de 200 L/min."
   ],
   [
    "Extinción A: herramientas y llaves",
    "Dos juegos de llaves para bocas, uno para mangotes y nueve juegos de tapafugas para mangueras de 25, 45 y 70 mm."
   ],
   [
    "Demolición A",
    "Hacha, pico, pala, dos zapapicos, pata de cabra de 70 mm (así impreso), sierra tronzadora de 700 mm, dos ganchos, mazo, machete y juego de 3 cortafríos más punzón."
   ],
   [
    "Iluminación y señalización A",
    "Faro orientable, soporte y tambor de 25 m, dos linternas recargables y dos triángulos plegables de peligro de incendio."
   ],
   [
    "Salvamento A",
    "Cuerda de 40 m para 1.000 kg; dos cuerdas guía de 20 m para 1.000 kg; escalera de corredera 2×4,5 m (8 m útiles); botiquín."
   ],
   [
    "Dotación B: peso y protección",
    "200 kg; extintor de CO₂ de 8 kg, dos pasamangueras, dos recipientes de espumógeno de 20 L; dos pares de guantes térmicos, dos eléctricos y dos de protección general."
   ],
   [
    "Dotación B: rescate y respiración",
    "Radioemisora, dos ERA de aire comprimido de autonomía mínima 30 min, dos botellas de repuesto, motosierra, cortacables hasta 10 mm, bichero, dos escaleras de 4 m, dos arneses, pértiga aislante hasta 40 kV y camilla."
   ]
  ],
  "tip": "A ≈ 437 kg imprescindible; B ≈ 200 kg complementaria; ERA de B: 2 × 30 min mínimo.",
  "note": "El material A transcribe «70 m de diámetro» una vez y vuelve a enumerar 120 m de manguera de 70 mm. Son anomalías de redacción/repetición que se señalan, no correcciones implícitas."
 },
 {
  "id": "4-1",
  "section": "vehiculos",
  "number": "4.1",
  "title": "Conceptos de carga y masa",
  "pages": "19",
  "lead": "Cinco definiciones de masa/carga aparecen antes de las fichas de los vehículos.",
  "points": [
   [
    "Carga normalizada",
    "Masa del material de intervención, agentes extintores y personal; el bombero equipado se computa con 90 kg."
   ],
   [
    "Carga mínima",
    "Diferencia entre la carga normalizada y la masa debida a agentes extintores."
   ],
   [
    "Masa total en carga (MTC)",
    "Masa efectiva del vehículo más la carga normalizada, personal y pasajeros."
   ],
   [
    "Masa disponible",
    "Diferencia entre el peso máximo autorizado y la masa real total en carga."
   ],
   [
    "Masa máxima autorizada (MMA)",
    "Peso del vehículo vacío más el máximo de carga permitido, incluidos pasajeros y mercancías."
   ]
  ],
  "tip": "El manual considera 90 kg para cada bombero equipado."
 },
 {
  "id": "4-2",
  "section": "vehiculos",
  "number": "4.2",
  "title": "Autobombas urbanas: BUL y BUP",
  "pages": "19–22",
  "lead": "Una BUL es compacta y depende de tomas de agua de la ciudad. Una BUP tiene mayor cisterna y capacidad para las operaciones urbanas habituales.",
  "points": [
   [
    "BUL: misión",
    "Vehículo de pequeñas dimensiones para operaciones elementales de salvamento y extinción en entorno urbano; poca reserva de agua y dependencia de hidrantes."
   ],
   [
    "BUP: misión",
    "Autobomba para operaciones normales de salvamento y extinción, capaz de atender la mayor parte de siniestros urbanos según el manual."
   ],
   [
    "Tracción y clase",
    "Ambas pueden tener uno o dos ejes motrices; BUL clase ligera y BUP media/pesada/superior según la ficha. Categoría de paso 1."
   ],
   [
    "BUL: ataque y alcance",
    "Dos lanzas de 45 mm a 100 m, cuatro de 45 mm a 80 m, dos de 25 mm a 80 m; dos de espuma de 200 L/min."
   ],
   [
    "BUP: ataque y alcance",
    "Dos lanzas de 25 mm a 100 m, cuatro de 45 mm a 100 m y dos de espuma de 400 L/min."
   ],
   [
    "Cabina y otros equipos",
    "En ambas: mando, conductor y dos o tres bomberos; agua principal y CO₂, espuma y polvo adicionales."
   ]
  ],
  "tip": "BUL ≥800 L; BUP ≥3.200 L. Categoría 1 las dos.",
  "table": {
   "headers": [
    "Característica",
    "BUL",
    "BUP"
   ],
   "rows": [
    [
     "Clase / categoría",
     "Ligero (L) / 1",
     "Medio o superior / 1"
    ],
    [
     "Dimensiones máximas",
     "6 × 2,2 × 3 m",
     "7,5 × 2,5 × 3,25 m"
    ],
    [
     "Cisterna mínima",
     "800 L",
     "3.200 L"
    ],
    [
     "Carga mínima",
     "2.000 kg",
     "4.300 kg"
    ],
    [
     "Masa disponible",
     "300 kg",
     "300 kg"
    ],
    [
     "Relación potencia/masa",
     "15 CV/t",
     "15 CV/t"
    ],
    [
     "Velocidad máxima",
     "90 km/h",
     "100 km/h"
    ],
    [
     "Bomba",
     "Bb 16/8 o Bc 16/8-2/30",
     "Bb 16/8 o Bc 16/8-2,5/35"
    ],
    [
     "Salidas mínimas",
     "2×70, 1×45, 1×25 mm",
     "2×70, 2×45, 1×25 mm"
    ],
    [
     "Remolque",
     "750 kg",
     "1.500 kg"
    ],
    [
     "Mezclador espuma",
     "400 L/min",
     "200–800 L/min"
    ]
   ]
  }
 },
 {
  "id": "4-3",
  "section": "vehiculos",
  "number": "4.3",
  "title": "Autobombas rurales: BRL y BRP",
  "pages": "23–25",
  "lead": "Las rurales operan en terrenos no demasiado accidentados; la BRL es ligera y la BRP dispone de más agua y material.",
  "points": [
   [
    "BRL: misión",
    "Intervenciones elementales con chasis todoterreno para acceder a zonas rurales."
   ],
   [
    "BRP: misión",
    "Unidad con bastidor apto para terreno rural, capaz de atender gran parte de siniestros de estas zonas."
   ],
   [
    "Vehículos categoría 2",
    "Ambos se clasifican en categoría de paso 2 (rural) en las tablas."
   ],
   [
    "Bombas",
    "BRL: Bb 8/8 o Bc 8/8-2/30; BRP: Bb 16/8 o Bc 16/8-2/30."
   ],
   [
    "BRL: medios de ataque",
    "Una lanza de 25 mm, dos a cuatro de 45 mm y dos de espuma de 200 L/min; remolque 750 kg."
   ],
   [
    "BRP: medios de ataque",
    "Una lanza de 25 mm a 200 m, cuatro de 45 mm a 100 m y dos de espuma de 400 L/min; remolque 1.500 kg."
   ],
   [
    "Dotación de personal",
    "Un mando, un conductor y dos o tres bomberos."
   ]
  ],
  "tip": "BRL 800 L; BRP 2.400 L; ambas categoría 2.",
  "table": {
   "headers": [
    "Característica",
    "BRL",
    "BRP"
   ],
   "rows": [
    [
     "Clase / categoría",
     "Ligero / 2",
     "Medio o superior / 2"
    ],
    [
     "Dimensiones máximas",
     "6 × 2,2 × 3 m",
     "6,5 × 2,5 × 3,5 m"
    ],
    [
     "Cisterna mínima",
     "800 L",
     "2.400 L"
    ],
    [
     "Carga mínima",
     "1.750 kg",
     "3.900 kg"
    ],
    [
     "Masa disponible",
     "200 kg",
     "500 kg"
    ],
    [
     "Relación potencia/masa",
     "15 CV/t",
     "10 CV/t"
    ],
    [
     "Velocidad máxima",
     "80 km/h",
     "80 km/h"
    ],
    [
     "Bomba",
     "Bb 8/8 o Bc 8/8-2/30",
     "Bb 16/8 o Bc 16/8-2/30"
    ],
    [
     "Salidas mínimas",
     "2×70, 1×45, 1×25 mm",
     "2×70, 1×45, 1×25 mm"
    ],
    [
     "Remolque",
     "750 kg",
     "1.500 kg"
    ],
    [
     "Mezclador espuma",
     "400 L/min",
     "200–800 L/min"
    ]
   ]
  }
 },
 {
  "id": "4-4",
  "section": "vehiculos",
  "number": "4.4",
  "title": "Autobombas forestales: BFL y BFP",
  "pages": "25–27",
  "lead": "Son vehículos categoría 3, diseñados para terrenos de acceso difícil y campo a través.",
  "points": [
   [
    "BFL: misión",
    "Rescate e incendios en zonas rurales/forestales, con elevada capacidad de paso; por su poca reserva necesita agua cercana."
   ],
   [
    "BFL: neumáticos",
    "Preparados para terrenos adversos, aunque penalizan la conducción urbana."
   ],
   [
    "BFP: misión",
    "Mayor dotación material para atender emergencias en zonas forestales; también depende de abastecimiento próximo."
   ],
   [
    "Tracción y categoría",
    "Ambos diésel con tracción a dos ejes; categoría 3 (todoterreno)."
   ],
   [
    "BFL: ataque",
    "Una lanza de 25 mm; dos a cuatro de 45 mm; dos de espuma de 200 L/min; remolque 750 kg."
   ],
   [
    "BFP: ataque",
    "Una de 25 mm a 200 m, cuatro de 45 mm a 100 m; dos de espuma de 400 L/min; remolque 1.500 kg."
   ],
   [
    "Personal",
    "BFL: mando, conductor y un bombero; BFP: mando, conductor y dos o tres bomberos."
   ]
  ],
  "tip": "BFL 300–600 L (texto de «capacidad mínima»); BFP 2.400 L.",
  "table": {
   "headers": [
    "Característica",
    "BFL",
    "BFP"
   ],
   "rows": [
    [
     "Clase / categoría",
     "Ligero / 3",
     "Medio o superior / 3"
    ],
    [
     "Dimensiones",
     "Como vehículo rural ligero",
     "Como vehículo rural pesado"
    ],
    [
     "Cisterna del manual",
     "300–600 L",
     "2.400 L"
    ],
    [
     "Carga mínima",
     "1.750 kg",
     "3.900 kg"
    ],
    [
     "Masa disponible",
     "200 kg",
     "500 kg"
    ],
    [
     "Relación potencia/masa",
     "15 CV/t",
     "10 CV/t"
    ],
    [
     "Velocidad máxima",
     "85 km/h",
     "85 km/h"
    ],
    [
     "Agentes adicionales",
     "CO₂, espuma y polvo",
     "CO₂, espuma y polvo"
    ],
    [
     "Salidas mínimas",
     "2×70, 1×45, 1×25 mm",
     "2×70, 1×45, 1×25 mm"
    ],
    [
     "Mezclador espuma",
     "400 L/min",
     "200–800 L/min"
    ],
    [
     "Remolque",
     "750 kg",
     "1.500 kg"
    ]
   ]
  }
 },
 {
  "id": "4-5",
  "section": "vehiculos",
  "number": "4.5",
  "title": "Autobombas nodrizas: BNL y BNP",
  "pages": "28–29",
  "lead": "Las nodrizas suministran agua como depósito móvil y también pueden participar directamente en la extinción.",
  "points": [
   [
    "Función de la nodriza",
    "Transportar agua al lugar del incidente y, subsidiariamente, realizar ataque directo."
   ],
   [
    "Clasificación por agente",
    "BCA para cisternas de agua; BCE para cisternas de espuma."
   ],
   [
    "BNL: ligera",
    "Cisterna mínima 5.500 L de agua; espuma adicional 500 L; conductor y un bombero."
   ],
   [
    "BNP: pesada",
    "Cisterna mínima 8.000 L; espumógeno adicional 800 L; conductor y dos bomberos."
   ],
   [
    "Relación potencia/masa",
    "Tanto BNL como BNP: 8 CV/t según la tabla; ambas diésel y categoría variable."
   ],
   [
    "Movilidad",
    "La gran capacidad de agua de BNP aumenta su papel como apoyo, pero dificulta su movilidad."
   ]
  ],
  "tip": "BNL 5.500 L; BNP 8.000 L, y espuma extra 500/800 L.",
  "table": {
   "headers": [
    "Característica",
    "BNL",
    "BNP"
   ],
   "rows": [
    [
     "Cisterna mínima",
     "5.500 L",
     "8.000 L"
    ],
    [
     "Espuma adicional",
     "500 L",
     "800 L"
    ],
    [
     "Relación potencia/masa",
     "8 CV/t",
     "8 CV/t"
    ],
    [
     "Salidas mínimas",
     "2×70, 1×45, 1×25 mm",
     "4×70, 1×25 mm"
    ],
    [
     "Tracción",
     "Un eje",
     "Un eje"
    ],
    [
     "Categoría de paso",
     "Variable",
     "Variable"
    ],
    [
     "Tripulación",
     "Conductor + 1 bombero",
     "Conductor + 2 bomberos"
    ],
    [
     "Velocidad máxima",
     "No indicada",
     "90 km/h"
    ]
   ]
  },
  "note": "La tabla de p. 29 etiqueta a BNP como «P (ligero)», formulación contradictoria: se recoge sin asumir que sea correcta. Para BNL (p. 28) figura «Pesado (P) y/o superior»."
 },
 {
  "id": "4-6",
  "section": "vehiculos",
  "number": "4.6",
  "title": "Vehículos de agentes específicos: VAU y VMA",
  "pages": "30",
  "lead": "No están basados principalmente en el agua: la selección del agente depende del riesgo de incendio.",
  "points": [
   [
    "VAU: agente único",
    "Vehículo con un tipo de agente principal distinto al agua, según la clasificación del documento."
   ],
   [
    "Vehículo de espuma",
    "Cisternas de agua entre 2.500 y 11.000 L y depósitos de espumas de baja, media o alta expansión."
   ],
   [
    "Vehículo de polvo",
    "Polvo químico ABC de 1.000 a 6.000 litros, propulsado por nitrógeno según el manual."
   ],
   [
    "Vehículo de CO₂",
    "Dotación de múltiples botellas de CO₂, especialmente frente a fuegos con riesgo eléctrico."
   ],
   [
    "Vehículo de absorbentes",
    "Transporta áridos para actuar sobre derrames de hidrocarburos líquidos y otros materiales similares."
   ],
   [
    "VMA: múltiples agentes",
    "Muy empleado en aeropuertos; utiliza agua, espuma y polvo, con nitrógeno como propulsor."
   ]
  ],
  "tip": "VAU = único; VMA = varios; en aeropuertos destaca VMA.",
  "table": {
   "headers": [
    "Tipo",
    "Agente / función",
    "Dato de examen"
   ],
   "rows": [
    [
     "VAU de espuma",
     "Agua + depósitos de espuma",
     "2.500–11.000 L de agua"
    ],
    [
     "VAU de polvo",
     "Polvo ABC",
     "1.000–6.000 L; nitrógeno propulsor"
    ],
    [
     "VAU de CO₂",
     "CO₂",
     "Riesgo eléctrico; varias botellas"
    ],
    [
     "VAU absorbente",
     "Áridos absorbentes",
     "Derrames de hidrocarburos"
    ],
    [
     "VMA",
     "Agua, espuma y polvo",
     "Aeropuertos; nitrógeno propulsor"
    ]
   ]
  }
 },
 {
  "id": "4-7",
  "section": "vehiculos",
  "number": "4.7",
  "title": "Vehículos de salvamento: FSV, AMB, FEA y FER",
  "pages": "30–31",
  "lead": "Unidades destinadas a rescates y asistencia: pueden incorporar cabestrante, pequeña cisterna y grúa.",
  "points": [
   [
    "FSV — salvamentos varios",
    "Furgón polivalente para excarcelaciones, rescates en altura y otros incidentes."
   ],
   [
    "AMB — ambulancia",
    "Atención a heridos y traslado al centro sanitario cuando proceda."
   ],
   [
    "FEA — equipo acuático",
    "Material de rastreo y rescate subacuático; trajes de buceo, botellas para inmersión y frecuentemente remolque con lancha."
   ],
   [
    "FER — escalada y espeleología",
    "Equipado para rescate en montaña, barrancos, pozos y cuevas; iluminación potente, cabestrante, remolque, cuerdas y arneses."
   ],
   [
    "Vehículo base",
    "Puede montarse sobre furgoneta o camión, con configuración adaptada al salvamento."
   ]
  ],
  "tip": "FSV polivalente; FEA acuático; FER montaña/espeleología."
 },
 {
  "id": "4-8",
  "section": "vehiculos",
  "number": "4.8",
  "title": "Vehículos auxiliares de apoyo y mando",
  "pages": "32–33",
  "lead": "Son vehículos para mando, inspección, logística, traslados y transporte de material o personal.",
  "points": [
   [
    "UMJ — unidad de jefatura",
    "Traslada los mandos al siniestro."
   ],
   [
    "UMC — mando y comunicación",
    "Mayor tamaño y equipamiento que UMJ; puede incorporar emisoras, planos y elementos de coordinación."
   ],
   [
    "UIV — inspección y vigilancia",
    "Traslada personal especializado en prevención y análisis de riesgos."
   ],
   [
    "UIS — intendencia y suministro",
    "Suministra avituallamiento y equipos, especialmente en siniestros de larga duración."
   ],
   [
    "UTP — transporte pesado",
    "Transporta elementos de elevado peso."
   ],
   [
    "UPC — personal y carga",
    "Traslada mandos, personal y material simultáneamente."
   ],
   [
    "BUS — transporte de personal",
    "Furgonetas o autobuses para desplazar dotaciones."
   ]
  ],
  "tip": "UMJ dirige; UMC comunica; UIV inspecciona; UIS suministra; UTP carga pesada; UPC mixto."
 },
 {
  "id": "4-9",
  "section": "vehiculos",
  "number": "4.9",
  "title": "Vehículos de altura y seguridad en su uso",
  "pages": "33–35",
  "lead": "Autoescalas y autobrazos permiten acceso y rescate en altura. El temario incluye listas de verificación operativa.",
  "points": [
   [
    "Familia de autoescalas",
    "AEA automática; AES semiautomática; AEM manual."
   ],
   [
    "Familia de autobrazos",
    "ABA articulado y ABE extensible."
   ],
   [
    "Antes de salir",
    "Comprobar funcionamiento, escalera recogida en portaescalera, apoyos hidráulicos recogidos, toma de fuerza desconectada, cesta abatida, testigos apagados, material fijado y depósito lleno."
   ],
   [
    "Durante el desplazamiento",
    "Señales prioritarias conectadas; atención al barrido lateral de la escalera, radio de giro, altura total, túneles y zonas con obstáculos."
   ],
   [
    "Durante la intervención",
    "Accionar frenos, activar luces de señalización y acordonar la zona de trabajo."
   ],
   [
    "Después de la intervención",
    "Guardar equipamiento, cerrar armarios, revisar daños en escalera, apoyos hidráulicos e instalación eléctrica."
   ]
  ],
  "tip": "Seguridad en cuatro momentos: antes, trayecto, intervención y después."
 },
 {
  "id": "4-10",
  "section": "vehiculos",
  "number": "4.10",
  "title": "Vehículos para trabajos especiales",
  "pages": "35",
  "lead": "Equipos auxiliares específicos o maquinaria que se moviliza según las características del siniestro.",
  "points": [
   [
    "TPP",
    "Vehículo de trasvase de productos peligrosos."
   ],
   [
    "VIL",
    "Vehículo de iluminación para servicios prolongados o con poca luz."
   ],
   [
    "VGE",
    "Vehículo generador eléctrico."
   ],
   [
    "Furgón de apeos y apuntalamientos",
    "El apartado 4.10 indica «FAP»; el cuadro de nomenclatura de p. 11 señala «FAV»."
   ],
   [
    "Maquinaria pesada de apoyo",
    "Excavadora-cargadora (MEC), autogrúa pesada (AGP) y autogrúa taller (AGT)."
   ]
  ],
  "tip": "Apeos y apuntalamientos: FAP/FAV difieren entre p. 35 y tabla p. 11.",
  "note": "Discrepancia interna explícita del PDF: «FAV» en p. 11 y «FAP» en p. 35."
 },
 {
  "id": "4-11",
  "section": "vehiculos",
  "number": "4.11",
  "title": "Vehículos para medios acuáticos",
  "pages": "36",
  "lead": "Las intervenciones en ríos, lagos, embalses, inundaciones o puertos pueden requerir embarcaciones o vehículos anfibios.",
  "points": [
   [
    "BSA — barca de salvamento",
    "Lancha motora o de remos dedicada a labores de rescate."
   ],
   [
    "Hovercraft",
    "Vehículo anfibio que se desplaza sobre colchón de aire a presión; transita sobre corrientes fuertes y zonas inundadas someras."
   ],
   [
    "BEA — barca de extinción",
    "Equipo acuático de extinción utilizado en localidades con puerto de mar o ríos navegables."
   ],
   [
    "Diferencia BSA/BEA",
    "BSA se orienta al rescate; BEA transporta equipo para apagar incendios."
   ]
  ],
  "tip": "BSA = salvamento; BEA = extinción; hovercraft = colchón de aire."
 },
 {
  "id": "4-12",
  "section": "vehiculos",
  "number": "4.12",
  "title": "Aeronaves de extinción y salvamento",
  "pages": "36",
  "lead": "El elevado coste de estos medios limita su disponibilidad en comparación con los vehículos terrestres.",
  "points": [
   [
    "HSR — helicóptero de salvamento",
    "Helicóptero dedicado a salvamento y rescate; el manual también menciona helicópteros de extinción."
   ],
   [
    "AVR — avión de reconocimiento",
    "Destinado a observación y reconocimiento del área."
   ],
   [
    "AVE — avión de extinción",
    "Avión destinado a extinción, especialmente útil en incendios forestales."
   ],
   [
    "Condicionante económico",
    "El manual destaca que son los vehículos de mayor coste."
   ]
  ],
  "tip": "HSR helicóptero de salvamento; AVR reconocimiento; AVE extinción."
 },
 {
  "id": "5-1",
  "section": "circulacion",
  "number": "5.1",
  "title": "Vehículos prioritarios: señales ópticas y acústicas",
  "pages": "37–38",
  "lead": "El punto 5 cita los artículos 68.2 y 173 del Reglamento General de Circulación, RD 1428/2003.",
  "points": [
   [
    "Vehículo prioritario",
    "Policía, extinción, protección civil/salvamento y asistencia sanitaria pública o privada en servicio urgente, según el texto citado."
   ],
   [
    "Señal V-1",
    "Identifica el vehículo prioritario, de acuerdo con el artículo 173 citado."
   ],
   [
    "Regla general del documento",
    "Aviso mediante señal luminosa y aparato de señales acústicas especiales de forma simultánea."
   ],
   [
    "Excepción del art. 68.2",
    "Emplear solamente la señal luminosa cuando omitir la acústica no suponga peligro para los demás usuarios."
   ],
   [
    "Decisión sobre sirena",
    "El documento indica que el conductor valora la distancia al siniestro y la importancia de lo ocurrido."
   ]
  ],
  "tip": "Señales luminosas + acústicas por regla general, con excepción de luminosa aislada si no supone peligro.",
  "note": "El apartado reproduce disposiciones legales del temario, sin certificar aquí su redacción actual. Verificar legislación vigente y bases de convocatoria."
 },
 {
  "id": "5-2",
  "section": "circulacion",
  "number": "5.2",
  "title": "Prioridad, preferencia y precauciones",
  "pages": "38",
  "lead": "La prioridad de los vehículos en servicio urgente no equivale a libertad para crear situaciones peligrosas.",
  "points": [
   [
    "Preferencia de paso",
    "Con señales de emergencia, tienen prioridad sobre otros vehículos y usuarios conforme al documento; deben extremar precaución ante intersecciones y señales."
   ],
   [
    "Peatones y menores",
    "Especial cuidado cerca de peatones, colegios, zonas infantiles y pasos de peatones o bicicletas."
   ],
   [
    "Obstáculos y tráfico detenido",
    "Autobús parado, vehículos detenidos y accesos directos desde edificios."
   ],
   [
    "Terreno y meteorología",
    "Pavimento con agua o grava, rotondas, baja visibilidad, deslumbramiento, niebla, lluvia, nieve y humo."
   ],
   [
    "Animales",
    "Precaución especial donde se prevea su paso."
   ],
   [
    "Órdenes de agentes",
    "Se deben respetar en todo caso las órdenes de agentes de tráfico."
   ]
  ],
  "tip": "La prioridad no exime de precaución: órdenes de agentes siempre obligatorias."
 },
 {
  "id": "5-3",
  "section": "circulacion",
  "number": "5.3",
  "title": "Límites de velocidad en servicio urgente",
  "pages": "38–39",
  "lead": "El manual vincula la excepción a límites de velocidad del artículo 67 a la urgencia y a no poner en riesgo a terceros.",
  "points": [
   [
    "Condición 1",
    "El vehículo se dirige a prestar un servicio urgente."
   ],
   [
    "Condición 2 del resumen del documento",
    "Uso de señales de emergencia luminosas (rotativos) y acústicas (sirena)."
   ],
   [
    "Condición 3",
    "El conductor debe asegurarse en cada momento de no poner en peligro a ningún usuario."
   ],
   [
    "Sin urgencia o sin condiciones",
    "Se aplican las normas de tráfico comunes, según el resumen del manual."
   ],
   [
    "Responsabilidad profesional",
    "No basta con circular deprisa: se exige una valoración permanente del riesgo."
   ]
  ],
  "tip": "Tres condiciones del resumen: urgencia, señalización y ausencia de peligro.",
  "note": "El punto 5.1 cita expresamente una excepción de luz sin sirena, mientras el resumen del 5.3 formula luz y sirena conjuntamente. Esta tensión procede del propio texto; comprobar norma en vigor."
 },
 {
  "id": "5-4",
  "section": "circulacion",
  "number": "5.4",
  "title": "Maniobras excepcionales en autopista y autovía",
  "pages": "39",
  "lead": "Se expone una excepción del artículo 68: determinadas maniobras solo en servicio urgente y sin comprometer la seguridad.",
  "points": [
   [
    "Media vuelta y marcha atrás",
    "El texto citado permite excepcionalmente estas maniobras en autopistas y autovías."
   ],
   [
    "Circulación en sentido contrario",
    "Se menciona exclusivamente por el arcén, en las condiciones del artículo citado."
   ],
   [
    "Medianas y pasos transversales",
    "Se contempla penetrar en la mediana o sus pasos transversales de forma excepcional."
   ],
   [
    "Condiciones",
    "Urgencia y ausencia de riesgo para los usuarios; el resumen añade señales ópticas y acústicas."
   ],
   [
    "No es una autorización general",
    "El carácter excepcional y el deber de seguridad son esenciales para interpretar la regla del manual."
   ]
  ],
  "tip": "Maniobras excepcionales no pueden comprometer la seguridad de ningún usuario."
 },
 {
  "id": "5-5",
  "section": "circulacion",
  "number": "5.5",
  "title": "Permiso y responsabilidad del conductor",
  "pages": "39",
  "lead": "El tema exige permiso habilitante para conducir el vehículo y distingue infracciones personales de las documentales.",
  "points": [
   [
    "Permiso citado",
    "El manual indica permiso C para estos vehículos, sin detallar situaciones excepcionales según MMA u otras clases."
   ],
   [
    "Responsabilidad de infracciones",
    "Recae en el conductor, salvo infracciones relativas a documentación y estado de conservación del vehículo, que recaen en el titular."
   ],
   [
    "Pérdida del permiso o puntos",
    "El conductor debe comunicarlo, según el texto."
   ],
   [
    "Advertencia de aplicación",
    "El tipo de permiso depende de características y requisitos legales. La ficha refleja lo impreso en el temario, no un dictamen de permiso vigente."
   ]
  ],
  "tip": "El PDF indica carné C; distinguir conductor de titular en responsabilidades.",
  "note": "La afirmación «el carné necesario será el C» es la del manual; los permisos precisos pueden variar según clase de vehículo y legislación vigente."
 },
 {
  "id": "5-6",
  "section": "circulacion",
  "number": "5.6",
  "title": "Tasas de alcohol citadas por el temario",
  "pages": "40",
  "lead": "Se presenta el límite específico del documento en dos unidades diferentes.",
  "points": [
   [
    "Sangre",
    "0,3 gramos de alcohol por litro de sangre, como máximo según el manual."
   ],
   [
    "Aire espirado",
    "0,15 miligramos de alcohol por litro de aire espirado, como máximo según el manual."
   ],
   [
    "Diferenciar unidades",
    "0,3 g/L en sangre no es lo mismo que 0,15 mg/L en aire espirado; memoriza las unidades con el número."
   ],
   [
    "Advertencia legal",
    "Estas cifras proceden de la edición facilitada: antes de estudiarlas como vigentes, comprobar normativa de tráfico aplicable y convocatoria."
   ]
  ],
  "tip": "Manual: 0,3 g/L en sangre y 0,15 mg/L en aire espirado.",
  "note": "Normativa sobre alcohol, velocidad, permisos y señalización puede haber cambiado. La app debe identificar estos datos expresamente como «según el PDF», no como asesoramiento jurídico actualizado."
 }
];
const CARDS=[
 [
  "clasificacion",
  "¿Qué es MTC?",
  "Masa efectiva más carga normalizada y personal (p. 8).",
  "p. 8"
 ],
 [
  "clasificacion",
  "MTC de un vehículo ligero, tabla 2011",
  "3–7,5 toneladas.",
  "p. 8"
 ],
 [
  "clasificacion",
  "MTC de un vehículo medio, tabla 2011",
  "7,5–16 toneladas.",
  "p. 8"
 ],
 [
  "clasificacion",
  "MTC de un vehículo superior, tabla 2011",
  ">16 toneladas.",
  "p. 8"
 ],
 [
  "clasificacion",
  "Masa media según EN 1846-1:1998",
  "7,5–14 toneladas.",
  "p. 8"
 ],
 [
  "clasificacion",
  "Capacidad de paso categoría 1",
  "Urbano: carreteras practicables.",
  "p. 9"
 ],
 [
  "clasificacion",
  "Capacidad de paso categoría 2",
  "Rural: carreteras y terreno no muy accidentado.",
  "p. 9"
 ],
 [
  "clasificacion",
  "Capacidad de paso categoría 3",
  "Todoterreno: circulación campo a través.",
  "p. 9"
 ],
 [
  "clasificacion",
  "¿Qué son los vehículos de alta elevación?",
  "Escaleras giratorias y plataformas hidráulicas.",
  "p. 9"
 ],
 [
  "nomenclatura",
  "BUL / BUP",
  "Bomba urbana ligera / pesada.",
  "p. 10"
 ],
 [
  "nomenclatura",
  "BRL / BRP",
  "Bomba rural ligera / pesada.",
  "p. 10"
 ],
 [
  "nomenclatura",
  "BFL / BFP",
  "Bomba forestal ligera / pesada.",
  "p. 10"
 ],
 [
  "nomenclatura",
  "BNL / BNP",
  "Bomba nodriza ligera / pesada.",
  "p. 10"
 ],
 [
  "nomenclatura",
  "VAU / VMA",
  "Vehículo de agente único / múltiples agentes.",
  "p. 10"
 ],
 [
  "nomenclatura",
  "FSV",
  "Furgón de salvamentos varios.",
  "p. 10"
 ],
 [
  "nomenclatura",
  "AMB",
  "Ambulancia.",
  "p. 10"
 ],
 [
  "nomenclatura",
  "FEA / FER",
  "Equipo acuático / escalada y espeleología.",
  "p. 10"
 ],
 [
  "nomenclatura",
  "HSR / AVR / AVE",
  "Helicóptero salvamento / avión reconocimiento / avión extinción.",
  "p. 11"
 ],
 [
  "nomenclatura",
  "BSA / BEA",
  "Barca de salvamento / barca de extinción.",
  "p. 11"
 ],
 [
  "nomenclatura",
  "AEA / AES / AEM",
  "Autoescalera automática / semiautomática / manual.",
  "p. 11"
 ],
 [
  "nomenclatura",
  "ABA / ABE",
  "Autobrazo articulado / extensible.",
  "p. 11"
 ],
 [
  "nomenclatura",
  "UMJ / UMC",
  "Mando y jefatura / mando y comunicación.",
  "p. 11"
 ],
 [
  "nomenclatura",
  "UIV / UIS",
  "Inspección y vigilancia / intendencia y suministro.",
  "p. 11"
 ],
 [
  "nomenclatura",
  "UTP / UPC / BUS",
  "Transporte pesado / mixto personal-carga / personal.",
  "p. 11"
 ],
 [
  "nomenclatura",
  "TPP / VIL / VGE",
  "Trasvase peligrosos / iluminación / generador eléctrico.",
  "p. 11"
 ],
 [
  "nomenclatura",
  "MEC / AGP / AGT",
  "Excavadora-cargadora / grúa pesada / grúa taller.",
  "p. 11"
 ],
 [
  "nomenclatura",
  "NBQ",
  "Nuclear, bacteriológico y químico.",
  "p. 11"
 ],
 [
  "componentes",
  "Tensión nominal del equipo eléctrico",
  "24 voltios.",
  "p. 12"
 ],
 [
  "componentes",
  "Diámetro mínimo del faro orientable",
  "200 mm.",
  "p. 12"
 ],
 [
  "componentes",
  "Cabina mínima según el manual",
  "Conductor y dos bomberos.",
  "p. 13"
 ],
 [
  "componentes",
  "Instrumento para horas de bomba",
  "Cuenta-horas.",
  "p. 13"
 ],
 [
  "componentes",
  "Entrada normal de llenado de cisterna",
  "70 mm.",
  "p. 14"
 ],
 [
  "componentes",
  "Boca de aspiración de bomba",
  "100 mm.",
  "p. 14"
 ],
 [
  "componentes",
  "Aspiración hasta qué profundidad",
  "7,5 metros.",
  "p. 14"
 ],
 [
  "componentes",
  "Materiales de la cisterna",
  "Acero inoxidable o polietileno reforzado.",
  "p. 14"
 ],
 [
  "componentes",
  "B de la bomba",
  "Clase contra incendios.",
  "p. 15"
 ],
 [
  "componentes",
  "b / c en bombas",
  "Solo baja / presión combinada.",
  "p. 15"
 ],
 [
  "componentes",
  "B 16/8",
  "1.600 L/min a 8 bar.",
  "p. 15"
 ],
 [
  "componentes",
  "c 2/30",
  "200 L/min a 30 bar.",
  "p. 15"
 ],
 [
  "componentes",
  "Dotación tipo A: peso",
  "437 kg, imprescindible.",
  "p. 16"
 ],
 [
  "componentes",
  "Dotación tipo B: peso",
  "200 kg, complementaria.",
  "p. 18"
 ],
 [
  "componentes",
  "Tipo A: mangotes",
  "4 de 100 mm × 2 m.",
  "p. 16"
 ],
 [
  "componentes",
  "Tipo A: carrete de socorro",
  "40 m de 25 mm.",
  "p. 16"
 ],
 [
  "componentes",
  "Tipo A: mangueras de 45 mm",
  "160 m en rollos de 20 m.",
  "p. 16"
 ],
 [
  "componentes",
  "Tipo A: cuerda principal",
  "40 m, carga de 1.000 kg.",
  "p. 17"
 ],
 [
  "componentes",
  "Tipo B: ERA",
  "2 de 30 minutos mínimos.",
  "p. 18"
 ],
 [
  "componentes",
  "Tipo B: pértiga aislante",
  "Hasta 40 kilovoltios.",
  "p. 18"
 ],
 [
  "vehiculos",
  "Peso convencional de bombero equipado",
  "90 kg.",
  "p. 19"
 ],
 [
  "vehiculos",
  "BUL: capacidad mínima de cisterna",
  "800 L.",
  "p. 20"
 ],
 [
  "vehiculos",
  "BUP: capacidad mínima de cisterna",
  "3.200 L.",
  "p. 21"
 ],
 [
  "vehiculos",
  "BRL: capacidad mínima de cisterna",
  "800 L.",
  "p. 23"
 ],
 [
  "vehiculos",
  "BRP: capacidad mínima de cisterna",
  "2.400 L.",
  "p. 24"
 ],
 [
  "vehiculos",
  "BFL: cisterna según PDF",
  "300–600 L.",
  "p. 26"
 ],
 [
  "vehiculos",
  "BFP: capacidad mínima de cisterna",
  "2.400 L.",
  "p. 27"
 ],
 [
  "vehiculos",
  "BNL: capacidad mínima de cisterna",
  "5.500 L.",
  "p. 28"
 ],
 [
  "vehiculos",
  "BNP: capacidad mínima de cisterna",
  "8.000 L.",
  "p. 29"
 ],
 [
  "vehiculos",
  "BNL/BNP: espuma adicional",
  "500 / 800 L.",
  "pp. 28–29"
 ],
 [
  "vehiculos",
  "BUL/BUP: categoría de paso",
  "1, urbano.",
  "pp. 20–21"
 ],
 [
  "vehiculos",
  "BRL/BRP: categoría de paso",
  "2, rural.",
  "pp. 23–24"
 ],
 [
  "vehiculos",
  "BFL/BFP: categoría de paso",
  "3, todoterreno.",
  "pp. 26–27"
 ],
 [
  "vehiculos",
  "BUL/BUP: velocidad máxima ficha",
  "90 / 100 km/h.",
  "pp. 20–21"
 ],
 [
  "vehiculos",
  "BRL/BRP: velocidad máxima ficha",
  "80 / 80 km/h.",
  "pp. 23–24"
 ],
 [
  "vehiculos",
  "BFL/BFP: velocidad máxima ficha",
  "85 / 85 km/h.",
  "pp. 26–27"
 ],
 [
  "vehiculos",
  "BUL vs BUP: potencia/masa",
  "Ambas 15 CV/t.",
  "pp. 20–21"
 ],
 [
  "vehiculos",
  "BRL vs BRP: potencia/masa",
  "15 / 10 CV/t.",
  "pp. 23–24"
 ],
 [
  "vehiculos",
  "BNL y BNP: potencia/masa",
  "8 CV/t.",
  "pp. 28–29"
 ],
 [
  "vehiculos",
  "Vehículo de polvo: agente propulsor",
  "Nitrógeno.",
  "p. 30"
 ],
 [
  "vehiculos",
  "VAU de polvo: volumen del manual",
  "1.000–6.000 L.",
  "p. 30"
 ],
 [
  "vehiculos",
  "VAU de espuma: capacidad de agua",
  "2.500–11.000 L.",
  "p. 30"
 ],
 [
  "vehiculos",
  "FSV",
  "Furgón polivalente de salvamento.",
  "p. 31"
 ],
 [
  "vehiculos",
  "FEA",
  "Rescate subacuático.",
  "p. 31"
 ],
 [
  "vehiculos",
  "FER",
  "Montaña, escalada y espeleología.",
  "p. 31"
 ],
 [
  "vehiculos",
  "UIS",
  "Avituallamiento y suministro en siniestros prolongados.",
  "p. 32"
 ],
 [
  "vehiculos",
  "AEA / AES / AEM",
  "Autoescaleras automática / semiautomática / manual.",
  "p. 33"
 ],
 [
  "vehiculos",
  "ABA / ABE",
  "Autobrazos articulado / extensible.",
  "p. 34"
 ],
 [
  "vehiculos",
  "Antes de desplazar vehículo de altura",
  "Escala recogida, hidráulicos recogidos y cesta abatida.",
  "p. 34"
 ],
 [
  "vehiculos",
  "BSA vs BEA",
  "Barca salvamento vs barca extinción.",
  "p. 36"
 ],
 [
  "vehiculos",
  "¿Cómo circula un hovercraft?",
  "Sobre colchón de aire a presión.",
  "p. 36"
 ],
 [
  "vehiculos",
  "AVR vs AVE",
  "Avión reconocimiento vs avión extinción.",
  "p. 36"
 ],
 [
  "circulacion",
  "RD citado sobre Reglamento General de Circulación",
  "RD 1428/2003.",
  "p. 37"
 ],
 [
  "circulacion",
  "Señal V-1",
  "Identifica vehículos prioritarios.",
  "p. 37"
 ],
 [
  "circulacion",
  "Señales según art. 68.2 del PDF",
  "Luz + sirena; excepcionalmente solo luz sin peligro.",
  "p. 37"
 ],
 [
  "circulacion",
  "¿Se deben obedecer los agentes de tráfico?",
  "Sí, siempre.",
  "p. 38"
 ],
 [
  "circulacion",
  "¿Puede un prioritario superar velocidad máxima?",
  "Solo bajo condiciones de urgencia y seguridad del manual.",
  "pp. 38–39"
 ],
 [
  "circulacion",
  "Autopista: circulación excepcional contraria",
  "Por arcén, en urgencia y sin comprometer seguridad (según texto).",
  "p. 39"
 ],
 [
  "circulacion",
  "Permiso citado para vehículo de bomberos",
  "C según el PDF; verificar vigencia y vehículo.",
  "p. 39"
 ],
 [
  "circulacion",
  "Alcohol en sangre: cifra del PDF",
  "0,3 g/L.",
  "p. 40"
 ],
 [
  "circulacion",
  "Alcohol en aire: cifra del PDF",
  "0,15 mg/L.",
  "p. 40"
 ]
];
const MATCH_SETS=[
 {
  "title": "Siglas de autobombas",
  "pairs": [
   [
    "BUL",
    "Bomba urbana ligera"
   ],
   [
    "BUP",
    "Bomba urbana pesada"
   ],
   [
    "BRL",
    "Bomba rural ligera"
   ],
   [
    "BRP",
    "Bomba rural pesada"
   ],
   [
    "BFL",
    "Bomba forestal ligera"
   ],
   [
    "BFP",
    "Bomba forestal pesada"
   ],
   [
    "BNL",
    "Bomba nodriza ligera"
   ],
   [
    "BNP",
    "Bomba nodriza pesada"
   ]
  ]
 },
 {
  "title": "Familias de rescate, altura y aeronaves",
  "pairs": [
   [
    "FSV",
    "Furgón salvamentos varios"
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
    "AEA",
    "Autoescalera automática"
   ],
   [
    "ABA",
    "Autobrazo articulado"
   ],
   [
    "BSA",
    "Barca salvamento"
   ],
   [
    "AVR",
    "Avión reconocimiento"
   ],
   [
    "AVE",
    "Avión extinción"
   ]
  ]
 },
 {
  "title": "Vehículos auxiliares",
  "pairs": [
   [
    "UMJ",
    "Mando y jefatura"
   ],
   [
    "UMC",
    "Mando y comunicación"
   ],
   [
    "UIV",
    "Inspección y vigilancia"
   ],
   [
    "UIS",
    "Intendencia y suministro"
   ],
   [
    "UTP",
    "Transporte pesado"
   ],
   [
    "UPC",
    "Personal y carga"
   ],
   [
    "BUS",
    "Transporte personal"
   ]
  ]
 },
 {
  "title": "Vehículo ↔ cisterna mínima",
  "pairs": [
   [
    "BUL",
    "800 L"
   ],
   [
    "BUP",
    "3.200 L"
   ],
   [
    "BRP",
    "2.400 L"
   ],
   [
    "BFL",
    "300–600 L"
   ],
   [
    "BNL",
    "5.500 L"
   ],
   [
    "BNP",
    "8.000 L"
   ]
  ]
 },
 {
  "title": "Clase de paso ↔ tipo de vehículo",
  "pairs": [
   [
    "Categoría 1",
    "Carretera practicable: urbano"
   ],
   [
    "Categoría 2",
    "Carretera y terreno poco accidentado"
   ],
   [
    "Categoría 3",
    "Campo a través, todoterreno"
   ],
   [
    "BUL / BUP",
    "Vehículos urbanos"
   ],
   [
    "BRL / BRP",
    "Vehículos rurales"
   ],
   [
    "BFL / BFP",
    "Vehículos forestales"
   ]
  ]
 },
 {
  "title": "Bomba y dotación ↔ concepto",
  "pairs": [
   [
    "B",
    "Bomba contra incendios"
   ],
   [
    "b",
    "Etapa solo de baja presión"
   ],
   [
    "c",
    "Combinación de baja y alta presión"
   ],
   [
    "B 16/8",
    "1.600 L/min a 8 bar"
   ],
   [
    "c 2/30",
    "200 L/min a 30 bar"
   ],
   [
    "Dotación A",
    "Imprescindible: unos 437 kg"
   ],
   [
    "Dotación B",
    "Complementaria: unos 200 kg"
   ],
   [
    "Aspiración",
    "Profundidad hasta 7,5 metros"
   ]
  ]
 },
 {
  "title": "Vehículos especiales y auxiliares",
  "pairs": [
   [
    "TPP",
    "Trasvase de productos peligrosos"
   ],
   [
    "VIL",
    "Vehículo de iluminación"
   ],
   [
    "VGE",
    "Vehículo generador eléctrico"
   ],
   [
    "MEC",
    "Excavadora-cargadora"
   ],
   [
    "AGP",
    "Autogrúa pesada"
   ],
   [
    "AGT",
    "Autogrúa taller"
   ],
   [
    "FRA",
    "Furgón reserva de aire"
   ],
   [
    "NBQ",
    "Nuclear bacteriológico químico"
   ]
  ]
 },
 {
  "title": "Reglamento de circulación",
  "pairs": [
   [
    "Art. 68.2",
    "Señales de vehículo prioritario"
   ],
   [
    "Art. 173",
    "Nomenclatura de señal V-1"
   ],
   [
    "Art. 67",
    "Excepción a límites velocidad"
   ],
   [
    "Señal V-1",
    "Vehículo prioritario"
   ],
   [
    "0,3 g/L",
    "Alcohol en sangre según PDF"
   ],
   [
    "0,15 mg/L",
    "Alcohol en aire según PDF"
   ],
   [
    "Permiso C",
    "Permiso citado en el manual"
   ]
  ]
 }
];
