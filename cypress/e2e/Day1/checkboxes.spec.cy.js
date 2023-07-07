///<reference types="cypress" />

describe('checkboxes testing', () => {
  it('checkbox testing', () => {
    cy.visit('https://practice.expandtesting.com/checkboxes')



    cy.wait(2000)
    cy.get('#checkbox1').check().should('be.checked')

    cy.viewport('ipad-mini')
    //cy.get('#checkbox1').uncheck().should('not.be.checked')
    cy.wait(2000)
    cy.get('#checkbox2').uncheck().should('not.be.checked')
  })

  it('checkbox testing', () => {
    cy.visit('https://practice.expandtesting.com/checkboxes')



    cy.wait(2000)
    cy.get('#checkbox1').check().should('be.checked')

    cy.viewport('iphone-xr')
    //cy.get('#checkbox1').uncheck().should('not.be.checked')
    cy.wait(2000)
    cy.get('#checkbox2').uncheck().should('not.be.checked')
  })
})