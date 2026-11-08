# Entrenador de psicotécnicos

Módulo independiente en `/psicotecnicos/`, enlazado desde la portada.

- **Aprender**: permite mostrar explicaciones, la rotación de las figuras y un cubo tridimensional manipulable mediante un giro.
- **Practicar**: ejercicios nuevos con corrección y explicación después de responder.
- **Examen**: 45 segundos por pregunta; sin pistas antes de la respuesta.
- **Habilidades**: caras opuestas de cubos, rotación mental, series gráficas, series numéricas y memoria.
- **Resultados**: estadísticas por habilidad en `localStorage`, separadas del progreso del Tema 11.

Los ejercicios son **generados desde reglas explícitas**, no extraídos automáticamente de las imágenes del ZIP de psicotécnicos. Son demostraciones y prácticas originales; no equivalen a transcripciones verificadas de exámenes. La red de cubo fija usa parejas de opuestos A–F, B–D y C–E.

## Probar
```sh
npm test
python -m http.server 8000
```
Visitar `http://localhost:8000/psicotecnicos/`. La compilación `npm run build:web` copia también el módulo a `www/psicotecnicos/` para Capacitor.

**Nota**: mantener la rama de desarrollo separada de `main` hasta validar el interfaz y los ejercicios en navegador y dispositivo real.
