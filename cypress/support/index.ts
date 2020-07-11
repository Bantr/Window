// ***********************************************************
// This is a great place to put global configuration and behavior that modifies Cypress.
// ***********************************************************

// Import commands.js using ES2015 syntax:
import 'cypress-graphql-mock';
/*
EXAMPLE:
const schema = fs.readFileSync("../../app-schema-graphql", "utf8");
beforeEach(() => {
  cy.server();
  cy.mockgraphql({schema});
})
*/

import '@cypress/code-coverage/support';

Cypress.on('window:before:load', win => {
  // @ts-ignore
  win.fetch = null;
});
