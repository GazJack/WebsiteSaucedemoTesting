const users = [
    'standard_user',
    'problem_user',
    'performance_glitch_user',
    'error_user',
    'visual_user'
];

describe('Test Case 5', () => {
    users.forEach(user => {
        describe(`Logout with user: ${user}`, () => {
            beforeEach(() => {
                cy.login(user, 'secret_sauce');

            });

            it('Logout', () => {
               cy.get("#react-burger-menu-btn").click();
               cy.get('[data-test="logout-sidebar-link"]').click();
               cy.get('[data-test="login-container"]').should('be.visible');
            });
        });
    });
});

