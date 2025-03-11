const users = [
  'standard_user',
  'problem_user',
  'performance_glitch_user',
  'error_user',
  'visual_user'
];

describe('Test Case 3', () => {
  users.forEach(user => {
    describe(`Testing with user: ${user}`, () => {
      beforeEach(() => {
        cy.login(user, 'secret_sauce');
      });

      it('Filters and sorts products by name (A to Z)', () => {
        cy.get('[data-test="product-sort-container"]').select('az');
        cy.get('.inventory_item_name').then(($items) => {
          const names = [...$items].map(item => item.innerText);
          expect(names).to.deep.equal([...names].sort());
        });
      });

      it('Filters and sorts products by name (Z to A)', () => {
        cy.get('[data-test="product-sort-container"]').select('za');
        cy.get('.inventory_item_name').then(($items) => {
          const names = [...$items].map(item => item.innerText);
          expect(names).to.deep.equal([...names].sort().reverse());
        });
      });

      it('Filters and sorts products by price (low to high)', () => {
        cy.get('[data-test="product-sort-container"]').select('lohi');
        cy.get('.inventory_item_price').then(($prices) => {
          const prices = [...$prices].map(price => parseFloat(price.innerText.replace('$', '')));
          expect(prices).to.deep.equal([...prices].sort((a, b) => a - b));
        });
      });

      it('Filters and sorts products by price (high to low)', () => {
        cy.get('[data-test="product-sort-container"]').select('hilo');
        cy.get('.inventory_item_price').then(($prices) => {
          const prices = [...$prices].map(price => parseFloat(price.innerText.replace('$', '')));
          expect(prices).to.deep.equal([...prices].sort((a, b) => b - a));
        });
      });
    });
  });
});

