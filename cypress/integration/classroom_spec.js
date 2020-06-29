const { cyan } = require("@material-ui/core/colors")

describe("Visits classroom ", function()
{
    it("visit to classroom tab ", function(){
    
        cy.visit('http://localhost:3000/')
        // cy.get('input:first').should('have.attr','placeholder','Email').type('admin1@gmail.com')
        cy.get('input[placeholder="Email"]').type('admin1@gmail.com')
        cy.get('input[placeholder="Password"]').type('12345')
        // cy.get('input:last').should('have.attr','placeholder','Password').type('12345')
        cy.get('button').contains('Sign In').click()
        // cy.get('form').submit()
        // cy.get('button').contains('CLASS').click();
        cy.contains('Class').click()
        // cy.visit('http://localhost:3000/classroom')
       
      
        // cy.title().should('inlcude','Welcome');




    })

})
