# Project Template with Next.js, Styled Components, Jest, and Cypress

This is a project template that integrates **Next.js** with **Styled Components** for styling, **Jest** for unit and component testing, and **Cypress** for end-to-end testing.

## Getting Started

### Installation

To install the dependencies, run:

```bash
npm install
```

### Development

To start the development server, run:

```bash
npm run dev
```

This will start the Next.js development server on [http://localhost:3000](http://localhost:3000).

### Running Tests

#### Jest Tests

Jest tests are written in the `__tests__/` directory. To run Jest tests, use:

```bash
npm run test
```

#### Cypress Tests

Cypress tests are written in the `cypress/` directory. To open the Cypress test runner, use:

```bash
npm run cypress:open
```

This will open the Cypress interface where you can run your end-to-end tests.

## Project Structure

- `app/` - Contains the Next.js pages and routing.
- `components/` - Contains the React components styled with Styled Components.
- `__tests__/` - Contains the Jest tests.
- `cypress/` - Contains the Cypress tests.
