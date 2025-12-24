const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('oa', {
  switchProvider: (provider) => {
    ipcRenderer.send('switch-provider', provider);
  }
});
