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

// describe('Test Case 3', () => {
//     it('Filtering and sorting functionality in the online store "Saucedemo"', () => {
//         cy.homePage();
//         cy.login();

//         cy.get('[data-test="product-sort-container"]').select('lohi');
//         let prevPrice = 0; // Pradinė reikšmė mažėjančiai tvarkai
//         cy.get('.inventory_item_price').then(items => {
//             cy.wrap(items).each(($el) => {
//                 const currentPrice = parseFloat($el.text().replace("$", "")); // Konvertuoja kainą į skaičių
//                 expect(prevPrice).to.be.at.most(currentPrice); // Kainos turi didėti
//                 prevPrice = currentPrice;
//             });
//         });        
        

//         cy.get('[data-test="product-sort-container"]').select('hilo');
//         let prevPrice = 0; // Pradinė reikšmė mažėjančiai tvarkai
//         cy.get('.inventory_item_price').then(items => {
//             cy.wrap(items).each(($el) => {
//                 const currentPrice = parseFloat($el.text().replace("$", "")); // Konvertuoja kainą į skaičių
//                 expect(prevPrice).to.be.at.least(currentPrice); // Kainos turi didėti
//                 prevPrice = currentPrice;
//             });
//         });     



//         cy.get('[data-test="product-sort-container"]').select('az');
//         cy.get('.[data-test="inventory-item-name"]').then(items => {
//             let prevText = ""; // Kintamasis saugoti ankstesniam pavadinimui
//             cy.wrap(items).each(($el) => {
//                 const currentText = $el.text().trim(); // Dabartinės prekės pavadinimas
//                 expect(currentText.localeCompare(prevText)).to.be.at.most(0); // Tikriname, ar rikiuota teisingai
//                 prevText = currentText; // Atnaujiname ankstesnį pavadinimą
//             })
//             });

//         cy.get('[data-test="product-sort-container"]').select('za');
//         cy.get('.inventory_item_name').then(items => {
//             let prevText = ""; // Kintamasis saugoti ankstesniam pavadinimui
//             cy.wrap(items).each(($el) => {
//                 const currentText = $el.text().trim(); // Dabartinės prekės pavadinimas
//                 expect(currentText.localeCompare(prevText)).to.be.at.least(0); // Tikriname, ar rikiuota teisingai
//                 prevText = currentText; // Atnaujiname ankstesnį pavadinimą
//             })
//         });
// });
// });

describe('Test Case 3', () => {
    it('Filtering and sorting functionality in the online store "Saucedemo"', () => {
        cy.homePage();
        cy.login();

        function checkSorting(filterValue, selector, isNumeric, isAscending) {
            cy.get('[data-test="product-sort-container"]').select(filterValue);

            cy.get(selector).then(items => {
                let prevValue = isNumeric ? -Infinity : ""; 

                cy.wrap(items).each(($el) => {
                    const currentValue = isNumeric 
                        ? parseFloat($el.text().replace("$", ""))
                        : $el.text().trim();

                    if (isAscending) {
                        expect(prevValue).to.be.at.most(currentValue);
                    } else {
                        expect(prevValue).to.be.at.least(currentValue);
                    }

                    prevValue = currentValue;
                });
            });
        }

        checkSorting('lohi', '.inventory_item_price', true, true);
        checkSorting('hilo', '.inventory_item_price', true, false);
        checkSorting('az', '[data-test="inventory-item-name"]', false, true);
        checkSorting('za', '[data-test="inventory-item-name"]', false, false);
    });
});
