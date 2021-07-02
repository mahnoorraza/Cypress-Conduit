/// <reference types="cypress" />

describe('Suite Name', function() 
    {
        it('Hobbies check boxes', function()
            {
               
               cy.visit("http://demo.automationtesting.in/Register.html")  // Visit URL
               cy.wait(10000)
               cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
               cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
               cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')
               cy.wait(5000)

               cy.get('#checkbox1').uncheck().should('not.be.checked')
               cy.get('#checkbox2').uncheck().should('not.be.checked')
               cy.get('#checkbox3').uncheck().should('not.be.checked')
               cy.wait(5000)
               cy.get('input[type=checkbox]').check(['Cricket','Hockey'])

           }   
  )


      it('Skills Drop down', function() 
       {
       cy.wait(3000)  
       cy.get('#Skills').select('Android').should('have.value','Android')

    }
)

          
        it('Multi select Drop down', function() 
        {
        cy.visit("http://demo.automationtesting.in/Register.html") 
        cy.wait(5000)
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Bulgarian').click()
        cy.get('.ui-corner-all').contains('Japanese').click()

       
        }
        
    )

       it('Select Countries', function() 
    {
      cy.wait(5000)  
      cy.get('[role=combobox]').click()
      cy.get('select2-search__field').type('Ind')
      cy.get('select2-search__field').type('{enter}')
     
    })

    }
)