/// <reference types="cypress" />
describe('User Form Tests', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:4200'); 
  });


  it('disables submit button if form is invalid', () => {
    cy.get('button[type="submit"]').should('be.disabled');
  });

  it('shows validation messages when touching fields', () => {
    cy.get('input[formControlName="fullName"]').focus().blur();
    cy.contains('Full Name is required').should('be.visible');

    cy.get('input[formControlName="email"]').focus().blur();
    cy.contains('Email is required').should('be.visible');

    cy.get('input[formControlName="age"]').focus().blur();
    cy.contains('Age is required').should('be.visible');

    cy.get('input[formControlName="password"]').focus().blur();
    cy.contains('Password is required').should('be.visible');

    cy.get('input[formControlName="confirmPassword"]').focus().blur();
    cy.contains('Confirm Password is required').should('be.visible');
  });

  it('shows password mismatch error', () => {
    cy.get('input[formControlName="password"]').type('abc12345');
    cy.get('input[formControlName="confirmPassword"]').type('wrongpass');
    cy.contains('Passwords do not match').should('be.visible');
  });

  it('submits form when valid', () => {
    cy.get('input[formControlName="fullName"]').type('Marie');
    cy.get('input[formControlName="email"]').type('marie@example.com');
    cy.get('input[formControlName="age"]').type('25');
    cy.get('input[formControlName="password"]').type('mypassword');
    cy.get('input[formControlName="confirmPassword"]').type('mypassword');

    cy.get('button[type="submit"]').should('not.be.disabled').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('From submitted successfully! ');
    });
  });
});
