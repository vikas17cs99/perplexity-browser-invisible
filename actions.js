const appState = require('./state');
const { screen } = require('electron');

// Configuration
const MOVE_STEP = 50;
const RESIZE_STEP = 100;

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
  const win = appState.mainWindow;
  if (!win) return;

  const bounds = win.getBounds();
  let { x, y } = bounds;

  // We calculate the NEW position regardless of current boundaries.
  // This prevents getting "stuck" at 0.
  switch (direction) {
    case 'up':
      y -= MOVE_STEP;
      break;
    case 'down':
      y += MOVE_STEP;
      break;
    case 'left':
      x -= MOVE_STEP;
      break;
    case 'right':
      x += MOVE_STEP;
      break;
  }

  // Optional: Prevent losing the window entirely, but allow it to touch edges
  // If you want it strictly on screen, use screen.getDisplayNearestPoint
  // For now, raw coordinates solve your "stuck" issue best.
  win.setPosition(x, y);
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
