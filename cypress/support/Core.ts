Cypress.Commands.add('createUserSession', () => {
  cy.mockUserSession();
  expect(sessionStorage.getItem('userSession')).to.be.eq('fixtures:userSession.json');
});

Cypress.Commands.add('login', () => { });

Cypress.Commands.add('logout', () => {
  cy.server().route({
    method: 'POST',
    url: '/auth/logout',
    response: 'logged out'
  });
  cy.clickProfileOption('Logout');
});

Cypress.Commands.add('toggleNotificationsWindow', () => {
  cy.dataCy('headerNav-notificationBell').click();
});

Cypress.Commands.add('deleteNotification', () => {

});

Cypress.Commands.add('deleteAllNotifications', () => {

});

Cypress.Commands.add('clickProfileOption', (profileOption: Cypress.ProfileOption) => {
  cy.dataCy('headerNav-avatar').as('profileMenu').click();

  cy.get('@profileMenu').within(() => {
    cy.get('div').contains(profileOption).closest('div').click();
  });
});
