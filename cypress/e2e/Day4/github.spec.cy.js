import { githubUrl } from "../../support/authentication.constant"
import { ongithubPage } from "../../support/github"

describe('Github test cases', ()=>{
    
    
    beforeEach('Navigate to page github.com', ()=>{
        cy.visit(githubUrl)
    })

    it('Login to github', ()=>{

        ongithubPage.verifySingInUrl()
    })

    it('Navigate page back', ()=>{
        ongithubPage.navigateToMainPage()
    })

})