///<reference types="cypress" />
describe('Drag and drop feature',()=>{

    it('Drag n drop using data transfer', ()=>{
        
       
        cy.visit('https://practice.expandtesting.com/drag-and-drop')

        drag_n_drop()
    })
})

const datatransfer = new DataTransfer;

function drag_n_drop(){
    
    cy.get('#column-a').should('be.visible').trigger('dragstart', {datatransfer})
    cy.wait(2000)
    cy.get('#column-b').should('be.visible').trigger('drop', {datatransfer})
    cy.wait(2000)
    cy.get('#column-b').should('be.visible').trigger('dragend',)
}