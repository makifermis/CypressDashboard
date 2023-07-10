var data = require('../../fixtures/etsy.json')
var etsycareers = require('../../fixtures/etsyCareer.json')

describe('Etsy test cases', () => {
    
    beforeEach('Navigate to page Etsy.com', ()=>{

        //cy.visit('https://www.etsy.com/')
        cy.visit('https://www.etsy.com/', {
            onBeforeLoad(win) {
              Object.defineProperty(win.navigator, 'language', { value: 'en-GB' });
              Object.defineProperty(win.navigator, 'languages', { value: ['en'] });
              Object.defineProperty(win.navigator, 'accept_languages', { value: ['en'] });
            },
            headers: {
              'Accept-Language': 'en',
            },


        });

        cy.wait(1000)

        cy.get('[class="wt-btn wt-btn--filled wt-mb-xs-0"]').contains('Accept').click({force: true})


    })

    it('Login to the Etsy', ()=>{
        

        cy.get('[class="query-with-image-text--border"]').each(($el, index) =>{

            const text = $el.text()

            expect(text).to.contains(data.etsy[index])
        })
    })

    it('Navigate to page to Summer Sales', ()=>{

        cy.wait(1000)

        cy.contains('Summer Sales').click()
        cy.url().should('include', 'SummerSales')
        cy.scrollTo('bottomLeft')
        cy.contains('Help Center').should('be.visible')
    })

    it('Navigate to page to Help Center', ()=>{

        cy.wait(1000)

        cy.contains('Help Center').click()
        cy.url().should('include', 'hc')

        cy.go('back')

        cy.contains('Careers').click()

        cy.wait(2000)

        cy.get('#consent_agree').click()

        cy.get('#search_control_query_1_0').clear().type('Engineering{Enter}')

        cy.wait(1000)

        for (var i = 0; i < etsycareers.etsy.length; i++) {

            cy.get('h3').find('a').eq(i).should('have.text', etsycareers.etsy[i])
         }

         
        cy.get('li[class="job-component-icon-and-text job-component-dropdown-field-1"]').find('span').each(($el, index) =>{

            const text = $el.text()

            expect(text).to.contains('Engineering')
        })
        
        
    })
})