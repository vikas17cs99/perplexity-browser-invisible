const appState = require('./state');

function handleToggleVisibility() {
  if (appState.showWindow) {
    appState.mainWindow.hide();
    appState.setShowWindow(false);
  } else {
    appState.mainWindow.show();
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

function handleAdjustOpacity(delta) {
  const opacity = appState.adjustOpacity(delta);
  appState.mainWindow.setOpacity(opacity);
}

function handleAdjustZoom(delta) {
  const zoom = appState.adjustZoom(delta);
  appState.mainWindow.webContents.setZoomFactor(zoom);
}

module.exports = {
  handleToggleVisibility,
  handleMoveWindow,
  handleAdjustOpacity,
  handleAdjustZoom
};
