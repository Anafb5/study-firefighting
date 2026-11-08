/* Tema 8 · ejercicios de repaso: evitamos mostrar la respuesta en el enunciado. */
const REVIEW_CLASSIFY=[
 {
  "name": "Reconocer la clase de fuego",
  "groups": [
   "A",
   "B",
   "C",
   "D",
   "F"
  ],
  "items": [
   [
    "Una pila de papel y madera con brasas",
    0
   ],
   [
    "Derrame de combustible líquido",
    1
   ],
   [
    "Escape de propano en combustión",
    2
   ],
   [
    "Virutas de magnesio ardiendo",
    3
   ],
   [
    "Sartén con aceite de freír",
    4
   ],
   [
    "Cartón encendido",
    0
   ],
   [
    "Baño de gasolina inflamado",
    1
   ],
   [
    "Sodio metálico reaccionando",
    3
   ]
  ],
  "why": "Clases de combustibles del apartado 1, p. 7."
 },
 {
  "name": "Seleccionar el agente adecuado",
  "groups": [
   "Polvo ABC",
   "Polvo BC",
   "Polvo D",
   "Acetato potásico",
   "CO₂"
  ],
  "items": [
   [
    "Fuego de clase A con brasas en una intervención con extintor de polvo",
    0
   ],
   [
    "Conato de combustible líquido y polvo convencional adecuado",
    1
   ],
   [
    "Pequeño fuego de metal combustible",
    2
   ],
   [
    "Aceite en un equipo de cocina",
    3
   ],
   [
    "Equipo electrónico sensible a residuos de polvo, si el riesgo permite este gas",
    4
   ]
  ],
  "why": "Tabla de selección por clases y precauciones del Tema 8, pp. 14–19."
 },
 {
  "name": "Ubicar cada componente del extintor",
  "groups": [
   "Anilla",
   "Manómetro",
   "Tubo sifón",
   "Manguera",
   "Boquilla"
  ],
  "items": [
   [
    "Evita una descarga involuntaria antes del uso",
    0
   ],
   [
    "Permite ver la presión interior de los equipos que lo incorporan",
    1
   ],
   [
    "Conduce el agente desde la zona interior del recipiente",
    2
   ],
   [
    "Tubo exterior flexible para apuntar al foco",
    3
   ],
   [
    "Pieza final que configura la salida del producto",
    4
   ]
  ],
  "why": "Partes y función de componentes, pp. 17–18."
 }
];
const REVIEW_ORDER=[
 {
  "name": "Uso de extintor en un conato",
  "prompt": "Ordena una secuencia de uso segura manteniendo siempre la posibilidad de abandonar el lugar.",
  "steps": [
   "Verificar que se trata de un conato abordable y que la salida está despejada",
   "Elegir un agente compatible con la clase de fuego y comprobar el estado del equipo",
   "Retirar el seguro y colocarse a distancia eficaz con una vía de escape",
   "Dirigir el agente a la base y barrer el foco sin dispersar el combustible",
   "Verificar posible reignición y retirarse ante cualquier aumento del riesgo"
  ],
  "why": "Pautas de uso y seguridad del apartado 6, p. 37. Es una secuencia orientativa, nunca sustituto de protocolos operativos."
 }
];
const REVIEW_JUDGE=[
 [
  "Los incendios de magnesio se encuadran en la clase D.",
  true,
  "Los metales combustibles son clase D, p. 7."
 ],
 [
  "La clase C corresponde a fuegos en equipos eléctricos, con independencia del combustible.",
  false,
  "La clase C es de gases; la tensión eléctrica no define una clase de combustible, p. 7."
 ],
 [
  "Una manta ignífuga extingue fundamentalmente por aislar el foco del oxígeno.",
  true,
  "Mecanismo de sofocación de la manta, p. 28."
 ],
 [
  "Polvo BC y polvo ABC son equivalentes para fuego de madera con brasas.",
  false,
  "ABC incluye respuesta sobre clase A; BC no es adecuado para brasas, pp. 14–15."
 ],
 [
  "El acetato potásico es un agente asociado al riesgo de aceites y grasas de cocina.",
  true,
  "Agente clase F en el cuadro del manual, p. 14–15."
 ],
 [
  "El CO₂ evita los residuos sólidos de polvo en equipos electrónicos.",
  true,
  "Agente gaseoso descrito en el manual, pp. 9 y 19."
 ],
 [
  "El diámetro de la manguera determina por sí solo la eficacia nominal en clase A.",
  false,
  "La eficacia nominal se demuestra sobre hogares de ensayo, pp. 18–19."
 ],
 [
  "La presión interna puede proceder de presurización permanente o de gas auxiliar.",
  true,
  "Definición RIPCI citada en p. 16."
 ],
 [
  "Un extintor de 30 kg con ruedas se clasifica como portátil de mano según el límite de 20 kg.",
  false,
  "El móvil de ruedas supera 20 kg; el portátil es ≤20 kg, p. 19."
 ],
 [
  "La eficacia 183B indica automáticamente 183 litros de agente dentro del extintor.",
  false,
  "Es clasificación de hogar de ensayo, no carga de agente (pp. 18–19)."
 ],
 [
  "Es recomendable dirigir el agente a la parte superior de la llama en vez de a la base.",
  false,
  "La técnica general apunta a la base, p. 37."
 ],
 [
  "En un recinto interior hay que conservar una salida segura detrás de quien interviene.",
  true,
  "Posición entre foco y vía de escape, p. 37."
 ],
 [
  "En incendio con gas, interrumpir el suministro si es seguro puede ser prioritario.",
  true,
  "Cortar el flujo del gas, p. 37."
 ],
 [
  "En un líquido incendiado puede resultar peligroso aplicar un chorro que disperse el líquido.",
  true,
  "El tema recomienda aplicación tangencial, p. 37."
 ],
 [
  "El sector de incendio es una zona delimitada que puede contener propagación durante tiempo definido.",
  true,
  "Definición del apartado 5.1, p. 29."
 ]
];
const REVIEW_VALUES=[
 {
  "name": "Masa y características",
  "why": "Extintores portátiles y mantas según edición del PDF, pp. 16–28.",
  "items": [
   [
    "¿Qué masa máxima tiene un extintor portátil manual convencional, excluido el dorsal?",
    [
     "10 kg",
     "20 kg",
     "30 kg",
     "50 kg"
    ],
    1,
    "Portátil de mano: ≤20 kg; el manual también considera portátiles los dorsales de hasta 30 kg (p. 16)."
   ],
   [
    "¿Qué porcentaje del cuerpo debe ser rojo, según el documento?",
    [
     "70 %",
     "80 %",
     "90 %",
     "95 %"
    ],
    3,
    "El texto cita 95 % del cuerpo rojo (p. 16)."
   ],
   [
    "¿Qué caducidad máxima se indica para las mantas ignífugas?",
    [
     "5 años",
     "10 años",
     "15 años",
     "20 años"
    ],
    3,
    "La caducidad del fabricante no debe exceder 20 años (p. 28)."
   ]
  ]
 },
 {
  "name": "Recorridos de extintores industriales",
  "why": "Según disposiciones industriales reproducidas en el manual, p. 36.",
  "items": [
   [
    "¿Qué recorrido máximo horizontal cita el manual en sectores industriales?",
    [
     "5 m",
     "10 m",
     "15 m",
     "25 m"
    ],
    2,
    "15 m en sectores industriales (p. 36)."
   ],
   [
    "¿A qué recorrido puede ampliarse en determinadas áreas industriales D/E?",
    [
     "10 m",
     "15 m",
     "25 m",
     "50 m"
    ],
    2,
    "El texto reproduce 25 m en determinadas áreas D/E (p. 36)."
   ],
   [
    "¿Qué porcentaje de carga de fuego de clase A o B permite considerarla predominante?",
    [
     "50 %",
     "70 %",
     "80 %",
     "90 %"
    ],
    3,
    "El umbral de predominio que usa el documento es 90 % (p. 35)."
   ]
  ]
 }
];
const REVIEW_MATCH_EXTRA=[];
