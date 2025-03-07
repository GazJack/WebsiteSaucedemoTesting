// prisijungti:
// locked_out_user
// problem_user
// performance_glitch_user
// error_user
// visual_user

describe('Test Case 1', () => {
    it('User Login to the Online Store "saucedemo"', () => {
        cy.homePage();
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="title"]').should('be.visible');
    });
});

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

describe('Test Case 3', () => {
    it('Filtering and sorting functionality in the online store "Saucedemo"', () => {
        cy.homePage();
        cy.login();
        cy.get('[data-test="product-sort-container"]').select('lohi');
        cy.get('.inventory_item_price').then(prices => {

            })
        cy.get('[data-test="product-sort-container"]').select('hilo');



        cy.get('[data-test="product-sort-container"]').select('az');
        cy.get('.inventory_item_name').then(items => {
            let prevText = ""; // Kintamasis saugoti ankstesniam pavadinimui
            cy.wrap(items).each(($el) => {
                const currentText = $el.text().trim(); // Dabartinės prekės pavadinimas
                expect(currentText.localeCompare(prevText)).to.be.at.least(0); // Tikriname, ar rikiuota teisingai
                prevText = currentText; // Atnaujiname ankstesnį pavadinimą
            });




        cy.get('[data-test="product-sort-container"]').select('za');
    })
})
});