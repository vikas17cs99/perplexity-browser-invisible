# OA Coder (AI Overlay Edition)

OA Coder is a lightweight **Electron desktop overlay** that embeds popular AI assistants — **ChatGPT, Gemini, and Perplexity** — inside a transparent, always-on-top window.

It behaves like a native desktop app with **persistent login**, **global keyboard shortcuts**, and **fine-grained window control**, making it ideal as a floating research or coding companion.

---

## ✨ Features

* **Multi-AI Support**

  * ChatGPT
  * Gemini
  * Perplexity
* **CLI Provider Selection** at startup
* **Persistent Login**

  * Login once per provider
  * Sessions persist across restarts
* **Always-on-Top Overlay**
* **Transparent, Frameless Window**
* **Keyboard-Driven Controls**
* **Zoom & Opacity Controls**
* **Per-Provider Session Isolation**
* **Cross-Platform**

  * macOS
  * Windows
  * Linux

---

## 🧠 What This App Is (and Is Not)

### ✅ This app **is**

* A desktop wrapper for ChatGPT, Gemini, and Perplexity
* A floating AI assistant overlay
* A productivity and research companion
* A keyboard-first tool

### ❌ This app **is NOT**

* An OpenAI / Gemini API client
* A screenshot-based solver
* A browser replacement
* A scraping or automation tool

---

## 📦 Prerequisites

* [Node.js](https://nodejs.org/) (v14 or later recommended)
* npm or yarn

> ⚠️ No API keys are required.

---

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone <repo-url>
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

## 🧭 Provider Selection (CLI)

On startup, you’ll be prompted to choose an AI provider:

```text
Choose AI Provider:
1) ChatGPT
2) Gemini
3) Perplexity

Enter choice (1/2/3):
```

The selected provider opens inside the overlay window.

---

## 🔐 Login & Session Persistence

Each provider uses its **own persistent Electron session partition**, for example:

```
persist:chatgpt
persist:gemini
persist:perplexity
```

This ensures:

* Login persists across restarts
* Cookies and localStorage are saved
* Providers do NOT log each other out
* Sessions remain fully isolated

Login once per provider — you stay logged in.

---

## 🎹 Global Keyboard Shortcuts

### Window Visibility

* **Alt + B** → Toggle window visibility
* **Alt + Q** → Quit application

### Window Movement

* **Alt + ↑** → Move up
* **Alt + ↓** → Move down
* **Alt + ←** → Move left
* **Alt + →** → Move right

### Opacity Control

* **Alt + [** → Decrease opacity
* **Alt + ]** → Increase opacity

### Zoom Control

* **Alt + -** → Zoom out
* **Alt + 0** → Reset zoom
* **Alt + =** → Zoom in

---

## 🎤 Microphone & Audio Support

The app supports **voice input and audio output** (where supported by the provider).

### macOS Users (Important)

You must allow microphone access:

1. System Settings → Privacy & Security → **Microphone**
2. Enable permission for:

   * The app name **or**
   * `Electron`
3. Restart the app

---

## 🔒 Security Notes

* `nodeIntegration` is disabled
* `contextIsolation` is enabled
* Providers run inside an isolated WebView
* No credentials are intercepted or stored manually
* All authentication is handled directly by the provider websites

---

## 🧪 Known Limitations

* Voice features depend on provider availability
* Some Electron warnings may appear in development mode
* This is not a full browser replacement

---

## 🛠 Tech Stack

* Electron
* Node.js
* Chromium WebView

---

