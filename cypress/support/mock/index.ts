import { createNotification } from '../util';

Cypress.Commands.add('mockUserSession', () => {
  cy.server()
    .route({
      method: 'GET',
      url: '/auth/session',
      response: 'fixture:userSession.json'
    }).as('userSession');
});

Cypress.Commands.add('mockNewNotificationCount', (hasNewNotification = true) => {
  cy.mockGraphqlOps({
    operations: {
      GET_NEW_NOTIFICATION_COUNT: {
        aggregate: hasNewNotification ? 1 : 0
      }
    }
  });
});

Cypress.Commands.add('mockNotifications', (notifications?: any[]) => {
  const seenNotification = createNotification({ seen: true });
  const newNotification = createNotification({ seen: false });

  if (!notifications) {
    notifications = [seenNotification, newNotification];
  }

  cy.mockGraphql({
    operations: {
      GET_NOTIFICATIONS: {
        ...notifications
      }
    }
  });
});

Cypress.Commands.add('mockGraphQLInit', () => {
  cy.task('getSchema').then((schema) => {
    cy.mockGraphql({
      schema: schema,
      endpoint: 'graphql.bantr.app'
    });
  });
});
