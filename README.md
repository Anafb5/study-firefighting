# Fuego & Estudio — Biblioteca de oposición a bombero

Web estática, sin servidor ni registro, preparada para estudiar varios temas con una página independiente para cada uno.

## Estructura

- **Biblioteca de temas**: `/` (archivo `index.html`).
- **Tema 11 — Prendas y equipos de protección personal**: `/temas/11/`.
- **Tema 9 — Instalaciones fijas**: `/temas/9/`, completo y disponible en Técnica.
- **Tema 10 — Vehículos contra incendios**: `/temas/10/`, completo y disponible en el área Técnica.
- Los futuros temas pueden crearse como `/temas/NUMERO/index.html` y añadirse a `catalog.js`.

## Organización por áreas de oposición

La portada organiza el estudio en **tres grandes apartados**:

- **Técnica:** reúne los temas técnicos. Contiene los Temas 9, 10 y 11 publicados.
- **Jurídica:** sección preparada para temarios de legislación y normativa; aún sin material publicado.
- **Psicotécnicos:** espacio preparado para baterías de ejercicios de aptitudes y razonamiento; aún sin material publicado.

La selección se realiza en la portada mediante tarjetas y queda reflejada en el fragmento de la URL (`#tecnica`, `#juridica`, `#psicotecnicos`). `catalog.js` mantiene la lista de áreas y metadatos de los temas. **No marques un tema como publicado hasta que exista su página**.

Al incorporar futuros temas, usa un identificador estable y una clave de progreso única por tema: el Tema 11 existente usa `study-firefighting-t11-v1` y sus copias JSON deben seguir funcionando. Si varios bloques tienen temas con el mismo número, evita colisiones de progreso y amplía de forma compatible la lógica de exportación en `progress.js`.

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

La portada y los Temas 9, 10 y 11 ofrecen **Exportar progreso** e **Importar progreso**.

- Exportar descarga un archivo `.json` con apartados marcados, tarjetas dominadas, preguntas falladas e historial de tests de cada tema.
- Guardar ese archivo fuera del navegador (ordenador, disco en la nube, etc.) permite restaurarlo si se pierde la caché o cambiar a otro dispositivo.
- Importar un archivo compatible restaura esos datos; **reemplaza** los datos locales de los temas contenidos en la copia, tras pedir confirmación.
- El archivo no incluye preguntas de un examen incompleto, que siguen siendo temporales de la pestaña.
- Los ficheros no se suben a un servidor: el navegador los genera y lee localmente.

## Calidad pedagógica de los ejercicios

El repaso de los Temas 9–11 se ha revisado para evitar que el enunciado revele la solución:

- **Relacionar:** correspondencias de normas, elementos, cifras y funciones.
- **Clasificar:** se ocultan las denominaciones que antes desvelaban la categoría (por ejemplo, se pregunta por `BUL`, no «bomba urbana ligera»).
- **Ordenar:** únicamente secuencias funcionales o procedimientos; se han retirado escalas con cifras y niveles visibles.
- **Cifras:** nueva modalidad de respuesta libre numérica. Admite `2000`/`2.000` y `4,5`/`4.5`. Solo muestra cuatro opciones si el estudiante solicita ayuda; distingue aciertos sin pistas, con pistas y errores.
- **Detectar errores:** se mezclan las afirmaciones y se muestra un resultado final, además de justificación por respuesta.

Ejecuta `node scripts/validate-review.cjs` para verificar estructuralmente los bancos, y consulta `docs/CRITERIOS_EJERCICIOS.md` antes de añadir ejercicios de otros temas. También existe una comprobación automática de GitHub Actions. El progreso principal no cambia; las sesiones temporales de repaso usan un esquema `version: 3` para no restaurar respuestas a ejercicios antiguos.

## Ejecución

Puede abrirse como contenido estático con un servidor HTTP básico:

```bash
python -m http.server 8000
```

Portada: http://localhost:8000/  
Tema 9: http://localhost:8000/temas/9/  
Tema 10: http://localhost:8000/temas/10/  
Tema 11: http://localhost:8000/temas/11/

## Publicación

GitHub Pages desde la rama `main` mediante `.github/workflows/deploy.yml`.

- Biblioteca: https://anafb5.github.io/study-firefighting/
- Tema 9: https://anafb5.github.io/study-firefighting/temas/9/
- Tema 10: https://anafb5.github.io/study-firefighting/temas/10/
- Tema 11: https://anafb5.github.io/study-firefighting/temas/11/

## Nota de rigor

El temario contiene discrepancias internas en las categorías NRBQ (p. 15 frente al apartado 3.4.1, p. 32), señaladas en los apuntes. Las referencias a normas UNE, filtros y factores de protección se presentan según la edición facilitada. Contrasta su vigencia con la convocatoria y la legislación y normas aplicables: esta web es un recurso de estudio, no una fuente normativa oficial.

### Integración pendiente con la rama Android de Codex

La rama `content/nuevos-temas` contiene los Temas 9 y 10 sin tocar archivos nativos de Capacitor. Cuando se integre con la rama de APK, el build debe incorporar **todo** `temas/**` (no solo `temas/11/`), incluidos los Temas 9 y 10 y conservar rutas relativas de recursos web. Se generalizaron de forma compatible las claves de `app.js`, `resume.js` y `review.js` mediante `window.STUDY_CONFIG` (Tema 11 conserva claves antiguas por defecto; Tema 10 usa claves propias). Validar ambos temas en Android tras la integración.
