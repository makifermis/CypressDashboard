


describe('File Upload', ()=>{


    it('Png file upload', ()=>{

        cy.visit('https://practice.expandtesting.com/upload')
        cy.get('#fileInput').attachFile('image001.png')
        //cy.get('[data-testid="file-submit"]').click()
        cy.wait(4000)
        cy.get('#fileSubmit').click()

        cy.get('h1').invoke('text', 'File Uploaded!').should('be.visible')


    })
})