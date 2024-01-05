describe ('Testcase to check the login ', () => {

    //Access the website www.saucedemo.com
    it('Saucedemo testing functions', () => {
        cy.visit('https://www.saucedemo.com/v1/inventory.html');
        cy.get('.bm-burger-button').click();
        cy.get('#logout_sidebar_link').click();
        cy.wait(500);


        //Verify the login with wrong username and correct password
        cy.get('#user-name').type('performance_glitch_user'); //Correct user
        cy.get('#password').type('secret_sauce'); //correct password
        cy.get('#login-button').type('{enter}');
        cy.wait(500);
    });
})