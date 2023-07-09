import { githubLoginUrl } from "./authentication.constant"

export class github{

    verifySingInUrl(){
        cy.contains("Sign up").click()
        cy.get('.font-mktg > .color-fg-on-emphasis').click()
        cy.url().should('include',githubLoginUrl)
    }

    navigateToMainPage(){
        cy.contains("Sign up").click()
        cy.get('.font-mktg > .color-fg-on-emphasis').click()
        cy.url().should('include',githubLoginUrl)
        cy.go('back')
    }

}

export const ongithubPage = new github