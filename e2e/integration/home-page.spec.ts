/// <reference types="Cypress" />

describe('Home Page', () => {
    it('should display the title on the home page', () => {
        cy.visit('/');

        cy.get('ion-title').contains('Hacker News Ionic Angular')
            .should('be.visible');
    });
});