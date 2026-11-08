# Fuego & Estudio — Tema 11

Web estática de estudio para oposición a bombero basada en el PDF **11. Prendas y equipos de protección personal** (Volumen IV, 44 páginas).

## Contenido y metodología

- **19 apartados desarrollados** en 4 bloques: EPI y requisitos; prendas y protección respiratoria; NRBQ; Real Decreto 773/1997.
- Esquemas por concepto, definiciones, cifras, tablas y referencias a páginas impresas.
- **63 tarjetas de repaso** con giro, mezcla, filtros por bloque y tarjetas pendientes.
- **5 ejercicios de asociación** sobre normas UNE, filtros, articulado, categorías y botas.
- **89 preguntas tipo test** (4 opciones), aleatorias, por bloques o tema entero.
- Modo **simulacro** (corrección al terminar) y **entrenamiento** (corrección inmediata con explicación).
- Revisión de errores, historial local y progreso persistente en el navegador.

El contenido toma como fuente el temario facilitado, no una revisión de normativa vigente. El PDF original contiene discrepancias en las categorías NRBQ (tabla de p. 15 frente a apartado 3.4.1, p. 32), indicadas de forma expresa en la web. Las denominaciones y cifras de filtros/normas siguen el documento, incluso si las normas han cambiado desde su edición. **Conviene contrastar la vigencia de los textos legales y UNE con las bases de la convocatoria.**

## Desarrollo local

Abre `index.html` con un navegador moderno o inicia un servidor estático en la carpeta:

```bash
python -m http.server 8000
```

No se necesitan dependencias, cuenta ni backend. Los resultados se guardan exclusivamente en `localStorage` del dispositivo.

## Publicación

Incluye `.github/workflows/deploy.yml`. En GitHub, configura **Settings → Pages → Build and deployment → Source: GitHub Actions**; después cada push a `main` despliega la web en:

https://anafb5.github.io/study-firefighting/

## Licencia y fuentes

Web y cuestionarios creados para el estudio personal. No se incorpora ni redistribuye el PDF original. Referencias bibliográficas según el tema suministrado.