# Fuego & Estudio — Biblioteca de oposición a bombero

Web estática, sin servidor ni registro, preparada para estudiar varios temas con una página independiente para cada uno.

## Biblioteca y progreso

- **Portada y dashboard:** `/`, con avance global, progreso por área, tarjetas dominadas, temas completos, errores por revisar y resultados de simulacros.
- **Técnica:** diecinueve temas publicados, cada uno con su propia página `/temas/1/` … `/temas/19/`.
- **Jurídica y Psicotécnicos:** áreas creadas, sin temas publicados de momento.
- **Ahora y a continuación:** muestra temas en curso y, si corresponde, el siguiente publicado todavía sin empezar.
- **Archivo:** los temas cuyo temario se marcó íntegramente como estudiado pasan a un acordeón de **terminados**; se conservan sus datos y siempre es posible repasarlos.
- **Próximos:** los temas restantes se mantienen en otro acordeón desplegable para evitar una portada interminable.
- **Copias de seguridad:** ventana independiente, accesible desde el encabezado, sin botones duplicados ocupando menús y páginas.

### Temas técnicos

| Nº | Materia | Apartados | Tarjetas | Test |
| ---: | --- | ---: | ---: | ---: |
| 1 | Magnitudes físicas | 24 | 143 | 96 |
| 2 | Mecánica de fluidos e hidráulica | 21 | 126 | 84 |
| 3 | Electricidad | 23 | 138 | 92 |
| 4 | Naturaleza del fuego | 23 | 138 | 92 |
| 5 | Agentes extintores | 21 | 126 | 84 |
| 6 | El agua | 18 | 108 | 72 |
| 7 | Espumas extintoras | 12 | 66 | 24 |
| 8 | Extintores | 16 | 99 | 41 |
| 9 | Instalaciones fijas | 33 | 159 | 137 |
| 10 | Vehículos contra incendios | 29 | 88 | 135 |
| 11 | Prendas y EPI | 19 | 63 | 89 |
| 12 | Materiales de rescate y salvamento | 22 | 109 | 92 |
| 13 | Transmisiones | 22 | 115 | 92 |
| 14 | Construcción e incendio | 21 | 109 | 87 |
| 15 | Señalización | 20 | 100 | 83 |
| 16 | Actividades del servicio | 19 | 99 | 79 |
| 17 | Tácticas de combate contra el fuego | 19 | 97 | 79 |
| 18 | Incendios forestales | 21 | 110 | 88 |
| 19 | Elementos estructurales y constructivos | 22 | 112 | 91 |

**Total: 405 apartados de estudio, 2.105 tarjetas y 1.637 preguntas tipo test.**

Los Temas 1–6 y 12–19 utilizan `reader-theme-builder.js` a partir de datos **elaborados específicamente para los PDFs facilitados**. El constructor crea tarjetas, preguntas razonadas y correspondencias para cada apartado, conservando las fórmulas, esquemas y páginas referenciadas. La edición de contenido es un compendio de estudio **no una reproducción íntegra del texto** del PDF.

Los Temas 7–11 conservan las presentaciones particulares y sus bancos originales. Ninguna página depende de una API externa para funcionar.

La navegación se realiza con `#tecnica`, `#juridica`, `#psicotecnicos`. Cada tema mantiene un identificador y una clave independiente de almacenamiento `study-firefighting-tN-v1`. La reanudación guarda la sección/página en que se estaba. Los archivos JSON exportados desde cualquier tema incluyen el progreso de todos los temas existentes en el dispositivo.

## Nuevos temas 12–19

Los PDF aportados se organizaron como **dos temas del Volumen IV (12 y 13)** y **seis del Volumen V (14–19)**. En la biblioteca todas las materias permanecen dentro de Técnica; cada tarjeta muestra el volumen.

- 12. Materiales de rescate, máquinas, herramientas y medios de apoyo.
- 13. Transmisiones: ondas, sonido, radio, canales, códigos y comunicaciones.
- 14. Construcción e incendio: CTE DB-SI, evacuación y resistencia al fuego.
- 15. Señalización: pictogramas, paneles, luces, alarmas, comunicación y gestos.
- 16. Actividades del servicio: prevención, rescate, excarcelación y materias peligrosas.
- 17. Tácticas: zonificación, medios, fases y métodos de extinción.
- 18. Incendios forestales: causas, morfología, propagación, alineación CPS y prevención.
- 19. Estructuras: materiales, esfuerzos, patologías, apuntalamientos y demoliciones.

