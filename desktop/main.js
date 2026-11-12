const { app, BrowserWindow, shell } = require('electron');

const LIVE_SPACE_URL =
  'https://muse.ai/s/muse-ai-dating-pp6emaxzl3x0l/CMdkNgelgREhwP9gD0EJmuD-Bb2njY3t9mME77Pu13E';

const HIDE_MUSE_PLATFORM_HEADER = `
  body > div > header {
    display: none !important;
  }
`;

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 860,
    minWidth: 900,
    minHeight: 650,
    title: 'Muse AI Dating',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  win.loadURL(LIVE_SPACE_URL);

  win.webContents.on('did-finish-load', () => {
    win.webContents.insertCSS(HIDE_MUSE_PLATFORM_HEADER);
  });

  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
