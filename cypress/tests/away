/// <reference types="cypress" />

context('Landing view', () => {
  beforeEach(() => {
    cy.visit('/', { timeout: 60000 });
  });

  it('should render the landing page', () => {
    cy.get('h1').contains('Extensive ban notifications.');
    cy.title().should('eq', 'Bantr - Homepage');
  });

  it('sign in button', () => {
    cy.get('.cy-sign-in').contains('Sign in with Steam');
  });

  it('sign in button, while authorized', () => {
    cy.wait('@getSession');
    cy.get('.cy-sign-in').contains('img');
  });
});
