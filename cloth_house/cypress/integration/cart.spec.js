import {testUrl} from '../config';

describe('Cart testing', () => {
    it('Visit Landing Homepage ', () => {
      cy.visit(testUrl);
  
  
  
    })

    it("Open categories Menu",()=>{
        cy.get('[id="clothing"]').click()
        cy.get('[id="addToCart"]').click({ multiple: true })
        cy.get('[id="footwear"]').click()
        cy.get('[id="addToCart"]').click({ multiple: true })
        cy.get('[id="bags"]').click()
        cy.get('[id="addToCart"]').click({ multiple: true })
        cy.get('.cart').click()
        cy.url().should('include','/cart')
        cy.get('.bgForPlaceButton').click()
        cy.get('.bgForPlaceButton').click()   
    
    }) 


})   