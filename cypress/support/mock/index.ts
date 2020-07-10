Cypress.Commands.add('getSession', () => {
  cy.server()
    .route('GET', `${Cypress.env('api')}/auth/session`, 'fixture:userSession.json')
});

