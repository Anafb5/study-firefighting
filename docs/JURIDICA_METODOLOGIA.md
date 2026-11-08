# Módulo jurídico: criterio de fuente y método de estudio

**Entrada recibida:** `PARTE JURÍDICA.zip` (26 PDF, 3 volúmenes).  
**Rama:** `content/nuevos-temas`.

## Principio vinculante del proyecto

**El PDF aportado es la fuente de estudio prioritaria.** Todas las respuestas del modo test, las tarjetas y el entrenador de artículos se justifican por el PDF del tema correspondiente. Una reforma posterior, una posible errata o una discrepancia con el BOE se presentará **como una nota diferenciada**, con fecha, enlace y alcance. Nunca debe cambiar silenciosamente una respuesta del examen «según el PDF».

En los ejercicios que manejen números de artículos se identificará **norma + artículo + apartado**, cuando lo tenga. Un «artículo 14» sin norma no es suficiente si aparecen CE, LOTC, LPACAP, LRJSP, LO 3/1981 o distintas normas locales.

## Inventario

| Volumen | Temas jurídicos | Estado inicial |
|---|---|---|
| I | 1–8 | Temas **1, 2 y 3** publicados y revisados contra sus PDF; 4–8 pendientes |
| II | 9–14 | Catalogados, pendientes de redacción individual |
| III | 15–26 | Catalogados, pendientes de redacción individual |

Los 26 aparecen en la biblioteca con su título y volumen. Los pendientes muestran «En preparación» y **no cuentan como terminados** ni se presentan como material verificado.

## Primeros temas publicados

- Jurídica 1: **La Constitución española de 1978** (52 páginas). 17 apartados de estudio, 51 referencias a artículos/apartados, 191 tarjetas y 102 preguntas test.
- Jurídica 2: **Tribunal Constitucional, Corona y reforma constitucional** (46 páginas). 12 apartados, 26 referencias, 112 tarjetas y 52 preguntas.
- Jurídica 3: **Cortes Generales y Defensor del Pueblo** (50 páginas). 15 apartados, 33 referencias, 142 tarjetas y 66 preguntas.

Total inicial: **44 apartados, 110 referencias de artículo, 445 tarjetas y 220 preguntas**. Se suman ejercicios de clasificación, ordenación cuando existe una secuencia real, detección de errores y recuperación de cifras.

## Visualización selectiva y fiel al PDF

**Solo se crean diagramas cuando existe una relación visual significativa**: cronología documentada, jerarquía, reparto cuantitativo, comparación de reglas o secuencia explícita. No se convierte automáticamente cada lista de conceptos en una cuadrícula de tarjetas. La imagen no sustituye el contenido normativo; debajo del esquema se puede desplegar **«Leer el contenido completo y sus matices (según el PDF)»**.

Se han incorporado inicialmente **9 diagramas en 9 epígrafes** de los tres temas publicados:

| Tema | Epígrafe | Función pedagógica |
|---|---|---|
| Jurídica 1 | Proceso constituyente | Cronología de aprobación, referéndum, sanción, publicación y vigencia. |
| Jurídica 1 | Estructura de la Constitución | Jerarquía de apartados y disposiciones sin perder texto completo. |
| Jurídica 1 | Mapa de derechos | Rango de artículos 14, 15–29, 30–38 y 39–52. |
| Jurídica 1 | Garantías | Diferenciar apartados 53.1, 53.2, 53.3 y artículo 54. |
| Jurídica 2 | Composición del Tribunal Constitucional | Reparto verificable: 4 Congreso + 4 Senado + 2 Gobierno + 2 CGPJ = 12. |
| Jurídica 2 | Reforma constitucional | Comparar 167 y 168 CE; no confundir el límite del 169 con otro procedimiento. |
| Jurídica 3 | Cortes Generales | Contraste Congreso (68 CE) / Senado (69 CE), con nota de reforma posterior. |
| Jurídica 3 | Estatuto parlamentario | Diferenciar inviolabilidad, inmunidad, fuero e incompatibilidades. |
| Jurídica 3 | Procedimiento legislativo | Hitos del procedimiento ordinario según ejercicio de ordenación del propio PDF. |

