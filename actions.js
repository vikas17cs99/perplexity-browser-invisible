const appState = require('./state');
const { screen } = require('electron');

// Configuration
const RESIZE_STEP = 50;

function handleToggleVisibility() {
  const win = appState.mainWindow;
  if (!win) return;

  if (win.isVisible()) {
    win.hide();
    appState.setShowWindow(false);
  } else {
    win.show();
    appState.setShowWindow(true);
  }
}

function handleMoveWindow(direction) {
  const bounds = appState.mainWindow.getBounds();
  const step = 50;

  const map = {
    up: { x: bounds.x, y: bounds.y - step },
    down: { x: bounds.x, y: bounds.y + step },
    left: { x: bounds.x - step, y: bounds.y },
    right: { x: bounds.x + step, y: bounds.y }
  };

  appState.mainWindow.setBounds(map[direction]);
}

function handleResizeWindow(direction) {
  const win = appState.mainWindow;
  if (!win) return;

  const { width, height } = win.getBounds();
  const change = direction === 'increase' ? RESIZE_STEP : -RESIZE_STEP;

  const newWidth = Math.max(400, width + change); // Minimum width 400
  const newHeight = Math.max(300, height + change); // Minimum height 300

  win.setSize(newWidth, newHeight);
}

function handleAdjustOpacity(delta) {
  const win = appState.mainWindow;
  if (!win) return;
  const newOpacity = appState.adjustOpacity(delta);
  win.setOpacity(newOpacity);
}

function handleAdjustZoom(delta) {
  const win = appState.mainWindow;
  if (!win) return;
  const newZoom = appState.adjustZoom(delta);
  win.webContents.setZoomLevel(Math.log10(newZoom) / Math.log10(1.2));
}

module.exports = {
  handleToggleVisibility,
  handleMoveWindow,
  handleResizeWindow,
  handleAdjustOpacity,
  handleAdjustZoom
};
