/// <reference types="cypress" />

describe('User Login', () => {
  before(() => {
    cy.visit('/');
  });

  it('Should login user automatically, since session exists', () => {
    cy.stubUserSession();
    cy.dataCy('signIn').click();
    cy.url().should('contain', '/csgo/dashboard');
  });

  /*
  it('should logout user', () => {
    cy.server().route(`${Cypress.env('api')}/auth/logout`);
    cy.server({ status: 403 }).route('GET', '/auth/session');
  });
  */
});
