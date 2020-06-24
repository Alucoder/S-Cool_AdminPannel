const { cyan } = require("@material-ui/core/colors")

describe("Login" , function()
{
    it("login " , function(){
        cy.visit('http://localhost:3002/')
        cy.get('email').type('admin1@gmail.com')
        cy.get('password').type('12345')
        cy.get('#submit').click()

    })

})
   