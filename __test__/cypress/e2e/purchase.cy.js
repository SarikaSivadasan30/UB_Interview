describe("Purchase Product Flow", () => {
  it("Should purchase a product", () => {
    cy.visit("/");
    cy.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");

    const itemNames = [];

    cy.get('[data-test="product_sort_container"]').select("Price (low to high)");

    cy.get('.inventory_item:last-child .btn_inventory').click();
    cy.get('.inventory_item:last-child .inventory_item_name').then(($element) => {
      itemNames.push($element.text());
    });

    cy.get('[data-test="product_sort_container"]').select("Name (Z to A)");

    cy.get('.inventory_item:nth-child(2) .btn_inventory').click();
    cy.get('.inventory_item:nth-child(2) .inventory_item_name').then(($element) => {
      itemNames.push($element.text());
    });

    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type("Alex");
    cy.get('[data-test="lastName"]').type("Alex");
    cy.get('[data-test="postalCode"]').type("12345");
    cy.get('[data-test="continue"]').click();

    cy.get('.cart_item').should("have.length", 2);

    cy.get('.inventory_item_name').each(($element, index) => {
      expect($element.text()).to.equal(itemNames[index]);
    });

    cy.get('[data-test="finish"]').click();
    cy.url().should("include", "/checkout-complete.html");
    cy.get('body').should('contain', 'Thank you for your order!');
  });
});
