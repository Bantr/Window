/// <reference types="cypress" />

const path = `${Cypress.env('api')}/auth/session`;

context('Landing view', () => {


  beforeEach(() => {
    cy.visit('/', { timeout: 60000 });
    cy.screenshot();
  });

  it('should render the landing page', () => {
    cy.get('h1').contains('Extensive ban notifications.');
    cy.title().should('eq', 'Bantr - Homepage');
  });

  it('sign in button', () => {
    //cy.server();
    //cy.route('GET', `${Cypress.env('api')}/auth/session`, []).as('getSession');
    //cy.wait('@getSession');
    cy.server();
    cy.route('GET', path, 'fixture:userSession.json').as('getSession');
    cy.wait('@getSession');
    cy.get('.cy-sign-in').contains('Sign in with Steam');
  });

  it('sign in button, while authorized', () => {
    cy.server();
    cy.route('GET', path, 'fixture:userSession.json').as('getSession');
    cy.wait('@getSession');
    cy.get('.cy-sign-in').contains('img');
  });
});
