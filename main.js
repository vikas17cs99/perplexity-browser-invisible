const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const appState = require('./state');
const { registerShortcuts, unregisterShortcuts } = require('./shortcuts');
const { askProvider } = require('./cli');
const providers = require('./providers');

let mainWindow = null;

async function createWindow(providerKey) {
  const provider = providers[providerKey];

  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      sandbox: true,
      contextIsolation: true,
      webviewTag: true,
      partition: provider.partition,
      preload: path.join(__dirname, 'preload.js'),
      autoplayPolicy: 'no-user-gesture-required'
    }
  });

  appState.setMainWindow(mainWindow);

  mainWindow.loadFile(
    path.join(__dirname, 'public', 'index.html'),
    {
      query: {
        url: provider.url,
        partition: provider.partition,
        provider: providerKey
      }
    }
  );

  mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  mainWindow.setAlwaysOnTop(true, 'screen-saver', 1);
  mainWindow.setOpacity(appState.windowOpacity);

  registerShortcuts();
}

// 🔁 Switch provider from UI
ipcMain.on('switch-provider', async (_, providerKey) => {
  if (!providers[providerKey]) return;

  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.destroy();
  }

  await createWindow(providerKey);
});

app.whenReady().then(async () => {
  const provider = await askProvider();
  await createWindow(provider);
});

app.on('window-all-closed', () => {
  unregisterShortcuts();
  if (process.platform !== 'darwin') app.quit();
});
