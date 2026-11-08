# Briefing para Codex · Study Firefighting → APK Android

**Fecha del encargo:** 8 de noviembre de 2026  
**Repositorio de origen:** https://github.com/Anafb5/study-firefighting  
**Rama principal:** `main`  
**Biblioteca web:** https://anafb5.github.io/study-firefighting/  
**Tema 11:** https://anafb5.github.io/study-firefighting/temas/11/

> **MISIÓN PRINCIPAL — IMPLEMENTAR, NO SOLO PROPONER:** Clona o abre el repositorio real, conserva la web existente y entrega una **APK Android instalable** que empaquete el contenido actual, funcione sin conexión y permita estudiar y guardar progreso. Crea el proyecto Android con Capacitor, comprueba el resultado y deja una forma reproducible de generar la APK. No es una petición de rediseño general ni de reescritura del temario.

## 1. Contexto y destinataria

Esta aplicación es un regalo personal para **una única persona que prepara las oposiciones a bombero en España**. Se busca una herramienta práctica de estudio diario, no un producto comercial ni una plataforma pública multiusuario.

La aplicación debe ser rigurosa, legible y cómoda de usar en móvil: esquemas, cifras del temario, repaso, tests y continuidad entre sesiones. **Lo más importante en este encargo es que lo que ya existe funcione como APK**. No añadas funciones ambiciosas antes de conseguir ese resultado.

### Qué queremos ahora

1. Disponer de un **archivo `.apk` realmente instalable en un móvil Android** (primera entrega: APK debug firmada para pruebas; más adelante, versión de distribución privada firmada con clave de release).
2. Acceder a la biblioteca y al Tema 11 **sin Internet**, con datos, CSS, JavaScript y recursos empaquetados.
3. Mantener **todos los ejercicios, tests, tarjetas, progreso y exportación/importación JSON**.
4. Conservar y mantener funcionando la **web publicada en GitHub Pages** desde el mismo repositorio.
5. Permitir compilaciones posteriores cuando añadamos nuevos temas, **sin perder los datos** de la instalación anterior.
6. Si el entorno de Codex no tiene Android SDK/JDK o no permite compilar, **no des por finalizada la tarea como si hubiera APK**: deja la automatización de GitHub Actions funcionando y proporciona el artefacto de su ejecución, o explica exactamente el bloqueo y los pasos restantes.

## 2. Estado REAL del repositorio (verificado el 8/11/2026)

Proyecto **estático, sin framework SPA y sin backend**: HTML, CSS y JavaScript convencionales. No asumas que está hecho con Angular/Ionic, React, Cordova o Capacitor. En esta fecha **no existe aún un proceso de compilación Android verificado**. Antes de cambiar nada, examina la rama actual: puede haber evolucionado.

| Archivo/ruta | Responsabilidad |
| --- | --- |
| `index.html` + `catalog.css` + `catalog.js` | Portada/biblioteca de temas y resumen de progreso. |
| `temas/11/index.html` | Página independiente del Tema 11; enlaza recursos con rutas relativas `../../`. |
| `data.js` | 19 apartados del tema, 63 tarjetas de memoria y datos de ejercicios de asociación originales. |
| `questions.js` | Banco de 89 preguntas de opción múltiple, con justificación y referencias al PDF. |
| `study-layouts.js` + `study-layouts.css` | Presentación editorial del temario: tablas, listas, comparativas, diagramas; interacciones en el casco y ocho familias de EPI. |
| `app.js` + `styles.css` | Navegación, UI de tema, tarjetas, asociaciones, tests y progreso del Tema 11. |
| `review-data.js` + `review.js` + `review.css` | Ejercicios: **8 conjuntos para relacionar**, 5 para clasificar, 5 para ordenar y 16 afirmaciones para detectar errores. |
| `progress.js` | Exportación e importación de progreso en JSON. |
| `resume.js` | Recupera pestaña, apartado, posición de lectura y ejercicio al recargar, mediante `sessionStorage`. |
| `.github/workflows/deploy.yml` | Despliegue de la web estática en GitHub Pages a partir de `main`. |

**Único tema publicado en la aplicación:** Tema 11, *Prendas y equipos de protección personal*. El Tema 10 figura en la portada como pendiente, **sin página de estudio**; no lo presentes como ya implementado. Se crearán páginas `temas/NÚMERO/` para otros temas en futuras iteraciones.

### Qué debe mantenerse exactamente

