/// <reference types="cypress" />

context('Authentication & Authorization', () => {
  it('Should login user', () => {
    cy.StubUserSession();
  });
});
