# Saucedemo Test

## Description
This is a test for the saucedemo page, it is a simple test that logs in and adds a product to the cart.

## Installation
To run this test you need to have installed the following:
- node js
- npm
- yarn
- cypress

## Usage
To install the dependencies you need to run the following command:
```bash
yarn install
```

To run the test you need to run the following command:
```bash
yarn cypress:tests
```

## Test Descriptions

The test suite includes the following tests:

1. **[Login Flow Tests](__test__/cypress/e2e/login.cy.js)**:
   - Positive login test: Verifies that a valid user can log in successfully.
   - Negative login test: Tests that an invalid user (e.g., locked_out_user) cannot log in.

2. **[Purchase Product Flow Test](__test__/cypress/e2e/purchase.cy.js)**:
   - Completes a purchase of products after logging in.
   - Sorts products by price (low to high).
   - Adds the last product to the cart.
   - Sorts products by name (A to Z).
   - Adds the top-right product to the cart.
   - Proceeds to checkout, fills out customer details, and verifies the purchase.

3. **[Logout Functionality Test](__test__/cypress/e2e/logout.cy.js)**:
   - Logs in as a user.
   - Opens the hamburger menu and logs out.
   - Verifies that the user is successfully logged out.

4. **[Sorting Tests](__test__/cypress/e2e/login.cy.js)**:
   - Log in and verify.
   - Sorts products by Name (Z to A).
   - Adds the top-right product to the cart.
   - Verify the sorting
