// <reference types="cypress" />

describe('MyTestSuite', function() 
    {
        it('LoginTest', function()
            { 
         cy.login('admin@yourstore.com','admin')
         cy.title().should('be.equal','Dashboard / nopCommerce administration')

         cy.login('admin@yourstore.com','admin123')
         cy.title().should('be.equal','Your store. Login')

         cy.login('admin@yourstore.com123','admin')
         cy.title().should('be.equal','Your store. Login')

            })

            it('Add Customer', function()
            { 
                //login script
                cy.login('admin@yourstore.com','admin')
               
                //script for adding customer
          cy.log('Adding Customer........') 

            })

            it('Edit Customer', function()
            { 
                
                cy.login('admin@yourstore.com','admin')
                //script for Editing customer

          cy.log('Editing Customer...........') 

            })


        })