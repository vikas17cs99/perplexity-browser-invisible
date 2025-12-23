# OA Coder (Perplexity Overlay Edition)

OA Coder is a lightweight **Electron desktop overlay** that embeds **Perplexity.ai** inside a transparent, always-on-top window.
It behaves like a native Perplexity desktop app with **persistent login**, global keyboard shortcuts, and fine-grained window control.

This version **removes all screenshot capture and AI processing logic** and focuses purely on providing a fast, distraction-free Perplexity experience.

---

## Features

* **Perplexity Embedded:** Access Perplexity.ai directly inside the app.
* **Persistent Login:** Login once — sessions, cookies, and localStorage persist across restarts.
* **Always-on-Top Overlay:** Stay productive while browsing or coding.
* **Transparent Window:** Minimal UI that blends with your workflow.
* **Window Management:** Move, hide/show, resize, and control opacity.
* **Zoom Controls:** Adjust zoom level on the fly.
* **Global Shortcuts:** Control everything using Alt-based keyboard shortcuts.
* **Cross-Platform:** Works on macOS, Windows, and Linux.

---

## What This App Is (and Is Not)

### ✅ This app **is**

* A Perplexity desktop wrapper
* A floating research / coding companion
* A keyboard-driven productivity overlay

### ❌ This app **is NOT**

* A screenshot-based solver
* An OpenAI API client
* A background automation or scraping tool
* A browser replacement

---

## Prerequisites

* [Node.js](https://nodejs.org/) (v14 or later recommended)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

> ⚠️ No OpenAI API key is required.

---

## Installation

1. **Clone the repository**

   ```bash
   git clone <url-of-this-repo>
   cd inv-browser
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the application**

   ```bash
   npm start
   ```

---

## Usage

### First Launch

* The app opens Perplexity.ai inside the Electron window.
* Login normally using your Perplexity account.
* Close the app.
* On next launch, **you will remain logged in**.

---

## Global Keyboard Shortcuts

### Window Visibility

* **Alt+B** → Toggle window visibility (show / hide)
* **Alt+Q** → Quit the application

### Window Movement

* **Alt+↑** → Move window up
* **Alt+↓** → Move window down
* **Alt+←** → Move window left
* **Alt+→** → Move window right

### Opacity Control

* **Alt+[** → Decrease window opacity
* **Alt+]** → Increase window opacity

### Zoom Control

* **Alt+-** → Zoom out
* **Alt+0** → Reset zoom to default
* **Alt+=** → Zoom in

---

## How Login Persistence Works

The app uses Electron’s **persistent session partition**:

```
persist:perplexity-session
```

This means:

* Cookies are stored on disk
* LocalStorage is preserved
* No re-login on restart
* Works similarly to Chrome profiles

---

## Security Notes

* `nodeIntegration` is disabled
* `contextIsolation` is enabled
* Perplexity runs inside an isolated WebView
* No credentials are intercepted or stored manually

