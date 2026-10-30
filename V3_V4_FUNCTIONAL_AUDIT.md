# V3 to V4 Functional Preservation Audit

## Source baseline
- Baseline: original uploaded `workout-app-v3-project_claude_3.4(2).zip`.
- Candidate: `Workout_App_V4` source after the current correction pass.
- This is a source-level comparison, not a claim of Android runtime verification.

## Structural comparison
| Check | V3 | V4 | Result |
|---|---:|---:|---|
| HTML element IDs | 109 | 113 | PASS |
| Named JavaScript functions | 184 | 192 | PASS |
| HTML buttons | 108 | 111 | Additional controls added |
| addEventListener registrations | 12 | 13 | Additional handlers added |

### Removed V3 IDs
None detected.

### Removed V3 named functions
None detected.

## Tabs retained
Today, Calendar, Plan, Yoga, Cardio, Workout Library, Progress, Health Tracker and More.

## Corrections in this build
- App version label corrected to Version 4.
- Dark theme is now the default: near-black background, charcoal cards, high-contrast text and controls. An explicit light-theme CSS override remains available for a future theme selector.
- Pre-workout and Post-workout item groups are expanded by default on Today.
- Excel import now recognises `Date` and `Workout Section` (Pre-workout, Main workout, Post-workout), shows the section in the preview and preserves section type on imported exercise entries.
- Bundled upload workbook replaced with the PDF-derived 56-day, 1,112-row workbook.
- Existing V3 source screens/functions are retained in the V4 HTML; no V3 function names or IDs were removed in this comparison.

## Important verification limits
The source comparison cannot prove that every control works on an Android device. The following still require GitHub Actions / device testing:
- Native folder picker and media-folder access on Android.
- Capacitor plugin registration and Android permissions.
- Health Connect, Google Fit and Fastrack connectivity and permissions.
- V3 private local-storage migration. Android apps with separate application IDs cannot directly read one another's private storage; use V3 export/backup and V4 import where supported.
- Actual workout playback, timer transitions, data persistence, file picker and share-sheet behaviour on the target device.

## Release gate
Run `node scripts/validate-source.js`, build with GitHub Actions, install the APK alongside V3, then execute the V3 acceptance checklist before treating this as a production release.
