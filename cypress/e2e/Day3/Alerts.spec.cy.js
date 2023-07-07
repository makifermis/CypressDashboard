describe("JavaScript Alerts Testing", ()=>{
    it('Handling JS Alert -Validate Alert text and Click OK', ()=>{
        
        cy.visit('https://practice.expandtesting.com/cookie-alert')

       
        cy.get('#js-cookie-button').click()

        cy.get('#js-cookie-button').should('not.be.visible')



    
       

    })

})