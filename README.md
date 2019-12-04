# Offices list

Offices list is a test project - website that displays a list of offices around the world. It containes a navigation bar that uses [React-router](https://reacttraining.com/react-router/web/guides/quick-start) and leads to three pages: Link, Grid and Map. Each of those pages renders the offices in quoted style.

## Technology and framework

- [create-react-app](https://create-react-app.dev/)
- [axios - npm](https://www.npmjs.com/package/axios)
- [Bootstrap](https://getbootstrap.com/)
- [styled-components](https://www.styled-components.com/docs/basics)

## Getting started

Make sure you have [Node.js](https://nodejs.org/en/) and [NPM](https://nodejs.org/en/) installed before starting.

1. Download and extract the repository
2. Navigate to the project folder with Command Prompt / Terminal
3. Run `npm install` and wait for the installation to finish
4. Run `cp .env.example .env` in order to create .env file
5. Run `npm start` which will start the page.

### Map source

[https://uber.github.io/react-map-gl/#/](https://uber.github.io/react-map-gl/#/)

There is a warning in a console:
`Warning: Cannot update during an existing state transition (such as within render). Render methods should be a pure function of props and state.`
It is caused by a known bug in react-map-gl [https://github.com/uber/react-map-gl/issues/642](https://github.com/uber/react-map-gl/issues/642)
