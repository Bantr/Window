/// <reference types="cypress" />
// enables the custom types
/// <reference types="../support" />

import '@cypress/code-coverage/support';
import 'cypress-graphql-mock';

// custom commands
import './util';
import './mock';
import './Core';
import './navigation';

// Cypress default settings
Cypress.on('window:before:load', win => {
  win.fetch = null;
});
