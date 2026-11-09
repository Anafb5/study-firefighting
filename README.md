# Fuego & Estudio — Biblioteca de oposición a bombero

Web estática, sin servidor ni registro, preparada para estudiar varios temas con una página independiente para cada uno.

## Estructura

- **Biblioteca de temas**: `/` (archivo `index.html`).
- **Tema 11 — Prendas y equipos de protección personal**: `/temas/11/`.
- **Tema 10 — Vehículos contra incendios**: aparece como pendiente de preparar; todavía no tiene página de estudio.
- Los futuros temas pueden crearse como `/temas/NUMERO/index.html` y añadirse a `catalog.js`.

## Tema 11

El contenido se basa en el PDF del Tema 11 facilitado por la usuaria (44 páginas), **sin distribuir el PDF original**.

- 19 apartados detallados en cuatro bloques, con referencia a páginas del temario.
- Presentación **editorial y variada**: tablas, listas numeradas, comparaciones, diagramas técnicos y esquemas.
- **Exploradores interactivos solo donde son útiles**: partes del casco y ocho familias de protección; la explicación aparece a la derecha, sin repetición posterior.
- 63 tarjetas de memoria.
- **Ejercicios de repaso**: 8 conjuntos para relacionar conceptos; 5 para clasificar; 5 para ordenar secuencias; 16 para detectar afirmaciones incorrectas.
- 89 preguntas tipo test, con simulacro al final o entrenamiento con corrección inmediata y referencias del PDF.
- Progreso, preguntas falladas e historial guardados en `localStorage`.
- Reanudación de página, apartado abierto, posición de lectura y ejercicio en curso al recargar la pestaña mediante `sessionStorage`.

### Copias de seguridad y cambio de dispositivo

La portada y el Tema 11 ofrecen **Exportar progreso** e **Importar progreso**.

- Exportar descarga un archivo `.json` con apartados marcados, tarjetas dominadas, preguntas falladas e historial de tests de cada tema.
- Guardar ese archivo fuera del navegador (ordenador, disco en la nube, etc.) permite restaurarlo si se pierde la caché o cambiar a otro dispositivo.
- Importar un archivo compatible restaura esos datos; **reemplaza** los datos locales de los temas contenidos en la copia, tras pedir confirmación.
- El archivo no incluye preguntas de un examen incompleto, que siguen siendo temporales de la pestaña.
- Los ficheros no se suben a un servidor: el navegador los genera y lee localmente.

## Ejecución

Puede abrirse como contenido estático con un servidor HTTP básico:

```bash
python -m http.server 8000
```

Portada: http://localhost:8000/  
Tema 11: http://localhost:8000/temas/11/

## Android

La aplicación se empaqueta offline con Capacitor y conserva la misma web y el formato de copias de seguridad. Consulta [docs/ANDROID_BUILD.md](docs/ANDROID_BUILD.md) para compilar, descargar e instalar la APK.

## Publicación

GitHub Pages desde la rama `main` mediante `.github/workflows/deploy.yml`.

- Biblioteca: https://anafb5.github.io/study-firefighting/
- Tema 11: https://anafb5.github.io/study-firefighting/temas/11/

## Nota de rigor

El temario contiene discrepancias internas en las categorías NRBQ (p. 15 frente al apartado 3.4.1, p. 32), señaladas en los apuntes. Las referencias a normas UNE, filtros y factores de protección se presentan según la edición facilitada. Contrasta su vigencia con la convocatoria y la legislación y normas aplicables: esta web es un recurso de estudio, no una fuente normativa oficial.


## Módulo jurídico — 26 temas

El portal de la biblioteca incluye los **26 temas de `PARTE JURÍDICA.zip`**, organizados en tres volúmenes, con contenidos por epígrafe, tarjetas, memorización de artículos, ejercicios de clasificación/ordenación y tests. Los PDF aportados son la fuente principal de las respuestas y se identifican por tema y página; cualquier contraste con normativa más reciente debe presentarse aparte.

Los datos, motores y estilos están en `juridica/`. El progreso jurídico y el entrenador de artículos quedan incluidos en el JSON de copia de seguridad sin perder la exportación Android ni los datos del Tema 11.

Pruebas: `npm test` y `node scripts/validate-legal.cjs`. Detalles y límites de revisión en `docs/JURIDICA_METODOLOGIA.md`.
