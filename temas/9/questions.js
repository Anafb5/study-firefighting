/* Tema 9 · preguntas de repaso con cuatro opciones, explicaciones y página del PDF. No equivalen a verificación normativa vigente. */
const QUESTIONS=[
 {
  "section": "deteccion",
  "q": "Según el Tema 9, ¿qué corresponde a «54-5» en «Detectores y norma UNE-EN 54»?",
  "options": [
   "Detector de humo puntual",
   "Detector de calor puntual",
   "Detector puntual de llama",
   "Detector de humo lineal"
  ],
  "correct": 1,
  "why": "La correspondencia del manual es «54-5» → «Detector de calor puntual». Referencia: apartado «Detectores y norma UNE-EN 54».",
  "page": "9–10",
  "id": "q001",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "Según el Tema 9, ¿qué corresponde a «54-7» en «Detectores y norma UNE-EN 54»?",
  "options": [
   "Detector de humo puntual",
   "Detector puntual de llama",
   "Detector de humo lineal",
   "Detector de humo por aspiración"
  ],
  "correct": 0,
  "why": "La correspondencia del manual es «54-7» → «Detector de humo puntual». Referencia: apartado «Detectores y norma UNE-EN 54».",
  "page": "9–10",
  "id": "q002",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "Según el Tema 9, ¿qué corresponde a «54-10» en «Detectores y norma UNE-EN 54»?",
  "options": [
   "Detector de humo lineal",
   "Detector de humo por aspiración",
   "Pulsadores manuales",
   "Detector puntual de llama"
  ],
  "correct": 3,
  "why": "La correspondencia del manual es «54-10» → «Detector puntual de llama». Referencia: apartado «Detectores y norma UNE-EN 54».",
  "page": "9–10",
  "id": "q003",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "Según el Tema 9, ¿qué corresponde a «54-12» en «Detectores y norma UNE-EN 54»?",
  "options": [
   "Detector de humo por aspiración",
   "Pulsadores manuales",
   "Detector de humo lineal",
   "Avisador acústico de alarma"
  ],
  "correct": 2,
  "why": "La correspondencia del manual es «54-12» → «Detector de humo lineal». Referencia: apartado «Detectores y norma UNE-EN 54».",
  "page": "9–10",
  "id": "q004",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "Según el Tema 9, ¿qué corresponde a «54-20» en «Detectores y norma UNE-EN 54»?",
  "options": [
   "Pulsadores manuales",
   "Detector de humo por aspiración",
   "Avisador acústico de alarma",
   "Compatibilidad de componentes"
  ],
  "correct": 1,
  "why": "La correspondencia del manual es «54-20» → «Detector de humo por aspiración». Referencia: apartado «Detectores y norma UNE-EN 54».",
  "page": "9–10",
  "id": "q005",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "Según el Tema 9, ¿qué corresponde a «54-11» en «Detectores y norma UNE-EN 54»?",
  "options": [
   "Pulsadores manuales",
   "Avisador acústico de alarma",
   "Compatibilidad de componentes",
   "Detector de calor puntual"
  ],
  "correct": 0,
  "why": "La correspondencia del manual es «54-11» → «Pulsadores manuales». Referencia: apartado «Detectores y norma UNE-EN 54».",
  "page": "9–10",
  "id": "q006",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "Según el Tema 9, ¿qué corresponde a «54-3» en «Detectores y norma UNE-EN 54»?",
  "options": [
   "Compatibilidad de componentes",
   "Detector de calor puntual",
   "Detector de humo puntual",
   "Avisador acústico de alarma"
  ],
  "correct": 3,
  "why": "La correspondencia del manual es «54-3» → «Avisador acústico de alarma». Referencia: apartado «Detectores y norma UNE-EN 54».",
  "page": "9–10",
  "id": "q007",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "Según el Tema 9, ¿qué corresponde a «54-13» en «Detectores y norma UNE-EN 54»?",
  "options": [
   "Detector de calor puntual",
   "Detector de humo puntual",
   "Compatibilidad de componentes",
   "Detector puntual de llama"
  ],
  "correct": 2,
  "why": "La correspondencia del manual es «54-13» → «Compatibilidad de componentes». Referencia: apartado «Detectores y norma UNE-EN 54».",
  "page": "9–10",
  "id": "q008",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "Según el Tema 9, ¿qué corresponde a «Termostático» en «Qué detecta cada sistema»?",
  "options": [
   "Aumento rápido de temperatura",
   "Umbral prefijado de temperatura",
   "Influencia del humo sobre corriente",
   "Oscurecimiento o dispersión lumínica"
  ],
  "correct": 1,
  "why": "La correspondencia del manual es «Termostático» → «Umbral prefijado de temperatura». Referencia: apartado «Qué detecta cada sistema».",
  "page": "8–9",
  "id": "q009",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "Según el Tema 9, ¿qué corresponde a «Termovelocimétrico» en «Qué detecta cada sistema»?",
  "options": [
   "Aumento rápido de temperatura",
   "Influencia del humo sobre corriente",
   "Oscurecimiento o dispersión lumínica",
   "Sustancias gaseosas"
  ],
  "correct": 0,
  "why": "La correspondencia del manual es «Termovelocimétrico» → «Aumento rápido de temperatura». Referencia: apartado «Qué detecta cada sistema».",
  "page": "8–9",
  "id": "q010",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "Según el Tema 9, ¿qué corresponde a «Humo iónico» en «Qué detecta cada sistema»?",
  "options": [
   "Oscurecimiento o dispersión lumínica",
   "Sustancias gaseosas",
   "Radiación IR, visible y UV",
   "Influencia del humo sobre corriente"
  ],
  "correct": 3,
  "why": "La correspondencia del manual es «Humo iónico» → «Influencia del humo sobre corriente». Referencia: apartado «Qué detecta cada sistema».",
  "page": "8–9",
  "id": "q011",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "Según el Tema 9, ¿qué corresponde a «Humo óptico» en «Qué detecta cada sistema»?",
  "options": [
   "Sustancias gaseosas",
   "Radiación IR, visible y UV",
   "Oscurecimiento o dispersión lumínica",
   "Dos o más métodos de detección"
  ],
  "correct": 2,
  "why": "La correspondencia del manual es «Humo óptico» → «Oscurecimiento o dispersión lumínica». Referencia: apartado «Qué detecta cada sistema».",
  "page": "8–9",
  "id": "q012",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "Según el Tema 9, ¿qué corresponde a «Detector de gas» en «Qué detecta cada sistema»?",
  "options": [
   "Radiación IR, visible y UV",
   "Sustancias gaseosas",
   "Dos o más métodos de detección",
   "Umbral prefijado de temperatura"
  ],
  "correct": 1,
  "why": "La correspondencia del manual es «Detector de gas» → «Sustancias gaseosas». Referencia: apartado «Qué detecta cada sistema».",
  "page": "8–9",
  "id": "q013",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "Según el Tema 9, ¿qué corresponde a «Detector de llama» en «Qué detecta cada sistema»?",
  "options": [
   "Radiación IR, visible y UV",
   "Dos o más métodos de detección",
   "Umbral prefijado de temperatura",
   "Aumento rápido de temperatura"
  ],
  "correct": 0,
  "why": "La correspondencia del manual es «Detector de llama» → «Radiación IR, visible y UV». Referencia: apartado «Qué detecta cada sistema».",
  "page": "8–9",
  "id": "q014",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "Según el Tema 9, ¿qué corresponde a «Multisensorial» en «Qué detecta cada sistema»?",
  "options": [
   "Umbral prefijado de temperatura",
   "Aumento rápido de temperatura",
   "Influencia del humo sobre corriente",
   "Dos o más métodos de detección"
  ],
  "correct": 3,
  "why": "La correspondencia del manual es «Multisensorial» → «Dos o más métodos de detección». Referencia: apartado «Qué detecta cada sistema».",
  "page": "8–9",
  "id": "q015",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "Según el Tema 9, ¿qué corresponde a «Pulsador: recorrido» en «Distancias y cifras del sistema de alarma»?",
  "options": [
   "80–120 cm",
   ">65 dB",
   "25 m como máximo",
   ">75 dB"
  ],
  "correct": 2,
  "why": "La correspondencia del manual es «Pulsador: recorrido» → «25 m como máximo». Referencia: apartado «Distancias y cifras del sistema de alarma».",
  "page": "9–15",
  "id": "q016",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "Según el Tema 9, ¿qué corresponde a «Pulsador: altura superior» en «Distancias y cifras del sistema de alarma»?",
  "options": [
   ">65 dB",
   "80–120 cm",
   ">75 dB",
   ">60 dB(A) ambiente"
  ],
  "correct": 1,
  "why": "La correspondencia del manual es «Pulsador: altura superior» → «80–120 cm». Referencia: apartado «Distancias y cifras del sistema de alarma».",
  "page": "9–15",
  "id": "q017",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "Según el Tema 9, ¿qué corresponde a «Alarma general» en «Distancias y cifras del sistema de alarma»?",
  "options": [
   ">65 dB",
   ">75 dB",
   ">60 dB(A) ambiente",
   "500 mm mínimo"
  ],
  "correct": 0,
  "why": "La correspondencia del manual es «Alarma general» → «>65 dB». Referencia: apartado «Distancias y cifras del sistema de alarma».",
  "page": "9–15",
  "id": "q018",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "Según el Tema 9, ¿qué corresponde a «Alarma con durmientes» en «Distancias y cifras del sistema de alarma»?",
  "options": [
   ">60 dB(A) ambiente",
   "500 mm mínimo",
   "10 años",
   ">75 dB"
  ],
  "correct": 3,
  "why": "La correspondencia del manual es «Alarma con durmientes» → «>75 dB». Referencia: apartado «Distancias y cifras del sistema de alarma».",
  "page": "9–15",
  "id": "q019",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "Según el Tema 9, ¿qué corresponde a «Umbral para alarma visual» en «Distancias y cifras del sistema de alarma»?",
  "options": [
   "500 mm mínimo",
   "10 años",
   ">60 dB(A) ambiente",
   "25 m como máximo"
  ],
  "correct": 2,
  "why": "La correspondencia del manual es «Umbral para alarma visual» → «>60 dB(A) ambiente». Referencia: apartado «Distancias y cifras del sistema de alarma».",
  "page": "9–15",
  "id": "q020",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "Según el Tema 9, ¿qué corresponde a «Espacio libre bajo detector» en «Distancias y cifras del sistema de alarma»?",
  "options": [
   "10 años",
   "500 mm mínimo",
   "25 m como máximo",
   "80–120 cm"
  ],
  "correct": 1,
  "why": "La correspondencia del manual es «Espacio libre bajo detector» → «500 mm mínimo». Referencia: apartado «Distancias y cifras del sistema de alarma».",
  "page": "9–15",
  "id": "q021",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "Según el Tema 9, ¿qué corresponde a «Vida útil supletoria detector» en «Distancias y cifras del sistema de alarma»?",
  "options": [
   "10 años",
   "25 m como máximo",
   "80–120 cm",
   ">65 dB"
  ],
  "correct": 0,
  "why": "La correspondencia del manual es «Vida útil supletoria detector» → «10 años». Referencia: apartado «Distancias y cifras del sistema de alarma».",
  "page": "9–15",
  "id": "q022",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "Según el Tema 9, ¿qué corresponde a «Recorrido urbano» en «Hidrantes: números operativos»?",
  "options": [
   "<40 m",
   "5–15 m (no vía pública)",
   "≥500 L/min",
   "<100 m"
  ],
  "correct": 3,
  "why": "La correspondencia del manual es «Recorrido urbano» → «<100 m». Referencia: apartado «Hidrantes: números operativos».",
  "page": "17",
  "id": "q023",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "Según el Tema 9, ¿qué corresponde a «Recorrido fuera de urbano» en «Hidrantes: números operativos»?",
  "options": [
   "5–15 m (no vía pública)",
   "≥500 L/min",
   "<40 m",
   "≥100 kPa"
  ],
  "correct": 2,
  "why": "La correspondencia del manual es «Recorrido fuera de urbano» → «<40 m». Referencia: apartado «Hidrantes: números operativos».",
  "page": "17",
  "id": "q024",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "Según el Tema 9, ¿qué corresponde a «Distancia a fachada» en «Hidrantes: números operativos»?",
  "options": [
   "≥500 L/min",
   "5–15 m (no vía pública)",
   "≥100 kPa",
   "≥500 kPa"
  ],
  "correct": 1,
  "why": "La correspondencia del manual es «Distancia a fachada» → «5–15 m (no vía pública)». Referencia: apartado «Hidrantes: números operativos».",
  "page": "17",
  "id": "q025",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "Según el Tema 9, ¿qué corresponde a «Caudal por boca» en «Hidrantes: números operativos»?",
  "options": [
   "≥500 L/min",
   "≥100 kPa",
   "≥500 kPa",
   "100 mm"
  ],
  "correct": 0,
  "why": "La correspondencia del manual es «Caudal por boca» → «≥500 L/min». Referencia: apartado «Hidrantes: números operativos».",
  "page": "17",
  "id": "q026",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "Según el Tema 9, ¿qué corresponde a «Presión llenado camiones» en «Hidrantes: números operativos»?",
  "options": [
   "≥500 kPa",
   "100 mm",
   "40 m",
   "≥100 kPa"
  ],
  "correct": 3,
  "why": "La correspondencia del manual es «Presión llenado camiones» → «≥100 kPa». Referencia: apartado «Hidrantes: números operativos».",
  "page": "17",
  "id": "q027",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "Según el Tema 9, ¿qué corresponde a «Presión otros casos» en «Hidrantes: números operativos»?",
  "options": [
   "100 mm",
   "40 m",
   "≥500 kPa",
   "<100 m"
  ],
  "correct": 2,
  "why": "La correspondencia del manual es «Presión otros casos» → «≥500 kPa». Referencia: apartado «Hidrantes: números operativos».",
  "page": "17",
  "id": "q028",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "Según el Tema 9, ¿qué corresponde a «Salida exigible al menos en uno» en «Hidrantes: números operativos»?",
  "options": [
   "40 m",
   "100 mm",
   "<100 m",
   "<40 m"
  ],
  "correct": 1,
  "why": "La correspondencia del manual es «Salida exigible al menos en uno» → «100 mm». Referencia: apartado «Hidrantes: números operativos».",
  "page": "17",
  "id": "q029",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "Según el Tema 9, ¿qué corresponde a «Radio industrial por hidrante» en «Hidrantes: números operativos»?",
  "options": [
   "40 m",
   "<100 m",
   "<40 m",
   "5–15 m (no vía pública)"
  ],
  "correct": 0,
  "why": "La correspondencia del manual es «Radio industrial por hidrante» → «40 m». Referencia: apartado «Hidrantes: números operativos».",
  "page": "17",
  "id": "q030",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "Según el Tema 9, ¿qué corresponde a «Hidrante columna» en «Hidrantes: normas y mantenimiento»?",
  "options": [
   "UNE-EN 14339",
   "Accesibilidad, señales y roscas",
   "Engrasar y maniobrar válvula",
   "UNE-EN 14384"
  ],
  "correct": 3,
  "why": "La correspondencia del manual es «Hidrante columna» → «UNE-EN 14384». Referencia: apartado «Hidrantes: normas y mantenimiento».",
  "page": "16–20",
  "id": "q031",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "Según el Tema 9, ¿qué corresponde a «Hidrante bajo tierra» en «Hidrantes: normas y mantenimiento»?",
  "options": [
   "Accesibilidad, señales y roscas",
   "Engrasar y maniobrar válvula",
   "UNE-EN 14339",
   "Estanquidad de tapones"
  ],
  "correct": 2,
  "why": "La correspondencia del manual es «Hidrante bajo tierra» → «UNE-EN 14339». Referencia: apartado «Hidrantes: normas y mantenimiento».",
  "page": "16–20",
  "id": "q032",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "Según el Tema 9, ¿qué corresponde a «Revisión trimestral» en «Hidrantes: normas y mantenimiento»?",
  "options": [
   "Engrasar y maniobrar válvula",
   "Accesibilidad, señales y roscas",
   "Estanquidad de tapones",
   "Cambio de juntas de racores"
  ],
  "correct": 1,
  "why": "La correspondencia del manual es «Revisión trimestral» → «Accesibilidad, señales y roscas». Referencia: apartado «Hidrantes: normas y mantenimiento».",
  "page": "16–20",
  "id": "q033",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "Según el Tema 9, ¿qué corresponde a «Revisión semestral» en «Hidrantes: normas y mantenimiento»?",
  "options": [
   "Engrasar y maniobrar válvula",
   "Estanquidad de tapones",
   "Cambio de juntas de racores",
   "UNE-EN 14384"
  ],
  "correct": 0,
  "why": "La correspondencia del manual es «Revisión semestral» → «Engrasar y maniobrar válvula». Referencia: apartado «Hidrantes: normas y mantenimiento».",
  "page": "16–20",
  "id": "q034",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "Según el Tema 9, ¿qué corresponde a «Revisión anual» en «Hidrantes: normas y mantenimiento»?",
  "options": [
   "Cambio de juntas de racores",
   "UNE-EN 14384",
   "UNE-EN 14339",
   "Estanquidad de tapones"
  ],
  "correct": 3,
  "why": "La correspondencia del manual es «Revisión anual» → «Estanquidad de tapones». Referencia: apartado «Hidrantes: normas y mantenimiento».",
  "page": "16–20",
  "id": "q035",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "Según el Tema 9, ¿qué corresponde a «Revisión quinquenal» en «Hidrantes: normas y mantenimiento»?",
  "options": [
   "UNE-EN 14384",
   "UNE-EN 14339",
   "Cambio de juntas de racores",
   "Accesibilidad, señales y roscas"
  ],
  "correct": 2,
  "why": "La correspondencia del manual es «Revisión quinquenal» → «Cambio de juntas de racores». Referencia: apartado «Hidrantes: normas y mantenimiento».",
  "page": "16–20",
  "id": "q036",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "Según el Tema 9, ¿qué corresponde a «BIE semirrígida» en «BIE: dimensiones y normas»?",
  "options": [
   "45 mm · UNE-EN 671-2",
   "25 mm · UNE-EN 671-1",
   "20 m",
   "30 m"
  ],
  "correct": 1,
  "why": "La correspondencia del manual es «BIE semirrígida» → «25 mm · UNE-EN 671-1». Referencia: apartado «BIE: dimensiones y normas».",
  "page": "21–22",
  "id": "q037",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "Según el Tema 9, ¿qué corresponde a «BIE plana» en «BIE: dimensiones y normas»?",
  "options": [
   "45 mm · UNE-EN 671-2",
   "20 m",
   "30 m",
   "50 m"
  ],
  "correct": 0,
  "why": "La correspondencia del manual es «BIE plana» → «45 mm · UNE-EN 671-2». Referencia: apartado «BIE: dimensiones y normas».",
  "page": "21–22",
  "id": "q038",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "Según el Tema 9, ¿qué corresponde a «Longitud máxima plana» en «BIE: dimensiones y normas»?",
  "options": [
   "30 m",
   "50 m",
   "5 m",
   "20 m"
  ],
  "correct": 3,
  "why": "La correspondencia del manual es «Longitud máxima plana» → «20 m». Referencia: apartado «BIE: dimensiones y normas».",
  "page": "21–22",
  "id": "q039",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "Según el Tema 9, ¿qué corresponde a «Longitud máxima semirrígida» en «BIE: dimensiones y normas»?",
  "options": [
   "50 m",
   "5 m",
   "30 m",
   "1,50 m"
  ],
  "correct": 2,
  "why": "La correspondencia del manual es «Longitud máxima semirrígida» → «30 m». Referencia: apartado «BIE: dimensiones y normas».",
  "page": "21–22",
  "id": "q040",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "Según el Tema 9, ¿qué corresponde a «Separación entre BIE» en «BIE: dimensiones y normas»?",
  "options": [
   "5 m",
   "50 m",
   "1,50 m",
   "Longitud de manguera +5 m"
  ],
  "correct": 1,
  "why": "La correspondencia del manual es «Separación entre BIE» → «50 m». Referencia: apartado «BIE: dimensiones y normas».",
  "page": "21–22",
  "id": "q041",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "Según el Tema 9, ¿qué corresponde a «Distancia de BIE a salidas» en «BIE: dimensiones y normas»?",
  "options": [
   "5 m",
   "1,50 m",
   "Longitud de manguera +5 m",
   "25 mm · UNE-EN 671-1"
  ],
  "correct": 0,
  "why": "La correspondencia del manual es «Distancia de BIE a salidas» → «5 m». Referencia: apartado «BIE: dimensiones y normas».",
  "page": "21–22",
  "id": "q042",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "Según el Tema 9, ¿qué corresponde a «Altura máxima de boquilla» en «BIE: dimensiones y normas»?",
  "options": [
   "Longitud de manguera +5 m",
   "25 mm · UNE-EN 671-1",
   "45 mm · UNE-EN 671-2",
   "1,50 m"
  ],
  "correct": 3,
  "why": "La correspondencia del manual es «Altura máxima de boquilla» → «1,50 m». Referencia: apartado «BIE: dimensiones y normas».",
  "page": "21–22",
  "id": "q043",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "Según el Tema 9, ¿qué corresponde a «Radio de acción BIE» en «BIE: dimensiones y normas»?",
  "options": [
   "25 mm · UNE-EN 671-1",
   "45 mm · UNE-EN 671-2",
   "Longitud de manguera +5 m",
   "20 m"
  ],
  "correct": 2,
  "why": "La correspondencia del manual es «Radio de acción BIE» → «Longitud de manguera +5 m». Referencia: apartado «BIE: dimensiones y normas».",
  "page": "21–22",
  "id": "q044",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "Según el Tema 9, ¿qué corresponde a «Riesgo bajo» en «BIE industriales: simultaneidad»?",
  "options": [
   "DN 45 · 2 unidades · 60 min",
   "DN 25 · 2 unidades · 60 min",
   "DN 45 · 3 unidades · 90 min",
   "≥300 m²"
  ],
  "correct": 1,
  "why": "La correspondencia del manual es «Riesgo bajo» → «DN 25 · 2 unidades · 60 min». Referencia: apartado «BIE industriales: simultaneidad».",
  "page": "23",
  "id": "q045",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "Según el Tema 9, ¿qué corresponde a «Riesgo medio» en «BIE industriales: simultaneidad»?",
  "options": [
   "DN 45 · 2 unidades · 60 min",
   "DN 45 · 3 unidades · 90 min",
   "≥300 m²",
   "≥200 m²"
  ],
  "correct": 0,
  "why": "La correspondencia del manual es «Riesgo medio» → «DN 45 · 2 unidades · 60 min». Referencia: apartado «BIE industriales: simultaneidad».",
  "page": "23",
  "id": "q046",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "Según el Tema 9, ¿qué corresponde a «Riesgo alto» en «BIE industriales: simultaneidad»?",
  "options": [
   "≥300 m²",
   "≥200 m²",
   "≥1.000 m²",
   "DN 45 · 3 unidades · 90 min"
  ],
  "correct": 3,
  "why": "La correspondencia del manual es «Riesgo alto» → «DN 45 · 3 unidades · 90 min». Referencia: apartado «BIE industriales: simultaneidad».",
  "page": "23",
  "id": "q047",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "Según el Tema 9, ¿qué corresponde a «Tipo A superficie» en «BIE industriales: simultaneidad»?",
  "options": [
   "≥200 m²",
   "≥1.000 m²",
   "≥300 m²",
   "≥5.000 m²"
  ],
  "correct": 2,
  "why": "La correspondencia del manual es «Tipo A superficie» → «≥300 m²». Referencia: apartado «BIE industriales: simultaneidad».",
  "page": "23",
  "id": "q048",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "Según el Tema 9, ¿qué corresponde a «Tipo B riesgo alto» en «BIE industriales: simultaneidad»?",
  "options": [
   "≥1.000 m²",
   "≥200 m²",
   "≥5.000 m²",
   "DN 25 · 2 unidades · 60 min"
  ],
  "correct": 1,
  "why": "La correspondencia del manual es «Tipo B riesgo alto» → «≥200 m²». Referencia: apartado «BIE industriales: simultaneidad».",
  "page": "23",
  "id": "q049",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "Según el Tema 9, ¿qué corresponde a «Tipo C riesgo medio» en «BIE industriales: simultaneidad»?",
  "options": [
   "≥1.000 m²",
   "≥5.000 m²",
   "DN 25 · 2 unidades · 60 min",
   "DN 45 · 2 unidades · 60 min"
  ],
  "correct": 0,
  "why": "La correspondencia del manual es «Tipo C riesgo medio» → «≥1.000 m²». Referencia: apartado «BIE industriales: simultaneidad».",
  "page": "23",
  "id": "q050",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "Según el Tema 9, ¿qué corresponde a «Tipo D/E alto» en «BIE industriales: simultaneidad»?",
  "options": [
   "DN 25 · 2 unidades · 60 min",
   "DN 45 · 2 unidades · 60 min",
   "DN 45 · 3 unidades · 90 min",
   "≥5.000 m²"
  ],
  "correct": 3,
  "why": "La correspondencia del manual es «Tipo D/E alto» → «≥5.000 m²». Referencia: apartado «BIE industriales: simultaneidad».",
  "page": "23",
  "id": "q051",
  "difficulty": "Detalle"
 },
 {
  "section": "columna",
  "q": "Según el Tema 9, ¿qué corresponde a «Toma exterior» en «Columna seca: salidas y pruebas»?",
  "options": [
   "25 mm",
   "Acero galvanizado DN 80",
   "Siamesa de 70 mm",
   "Siamesa 45 mm"
  ],
  "correct": 2,
  "why": "La correspondencia del manual es «Toma exterior» → «Siamesa de 70 mm». Referencia: apartado «Columna seca: salidas y pruebas».",
  "page": "25–26",
  "id": "q052",
  "difficulty": "Detalle"
 },
 {
  "section": "columna",
  "q": "Según el Tema 9, ¿qué corresponde a «Purga» en «Columna seca: salidas y pruebas»?",
  "options": [
   "Acero galvanizado DN 80",
   "25 mm",
   "Siamesa 45 mm",
   "0,90 m"
  ],
  "correct": 1,
  "why": "La correspondencia del manual es «Purga» → «25 mm». Referencia: apartado «Columna seca: salidas y pruebas».",
  "page": "25–26",
  "id": "q053",
  "difficulty": "Detalle"
 },
 {
  "section": "columna",
  "q": "Según el Tema 9, ¿qué corresponde a «Tubería» en «Columna seca: salidas y pruebas»?",
  "options": [
   "Acero galvanizado DN 80",
   "Siamesa 45 mm",
   "0,90 m",
   "<60 m"
  ],
  "correct": 0,
  "why": "La correspondencia del manual es «Tubería» → «Acero galvanizado DN 80». Referencia: apartado «Columna seca: salidas y pruebas».",
  "page": "25–26",
  "id": "q054",
  "difficulty": "Detalle"
 },
 {
  "section": "columna",
  "q": "Según el Tema 9, ¿qué corresponde a «Salida de planta» en «Columna seca: salidas y pruebas»?",
  "options": [
   "0,90 m",
   "<60 m",
   "1.470 kPa",
   "Siamesa 45 mm"
  ],
  "correct": 3,
  "why": "La correspondencia del manual es «Salida de planta» → «Siamesa 45 mm». Referencia: apartado «Columna seca: salidas y pruebas».",
  "page": "25–26",
  "id": "q055",
  "difficulty": "Detalle"
 },
 {
  "section": "columna",
  "q": "Según el Tema 9, ¿qué corresponde a «Altura del centro de boca» en «Columna seca: salidas y pruebas»?",
  "options": [
   "<60 m",
   "1.470 kPa",
   "0,90 m",
   "2.450 kPa"
  ],
  "correct": 2,
  "why": "La correspondencia del manual es «Altura del centro de boca» → «0,90 m». Referencia: apartado «Columna seca: salidas y pruebas».",
  "page": "25–26",
  "id": "q056",
  "difficulty": "Detalle"
 },
 {
  "section": "columna",
  "q": "Según el Tema 9, ¿qué corresponde a «Separación de columnas» en «Columna seca: salidas y pruebas»?",
  "options": [
   "1.470 kPa",
   "<60 m",
   "2.450 kPa",
   "≥2 h"
  ],
  "correct": 1,
  "why": "La correspondencia del manual es «Separación de columnas» → «<60 m». Referencia: apartado «Columna seca: salidas y pruebas».",
  "page": "25–26",
  "id": "q057",
  "difficulty": "Detalle"
 },
 {
  "section": "columna",
  "q": "Según el Tema 9, ¿qué corresponde a «Presión hasta 30 m» en «Columna seca: salidas y pruebas»?",
  "options": [
   "1.470 kPa",
   "2.450 kPa",
   "≥2 h",
   "Siamesa de 70 mm"
  ],
  "correct": 0,
  "why": "La correspondencia del manual es «Presión hasta 30 m» → «1.470 kPa». Referencia: apartado «Columna seca: salidas y pruebas».",
  "page": "25–26",
  "id": "q058",
  "difficulty": "Detalle"
 },
 {
  "section": "columna",
  "q": "Según el Tema 9, ¿qué corresponde a «Presión más de 30 m» en «Columna seca: salidas y pruebas»?",
  "options": [
   "≥2 h",
   "Siamesa de 70 mm",
   "25 mm",
   "2.450 kPa"
  ],
  "correct": 3,
  "why": "La correspondencia del manual es «Presión más de 30 m» → «2.450 kPa». Referencia: apartado «Columna seca: salidas y pruebas».",
  "page": "25–26",
  "id": "q059",
  "difficulty": "Detalle"
 },
 {
  "section": "columna",
  "q": "Según el Tema 9, ¿qué corresponde a «Duración de prueba» en «Columna seca: salidas y pruebas»?",
  "options": [
   "Siamesa de 70 mm",
   "25 mm",
   "≥2 h",
   "Acero galvanizado DN 80"
  ],
  "correct": 2,
  "why": "La correspondencia del manual es «Duración de prueba» → «≥2 h». Referencia: apartado «Columna seca: salidas y pruebas».",
  "page": "25–26",
  "id": "q060",
  "difficulty": "Detalle"
 },
 {
  "section": "extincion",
  "q": "Según el Tema 9, ¿qué corresponde a «Bomba eléctrica» en «Bombas y agentes de instalaciones fijas»?",
  "options": [
   "Respaldo ante fallo de red",
   "Motor eléctrico",
   "Mantener presión sin bombas principales",
   "Rociador automático por calor"
  ],
  "correct": 1,
  "why": "La correspondencia del manual es «Bomba eléctrica» → «Motor eléctrico». Referencia: apartado «Bombas y agentes de instalaciones fijas».",
  "page": "28–33",
  "id": "q061",
  "difficulty": "Detalle"
 },
 {
  "section": "extincion",
  "q": "Según el Tema 9, ¿qué corresponde a «Bomba diésel» en «Bombas y agentes de instalaciones fijas»?",
  "options": [
   "Respaldo ante fallo de red",
   "Mantener presión sin bombas principales",
   "Rociador automático por calor",
   "Boquillas de gotas finas"
  ],
  "correct": 0,
  "why": "La correspondencia del manual es «Bomba diésel» → «Respaldo ante fallo de red». Referencia: apartado «Bombas y agentes de instalaciones fijas».",
  "page": "28–33",
  "id": "q062",
  "difficulty": "Detalle"
 },
 {
  "section": "extincion",
  "q": "Según el Tema 9, ¿qué corresponde a «Bomba jockey» en «Bombas y agentes de instalaciones fijas»?",
  "options": [
   "Rociador automático por calor",
   "Boquillas de gotas finas",
   "Dosificador y tanque espumógeno",
   "Mantener presión sin bombas principales"
  ],
  "correct": 3,
  "why": "La correspondencia del manual es «Bomba jockey» → «Mantener presión sin bombas principales». Referencia: apartado «Bombas y agentes de instalaciones fijas».",
  "page": "28–33",
  "id": "q063",
  "difficulty": "Detalle"
 },
 {
  "section": "extincion",
  "q": "Según el Tema 9, ¿qué corresponde a «Sprinkler» en «Bombas y agentes de instalaciones fijas»?",
  "options": [
   "Boquillas de gotas finas",
   "Dosificador y tanque espumógeno",
   "Rociador automático por calor",
   "Gas propelente y prealarma"
  ],
  "correct": 2,
  "why": "La correspondencia del manual es «Sprinkler» → «Rociador automático por calor». Referencia: apartado «Bombas y agentes de instalaciones fijas».",
  "page": "28–33",
  "id": "q064",
  "difficulty": "Detalle"
 },
 {
  "section": "extincion",
  "q": "Según el Tema 9, ¿qué corresponde a «Agua nebulizada» en «Bombas y agentes de instalaciones fijas»?",
  "options": [
   "Dosificador y tanque espumógeno",
   "Boquillas de gotas finas",
   "Gas propelente y prealarma",
   "Difusores y evacuación"
  ],
  "correct": 1,
  "why": "La correspondencia del manual es «Agua nebulizada» → «Boquillas de gotas finas». Referencia: apartado «Bombas y agentes de instalaciones fijas».",
  "page": "28–33",
  "id": "q065",
  "difficulty": "Detalle"
 },
 {
  "section": "extincion",
  "q": "Según el Tema 9, ¿qué corresponde a «Espuma física» en «Bombas y agentes de instalaciones fijas»?",
  "options": [
   "Dosificador y tanque espumógeno",
   "Gas propelente y prealarma",
   "Difusores y evacuación",
   "Motor eléctrico"
  ],
  "correct": 0,
  "why": "La correspondencia del manual es «Espuma física» → «Dosificador y tanque espumógeno». Referencia: apartado «Bombas y agentes de instalaciones fijas».",
  "page": "28–33",
  "id": "q066",
  "difficulty": "Detalle"
 },
 {
  "section": "extincion",
  "q": "Según el Tema 9, ¿qué corresponde a «Polvo fijo» en «Bombas y agentes de instalaciones fijas»?",
  "options": [
   "Difusores y evacuación",
   "Motor eléctrico",
   "Respaldo ante fallo de red",
   "Gas propelente y prealarma"
  ],
  "correct": 3,
  "why": "La correspondencia del manual es «Polvo fijo» → «Gas propelente y prealarma». Referencia: apartado «Bombas y agentes de instalaciones fijas».",
  "page": "28–33",
  "id": "q067",
  "difficulty": "Detalle"
 },
 {
  "section": "extincion",
  "q": "Según el Tema 9, ¿qué corresponde a «Gaseoso fijo» en «Bombas y agentes de instalaciones fijas»?",
  "options": [
   "Motor eléctrico",
   "Respaldo ante fallo de red",
   "Difusores y evacuación",
   "Mantener presión sin bombas principales"
  ],
  "correct": 2,
  "why": "La correspondencia del manual es «Gaseoso fijo» → «Difusores y evacuación». Referencia: apartado «Bombas y agentes de instalaciones fijas».",
  "page": "28–33",
  "id": "q068",
  "difficulty": "Detalle"
 },
 {
  "section": "abastecimiento",
  "q": "Según el Tema 9, ¿qué corresponde a «Hidrante · 5 años» en «Periodicidades de mantenimiento»?",
  "options": [
   "Operaciones sobre manguera UNE 671-3",
   "Sustituir juntas racores",
   "20 años",
   "Maniobrar llaves y revisar accesos"
  ],
  "correct": 1,
  "why": "La correspondencia del manual es «Hidrante · 5 años» → «Sustituir juntas racores». Referencia: apartado «Periodicidades de mantenimiento».",
  "page": "15–38",
  "id": "q069",
  "difficulty": "Detalle"
 },
 {
  "section": "abastecimiento",
  "q": "Según el Tema 9, ¿qué corresponde a «BIE · 5 años» en «Periodicidades de mantenimiento»?",
  "options": [
   "Operaciones sobre manguera UNE 671-3",
   "20 años",
   "Maniobrar llaves y revisar accesos",
   "Prueba condiciones recepción"
  ],
  "correct": 0,
  "why": "La correspondencia del manual es «BIE · 5 años» → «Operaciones sobre manguera UNE 671-3». Referencia: apartado «Periodicidades de mantenimiento».",
  "page": "15–38",
  "id": "q070",
  "difficulty": "Detalle"
 },
 {
  "section": "abastecimiento",
  "q": "Según el Tema 9, ¿qué corresponde a «BIE sin vida útil fabricante» en «Periodicidades de mantenimiento»?",
  "options": [
   "Maniobrar llaves y revisar accesos",
   "Prueba condiciones recepción",
   "3, 10 y 25 años",
   "20 años"
  ],
  "correct": 3,
  "why": "La correspondencia del manual es «BIE sin vida útil fabricante» → «20 años». Referencia: apartado «Periodicidades de mantenimiento».",
  "page": "15–38",
  "id": "q071",
  "difficulty": "Detalle"
 },
 {
  "section": "abastecimiento",
  "q": "Según el Tema 9, ¿qué corresponde a «Columna seca · 6 meses» en «Periodicidades de mantenimiento»?",
  "options": [
   "Prueba condiciones recepción",
   "3, 10 y 25 años",
   "Maniobrar llaves y revisar accesos",
   "Curvas con fuentes de agua y energía"
  ],
  "correct": 2,
  "why": "La correspondencia del manual es «Columna seca · 6 meses» → «Maniobrar llaves y revisar accesos». Referencia: apartado «Periodicidades de mantenimiento».",
  "page": "15–38",
  "id": "q072",
  "difficulty": "Detalle"
 },
 {
  "section": "abastecimiento",
  "q": "Según el Tema 9, ¿qué corresponde a «Columna seca · 5 años» en «Periodicidades de mantenimiento»?",
  "options": [
   "3, 10 y 25 años",
   "Prueba condiciones recepción",
   "Curvas con fuentes de agua y energía",
   "10 años"
  ],
  "correct": 1,
  "why": "La correspondencia del manual es «Columna seca · 5 años» → «Prueba condiciones recepción». Referencia: apartado «Periodicidades de mantenimiento».",
  "page": "15–38",
  "id": "q073",
  "difficulty": "Detalle"
 },
 {
  "section": "abastecimiento",
  "q": "Según el Tema 9, ¿qué corresponde a «Rociadores especiales» en «Periodicidades de mantenimiento»?",
  "options": [
   "3, 10 y 25 años",
   "Curvas con fuentes de agua y energía",
   "10 años",
   "Sustituir juntas racores"
  ],
  "correct": 0,
  "why": "La correspondencia del manual es «Rociadores especiales» → «3, 10 y 25 años». Referencia: apartado «Periodicidades de mantenimiento».",
  "page": "15–38",
  "id": "q074",
  "difficulty": "Detalle"
 },
 {
  "section": "abastecimiento",
  "q": "Según el Tema 9, ¿qué corresponde a «Suministro · anual» en «Periodicidades de mantenimiento»?",
  "options": [
   "10 años",
   "Sustituir juntas racores",
   "Operaciones sobre manguera UNE 671-3",
   "Curvas con fuentes de agua y energía"
  ],
  "correct": 3,
  "why": "La correspondencia del manual es «Suministro · anual» → «Curvas con fuentes de agua y energía». Referencia: apartado «Periodicidades de mantenimiento».",
  "page": "15–38",
  "id": "q075",
  "difficulty": "Detalle"
 },
 {
  "section": "abastecimiento",
  "q": "Según el Tema 9, ¿qué corresponde a «Detector sin vida útil fabricante» en «Periodicidades de mantenimiento»?",
  "options": [
   "Sustituir juntas racores",
   "Operaciones sobre manguera UNE 671-3",
   "10 años",
   "20 años"
  ],
  "correct": 2,
  "why": "La correspondencia del manual es «Detector sin vida útil fabricante» → «10 años». Referencia: apartado «Periodicidades de mantenimiento».",
  "page": "15–38",
  "id": "q076",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "La temperatura sube muy rápido, aunque todavía no se alcance un umbral fijo. ¿Qué sensor térmico describe el manual?",
  "options": [
   "Termostático",
   "Termovelocimétrico",
   "Humo iónico",
   "Pulsador manual"
  ],
  "correct": 1,
  "why": "El termovelocimétrico detecta la tasa de crecimiento de temperatura.",
  "page": "9",
  "id": "q077",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "Se activa un sensor cuando se alcanza una temperatura crítica mantenida. ¿Cuál es?",
  "options": [
   "Termostático",
   "Termovelocimétrico",
   "Humo lineal",
   "Óptico de llama"
  ],
  "correct": 0,
  "why": "El termostático trabaja sobre umbral de temperatura.",
  "page": "8",
  "id": "q078",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "¿Qué norma UNE-EN 54 se asigna a los pulsadores manuales?",
  "options": [
   "54-3",
   "54-5",
   "54-20",
   "54-11"
  ],
  "correct": 3,
  "why": "Marcado CE de dispositivos manuales según UNE-EN 54-11.",
  "page": "10",
  "id": "q079",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "¿Cuál es el recorrido máximo del pulsador en el texto?",
  "options": [
   "15 m",
   "40 m",
   "25 m",
   "50 m"
  ],
  "correct": 2,
  "why": "Máximo 25 m desde un origen de evacuación.",
  "page": "9",
  "id": "q080",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "¿Qué altura máxima tiene la parte superior del pulsador?",
  "options": [
   "80 cm",
   "120 cm",
   "150 cm",
   "200 cm"
  ],
  "correct": 1,
  "why": "El intervalo del manual es de 80 a 120 cm.",
  "page": "9",
  "id": "q081",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "¿Qué altura mínima tiene la parte superior del pulsador?",
  "options": [
   "80 cm",
   "30 cm",
   "120 cm",
   "150 cm"
  ],
  "correct": 0,
  "why": "Intervalo 80–120 cm.",
  "page": "9",
  "id": "q082",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "¿Qué son los 500 mm citados en mantenimiento de SDA?",
  "options": [
   "Separación entre pulsadores",
   "Diámetro mínimo de detector",
   "Altura del central",
   "Espacio libre del detector puntual"
  ],
  "correct": 3,
  "why": "Espacio libre alrededor y debajo del detector puntual.",
  "page": "15",
  "id": "q083",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "¿Qué vida útil supletoria de detector se establece sin indicación del fabricante?",
  "options": [
   "5 años",
   "15 años",
   "10 años",
   "20 años"
  ],
  "correct": 2,
  "why": "10 años si el fabricante no fija vida útil.",
  "page": "15",
  "id": "q084",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "DB-SI 4 del manual: ¿cuándo se instala detección y alarma en hospitalarios?",
  "options": [
   "Solo si >1.000 m²",
   "En todo caso",
   "Solo si >2.000 m²",
   "Solo si >50 m de evacuación"
  ],
  "correct": 1,
  "why": "Hospitalario: detección y alarma en todo caso.",
  "page": "12",
  "id": "q085",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "DB-SI 4 del manual: ¿qué altura de evacuación activa detección y alarma en residencial vivienda?",
  "options": [
   "Más de 50 m",
   "Más de 15 m",
   "Más de 24 m",
   "Más de 28 m"
  ],
  "correct": 0,
  "why": "La tabla indica más de 50 m.",
  "page": "12",
  "id": "q086",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "En industrias tipo A, ¿qué superficie mínima de producción activa detección automática según el texto?",
  "options": [
   "150 m²",
   "500 m²",
   "1.000 m²",
   "300 m²"
  ],
  "correct": 3,
  "why": "Producción tipo A ≥300 m².",
  "page": "13",
  "id": "q087",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "En industrias tipo A, ¿qué superficie mínima de almacenamiento activa detección?",
  "options": [
   "300 m²",
   "500 m²",
   "150 m²",
   "1.000 m²"
  ],
  "correct": 2,
  "why": "Almacenamiento tipo A ≥150 m².",
  "page": "13",
  "id": "q088",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "En tipo B de riesgo alto, detección automática de almacenamiento se exige desde…",
  "options": [
   "800 m²",
   "500 m²",
   "1.000 m²",
   "2.000 m²"
  ],
  "correct": 1,
  "why": "Tabla de detección industrial de almacenamiento.",
  "page": "13",
  "id": "q089",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "¿Qué superficie activa alarma manual en industria productiva según tabla del PDF, salvo alternativa por ausencia de detección?",
  "options": [
   "1.000 m²",
   "300 m²",
   "500 m²",
   "800 m²"
  ],
  "correct": 0,
  "why": "Actividad productiva ≥1.000 m² o ausencia de detección automática exigible.",
  "page": "13",
  "id": "q090",
  "difficulty": "Detalle"
 },
 {
  "section": "deteccion",
  "q": "¿Qué superficie activa alarma manual en almacén industrial según texto, salvo la alternativa indicada?",
  "options": [
   "150 m²",
   "500 m²",
   "1.000 m²",
   "800 m²"
  ],
  "correct": 3,
  "why": "Actividad almacenamiento ≥800 m² o ausencia de detección automática exigible.",
  "page": "13",
  "id": "q091",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "¿Qué norma UNE-EN identifica un hidrante de columna?",
  "options": [
   "14339",
   "671-1",
   "14384",
   "54-7"
  ],
  "correct": 2,
  "why": "Columna UNE-EN 14384.",
  "page": "16",
  "id": "q092",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "¿Qué norma UNE-EN identifica un hidrante bajo tierra?",
  "options": [
   "14384",
   "14339",
   "671-2",
   "54-11"
  ],
  "correct": 1,
  "why": "Bajo tierra UNE-EN 14339.",
  "page": "16",
  "id": "q093",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "¿Qué recorrido máximo indica el manual para hidrantes urbanos?",
  "options": [
   "Menos de 100 m",
   "Menos de 40 m",
   "Menos de 50 m",
   "Menos de 150 m"
  ],
  "correct": 0,
  "why": "RIPCI reproducido: <100 m urbano.",
  "page": "17",
  "id": "q094",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "¿Qué recorrido máximo indica para hidrantes fuera de zonas urbanas?",
  "options": [
   "Menos de 100 m",
   "Menos de 60 m",
   "Menos de 20 m",
   "Menos de 40 m"
  ],
  "correct": 3,
  "why": "RIPCI reproducido: <40 m resto.",
  "page": "17",
  "id": "q095",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "¿Qué caudal ininterrumpido mínimo exige el texto por boca de hidrante?",
  "options": [
   "200 L/min",
   "800 L/min",
   "500 L/min",
   "1.000 L/min"
  ],
  "correct": 2,
  "why": "Caudal mínimo citado de 500 L/min.",
  "page": "17",
  "id": "q096",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "¿Qué presión mínima cita para hidrantes urbanos usados solo en llenado de camiones?",
  "options": [
   "500 kPa",
   "100 kPa",
   "1.470 kPa",
   "2.450 kPa"
  ],
  "correct": 1,
  "why": "El uso exclusivamente de llenado de camiones tiene ≥100 kPa.",
  "page": "17",
  "id": "q097",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "¿Qué presión mínima cita para otros hidrantes de impulsión directa?",
  "options": [
   "500 kPa",
   "100 kPa",
   "1.470 kPa",
   "2.450 kPa"
  ],
  "correct": 0,
  "why": "Para contrarrestar pérdidas de mangueras y lanzas ≥500 kPa.",
  "page": "17",
  "id": "q098",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "En uso comercial DB-SI 4 del documento, ¿desde qué superficie se contempla primer hidrante?",
  "options": [
   "Desde 500 m²",
   "Desde 2.000 m²",
   "Desde 5.000 m²",
   "Desde 1.000 m²"
  ],
  "correct": 3,
  "why": "Tabla DB-SI p. 19; en el intervalo 1.000–10.000 m².",
  "page": "19",
  "id": "q099",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "En riesgo industrial C alto, ¿qué caudal y autonomía aparecen en la tabla?",
  "options": [
   "1.000 L/min y 60 min",
   "500 L/min y 30 min",
   "2.000 L/min y 90 min",
   "3.000 L/min y 90 min"
  ],
  "correct": 2,
  "why": "Tipo C riesgo alto: 2.000 L/min, 90 min.",
  "page": "20",
  "id": "q100",
  "difficulty": "Detalle"
 },
 {
  "section": "hidrantes",
  "q": "¿Cada cuánto se sustituyen juntas de racores de hidrantes según mantenimiento?",
  "options": [
   "Tres meses",
   "Cinco años",
   "Seis meses",
   "Un año"
  ],
  "correct": 1,
  "why": "Sustitución quinquenal.",
  "page": "20",
  "id": "q101",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "¿Qué BIE utiliza manguera semirrígida?",
  "options": [
   "Diámetro de 25 mm",
   "Diámetro de 45 mm",
   "Diámetro de 70 mm",
   "Diámetro de 100 mm"
  ],
  "correct": 0,
  "why": "BIE semirrígida 25 mm.",
  "page": "21",
  "id": "q102",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "¿Qué BIE utiliza manguera plana?",
  "options": [
   "Diámetro de 25 mm",
   "Diámetro de 30 mm",
   "Diámetro de 70 mm",
   "Diámetro de 45 mm"
  ],
  "correct": 3,
  "why": "BIE plana 45 mm.",
  "page": "21",
  "id": "q103",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "¿Qué longitud máxima de manguera admite el texto para BIE plana?",
  "options": [
   "25 m",
   "30 m",
   "20 m",
   "50 m"
  ],
  "correct": 2,
  "why": "La BIE plana máxima 20 m.",
  "page": "22",
  "id": "q104",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "¿Qué longitud máxima de manguera admite para BIE semirrígida?",
  "options": [
   "20 m",
   "30 m",
   "35 m",
   "50 m"
  ],
  "correct": 1,
  "why": "La BIE semirrígida máxima 30 m.",
  "page": "22",
  "id": "q105",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "¿Qué separación máxima establece entre BIE y su más próxima?",
  "options": [
   "50 m",
   "5 m",
   "20 m",
   "60 m"
  ],
  "correct": 0,
  "why": "Separación máxima entre BIE 50 m.",
  "page": "22",
  "id": "q106",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "¿Cuál es la altura máxima de boquilla y válvula?",
  "options": [
   "0,90 m",
   "1,20 m",
   "2,00 m",
   "1,50 m"
  ],
  "correct": 3,
  "why": "Montaje con boquilla y válvula a ≤1,5 m.",
  "page": "21–22",
  "id": "q107",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "En la industria de riesgo alto, ¿qué simultaneidad de BIE establece el temario?",
  "options": [
   "Una",
   "Dos",
   "Tres",
   "Cuatro"
  ],
  "correct": 2,
  "why": "Riesgo alto: simultaneidad 3, autonomía 90 min.",
  "page": "23",
  "id": "q108",
  "difficulty": "Detalle"
 },
 {
  "section": "bies",
  "q": "Si fabricante no indica vida útil de manguera, ¿qué considera el texto?",
  "options": [
   "5 años",
   "20 años",
   "10 años",
   "25 años"
  ],
  "correct": 1,
  "why": "Supletoria de 20 años para mangueras.",
  "page": "24",
  "id": "q109",
  "difficulty": "Detalle"
 },
 {
  "section": "columna",
  "q": "¿Qué diámetro de racor presenta la toma en fachada de columna seca?",
  "options": [
   "70 mm",
   "25 mm",
   "45 mm",
   "80 mm"
  ],
  "correct": 0,
  "why": "Conexión siamesa exterior de 70 mm.",
  "page": "25",
  "id": "q110",
  "difficulty": "Detalle"
 },
 {
  "section": "columna",
  "q": "¿Qué diámetro de racor presentan las salidas de planta?",
  "options": [
   "25 mm",
   "70 mm",
   "100 mm",
   "45 mm"
  ],
  "correct": 3,
  "why": "Siamesa de planta de 45 mm.",
  "page": "25",
  "id": "q111",
  "difficulty": "Detalle"
 },
 {
  "section": "columna",
  "q": "¿Qué diámetro nominal tiene la tubería de acero galvanizado?",
  "options": [
   "DN25",
   "DN45",
   "DN80",
   "DN70"
  ],
  "correct": 2,
  "why": "Columna de tubo acero DN80.",
  "page": "25",
  "id": "q112",
  "difficulty": "Detalle"
 },
 {
  "section": "columna",
  "q": "¿A qué altura se ubica el centro de las bocas?",
  "options": [
   "1,20 m",
   "0,90 m",
   "1,50 m",
   "2,00 m"
  ],
  "correct": 1,
  "why": "Tomas de fachada y de planta a 0,90 m.",
  "page": "25",
  "id": "q113",
  "difficulty": "Detalle"
 },
 {
  "section": "columna",
  "q": "¿Cada cuántas plantas hay válvula de seccionamiento en columna ascendente?",
  "options": [
   "Cada cuatro plantas",
   "Cada planta",
   "Cada dos plantas",
   "Cada seis plantas"
  ],
  "correct": 0,
  "why": "Válvula cada cuatro plantas, encima salida.",
  "page": "25",
  "id": "q114",
  "difficulty": "Detalle"
 },
 {
  "section": "columna",
  "q": "¿Qué presión mínima de prueba para columna de hasta 30 m?",
  "options": [
   "500 kPa",
   "2.450 kPa",
   "100 kPa",
   "1.470 kPa"
  ],
  "correct": 3,
  "why": "Hasta 30 m: 15 kg/cm² (1.470 kPa).",
  "page": "26",
  "id": "q115",
  "difficulty": "Detalle"
 },
 {
  "section": "columna",
  "q": "¿Qué presión mínima de prueba para columna de más de 30 m?",
  "options": [
   "1.470 kPa",
   "500 kPa",
   "2.450 kPa",
   "100 kPa"
  ],
  "correct": 2,
  "why": "Más de 30 m: 25 kg/cm² (2.450 kPa).",
  "page": "26",
  "id": "q116",
  "difficulty": "Detalle"
 },
 {
  "section": "columna",
  "q": "¿Qué duración mínima tiene la prueba de presión de columna seca?",
  "options": [
   "15 minutos",
   "2 horas",
   "30 minutos",
   "1 hora"
  ],
  "correct": 1,
  "why": "Sin fugas durante dos horas mínimo.",
  "page": "26",
  "id": "q117",
  "difficulty": "Detalle"
 },
 {
  "section": "columna",
  "q": "¿Qué altura exige el cuadro DB-SI para hospitalario según manual?",
  "options": [
   "Más de 15 m",
   "Más de 24 m",
   "Más de 28 m",
   "Más de 50 m"
  ],
  "correct": 0,
  "why": "Hospitalario columna seca >15 m.",
  "page": "26",
  "id": "q118",
  "difficulty": "Detalle"
 },
 {
  "section": "columna",
  "q": "¿Qué altura exige el cuadro DB-SI para residencial vivienda según manual?",
  "options": [
   "Más de 15 m",
   "Más de 28 m",
   "Más de 50 m",
   "Más de 24 m"
  ],
  "correct": 3,
  "why": "Residencial vivienda >24 m.",
  "page": "26",
  "id": "q119",
  "difficulty": "Detalle"
 },
 {
  "section": "columna",
  "q": "¿Qué mantenimiento semestral es correcto en columna seca?",
  "options": [
   "Cambiar siempre tubería principal",
   "Llenar de agua la columna permanentemente",
   "Confirmar siamesas cerradas y seccionamiento abierto",
   "Sustituir todas las boquillas"
  ],
  "correct": 2,
  "why": "Comprobar posiciones de válvulas.",
  "page": "27",
  "id": "q120",
  "difficulty": "Detalle"
 },
 {
  "section": "bombas",
  "q": "¿Qué bomba mantiene presión frente a pérdidas pequeñas?",
  "options": [
   "Diésel principal",
   "Jockey",
   "Hidrante",
   "Rociador"
  ],
  "correct": 1,
  "why": "Jockey auxiliar de bajo caudal.",
  "page": "29",
  "id": "q121",
  "difficulty": "Detalle"
 },
 {
  "section": "bombas",
  "q": "¿Qué bomba describe el manual como respaldo ante fallo eléctrico?",
  "options": [
   "Diésel o gasoil",
   "Jockey exclusivamente",
   "Rociador térmico",
   "BIE plana"
  ],
  "correct": 0,
  "why": "Motor diésel con arranque por baterías.",
  "page": "29",
  "id": "q122",
  "difficulty": "Detalle"
 },
 {
  "section": "bombas",
  "q": "¿Cómo arranca la bomba de gasoil del texto?",
  "options": [
   "Por apertura de BIE manual",
   "Por presión de espuma",
   "Por una válvula de columna seca",
   "Por sistema de baterías"
  ],
  "correct": 3,
  "why": "La bomba de gasoil se arranca gracias a baterías.",
  "page": "29",
  "id": "q123",
  "difficulty": "Detalle"
 },
 {
  "section": "extincion",
  "q": "¿Qué activa el rociador automático descrito?",
  "options": [
   "Señal de radio externa exclusivamente",
   "Bajada de presión por viento",
   "Aumento térmico que libera la ampolla",
   "Ruido de la sirena"
  ],
  "correct": 2,
  "why": "Cápsula termosensible al calor libera agua.",
  "page": "30",
  "id": "q124",
  "difficulty": "Detalle"
 },
 {
  "section": "extincion",
  "q": "¿Qué agente descarga un sistema de agua nebulizada?",
  "options": [
   "Solo polvo ABC",
   "Agua en finas gotas",
   "Solo dióxido de carbono",
   "Solo halón"
  ],
  "correct": 1,
  "why": "La boquilla nebuliza agua.",
  "page": "31",
  "id": "q125",
  "difficulty": "Detalle"
 },
 {
  "section": "extincion",
  "q": "¿Qué norma actualizada cita expresamente el PDF para agua nebulizada?",
  "options": [
   "UNE-EN 14972-1:2021",
   "UNE-EN 14339",
   "UNE-EN 54-11",
   "UNE-EN 671-1"
  ],
  "correct": 0,
  "why": "El documento dice que sustituye UNE-CEN/TS 14972.",
  "page": "31",
  "id": "q126",
  "difficulty": "Detalle"
 },
 {
  "section": "extincion",
  "q": "¿Qué sistema se aplica principalmente sobre líquidos inflamables?",
  "options": [
   "Columna seca",
   "Central receptora",
   "Bomba jockey",
   "Espuma física"
  ],
  "correct": 3,
  "why": "La espuma cubre el combustible líquido.",
  "page": "32",
  "id": "q127",
  "difficulty": "Detalle"
 },
 {
  "section": "extincion",
  "q": "¿Qué componente mezcla espumógeno con agua?",
  "options": [
   "Detector de llama",
   "Válvula de seccionamiento",
   "Dosificador/proporcionador",
   "Pulsador manual"
  ],
  "correct": 2,
  "why": "El proporcionador ajusta concentración.",
  "page": "32",
  "id": "q128",
  "difficulty": "Detalle"
 },
 {
  "section": "extincion",
  "q": "En polvo fijo, ¿qué impulsa el agente por las tuberías?",
  "options": [
   "Fuerza centrífuga del agua",
   "Gas a presión",
   "Gravedad exclusivamente",
   "Corriente eléctrica en el polvo"
  ],
  "correct": 1,
  "why": "Gas propelente para transportar polvo.",
  "page": "32",
  "id": "q129",
  "difficulty": "Detalle"
 },
 {
  "section": "extincion",
  "q": "¿Qué protección de personas exige polvo fijo antes de descargar?",
  "options": [
   "Prealarma y retardo",
   "Ausencia total de avisos",
   "Evitar toda evacuación",
   "Solo señal luminosa tras descarga"
  ],
  "correct": 0,
  "why": "Permitir evacuación previa.",
  "page": "32",
  "id": "q130",
  "difficulty": "Detalle"
 },
 {
  "section": "extincion",
  "q": "¿Qué protección equivalente exigen los sistemas gaseosos del manual?",
  "options": [
   "Descarga sin aviso",
   "Solo apertura manual obligatoria",
   "No disponer de control",
   "Prealarma y retardo"
  ],
  "correct": 3,
  "why": "Aviso y tiempo para evacuar antes de liberar gas.",
  "page": "33",
  "id": "q131",
  "difficulty": "Detalle"
 },
 {
  "section": "extincion",
  "q": "Rociadores industriales de producción tipo A medio: ¿desde qué superficie?",
  "options": [
   "300 m²",
   "800 m²",
   "500 m²",
   "1.000 m²"
  ],
  "correct": 2,
  "why": "La tabla del PDF indica ≥500 m².",
  "page": "33",
  "id": "q132",
  "difficulty": "Detalle"
 },
 {
  "section": "extincion",
  "q": "Rociadores industriales de almacenamiento tipo A medio: ¿desde qué superficie?",
  "options": [
   "500 m²",
   "300 m²",
   "800 m²",
   "1.000 m²"
  ],
  "correct": 1,
  "why": "El documento diferencia almacenaje 300 de producción 500.",
  "page": "34",
  "id": "q133",
  "difficulty": "Detalle"
 },
 {
  "section": "extincion",
  "q": "¿Qué periodicidades específicas menciona el PDF para inspecciones especiales de rociadores?",
  "options": [
   "3, 10 y 25 años",
   "2, 5 y 15 años",
   "1, 6 y 12 años",
   "4, 8 y 16 años"
  ],
  "correct": 0,
  "why": "Programa de UNE-EN 12845 citado en p. 36.",
  "page": "36",
  "id": "q134",
  "difficulty": "Detalle"
 },
 {
  "section": "abastecimiento",
  "q": "¿Cuáles son los tres grandes componentes del abastecimiento de agua PCI?",
  "options": [
   "Solo depósito, alarma y extintor",
   "Solo BIE, pulsador y detector",
   "Solo tubería, sirena y válvula",
   "Fuentes, impulsión y red general"
  ],
  "correct": 3,
  "why": "El punto 7 define las tres partes.",
  "page": "37",
  "id": "q135",
  "difficulty": "Detalle"
 },
 {
  "section": "abastecimiento",
  "q": "¿Qué norma UNE cita el manual para abastecimiento de agua?",
  "options": [
   "UNE-EN 54-7",
   "UNE-EN 14339",
   "UNE 23500",
   "UNE-EN 671-1"
  ],
  "correct": 2,
  "why": "UNE 23500 se aplica a abastecimiento.",
  "page": "37",
  "id": "q136",
  "difficulty": "Detalle"
 },
 {
  "section": "abastecimiento",
  "q": "¿Qué comprueba anualmente el sistema de abastecimiento según la tabla?",
  "options": [
   "Cambio de todos los hidrantes",
   "Reserva de agua y curvas con fuentes de agua/energía",
   "Sustitución de los detectores",
   "Reseteo del sistema de alarma"
  ],
  "correct": 1,
  "why": "Mantenimiento anual del punto 7.2.",
  "page": "38",
  "id": "q137",
  "difficulty": "Detalle"
 }
];
