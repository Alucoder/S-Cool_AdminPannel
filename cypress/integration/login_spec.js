const { cyan } = require("@material-ui/core/colors")

describe("Enter Username and Password then Submit", function()
{
    it("submits login form after entering username and password", function(){
    
        cy.visit('http://localhost:3002/')
        // cy.get('input:first').should('have.attr','placeholder','Email').type('admin1@gmail.com')
        cy.get('input[placeholder="Email"]').type('admin1@gmail.com')
        cy.get('input[placeholder="Password"]').type('12345')
        // cy.get('input:last').should('have.attr','placeholder','Password').type('12345')
        cy.get('button').contains('Sign In').click()
        // cy.get('form').submit()
        cy.get('a').contains('Welcome').should('have.text','Welcome');
        // cy.title().should('inlcude','Welcome');


    })

})
