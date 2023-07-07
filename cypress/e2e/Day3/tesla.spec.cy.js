import { teslaURL } from "../../support/authentication.constant"
import { onModelSPage } from "../../support/models"

describe('Tesla.com automation testing', ()=>{


    beforeEach('Navigation to page to tesla.com',()=>{
        cy.visit(teslaURL)
        cy.viewport(1920,1028)
    })

    it('Test One', ()=>{

        onModelSPage.urlVerification()
        onModelSPage.privacy_verification()
    })

})