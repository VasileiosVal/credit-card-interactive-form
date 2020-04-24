# credit-card-interactive-form &middot; [![Build Status](https://travis-ci.com/VasileiosVal/credit-card-interactive-form.svg?branch=master)](https://travis-ci.com/VasileiosVal/credit-card-interactive-form) [![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

A beautiful, interactive and responsive credit card form with smooth animations and beautiful ui changes. Inspired by [muhammederdem / vue-interactive-paycard](https://github.com/muhammederdem/vue-interactive-paycard)

Libraries and tools that used:

- **React v16.12 with Typescript**
- **Mobx - Mobx React Lite - React Context API** as state management. Used for exercise purpopes only since the project size doesn't require an external state management library.
- **CSS modules - Sass**
- **Component Testing with React Testing Library**
- **E2E Testing with Cypress**
- **CI/CD pipeline with Travis CI**

![](card.gif)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Clone the project in your local environment and inside project directory run:

### `npm install`

After project dependencies are installed, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the Test Runner in the interactive watch mode. (Tests implemented with React Testing Library)<br />

### `npm run cypress`

Launches the Cypress Test Runner that indicates all available e2e tests.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
