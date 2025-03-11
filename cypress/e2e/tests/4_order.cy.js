const users = [
    'standard_user',
    'problem_user',
    'performance_glitch_user',
    'error_user',
    'visual_user'
];

describe('Test Case 4', () => {
    users.forEach(user => {
        describe(`Testing with user: ${user}`, () => {
            beforeEach(() => {
                cy.login(user, 'secret_sauce');

            });

            it('Purchasing', () => {
                cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
                cy.get('[data-test="shopping-cart-link"]').click();
                cy.get('[data-test="checkout"]').click();
                cy.get('[data-test="firstName"]').type('Zebrė');
                cy.get('[data-test="lastName"]').type('Zebrauskė');
                cy.get('[data-test="postalCode"]').type('92317');
                cy.get('[data-test="continue"]').click();
                cy.get('[data-test="checkout-summary-container"]').should('be.visible');
                cy.get('[data-test="finish"]').click();
                cy.get('[data-test="checkout-complete-container"]').should('be.visible');
            });
        });
    });
});

