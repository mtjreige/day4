/// <reference types="cypress" />
describe('Add Task', () => {
  it('should add a new task when the button is clicked', () => {
    cy.visit('http://localhost:4200');
    cy.get('input[placeholder="Add a new task"]').type('go to school');
    cy.contains('button', 'Add Task').click();
    cy.contains('go to school').should('exist');
  });
});
