describe ('Testcase to check the login ', () => {

    //Access the website www.saucedemo.com
    it('Saucedemo testing functions', () => {
        
         //Verify the logout function
         cy.get('.bm-burger-button > button').click();
         cy.get('#logout_sidebar_link').click();
         cy.get('#login-button').should('exist');
         cy.wait(500);
    });
})