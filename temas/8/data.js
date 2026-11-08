/* Tema 8 · Elaboración original a partir del manual facilitado (pp. 7–37). Comprobar normativa vigente. */
const SECTIONS=[
 {
  "id": "tipos",
  "n": "01",
  "title": "Clases de fuego",
  "sub": "Combustibles y clases normalizadas",
  "pages": "7"
 },
 {
  "id": "agentes",
  "n": "02",
  "title": "Agentes extintores",
  "sub": "Mecanismos, gases, líquidos, polvo y selección",
  "pages": "8–15"
 },
 {
  "id": "portatiles",
  "n": "03",
  "title": "Extintores portátiles",
  "sub": "Partes, eficacia, clasificación y mantenimiento",
  "pages": "16–27"
 },
 {
  "id": "mantas",
  "n": "04",
  "title": "Mantas ignífugas",
  "sub": "Funcionamiento y requisitos",
  "pages": "28"
 },
 {
  "id": "industria",
  "n": "05",
  "title": "Instalaciones industriales",
  "sub": "Sector, carga de fuego y dotación",
  "pages": "29–36"
 },
 {
  "id": "uso",
  "n": "06",
  "title": "Uso del extintor",
  "sub": "Secuencia, posición y criterios de seguridad",
  "pages": "37"
 }
];
const TOPICS=[
 {
  "id": "1-1",
  "section": "tipos",
  "number": "1-1",
  "title": "Clases A, B, C, D y F",
  "pages": "7",
  "lead": "Identificar la clase del combustible condiciona el agente extintor más apropiado.",
  "points": [
   [
    "Clase A",
    "Combustibles sólidos, generalmente orgánicos, que pueden producir brasas: madera, papel, tela y cartón."
   ],
   [
    "Clase B",
    "Líquidos inflamables y sólidos licuables, como gasolina y otros combustibles líquidos."
   ],
   [
    "Clase C",
    "Gases combustibles; ejemplos del texto: butano y propano."
   ],
   [
    "Clase D",
    "Metales combustibles como magnesio, sodio y potasio."
   ],
   [
    "Clase F",
    "Aceites y grasas de cocina, vegetales o animales."
   ]
  ],
  "tip": "La clase depende de lo que arde, no del tamaño de la llama.",
  "format": "compare",
  "table": {
   "headers": [
    "Clase",
    "Combustible",
    "Ejemplo"
   ],
   "rows": [
    [
     "A",
     "Sólido con brasas",
     "Madera"
    ],
    [
     "B",
     "Líquidos/sólidos licuables",
     "Gasolina"
    ],
    [
     "C",
     "Gas",
     "Butano"
    ],
    [
     "D",
     "Metal",
     "Magnesio"
    ],
    [
     "F",
     "Aceite/grasa de cocina",
     "Aceite de freír"
    ]
   ]
  }
 },
 {
  "id": "2-1",
  "section": "agentes",
  "number": "2-1",
  "title": "Cómo se extingue un fuego",
  "pages": "8",
  "lead": "Los mecanismos de extinción actúan sobre los factores que mantienen la combustión.",
  "points": [
   [
    "Eliminar combustible",
    "Retirar el material o cortar el flujo; puede hacerse por separación directa o por aislamiento de combustibles cercanos."
   ],
   [
    "Sofocar",
    "Reducir el contacto del combustible con el oxígeno o desplazar el comburente por un medio inerte."
   ],
   [
    "Enfriar",
    "Absorber calor hasta impedir que prosiga la reacción de combustión."
   ],
   [
    "Inhibir",
    "Interrumpir químicamente las reacciones en cadena."
   ],
   [
    "Clasificación por estado",
    "Agentes gaseosos, líquidos y sólidos."
   ]
  ],
  "tip": "Los cuatro verbos clave: eliminar, sofocar, enfriar e inhibir.",
  "format": "compare"
 },
 {
  "id": "2-2",
  "section": "agentes",
  "number": "2-2",
  "title": "Agentes gaseosos y riesgos",
  "pages": "9–11",
  "lead": "Los gases desplazan oxígeno o interfieren en la combustión, pero la atmósfera resultante puede resultar peligrosa para personas.",
  "points": [
   [
    "Nitrógeno",
    "Gas inerte que contribuye a extinguir por disminución de la proporción de oxígeno disponible."
   ],
   [
    "Dióxido de carbono (CO₂)",
    "Descarga gaseosa que desplaza oxígeno y enfría al expandirse; útil cerca de determinados equipos eléctricos."
   ],
   [
    "Halones",
    "Compuestos halogenados históricamente empleados; su uso actual puede estar restringido por motivos ambientales."
   ],
   [
    "Mezclas gaseosas",
    "Combinaciones que reducen la concentración de oxígeno o actúan sobre el proceso de combustión."
   ],
   [
    "Seguridad",
    "No se debe tratar una descarga gaseosa en recinto como inocua: considerar asfixia y ventilación."
   ]
  ],
  "tip": "La idoneidad del agente no sustituye la evaluación del riesgo para ocupantes.",
  "format": "compare",
  "note": "El manual contiene referencias históricas a halones: no se deben interpretar como autorización de uso actual."
 },
 {
  "id": "2-3",
  "section": "agentes",
  "number": "2-3",
  "title": "Agentes líquidos",
  "pages": "11–14",
  "lead": "El texto distingue agua, espuma y acetato potásico, con aplicaciones y limitaciones diferentes.",
  "points": [
   [
    "Agua",
    "Absorbe calor; el chorro o la pulverización modifican su alcance y superficie de intercambio."
   ],
   [
    "Agua pulverizada",
    "Mayor intercambio térmico; requiere valorar riesgos de electricidad y reactividad del material."
   ],
   [
    "Espuma",
    "Cubre combustibles y separa vapores del aire, especialmente en ciertos líquidos inflamables."
   ],
   [
    "Acetato de potasio",
    "Agente asociado al tratamiento de fuegos de cocina con aceites/grasas, clase F."
   ],
   [
    "Limitación eléctrica",
    "El manual advierte contra el agua a chorro y la espuma sobre equipos bajo tensión."
   ],
   [
    "Efecto del agente",
    "La selección depende del combustible y las condiciones del escenario."
   ]
  ],
  "tip": "Los fuegos de cocina no se tratan como simples fuegos B.",
  "format": "compare"
 },
 {
  "id": "2-4",
  "section": "agentes",
  "number": "2-4",
  "title": "Polvos químicos BC, ABC y D",
  "pages": "14–15",
  "lead": "Los polvos actúan especialmente por inhibición de la reacción y deben elegirse según la clase de fuego.",
  "points": [
   [
    "BC convencional",
    "Pensado para líquidos y gases, sin eficacia suficiente sobre brasas propias de fuegos clase A."
   ],
   [
    "ABC polivalente",
    "Adecuado para A, B y C; puede dejar residuos que dañen equipos y electrónica."
   ],
   [
    "Especial para D",
    "Formulaciones especiales para metales combustibles; no sustituir por BC/ABC indiscriminadamente."
   ],
   [
    "Propulsión",
    "El extintor utiliza gas impulsor, habitualmente nitrógeno o CO₂, según el documento."
   ],
   [
    "Tensión eléctrica",
    "Exigir aparato y ensayo dieléctrico apropiados, cuando proceda, y no asumir seguridad por el mero nombre del agente."
   ]
  ],
  "tip": "BC no equivale a ABC; D exige polvo especial.",
  "format": "compare"
 },
 {
  "id": "2-5",
  "section": "agentes",
  "number": "2-5",
  "title": "Elegir el agente según el fuego",
  "pages": "15",
  "lead": "El cuadro de elección del manual cruza clase de combustible, presencia de tensión y naturaleza del agente.",
  "points": [
   [
    "Sólidos con brasas (A)",
    "Agua y polvo ABC figuran entre las opciones; BC por sí solo no cubre suficientemente las brasas."
   ],
   [
    "Líquidos (B)",
    "Espuma, polvo BC/ABC y CO₂ pueden considerarse según el escenario."
   ],
   [
    "Gases (C)",
    "Primero controlar el suministro de combustible, si puede realizarse con seguridad."
   ],
   [
    "Metales (D)",
    "Seleccionar agente especial para el metal concreto."
   ],
   [
    "Aceites de cocina (F)",
    "El tema destaca el acetato de potasio como agente específico."
   ],
   [
    "Riesgo eléctrico",
    "La tabla advierte de la peligrosidad del agua a chorro y la espuma en equipos bajo tensión."
   ],
   [
    "Equipos electrónicos",
    "CO₂ no deja residuos de polvo; conviene valorar su idoneidad y seguridad."
   ]
  ],
  "tip": "Una tabla de eficacia es orientación para seleccionar, nunca una licencia para aplicar un agente inseguro.",
  "format": "default"
 },
 {
  "id": "3-1",
  "section": "portatiles",
  "number": "3-1",
  "title": "Qué es un extintor y cómo se clasifica por masa",
  "pages": "16–19",
  "lead": "Un extintor descarga un agente por presión interna, almacenada o producida al liberar un gas auxiliar.",
  "points": [
   [
    "Definición funcional",
    "Equipo de agente extintor proyectable sobre el fuego mediante una presión interna."
   ],
   [
    "Portátil",
    "El manual cita masa total en condiciones de servicio igual o inferior a 20 kg."
   ],
   [
    "Móvil",
    "Sobre ruedas, diseñado para accionamiento manual, de masa superior a 20 kg."
   ],
   [
    "Dorsal",
    "El texto describe equipos que se portan sujetos a la espalda, de hasta 30 kg."
   ],
   [
    "Color del cuerpo",
    "El manual indica un 95 % del cuerpo de color rojo."
   ],
   [
    "Presurización",
    "Puede ser permanente o utilizar un gas auxiliar liberado al accionar el equipo."
   ]
  ],
  "tip": "El umbral normativo que recoge el manual para portátil es 20 kg.",
  "format": "compare",
  "table": {
   "headers": [
    "Tipo",
    "Rasgo fundamental"
   ],
   "rows": [
    [
     "Portátil",
     "≤20 kg, transportable a mano"
    ],
    [
     "Móvil",
     "Más de 20 kg, sobre ruedas"
    ],
    [
     "Dorsal",
     "Se sujeta a la espalda; el manual cita ≤30 kg"
    ]
   ]
  }
 },
 {
  "id": "3-2",
  "section": "portatiles",
  "number": "3-2",
  "title": "Partes de un extintor portátil",
  "pages": "17–18",
  "lead": "Conocer la función de cada pieza facilita la comprobación y el manejo seguro.",
  "points": [
   [
    "Recipiente",
    "Cuerpo presurizado que contiene agente y, en equipos de presión permanente, propulsor."
   ],
   [
    "Agente extintor",
    "Producto que se proyecta sobre el foco de fuego."
   ],
   [
    "Válvula y palanca",
    "Mecanismos de apertura de la descarga al accionar el extintor."
   ],
   [
    "Tubo sifón",
    "Conduce el agente desde el interior del cuerpo hasta la válvula."
   ],
   [
    "Manguera",
    "Permite dirigir el agente desde una posición segura."
   ],
   [
    "Boquilla",
    "Conforma el tipo de salida adecuado al agente."
   ],
   [
    "Anilla de seguridad",
    "Impide una actuación involuntaria."
   ],
   [
    "Manómetro",
    "Indica la presión interna en aparatos que lo incorporan."
   ],
   [
    "Etiqueta",
    "Explica instrucciones, características y revisiones pertinentes."
   ]
  ],
  "tip": "No confundir tubo sifón interno con manguera externa.",
  "format": "default"
 },
 {
  "id": "3-3",
  "section": "portatiles",
  "number": "3-3",
  "title": "Carga, tiempo de descarga, alcance y eficacia",
  "pages": "18–19",
  "lead": "El dato decisivo de eficacia combina una cifra con una letra que representa el hogar de ensayo.",
  "points": [
   [
    "Carga",
    "Cantidad de agente: litros para formulaciones a base de agua y kilogramos para otros agentes, conforme al temario."
   ],
   [
    "Tiempo de funcionamiento",
    "Periodo continuo de descarga del agente sin interrupciones."
   ],
   [
    "Alcance",
    "Distancia útil de proyección, variable según agente y modelo; la descripción del manual indica valores medios de 10–14 m en su definición."
   ],
   [
    "Eficacia 34A",
    "El número y la A remiten a la magnitud del hogar de ensayo con sólido combustible."
   ],
   [
    "Eficacia 183B",
    "El número y la B se asocian con un ensayo de combustible líquido."
   ],
   [
    "Comparación",
    "La cifra por sí sola no representa un volumen o masa universal para todas las clases."
   ]
  ],
  "tip": "No interpretes «34A» como 34 litros del mismo modo que «183B».",
  "format": "default"
 },
 {
  "id": "3-4",
  "section": "portatiles",
  "number": "3-4",
  "title": "Clasificación por agente y presurización",
  "pages": "19–21",
  "lead": "Además de la masa, los extintores se distinguen por agente de extinción y forma de suministrar la presión.",
  "points": [
   [
    "Agentes",
    "Agua, espuma, polvo BC/ABC/D, CO₂ y otros gases especiales, según el caso."
   ],
   [
    "Presión permanente",
    "Agente y gas impulsor permanecen en el mismo recipiente bajo presión."
   ],
   [
    "Presión adosada o auxiliar",
    "Se libera gas de otra botella o cartucho para presurizar y descargar."
   ],
   [
    "Agua/espuma",
    "Aplicaciones vinculadas al combustible y restricciones de conductividad."
   ],
   [
    "Polvo",
    "Muy frecuente en edificios; deja residuos que pueden afectar aparatos eléctricos y electrónicos."
   ],
   [
    "CO₂",
    "Se proyecta como gas; valorar ventilación y temperatura de descarga."
   ]
  ],
  "tip": "Clasificar por carga, agente y presión son tres criterios diferentes.",
  "format": "default"
 },
 {
  "id": "3-5",
  "section": "portatiles",
  "number": "3-5",
  "title": "Emplazamiento, señalización y revisiones",
  "pages": "22–25",
  "lead": "El extintor solo resulta útil si es accesible, visible, apropiado y está mantenido.",
  "points": [
   [
    "Situación",
    "Próximo a lugares con probabilidad de ignición, sin obstaculizar evacuación."
   ],
   [
    "Visibilidad",
    "Señales normalizadas e identificación accesible."
   ],
   [
    "Mantenimiento",
    "Inspecciones periódicas de presencia, acceso, señalización, estado físico, precintos y presión."
   ],
   [
    "Inspección especializada",
    "Operaciones por mantenedor con periodicidad reglamentaria."
   ],
   [
    "Prueba de presión",
    "El temario menciona prueba de nivel C de aparatos a presión según reglamentación citada."
   ],
   [
    "Etiquetado",
    "Debe informar sobre agente, eficacia, instrucciones, precauciones y datos exigidos."
   ],
   [
    "Precaución normativa",
    "Los plazos legales del manual deben contrastarse con la edición vigente del RIPCI."
   ]
  ],
  "tip": "La eficacia indicada en la etiqueta no sustituye la inspección del equipo.",
  "format": "default"
 },
 {
  "id": "3-6",
  "section": "portatiles",
  "number": "3-6",
  "title": "Etiquetado y precauciones",
  "pages": "25–27",
  "lead": "El marcado permite comprobar el destino del extintor y cómo emplearlo sin recurrir a suposiciones.",
  "points": [
   [
    "Identificación",
    "Clase de agente y cantidad de carga."
   ],
   [
    "Eficacia",
    "Clasificación acreditada según hogares de ensayo."
   ],
   [
    "Instrucciones",
    "Secuencia de uso representada por texto o pictogramas."
   ],
   [
    "Advertencias",
    "Agentes contraindicados y precauciones, especialmente ante equipos eléctricos."
   ],
   [
    "Control",
    "Datos de fabricante, autorización/mantenimiento y marcado técnico aplicable."
   ]
  ],
  "tip": "Lee tanto la eficacia como las limitaciones antes de emplearlo.",
  "format": "default"
 },
 {
  "id": "4-1",
  "section": "mantas",
  "number": "4-1",
  "title": "Mantas ignífugas",
  "pages": "28",
  "lead": "Se usan para sofocar determinados conatos al cubrir el foco y separarlo del aire.",
  "points": [
   [
    "Mecanismo",
    "Sofocación por cubrir el combustible."
   ],
   [
    "Utilidad",
    "Fuegos incipientes de pequeña extensión, incluidos ciertos incidentes de cocina."
   ],
   [
    "Despliegue",
    "Proteger manos y cuerpo; evitar proyectar la manta bruscamente sobre un líquido ardiendo."
   ],
   [
    "Conservación",
    "Mantener accesible y en condiciones de uso; seguir instrucciones del fabricante."
   ],
   [
    "Caducidad",
    "El documento señala que la fecha indicada por el fabricante no debe exceder 20 años."
   ]
  ],
  "tip": "Cubrir y aislar del oxígeno, sin levantar prematuramente la manta.",
  "format": "default"
 },
 {
  "id": "5-1",
  "section": "industria",
  "number": "5-1",
  "title": "Sector y carga de fuego",
  "pages": "29–34",
  "lead": "El RSCIEI relaciona el riesgo industrial con la sectorización, la carga combustible y los niveles de riesgo intrínseco.",
  "points": [
   [
    "Sector de incendio",
    "Espacio delimitado para confinar el fuego o impedir su propagación durante un tiempo determinado."
   ],
   [
    "Carga de fuego",
    "Energía liberable por combustión completa de los materiales combustibles del sector."
   ],
   [
    "Densidad de carga de fuego",
    "Carga de fuego referida a la superficie; se expresa en MJ/m² o Mcal/m²."
   ],
   [
    "Nivel de riesgo intrínseco",
    "Se evalúa según el procedimiento y los criterios de la norma industrial aplicable."
   ],
   [
    "Finalidad de sectorizar",
    "Limitar propagación entre áreas y dimensionar las protecciones."
   ]
  ],
  "tip": "No mezcles carga total de fuego con densidad de carga de fuego por metro cuadrado.",
  "format": "default",
  "note": "El manual cita RD 164/2025 para establecimientos industriales; toda exigencia se identifica como dato de esa edición."
 },
 {
  "id": "5-2",
  "section": "industria",
  "number": "5-2",
  "title": "Dotación y disposición de extintores industriales",
  "pages": "35–36",
  "lead": "El documento fija extintores en sectores industriales y criterios de clase predominante, simultaneidad de clases y recorridos.",
  "points": [
   [
    "Obligación general",
    "El texto cita extintores portátiles en todos los sectores, con excepciones justificadas en ciertas zonas automatizadas sin acceso de personas."
   ],
   [
    "Clase predominante",
    "Si la clase A o B aporta al menos 90 % de la carga de fuego, se trata como clase A o B; en otro caso se evalúa como A-B."
   ],
   [
    "Sector A-B",
    "Calcular dotación requerida para A y B por separado y sumar las necesidades."
   ],
   [
    "Sector con gas C",
    "Existen reglas diferenciadas cuando predomina el gas; consultar normativa sectorial."
   ],
   [
    "Presencia de metales D",
    "Emplear agente específico según el combustible."
   ],
   [
    "Electricidad",
    "Prohibición de determinados agentes conductores bajo las condiciones de tensión que cita el manual."
   ],
   [
    "Recorrido horizontal",
    "El texto reproduce 15 m hasta extintor en sectores industriales y 25 m en determinadas áreas D/E."
   ],
   [
    "Móviles de polvo",
    "Previsión adicional al superar determinados volúmenes de líquidos inflamables."
   ]
  ],
  "tip": "Sector industrial 15 m; determinadas áreas exteriores D/E 25 m, según PDF.",
  "format": "default"
 },
 {
  "id": "6-1",
  "section": "uso",
  "number": "6-1",
  "title": "Uso práctico y seguro del extintor",
  "pages": "37",
  "lead": "Procedimiento operativo orientativo para un conato, condicionado siempre a la seguridad de evacuación.",
  "points": [
   [
    "Valorar situación",
    "Actuar solo si el fuego es incipiente, la evacuación está garantizada y el agente es apropiado."
   ],
   [
    "Comprobar equipo",
    "Identificar clase y usar el extintor cuya eficacia sea adecuada."
   ],
   [
    "Retirar seguro",
    "Quitar la anilla o dispositivo de bloqueo según instrucciones."
   ],
   [
    "Colocación",
    "Al exterior, mantener el viento a la espalda; al interior, situarse entre foco y salida disponible."
   ],
   [
    "Dirigir la descarga",
    "Apuntar a la base del fuego, no a la parte superior de las llamas."
   ],
   [
    "Barrido",
    "Descargar de forma controlada, recorriendo la base; en líquidos, aplicar tangencialmente para no dispersarlos."
   ],
   [
    "Cortar gas",
    "Si hay escape combustible, priorizar cierre seguro del suministro cuando sea posible."
   ],
   [
    "Brasas y reignición",
    "En sólidos, comprobar focos residuales y riesgo de nuevo encendido."
   ],
   [
    "Después",
    "Considerar gases tóxicos, electricidad y ventilación, y retirarse si la situación es insegura."
   ]
  ],
  "tip": "La prioridad absoluta es conservar una vía de escape segura.",
  "format": "steps"
 }
];
const CARDS=[
 [
  "tipos",
  "Tema 8 · Clase A",
  "Combustibles sólidos, generalmente orgánicos, que pueden producir brasas: madera, papel, tela y cartón.",
  "p. 7"
 ],
 [
  "tipos",
  "Tema 8 · Clase B",
  "Líquidos inflamables y sólidos licuables, como gasolina y otros combustibles líquidos.",
  "p. 7"
 ],
 [
  "tipos",
  "Tema 8 · Clase C",
  "Gases combustibles; ejemplos del texto: butano y propano.",
  "p. 7"
 ],
 [
  "tipos",
  "Tema 8 · Clase D",
  "Metales combustibles como magnesio, sodio y potasio.",
  "p. 7"
 ],
 [
  "tipos",
  "Tema 8 · Clase F",
  "Aceites y grasas de cocina, vegetales o animales.",
  "p. 7"
 ],
 [
  "agentes",
  "Tema 8 · Eliminar combustible",
  "Retirar el material o cortar el flujo; puede hacerse por separación directa o por aislamiento de combustibles cercanos.",
  "p. 8"
 ],
 [
  "agentes",
  "Tema 8 · Sofocar",
  "Reducir el contacto del combustible con el oxígeno o desplazar el comburente por un medio inerte.",
  "p. 8"
 ],
 [
  "agentes",
  "Tema 8 · Enfriar",
  "Absorber calor hasta impedir que prosiga la reacción de combustión.",
  "p. 8"
 ],
 [
  "agentes",
  "Tema 8 · Inhibir",
  "Interrumpir químicamente las reacciones en cadena.",
  "p. 8"
 ],
 [
  "agentes",
  "Tema 8 · Clasificación por estado",
  "Agentes gaseosos, líquidos y sólidos.",
  "p. 8"
 ],
 [
  "agentes",
  "Tema 8 · Nitrógeno",
  "Gas inerte que contribuye a extinguir por disminución de la proporción de oxígeno disponible.",
  "p. 9–11"
 ],
 [
  "agentes",
  "Tema 8 · Dióxido de carbono (CO₂)",
  "Descarga gaseosa que desplaza oxígeno y enfría al expandirse; útil cerca de determinados equipos eléctricos.",
  "p. 9–11"
 ],
 [
  "agentes",
  "Tema 8 · Halones",
  "Compuestos halogenados históricamente empleados; su uso actual puede estar restringido por motivos ambientales.",
  "p. 9–11"
 ],
 [
  "agentes",
  "Tema 8 · Mezclas gaseosas",
  "Combinaciones que reducen la concentración de oxígeno o actúan sobre el proceso de combustión.",
  "p. 9–11"
 ],
 [
  "agentes",
  "Tema 8 · Seguridad",
  "No se debe tratar una descarga gaseosa en recinto como inocua: considerar asfixia y ventilación.",
  "p. 9–11"
 ],
 [
  "agentes",
  "Tema 8 · Agua",
  "Absorbe calor; el chorro o la pulverización modifican su alcance y superficie de intercambio.",
  "p. 11–14"
 ],
 [
  "agentes",
  "Tema 8 · Agua pulverizada",
  "Mayor intercambio térmico; requiere valorar riesgos de electricidad y reactividad del material.",
  "p. 11–14"
 ],
 [
  "agentes",
  "Tema 8 · Espuma",
  "Cubre combustibles y separa vapores del aire, especialmente en ciertos líquidos inflamables.",
  "p. 11–14"
 ],
 [
  "agentes",
  "Tema 8 · Acetato de potasio",
  "Agente asociado al tratamiento de fuegos de cocina con aceites/grasas, clase F.",
  "p. 11–14"
 ],
 [
  "agentes",
  "Tema 8 · Limitación eléctrica",
  "El manual advierte contra el agua a chorro y la espuma sobre equipos bajo tensión.",
  "p. 11–14"
 ],
 [
  "agentes",
  "Tema 8 · Efecto del agente",
  "La selección depende del combustible y las condiciones del escenario.",
  "p. 11–14"
 ],
 [
  "agentes",
  "Tema 8 · BC convencional",
  "Pensado para líquidos y gases, sin eficacia suficiente sobre brasas propias de fuegos clase A.",
  "p. 14–15"
 ],
 [
  "agentes",
  "Tema 8 · ABC polivalente",
  "Adecuado para A, B y C; puede dejar residuos que dañen equipos y electrónica.",
  "p. 14–15"
 ],
 [
  "agentes",
  "Tema 8 · Especial para D",
  "Formulaciones especiales para metales combustibles; no sustituir por BC/ABC indiscriminadamente.",
  "p. 14–15"
 ],
 [
  "agentes",
  "Tema 8 · Propulsión",
  "El extintor utiliza gas impulsor, habitualmente nitrógeno o CO₂, según el documento.",
  "p. 14–15"
 ],
 [
  "agentes",
  "Tema 8 · Tensión eléctrica",
  "Exigir aparato y ensayo dieléctrico apropiados, cuando proceda, y no asumir seguridad por el mero nombre del agente.",
  "p. 14–15"
 ],
 [
  "agentes",
  "Tema 8 · Sólidos con brasas (A)",
  "Agua y polvo ABC figuran entre las opciones; BC por sí solo no cubre suficientemente las brasas.",
  "p. 15"
 ],
 [
  "agentes",
  "Tema 8 · Líquidos (B)",
  "Espuma, polvo BC/ABC y CO₂ pueden considerarse según el escenario.",
  "p. 15"
 ],
 [
  "agentes",
  "Tema 8 · Gases (C)",
  "Primero controlar el suministro de combustible, si puede realizarse con seguridad.",
  "p. 15"
 ],
 [
  "agentes",
  "Tema 8 · Metales (D)",
  "Seleccionar agente especial para el metal concreto.",
  "p. 15"
 ],
 [
  "agentes",
  "Tema 8 · Aceites de cocina (F)",
  "El tema destaca el acetato de potasio como agente específico.",
  "p. 15"
 ],
 [
  "agentes",
  "Tema 8 · Riesgo eléctrico",
  "La tabla advierte de la peligrosidad del agua a chorro y la espuma en equipos bajo tensión.",
  "p. 15"
 ],
 [
  "agentes",
  "Tema 8 · Equipos electrónicos",
  "CO₂ no deja residuos de polvo; conviene valorar su idoneidad y seguridad.",
  "p. 15"
 ],
 [
  "portatiles",
  "Tema 8 · Definición funcional",
  "Equipo de agente extintor proyectable sobre el fuego mediante una presión interna.",
  "p. 16–19"
 ],
 [
  "portatiles",
  "Tema 8 · Portátil",
  "El manual cita masa total en condiciones de servicio igual o inferior a 20 kg.",
  "p. 16–19"
 ],
 [
  "portatiles",
  "Tema 8 · Móvil",
  "Sobre ruedas, diseñado para accionamiento manual, de masa superior a 20 kg.",
  "p. 16–19"
 ],
 [
  "portatiles",
  "Tema 8 · Dorsal",
  "El texto describe equipos que se portan sujetos a la espalda, de hasta 30 kg.",
  "p. 16–19"
 ],
 [
  "portatiles",
  "Tema 8 · Color del cuerpo",
  "El manual indica un 95 % del cuerpo de color rojo.",
  "p. 16–19"
 ],
 [
  "portatiles",
  "Tema 8 · Presurización",
  "Puede ser permanente o utilizar un gas auxiliar liberado al accionar el equipo.",
  "p. 16–19"
 ],
 [
  "portatiles",
  "Tema 8 · Recipiente",
  "Cuerpo presurizado que contiene agente y, en equipos de presión permanente, propulsor.",
  "p. 17–18"
 ],
 [
  "portatiles",
  "Tema 8 · Agente extintor",
  "Producto que se proyecta sobre el foco de fuego.",
  "p. 17–18"
 ],
 [
  "portatiles",
  "Tema 8 · Válvula y palanca",
  "Mecanismos de apertura de la descarga al accionar el extintor.",
  "p. 17–18"
 ],
 [
  "portatiles",
  "Tema 8 · Tubo sifón",
  "Conduce el agente desde el interior del cuerpo hasta la válvula.",
  "p. 17–18"
 ],
 [
  "portatiles",
  "Tema 8 · Manguera",
  "Permite dirigir el agente desde una posición segura.",
  "p. 17–18"
 ],
 [
  "portatiles",
  "Tema 8 · Boquilla",
  "Conforma el tipo de salida adecuado al agente.",
  "p. 17–18"
 ],
 [
  "portatiles",
  "Tema 8 · Anilla de seguridad",
  "Impide una actuación involuntaria.",
  "p. 17–18"
 ],
 [
  "portatiles",
  "Tema 8 · Manómetro",
  "Indica la presión interna en aparatos que lo incorporan.",
  "p. 17–18"
 ],
 [
  "portatiles",
  "Tema 8 · Etiqueta",
  "Explica instrucciones, características y revisiones pertinentes.",
  "p. 17–18"
 ],
 [
  "portatiles",
  "Tema 8 · Carga",
  "Cantidad de agente: litros para formulaciones a base de agua y kilogramos para otros agentes, conforme al temario.",
  "p. 18–19"
 ],
 [
  "portatiles",
  "Tema 8 · Tiempo de funcionamiento",
  "Periodo continuo de descarga del agente sin interrupciones.",
  "p. 18–19"
 ],
 [
  "portatiles",
  "Tema 8 · Alcance",
  "Distancia útil de proyección, variable según agente y modelo; la descripción del manual indica valores medios de 10–14 m en su definición.",
  "p. 18–19"
 ],
 [
  "portatiles",
  "Tema 8 · Eficacia 34A",
  "El número y la A remiten a la magnitud del hogar de ensayo con sólido combustible.",
  "p. 18–19"
 ],
 [
  "portatiles",
  "Tema 8 · Eficacia 183B",
  "El número y la B se asocian con un ensayo de combustible líquido.",
  "p. 18–19"
 ],
 [
  "portatiles",
  "Tema 8 · Comparación",
  "La cifra por sí sola no representa un volumen o masa universal para todas las clases.",
  "p. 18–19"
 ],
 [
  "portatiles",
  "Tema 8 · Agentes",
  "Agua, espuma, polvo BC/ABC/D, CO₂ y otros gases especiales, según el caso.",
  "p. 19–21"
 ],
 [
  "portatiles",
  "Tema 8 · Presión permanente",
  "Agente y gas impulsor permanecen en el mismo recipiente bajo presión.",
  "p. 19–21"
 ],
 [
  "portatiles",
  "Tema 8 · Presión adosada o auxiliar",
  "Se libera gas de otra botella o cartucho para presurizar y descargar.",
  "p. 19–21"
 ],
 [
  "portatiles",
  "Tema 8 · Agua/espuma",
  "Aplicaciones vinculadas al combustible y restricciones de conductividad.",
  "p. 19–21"
 ],
 [
  "portatiles",
  "Tema 8 · Polvo",
  "Muy frecuente en edificios; deja residuos que pueden afectar aparatos eléctricos y electrónicos.",
  "p. 19–21"
 ],
 [
  "portatiles",
  "Tema 8 · CO₂",
  "Se proyecta como gas; valorar ventilación y temperatura de descarga.",
  "p. 19–21"
 ],
 [
  "portatiles",
  "Tema 8 · Situación",
  "Próximo a lugares con probabilidad de ignición, sin obstaculizar evacuación.",
  "p. 22–25"
 ],
 [
  "portatiles",
  "Tema 8 · Visibilidad",
  "Señales normalizadas e identificación accesible.",
  "p. 22–25"
 ],
 [
  "portatiles",
  "Tema 8 · Mantenimiento",
  "Inspecciones periódicas de presencia, acceso, señalización, estado físico, precintos y presión.",
  "p. 22–25"
 ],
 [
  "portatiles",
  "Tema 8 · Inspección especializada",
  "Operaciones por mantenedor con periodicidad reglamentaria.",
  "p. 22–25"
 ],
 [
  "portatiles",
  "Tema 8 · Prueba de presión",
  "El temario menciona prueba de nivel C de aparatos a presión según reglamentación citada.",
  "p. 22–25"
 ],
 [
  "portatiles",
  "Tema 8 · Etiquetado",
  "Debe informar sobre agente, eficacia, instrucciones, precauciones y datos exigidos.",
  "p. 22–25"
 ],
 [
  "portatiles",
  "Tema 8 · Precaución normativa",
  "Los plazos legales del manual deben contrastarse con la edición vigente del RIPCI.",
  "p. 22–25"
 ],
 [
  "portatiles",
  "Tema 8 · Identificación",
  "Clase de agente y cantidad de carga.",
  "p. 25–27"
 ],
 [
  "portatiles",
  "Tema 8 · Eficacia",
  "Clasificación acreditada según hogares de ensayo.",
  "p. 25–27"
 ],
 [
  "portatiles",
  "Tema 8 · Instrucciones",
  "Secuencia de uso representada por texto o pictogramas.",
  "p. 25–27"
 ],
 [
  "portatiles",
  "Tema 8 · Advertencias",
  "Agentes contraindicados y precauciones, especialmente ante equipos eléctricos.",
  "p. 25–27"
 ],
 [
  "portatiles",
  "Tema 8 · Control",
  "Datos de fabricante, autorización/mantenimiento y marcado técnico aplicable.",
  "p. 25–27"
 ],
 [
  "mantas",
  "Tema 8 · Mecanismo",
  "Sofocación por cubrir el combustible.",
  "p. 28"
 ],
 [
  "mantas",
  "Tema 8 · Utilidad",
  "Fuegos incipientes de pequeña extensión, incluidos ciertos incidentes de cocina.",
  "p. 28"
 ],
 [
  "mantas",
  "Tema 8 · Despliegue",
  "Proteger manos y cuerpo; evitar proyectar la manta bruscamente sobre un líquido ardiendo.",
  "p. 28"
 ],
 [
  "mantas",
  "Tema 8 · Conservación",
  "Mantener accesible y en condiciones de uso; seguir instrucciones del fabricante.",
  "p. 28"
 ],
 [
  "mantas",
  "Tema 8 · Caducidad",
  "El documento señala que la fecha indicada por el fabricante no debe exceder 20 años.",
  "p. 28"
 ],
 [
  "industria",
  "Tema 8 · Sector de incendio",
  "Espacio delimitado para confinar el fuego o impedir su propagación durante un tiempo determinado.",
  "p. 29–34"
 ],
 [
  "industria",
  "Tema 8 · Carga de fuego",
  "Energía liberable por combustión completa de los materiales combustibles del sector.",
  "p. 29–34"
 ],
 [
  "industria",
  "Tema 8 · Densidad de carga de fuego",
  "Carga de fuego referida a la superficie; se expresa en MJ/m² o Mcal/m².",
  "p. 29–34"
 ],
 [
  "industria",
  "Tema 8 · Nivel de riesgo intrínseco",
  "Se evalúa según el procedimiento y los criterios de la norma industrial aplicable.",
  "p. 29–34"
 ],
 [
  "industria",
  "Tema 8 · Finalidad de sectorizar",
  "Limitar propagación entre áreas y dimensionar las protecciones.",
  "p. 29–34"
 ],
 [
  "industria",
  "Tema 8 · Obligación general",
  "El texto cita extintores portátiles en todos los sectores, con excepciones justificadas en ciertas zonas automatizadas sin acceso de personas.",
  "p. 35–36"
 ],
 [
  "industria",
  "Tema 8 · Clase predominante",
  "Si la clase A o B aporta al menos 90 % de la carga de fuego, se trata como clase A o B; en otro caso se evalúa como A-B.",
  "p. 35–36"
 ],
 [
  "industria",
  "Tema 8 · Sector A-B",
  "Calcular dotación requerida para A y B por separado y sumar las necesidades.",
  "p. 35–36"
 ],
 [
  "industria",
  "Tema 8 · Sector con gas C",
  "Existen reglas diferenciadas cuando predomina el gas; consultar normativa sectorial.",
  "p. 35–36"
 ],
 [
  "industria",
  "Tema 8 · Presencia de metales D",
  "Emplear agente específico según el combustible.",
  "p. 35–36"
 ],
 [
  "industria",
  "Tema 8 · Electricidad",
  "Prohibición de determinados agentes conductores bajo las condiciones de tensión que cita el manual.",
  "p. 35–36"
 ],
 [
  "industria",
  "Tema 8 · Recorrido horizontal",
  "El texto reproduce 15 m hasta extintor en sectores industriales y 25 m en determinadas áreas D/E.",
  "p. 35–36"
 ],
 [
  "industria",
  "Tema 8 · Móviles de polvo",
  "Previsión adicional al superar determinados volúmenes de líquidos inflamables.",
  "p. 35–36"
 ],
 [
  "uso",
  "Tema 8 · Valorar situación",
  "Actuar solo si el fuego es incipiente, la evacuación está garantizada y el agente es apropiado.",
  "p. 37"
 ],
 [
  "uso",
  "Tema 8 · Comprobar equipo",
  "Identificar clase y usar el extintor cuya eficacia sea adecuada.",
  "p. 37"
 ],
 [
  "uso",
  "Tema 8 · Retirar seguro",
  "Quitar la anilla o dispositivo de bloqueo según instrucciones.",
  "p. 37"
 ],
 [
  "uso",
  "Tema 8 · Colocación",
  "Al exterior, mantener el viento a la espalda; al interior, situarse entre foco y salida disponible.",
  "p. 37"
 ],
 [
  "uso",
  "Tema 8 · Dirigir la descarga",
  "Apuntar a la base del fuego, no a la parte superior de las llamas.",
  "p. 37"
 ],
 [
  "uso",
  "Tema 8 · Barrido",
  "Descargar de forma controlada, recorriendo la base; en líquidos, aplicar tangencialmente para no dispersarlos.",
  "p. 37"
 ],
 [
  "uso",
  "Tema 8 · Cortar gas",
  "Si hay escape combustible, priorizar cierre seguro del suministro cuando sea posible.",
  "p. 37"
 ],
 [
  "uso",
  "Tema 8 · Brasas y reignición",
  "En sólidos, comprobar focos residuales y riesgo de nuevo encendido.",
  "p. 37"
 ],
 [
  "uso",
  "Tema 8 · Después",
  "Considerar gases tóxicos, electricidad y ventilación, y retirarse si la situación es insegura.",
  "p. 37"
 ]
];
const MATCH_SETS=[
 {
  "title": "Clase de fuego ↔ combustible",
  "pairs": [
   [
    "Clase A",
    "Madera con brasas"
   ],
   [
    "Clase B",
    "Gasolina"
   ],
   [
    "Clase C",
    "Butano"
   ],
   [
    "Clase D",
    "Magnesio"
   ],
   [
    "Clase F",
    "Aceite de cocina"
   ]
  ]
 },
 {
  "title": "Agente ↔ aplicación principal",
  "pairs": [
   [
    "Polvo BC",
    "Clases B y C"
   ],
   [
    "Polvo ABC",
    "Clases A, B y C"
   ],
   [
    "Polvo D",
    "Metales combustibles"
   ],
   [
    "Acetato potásico",
    "Aceites de cocina"
   ],
   [
    "CO₂",
    "Descarga gaseosa sin residuo sólido"
   ]
  ]
 },
 {
  "title": "Extintor ↔ componente",
  "pairs": [
   [
    "Anilla de seguridad",
    "Evita activación involuntaria"
   ],
   [
    "Tubo sifón",
    "Conduce agente dentro del cuerpo"
   ],
   [
    "Manguera",
    "Dirige la descarga a distancia"
   ],
   [
    "Manómetro",
    "Indica presión interna"
   ],
   [
    "Boquilla",
    "Modela salida del agente"
   ],
   [
    "Válvula",
    "Controla paso del agente"
   ]
  ]
 },
 {
  "title": "Mecanismo ↔ acción",
  "pairs": [
   [
    "Sofocación",
    "Separar del comburente"
   ],
   [
    "Enfriamiento",
    "Absorber calor"
   ],
   [
    "Eliminación",
    "Retirar combustible"
   ],
   [
    "Inhibición",
    "Interrumpir reacción en cadena"
   ]
  ]
 }
];
