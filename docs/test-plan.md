# Test plan

## 1. Open the live space

Open the live space directly in a browser:

https://muse.ai/s/muse-ai-dating-pp6emaxzl3x0l/CMdkNgelgREhwP9gD0EJmuD-Bb2njY3t9mME77Pu13E

Run the brief → screening → demo profiles → fit score → date plan flow.

## 2. Test Android

1. Build the debug APK from GitHub Actions.
2. Install it on an Android device or emulator.
3. Confirm the same space loads inside the WebView.
4. Confirm JavaScript, sign-in state, and page navigation work.
5. Use the Android back button to navigate inside the WebView.
6. Confirm the Muse platform title/login bar is hidden while the dating page content remains visible.

## 3. Test desktop

```bash
cd desktop
npm install
npm start
```

Confirm the Electron window loads the same live URL.
Confirm the Muse platform title/login bar is hidden.

## 4. Verify live edits are not baked in

1. Change the HTML/content in the Muse space.
2. Reload the browser page.
3. Force-stop and reopen the Android app, or reload its WebView.
4. Restart the Electron app.
5. Confirm the content change appears without rebuilding either wrapper.

If an old page remains, clear WebView/browser cache or restart the app before treating it as a failure.
