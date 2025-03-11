describe("Test Case 1", () => {
  const users = [
    { username: "standard_user", password: "secret_sauce", shouldLogin: true },
    { username: "locked_out_user", password: "secret_sauce", shouldLogin: false, error: "Sorry, this user has been locked out." },
    { username: "problem_user", password: "secret_sauce", shouldLogin: true },
    { username: "performance_glitch_user", password: "secret_sauce", shouldLogin: true },
    { username: "error_user", password: "secret_sauce", shouldLogin: true },
    { username: "visual_user", password: "secret_sauce", shouldLogin: true }
  ];

  users.forEach(user => {
    it(`Login  ${user.username}`, () => {
      cy.login(user.username, user.password);
      if (user.shouldLogin) {
        cy.url().should("include", "/inventory.html");
      } else {
        cy.get("[data-test='error']").should("contain", user.error);
      }
    });
  });

  it("Wrong username and correct password", () => {
    cy.login("error", "secret_sauce");
    cy.get("[data-test='error']").should("contain", "Username and password do not match");
  });

  it("Correct username and wrong password", () => {
    cy.login("standard_user", "error");
    cy.get("[data-test='error']").should("contain", "Username and password do not match");
  });

  // žalias
  it("Empty username and password", () => {
    cy.homePage();
    cy.get("[data-test='login-button']").click();
    cy.get("[data-test='error']").should('be.visible');
  });
});

