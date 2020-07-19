/* Go to commands */
Cypress.Commands.add('goToHome', () => {
  cy.dataCy('headerNav-home').click();
});

Cypress.Commands.add('goToDashboard', () => {
  cy.dataCy('sideNav-dashboard').click();
  cy.location('pathname').should('eq', '/csgo');
});

Cypress.Commands.add('goToTracker', () => {
  cy.dataCy('sideNav-dashboard').click();
  cy.location('pathname').should('eq', '/csgo/tracker');
});

Cypress.Commands.add('goToCompare', () => {
  cy.dataCy('sideNav-compare').click();
  cy.location('pathname').should('eq', '/csgo/compare');
});

Cypress.Commands.add('goToProfile', (userId: string) => {
  if (userId) {
    cy.visit(`/profile/${userId}`);
  }
});

Cypress.Commands.add('goToConnectionsSettings', () => {
  cy.dataCy('headerNav-settings').click();
  cy.location('pathname').should('eq', '/csgo/settings');
  cy.dataCy('settingsNav-connections').should('eq', '/csgo/connections');
});

Cypress.Commands.add('goToNotificationsSettings', () => {
  cy.dataCy('headerNav-settings').click();
  cy.location('pathname').should('eq', '/csgo/settings');

  cy.dataCy('settingsNav-notifications').click();
  cy.location('pathname').should('eq', '/csgo/settings/notifications');
});

Cypress.Commands.add('goToAppearanceSettings', () => {
  cy.dataCy('headerNav-settings').click();
  cy.location('pathname').should('eq', '/csgo/settings');

  cy.dataCy('settingsNav-appearance').click();
  cy.location('pathname').should('eq', '/csgo/settings/appearance');
});
