# Archi Vision Studio – React Project

A single-page React application for an architecture studio landing page, built with Create React App and custom component-based sections.

## Tech Stack

- React 19
- React Scripts (Create React App)
- React Testing Library + Jest
- Tailwind CSS (configured) + custom CSS

## Prerequisites

- Node.js 20+ (recommended)
- npm

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open `http://localhost:3000` in your browser.

## Available Scripts

- `npm start` – Runs the app in development mode.
- `npm run build` – Creates a production build in the `build/` folder.
- `npm test` – Runs tests in watch mode.
- `npm run eject` – Ejects CRA configuration (irreversible).

## Project Structure

```text
src/
  components/      Reusable UI sections (Hero, Process, Footer, etc.)
  pages/           Page-level composition (Page1)
  styles/          Global and page styles
  assets/          Images and static design assets
  App.jsx          Main app entry component
  index.js         React root render file
```

## Notes

- The app currently renders `Page1` from `src/pages/Page1.js`.
- A legacy generated page file (`src/pages/HomePage.jsx`) exists but is not used in the current render path.
