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

// describe('Test Case 3', () => {
//     it('Filtering and sorting functionality in the online store "Saucedemo"', () => {
//         cy.homePage();
//         cy.login();

//         function checkSorting(filterValue, selector, isNumeric, isAscending) {
//             cy.get('[data-test="product-sort-container"]').select(filterValue);

//             cy.get(selector).then(items => {
//                 let prevValue = isNumeric ? -Infinity : ""; 

//                 cy.wrap(items).each(($el) => {
//                     const currentValue = isNumeric 
//                         ? parseFloat($el.text().replace("$", ""))
//                         : $el.text().trim();

//                     if (isAscending) {
//                         expect(prevValue).to.be.at.most(currentValue);
//                     } else {
//                         expect(prevValue).to.be.at.least(currentValue);
//                     }

//                     prevValue = currentValue;
//                 });
//             });
//         }

//         checkSorting('lohi', '.inventory_item_price', true, true);
//         checkSorting('hilo', '.inventory_item_price', true, false);
//         checkSorting('az', '[data-test="inventory-item-name"]', false, true);
//         checkSorting('za', '[data-test="inventory-item-name"]', false, false);
//     });
// });

describe('SauceDemo produktų filtravimo testai', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
    });
  
    it('Filtravimas pagal "Name (A to Z)"', () => {
      cy.get('[data-test="product-sort-container"]').select('az');
      cy.get('.inventory_item_name')
        .then(($items) => {
          const names = [...$items].map(item => item.innerText);
          expect(names).to.deep.equal([...names].sort());
        });
    });
  
    it('Filtravimas pagal "Name (Z to A)"', () => {
      cy.get('[data-test="product-sort-container"]').select('za');
      cy.get('.inventory_item_name')
        .then(($items) => {
          const names = [...$items].map(item => item.innerText);
          expect(names).to.deep.equal([...names].sort().reverse());
        });
    });
  
    it('Filtravimas pagal "Price (low to high)"', () => {
      cy.get('[data-test="product-sort-container"]').select('lohi');
      cy.get('.inventory_item_price')
        .then(($prices) => {
          const prices = [...$prices].map(price => parseFloat(price.innerText.replace('$', '')));
          expect(prices).to.deep.equal([...prices].sort((a, b) => a - b));
        });
    });
  
    it('Filtravimas pagal "Price (high to low)"', () => {
      cy.get('[data-test="product-sort-container"]').select('hilo');
      cy.get('.inventory_item_price')
        .then(($prices) => {
          const prices = [...$prices].map(price => parseFloat(price.innerText.replace('$', '')));
          expect(prices).to.deep.equal([...prices].sort((a, b) => b - a));
        });
    });
  
    // it('Patikrinimas ar pasirinktas filtravimo būdas išlieka po puslapio perkrovimo', () => {
    //   cy.get('[data-test="product-sort-container"]').select('lohi');
    //   cy.reload();
    //   cy.get('[data-test="product-sort-container"]').should('have.value', 'lohi');
    // });
  
    // it('Patikrinimas ar filtravimo pasirinkimas nėra paveiktas naršyklės atgal mygtuko', () => {
    //   cy.get('[data-test="product-sort-container"]').select('hilo');
    //   cy.go('back');
    //   cy.go('forward');
    //   cy.get('[data-test="product-sort-container"]').should('have.value', 'hilo');
    // });
  
    // it('Filtravimo veikimas su skirtingais vartotojais', () => {
    //   cy.get('[data-test="react-burger-menu-btn"]').click();
    //   cy.get('#logout_sidebar_link').click();
    //   cy.get('[data-test="username"]').type('problem_user');
    //   cy.get('[data-test="password"]').type('secret_sauce');
    //   cy.get('[data-test="login-button"]').click();
    //   cy.get('[data-test="product-sort-container"]').select('lohi');
    //   cy.get('.inventory_item_price')
    //     .then(($prices) => {
    //       const prices = [...$prices].map(price => parseFloat(price.innerText.replace('$', '')));
    //       expect(prices).to.deep.equal([...prices].sort((a, b) => a - b));
    //     });
    // });
  });