describe('My TestSuite', function()
{
    it('Verify Title Of The Page', function ()
     {
    cy.visit("https://www.nopcommerce.com/en/demo") 
    cy.title().should('eq','Store Demo - nopCommerce')
    })

  it('Verify Title Of The Page-Negative', function ()
     {
        cy.visit("https://www.nopcommerce.com/en/demo") 
        cy.title().should('eq','nopCommerce store')
   
   
  
  })

  it('Verify Xpath', function ()
     {
        cy.visit("https://www.nopcommerce.com/en/demo") 
        cy.xpath("//*[@id='topcartlink']/a/span/span").click()

      

   
   
    })
  })