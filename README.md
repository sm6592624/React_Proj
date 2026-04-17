# Architectural Portfolio Website

A modern, responsive React-based portfolio website showcasing architectural projects and services. Built with React, Tailwind CSS, and custom styling for a professional presentation.

## Prerequisites

Ensure you have **Node.js 20+** installed. Download from [nodejs.org](https://nodejs.org/en/download/)

## Quick Start

1. **Open project folder in VS Code**
   ```bash
   code .
   ```

2. **Open terminal in VS Code**
   ```bash
   Ctrl + ` 
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm start
   ```

5. **View in browser**
   Open [http://localhost:3000](http://localhost:3000) in your web browser

The page will automatically reload when you save changes. Lint errors will appear in the console.

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── ProcessSteps.jsx
│   ├── Stats.jsx
│   ├── MissionStatement.jsx
│   ├── SustainabilitySection.jsx
│   ├── IntroductionSection.jsx
│   ├── UrbanGrowthSection.jsx
│   └── Footer.jsx
├── pages/               # Page components
│   └── Page1.js
├── styles/              # CSS styling
│   ├── global.css
│   └── homepage.css
├── assets/              # Images and media
└── App.jsx              # Root component
```

## Available Scripts

### `npm start`
Runs the app in development mode. The app will reload on file changes.

### `npm test`
Launches the test runner in interactive watch mode.
See [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more details.

### `npm run build`
Builds the app for production in the `build` folder. The build is optimized and minified with hashed filenames, ready for deployment.

### `npm run eject`
⚠️ **One-way operation** - Once ejected, you cannot undo this.
Ejects from Create React App to have full control over configuration files and dependencies. Only use if you need custom webpack/Babel setup.

## Technology Stack

- **React** - UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS** - Component-specific styling with CSS variables
- **Create React App** - Build tooling and development server

## Features

- **Responsive Design** - Mobile-first approach with breakpoints at 1024px, 768px, and 640px
- **Modern Layout** - CSS Grid and Flexbox layouts
- **Color System** - CSS variables for consistent theming
- **Optimized Images** - Proper image alignment and responsive sizing

## Deployment

The production build can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc).

```bash
npm run build
```

See [deployment guide](https://facebook.github.io/create-react-app/docs/deployment) for detailed instructions.

## Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is open source and available under the MIT License.
