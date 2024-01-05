describe('Testcase to check the Logout ', () => {

    //Access the website www.saucedemo.com
    it('Saucedemo testing functions', () => {
        cy.visit('https://www.saucedemo.com/v1/inventory.html');
        cy.get('.bm-burger-button').click();
        cy.get('#logout_sidebar_link').click();
        cy.wait(500);
        cy.get('#user-name').type('performance_glitch_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').type('{enter}');
        cy.get('.product_label').should('exist');
        cy.wait(500);
        //Verify the logout function
        cy.get('.bm-burger-button > button').click();
        cy.get('#logout_sidebar_link').click();
        cy.get('#login-button').should('exist');
        cy.wait(500);
    });
})