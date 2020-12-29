/// <reference types="Cypress" />

describe('Home Page', () => {
    it('should display the app name on the home page', () => {
        cy.visit('/');

        cy.get('app-root ion-header')
            .should('contain.text', 'Hacker News Ionic Angular');
    });
});