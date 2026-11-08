/* Repaso activo Tema 11. Los datos se mantienen tal como los indica el PDF. */
const REVIEW_CLASSIFY=[
 {
  "name": "Categorías de EPI de intervención",
  "groups": [
   "Categoría I",
   "Categoría II",
   "Categoría III"
  ],
  "items": [
   [
    "Gafas",
    0
   ],
   [
    "Botas",
    1
   ],
   [
    "Verdugo",
    1
   ],
   [
    "Casco",
    2
   ],
   [
    "Chaquetón",
    2
   ],
   [
    "Cubrepantalón",
    2
   ],
   [
    "Guantes",
    2
   ],
   [
    "Equipo de respiración",
    2
   ]
  ],
  "why": "Clasificación de la dotación general del tema, p. 14."
 },
 {
  "name": "Tipos de botas",
  "groups": [
   "Tipo I",
   "Tipo II",
   "Tipo III"
  ],
  "items": [
   [
    "Intervención en fuego forestal",
    0
   ],
   [
    "Rescate ordinario en entorno natural",
    0
   ],
   [
    "Ataque a incendio estructural",
    1
   ],
   [
    "Extinción de vehículo ardiendo",
    1
   ],
   [
    "Intervención con salpicaduras químicas peligrosas",
    2
   ],
   [
    "Trabajo ante sustancias altamente tóxicas",
    2
   ]
  ],
  "why": "Tipos de bota del PDF, pp. 19–20."
 },
 {
  "name": "¿De qué riesgo NRBQ se trata?",
  "groups": [
   "Nuclear",
   "Radiológico",
   "Químico",
   "Biológico"
  ],
  "items": [
   [
    "Accidente en central nuclear",
    0
   ],
   [
    "Transporte de residuo radiactivo",
    1
   ],
   [
    "Inhalación de amoníaco",
    2
   ],
   [
    "Virus patógenos",
    3
   ],
   [
    "Fuente radioactiva sanitaria fuera de central",
    1
   ],
   [
    "Contacto con fluido infeccioso",
    3
   ],
   [
    "Corrosión por ácido",
    2
   ]
  ],
  "why": "Diferencias expuestas en pp. 28–31."
 },
 {
  "name": "Aire y equipos respiratorios",
  "groups": [
   "Filtrante ambiental",
   "Semiautónomo",
   "ERA autónomo"
  ],
  "items": [
   [
    "Máscara con filtro P3 sin fuente adicional de aire",
    0
   ],
   [
    "Alimentación por compresor situado fuera del área peligrosa",
    1
   ],
   [
    "Aire respirable transportado a la espalda del usuario",
    2
   ],
   [
    "Filtro A para vapores orgánicos en aire ambiental",
    0
   ],
   [
    "Fuente de aire fija y conducción flexible",
    1
   ],
   [
    "Rebreather de oxígeno transportado por el interviniente",
    2
   ]
  ],
  "why": "Protección respiratoria, pp. 22–27."
 },
 {
  "name": "Artículo legal que corresponde",
  "groups": [
   "Art. 3",
   "Art. 6",
   "Art. 7",
   "Art. 8",
   "Art. 10"
  ],
  "items": [
   [
    "Suministrar gratuitamente EPI",
    0
   ],
   [
    "Comparar EPI del mercado",
    1
   ],
   [
    "Limpieza según fabricante",
    2
   ],
   [
    "Informar antes de usar",
    3
   ],
   [
    "Avisar de daño al superior",
    4
   ],
   [
    "Guardar el equipo tras su uso",
    4
   ],
   [
    "Revisar características por cambios técnicos",
    1
   ],
   [
    "Organizar entrenamiento necesario",
    3
   ]
  ],
  "why": "RD 773/1997, pp. 35–38."
 }
];
const REVIEW_ORDER=[
 {
  "name": "Seleccionar un EPI conforme al artículo 6",
  "prompt": "Reconstruye el proceso de selección a partir de las decisiones que exige el artículo 6. No confundas elegir el equipo con usarlo.",
  "steps": [
   "Determinar qué riesgos permanecen tras aplicar medidas colectivas",
   "Establecer las prestaciones de protección que debe cumplir el EPI",
   "Contrastar modelos disponibles con las prestaciones requeridas",
   "Comprobar que la opción elegida cumple condiciones legales y de uso",
   "Revisar la elección si cambian los riesgos o las características técnicas"
  ],
  "why": "El artículo 6 del RD 773/1997 sigue la evaluación, definición de características, comparación de equipos, verificación y revisión posterior (pp. 35–37)."
 }
];
const REVIEW_JUDGE=[
 [
  "El casco tipo B incluye la zona 1b.",
  true,
  "El B incluye dicha zona; el A la excluye (p. 17)."
 ],
 [
  "El traje NRBQ nivel II también es estanco frente a gases.",
  false,
  "Nivel II protege frente a sólidos y líquidos, pero no gases (p. 32)."
 ],
 [
  "El NRBQ nivel III tiene guantes integrados.",
  true,
  "Se citan guantes integrados, de algodón y de látex (p. 33)."
 ],
 [
  "FPA equivale a F + perforación + antiestática.",
  true,
  "Marcado de botas del manual (p. 19)."
 ],
 [
  "UNE-EN 469:2020 es la norma de guantes de bombero.",
  false,
  "Es del traje; los guantes se rigen por EN 659 (pp. 18 y 22)."
 ],
 [
  "Un equipo semiautónomo siempre porta su propia botella.",
  false,
  "Suministro externo mediante manguera (p. 25)."
 ],
 [
  "Los EPI obligatorios deben proporcionarse gratis.",
  true,
  "Artículo 3.c del RD 773/1997 (p. 35)."
 ],
 [
  "El trabajador debe reparar personalmente cualquier EPI defectuoso.",
  false,
  "Debe notificar de inmediato el defecto al superior directo (art. 10.c, p. 38)."
 ],
 [
  "El casco para −30 °C presenta tres estrellas.",
  true,
  "−20/−30/−40 °C corresponden a 2/3/4 estrellas (p. 16)."
 ],
 [
  "El traje NRBQ blinda de toda radiación ionizante penetrante.",
  false,
  "Protege frente a contaminación, no es blindaje directo (p. 32)."
 ],
 [
  "La absorción cutánea es una vía de entrada química.",
  true,
  "Una de las tres vías junto a inhalación e ingestión (p. 31)."
 ],
 [
  "Pueden compartirse EPI sin tomar medidas higiénicas.",
  false,
  "El art. 7.3 exige que no haya problemas higiénicos ni sanitarios (p. 37)."
 ],
 [
  "La categoría II es residual respecto a I y III.",
  true,
  "Incluye los riesgos no enumerados en las otras categorías (p. 8)."
 ],
 [
  "El FPN de FFP2 que cita el PDF es 50.",
  false,
  "Para FFP2 indica 12; para FFP3, 50 (p. 23)."
 ],
 [
  "La información de uso del EPI debe darse previamente.",
  true,
  "Lo exige el art. 8 (p. 37)."
 ],
 [
  "La tabla de intervención general clasifica las gafas como III.",
  false,
  "Las señala como categoría I (p. 14)."
 ]
];
const REVIEW_VALUES=[
 {
  "name": "Guantes EN 388 · abrasión",
  "why": "Tabla de resistencia a la abrasión: p. 20 del PDF.",
  "items": [
   [
    "Según EN 388, ¿cuántos ciclos exige el nivel 1 de abrasión?",
    [
     "100 ciclos",
     "500 ciclos",
     "2.000 ciclos",
     "8.000 ciclos"
    ],
    0,
    "Nivel 1: 100 ciclos (p. 20)."
   ],
   [
    "Según EN 388, ¿cuántos ciclos exige el nivel 2 de abrasión?",
    [
     "100 ciclos",
     "500 ciclos",
     "2.000 ciclos",
     "8.000 ciclos"
    ],
    1,
    "Nivel 2: 500 ciclos (p. 20)."
   ],
   [
    "Según EN 388, ¿cuántos ciclos exige el nivel 3 de abrasión?",
    [
     "100 ciclos",
     "500 ciclos",
     "2.000 ciclos",
     "8.000 ciclos"
    ],
    2,
    "Nivel 3: 2.000 ciclos (p. 20)."
   ],
   [
    "Según EN 388, ¿cuántos ciclos exige el nivel 4 de abrasión?",
    [
     "100 ciclos",
     "500 ciclos",
     "2.000 ciclos",
     "8.000 ciclos"
    ],
    3,
    "Nivel 4: 8.000 ciclos (p. 20)."
   ]
  ]
 },
 {
  "name": "Guantes EN 407 · contacto térmico",
  "why": "Tabla de contacto térmico durante 15 segundos, p. 21.",
  "items": [
   [
    "EN 407: temperatura de contacto de nivel 1 durante 15 segundos, según el PDF.",
    [
     "100 °C",
     "250 °C",
     "350 °C",
     "500 °C"
    ],
    0,
    "Nivel 1: 100 °C durante 15 segundos (p. 21)."
   ],
   [
    "EN 407: temperatura de contacto de nivel 2 durante 15 segundos, según el PDF.",
    [
     "100 °C",
     "250 °C",
     "350 °C",
     "500 °C"
    ],
    1,
    "Nivel 2: 250 °C durante 15 segundos (p. 21)."
   ],
   [
    "EN 407: temperatura de contacto de nivel 3 durante 15 segundos, según el PDF.",
    [
     "100 °C",
     "250 °C",
     "350 °C",
     "500 °C"
    ],
    2,
    "Nivel 3: 350 °C durante 15 segundos (p. 21)."
   ],
   [
    "EN 407: temperatura de contacto de nivel 4 durante 15 segundos, según el PDF.",
    [
     "100 °C",
     "250 °C",
     "350 °C",
     "500 °C"
    ],
    3,
    "Nivel 4: 500 °C durante 15 segundos (p. 21)."
   ]
  ]
 },
 {
  "name": "Protección respiratoria · FFP y FPN",
  "why": "Valores de factor de protección nominal indicados en la edición del manual, p. 23.",
  "items": [
   [
    "¿Qué FPN asigna el temario a FFP1?",
    [
     "4,5",
     "12",
     "20",
     "50"
    ],
    0,
    "FFP1: 4,5 (p. 23)."
   ],
   [
    "¿Qué FPN asigna el temario a FFP2?",
    [
     "4,5",
     "12",
     "20",
     "50"
    ],
    1,
    "FFP2: 12 (p. 23)."
   ],
   [
    "¿Qué FPN asigna el temario a FFP3?",
    [
     "4,5",
     "12",
     "20",
     "50"
    ],
    3,
    "FFP3: 50 (p. 23)."
   ]
  ]
 },
 {
  "name": "Guantes de bombero EN 659 · prestaciones",
  "why": "Niveles mínimos enumerados por el manual en p. 22.",
  "items": [
   [
    "EN 659, ¿qué nivel mínimo cita el manual para abrasión?",
    [
     "Nivel 1",
     "Nivel 2",
     "Nivel 3",
     "Nivel 4"
    ],
    2,
    "Abrasión: nivel 3 (p. 22)."
   ],
   [
    "EN 659, ¿qué nivel mínimo cita el manual para corte?",
    [
     "Nivel 1",
     "Nivel 2",
     "Nivel 3",
     "Nivel 4"
    ],
    1,
    "Corte: nivel 2 (p. 22)."
   ],
   [
    "EN 659, ¿qué nivel mínimo cita el manual para rasgado?",
    [
     "Nivel 1",
     "Nivel 2",
     "Nivel 3",
     "Nivel 4"
    ],
    2,
    "Rasgado: nivel 3 (p. 22)."
   ],
   [
    "EN 659, ¿qué nivel mínimo cita el manual para perforación?",
    [
     "Nivel 1",
     "Nivel 2",
     "Nivel 3",
     "Nivel 4"
    ],
    2,
    "Perforación: nivel 3 (p. 22)."
   ],
   [
    "EN 659, ¿qué nivel mínimo cita el manual para inflamabilidad?",
    [
     "Nivel 1",
     "Nivel 2",
     "Nivel 3",
     "Nivel 4"
    ],
    3,
    "Inflamabilidad: nivel 4 (p. 22)."
   ],
   [
    "EN 659, ¿qué nivel mínimo cita el manual para calor convectivo?",
    [
     "Nivel 1",
     "Nivel 2",
     "Nivel 3",
     "Nivel 4"
    ],
    2,
    "Calor convectivo: nivel 3 (p. 22)."
   ],
   [
    "EN 659, ¿qué nivel mínimo cita el manual para calor por contacto?",
    [
     "Nivel 1",
     "Nivel 2",
     "Nivel 3",
     "Nivel 4"
    ],
    1,
    "Calor por contacto: nivel 2 (p. 22)."
   ],
   [
    "EN 659, ¿qué nivel mínimo cita el manual para calor radiante?",
    [
     "Nivel 1",
     "Nivel 2",
     "Nivel 3",
     "Nivel 4"
    ],
    1,
    "Calor radiante: nivel 2 (p. 22)."
   ]
  ]
 }
];
const REVIEW_MATCH_EXTRA=[
 {
  "title": "Marcado de los cascos",
  "pairs": [
   [
    "14",
    "Calor radiante de 14 kW/m²"
   ],
   [
    "7 kW/m²",
    "Sin marcado térmico específico"
   ],
   [
    "E1",
    "Aislamiento simple de cabeza"
   ],
   [
    "E2",
    "Evitar corriente al interior"
   ],
   [
    "E3",
    "Aislamiento de superficie"
   ],
   [
    "**",
    "−20 °C"
   ],
   [
    "***",
    "−30 °C"
   ],
   [
    "****",
    "−40 °C"
   ],
   [
    "Tipo B",
    "Incluye zona 1b"
   ]
  ]
 },
 {
  "title": "Guantes: normas y niveles",
  "pairs": [
   [
    "EN 388",
    "Riesgo mecánico"
   ],
   [
    "EN 407",
    "Riesgo térmico"
   ],
   [
    "EN 659",
    "Guantes de bombero"
   ],
   [
    "EN ISO 21420",
    "Tallas"
   ],
   [
    "Abrasión EN 659",
    "Nivel 3"
   ],
   [
    "Corte EN 659",
    "Nivel 2"
   ],
   [
    "Inflamabilidad EN 659",
    "Nivel 4"
   ],
   [
    "Contacto EN 659",
    "Nivel 2"
   ]
  ]
 },
 {
  "title": "Vías y efectos de químicos",
  "pairs": [
   [
    "Inhalación",
    "Vía respiratoria"
   ],
   [
    "Absorción",
    "Vía cutánea"
   ],
   [
    "Ingestión",
    "Vía digestiva"
   ],
   [
    "Corrosivos",
    "Daño de tejidos"
   ],
   [
    "Irritantes",
    "Irritación local"
   ],
   [
    "Neumoconióticos",
    "Alteración pulmonar crónica"
   ],
   [
    "Asfixiantes simples",
    "Desplazan el oxígeno"
   ],
   [
    "Tóxicos sistémicos",
    "Afectan órganos diana"
   ]
  ]
 }
];
for(const item of REVIEW_MATCH_EXTRA)if(!MATCH_SETS.some(set=>set.title===item.title))MATCH_SETS.push(item);
