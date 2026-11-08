# Android: compilación, instalación y copias de seguridad

La aplicación Android empaqueta la web completa en el APK con Capacitor. No carga GitHub Pages ni necesita conexión para estudiar el Tema 11.

## Requisitos

- Node.js 22 o posterior.
- JDK 21. En Windows puede usarse el JDK incluido en Android Studio (`C:\Program Files\Android\Android Studio\jbr`).
- Android SDK con la plataforma API 36.
- Identidad estable: `com.studyfirefighting.app`, versión `1.0.1`, `versionCode 2`.

## Compilar en Windows

```powershell
npm ci
npm test
npm run build:web
npm run android:sync
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
cd android
.\gradlew.bat assembleDebug
```

El APK debug firmado se crea en `android/app/build/outputs/apk/debug/app-debug.apk`. El atajo `npm run android:apk:debug` ejecuta el empaquetado, la sincronización y Gradle cuando `JAVA_HOME` ya apunta a JDK 21.

## Descargar desde GitHub Actions

1. Abrir la pestaña **Actions** del repositorio y elegir **Compilar APK Android**.
2. Abrir una ejecución correcta de `main`, de un pull request, o iniciarla con **Run workflow**.
3. En **Artifacts**, descargar `fuego-estudio-debug-apk` y descomprimirlo.

El workflow ejecuta `npm ci`, las pruebas, el build web, `cap sync` y `assembleDebug`. El artefacto se conserva 30 días.

## Instalar y probar en un teléfono

1. Transferir `app-debug.apk` al teléfono desde este repositorio de confianza.
2. Abrirlo y permitir temporalmente **Instalar aplicaciones desconocidas** para la aplicación usada (Archivos, navegador, etc.).
3. Instalar, abrir **Fuego & Estudio**, entrar en Tema 11 y activar modo avión para comprobar el uso offline.
4. Desactivar de nuevo el permiso de instalación desconocida si no se necesita.

También se puede instalar con depuración USB: `adb install -r android/app/build/outputs/apk/debug/app-debug.apk`. `-r` actualiza una instalación compatible conservando sus datos.

## Progreso y copias JSON

El progreso continúa en `localStorage` con la clave `study-firefighting-t11-v1`. Cerrar o actualizar la app con el mismo `applicationId` y la misma firma no lo borra. Desinstalar o borrar los datos de la app sí puede eliminarlo.

- **Exportar progreso** abre la hoja de compartir de Android. Elegir Archivos, Drive u otra ubicación externa a la app.
- **Importar progreso** abre el selector de documentos. Tras validar `format: "fire-study-backup"` y `version: 1`, pide confirmación antes de reemplazar los temas incluidos.
- La web mantiene la descarga y selección de archivo habituales; los JSON de la web y de Android son compatibles.

Antes de desinstalar, guardar siempre una copia fuera del almacenamiento privado de la app.

## Actualizaciones y firma release

Para una actualización instalable sobre la anterior deben conservarse `applicationId` y clave de firma, e incrementarse `versionCode` en `android/app/build.gradle`; `versionName` es la versión visible.

La entrega actual es debug y usa la firma debug de cada entorno. Para distribución privada estable:

1. Crear una clave con `keytool -genkeypair` y guardarla fuera del repositorio con copia segura.
2. Configurar Gradle mediante variables o secretos de GitHub (`KEYSTORE`, alias y contraseñas), nunca en archivos versionados.
3. Añadir la configuración `signingConfig` release y ejecutar `gradlew assembleRelease`.
4. Conservar siempre esa clave: Android no admite actualizar una app firmada con otra clave.

No se incluye ningún keystore ni contraseña en Git.

## Web y límites verificados

`npm run build:web` copia una lista explícita de 16 archivos a `www/`. La misma salida se publica en GitHub Pages, por lo que no se exponen `android/`, dependencias, builds ni configuraciones. Biblioteca, Tema 11, estilos, datos, preguntas y scripts están incluidos localmente.

La compilación debug y las pruebas automatizadas están verificadas. La instalación, persistencia tras cierre y hoja de compartir deben validarse además en un teléfono o emulador Android real; el entorno de desarrollo usado no tenía ninguno conectado.
