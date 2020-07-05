// ***********************************************************
// This is a great place to put global configuration and behavior that modifies Cypress.
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import '@cypress/code-coverage/support';

// Polyfill fetch
Cypress.on("window:before:load", win => {
  win.fetch = null;
});