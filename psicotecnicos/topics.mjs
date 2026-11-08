// Resumen didáctico original basado en las familias de ejercicios del ZIP.
// No se reproducen las láminas ni las soluciones originales de los PDF.
export const TOPICS = [
  {
    id:"linguistico",number:"01",title:"Razonamiento lingüístico",subtitle:"Relaciones y lógica verbal",
    source:"PRUEBAS_LINGÜÍSTICAS_RAZONAMIENTO.pdf",pages:"28 páginas",
    summary:"Reconoce qué tienen en común las palabras, completa relaciones y deduce información a partir de frases.",
    objective:"Detectar relaciones semánticas y estructurales sin dejarte llevar por asociaciones superficiales.",
    strategies:[
      {name:"Exclusiones",ref:"§ 1.3 · pp. 6–7",text:"Cuatro términos parecen relacionados, pero uno no cumple el criterio común. Busca una propiedad verificable para todos los demás.",method:"Define primero la categoría compartida. Comprueba cada alternativa y rechaza criterios demasiado amplios.",example:"Río, lago, mar, montaña → montaña no es una masa de agua."},
      {name:"Palabras incompletas",ref:"§ 1.4 · pp. 8–9",text:"Identifica sílabas o fragmentos que completan una o varias palabras.",method:"Comprueba que el fragmento encaja en todas las palabras, respetando el orden de las letras.",example:"PA__ / __SA: el fragmento «TA» forma PATA y TASA."},
      {name:"Analogías",ref:"§ 1.5 · pp. 10–11",text:"Resuelve relaciones del tipo A es a B como C es a D: función, parte-todo, causa-efecto u oposición.",method:"Expresa el vínculo de la primera pareja mediante una frase y aplícala a la segunda.",example:"Pintor : pincel :: escritor : bolígrafo (profesión : herramienta)."},
      {name:"Laberintos lingüísticos",ref:"§ 1.6 · pp. 12–14",text:"Encadena comparaciones, condiciones y relaciones lógicas entre personas u objetos.",method:"Convierte cada pista en una desigualdad o una relación inequívoca antes de contestar.",example:"Si Eva es más alta que Luis y Luis más alto que Ana, Eva es la más alta."}
    ],variants:["exclusion","analogy","verbalorder"],caution:"El manual incorpora también pruebas A–D y ejercicios de repaso (pp. 15–28)."
  },
  {
    id:"numerico",number:"02",title:"Razonamiento numérico",subtitle:"Patrones y cálculo",
    source:"PRUEBAS_NUMERICAS_RAZONAMIENTO.pdf",pages:"73 páginas",
    summary:"Series, igualaciones, matrices, cálculo mental y pequeñas ecuaciones resueltas bajo presión de tiempo.",
    objective:"Encontrar una regla consistente y verificarla en toda la sucesión, no solo en el último salto.",
    strategies:[
      {name:"Secuencias numéricas",ref:"§ 2.3 · pp. 12–31",text:"Hay reglas aditivas, multiplicativas, alternas, de signos, con huecos centrales y circulares.",method:"Calcula diferencias y cocientes; después comprueba si alternan dos series o si cambian las diferencias.",example:"4, 7, 10, 13, ? → suma de 3 en cada paso."},
      {name:"Igualaciones y matrices",ref:"§ 2.4–2.5 · pp. 32–38",text:"Las filas, columnas, círculos o grupos comparten una relación aritmética.",method:"Ensaya la misma operación en dos conjuntos completos antes de calcular el hueco.",example:"Fila: 3, 4, 7 / fila: 5, 6, ? → tercero = suma de los dos primeros."},
      {name:"Cálculo mental",ref:"§ 2.6 · pp. 39–49",text:"Atajos de sumas, restas, multiplicaciones y divisiones sin calculadora.",method:"Descompón números en decenas y unidades. Estima el orden de magnitud para detectar errores.",example:"19 × 5 = (20 × 5) − 5 = 95."},
      {name:"Álgebra y problemas",ref:"§ 2.7–2.8 · pp. 50–57",text:"Ecuaciones sencillas y enunciados que requieren traducir relaciones a operaciones.",method:"Mantén la igualdad aplicando la misma operación a ambos miembros.",example:"3x + 4 = 19 → 3x = 15 → x = 5."}
    ],variants:["sequence","matrix","equation","mental"],caution:"El PDF desarrolla muchos subtipos de secuencias; no todos pueden reducirse a progresiones aritméticas."
  },
  {
    id:"grafico",number:"03",title:"Razonamiento gráfico",subtitle:"Series y matrices visuales",
    source:"PRUEBAS_GRAFICAS_RAZONAMIENTO.pdf",pages:"56 páginas",
    summary:"Detecta movimientos, adiciones, repeticiones, simetrías y combinaciones entre figuras.",
    objective:"Separar los atributos que cambian (posición, orientación, cantidad y forma) para detectar la regla.",
    strategies:[
      {name:"Exclusiones y secuencias",ref:"§ 3.3–3.4 · pp. 15–23",text:"El manual diferencia adición, sustracción, rotación, desplazamiento, ciclos y reglas compuestas.",method:"Observa una variable cada vez: primero orientación, después cantidad, color o posición.",example:"Una flecha que gira 90° a la derecha en cada paso mantiene la forma, pero cambia la orientación."},
      {name:"Matrices gráficas",ref:"§ 3.5 · pp. 24–42",text:"Se construyen mediante repetición, series, suma/resta, alternancia, superposición, simetría o ausencia.",method:"Comprueba la regla por filas y por columnas; exige que encaje en las dos primeras antes de resolver la tercera.",example:"Si la tercera casilla reúne las marcas de las dos anteriores, aplica esa unión a la última fila."},
      {name:"Puzles 2D",ref:"§ 3.6 · pp. 43–45",text:"Se trata de identificar la figura que forman piezas o qué piezas faltan para completarla.",method:"Utiliza bordes, ángulos y longitud relativa; no asumas que se permite reflejar si solo se indica girar.",example:"Dos triángulos rectángulos iguales pueden formar un rectángulo al juntarse por su hipotenusa."},
      {name:"Ensamblaje 3D",ref:"§ 3.7 · pp. 46–52",text:"Visualiza cómo se unen volúmenes manteniendo sus proporciones y orientación.",method:"Empieza por aristas, huecos y caras visibles que sirvan de referencia.",example:"Las caras coincidentes desaparecen del contorno exterior al unir dos sólidos."}
    ],variants:["rotation","symbolsequence","graphicmatrix"],caution:"Los ejercicios con dibujos del PDF se representan aquí mediante variantes originales, no por fotografías de las láminas."
  },
  {
    id:"espacial",number:"04",title:"Aptitud espacial",subtitle:"Cubos, perspectivas y piezas",
    source:"FLO_04_PRUEBAS_APTITUD_ESPACIAL.pdf",pages:"18 páginas",
    summary:"Imagina desarrollos de cubos, caras visibles y piezas que componen una figura sin mover físicamente el papel.",
    objective:"Construir una imagen mental estable de caras opuestas y contiguas antes de contestar.",
    strategies:[
      {name:"Desarrollos de cubos",ref:"Pruebas A–D · pp. 2–17",text:"Relación entre un patrón plano de seis caras y el cubo tridimensional resultante.",method:"Elige una cara central; pliega mentalmente las vecinas y determina qué cara queda en la parte opuesta.",example:"En la red de cruz prolongada que usamos para entrenar: A se opone a F; B a D; C a E."},
      {name:"Perspectiva y orientación",ref:"Pruebas A–D · pp. 2–17",text:"El mismo objeto puede verse distinto al girarlo; una reflexión de espejo no es una rotación.",method:"Conserva la relación entre tres caras que se tocan en una misma esquina.",example:"En una misma esquina de un cubo no pueden aparecer dos caras opuestas."},
      {name:"Composición de piezas",ref:"Pruebas A–D · pp. 2–17",text:"Reconstrucción de una silueta o volumen a partir de piezas parciales.",method:"Identifica ángulos y segmentos únicos antes de probar combinaciones.",example:"Un cuadrado de 2×2 necesita cuatro cuadrados unitarios, aunque una pieza pueda incluir varios."}
    ],variants:["cubeOpposite","cubeAdjacent","blocks"],caution:"El cubo animado del entrenamiento es un modelo didáctico; las láminas del PDF contienen figuras diferentes."
  },
  {
    id:"mecanica",number:"05",title:"Aptitud mecánica",subtitle:"Laberintos, conexiones y balanzas",
    source:"PRUEBAS_APTITUD_MECANICA.pdf",pages:"16 páginas",
    summary:"Sigue recorridos, cuenta giros en ángulo recto y razona relaciones de equilibrio.",
    objective:"Interpretar con precisión conexiones y trayectorias sin contar de más o saltarte un cruce.",
    strategies:[
      {name:"Laberintos y giros",ref:"Pruebas A–D · pp. 2–15",text:"Encuentra caminos desde la entrada hasta la salida y cuenta los cambios de dirección.",method:"Traza primero el recorrido, marca cada codo de 90° y cuenta solo cambios de dirección, no tramos.",example:"Derecha → derecha no añade giro; derecha → arriba añade un giro de 90°."},
      {name:"Conexiones de líneas",ref:"Pruebas A–D · pp. 3, 6, 10, 14",text:"Identifica qué origen está unido con qué destino siguiendo líneas que pueden cruzarse.",method:"Sigue una línea desde su extremo sin cambiar de trazo en las intersecciones.",example:"Dos líneas que se cruzan sin unión no comparten destino."},
      {name:"Cuadrículas",ref:"Pruebas A–D · pp. 3–4 y siguientes",text:"Busca la casilla de inicio o final de un trazado que recorre una cuadrícula.",method:"Fija la referencia A1 y verifica el extremo redondeado antes de invertir el camino.",example:"No confundas el inicio del trazo con el extremo marcado de llegada."},
      {name:"Balanzas",ref:"Pruebas A–D · pp. 4, 8, 12",text:"Deduce equivalencias entre piezas utilizando balanzas ya equilibradas.",method:"Sustituye cada pieza por su valor equivalente y compara el peso total de ambos platillos.",example:"Si 2 cuadrados equivalen a 1 círculo, 2 círculos equivalen a 4 cuadrados."}
    ],variants:["path","connections","balance"],caution:"Los modelos se centran en los tipos que realmente aparecen en el PDF, no en engranajes u otras máquinas ajenas a este documento."
  },
  {
    id:"perceptiva",number:"06",title:"Aptitud perceptiva",subtitle:"Atención, discriminación y rapidez",
    source:"PRUEBAS_APTITUD_PERCEPTIVA.pdf",pages:"15 páginas",
    summary:"Cuenta símbolos y parejas de caracteres, compara cadenas y detecta diferencias visuales pequeñas.",
    objective:"Equilibrar exactitud y rapidez mediante un barrido visual ordenado.",
    strategies:[
      {name:"Recuento de caracteres",ref:"Pruebas A–D · pp. 2–14",text:"Localiza una cifra, letra o par de caracteres dentro de una cadena larga.",method:"Divide la línea en bloques y señala mentalmente cada aparición; cuidado con caracteres parecidos.",example:"En 6061606, el dígito 6 aparece cuatro veces."},
      {name:"Comparación de columnas",ref:"Pruebas A–D · pp. 3–14",text:"Detecta posiciones distintas entre secuencias que aparentan ser idénticas.",method:"Compara carácter por carácter en lugar de leer el número como un todo.",example:"741892 y 741892 → cero diferencias; 741892 y 741832 → una."},
      {name:"Discriminación de formas",ref:"Pruebas A–D · pp. 2–14",text:"Distingue entre figuras similares pero no idénticas.",method:"Comprueba orientación, huecos, segmentos y simetrías antes de marcar la respuesta.",example:"Una figura reflejada no coincide necesariamente con otra girada."}
    ],variants:["count","difference","pairCount"],caution:"Este bloque prioriza tiempo de respuesta, pero nunca concede un acierto si la comparación contiene errores."
  },
  {
    id:"memoria",number:"07",title:"Memoria",subtitle:"Codificación y recuerdo",
    source:"FLO_07_PRUEBAS_MEMORIA.pdf",pages:"14 páginas",
    summary:"Memoriza listas o estímulos durante una exposición limitada y responde cuando desaparezcan.",
    objective:"Retener la información relevante sin volver al estímulo una vez iniciado el cuestionario.",
    strategies:[
      {name:"Memorización de palabras",ref:"Prueba A · pp. 2–4",text:"El manual propone memorizar un listado durante dos minutos y contestar después sin mirarlo.",method:"Agrupa las palabras por categorías y recuerda también cuántas veces se repiten.",example:"Aves, herramientas, nombres y objetos pueden servir de grupos de recuperación."},
      {name:"Repeticiones y categorías",ref:"Pruebas A–D · pp. 2–13",text:"Las preguntas pueden referirse a elementos duplicados, categorías semánticas o palabras concretas.",method:"Registra mentalmente una categoría y su cantidad; distinguir presencia de frecuencia.",example:"GATO, SOL, GATO → 2 apariciones de GATO, aunque solo sea una palabra distinta."},
      {name:"Recuerdo con exposición limitada",ref:"Pruebas A–D · pp. 2–13",text:"La fase de observación es separada de la fase de respuesta.",method:"No intentes releer cuando se oculta la lista; responde con lo codificado durante el intervalo.",example:"Primero aparecen ocho palabras; después se pregunta por una posición o categoría."}
    ],variants:["memoryCategory","memoryPosition","memoryRepeat"],caution:"En entrenamiento la exposición es configurable y breve; en el documento original hay pruebas con dos minutos."
  },
  {
    id:"abstracto",number:"08",title:"Razonamiento abstracto",subtitle:"Relaciones simbólicas y patrones",
    source:"PRUEBAS_RAZONAMIENTO_ABSTRACTO.pdf",pages:"16 páginas",
    summary:"Identifica transformaciones entre símbolos, resuelve equivalencias sencillas y completa patrones abstractos.",
    objective:"Razonar con reglas generales y traducir relaciones simbólicas antes de elegir una opción.",
    strategies:[
      {name:"Equivalencias algebraicas",ref:"Pruebas A–D · pp. 2–15",text:"Reconoce expresiones equivalentes y resuelve incógnitas pequeñas.",method:"Reduce términos semejantes y verifica la igualdad al sustituir.",example:"4x = 2x + 6 → 2x = 6 → x = 3."},
      {name:"Secuencias de símbolos",ref:"Pruebas A–D · pp. 3–15",text:"Las figuras obedecen reglas de alternancia, posición, cantidad o sustitución.",method:"Separa forma, relleno y orientación; identifica qué cambia de un paso al siguiente.",example:"■, □, ■, □, ? → ■."},
      {name:"Matrices de relación",ref:"Pruebas A–D · pp. 3–15",text:"Una matriz combina operaciones o transformaciones siguiendo filas o columnas.",method:"Prueba la misma regla en las líneas completas antes de extrapolar al hueco.",example:"Si cada fila suma una marca al pasar de izquierda a derecha, la última posición debe seguir la misma regla."}
    ],variants:["equivalence","abstractSequence","symbolMatrix"],caution:"Este PDF mezcla ecuaciones y pruebas de figuras; por eso entrenamos ambas familias."
  }
];
export const TOPIC_BY_ID=Object.fromEntries(TOPICS.map(t=>[t.id,t]));
export const EXTRA_MATERIAL=[
{title:"Introducción general",source:"FLOU_PSICOT2_01_INTRO.pdf",info:"Marco introductorio sobre qué miden los psicotécnicos y cómo abordarlos."},
{title:"Recursos externos",source:"FLOU_PSICOT2_INTERIOR_06.pdf",info:"Listado de enlaces para seguir practicando otras habilidades."},
{title:"Soluciones previas",source:"FLO_09_PON_A_PRUEBA_CONOCOCIMIENTOS_PREVIOS.pdf",info:"Solucionario de las preguntas de diagnóstico inicial del manual."},
{title:"Soluciones de repaso",source:"FLO_10_PON_PRUEBA_QUE_HAS_APRENDIDO.pdf",info:"Solucionario de los ejercicios de repaso de varios capítulos."}
];
