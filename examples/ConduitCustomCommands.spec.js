/// <reference types="cypress" />

describe('Log In', function() 
    {
        it('SignIn', function() {
        cy.SignIn()


    })

it('Create a  Post', function()
            
            {
            
          
            cy.contains('New Post').click()
            cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[1]/input").clear().type('hello')
            cy.wait(3000)
            cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[2]/input").clear().type('sqa')
            cy.wait(3000)
            cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[3]/textarea").clear().type('check123')
            cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[4]/input").clear().type('Automation')
            
            cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/button").click()
            cy.wait(10000)
            cy.xpath("//*[@id='main']/div/div/div[1]/div/div/span/a").click()
            cy.wait(5000)
        
        })
    })