Las representaciones se definen **expresamente y por tema** en el campo opcional `topic.visual`; no se infieren por el título. El generador `juridica/legal-builder.js` conserva los metadatos y el componente `juridica/legal-visuals.js` los presenta sin dependencias externas. El lector compartido `reader-layouts.js` los usa **únicamente** cuando hay un diseño especificado; los demás temas, incluidos los 19 técnicos, siguen intactos. Los estilos están en `juridica/legal.css`.

Comprobar con `node scripts/validate-legal.cjs` que los nueve diagramas se renderizan y que los detalles de cada artículo siguen accesibles. **El gráfico es una orientación para estudiar**: números, fechas, excepciones y palabras legales deben contrastarse siempre con el epígrafe completo del PDF.

## Entrenador de artículos

El modo **Memorizar artículos** usa el banco jurídico revisado del tema, no genera numeraciones por aproximación. Dos direcciones:

1. **Contenido → artículo:** escribir el número (por ejemplo, `14` o `17.2`) sin opciones visibles. Se pueden solicitar pistas, pero no aparecen de entrada.
2. **Artículo → contenido:** escoger entre cuatro contenidos distintos, con corrección y explicación.

Tras contestar se informa del resultado. **Un acierto no marca la tarjeta automáticamente como aprendida.** El estudiante elige entre «Necesito repasarlo» y «Ya domino este artículo», incluso cuando ha fallado. La decisión es independiente de la corrección automática.

Se puede estudiar por bloque y filtrar «Solo pendientes». Las respuestas, pistas y aciertos se anotan para seguimiento sin implicar automatismos de dominio. La sesión puede reanudarse.

## Datos y persistencia

- Contenido: `juridica/N/data.js` proporciona `LEGAL_SOURCE` y referencias explícitas.
- Compilación estructural y banco de test: `juridica/legal-builder.js`.
- Componente interactivo: `juridica/legal-study.js` con `juridica/legal.css`.
- Lector, tarjetas (clásico o respuesta múltiple), ejercicios generales y exámenes: componentes ya existentes.
- Progreso general del tema: `study-firefighting-jN-v1`.
- Progreso de artículos: `study-firefighting-jN-articles-v1`.
- El archivo JSON exportado ahora recoge también ambos tipos de progreso, y mantiene compatibilidad con las claves técnicas `study-firefighting-tN-v1`.
- Sesiones temporales de artículo no son parte del respaldo; se limpian después de importar para evitar estados obsoletos.
- La parte Técnica conserva su numeración y archivos.

## Alertas de actualización normativa

La Constitución tuvo una reforma del artículo **49 en 2024** y otra del artículo **69.3 en mayo de 2026**. El texto consolidado del BOE registra última actualización en mayo de 2026. El temario se reproduce en los ejercicios según su PDF, y el BOE aparece **solo como contraste temporal**, no como respuesta alternativa.

Fuente oficial: https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229

## Requisitos para desarrollar temas pendientes

- Leer **todo el tema**, incluidos cuadros, fórmulas de plazos, excepciones y notas, y registrar la página impresa.
- Redactar apuntes distintos según contenido: tablas para competencias, organigramas para instituciones, secuencias para procedimientos; no todas las lecciones como tarjetas genéricas.
- Seleccionar artículos realmente indicados por el PDF, con su norma específica. Validar el apartado y citar página.
- Evitar test tautológicos y distractores de normas diferentes que permitan acertar sin saber el artículo.
- Priorizar plazos, números, competencias, excepciones y diferencias entre instituciones, solo cuando sean materia documentada.
- Si hay contradicción o posible desfase jurídico, mostrar una **nota de aviso**. Nunca corregir el PDF en silencio.
- Ejecutar `node scripts/validate-legal.cjs` y revisar manualmente las preguntas y distractores; pasar pruebas en móvil y después en la APK de Codex.

## Situación de Android

Los cambios se han escrito **en la rama de contenido**. Los ficheros nativos de la futura APK preparados por Codex no se han modificado ni se ha generado otra APK. Integrar el directorio `juridica/` y los ajustes en `catalog.js`, `progress.js` y `app.js` al hacer el merge.
