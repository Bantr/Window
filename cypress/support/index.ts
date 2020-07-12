/// <reference types="cypress" />
// enables the custom types
/// <reference types="../support" />

import '@cypress/code-coverage/support';
import 'cypress-graphql-mock';

// custom commands
import './util';
import './mock';

// Cypress default settings

Cypress.on('window:before:load', win => {
  // @ts-ignore
  win.fetch = null;
});
