import {testUrl} from '../config';
import {data} from '../config';

describe('Homepage testing', () => {
  it('Visit Landing Homepage ', () => {
    cy.visit(testUrl);
  });

  it('Open Login Page', () => {
    cy.contains('Login').click();
    cy.url().should('include', '/login');
    // Get the login email input, type into it and verify that the value has been updated

    cy.get('[id="forgot-password"]').click()
    cy.url().should('include','/forgot-password');
    cy.go('back')
  
     cy.get('[id="goToSignUp"]').click()
     cy.url().should('include','/signup');
     cy.go('back')

     cy.get('[id="loginEmail"]').type(data.email).should('have.value', data.email);

    // // Get the login password input, type into it and verify that the value has been updated
     cy.get('[id="loginPassword"]')
       .type(data.password)
       .should('have.value', data.password);

     cy.get('[id="checkBox"]').click()  

    // // Get the login password input, type into it and verify that the value has been updated
     cy.get('[id="submitButton"]').click();

    // // Close the modal
    // cy.get('[data-test-id="closeModal"]').click();
  });

  it('Validate Page Routes on link click', () => {
    cy.get('[id="clothing"]').click();
    cy.url().should('include', '/clothing');
    cy.go('back');

    cy.get('[id="footwear"]').click();
    cy.url().should('include', '/footwear');
    cy.go('back');

    cy.get('[id="bags"]').click();
    cy.url().should('include', '/bags');
    cy.go('back');
  });
});