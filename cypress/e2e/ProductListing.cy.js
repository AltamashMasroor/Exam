describe ('Different test cases on Saucedemo', () => {

    //Access the website www.saucedemo.com
    it('Saucedemo testing functions', () => {
        cy.visit('https://www.saucedemo.com/v1/inventory.html');
        cy.get('.bm-burger-button').click();
        cy.get('#logout_sidebar_link').click();
        cy.wait(3000);

        //Access the user account and verify the side menu
        cy.get('#user-name').type('standard_user'); //Login on the website
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').type('{enter}');

        cy.get('.bm-burger-button > button').click(); //verifying assertion by opening menu
        cy.get('.bm-menu').should('exist');
        cy.wait(500);
        cy.get('.bm-cross-button > button').click(); //verifying assertion by closing the menu
        cy.get('.bm-menu').should('not.be.visible');

        //Adding product from cart
        cy.get(':nth-child(1) > .pricebar > .btn_primary').should('exist'); //Selecting product from cart 
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click();

        cy.get('.shopping_cart_link').click(); //verifying product addition in cart 
        cy.get('.item_pricebar > .btn_secondary').should('exist');
        cy.wait(500);

        //Verifying deleting a product is working 
        cy.get('.item_pricebar > .btn_secondary').click();
        cy.get('.item_pricebar > .btn_secondary').should('not.exist');
        cy.wait(500);


        //checking steps for add to cart 
        cy.get('.btn_secondary').click(); //Return to shop and add a product to cart
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
        cy.get('.shopping_cart_link').click();

        cy.get('.btn_action').click(); //verify checkout button and steps
        cy.get('[data-test="firstName"]').type('Altamash'); //Fill the required info
        cy.wait(500);
        cy.get('[data-test="lastName"]').type('Masroor');
        cy.wait(500);
        cy.get('[data-test="postalCode"]').type('10000');
        cy.wait(500);
        cy.get('.btn_primary').click();
        cy.get('.btn_action').should('exist');
        cy.get('.btn_action').click();
        cy.get('.complete-text').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get\n                there!\n            ');
        cy.wait(500);


        //Verifying product details
        cy.get('.bm-burger-button > button').click();
        cy.get('#inventory_sidebar_link').click();
        cy.get('#item_4_title_link > .inventory_item_name').click();
        cy.get('.inventory_details_desc_container').should('exist');
        cy.wait(500);


        //Verifying if the 'Back to products' after coming back to that same page
        cy.get('.inventory_details_back_button').should('exist');
        cy.get('.inventory_details_back_button').click({ force: true });
        cy.get('.product_label').should('exist');
        cy.wait(500);

       
        //Verifying the Sort button 
        cy.get('.product_sort_container').should('exist'); //Verifying Sort button exist, and select the option 'Name (Z to A)'
        cy.get('.product_sort_container').select('za');
        cy.get('#item_3_title_link').should('have.text', 'Test.allTheThings() T-Shirt (Red)')
       
    });
})