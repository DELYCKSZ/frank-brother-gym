# Frank & Brother Gym

A mobile-first Progressive Web App for logging a four-day bodybuilding programme.

## Features
- Four workout days with sets, rep ranges, RIR and rest targets
- Weight, reps and RIR logging for each working set
- Previous-performance display for progressive overload
- Workout history stored locally on the device
- JSON backup export
- Installable PWA manifest and offline service worker

## Deployment
This is a static app and can be hosted with GitHub Pages or another static host. Once served over HTTPS, it can be installed to an Android home screen as a standalone web app.

## Data
Workout history currently uses browser localStorage. Export backups regularly. A later version can add authenticated cloud sync if cross-device persistence is wanted.
