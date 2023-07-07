
//baseUrl is set in the config file

beforeEach(()=>{

    cy.login_demoBlaze('test','test')

})

it('cypress login', ()=>{

cy.visit('/')    
cy.get('#nameofuser').should('have.text','Welcome test')

})

it('cypress login 2', ()=>{

    cy.visit('/')
    cy.get('#nameofuser').should('have.text','Welcome test')
    
    })
//https://www.youtube.com/watch?v=hOJ50rINCkA