         /// <reference types="cypress" />

describe('Log In', function() 
{
    
        it('SignIn', function()
        {
           

         cy.visit("https://react-redux.realworld.io/#/login?_k=kuud5i")
         
         
         
         /*cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[1]/input").type("mahnoor123@domain.com") 
         
         cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[2]/input").type("Abc123@@1") 
         cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/button").should('be.visible').click() //Invalid
         cy.title().should('be.equal','Conduit')      
         

         cy.wait(5000) 
         cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[2]/input").clear().type('Abc123@@')
        
         

         cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/button").should('be.visible').click() //valid
         cy.wait(3000)
         cy.xpath("//*[@id='main']/div/nav/div/ul/li[4]/a").should('be.visible').click()    
         cy.xpath("//*[@id='main']/div/div/div[1]/div/div/div/a").should('be.visible').click()    
         cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[1]/input").clear().type("https://as1.ftcdn.net/jpg/03/08/63/34/500_F_308633483_0eCCAetIsC2lvNC3MdZ181OXzhHF2Vrs.jpg")
         cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[2]/input").clear().type("Mahnoor123")
         cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[3]/textarea").clear().type("Sqa Analyst")
         cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/button").click()
         cy.wait(4000)
         cy.xpath("//*[@id='main']/div/nav/div/ul/li[4]/a").click()
         cy.wait(3000)
        
         cy.xpath("//*[@id='main']/div/nav/div/ul/li[1]/a").click()
         
         
         cy.xpath("//*[@id='main']/div/div/div/div/div[1]/div[2]/nav/ul/li[9]/a").click()
         cy.wait(3000)
         cy.xpath("//*[@id='main']/div/div/div/div/div[1]/div[2]/nav/ul/li[17]/a").click()
         cy.wait(5000)
         cy.xpath("//*[@id='main']/div/div/div/div/div[2]/div/div/a[16]").click()
         cy.wait(3000)
         cy.xpath("//*[@id='main']/div/div/div/div/div[1]/div[2]/div[4]/div/div[1]/a").click()
         cy.wait(3000)
         cy.xpath("//*[@id='main']/div/div/div[1]/div/div/div/button").click()
         cy.wait(3000)
         cy.xpath("//*[@id='main']/div/div/div[2]/div/div/div[2]/div[1]/div/div[2]/button").click()
         cy.wait(1000)
         cy.xpath("//*[@id='main']/div/div/div[2]/div/div/div[2]/div[2]/a/h1").click()
         cy.wait(2000)
         cy.xpath("//*[@id='main']/div/div/div[2]/div[3]/div/div[1]/form/div[1]/textarea").type("hello")
         cy.wait(2000)
         cy.xpath("//*[@id='main']/div/div/div[2]/div[3]/div/div[1]/form/div[2]/button").click()
         cy.wait(2000)
         cy.xpath("//*[@id='main']/div/div/div[2]/div[3]/div/div[2]/div[1]/div[2]/span[2]/i").click()
         cy.reload()
      */
         
         cy.SignIn('mahnoor123@domain.com','Abc123@@1')
         //cy.title().should('be.equal','Conduit')

         //cy.SignIn('mahnoor123@domain.com','Abc123@@')
        // cy.title().should('be.equal','Conduit')
    
       })

        }) 
