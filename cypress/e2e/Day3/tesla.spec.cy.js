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
        onModelSPage.modelScomparePage()
    })

})

// navigate to page https://www.tesla.com/models
//click compare
//check every single text on the page and run it on your cypress dashboard