Cypress.Commands.add('stubUserSession', () => {
  cy.server()
    .route('GET', `${Cypress.env('api')}/auth/session`, 'fixture:userSession.json');
});
