const { cyan } = require("@material-ui/core/colors")
const { isInteger } = require("formik")

describe("Visit subject and add one subject enteting all the fields",function()
{
    it("Adding subject", function()
    {
        cy.visit('http://localhost:3000/')
        cy.get('input[placeholder="Email"]').type('admin1@gmail.com')
        cy.get('input[placeholder="Password"]').type('12345')
        cy.get('button').contains('Sign In').click()
        cy.contains('Subject').click()
        cy.get('input[placeholder="Subject Name"]').type('Maths')
        cy.get('#class').select('2 "S"')
        cy.get('#teacher').select('Hari')
        cy.get('input[placeholder="Description"]').type('Math is good')
        //   cy.contains('Post').click()
    })
})