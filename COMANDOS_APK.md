# Comandos para generar la APK

Ejecutar estos comandos desde la raíz del repositorio:

```text
C:\Users\Ana\Documents\www\study-firefighting
```

## 1. Requisitos

- Node.js 22 o posterior.
- Android Studio con Android SDK API 36.
- JDK 21. Puede utilizarse el incluido en Android Studio.

## 2. Primera instalación

En PowerShell:

```powershell
npm ci
```

## 3. Ejecutar pruebas

```powershell
npm test
```

Este comando también reconstruye la carpeta web `www/`.

## 4. Sincronizar la web con Android

```powershell
npm run android:sync
```

## 5. Generar una APK debug

```powershell
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
cd android
.\gradlew.bat clean assembleDebug
cd ..
```

La APK se genera en:

```text
android\app\build\outputs\apk\debug\app-debug.apk
```

## 6. Copiarla a la raíz con un nombre reconocible

Actualizar el nombre cuando cambie la versión:

```powershell
Copy-Item -LiteralPath "android\app\build\outputs\apk\debug\app-debug.apk" -Destination "Study-Firefighting-1.0.1-v2-debug.apk" -Force
```

## 7. Todo seguido

```powershell
npm ci
npm test
npm run android:sync
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
cd android
.\gradlew.bat clean assembleDebug
cd ..
Copy-Item -LiteralPath "android\app\build\outputs\apk\debug\app-debug.apk" -Destination "Study-Firefighting-1.0.1-v2-debug.apk" -Force
```

## 8. Instalar por USB (opcional)

Con la depuración USB activada y el teléfono autorizado:

```powershell
& "$env:ANDROID_HOME\platform-tools\adb.exe" devices
& "$env:ANDROID_HOME\platform-tools\adb.exe" install -r "android\app\build\outputs\apk\debug\app-debug.apk"
```

`-r` actualiza una instalación compatible conservando sus datos. Las APK deben usar el mismo `applicationId` y la misma clave de firma.

## 9. Antes de generar una nueva versión

Incrementar en `android/app/build.gradle`:

```gradle
versionCode 3
versionName "1.0.2"
```

No reutilizar un `versionCode` anterior. Mantener siempre este identificador:

```gradle
applicationId "com.studyfirefighting.app"
```

Las APK generadas localmente en el mismo equipo utilizan normalmente la misma clave debug y pueden actualizarse entre sí. Las APK de GitHub Actions necesitan una clave estable configurada como secreto para garantizar actualizaciones entre ejecuciones.