- Biblioteca/portada con entrada al Tema 11.
- Los **19 apartados**, sus datos, tablas y referencias al PDF.
- Las interacciones útiles del temario (especialmente las ocho familias de EPI y el esquema del casco, con explicación lateral).
- **63 tarjetas** de memoria.
- Las cuatro modalidades de ejercicios de repaso y los conjuntos existentes.
- **89 preguntas tipo test**, modo simulacro y modo entrenamiento, explicaciones y repaso de errores.
- Marcar apartados como estudiados, registro de tarjetas dominadas, historial de tests.
- Recuperar la sección, el apartado y la posición de lectura al reabrir/recargar cuando sea viable.
- Importar/exportar progreso a un archivo JSON.
- Navegación, diseño responsive y web en GitHub Pages.

**No cambies el contenido académico**, los números, las respuestas ni las referencias por iniciativa propia. El PDF original señala discrepancias internas —por ejemplo, clasificación de elementos NRBQ en p. 15 frente a nivel II en p. 32— que los apuntes ya advierten. No «corrijas» silenciosamente esas discrepancias al empaquetar.

## 3. Persistencia actual y compatibilidad

- `app.js` utiliza `localStorage`, clave `study-firefighting-t11-v1`.
- Campos principales: `read` (apartados vistos), `mastered` (índices de tarjetas), `wrong` (IDs de preguntas erradas), `history` (resultados de test).
- `progress.js` usa exportaciones `JSON` con `format: "fire-study-backup"`, `version: 1` y objeto `topics` indexado por claves de progreso por tema.
- `resume.js` usa `sessionStorage`, clave `study-firefighting-resume-v1`, para la sesión temporal y la ubicación de lectura.
- Los ejercicios extra también mantienen estado temporal de sesión.

**Requisito esencial:** conservar la estructura del progreso y compatibilidad con JSON exportados por la web. El WebView de la APK y el navegador **no comparten automáticamente `localStorage`**; para mover datos entre ellos deberá funcionar la exportación/importación.

Para la v1, si es preciso mantener `localStorage` a fin de evitar regresiones, es admisible siempre que se compruebe que los datos persisten después de cerrar y reabrir la app, y se garantice una copia JSON operativa en Android. Como mejora focalizada, valora usar `@capacitor/preferences` para progreso pequeño mediante un adaptador compatible con web, pero **no alteres sin pruebas el contrato síncrono actual de `app.js`**. No es momento de introducir SQLite, servidores o cuentas. Documenta claramente que desinstalar o borrar datos de la aplicación puede eliminar el progreso local.

### Exportar e importar en Android

**Hay que probarlo de verdad en el WebView Android.** En navegador se utiliza `Blob`, descarga por enlace y `<input type="file">`; algunos flujos de descarga no funcionan igual en WebView.

Si la descarga actual falla dentro de APK:
- Incorpora un adaptador para Android basado en APIs compatibles de Capacitor (p. ej. `Filesystem` + `Share`, o un selector de documentos/SAF adecuado).
- Ofrece la opción de **guardar o compartir** el JSON mediante el sistema Android y de **seleccionar/importar** el archivo desde almacenamiento del dispositivo.
- Conserva la exportación/importación web sin cambios regresivos, valida el formato antes de reemplazar datos y pide confirmación.
- Comprueba que exportar → desinstalar/reinstalar (si procede) → importar recupera progreso; el archivo debe estar guardado fuera del almacenamiento privado de la app.

## 4. Solución técnica propuesta: Capacitor

**Elegimos Capacitor, no Cordova**, y no queremos una reescritura a Angular/Ionic. Se empaqueta el proyecto web **tal y como está**.

Capacitor necesita, entre otros, `package.json`, `webDir` con `index.html` raíz y proyecto Android. Usa la **versión estable compatible con el entorno** y versiones coherentes de `@capacitor/core`, `@capacitor/cli`, `@capacitor/android` y plugins; verifica requisitos actuales de Node, Gradle, JDK y Android SDK, fija versiones y añade lockfile.

Documentación oficial:
- https://capacitorjs.com/docs/getting-started
- https://capacitorjs.com/docs/android
- https://capacitorjs.com/docs/apis/preferences
- https://developer.android.com/build/building-cmdline

### Estructura sugerida (ajústala si una solución más limpia mejora el proyecto)

```text
/
├── index.html                    # Portada web original
├── temas/11/index.html           # Tema 11 original
├── *.js y *.css                  # Archivos actuales
├── package.json
├── package-lock.json
├── capacitor.config.(ts|json)   # webDir = "www" (o carpeta de salida elegida)
├── scripts/build-web.*          # Copia solo archivos web requeridos a www/
├── www/                          # Salida generada, no fuente de verdad
├── android/                      # Proyecto nativo generado por Capacitor
├── docs/
│   ├── CODEX_ANDROID_APK.md     # Este briefing
│   └── ANDROID_BUILD.md         # Manual sencillo de compilación/instalación
└── .github/workflows/
    ├── deploy.yml               # GitHub Pages; conservar
    └── android-apk.yml          # Build reproducible y artefacto APK
```

