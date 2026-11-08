# Instrucciones para agentes de desarrollo

Este repositorio contiene **Fuego & Estudio**, una web estática para preparar oposiciones a bombero. El contenido académico está basado en un PDF facilitado para el Tema 11 y debe mantenerse fiel a esa fuente.

## Encargo Android (Capacitor)

**Si el trabajo consiste en generar una APK Android, lee ANTES de programar el briefing completo en `docs/CODEX_ANDROID_APK.md` y sigue sus criterios de aceptación.** Es el documento principal de requisitos, arquitectura, compilación y entrega.

## Reglas de contribución

- No reescribas la aplicación a Angular, React o Ionic; actualmente es HTML/CSS/JS estático.
- Conserva la biblioteca en `index.html` y la página independiente del Tema 11 en `temas/11/index.html`.
- Conserva los 19 apartados, las 63 tarjetas, las 89 preguntas, los ejercicios de repaso y las explicaciones.
- No alteres sin justificación/verificación datos académicos, normas UNE, artículos ni respuestas del test.
- Preserva el formato de copias de seguridad JSON: `format: "fire-study-backup"`, `version: 1`.
- Mantén la web de GitHub Pages, la navegación relativa y el modo offline del APK.
- No introduzcas cuentas, servidores, telemetría, anuncios ni secretos de firma en el repositorio.
- Prioriza un APK **realmente compilado, probado y descargable**; no comuniques como completadas compilaciones que no se hayan ejecutado.
- Añade pruebas reproducibles y documenta comandos verificados.

**Referencias:** `README.md` y `docs/CODEX_ANDROID_APK.md`.
