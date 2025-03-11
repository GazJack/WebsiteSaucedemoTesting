describe('Test Case 4', () => {
    it('  Purchase and payment functionality in the online store "Saucedemo"', () => {
        cy.homePage();
        cy.login();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    })
  })

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