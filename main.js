const { app, BrowserWindow } = require('electron');
const path = require('path');
const appState = require('./state');
const { registerShortcuts, unregisterShortcuts } = require('./shortcuts');
const { askProvider } = require('./cli');
const providers = require('./providers');

let selectedProvider = 'perplexity';

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
      partition: provider.partition
    }
  });


  appState.setMainWindow(mainWindow);

  mainWindow.loadFile(
    path.join(__dirname, 'public', 'index.html'),
    {
      query: {
        url: provider.url,
        partition: provider.partition
      }
    }
  );

  mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  mainWindow.setAlwaysOnTop(true, 'screen-saver', 1);
  mainWindow.setOpacity(appState.windowOpacity);

  registerShortcuts();
}

app.whenReady().then(async () => {
  const provider = await askProvider();
  await createWindow(provider);
});

app.on('window-all-closed', () => {
  unregisterShortcuts();
  if (process.platform !== 'darwin') app.quit();
});