**Muy importante:** la copia para Android debe conservar **la jerarquía y las rutas relativas**: la portada en raíz y `temas/11/index.html` con referencias `../../`. La aplicación no debe limitarse a mostrar remotamente la web de GitHub Pages (no usar simplemente `server.url` de producción), porque debe funcionar sin conexión.

En el script de empaquetado **no copies `node_modules/`, `.git/`, `android/`, `www/` o archivos con credenciales**. No uses la raíz del repositorio como `webDir` ni copies recursivamente el destino dentro de sí mismo.

**Identificador sugerido provisionalmente:** `com.studyfirefighting.app`. Antes de firmar una distribución definitiva, confirmar el nombre y mantener siempre estable el `applicationId` para que las nuevas versiones actualicen la instalación.

## 5. Trabajo solicitado a Codex (ejecútalo de principio a fin)

### Fase A — Clonar, auditar y proteger el funcionamiento existente

1. Clonar `https://github.com/Anafb5/study-firefighting.git` y trabajar sobre la rama de trabajo apropiada; si el entorno de Codex ya presenta el repositorio, **utiliza su checkout** en vez de crear otro.
2. Inspeccionar los archivos y reconstruir el funcionamiento actual. No asumir que README o este documento están perfectamente actualizados: contrastar con código.
3. Identificar dependencias, referencias relativas, almacenamiento, permisos y posibles problemas WebView.
4. Ejecutar pruebas web mínimas (si faltan, añadir smoke tests para navegación biblioteca → Tema 11, tarjetas, test, clasificación, importar/exportar).
5. Mantener la web actual sin cambiar innecesariamente el diseño.

### Fase B — Preparar Capacitor y el proyecto Android

1. Crear `package.json`, lockfile y scripts (`build:web`, `android:sync`, `android:apk:debug` o equivalentes).
2. Generar una carpeta `www/` reproducible con los recursos web necesarios **incluyendo todos los temas publicados** y conservando rutas.
3. Configurar Capacitor `webDir` y generar el proyecto `android/`.
4. Definir un nombre de app coherente, versión `1.0.0`, `versionCode` y un icono sencillo y propio (basado en la marca «Fuego & Estudio»; nada externo con copyright).
5. Ajustar ajustes de Android solo donde sean necesarios: status bar, safe areas, navegación y botón Atrás.
6. No pedir permisos innecesarios. No añadir anuncios, analítica, rastreo, SDKs comerciales ni credenciales.

### Fase C — Asegurar la experiencia offline y el progreso

1. Comprobar que la biblioteca abre el Tema 11 **con el móvil sin Wi-Fi ni datos**.
2. Validar que CSS, fuentes, recursos y JS son locales; no depender de CDN ni de fuentes remotas.
3. Verificar la navegación atrás, el menú lateral y que se conserva la lectura al recargar/reabrir.
4. Probar test, tarjetas y las cuatro modalidades de ejercicio en una pantalla móvil.
5. Verificar persistencia del progreso y **exportación/importación JSON en Android**; adaptar únicamente lo necesario.
6. Asegurar que al actualizar una APK por otra de la misma aplicación se mantienen los datos de estudio (salvo desinstalación/borrado). Versionar el `versionCode`.

### Fase D — Compilar y entregar APK

1. Compilar primero una **APK debug** instalable. El resultado esperado con Gradle es `android/app/build/outputs/apk/debug/app-debug.apk` (verifica la ruta real del proyecto).
2. **Ejecutar una instalación y prueba de arranque** en emulador o móvil si el entorno lo permite. Comprobar que no haya pantalla en blanco ni referencias rotas.
3. Añadir `.github/workflows/android-apk.yml` para que el repositorio pueda generar la APK desde GitHub Actions y descargarla en la sección de **Artifacts** de la ejecución.
4. Mantener separado el workflow `deploy.yml` de GitHub Pages. Actualmente despliega `path: .`: **corrígelo para que, con el nuevo proyecto Android, no publique accidentalmente `android/`, `node_modules/`, archivos de configuración secretos ni salidas de build**. Publica únicamente los archivos web necesarios y comprueba que se mantienen las URLs de Pages.
5. Si el entorno no puede ejecutar Android SDK/Gradle, deja CI bien configurado, dispara y verifica el build si tus permisos lo permiten, y proporciona el enlace al artefacto. Si no se ha generado, **no afirmes que la APK existe**.
6. Para distribución privada estable, documenta cómo crear una **clave de firma release**, guardarla en un lugar seguro y producir una APK release firmada. **No inventes contraseñas ni incluyas keystores, claves o passwords en Git**. Sin secretos de firma proporcionados por la propietaria, no simules una release firmada.
7. Facilita los pasos breves para instalar el APK en Android (permitir instalación desde esa fuente) y advertir que solo debe instalarse el artefacto del repositorio de confianza.

