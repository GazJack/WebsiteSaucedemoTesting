describe('Test Case 4', () => {
    it('  Purchase and payment functionality in the online store "Saucedemo"', () => {
        cy.homePage();
        cy.login();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    })
  })