/// <reference types="Cypress" />

describe('Home Page', () => {
    it('should display the title on the home page', () => {
        cy.visit('/');

        cy.get('ion-title').contains('Hacker News Ionic Angular')
            .should('be.visible');
    });

    it('should display the articles in app-stories as links', () => {
        cy.visit('/');

        cy.get('app-stories ion-item a').should('have.length', 20).each(item =>
            cy.wrap(item).should('be.visible').and('have.attr', 'href')
        );
    });
});
