describe('Test Case 2', () => {
    it('Adding and removing items from the cart', () => {
        cy.homePage();
        cy.login();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        cy.get('[data-test="shopping-cart-link"]').should('have.text', '6');
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="remove-sauce-labs-onesie"]').click();
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click();
        cy.get('[data-test="shopping-cart-link"]').should('have.text', '');
    });
});