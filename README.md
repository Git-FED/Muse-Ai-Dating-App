# Muse AI Dating

A thin app wrapper around the live Muse AI Dating space:

**Live space:** https://muse.ai/s/muse-ai-dating-pp6emaxzl3x0l/CMdkNgelgREhwP9gD0EJmuD-Bb2njY3t9mME77Pu13E

This repository does not copy or bundle the space HTML. The Android and Electron apps load the live URL at runtime so edits made in the space appear after a reload or restart.

## What is included

- `app/`: Android WebView app.
- `desktop/`: Electron desktop wrapper.
- `.github/workflows/build-apk.yml`: GitHub Actions workflow that builds a debug APK on every push.
- `docs/test-plan.md`: manual test plan for the live-space behavior.

## Android app

Open the repository in Android Studio, or build in GitHub Actions. The app uses a single full-screen WebView with JavaScript, DOM storage, and WebView debugging enabled for debug builds.

The live URL is kept in `app/src/main/java/com/fedos/museaidating/SpaceConfig.kt`. Change it there if the space URL changes.

The wrapper hides the Muse-hosted platform header locally using CSS. This removes the white title/login bar inside the app, but it does not modify the hosted Muse HTML. Opening the URL directly in a browser will still show Muse's header.

## Desktop app

```bash
cd desktop
npm install
npm start
```

To package locally, install Electron Forge or use the Electron CLI for your platform. The desktop window also loads the live URL on every launch.

## GitHub Actions

Push this folder to a GitHub repository, then open **Actions → Build Android APK**. The workflow uploads `app-debug.apk` as an artifact.

## Prototype honesty

This is a prototype wrapper around a live space, not a native dating backend. It does not implement identity verification, payments, real matchmaking, moderation, or data storage. Do not treat demo profiles or fit scores as real people or real recommendations. Before any public launch, add consent, privacy, safety, age-gating, abuse reporting, secure authentication, and a real backend.
