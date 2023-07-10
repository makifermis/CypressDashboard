
///<reference types="cypress" />
import { url,username_openSource,password_openSource, wrongpassword, wrongusername } from '../support/authentication.constant'
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

Cypress.Commands.add('login_demoBlaze', (username,password) => {

    cy.session([username,password], () => {

        cy.visit('/');
    cy.get('#login2').click();
    cy.get('#loginusername').should('be.visible');
    cy.get('#loginusername').clear().type(username)
    cy.get('#loginpassword').clear().type(password)
    cy.get('[onclick="logIn()"]').click();
    cy.get('#logout2').should('be.visible');

    },
    {
        cacheAcrossSpecs:true
    })
    
    

})

Cypress.Commands.add('navigate_etsy', () => {

    cy.session([], () => {

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

    },
    {
        cacheAcrossSpecs:true
    })
    
    

})

Cypress.Commands.add('login_Positive_Password_Testing', () => {

    cy.visit(url)
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(username_openSource)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(password_openSource)
    cy.wait(1000)
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
 

})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })