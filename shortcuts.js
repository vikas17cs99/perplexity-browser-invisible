const { app, globalShortcut } = require('electron');
const {
  handleToggleVisibility,
  handleMoveWindow,
  handleResizeWindow,
  handleAdjustOpacity,
  handleAdjustZoom
} = require('./actions');

function registerShortcuts() {
  globalShortcut.register('Alt+B', handleToggleVisibility);
  globalShortcut.register('Alt+Q', () => app.quit());

  // Movement
  globalShortcut.register('Alt+Up', () => handleMoveWindow('up'));
  globalShortcut.register('Alt+Down', () => handleMoveWindow('down'));
  globalShortcut.register('Alt+Left', () => handleMoveWindow('left'));
  globalShortcut.register('Alt+Right', () => handleMoveWindow('right'));

  // Opacity
  globalShortcut.register('Alt+[', () => handleAdjustOpacity(-0.1));
  globalShortcut.register('Alt+]', () => handleAdjustOpacity(0.1));

  // Zoom (Content)
  globalShortcut.register('Alt+-', () => handleAdjustZoom(-0.1));
  globalShortcut.register('Alt+0', () => handleAdjustZoom(0));
  globalShortcut.register('Alt+=', () => handleAdjustZoom(0.1));

  // NEW: Window Size (Overall)
  // Alt + . (Increase Size)
  globalShortcut.register('Alt+.', () => handleResizeWindow('increase'));
  // Alt + , (Decrease Size)
  globalShortcut.register('Alt+,', () => handleResizeWindow('decrease'));
}

function unregisterShortcuts() {
  globalShortcut.unregisterAll();
}

module.exports = { registerShortcuts, unregisterShortcuts };
