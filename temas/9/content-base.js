/* Tema 9 · Instalaciones fijas. Datos extraídos del PDF aportado (44 páginas), con referencias a páginas impresas. El contenido normativo refleja la edición del manual y requiere comprobación de vigencia. */
const SECTIONS=[
 {
  "id": "deteccion",
  "n": "01",
  "title": "Sistemas de detección y alarma",
  "sub": "Detectores, centrales, pulsadores y mantenimiento",
  "pages": "7–15"
 },
 {
  "id": "hidrantes",
  "n": "02",
  "title": "Hidrantes de incendio",
  "sub": "Tipos, emplazamiento, caudal y normativa",
  "pages": "16–20"
 },
 {
  "id": "bies",
  "n": "03",
  "title": "Bocas de incendio equipadas",
  "sub": "BIE 25/45, cobertura, requisitos y mantenimiento",
  "pages": "21–24"
 },
 {
  "id": "columna",
  "n": "04",
  "title": "Sistemas de columna seca",
  "sub": "Configuración, presiones, alturas y comprobaciones",
  "pages": "25–27"
 },
 {
  "id": "bombas",
  "n": "05",
  "title": "Bombas de presión",
  "sub": "Eléctrica, diésel y jockey",
  "pages": "28–29"
 },
 {
  "id": "extincion",
  "n": "06",
  "title": "Sistemas fijos de extinción",
  "sub": "Rociadores, agua nebulizada, espuma, polvo y gases",
  "pages": "30–36"
 },
 {
  "id": "abastecimiento",
  "n": "07",
  "title": "Sistemas de abastecimiento",
  "sub": "Reserva, bombas, redes y mantenimiento",
  "pages": "37–38"
 }
];
const TOPICS=[
 {
  "id": "1-1",
  "section": "deteccion",
  "number": "1",
  "title": "Sistemas de detección y alarma: función y componentes",
  "pages": "7",
  "lead": "La detección reconoce indicios físicos de combustión; la alarma transmite la información para activar la respuesta. La función propia del SDA no es extinguir.",
  "points": [
   [
    "Diferencia entre detección y alarma",
    "La detección advierte de la existencia del fuego; la alarma informa a ocupantes, responsables o servicios de extinción."
   ],
   [
    "Magnitudes detectadas",
    "Calor, humo, llamas y, en su caso, gases u otros indicios que acompañan a la combustión."
   ],
   [
    "Elementos UNE-EN 54-1",
    "Detectores automáticos; equipo de control y señalización; elementos auxiliares; pulsadores; líneas de interconexión; fuente de alimentación."
   ],
   [
    "Reglamento indicado",
    "El tema cita el Reglamento de instalaciones de protección contra incendios (RIPCI), RD 513/2017."
   ],
   [
    "Otras normas citadas",
    "Diseño, instalación, puesta en servicio y uso: UNE 23007-14. Compatibilidad entre componentes: UNE-EN 54-13."
   ],
   [
    "Finalidad operativa",
    "Detectar de forma temprana y transmitir el aviso antes de que el incendio adquiera gran desarrollo."
   ]
  ],
  "tip": "No confundas detector, equipo de control y dispositivo de alarma; son funciones distintas."
 },
 {
  "id": "1-2",
  "section": "deteccion",
  "number": "1.1–1.2",
  "title": "Central receptora y conducciones",
  "pages": "7–8",
  "lead": "La central recibe las señales y desencadena las actuaciones programadas. Las conducciones comunican los elementos detectores con ella.",
  "points": [
   [
    "Central receptora",
    "Aparato que recibe la detección y avisa del incendio o activa sistemas de extinción."
   ],
   [
    "Sistemas sencillos",
    "Pueden limitarse a indicar la existencia de un incendio y requerir intervención humana posterior."
   ],
   [
    "Sistemas complejos",
    "Pueden avisar y activar sistemas de extinción de forma simultánea; el manual menciona comunicación con bomberos o centrales receptoras remotas."
   ],
   [
    "Conducciones",
    "Transmisores, descritos como cables de las instalaciones de alarma, encargados de comunicar detecciones anómalas a la central."
   ],
   [
    "Cadena funcional",
    "Detección → transmisión → central → alarma, comunicación o activación."
   ]
  ],
  "tip": "La central gestiona y señala; la conducción transmite."
 },
 {
  "id": "1-3",
  "section": "deteccion",
  "number": "1.3",
  "title": "Detectores automáticos y normas UNE-EN 54",
  "pages": "8–9",
  "lead": "Se diferencian por la señal fisicoquímica que los activa: temperatura, partículas, gases, radiación de llama o combinación de sensores.",
  "points": [
   [
    "Térmicos termostáticos",
    "Se activan cuando la temperatura alcanza un valor crítico prefijado y mantenido."
   ],
   [
    "Térmicos termovelocimétricos",
    "Responden a una elevación rápida de temperatura, esto es, a la tasa de aumento."
   ],
   [
    "Detectores térmicos combinados",
    "Reúnen el principio termostático y el termovelocimétrico."
   ],
   [
    "Falsas alarmas térmicas",
    "El manual enumera vapor de canalizaciones, ráfagas de aire caliente de hornos y aparición brusca de sol."
   ],
   [
    "De humo iónicos",
    "La influencia de sustancias presentes en el humo modifica una corriente eléctrica."
   ],
   [
    "De humo ópticos",
    "Detectan oscurecimiento y/o dispersión de luz debida a las partículas en suspensión."
   ],
   [
    "De gases",
    "Responden a sustancias gaseosas que acompañan al humo."
   ],
   [
    "De llamas",
    "Sensibles a radiación infrarroja, visible o ultravioleta emitida por el fuego."
   ],
   [
    "Multisensoriales",
    "Combinan dos o más sistemas de detección."
   ],
   [
    "Normativa de marcado del manual",
    "Calor puntual UNE-EN 54-5; humo puntual 54-7; llama 54-10; humo lineal 54-12; humo por aspiración 54-20."
   ]
  ],
  "tip": "Termostático = umbral; termovelocimétrico = velocidad de subida.",
  "table": {
   "headers": [
    "Tipo de detector",
    "Principio de actuación",
    "Norma que cita el tema"
   ],
   "rows": [
    [
     "Calor puntual",
     "Temperatura / velocidad de aumento",
     "UNE-EN 54-5"
    ],
    [
     "Humo puntual",
     "Partículas (óptico/iónico)",
     "UNE-EN 54-7"
    ],
    [
     "Llama puntual",
     "Radiación IR/visible/UV",
     "UNE-EN 54-10"
    ],
    [
     "Humo lineal",
     "Efecto del humo a lo largo de un haz",
     "UNE-EN 54-12"
    ],
    [
     "Humo por aspiración",
     "Muestreo de aire",
     "UNE-EN 54-20"
    ]
   ]
  }
 },
 {
  "id": "1-4",
  "section": "deteccion",
  "number": "1.4",
  "title": "Pulsadores manuales",
  "pages": "9–10",
  "lead": "Permiten que una persona dé la alarma tras apreciar un fuego, con condiciones de accesibilidad y montaje específicas en el texto.",
  "points": [
   [
    "Activación",
    "La persona acciona manualmente el pulsador tras observar o percibir el incendio."
   ],
   [
    "Recorrido máximo",
    "Desde cualquier punto considerado origen de evacuación hasta un pulsador, como máximo 25 m."
   ],
   [
    "Altura de montaje",
    "La parte superior del pulsador debe quedar entre 80 y 120 cm del suelo."
   ],
   [
    "Marcado CE",
    "Norma de dispositivos de activación manual UNE-EN 54-11."
   ],
   [
    "Señalización",
    "El tema remite a UNE 23033-1 para señales de los sistemas de alerta y alarma."
   ],
   [
    "En establecimientos industriales",
    "Si se exige alarma manual, debe haber pulsador junto a cada salida del sector, manteniendo el recorrido máximo de 25 m (p. 13)."
   ]
  ],
  "tip": "25 m de recorrido; parte superior entre 80 y 120 cm.",
  "note": "Son exigencias tal como aparecen en la edición del PDF. Verificar regulación aplicable vigente."
 },
 {
  "id": "1-5",
  "section": "deteccion",
  "number": "1.5",
  "title": "Alarmas acústicas y visuales",
  "pages": "10",
  "lead": "Las señales deben percibirse en el sector de detección. El documento distingue reglas de potencia sonora y supuestos de señalización visual.",
  "points": [
   [
    "Nivel sonoro general del temario",
    "Más de 65 dB y 5 dB sobre cualquier ruido persistente más de 30 segundos."
   ],
   [
    "Si se prevé que los destinatarios duerman",
    "Más de 75 dB, según el texto."
   ],
   [
    "Cuándo añadir señal visual",
    "Si lo exige otra legislación, ruido ambiental superior a 60 dB(A), personas sordas o probable uso de protección auditiva."
   ],
   [
    "Norma del dispositivo acústico",
    "UNE-EN 54-3 para marcado CE."
   ],
   [
    "Señalización",
    "UNE 23033-1."
   ],
   [
    "Dos formas de activación",
    "Automática por señal eléctrica del detector o manual por pulsador."
   ],
   [
    "Percepción por sectores",
    "El nivel sonoro y óptico debe permitir percibir la alarma en el sector correspondiente."
   ]
  ],
  "tip": "65 dB; 75 dB al dormir; +5 dB respecto a ruido persistente de 30 s.",
  "table": {
   "headers": [
    "Situación",
    "Cifra que cita el temario"
   ],
   "rows": [
    [
     "Señal acústica general",
     "> 65 dB"
    ],
    [
     "Ruido de más de 30 s",
     "Superar al ruido en 5 dB"
    ],
    [
     "Ocupantes dormidos",
     "> 75 dB"
    ],
    [
     "Señal visual adicional",
     "Ruido >60 dB(A), sordera o protección auditiva"
    ]
   ]
  }
 },
 {
  "id": "1-6",
  "section": "deteccion",
  "number": "1.6.1",
  "title": "DB-SI: usos y umbrales de detección/alarma",
  "pages": "11–12",
  "lead": "El Documento Básico de Seguridad en caso de Incendio se compone de seis exigencias SI. En SI 4 se recogen instalaciones de protección.",
  "points": [
   [
    "SI 1 a SI 6",
    "SI 1 propagación interior; SI 2 exterior; SI 3 evacuación; SI 4 instalaciones PCI; SI 5 intervención de bomberos; SI 6 resistencia estructural."
   ],
   [
    "Residencial vivienda",
    "Detección y alarma si la altura de evacuación excede 50 m."
   ],
   [
    "Residencial público",
    "Detección y alarma si superficie construida excede 500 m²."
   ],
   [
    "Hospitalario",
    "Detección y alarma en todo caso: detectores y pulsadores, alarmas locales, general e instrucciones verbales."
   ],
   [
    "Administrativo y docente",
    "Alarma si excede 1.000 m²; detección en zonas de riesgo alto si excede 2.000 m² y en todo el edificio si excede 5.000 m²."
   ],
   [
    "Comercial",
    "Alarma si excede 1.000 m²; detección si excede 2.000 m²."
   ],
   [
    "Pública concurrencia",
    "Alarma si ocupación excede 500 personas (con megafonía); detección si excede 1.000 m²."
   ],
   [
    "Aparcamientos",
    "Detección en convencionales de más de 500 m²; en robotizados, pulsadores manuales en todo caso."
   ]
  ],
  "tip": "La tabla del PDF usa «excede de»: no es sinónimo de «igual o mayor».",
  "table": {
   "headers": [
    "Uso",
    "Alarma",
    "Detección"
   ],
   "rows": [
    [
     "Residencial vivienda",
     "Junto con detección si evacuación >50 m",
     "Evacuación >50 m"
    ],
    [
     "Residencial público",
     "Junto con detección si >500 m²",
     ">500 m²"
    ],
    [
     "Hospitalario",
     "En todo caso",
     "En todo caso"
    ],
    [
     "Administrativo",
     ">1.000 m²",
     ">2.000 m² en zonas riesgo alto; >5.000 m² todo"
    ],
    [
     "Docente",
     ">1.000 m²",
     ">2.000 m² en zonas riesgo alto; >5.000 m² todo"
    ],
    [
     "Comercial",
     ">1.000 m²",
     ">2.000 m²"
    ],
    [
     "Pública concurrencia",
     ">500 personas",
     ">1.000 m²"
    ],
    [
     "Aparcamiento",
     "No lo indica esta tabla",
     "Convencional >500 m²; robotizado pulsadores"
    ]
   ]
  },
  "note": "Las tablas del DB-SI reproducen la edición que figura en el PDF, no se ha verificado su vigencia en el CTE actual."
 },
 {
  "id": "1-7",
  "section": "deteccion",
  "number": "1.6.2",
  "title": "Detección y alarma en establecimientos industriales",
  "pages": "12–13",
  "lead": "La norma industrial recogida en el documento distingue actividad productiva y almacenamiento, configuración A/B/C y riesgo medio/alto.",
  "points": [
   [
    "Detección, producción tipo A",
    "A partir de 300 m² de superficie total construida."
   ],
   [
    "Detección, producción tipo B",
    "Riesgo medio ≥2.000 m²; riesgo alto ≥1.000 m²."
   ],
   [
    "Detección, producción tipo C",
    "Riesgo medio ≥3.000 m²; riesgo alto ≥2.000 m²."
   ],
   [
    "Detección, almacenamiento tipo A",
    "A partir de 150 m²."
   ],
   [
    "Detección, almacenamiento tipo B",
    "Riesgo medio ≥1.000 m²; riesgo alto ≥500 m²."
   ],
   [
    "Detección, almacenamiento tipo C",
    "Riesgo medio ≥1.500 m²; riesgo alto ≥800 m²."
   ],
   [
    "Sistema manual en producción",
    "Superficie ≥1.000 m² o si no se exige detección automática, según el temario."
   ],
   [
    "Sistema manual en almacenamiento",
    "Superficie ≥800 m² o si no se exige detección automática."
   ],
   [
    "Distribución de pulsadores",
    "En toda salida de evacuación de cada sector y a no más de 25 m de recorrido."
   ]
  ],
  "tip": "No confundas límites de producción y almacenamiento: en tipo A son 300 y 150 m².",
  "table": {
   "headers": [
    "Configuración / riesgo",
    "Producción: detección ≥",
    "Almacenamiento: detección ≥"
   ],
   "rows": [
    [
     "Tipo A",
     "300 m²",
     "150 m²"
    ],
    [
     "Tipo B · medio",
     "2.000 m²",
     "1.000 m²"
    ],
    [
     "Tipo B · alto",
     "1.000 m²",
     "500 m²"
    ],
    [
     "Tipo C · medio",
     "3.000 m²",
     "1.500 m²"
    ],
    [
     "Tipo C · alto",
     "2.000 m²",
     "800 m²"
    ]
   ]
  },
  "note": "Criterios industriales transcritos del PDF: comprobar normativa vigente que resulte aplicable a la convocatoria."
 },
 {
  "id": "1-8",
  "section": "deteccion",
  "number": "1.7",
  "title": "Mantenimiento de sistemas de detección y alarma",
  "pages": "14–15",
  "lead": "El manual organiza inspecciones trimestrales, semestrales y anuales y fija una vida útil supletoria de detectores.",
  "points": [
   [
    "Cada tres meses: general",
    "Prevenir activaciones no deseadas; documentar modificaciones; comprobar funcionamiento con cada alimentación y señales de central; mantener acumuladores y transmisión."
   ],
   [
    "Cada tres meses: alimentación",
    "Conmutación a baterías ante fallo de red, funcionamiento y detección de avería, restitución a modo normal."
   ],
   [
    "Cada tres meses: pulsadores y aviso",
    "Comprobar señalización de pulsadores y funcionamiento de avisadores ópticos/acústicos y megafonía si existe."
   ],
   [
    "Cada seis meses: pulsadores",
    "Verificar ubicación, identificación, visibilidad, accesibilidad, fijación, limpieza, corrosión y aspecto exterior."
   ],
   [
    "Cada año: central y maniobras",
    "Verificar software, maniobras programadas, avisos, paro de aire, máquinas/ascensores, compuertas y equipos de extracción."
   ],
   [
    "Cada año: detectores",
    "Dejar espacio libre de al menos 500 mm bajo detector puntual y en todas direcciones; revisar estado y probar individualmente todos los detectores."
   ],
   [
    "Cada año: pulsadores",
    "Ensayar funcionamiento de todos."
   ],
   [
    "Vida útil de detectores",
    "Según fabricante; si no se fija vida útil, el manual considera 10 años."
   ]
  ],
  "tip": "Detectores: 500 mm de separación libre; 10 años si el fabricante no indica vida útil.",
  "table": {
   "headers": [
    "Periodicidad",
    "Actuaciones representativas"
   ],
   "rows": [
    [
     "3 meses",
     "Estado general, alimentación, señalización y avisadores"
    ],
    [
     "6 meses",
     "Ubicación, accesibilidad y estado de pulsadores"
    ],
    [
     "1 año",
     "Maniobras, pruebas individuales de detectores y pulsadores, software"
    ],
    [
     "Vida útil",
     "Fabricante; en su defecto 10 años para detectores"
    ]
   ]
  }
 },
 {
  "id": "2-1",
  "section": "hidrantes",
  "number": "2",
  "title": "Tipos de hidrantes: columna y bajo tierra",
  "pages": "16",
  "lead": "Una toma exterior de agua aporta caudal elevado desde la red urbana o un depósito y bomba. No toda boca de riego es un hidrante.",
  "points": [
   [
    "Hidrante",
    "Conjunto de red de tuberías de agua y bocas para abastecimiento y extinción."
   ],
   [
    "Hidrante de columna",
    "Sobresale del suelo, dispone de una o varias conexiones para manguera y se identifica por forma/color."
   ],
   [
    "Columna húmeda",
    "El cuerpo de la columna permanece lleno de agua."
   ],
   [
    "Columna seca",
    "El cuerpo de la columna no permanece lleno de agua; distinto del sistema interior de columna seca de edificios."
   ],
   [
    "Hidrante bajo tierra",
    "Ubicado en arqueta, enterrado; útil con poco espacio o tráfico rodado."
   ],
   [
    "Norma UNE de columna",
    "UNE-EN 14384, con marcado CE, según el manual."
   ],
   [
    "Norma UNE bajo tierra",
    "UNE-EN 14339, con marcado CE."
   ],
   [
    "Fuente de abastecimiento",
    "Red urbana de agua o depósito mediante bomba."
   ]
  ],
  "tip": "Hidrante columna = UNE-EN 14384; bajo tierra = UNE-EN 14339."
 },
 {
  "id": "2-2",
  "section": "hidrantes",
  "number": "2.1",
  "title": "Emplazamiento, presión y caudal del hidrante",
  "pages": "17–18",
  "lead": "RIPCI del documento: la zona protegida se define por recorridos, distancias a fachada, presión y caudal, no solo por «estar cerca».",
  "points": [
   [
    "Distancia horizontal de recorrido",
    "Menos de 100 m al hidrante en zona urbana y menos de 40 m en el resto."
   ],
   [
    "Salida de 100 mm",
    "Al menos uno, preferiblemente en la entrada, con salida de 100 mm orientada perpendicular a fachada y hacia fuera."
   ],
   [
    "Hidrante no situado en vía pública",
    "Entre 5 y 15 m de distancia perpendicular al límite exterior del edificio o zona protegida."
   ],
   [
    "Entorno y señalización",
    "Accesible, fuera de circulación/estacionamiento de vehículos y señalizado."
   ],
   [
    "Caudal mínimo",
    "500 L/min ininterrumpidos por boca."
   ],
   [
    "Presión para llenado de camiones urbanos",
    "100 kPa mínimos en salida si el uso previsto es únicamente llenar camiones."
   ],
   [
    "Presión en los demás casos",
    "500 kPa mínimos en salida para contrarrestar pérdidas de carga."
   ],
   [
    "Riesgo de heladas y drenaje",
    "Si el nivel freático supera válvula de drenaje, taponarla y evacuar agua por otros medios tras uso en zonas de heladas, identificando el hidrante."
   ]
  ],
  "tip": "Urbano <100 m de recorrido; resto <40 m; 500 L/min; 100/500 kPa.",
  "table": {
   "headers": [
    "Requisito",
    "Valor según el manual"
   ],
   "rows": [
    [
     "Recorrido urbano",
     "<100 m"
    ],
    [
     "Recorrido resto",
     "<40 m"
    ],
    [
     "Situación a fachada fuera vía pública",
     "5–15 m"
    ],
    [
     "Una salida",
     "100 mm"
    ],
    [
     "Caudal por boca",
     "≥500 L/min"
    ],
    [
     "Presión solo llenado camiones urbanos",
     "≥100 kPa"
    ],
    [
     "Presión para otros usos",
     "≥500 kPa"
    ]
   ]
  }
 },
 {
  "id": "2-3",
  "section": "hidrantes",
  "number": "2.1.1",
  "title": "Hidrantes exteriores según DB-SI 4",
  "pages": "18–19",
  "lead": "Tabla del manual con umbrales diferenciados por uso y superficie; en general, un hidrante hasta 10.000 m² y otro por cada fracción adicional de 10.000 m².",
  "points": [
   [
    "Uso general",
    "Si evacuación descendente >28 m o ascendente >6 m; también establecimientos de densidad >1 persona/5 m² y superficie entre 2.000–10.000 m²."
   ],
   [
    "Residencial vivienda / administrativo / docente",
    "Uno si superficie entre 5.000 y 10.000 m², más uno por cada 10.000 m² adicionales o fracción."
   ],
   [
    "Residencial público / hospitalario",
    "Uno si superficie entre 2.000 y 10.000 m², más uno por cada 10.000 m² adicionales o fracción."
   ],
   [
    "Comercial",
    "Uno para superficie entre 1.000 y 10.000 m², más uno por cada 10.000 m² adicionales o fracción."
   ],
   [
    "Pública concurrencia",
    "Cines, teatros, auditorios y discotecas: entre 500 y 10.000 m²; recintos deportivos: entre 5.000 y 10.000 m²."
   ],
   [
    "Diferencia con la zona cubierta",
    "No confundir los umbrales de instalación según DB-SI con las distancias de emplazamiento de RIPCI."
   ]
  ],
  "tip": "Hidrantes DB-SI 4: residencial público/hospitalario 2.000; vivienda/administrativo/docente 5.000; comercial 1.000 m².",
  "table": {
   "headers": [
    "Uso",
    "Primer hidrante desde (según tabla)"
   ],
   "rows": [
    [
     "Residencial vivienda",
     "5.000–10.000 m²"
    ],
    [
     "Administrativo",
     "5.000–10.000 m²"
    ],
    [
     "Docente",
     "5.000–10.000 m²"
    ],
    [
     "Residencial público",
     "2.000–10.000 m²"
    ],
    [
     "Hospitalario",
     "2.000–10.000 m²"
    ],
    [
     "Comercial",
     "1.000–10.000 m²"
    ],
    [
     "Cines/teatros/auditorios/discotecas",
     "500–10.000 m²"
    ],
    [
     "Recintos deportivos",
     "5.000–10.000 m²"
    ]
   ]
  },
  "note": "Tabla reproducida del DB-SI citado por el PDF; no se ha contrastado con el DB-SI vigente."
 },
 {
  "id": "2-4",
  "section": "hidrantes",
  "number": "2.1.2",
  "title": "Hidrantes en industrias: implantación y reserva",
  "pages": "19–20",
  "lead": "Según el reglamento industrial recogido en el tema, se cruzan configuración de edificio (A/B/C/D/E), riesgo intrínseco y superficie.",
  "points": [
   [
    "Configuración A",
    "Riesgo medio ≥300 m²; riesgo bajo ≥1.000 m²; la tabla no recoge alto para tipo A."
   ],
   [
    "Configuración B",
    "Riesgo alto desde 1.000 m²; medio desde 2.500 m²; bajo desde 3.500 m²."
   ],
   [
    "Configuración C",
    "Riesgo alto desde 2.000 m²; medio desde 3.500 m²; la tabla no establece bajo."
   ],
   [
    "Configuración D o E",
    "Riesgo medio/alto desde 5.000 m²; bajo desde 15.000 m²."
   ],
   [
    "Radio de protección industrial",
    "40 m horizontales por hidrante; al menos uno con salida de 100 mm."
   ],
   [
    "Distancia a fachada en tabla industrial",
    "Al menos 5 m, con justificación cuando los viales no permitan cumplirlo."
   ],
   [
    "Caudales y autonomías del documento",
    "Tipo A: 500 L/min ×30 min (bajo), 1.000 ×60 (medio); tipo B: 500×30, 1.000×60, 1.000×90; tipo C: 500×30, 1.500×60, 2.000×90; tipo D/E: 1.000×30, 2.000×60, 3.000×90."
   ],
   [
    "Ajuste ante imposibilidad de emplazamiento",
    "Debe justificarse razonada y fehacientemente si no pueden instalarse hidrantes por condiciones locales."
   ]
  ],
  "tip": "Industrial: radio 40 m; tabla de autonomía 30/60/90 min según riesgo.",
  "table": {
   "headers": [
    "Config.",
    "Bajo: caudal/min",
    "Medio: caudal/min",
    "Alto: caudal/min"
   ],
   "rows": [
    [
     "A",
     "500 L/min · 30 min",
     "1.000 L/min · 60 min",
     "—"
    ],
    [
     "B",
     "500 · 30",
     "1.000 · 60",
     "1.000 · 90"
    ],
    [
     "C",
     "500 · 30",
     "1.500 · 60",
     "2.000 · 90"
    ],
    [
     "D/E",
     "1.000 · 30",
     "2.000 · 60",
     "3.000 · 90"
    ]
   ]
  },
  "note": "Las tablas industriales están copiadas como material de estudio histórico del PDF. Comprobar la regulación industrial aplicable a fecha de examen."
 },
 {
  "id": "2-5",
  "section": "hidrantes",
  "number": "2.2",
  "title": "Mantenimiento de hidrantes",
  "pages": "20",
  "lead": "El programa distingue accesibilidad y juntas, engrase y maniobra, estanquidad y sustitución de juntas.",
  "points": [
   [
    "Trimestral",
    "Acceso y señales, especialmente enterrados; inspección de estanqueidad; retirar tapas, engrasar roscas y comprobar juntas de racores."
   ],
   [
    "Semestral",
    "Engrasar tuerca de accionamiento o rellenar aceite; abrir y cerrar; comprobar válvula principal y drenaje."
   ],
   [
    "Anual",
    "Verificar estanquidad de tapones."
   ],
   [
    "Quinquenal",
    "Cambiar juntas de los racores."
   ],
   [
    "Recordatorio",
    "Las revisiones periódicas no sustituyen la necesidad de dejar el hidrante accesible."
   ]
  ],
  "tip": "Hidrantes: 3 meses accesibilidad; 6 meses engrase y maniobra; 1 año tapones; 5 años juntas.",
  "table": {
   "headers": [
    "3 meses",
    "6 meses",
    "1 año",
    "5 años"
   ],
   "rows": [
    [
     "Acceso, señales, roscas, juntas",
     "Engrase y maniobra de válvula/drenaje",
     "Estanquidad tapones",
     "Cambio juntas de racores"
    ]
   ]
  }
 },
 {
  "id": "3-1",
  "section": "bies",
  "number": "3",
  "title": "BIE: componentes y tipos de manguera",
  "pages": "21",
  "lead": "Las bocas de incendio equipadas son armarios interiores con red de suministro de agua, manguera y elementos de aplicación.",
  "points": [
   [
    "Finalidad",
    "Permitir que usuarios del edificio proyecten agua en un fuego mientras llegan bomberos."
   ],
   [
    "Componentes",
    "Red de tuberías para agua, BIE necesarias, devanadera, válvula, lanza-boquilla y armario/soporte."
   ],
   [
    "Manguera semirrígida",
    "25 mm de diámetro interior; UNE-EN 671-1 con marcado CE."
   ],
   [
    "Manguera plana",
    "45 mm de diámetro interior; UNE-EN 671-2 con marcado CE."
   ],
   [
    "Toma adicional profesional",
    "El documento cita una toma adicional de 45 mm en BIE semirrígidas, con válvula, racor y tapón."
   ],
   [
    "Racores",
    "Cumplimiento UNE 23400 según el manual, racores tipo Barcelona."
   ]
  ],
  "tip": "BIE 25 mm semirrígida = UNE-EN 671-1; BIE 45 mm plana = UNE-EN 671-2.",
  "table": {
   "headers": [
    "Tipo",
    "Diámetro",
    "Manguera",
    "UNE-EN"
   ],
   "rows": [
    [
     "BIE 25",
     "25 mm",
     "Semirrígida",
     "671-1"
    ],
    [
     "BIE 45",
     "45 mm",
     "Plana",
     "671-2"
    ]
   ]
  }
 },
 {
  "id": "3-2",
  "section": "bies",
  "number": "3.1",
  "title": "Montaje, distancias y cobertura de las BIE",
  "pages": "21–22",
  "lead": "La distribución debe asegurar que toda la superficie protegida quede alcanzada por al menos una BIE según recorrido de evacuación.",
  "points": [
   [
    "Altura de montaje",
    "Boquilla, válvula de apertura y sistema de apertura de armario como máximo a 1,50 m del suelo."
   ],
   [
    "Cercanía a salidas",
    "A distancia máxima de 5 m de las salidas del sector, siguiendo recorrido de evacuación."
   ],
   [
    "Cobertura total",
    "El sector protegido debe quedar cubierto al menos por una BIE."
   ],
   [
    "Radio de acción",
    "Longitud de la manguera + 5 m, medido siguiendo recorridos de evacuación."
   ],
   [
    "Separación entre BIE",
    "Máximo 50 m de una BIE a la más próxima."
   ],
   [
    "Longitud máxima de manguera",
    "Plana: 20 m; semirrígida: 30 m."
   ],
   [
    "Señalización",
    "UNE 23033-1, colocada inmediatamente junto al armario y no encima."
   ],
   [
    "Evitar obstáculos",
    "La instalación no debe constituir obstáculo en la evacuación o utilización."
   ]
  ],
  "tip": "Altura 1,50 m; salidas 5 m; separación 50 m; mangueras 20/30 m.",
  "table": {
   "headers": [
    "Criterio",
    "BIE plana 45 mm",
    "BIE semirrígida 25 mm"
   ],
   "rows": [
    [
     "Manguera máxima",
     "20 m",
     "30 m"
    ],
    [
     "Radio de acción resultante",
     "25 m",
     "35 m"
    ],
    [
     "Separación entre BIE",
     "50 m",
     "50 m"
    ],
    [
     "Altura de boquilla/válvula",
     "≤1,50 m",
     "≤1,50 m"
    ],
    [
     "Distancia a salida del sector",
     "≤5 m",
     "≤5 m"
    ]
   ]
  }
 },
 {
  "id": "3-3",
  "section": "bies",
  "number": "3.1.1",
  "title": "Exigencias de BIE del DB-SI 4",
  "pages": "22",
  "lead": "Los umbrales varían según uso del edificio y superficie construida.",
  "points": [
   [
    "General",
    "En zonas de riesgo especial alto, principalmente cuando existe materia combustible sólida."
   ],
   [
    "Administrativo",
    "Si superficie construida excede de 2.000 m²."
   ],
   [
    "Residencial público",
    "Si superficie >1.000 m² o capacidad de alojamiento superior a 50 personas."
   ],
   [
    "Hospitalario",
    "En todo caso."
   ],
   [
    "Docente",
    "Si superficie construida excede 2.000 m²."
   ],
   [
    "Comercial",
    "Si superficie excede 500 m²."
   ],
   [
    "Pública concurrencia",
    "Si superficie excede 500 m²."
   ],
   [
    "Residencial vivienda",
    "La tabla aportada aparece con guion para BIE: no indica umbral."
   ]
  ],
  "tip": "BIE del cuadro: hospitalario siempre; comercial/pública concurrencia >500 m².",
  "table": {
   "headers": [
    "Uso",
    "Condición según la tabla"
   ],
   "rows": [
    [
     "Administrativo",
     ">2.000 m²"
    ],
    [
     "Residencial público",
     ">1.000 m² o >50 alojados"
    ],
    [
     "Hospitalario",
     "En todo caso"
    ],
    [
     "Docente",
     ">2.000 m²"
    ],
    [
     "Comercial",
     ">500 m²"
    ],
    [
     "Pública concurrencia",
     ">500 m²"
    ],
    [
     "Vivienda",
     "No indicada (—)"
    ]
   ]
  },
  "note": "Verificar vigencia de los requisitos DB-SI, que se presentan según la edición del documento."
 },
 {
  "id": "3-4",
  "section": "bies",
  "number": "3.1.2",
  "title": "BIE en establecimientos industriales",
  "pages": "23",
  "lead": "Se estudian umbrales de instalación por configuración/riesgo y características hidráulicas por riesgo intrínseco.",
  "points": [
   [
    "Tipo A",
    "Instalación si superficie ≥300 m²."
   ],
   [
    "Tipo B · riesgo medio",
    "Si superficie ≥500 m²."
   ],
   [
    "Tipo B · riesgo alto",
    "Si superficie ≥200 m²."
   ],
   [
    "Tipo C · riesgo medio",
    "Si superficie ≥1.000 m²."
   ],
   [
    "Tipo C · riesgo alto",
    "Si superficie ≥500 m²."
   ],
   [
    "Tipos D o E · alto",
    "Si superficie ocupada ≥5.000 m²."
   ],
   [
    "Riesgo bajo",
    "DN 25; simultaneidad 2 BIE; autonomía 60 min."
   ],
   [
    "Riesgo medio",
    "DN 45; simultaneidad 2 BIE; autonomía 60 min."
   ],
   [
    "Riesgo alto",
    "DN 45; simultaneidad 3 BIE; autonomía 90 min."
   ]
  ],
  "tip": "Bajo = 25/2/60; medio = 45/2/60; alto = 45/3/90.",
  "table": {
   "headers": [
    "Nivel de riesgo",
    "Tipo BIE",
    "Simultaneidad",
    "Autonomía"
   ],
   "rows": [
    [
     "Bajo",
     "DN 25",
     "2",
     "60 min"
    ],
    [
     "Medio",
     "DN 45",
     "2",
     "60 min"
    ],
    [
     "Alto",
     "DN 45",
     "3",
     "90 min"
    ]
   ]
  },
  "note": "Son límites industriales del PDF; verificar normativa actual."
 },
 {
  "id": "3-5",
  "section": "bies",
  "number": "3.2",
  "title": "Mantenimiento de BIE",
  "pages": "24",
  "lead": "El documento remite a UNE-EN 671-3 para pruebas de mangueras y fija una vida útil supletoria.",
  "points": [
   [
    "Cada tres meses",
    "Comprobación de señalización de las BIE."
   ],
   [
    "Cada seis meses",
    "La tabla incluye un guion: no indica actuación semestral concreta."
   ],
   [
    "Cada año",
    "Operaciones de inspección y mantenimiento anual conforme a UNE-EN 671-3."
   ],
   [
    "Cada cinco años",
    "Operaciones quinquenales sobre manguera según UNE-EN 671-3."
   ],
   [
    "Vida útil",
    "Según fabricante; en ausencia de indicación, 20 años para mangueras contra incendios."
   ]
  ],
  "tip": "Vida útil de manguera BIE: 20 años si el fabricante no la especifica.",
  "table": {
   "headers": [
    "3 meses",
    "6 meses",
    "1 año",
    "5 años"
   ],
   "rows": [
    [
     "Revisión señalización",
     "—",
     "Inspección UNE-EN 671-3",
     "Manguera UNE-EN 671-3"
    ]
   ]
  }
 },
 {
  "id": "4-1",
  "section": "columna",
  "number": "4",
  "title": "Sistema de columna seca: estructura y toma exterior",
  "pages": "25",
  "lead": "Canalización de acero normalmente vacía que permite a los bomberos alimentar plantas elevadas desde una bomba o vehículo exterior.",
  "points": [
   [
    "Función",
    "Combina acceso exterior a una toma con salidas interiores por plantas."
   ],
   [
    "Toma de fachada",
    "En fachada o zona accesible al servicio; rótulo «USO EXCLUSIVO BOMBEROS»."
   ],
   [
    "Racores de entrada",
    "Conexión siamesa y válvulas con racores de 70 mm, tapa y llave de purga de 25 mm."
   ],
   [
    "Válvula antirretorno",
    "Evita retornos a la toma exterior."
   ],
   [
    "Columna",
    "Tubería de acero galvanizado DN 80."
   ],
   [
    "Operación",
    "Conectar equipo de bombeo exterior y alimentar la boca del piso afectado."
   ],
   [
    "Relación con BIE",
    "No es lo mismo que BIE: columna seca está concebida para alimentación por servicios de extinción."
   ]
  ],
  "tip": "Exterior: 2×70 mm siamesa y purga 25 mm; tubería DN 80."
 },
 {
  "id": "4-2",
  "section": "columna",
  "number": "4.1",
  "title": "Salidas, alturas, distancias y prueba de presión",
  "pages": "25–26",
  "lead": "La distribución ascendente es distinta de la descendente; ambas requieren tomas independientes y pruebas de estanqueidad.",
  "points": [
   [
    "Ascendente: plantas servidas",
    "Salidas en plantas pares hasta la octava y en todas a partir de esta."
   ],
   [
    "Ascendente: seccionamiento",
    "Válvula cada cuatro plantas, situada por encima de la salida correspondiente."
   ],
   [
    "Descendente",
    "Válvula de seccionamiento y salida en cada planta; llave justo por debajo de la boca."
   ],
   [
    "Salida de planta",
    "Conexión siamesa con llaves incorporadas y racores de 45 mm con tapa."
   ],
   [
    "Ubicación",
    "Salidas en escaleras o vestíbulos previos; centro de bocas a 0,90 m del suelo, también toma exterior."
   ],
   [
    "Distancia entre columnas",
    "Menos de 60 m siguiendo recorridos de evacuación."
   ],
   [
    "Prueba de columnas hasta 30 m",
    "Presión estática mínima 1.470 kPa (15 kg/cm²)."
   ],
   [
    "Prueba de columnas de más de 30 m",
    "Presión mínima 2.450 kPa (25 kg/cm²)."
   ],
   [
    "Duración de prueba",
    "Dos horas como mínimo sin fugas."
   ],
   [
    "Señalización",
    "Texto «USO EXCLUSIVO BOMBEROS», junto al armario y no sobre él; identificar zonas y presión máxima."
   ]
  ],
  "tip": "0,90 m bocas; <60 m columnas; 1.470/2.450 kPa durante ≥2 h.",
  "table": {
   "headers": [
    "Requisito",
    "Hasta 30 m de altura",
    "Más de 30 m"
   ],
   "rows": [
    [
     "Presión mínima de prueba",
     "1.470 kPa = 15 kg/cm²",
     "2.450 kPa = 25 kg/cm²"
    ],
    [
     "Duración",
     "≥2 horas",
     "≥2 horas"
    ],
    [
     "Pérdidas",
     "No se admiten fugas",
     "No se admiten fugas"
    ]
   ]
  }
 },
 {
  "id": "4-3",
  "section": "columna",
  "number": "4.1.1–4.1.2",
  "title": "Dónde es exigible la columna seca",
  "pages": "26–27",
  "lead": "Los límites de altura varían según uso del edificio, y la tabla industrial suma condición de riesgo.",
  "points": [
   [
    "Residencial vivienda",
    "Altura de evacuación >24 m."
   ],
   [
    "Administrativo",
    "Altura de evacuación >24 m."
   ],
   [
    "Residencial público",
    "Altura de evacuación >24 m."
   ],
   [
    "Hospitalario",
    "Altura de evacuación >15 m."
   ],
   [
    "Docente",
    "Altura de evacuación >24 m."
   ],
   [
    "Comercial",
    "Altura de evacuación >24 m."
   ],
   [
    "Pública concurrencia",
    "Altura de evacuación >24 m."
   ],
   [
    "Industrial",
    "Riesgo intrínseco medio o alto y altura de evacuación ≥15 m."
   ],
   [
    "Dónde van las salidas",
    "Recintos de escaleras o vestíbulos previos a ellas."
   ]
  ],
  "tip": "Hospitalario >15 m; resto de usos tabulados >24 m; industrial medio/alto ≥15 m.",
  "table": {
   "headers": [
    "Uso",
    "Exigencia de altura"
   ],
   "rows": [
    [
     "Hospitalario",
     ">15 m"
    ],
    [
     "Vivienda / administrativo / residencial público",
     ">24 m"
    ],
    [
     "Docente / comercial / pública concurrencia",
     ">24 m"
    ],
    [
     "Industria medio/alto",
     "≥15 m"
    ]
   ]
  },
  "note": "Umbrales normativos reproducidos del PDF, no verificados frente a legislación actual."
 },
 {
  "id": "4-4",
  "section": "columna",
  "number": "4.2",
  "title": "Mantenimiento de columna seca",
  "pages": "27",
  "lead": "No se indican revisiones trimestrales ni anuales en la tabla; las actuaciones clave son semestrales y quinquenales.",
  "points": [
   [
    "Cada seis meses: accesos y señales",
    "Comprobar acceso a toma de calle y tomas de piso y su señalización."
   ],
   [
    "Cada seis meses: cierres",
    "Revisar tapas y cierres; engrasar cuando haga falta."
   ],
   [
    "Cada seis meses: llaves",
    "Maniobrar llaves; confirmar siamesas cerradas y válvulas de seccionamiento abiertas."
   ],
   [
    "Cada seis meses: racores",
    "Verificar tapas colocadas y ajustadas."
   ],
   [
    "Cada cinco años",
    "Prueba de la instalación en las condiciones de recepción."
   ],
   [
    "Cada tres meses y cada año",
    "El cuadro original marca guion (—)."
   ]
  ],
  "tip": "Semestral: siamesas cerradas y seccionamiento abierto; 5 años: prueba de recepción.",
  "table": {
   "headers": [
    "Periodicidad",
    "Actuación"
   ],
   "rows": [
    [
     "3 meses",
     "—"
    ],
    [
     "6 meses",
     "Accesibilidad, señales, tapas, válvulas y racores"
    ],
    [
     "1 año",
     "—"
    ],
    [
     "5 años",
     "Prueba de instalación en condiciones de recepción"
    ]
   ]
  }
 },
 {
  "id": "5-1",
  "section": "bombas",
  "number": "5.1–5.2",
  "title": "Bombas de presión: eléctrica y diésel",
  "pages": "28–29",
  "lead": "Extraen e impulsan agua desde la fuente de alimentación a redes de extinción. Los dos motores tienen funciones complementarias.",
  "points": [
   [
    "Función de las bombas",
    "Extraer agua, llenar depósitos o impulsar agua a presión a la red."
   ],
   [
    "Bomba eléctrica",
    "Accionada con motor eléctrico, con fuente independiente o conexión mediante transformador, según el documento."
   ],
   [
    "Bomba diésel o de gasoil",
    "Realiza el mismo bombeo con motor de combustión; el manual la establece como bomba de respaldo al faltar corriente."
   ],
   [
    "Arranque de bomba de gasoil",
    "Utiliza un sistema de baterías para poner el motor en marcha."
   ],
   [
    "Redundancia",
    "La función de la diésel permite mantener la impulsión si se interrumpe el suministro eléctrico."
   ]
  ],
  "tip": "Eléctrica = motor eléctrico; gasoil = respaldo ante fallo eléctrico, arranque por baterías."
 },
 {
  "id": "5-2",
  "section": "bombas",
  "number": "5.3",
  "title": "Bomba jockey: mantenimiento de presión",
  "pages": "29",
  "lead": "Bomba auxiliar de poco caudal, habitualmente eléctrica, que mantiene la presión sin que arranquen las bombas principales por pequeñas pérdidas.",
  "points": [
   [
    "Misión",
    "Mantener presión mínima en la red PCI de forma automática ante descensos pequeños."
   ],
   [
    "Caudal",
    "Bajo caudal, adecuado para compensar pequeñas pérdidas sin trabajo de bombas principales."
   ],
   [
    "Accionamiento",
    "Generalmente eléctrico, según el manual."
   ],
   [
    "Diferencia con bomba principal",
    "La jockey conserva presión; la principal suministra el gran caudal de extinción."
   ],
   [
    "Importancia práctica",
    "Evita arranques innecesarios de bombas principales y mantiene disponible la red."
   ]
  ],
  "tip": "Jockey = presión; principal = caudal contra incendio."
 },
 {
  "id": "6-1",
  "section": "extincion",
  "number": "6.1",
  "title": "Rociadores automáticos de agua (sprinklers)",
  "pages": "30",
  "lead": "Tuberías en techos o falsos techos alimentan boquillas obturadas por cápsulas termosensibles; al alcanzarse temperatura, abren el paso de agua.",
  "points": [
   [
    "Red de tuberías",
    "Cubre los espacios que se quieren proteger, generalmente a altura de techo."
   ],
   [
    "Boquilla termosensible",
    "En el documento se describe un dispositivo con líquido dilatable que rompe al alcanzar temperatura determinada."
   ],
   [
    "Activación automática local",
    "El aumento térmico deja pasar agua en el rociador afectado sin operación humana."
   ],
   [
    "Agente extintor",
    "Agua."
   ],
   [
    "Función",
    "Protección automática del recinto frente al incendio."
   ],
   [
    "Aspecto operativo",
    "Debe existir suministro suficiente y red con presión/caudal adecuados."
   ]
  ],
  "tip": "Sprinkler: calor → ampolla/cápsula → apertura → descarga."
 },
 {
  "id": "6-2",
  "section": "extincion",
  "number": "6.2",
  "title": "Extinción por agua nebulizada",
  "pages": "31",
  "lead": "El agua se descarga en gotas finas desde boquillas, con o sin mezcla de agentes adicionales; puede alimentarse por botellas o depósito y bombeo.",
  "points": [
   [
    "Definición funcional",
    "Sistema de protección activa contra incendio conectado a agua para extinguir y evitar reignición tras su actuación."
   ],
   [
    "Suministro",
    "Botellas o depósito con sistema de bombeo."
   ],
   [
    "Red y boquillas",
    "Red de tuberías con boquillas capaces de nebulizar agua en la descarga."
   ],
   [
    "Agente",
    "Agua nebulizada pura o combinada con otros agentes."
   ],
   [
    "Norma citada originalmente",
    "UNE-CEN/TS 14972."
   ],
   [
    "Revisión indicada por el propio PDF",
    "El documento señala que UNE-CEN/TS 14972 fue anulada y reemplazada por UNE-EN 14972-1:2021."
   ],
   [
    "Actualización reglamentaria UNE",
    "El texto explica el procedimiento de resolución de actualización de las normas y el uso de ediciones posteriores si no cambian criterios básicos o incrementan seguridad."
   ]
  ],
  "tip": "Agua nebulizada: botellas/depósito, boquillas de niebla; PDF cita UNE-EN 14972-1:2021.",
  "note": "El PDF ya advierte que UNE-CEN/TS 14972 fue sustituida; debe verificarse la edición aplicable en la convocatoria."
 },
 {
  "id": "6-3",
  "section": "extincion",
  "number": "6.3",
  "title": "Sistema fijo de espuma física",
  "pages": "32",
  "lead": "Emplea espuma para fuegos en líquidos inflamables, mediante dosificación y aplicación desde instalación fija.",
  "points": [
   [
    "Aplicación principal",
    "Extinción de fuegos en líquidos inflamables."
   ],
   [
    "Red de tuberías",
    "Transporta el fluido hacia zonas de descarga."
   ],
   [
    "Tanque de espumógeno",
    "Almacena el concentrado espumógeno."
   ],
   [
    "Dosificador/proporcionador",
    "Mezcla el concentrado en proporción adecuada con el agua."
   ],
   [
    "Boquillas de descarga",
    "Aplican la espuma al riesgo protegido."
   ],
   [
    "Normas para sistema/componentes",
    "Diseño e instalación UNE-EN 13565-2; componentes UNE-EN 13565-1."
   ],
   [
    "Normas del espumógeno",
    "UNE-EN 1568-1, -2, -3 y -4 para diferentes expansiones/agentes, según el documento."
   ]
  ],
  "tip": "Espuma fija: tuberías + tanque espumógeno + dosificador + boquillas."
 },
 {
  "id": "6-4",
  "section": "extincion",
  "number": "6.4",
  "title": "Sistema fijo de polvo extintor",
  "pages": "32",
  "lead": "El polvo viaja por tuberías impulsado mediante gas a presión y se descarga por boquillas; se exige seguridad o evacuación del personal.",
  "points": [
   [
    "Recipiente de polvo",
    "Almacena el agente extintor sólido."
   ],
   [
    "Gas propelente",
    "Recipientes de gas que impulsan el polvo."
   ],
   [
    "Tuberías y válvulas",
    "Red de distribución y válvulas selectoras."
   ],
   [
    "Accionamiento y control",
    "Dispositivos de activación de descarga y supervisión."
   ],
   [
    "Boquillas de descarga",
    "Distribuyen el polvo."
   ],
   [
    "Protección de personas",
    "Solo usar cuando esté garantizada la seguridad o evacuación del personal."
   ],
   [
    "Prealarma y retardo",
    "El disparo debe incorporar aviso previo y un retardo que permita evacuar antes de descargar."
   ]
  ],
  "tip": "Polvo fijo requiere gas propulsor, prealarma y retardo para evacuación."
 },
 {
  "id": "6-5",
  "section": "extincion",
  "number": "6.5",
  "title": "Sistema fijo de agentes gaseosos",
  "pages": "33",
  "lead": "Sistema con recipientes de gas presurizado, control, distribución y difusores; el documento exige cálculo del agente, seguridad de ocupantes y activación controlada.",
  "points": [
   [
    "Agentes citados",
    "CO₂ y halón en el texto; no se ha verificado la autorización actual de estos agentes."
   ],
   [
    "Accionamiento",
    "Automático por detectores adecuados al riesgo o manual desde lugar accesible."
   ],
   [
    "Equipos de control",
    "Supervisan el funcionamiento y la actuación."
   ],
   [
    "Recipientes",
    "Contienen agente extintor gaseoso a presión."
   ],
   [
    "Distribución y difusión",
    "Tuberías y difusores de descarga."
   ],
   [
    "Concentración necesaria",
    "Debe justificarse según riesgo, igual que capacidad suficiente de los recipientes."
   ],
   [
    "Seguridad de personas",
    "Uso condicionado a que seguridad o evacuación del personal queden garantizadas."
   ],
   [
    "Prealarma y retardo",
    "Antes de la descarga se debe advertir y conceder tiempo de evacuación."
   ]
  ],
  "tip": "Gases: automatismo/manual, recipientes + tuberías + difusores, prealarma y retardo.",
  "note": "El temario menciona halones. No implica que estén permitidos para nuevas instalaciones; comprobar restricciones normativas vigentes."
 },
 {
  "id": "6-6",
  "section": "extincion",
  "number": "6.6",
  "title": "Exigencias industriales para sistemas fijos",
  "pages": "33–35",
  "lead": "Según la tabla del temario, rociadores se exigen por combinación de actividad, tipo de edificio, riesgo y superficie; otras instalaciones se asignan por riesgo específico.",
  "points": [
   [
    "Rociadores en producción tipo A medio",
    "Superficie ≥500 m²."
   ],
   [
    "Rociadores en producción tipo B",
    "Medio ≥2.500 m²; alto ≥1.000 m²."
   ],
   [
    "Rociadores en producción tipo C",
    "Medio ≥3.500 m²; alto ≥2.000 m²."
   ],
   [
    "Rociadores en almacenamiento tipo A medio",
    "Superficie ≥300 m²."
   ],
   [
    "Rociadores en almacenamiento tipo B",
    "Medio ≥1.500 m²; alto ≥800 m²."
   ],
   [
    "Rociadores en almacenamiento tipo C",
    "Medio ≥2.000 m²; alto ≥1.000 m²."
   ],
   [
    "Agua pulverizada",
    "Cuando sea necesario refrigerar partes del riesgo, mantener estabilidad estructural o evitar calor radiante de otro riesgo, además de supuestos sectoriales."
   ],
   [
    "Espuma física",
    "Supuestos sectoriales y, en general, sectores donde se manipulen líquidos inflamables capaces de propagar fuego a otros."
   ],
   [
    "Polvo",
    "Cuando lo requieran disposiciones industriales sectoriales/específicas."
   ],
   [
    "Gases",
    "Cuando se exija sectorialmente y en recintos con equipos electrónicos, cálculo o control que pudieran sufrir daño por agua."
   ]
  ],
  "tip": "Rociadores industriales: distingue producción/almacenamiento; gases protegen especialmente equipos sensibles al agua.",
  "table": {
   "headers": [
    "Tipo y riesgo",
    "Producción: superficie ≥",
    "Almacenamiento: superficie ≥"
   ],
   "rows": [
    [
     "A · medio",
     "500 m²",
     "300 m²"
    ],
    [
     "B · medio",
     "2.500 m²",
     "1.500 m²"
    ],
    [
     "B · alto",
     "1.000 m²",
     "800 m²"
    ],
    [
     "C · medio",
     "3.500 m²",
     "2.000 m²"
    ],
    [
     "C · alto",
     "2.000 m²",
     "1.000 m²"
    ]
   ]
  },
  "note": "Estos límites se reproducen del reglamento industrial según el PDF; verificar su vigencia antes de considerarlos aplicables a instalaciones actuales."
 },
 {
  "id": "6-7",
  "section": "extincion",
  "number": "6.7",
  "title": "Mantenimiento de sistemas fijos de extinción",
  "pages": "35–36",
  "lead": "Se revisan dispositivos de descarga, señalización, fuentes, estado del agente y pruebas; los rociadores añaden inspecciones UNE-EN 12845.",
  "points": [
   [
    "Cada tres meses",
    "Dispositivos de descarga libres; estado de boquillas/difusores/rociadores; conexiones; manómetros; circuitos de señalización; mandos de paro/disparo; limpieza."
   ],
   [
    "Cada seis meses",
    "Inspección visual de tuberías, depósitos y latiguillos; válvulas abiertas en sistemas de agua; suministro eléctrico a grupos de bombeo."
   ],
   [
    "Cada año: actuación",
    "Comprobar respuesta a señales manuales y automáticas."
   ],
   [
    "Cada año: agua y espuma",
    "Confirmar presión y caudal de suministro."
   ],
   [
    "Cada año: polvo y espumas",
    "Verificar cantidad de polvo y ausencia de degradación del espumógeno."
   ],
   [
    "Cada año: gases",
    "Verificar estanquidad de salas protegidas por inundación total, en condiciones de descarga."
   ],
   [
    "Cada cinco años",
    "Prueba en condiciones de recepción; en espuma, coeficiente de expansión, tiempo de drenaje y concentración según UNE-EN 1568 aplicable."
   ],
   [
    "Programa de rociadores",
    "Además de revisiones anuales, el PDF cita controles cada 3, 10 y 25 años conforme UNE-EN 12845."
   ]
  ],
  "tip": "Rociadores: revisiones especiales 3, 10 y 25 años (UNE-EN 12845 citada).",
  "table": {
   "headers": [
    "Periodicidad",
    "Acción principal"
   ],
   "rows": [
    [
     "Trimestral",
     "Boquillas, señalización, manómetros, limpieza"
    ],
    [
     "Semestral",
     "Tuberías, depósitos, válvulas, alimentación"
    ],
    [
     "Anual",
     "Funcionamiento, agente, caudal/presión y salas"
    ],
    [
     "Quinquenal",
     "Prueba de recepción; ensayo de espuma"
    ],
    [
     "Rociadores: 3 / 10 / 25 años",
     "Inspecciones específicas UNE-EN 12845"
    ]
   ]
  }
 },
 {
  "id": "7-1",
  "section": "abastecimiento",
  "number": "7–7.1",
  "title": "Abastecimiento de agua: fuente, impulsión y red",
  "pages": "37",
  "lead": "El abastecimiento reúne las fuentes de agua, los equipos de impulsión y la red general PCI para garantizar caudal, presión y autonomía.",
  "points": [
   [
    "Fuente de agua",
    "Almacenamiento o aportación suficiente para atender demandas del sistema."
   ],
   [
    "Equipos de impulsión",
    "Bombas destinadas a aportar el caudal y presión requeridos."
   ],
   [
    "Red general de incendios",
    "Distribuye el agua a las instalaciones protegidas."
   ],
   [
    "Parámetros de diseño",
    "Caudal, presión y tiempo de autonomía de los sistemas a los que alimenta."
   ],
   [
    "Norma citada",
    "UNE 23500 para sistemas de abastecimiento de agua contra incendios."
   ],
   [
    "Exigencia industrial",
    "Por disposiciones específicas o cuando deba alimentar BIE, hidrantes exteriores, rociadores, agua pulverizada o espuma."
   ],
   [
    "Diferencia respecto a un extintor",
    "Es infraestructura de suministro a uno o más sistemas, no un punto de descarga individual."
   ]
  ],
  "tip": "Abastecimiento = fuentes + bombas + red; parámetros = caudal + presión + autonomía."
 },
 {
  "id": "7-2",
  "section": "abastecimiento",
  "number": "7.2",
  "title": "Mantenimiento del abastecimiento de agua",
  "pages": "38",
  "lead": "La inspección comprueba disponibilidad de agua, combustible, energía, baterías, válvulas, equipos y funcionamiento automático/manual.",
  "points": [
   [
    "Trimestral: componentes",
    "Inspección de depósitos, válvulas, mandos, alarmas, motobombas, accesorios y señalización."
   ],
   [
    "Trimestral: operación",
    "Comprobar arranque automático y manual; acumuladores, bornas y niveles de agua, combustible, aceite."
   ],
   [
    "Trimestral: entorno",
    "Accesibilidad, limpieza y ventilación de salas de bombas."
   ],
   [
    "Semestral: válvulas",
    "Accionamiento y engrase; comprobación/ajuste de prensaestopas."
   ],
   [
    "Semestral: energía y motores",
    "Velocidad de motores a distintas cargas; alimentación eléctrica, líneas y protecciones."
   ],
   [
    "Anual: reserva y filtros",
    "Comprobar reserva de agua, limpiar filtros y retenedores de suciedad."
   ],
   [
    "Anual: baterías y rendimiento",
    "Revisar baterías y electrolito; prueba de recepción con curvas de abastecimiento de cada fuente de agua y energía."
   ],
   [
    "Quinquenal",
    "La tabla del manual no indica una tarea específica."
   ]
  ],
  "tip": "Cada año: reserva + filtros + prueba de curvas con cada fuente de agua y energía.",
  "table": {
   "headers": [
    "3 meses",
    "6 meses",
    "1 año"
   ],
   "rows": [
    [
     "Equipos, automatismos, acumuladores, niveles y ventilación",
     "Válvulas, prensaestopas, motores, red eléctrica",
     "Reserva, filtros, baterías y curvas de abastecimiento"
    ]
   ]
  }
 }
];
