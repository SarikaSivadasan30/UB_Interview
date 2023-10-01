describe("Logout Functionality", () => {
  it("Should log out successfully from the hamburger menu", () => {
    cy.visit("/");

    cy.login("standard_user", "secret_sauce");

    cy.url().should("include", "/inventory.html");

    cy.get('#react-burger-menu-btn').click();

    cy.get('#logout_sidebar_link').click();

    cy.url().should("include", "/");

    cy.get('[data-test="login-button"]').should("be.visible");
  });
});
