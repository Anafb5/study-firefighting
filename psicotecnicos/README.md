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
- **Examen**: 45 s por respuesta, sin pistas, correcciones ni demostrador hasta terminar. El resultado final lista respuesta dada/correcta. Los ejercicios de memoria permiten 25 s de observación antes de empezar su pregunta.
- Los ejercicios son **originales, generados mediante reglas y verificados con pruebas**. No son copias de las figuras del manual ni un cuestionario oficial.
- El progreso de lectura y los resultados de respuestas se guardan en `localStorage` bajo `fire-study-psico-v2`. Esta clave **no se incluye todavía** en las copias JSON de la parte técnica.

## Implementación

- `topics.mjs`: contenido y referencias académicas de los ocho temas.
- `generator.mjs`: generadores puros sin DOM; respuestas y distracciones validadas.
- `app.mjs`: biblioteca, navegación y los estados de entrenamiento/examen.
- `styles.css`: estilo responsive y visualizaciones locales, sin dependencias externas.
- `temas/*/index.html`: páginas estáticas de tema, compartiendo el mismo motor.

El demostrador utiliza una única zona renderizada: al pulsar **Ver demostración** cambia `shownDemo` y la pantalla se vuelve a dibujar. El botón desaparece al abrirse. Un segundo clic/evento de apertura no puede añadir otra instancia. Al cerrar, se sustituye la zona, no se concatena HTML.

## Validación

```sh
npm ci
npm test
```

Las pruebas `tests/psicotecnicos.test.mjs` verifican todos los subtipos de ejercicios de forma repetida, sus invariantes matemáticos, las ocho rutas, la navegación y la regresión de «duplicar demostración». La workflow `psicotecnicos-ci.yml` ejecuta las pruebas en la rama y en la Pull Request. La compilación `build:web` incluye los recursos para la APK offline.

**Pendiente antes de fusionar:** revisión visual en navegador y móvil real; ampliar ejemplos con modelos geométricos reconstruidos manualmente a partir de las láminas del ZIP (no se han digitalizado esas láminas).
