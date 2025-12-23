# OA Coder

OA Coder is an Electron application that captures screenshots and leverages the OpenAI API to analyze them. It can solve questions, generate code, or provide detailed answers based on screenshots. The app supports both single screenshot processing and multi-page mode for capturing multiple images before analysis.

## Features

- **Screenshot Capture:** Use global keyboard shortcuts to capture the screen.
- **OpenAI Integration:** Send captured screenshots to OpenAI's chat API for automated analysis.
- **Multi-Screenshot Support:** Capture multiple screenshots before processing.
- **Customizable UI:** Transparent, always-on-top window with adjustable opacity and zoom.
- **Window Management:** Move window and toggle visibility with keyboard shortcuts.
- **Global Shortcuts:** Easily control the application using Alt-based keyboard shortcuts.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- An OpenAI API key

## Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/archangel0x01/oa-coder.git
   cd oa-coder
   ```
2. **Install the dependencies:**
   ```
   npm install
   ```
3. **Configure the application:**
   Create a config.json file in the project root with your OpenAI API key and (optionally) your desired model. For example:
    ```
    {
      "apiKey": "YOUR_OPENAI_API_KEY",
      "model": "gpt-4o-mini"
    }
    ```
  - Note: If the model field is omitted, the application defaults to "gpt-4o-mini".


## Usage

1. **Start the Application:**
    Run the following command to launch OA Coder:
    ```
    npm start
    ```
2. **Global Keyboard Shortcuts:**

   **Screenshot & Processing:**
   - **Alt+H:** Take a screenshot and add it to the queue
   - **Alt+L:** Delete the last screenshot from the queue
   - **Alt+Enter:** Process all captured screenshots with AI
   - **Alt+R:** Start a new problem (reset and clear all screenshots)

   **Window Controls:**
   - **Alt+B:** Toggle window visibility (show/hide)
   - **Alt+Q:** Quit the application
   - **Alt+Arrow Keys:** Move the window (Up/Down/Left/Right)
   - **Alt+[:** Decrease window opacity
   - **Alt+]:** Increase window opacity
   - **Alt+-:** Zoom out
   - **Alt+0:** Reset zoom to default
   - **Alt+=:** Zoom in

   **Language Selection:**
   - **Alt+1:** TypeScript (default)
   - **Alt+2:** Golang
   - **Alt+3:** C++
   - **Alt+4:** Python


## Status

This program is still under development. Some features may not be fully implemented, and there might be bugs or incomplete functionality. Your feedback and contributions are welcome as we work towards a more stable release.


**Personal Thoughts**: Inspired by interviewcoder.co but didn't like the idea of gatekeeping **cheating** softwares behind paywalls. Like you're literally cheating wtf man? And this might help incompetent software engineers join the company and eat it from the inside forcing companies to realise that Leetcode isn't the only way people should get hired and there are other alternative ways to assess a candidate's abilities.
