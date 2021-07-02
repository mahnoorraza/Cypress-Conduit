    //Fixture command
   /* describe('Login', function() {

        it('SignIn', function() {
    
    cy.visit("https://react-redux.realworld.io/#/login?_k=kuud5i")
    cy.fixture('UserLoginDetails').then((user)=> {
    cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[1]/input").type(user.email)
    cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[2]/input").type(user.password)
    })
    cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/button").should('be.visible').click()
    cy.wait(5000)       
    
    })
})*/



describe('Login', function() {
    beforeEach(function(){
    
    cy.fixture('UserLoginDetails').as('user')
    

    })

    it('Sign In', function() {

cy.visit("https://react-redux.realworld.io/#/login?_k=kuud5i")

cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[1]/input").type(this.user.email)
cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/fieldset[2]/input").type(this.user.password)
cy.wait(1000)
cy.xpath("//*[@id='main']/div/div/div/div/div/form/fieldset/button").should('be.visible').click()     

})
})  