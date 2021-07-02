/// <reference types="cypress" />

  describe('MyTestSuit', function() 
  {
    before(function() {
      
      cy.log('**********This is SETUP block************')
    })
  
    after(function() {
      // runs once after all the test in the block
      cy.log('**********This is TEAR DOWN block************')
    })
  
    beforeEach(function() {
      // runs before each test in the block
      cy.log('**********This is LOG IN block************')
    })

    })
  
    afterEach(function() {
      // runs after all tests in the block
      cy.log('**********This is LOG OUT block************')

    })



describe('My Test Suite', function() 
    {
        it('Searching', function()

        {
          cy.log('**********This is searching Test************')
              
        })

        it('advanced searching', function()

    {
        cy.log('**********This is advanced searching Test************')

    })
     
    it('Listing products', function()

    {
        cy.log('**********This is Listing products Test************')

    })


})
  








        