En cada página hay **apartados de lectura con comparativas y secuencias**, tarjetas, ejercicios de asociación y clasificación, corrección de afirmaciones, cifras que se recuperan sin pistas y tests con justificación y página del PDF. **Esta es una primera versión editorial:** antes de utilizarla como referencia definitiva de oposición hay que comprobar individualmente los distractores, las cifras, la normativa y las técnicas descritas, en especial las partes reglamentarias de los Temas 14, 15 y 18.

## Tema 9 — Instalaciones fijas

Fuente: PDF facilitado *9. Instalaciones fijas*, Volumen IV, 1ª parte técnica (44 páginas).

- **33 apartados**, en siete bloques: detección y alarma; hidrantes; BIE; columna seca; bombas de presión; extinción fija; abastecimiento.
- **159 tarjetas** y **137 preguntas de tipo test** con cuatro opciones, justificación y referencias a páginas impresas.
- **12 conjuntos de asociación**, 6 ejercicios de clasificación, **3 secuencias fundamentadas**, **31 preguntas de cifras sin pistas** y 30 afirmaciones para detectar errores.
- Material variado: diagramas de flujo (detección, rociadores, espuma, abastecimiento), dibujo de columna seca, comparativas de BIE, hidrantes, detectores y bombas; tablas normativas, listas y cifras.
- Progreso independiente con clave `study-firefighting-t9-v1`; sesiones y ejercicios también aislados; importación/exportación JSON de los tres temas compatible.
- **Especial rigor normativo:** todas las cifras de umbrales, distancias, autonomías, periodicidades y UNE se atribuyen al **PDF aportado** y no deben confundirse con la legislación vigente. El tema incluye requisitos para establecimientos industriales que pueden estar desactualizados.

## Tema 10 — Vehículos contra incendios

Fuente: PDF facilitado *10. Vehículos contra incendios*, Volumen IV, primera parte técnica (46 páginas).

- 29 apartados detallados, organizados en clasificación, nomenclatura, componentes, vehículos y circulación.
- 88 tarjetas y 135 preguntas tipo test, con corrección razonada y páginas del documento.
- 12 conjuntos para relacionar, 5 ejercicios de clasificación, **2 secuencias fundamentadas**, **23 preguntas de cifras sin pistas** y 22 afirmaciones para detectar errores.
- Esquema original de vehículo, diagrama hidráulico, comparativas detalladas por modelo, tablas técnicas, listas de dotación y medidas, fichas y checklists de seguridad.
- Navegación, tarjetas, simulacros, progreso `study-firefighting-t10-v1`, reanudación de sesión y exportación JSON compatibles con el Tema 11.
- El manual incluye anomalías de origen expresamente señaladas: presión BRL de p. 15 frente a p. 23; FAV/FAP para apeos (pp. 11 y 35); clasificación BNP p. 29, y posibles modificaciones normativas en circulación. No deben usarse como hechos legales vigentes sin comprobación.

## Tema 11

El contenido se basa en el PDF del Tema 11 facilitado por la usuaria (44 páginas), **sin distribuir el PDF original**.

- 19 apartados detallados en cuatro bloques, con referencia a páginas del temario.
- Presentación **editorial y variada**: tablas, listas numeradas, comparaciones, diagramas técnicos y esquemas.
- **Exploradores interactivos solo donde son útiles**: partes del casco y ocho familias de protección; la explicación aparece a la derecha, sin repetición posterior.
- 63 tarjetas de memoria.
- **Ejercicios de repaso**: 8 conjuntos para relacionar conceptos; 5 para clasificar; **2 secuencias fundamentadas**; **19 preguntas de cifras sin pistas**; 16 para detectar afirmaciones incorrectas.
- 89 preguntas tipo test, con simulacro al final o entrenamiento con corrección inmediata y referencias del PDF.
- Progreso, preguntas falladas e historial guardados en `localStorage`.
- Reanudación de página, apartado abierto, posición de lectura y ejercicio en curso al recargar la pestaña mediante `sessionStorage`.

