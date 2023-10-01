describe("Login Flow", () => {
  it("Should not allow locked_out_user to login", () => {
    cy.visit("/");
    cy.login("locked_out_user", "secret_sauce");
    cy.get('[data-test="error"]').should("contain", "locked out");
  });

  it("Should allow standard_user to login", () => {
    cy.visit("/");
    cy.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
  });

});
