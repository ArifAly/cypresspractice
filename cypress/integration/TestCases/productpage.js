/// <reference types="Cypress" />

    describe('This is the test suite for automating website scripts', () => {

        it('Here, we will first access the website and then proceed to the product page', () => {
          
            cy.visit('https://www.seesight-tours.com/tours');

            
            cy.get('.hamburger-react').click()

             cy.get('[href="/tours"] > .pro-menu-item > .pro-inner-item > .pro-item-content').contains('Day Tours').click()

             cy.get('#featured_exp_nav > .flex').should('contain', 'All Things To Do');
           
          Cypress.on('uncaught:exception', (err, runnable) => {
             
        console.error('An error occurred:', err.message);

            alert('An error occurred. Please check the console for details.');
            return false;
          });
        });
        
    })
   
      