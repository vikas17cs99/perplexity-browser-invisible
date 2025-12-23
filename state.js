class AppState {
  constructor() {
    this.showWindow = true;
    this.windowOpacity = 0.85;
    this.zoomLevel = 1.0;
    this.mainWindow = null;
  }

  setMainWindow(window) {
    this.mainWindow = window;
  }

  setShowWindow(show) {
    this.showWindow = show;
  }

  adjustOpacity(delta) {
    this.windowOpacity = Math.max(0.2, Math.min(1.0, this.windowOpacity + delta));
    return this.windowOpacity;
  }

  adjustZoom(delta) {
    if (delta === 0) this.zoomLevel = 1.0;
    else this.zoomLevel = Math.max(0.5, Math.min(3.0, this.zoomLevel + delta));
    return this.zoomLevel;
  }
}

module.exports = new AppState();
