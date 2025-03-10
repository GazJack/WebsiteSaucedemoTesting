describe('Test Case 3', () => {
    beforeEach(() => {
        cy.homePage();
        cy.login();
    });
  
    it('Filtering and sorting by name (A to Z)', () => {
      cy.get('[data-test="product-sort-container"]').select('az');
      cy.get('.inventory_item_name')
        .then(($items) => {
          const names = [...$items].map(item => item.innerText);
          expect(names).to.deep.equal([...names].sort());
        });
    });
  
    it('Filtering and sorting by name (Z to A)', () => {
      cy.get('[data-test="product-sort-container"]').select('za');
      cy.get('.inventory_item_name')
        .then(($items) => {
          const names = [...$items].map(item => item.innerText);
          expect(names).to.deep.equal([...names].sort().reverse());
        });
    });

    it('Filering and sorting by price (low to high)', () => {
        cy.get('[data-test="product-sort-container"]').select('lohi');
        cy.get('.inventory_item_price')
          .then(($prices) => {
            const prices = [...$prices].map(price => parseFloat(price.innerText.replace('$', '')));
            expect(prices).to.deep.equal([...prices].sort((a, b) => a - b));
          });
      });
    
      it('Filering and sorting y price (high to low)', () => {
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
