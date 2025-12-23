const { app, globalShortcut } = require('electron');
const {
  handleToggleVisibility,
  handleMoveWindow,
  handleAdjustOpacity,
  handleAdjustZoom
} = require('./actions');

function registerShortcuts() {
  globalShortcut.register('Alt+B', handleToggleVisibility);
  globalShortcut.register('Alt+Q', () => app.quit());

  globalShortcut.register('Alt+Up', () => handleMoveWindow('up'));
  globalShortcut.register('Alt+Down', () => handleMoveWindow('down'));
  globalShortcut.register('Alt+Left', () => handleMoveWindow('left'));
  globalShortcut.register('Alt+Right', () => handleMoveWindow('right'));

  globalShortcut.register('Alt+[', () => handleAdjustOpacity(-0.1));
  globalShortcut.register('Alt+]', () => handleAdjustOpacity(0.1));

  globalShortcut.register('Alt+-', () => handleAdjustZoom(-0.1));
  globalShortcut.register('Alt+0', () => handleAdjustZoom(0));
  globalShortcut.register('Alt+=', () => handleAdjustZoom(0.1));
}

function unregisterShortcuts() {
  globalShortcut.unregisterAll();
}

module.exports = { registerShortcuts, unregisterShortcuts };
