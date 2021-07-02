      /// <reference types="cypress" />

      describe('Sign up', function() 
      {
          
              it('SignUp', function()
              {
                 
      
cy.visit("https://react-redux.realworld.io/#/login?_k=kuud5i")

cy.xpath("//*[@id='main']/div/nav/div/ul/li[3]/a").click()

cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[1]/input").type("abc123")
cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[2]/input").type("abc@domain.com")
cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[3]/input").type("Abc123@@")


              })
            })