### Copias de seguridad y cambio de dispositivo

La portada y los diecinueve temas técnicos permiten abrir una **ventana independiente** con las acciones **Exportar progreso** e **Importar progreso**.

- Exportar descarga un archivo `.json` con apartados marcados, tarjetas dominadas, preguntas falladas e historial de tests de cada tema.
- Guardar ese archivo fuera del navegador (ordenador, disco en la nube, etc.) permite restaurarlo si se pierde la caché o cambiar a otro dispositivo.
- Importar un archivo compatible restaura esos datos; **reemplaza** los datos locales de los temas contenidos en la copia, tras pedir confirmación.
- El archivo no incluye preguntas de un examen incompleto, que siguen siendo temporales de la pestaña.
- Los ficheros no se suben a un servidor: el navegador los genera y lee localmente.

## Calidad pedagógica de los ejercicios

El repaso de los Temas 9–11 se ha revisado de forma específica para evitar que el enunciado revele la solución. Los Temas 1–8 también incluyen ejercicios basados en sus fuentes:

- **Relacionar:** correspondencias de normas, elementos, cifras y funciones.
- **Clasificar:** se ocultan las denominaciones que antes desvelaban la categoría (por ejemplo, se pregunta por `BUL`, no «bomba urbana ligera»).
- **Ordenar:** únicamente secuencias funcionales o procedimientos; se han retirado escalas con cifras y niveles visibles.
- **Cifras:** nueva modalidad de respuesta libre numérica. Admite `2000`/`2.000` y `4,5`/`4.5`. Solo muestra cuatro opciones si el estudiante solicita ayuda; distingue aciertos sin pistas, con pistas y errores.
- **Detectar errores:** se mezclan las afirmaciones y se muestra un resultado final, además de justificación por respuesta.

Ejecuta `node scripts/validate-review.cjs` para verificar los bancos originales y `node scripts/validate-all-themes.cjs` para comprobar contenido y recursos de los **diecinueve temas**, y consulta `docs/CRITERIOS_EJERCICIOS.md` antes de añadir ejercicios de otros temas. También existe una comprobación automática de GitHub Actions. El progreso principal no cambia; las sesiones temporales de repaso usan un esquema `version: 3` para no restaurar respuestas a ejercicios antiguos.

## Ejecución

Puede abrirse como contenido estático con un servidor HTTP básico:

```bash
python -m http.server 8000
```

Portada: http://localhost:8000/  
Cada tema: http://localhost:8000/temas/N/ (N = 1 … 19)

## Publicación

La configuración actual de GitHub Pages debe mantener como origen **Deploy from a branch → content/nuevos-temas → /(root)**, hasta integrar los cambios con la rama Android y definir publicación estable desde `main`. Los archivos también están separados del trabajo de Codex.

- Biblioteca: https://anafb5.github.io/study-firefighting/
- Tema 1: https://anafb5.github.io/study-firefighting/temas/1/
- Temas 2–19: sustituir el último número de la URL por el del tema.

## Nota de rigor

El temario contiene discrepancias internas en las categorías NRBQ (p. 15 frente al apartado 3.4.1, p. 32), señaladas en los apuntes. Las referencias a normas UNE, filtros y factores de protección se presentan según la edición facilitada. Contrasta su vigencia con la convocatoria y la legislación y normas aplicables: esta web es un recurso de estudio, no una fuente normativa oficial.

### Integración pendiente con la rama Android de Codex

`content/nuevos-temas` mantiene la biblioteca completa de los diecinueve temas sin modificar los archivos nativos de Capacitor que prepara Codex. Al integrar ramas deben copiarse los recursos web **completos**: `temas/**`, `reader-theme-builder.js`, `reader-questions.js`, `reader-review-data.js`, `reader-layouts.js`, `reader.css`, `review.js`, `review.css`, `app.js`, `resume.js`, `progress.js`, `catalog.js`, `catalog.css` e `index.html`.

Tras la integración, validar en Android la navegación desde la biblioteca, los diecinueve temas sin conexión, los tests, el progreso por tema y las copias JSON. **No se ha generado ni probado una nueva APK en esta rama.**
