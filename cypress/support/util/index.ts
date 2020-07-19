import { IBanType } from '@bantr/lib/dist/types';
import faker from 'faker';

Cypress.Commands.add('dataCy', (value: string) => cy.get(`[data-cy=${value}]`));
export function cyId(value: string): string {
  return (
    `[data-cy=${value}]`
  );
}

export function createNotification(notificationOptions?: Cypress.INotificationOptions): any {
  const maxNumber = 1000000000;

  const seen = notificationOptions && notificationOptions.seen || true;
  const notification = {
    id: faker.random.number(maxNumber),
    seen: seen,
    createdAt: faker.date,
    ban: {
      detectedAt: faker.date.recent,
      type: IBanType.Game,
      unbanned: false,
      unbannedAt: null,
      player: {
        steamUsername: faker.name,
        steamAvatar: faker.image.imageUrl(),
        steamId: faker.random.uuid()
      }
    }
  };
  return notification;
}
