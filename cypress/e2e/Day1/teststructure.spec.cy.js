describe('Dev-864', () => {
  it('#AC1 Testing', () => {
    cy.visit('https://example.cypress.io')


  })

  it('#AC2 Testing', () => {
    cy.visit('https://example.cypress.io')


  })

  it('#AC3 Testing', () => {
    cy.visit('https://example.cypress.io')


  })
})

describe('Dev-865', () => { //describe.only runs only this test, describe.skip skips this test
  it('#AC1 Testing', () => {// it.only runs only this test case, it.skip skips this test case
    cy.visit('https://example.cypress.io')


  })

  it('#AC2 Testing', () => {
    cy.visit('https://example.cypress.io')


  })

 
})