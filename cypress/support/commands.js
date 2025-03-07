Cypress.Commands.add('homePage', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('.login_logo').contains('Swag Labs').should('be.visible');
  });

Cypress.Commands.add('login', () => {
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="title"]').should('be.visible');
});