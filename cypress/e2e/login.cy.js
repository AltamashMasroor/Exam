describe('Testcase to check the login Functionality', () => {

    //Access the website www.saucedemo.com
    it('Saucedemo Login Testing', () => {
        cy.visit('https://www.saucedemo.com/v1/inventory.html');
        cy.get('.bm-burger-button').click();
        cy.get('#logout_sidebar_link').click();
        cy.wait(500);


        //Verify the login with wrong username and correct password
        cy.get('#user-name').type('Altamash'); //Correct user
        cy.get('#password').type('secret_sauce'); //correct password
        cy.get('#login-button').type('{enter}');
        cy.wait(500);

        //Verify the login with correct credentials
        cy.reload();
        cy.get('#user-name').type('performance_glitch_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').type('{enter}');
        cy.get('.product_label').should('exist');
        cy.wait(500);
    });
})