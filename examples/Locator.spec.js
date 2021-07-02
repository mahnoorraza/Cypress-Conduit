/// <reference types="cypress" />
describe('Locating Elements',function() 
    {
        it('Verify types of locators',function()
            { 
   
    
               cy.visit("https://demo.nopcommerce.com/")              //opens the url
               cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch")
               cy.wait(3000)
               cy.get("[type='submit']").click()     //click on submit

               
                            
               cy.get(".product-box-add-to-cart-button").click()
               cy.get("#product_enteredQuantity_4").clear().type('3')  
               
               cy.get("#add-to-cart-button-4").click()               //add to cart after providing quantity
               cy.wait(5000)
               cy.get("#topcartlink > a > span.cart-label").click()  //shopping cart link
               cy.wait(3000)
               cy.get(".product-unit-price").contains('$1,800.00')   //validation



            }

        
        )      
    }



)