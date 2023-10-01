describe('Login and sorting', () => {


  it('should login with standard_user and verify login and sorting', () => {
    cy.visit('/');

    cy.login("standard_user", "secret_sauce");

    cy.url().should("include", "/inventory.html");

    cy.get('.product_sort_container').select('Name (Z to A)');

    cy.get('.inventory_list .inventory_item')
      .should('have.length.gt', 0)
      .then(($items) => {
        const itemNames = $items.toArray().map((item) =>
          Cypress.$(item).find('.inventory_item_name').text()
        );

        const sortedItemNames = [...itemNames].sort((a, b) => b.localeCompare(a));

        expect(itemNames).to.deep.equal(sortedItemNames);
      });
  });

});