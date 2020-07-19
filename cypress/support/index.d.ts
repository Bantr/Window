/// <reference types="cypress" />

declare namespace Cypress {

  import { IBanType } from '@bantr/lib/dist/types';

  type ProfileOption = 'Logout' | 'Profile';
  interface INotificationOptions {
    seen?: boolean;
    banType?: IBanType;
  }

  /* eslint-disable-next-line*/
  interface Chainable {

    /** @function
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('your-data-cy-tag');
    */
    dataCy(value: string): Chainable<Element>;

    /** @function
     * Custom commands that authenticates a user and creates a userSession.
     * @example cy.createUserSession();
    */
    createUserSession(): void;

    /** @function
     * Custom command to login a user. The command contains the userSession mock, since the login is handled by third party.
     * @example cy.login();
    */
    login(): void;

    /** @function
     * Custom command to logout a user. The command will delete the userSession and return to the landing page.
     * @example cy.logout();
    */
    logout(): void;

    /** @function
     * Custom command that mocks the /auth/session REST API call.
     * @example cy.mockUserSession();
    */
    mockUserSession(): void;

    /** @function
     * Custom command that mocks the amount of new notifications.
     * @param {boolean} [hasNewNotification] - If it should contain a new notification.
     * @example cy.mockNewNotificationCount();
    */
    mockNewNotificationCount(hasNewNotification?: boolean): void;

    /** @function
     * Custom command that mocks the list of actual notifications
     *
     * @example cy.mockGetNotifications
    */
    mockGetNotifications(): void;

    /** @function
     * Custom command that opens the profile dropdown and picks a variable option
     * @param {ProfileOption} profileOption - Currently limited to 'Profile' and 'Logout'
     * @example cy.clickProfileOption('Profile')
    */
    clickProfileOption(profileOption: ProfileOption): void;

    /** @function
     * Custom command that toggles the notification window.
     * @example cy.openNotifications();
    */
    toggleNotificationWindow(): void;

    /** @function
     * Custom command to delete a single notification
     * @param {number } [index=0] - Index of the notification that should be removed.
     * @example cy.deleteNotification();
    */
    deleteNotification(index?: number): void;

    /** @function
     * Custom command that deletes all the available notifications.
     * @example cy.deleteAllNotifications();
    */
    deleteAllNotifications(): void;

    /* ::::::::::::::::::::::::::::::::::::::::::
              NAVIGATION COMMANDS
    ::::::::::::::::::::::::::::::::::::::::::::*/
    /** @function
     * Custom command that naviages to the homepage route. Which is currently redirecting to the dashboard page.
    * @example cy.goToHome();
    */
    goToHome(): void;

    /** @function
     * Custom command that navigates to the Dashboard route. (bantr.app/csgo)
     * @example cy.goToDashboard();
    */
    goToDashboard(): void;

    /** @function
     * Custom command that navigates to the Tracker route. (bantr.app/csgo/tracker)
     * @example cy.goToTracker();
    */
    goToTracker(): void;

    /** @function
     * Custom command that navigates to the Compare route. (bantr.app/csgo/compare)
     * @example cy.goToCompare();
    */
    goToCompare(): void;

    /** @function
     * Custom command that navigates to the Profile route. (bantr.app/csgo/profile)
     * @example cy.goToProfile();
    */
    goToProfile(): void;

    /** @function
     * Custom command that navigates to the Connection settings route. (bantr.app/csgo/settings/connections)
     * @example cy.goToConnectionSettings();
    */
    goToConnectionSettings(): void;

    /** @function
     * Custom command that navigates to the Notification settings route. (bantr.app/csgo/settings/notifications)
     * @example cy.goToNotificationSettings();
    */
    goToNotificationSettings(): void;

    /** @function
     * Custom command that navigates to the appearance settings route. (bantr.app/csgo/settings/appearance)
     * @example cy.goToAppearanceSettings();
    */
    goToAppearanceSettings(): void;
  }
}
