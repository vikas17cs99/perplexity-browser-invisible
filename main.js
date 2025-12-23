const { app, BrowserWindow } = require('electron');
const path = require('path');
const appState = require('./state');
const { registerShortcuts, unregisterShortcuts } = require('./shortcuts');

function createWindow() {
  //appState.setStage(0);

  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    contentProtection: true,
    type: 'toolbar',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webviewTag: true,
      partition: 'persist:perplexity-session'
    }
  });

  appState.setMainWindow(mainWindow);

  mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));

  mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  mainWindow.setAlwaysOnTop(true, 'screen-saver', 1);
  mainWindow.setOpacity(appState.windowOpacity);

  registerShortcuts();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  unregisterShortcuts();
  if (process.platform !== 'darwin') app.quit();
});
