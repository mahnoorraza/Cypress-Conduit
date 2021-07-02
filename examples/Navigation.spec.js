/// <reference types="cypress" />

describe('My TestSuite', function()
{
    it('Navigation Tests', function ()
     {
       cy.visit("https://demo.nopcommerce.com/") 

       cy.wait(5000)
       cy.title().should('eq','nopCommerce demo store')
       
       cy.wait(5000)
       cy.get('.ico-register').click()
       cy.title().should('eq','nopCommerce demo store. Register')

       cy.go('back')
       cy.title().should('eq','nopCommerce demo store')

       cy.go('forward')
       cy.title().should('eq','nopCommerce demo store. Register')

       cy.go(-1)
       cy.title().should('eq','nopCommerce demo store')

       cy.go(1)
       cy.title().should('eq','nopCommerce demo store. Register')

       cy.reload()

     })
})