import { modelSURL, comparePageUrl } from "./authentication.constant";

var data = require('../fixtures/modelsPage.json')
var comparePage = require('../fixtures/comparePage.json')


export class ModelS{
    urlVerification(){
        cy.contains('Model S').click()
        cy.url().should('eq',modelSURL)
    }

    privacy_verification(){
        cy.scrollTo('bottomLeft')

        cy.get('[class="tds-link tcl-link"]').each(($el, index)=>{
            const text = $el.text()

            expect(text).to.contain(data.ModelS[index])
        })


    }

    modelScomparePage(){
        cy.wait(500)
        cy.get('.permanent-cta-bar--desktop--buttons-wrapper > [href="compare"] > .tds-text--700').click()
        //cy.get('[href="compare"]').click()
        cy.wait(1000)
        cy.url().should('eq', comparePageUrl)
        cy.scrollTo('bottomLeft')

        cy.get('[class="tds-text--caption tcl-compare-models__item-title"]').each(($el,index)=>{
            const text = $el.text()
            expect(text).to.contain(comparePage.comparePageText[index])
        })

    }
}

export const onModelSPage = new ModelS;