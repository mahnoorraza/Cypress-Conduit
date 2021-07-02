/// <reference types="cypress" />

describe('MyTestSuite', function() 
    {

        before(function() {
      
            cy.fixture('example').then(function(data){
            this.data=data

          })
        })
        it('FixtureDemoTest', function()
            { 
          cy.visit("https://admin-demo.nopcommerce.com/login")
          cy.xpath("//*[@id='Email']").clear().type(this.data.email)
          cy.xpath("//*[@id='Password']").clear().type(this.data.password)
          cy.xpath('/html/body/div[6]/div/div/div/div/div[2]/div[1]/div/form/div[3]/button').click()


            })

        })