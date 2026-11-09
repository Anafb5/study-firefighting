# Psicotécnicos: ocho temas del ZIP

La aplicación organiza **cada PDF de habilidades** como un tema independiente, con tres pestañas.

| Tema | Fuente del ZIP | Subtipos entrenables |
|---|---|---|
| 01. Razonamiento lingüístico | PRUEBAS_LINGÜÍSTICAS_RAZONAMIENTO.pdf | Exclusión, analogías, ordenaciones |
| 02. Razonamiento numérico | PRUEBAS_NUMERICAS_RAZONAMIENTO.pdf | Series, matrices, ecuaciones, cálculo |
| 03. Razonamiento gráfico | PRUEBAS_GRAFICAS_RAZONAMIENTO.pdf | Rotación, ciclos, matrices visuales |
| 04. Aptitud espacial | FLO_04_PRUEBAS_APTITUD_ESPACIAL.pdf | Cubos, caras contiguas, volúmenes |
| 05. Aptitud mecánica | PRUEBAS_APTITUD_MECANICA.pdf | Giros de recorrido, conexiones, balanzas |
| 06. Aptitud perceptiva | PRUEBAS_APTITUD_PERCEPTIVA.pdf | Recuento, comparación, parejas |
| 07. Memoria | FLO_07_PRUEBAS_MEMORIA.pdf | Categorías, posiciones, repeticiones |
| 08. Razonamiento abstracto | PRUEBAS_RAZONAMIENTO_ABSTRACTO.pdf | Equivalencias, alternancias, matrices |

Los PDF de introducción, enlaces y solucionarios se describen en **Material complementario** del índice, pero no se cuentan como temas de aptitud.

## Estructura y modos

- Índice: `/psicotecnicos/`.
- Página de tema: `/psicotecnicos/temas/<identificador>/`.
- **Contenido**: síntesis didáctica por apartado, método y ejemplo con referencias a las secciones/páginas del PDF.
- **Entrenamiento**: selección de subtipo y número de preguntas, corrección inmediata; demostración gráfica *solo después de responder* y únicamente si existe una visualización significativa.
- **Examen**: 335 enunciados originales del material aportado: pruebas A–D de siete temas y 55 ejercicios gráficos de diagnóstico. Las preguntas de texto son HTML nativo; los dibujos, cubos, laberintos y opciones gráficas se incluyen como recortes de las láminas. **No hay que subir PDF alguno**.
- **Distribución offline**: `official-bank.json` se copia con la web y la APK. No hay servidor, cuentas ni carga de ficheros.
- **Memoria en examen**: observación de la lista original durante 2 minutos; al comenzar las preguntas la lista desaparece.
- **Anomalías del solucionario**: no se puntúan espacial A6 (respuesta ausente) ni mecánica C4 (respuesta E cuando las alternativas son A–D). Las últimas preguntas D10 de mecánica y perceptiva sí se evalúan, porque ahora se muestran individualmente sin las claves de la página.
- Los ejercicios de **entrenamiento** siguen siendo variantes didácticas generadas mediante reglas: no se confunden con los originales del manual. El material aportado no equivale a pruebas oficiales de una convocatoria.
- El progreso de lectura y los resultados de respuestas se guardan en `localStorage` bajo `fire-study-psico-v2`. Esta clave **no se incluye todavía** en las copias JSON de la parte técnica.

## Implementación

- `topics.mjs`: contenido y referencias académicas de los ocho temas.
- `generator.mjs`: generadores puros sin DOM; respuestas y distracciones validadas.
- `app.mjs`: biblioteca, navegación y estados de contenido y entrenamiento.
- `official-exams.mjs`, `official-bank.json` y `official-ui.mjs`: claves, enunciados y figuras extraídas, y corrección de exámenes sin cargar PDFs.
- `styles.css`: estilo responsive y visualizaciones locales, sin dependencias externas.
- `temas/*/index.html`: páginas estáticas de tema, compartiendo el mismo motor.

El demostrador utiliza una única zona renderizada: al pulsar **Ver demostración** cambia `shownDemo` y la pantalla se vuelve a dibujar. El botón desaparece al abrirse. Un segundo clic/evento de apertura no puede añadir otra instancia. Al cerrar, se sustituye la zona, no se concatena HTML.

## Validación

```sh
npm ci
npm test
```

Las pruebas `tests/psicotecnicos.test.mjs` y `tests/official-exams.test.mjs` verifican las preguntas originales, claves, anomalías y todos los subtipos de ejercicios de forma repetida, sus invariantes matemáticos, las ocho rutas, la navegación y la regresión de «duplicar demostración». La workflow `psicotecnicos-ci.yml` ejecuta las pruebas y una navegación real con Chromium en la rama y en la Pull Request. La compilación `build:web` incluye los recursos para la APK offline.

**Pendiente antes de fusionar:** revisión visual final en móvil real; terminar la revisión visual manual de todos los recortes y los enunciados, especialmente los que reutilizan un diagrama en varias preguntas.
