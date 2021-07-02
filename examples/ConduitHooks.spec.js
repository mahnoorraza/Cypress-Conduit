/// <reference types="cypress" />

describe('Log In', function() 
    {
        before(function()
            {
         cy.SignIn('**********This is SETUP block************')
        
        })

        after(function() {
            // runs once after all the test in the block
            cy.SignIn('********This is TEAR DOWN block************')
          })

          beforeEach(function() {
            // runs before each test in the block
            cy.log('**********This is LOG IN block************')
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
      
              it('News feed', function()
      
          {
              cy.log('**********This is News feed search************')
      
          })
           
          it('Publish article', function()
      
          {
              cy.log('**********This is Publish an article Test************')
      
          })
      
      
      })
        
      
      it('Create a  Post', function()
      {
          for (let i = 0 ; i <5; i++)  
          {
              cy.contains('New Post').click()
              cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[1]/input").clear().type('hello')
              cy.wait(1000)
              cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[2]/input").clear().type('sqa')
              cy.wait(1000)
              cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[3]/textarea").clear().type('check123')
              cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[4]/input").clear().type('Automation')
              cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/button").click()
              cy.wait(6000)
              cy.xpath("//*[@id='main']/div/div/div[1]/div/div/span/a").click()
              cy.wait(5000)
          }
        
        })
      })
