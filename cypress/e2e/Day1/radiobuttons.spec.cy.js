///<reference types="cypress" />

import { URL } from '../../support/authentication'
describe('radiobuttons testing', () => {
  it('verify all the radio buttons checked', () => {
    cy.visit(URL)

    cy.get('[type="radio"]').then(radioButtons => {
      cy.wrap(radioButtons).first()
        .check()
        .should('be.checked')


      cy.wrap(radioButtons).eq(1)
        .check()
        .should('be.checked')

      for (var i = 0; i <= radioButtons.length - 1; i++) {
        cy.wrap(radioButtons).eq(i)
          .check({ force: true })
          .should('be.visible')
        cy.wait(500)
        console.log(i)
      }
    })




  })
})