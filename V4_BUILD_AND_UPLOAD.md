# My Workouts V4 - Build and upload

## Repository root

The repository must contain `www/index.html`, `package.json`, `capacitor.config.json`, `android-overrides/`, `patch_manifest.py`, and `.github/workflows/build-apk.yml` directly at its root.

## GitHub Actions

The workflow installs Node and Java, installs Capacitor dependencies, places the XLSX browser library in `www/`, creates the Android project, adds the V4 native activity and folder plugin, patches Android permissions, syncs Capacitor, and runs `./gradlew assembleDebug`.

Artifact name: `My-Workouts-V4-APK`

APK path inside the build job: `android/app/build/outputs/apk/debug/app-debug.apk`

## Local build (optional)

```bash
npm install
cp node_modules/xlsx/dist/xlsx.full.min.js www/xlsx.full.min.js
npx cap add android
# Copy android-overrides/*.java into android/app/src/main/java/com/myworkout/v4/
# Replace APP_PACKAGE in the copied Java files with com.myworkout.v4
python3 patch_manifest.py
npx cap sync android
cd android
./gradlew assembleDebug
```

Use JDK 17 and an Android SDK installation. The workflow is the supported reproducible route.
