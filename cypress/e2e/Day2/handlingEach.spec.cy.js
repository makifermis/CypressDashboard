///<reference types="cypress" />
var information = require('../../fixtures/staging.json')

describe('Handling each ', ()=>{

    before(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('admin123')
        cy.get('.oxd-button').click()
        
    })
   
    it('Test Viovoyage exist using length', ()=>{
        
       cy.get('.orangehrm-dashboard-widget-header').each(($el,index)=>{
        cy.log('element : ', $el.text())

        const text = $el.text()

        expect(text).to.contain(information.quickLaunch[index])

       })

    })
    
})