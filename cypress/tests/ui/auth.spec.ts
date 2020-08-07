/// <reference types="cypress" />

describe('User authentication', () => {
  describe('Test login functionality', () => {
    before(() => {
      // add reset here
      cy.visit('/');
    });

    it('Should go back to landing page, since the user is not authorized', () => {
      // authorized route
      cy.visit('/csgo/dashboard');
    });
    /*
      it('Should login user when he has a session (mocked)', () => {
        cy.mockUserSession();
        cy.visit('/csgo');
        cy.location('pathname').should('eq', '/csgo');
      });
      */
  });
  /*
    describe('Test logout functionality', () => {
      it('Should show failed logout notification', () => {
        cy.server().route({
          method: 'POST',
          status: 500,
          url: '/auth/logout',
          response: 'Logout failed'
        });
        cy.goToDashboard();
        cy.clickProfileOption('Logout');

        cy.get('div.MuiSnackbarContent-message').should('contain', 'Could not log out. Please try again!');
      });

      it('Should logout user', () => {
        cy.logout();
        cy.get('div.MuiSnackbarContent-message').should('contain', 'Successfully logged out');
        cy.location('pathname').should('eq', '/');
      });
    });
    */
});
