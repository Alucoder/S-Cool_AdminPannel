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
        cy.contains('Student').click()
        cy.contains('New Students').click()
        cy.get('input[placeholder="Full Name"]').type('Op Koli')
        cy.get('#class').select('2 "S"')
        cy.get('input[placeholder="Student ID"]').type('15698')
        cy.get('input[placeholder="Guardain phone no"]').type('9868259874')
        cy.get('input[placeholder="email"]').type('opkoli@gmail.com')
        //   cy.contains('Post').click()
       
    })
})