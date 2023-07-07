
describe.skip('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')

    //Tag name
    cy.get('input')

    //by Id
    cy.get('#radio1')

    //by class name
    cy.get('.iCheck-helper')
    
    //by attribute name
    cy.get('[type]')

    //by attribute name and value
    cy.get('[name="abuse"]')

    //by class value
    cy.get('[class="iCheck-helper"]')

    //by tag name and attribute with value
    cy.get('input [name="abuse"]') // cy.get('input #radio1') it's also valid with ID 
    // if there are two webelements with the same name you can choose the first one like this: cy.get('input [name="abuse"]').eq(0)

    //by two or more different attributes
    cy.get('[name="abuse"][class="iCheck-helper"][style="position"]')

    //by text
    cy.contains('Bleu').click()

  })
})