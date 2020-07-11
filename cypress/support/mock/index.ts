Cypress.Commands.add('StubUserSession', () => {
  cy.server()
    .route('GET', `${Cypress.env('api')}/auth/session`, 'fixture:userSession.json');
});
