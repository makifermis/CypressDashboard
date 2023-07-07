describe("Dropdown Testing", ()=>{
    it.skip('State Selection', ()=>{
        cy.visit('https://practice.expandtesting.com/dropdown')

       

        cy.get('select#country').select('Afghanistan').should('have.value','AF')
        //cy.get('select#name option:selected').should('have.text', 'Peter')



    
       

    })

    it('Select birthday', ()=>{

        cy.visit('https://practice.expandtesting.com/dropdown')

        cy.get('select#dropdown').select('Option 1')

        cy.get('select#elementsPerPageSelect').select('20')





    })
})