# Criterios de calidad para ejercicios de repaso

**Ámbito:** temas de la parte técnica y, más adelante, jurídicos y psicotécnicos. Esta guía se aplica a las futuras incorporaciones, además de los Temas 9, 10 y 11 revisados en noviembre de 2026.

## Objetivo

Un ejercicio debe **discriminar entre haber estudiado y deducir la respuesta por pistas del formato**. Si una persona puede acertar sin conocer el temario solo leyendo las etiquetas, **no es válido como evaluación**. Puede ser un recurso expositivo, pero no debe puntuar como repaso activo.

## Modalidades y reglas

### Relacionar

- Asociar elementos realmente distintos: sigla ↔ definición, norma ↔ objeto, componente ↔ función.
- Se permiten varias etiquetas que compartan una misma respuesta solo si el juego admite ambas correctamente.
- Evitar pares que repitan literalmente la palabra o cifra de la izquierda en la solución de la derecha: «14 → calor de 14 kW/m²» no discrimina conocimiento.
- Mezclar la columna de respuestas y comprobar que no hay equivalencias involuntarias.

### Clasificar

- El enunciado no debe contener la categoría de destino: **mal** «BUL — bomba urbana ligera → Urbana»; **bien** «BUL → Categoría de paso».
- Situaciones y casos de uso son preferibles a copiar títulos de apartados.
- Evitar agrupaciones con clases superpuestas o con varias respuestas razonablemente correctas.
- Las categorías legales y sus valores se mantienen **según el PDF**, salvo verificación legal independiente claramente documentada.

### Ordenar

- Solo para **procesos con secuencia real**: transmisión de una señal SDA, activación física de un rociador, fases de verificación de equipo, flujo de agua.
- **No ordenar niveles con los niveles ya numerados, intervalos de masa etiquetados, cantidades de agua explícitas o periodicidades con sus nombres.** Eso se resuelve visualmente.
- La consigna debe explicar si se pide cronología o cadena funcional; no confundirlas.
- La corrección muestra posiciones correctas, explicación y, si hay errores, la solución ordenada.
- Si un tema tiene una sola secuencia útil, se publica **una**, no se rellena la sección artificialmente.

### Cifras: recuerdo sin pistas

- Por defecto, **respuesta libre**: el estudiante escribe una cifra o intervalo.
- Las unidades pueden omitirse; admite equivalencias de formato (`2000` y `2.000`, `4,5` y `4.5`).
- Si necesita ayuda, puede ver cuatro alternativas, pero un acierto con ayuda **se registra aparte** del acierto sin pistas.
- No escribir en la pregunta el número que se pretende recordar. Ejemplo malo: «B 16/8, ¿qué presión representa el 8?».
- Si la pregunta implica condiciones como «más de» o «menos de», deben recogerse en el texto y/o en la explicación; el ejercicio de cifra comprueba el **umbral numérico**, no por sí solo su desigualdad.
- Tras responder, mostrar la cifra correcta, unidades, justificación y página del temario.
- Un requisito legal o normativo del manual no se presenta como vigente automáticamente.

### Detectar errores

- Preferir confusiones plausibles: intercambio de 45/70 mm en columna seca; FFP2/FFP3; BRP/BFP; norma de equipo cercana.
- Evitar afirmaciones caricaturescas («la columna seca funciona sin tubería», «bomberos pueden ignorar a la policía»).
- Equilibrar casos correctos e incorrectos, mezclar el orden y ofrecer explicación por afirmación.
- Revisión final con nota y registro de errores en la sesión.

## Comprobación técnica

El script `node scripts/validate-review.cjs` verifica que todos los temas publicados tienen bancos coherentes, sin opciones duplicadas, categorías fuera de rango, preguntas sin explicación ni secuencias con niveles numéricos explícitos.

Este verificador **no sustituye la revisión pedagógica y factual**: es necesaria una lectura humana de cada pregunta y su fuente para comprobar que solo existe una solución válida, que la respuesta es útil y que los requisitos normativos corresponden a la edición correcta.

## Integración con Android y GitHub Pages

- Las modificaciones del sistema de ejercicios son compartidas por la web y la APK; en la integración desde `content/nuevos-temas` a la rama Android se deben incorporar `review.js`, `review.css`, los tres `review-data.js` y el nuevo panel de cifras de cada tema.
- La persistencia de los ejercicios permanece en `sessionStorage` con claves aisladas por tema. La revisión usa `version:3` para evitar reutilizar respuestas de esquemas anteriores.
- El progreso principal de estudio y los tests guardados en `localStorage` **no se modifica**.
