// <reference types="cypress" />

describe('UI Elements', function() 
    {
        it('Verify Input & Radiobuttons', function()
            {
               cy.visit("http://demo.guru99.com/test/newtours/index.php")  // Visit URL
               cy.url().should('include','newtours')                        // Verify url should includ newtours

               cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("mercury")
               cy.get('input[name=password]').should('be.visible').should('be.enabled').type("mercury")
               cy.get("[type='submit']").click

               cy.visit("http://demo.guru99.com/test/newtours/reservation.php")

               cy.title().should('eq','Find a Flight: Mercury Tours:')   //title verification

               //Radiobuttons
               cy.get('input[value=roundtrip').should('be.visible').should('be.checked')
               cy.get('input[value=oneway').should('be.visible').should('not.be.checked').click()

               cy.get('[name=findFlights]').should('be.visible').click() //continue button

               //cy.title().should('eq','Find a Flight: Mercury Tours:')


               








            }

        
        )      
    }



)