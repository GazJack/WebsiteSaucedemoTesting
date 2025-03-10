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



  

  


  
