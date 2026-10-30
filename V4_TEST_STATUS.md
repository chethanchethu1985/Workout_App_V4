# V4 source validation and release status

## Completed in this source package
- V4 application ID and app name configured separately from V3.
- First-launch seed for the eight-week programme, Monday 2 November 2026 through Sunday 27 December 2026.
- 8 weeks x 7 days represented in the app's plan data; Monday-Saturday exercise lists sourced from the PDF's weekly exercise tracking sheets; Sunday recovery entries included.
- Original two-sheet Excel template retained with a Date column added and app-compatible category choices.
- Populated 8-week workbook included as an optional reference/upload file.
- Excel template and programme JSON bundled under `www/assets/` and therefore included in the Android web assets.
- V4 local-storage namespace separated from V3 for workout data and health tracker data.
- GitHub Actions workflow and Android source overrides included.
- JavaScript syntax check passed with Node.js.
- Excel workbooks opened and checked with openpyxl; expected sheets and columns confirmed.

## Requires GitHub/device validation
- Android Gradle compilation and APK artifact creation (not run in this workspace; Android SDK/Gradle are unavailable here).
- Installation and runtime testing on Android.
- Folder permission and media scanning behavior across Android versions and external storage providers.
- V3 backup import with a real V3 backup file, including any encrypted health vault.
- Google Fit, Health Connect and Fastrack provider authorization and live metric retrieval.
- Workout timers, media playback, background behavior, and all UI paths on physical devices.

Do not treat this package as a device-tested release until the GitHub workflow passes and the APK is installed and tested.
