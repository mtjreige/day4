/// <reference types="cypress" />
describe('Add Task', () => {
  it('should add a new task when the button is clicked', () => {
    cy.visit('http://localhost:4200');

    // Step 1: Type in the task
    cy.get('input[placeholder="Add a new task"]').type('go to school');

    // Step 2: Click the Add Task button
    cy.contains('button', 'Add Task').click();

    // Step 3: Check that the task appears in the list
    cy.contains('go to school').should('exist');
  });
});
