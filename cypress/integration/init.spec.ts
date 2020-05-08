/// <reference types="cypress" />

context('Test', () => {
  it('visit website', () => {
    cy.visit('/');
    cy.screenshot();
  });

});
