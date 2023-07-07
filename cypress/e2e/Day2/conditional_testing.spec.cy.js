///<reference types="cypress" />

describe('Condidtional Testing', ()=>{
   
    it('Test Viovoyage exist using length', ()=>{

        cy.visit('/')

        cy.url().should('eq','https://www.wikipedia.org/')

        cy.get('body').then((body)=>{

            if(body.find('[data-jsl10n="wikivoyage.name"]').length >0){
                cy.get('[data-jsl10n="wikivoyage.name"]').click()
                cy.wait(1000)
                cy.url().should('eq','https://www.wikivoyage.org/')

            }else{
                cy.get('[data-jsl10n="commons.slogan"]').click()                
                cy.url().should('eq', 'https://commons.wikimedia.org/wiki/Main_Page')
                
            }
        })

    })
    
})