### Fase E — Documentación y entrega

Crear `docs/ANDROID_BUILD.md` explicando, como mínimo:
- requisitos y comandos comprobados para Windows y/o GitHub Actions;
- `npm ci` → build de web → sync de Capacitor → build de Android;
- ruta exacta de la APK generada y dónde descargar el artefacto CI;
- pasos de instalación en un Android real;
- cómo actualizar versión y conservar la identidad/firma;
- cómo exportar/importar el progreso;
- qué funciona offline y qué limitaciones permanecen.

En la respuesta final de Codex, especifica **qué cambió, pruebas ejecutadas, estado real de la APK, ruta o enlace al artefacto**, cómo instalarla y cualquier bloqueo pendiente.

## 6. Criterios de aceptación (definition of done)

Marca cada punto con evidencia al terminar:

- [ ] La web de biblioteca sigue funcionando en GitHub Pages.
- [ ] El Tema 11 sigue funcionando en la ruta `/temas/11/`.
- [ ] La APK abre en Android y muestra la biblioteca **sin pantalla en blanco**.
- [ ] Navegación biblioteca → Tema 11 → Temario → Tarjetas → Repaso → Test operativa.
- [ ] El modo offline funciona: datos/CSS/JS/preguntas sin conexión.
- [ ] Se muestran los 19 apartados, 63 tarjetas, 89 preguntas y los ejercicios existentes.
- [ ] Progreso guardado después de cerrar y reabrir; resultados de test y tarjetas accesibles.
- [ ] Exportar JSON e importarlo en Android funciona realmente (o se documenta el bloqueo sin afirmar lo contrario).
- [ ] El móvil respeta barras del sistema, botones táctiles, scroll y navegación Atrás.
- [ ] La compilación es reproducible localmente o en GitHub Actions, con APK descargable.
- [ ] El workflow de Pages no publica carpetas nativas ni archivos ajenos a la web.
- [ ] El código no contiene claves de firma privadas ni secretos.
- [ ] Existe documentación de compilación, instalación, actualización y copias de seguridad.

**Si algún criterio no se cumple, identifícalo explícitamente antes de cerrar la tarea.**

## 7. Fuera de alcance por ahora

- Crear nuevos temas o añadir temarios académicos no aportados.
- Hacer login, nube, base de datos remota, sincronización en tiempo real o panel de administración.
- Publicar la app en Google Play.
- Implementar notificaciones, estadísticas online, monetización, IA o grandes refactorizaciones.
- Convertir toda la aplicación a Angular/Ionic/React.
- Cambiar las respuestas del banco de examen sin contrastarlas con su fuente.
- Sustituir la web por un WebView de GitHub Pages que requiera Internet.

## 8. Prioridad y forma de trabajo

**Orden estricto:** (1) APK que arranque offline → (2) funcionalidades existentes intactas → (3) persistencia y backups operativos → (4) pipeline CI → (5) documentación y distribución privada.

Realiza los cambios directamente en el repositorio de trabajo; si los permisos lo permiten, abre PR o publica una rama, no sustituyas trabajo ajeno sin revisarlo. No te detengas en recomendaciones si puedes implementar y comprobar el resultado. Evita preguntas de preferencias estéticas que no bloqueen el resultado; elige defaults sobrios y documenta las decisiones. Cuando falten elementos que sí dependen del usuario, como la contraseña/keystore de firma release, prepara todo lo posible y **solicita únicamente ese requisito**.

---

**Fuentes técnicas oficiales (verificar versión vigente al implementar):**
- Capacitor — instalación en proyecto existente: https://capacitorjs.com/docs/getting-started
- Capacitor — Android: https://capacitorjs.com/docs/android
- Android Developers — compilar APK: https://developer.android.com/build/building-cmdline
- Android Developers — firma y distribución: https://developer.android.com/build/build-for-release
- GitHub Actions — artefactos: https://docs.github.com/en/actions/concepts/workflows-and-actions/workflow-artifacts
