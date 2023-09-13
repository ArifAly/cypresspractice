/// <reference types="Cypress" />

describe ('This is the test suite for automating website scripts.', ()=> {

    it('Here, we will first access the website and then proceed to the product page.', ()=>{
        cy.visit('https://www.seesight-tours.com/')
    })
    
})