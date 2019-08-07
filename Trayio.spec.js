/// <reference types="Cypress" />

describe("Tray io Test Case", () => {

    it("Login into application", () => {
        cy.visit("https://app.tray.io/");
        cy.get('[name = "username"]').type("soni.sumit21@gmail.com");
        cy.get('[name = "password"]').type("traytesting"); 
        cy.get('.Button___1kuOal').click();
    })

    it("Create new Workflow",() => {
        cy.get('[data-qa = "create-workflow-btn"]').click();
        cy.get('.Input___2rwycS').type("Testworkflow");
        cy.get('[data-qa = "create-workflow-confirm"]').click();
    })

    it("Close trigger section & go back to dashboard",() => {
        cy.get('[qa = "close-modal"]').click();
        cy.get('[qa = "workflow-title"]',{timeout:5000}).should('have.text','Testworkflow');
        cy.get('.WorkflowsListItem-title___17Gr40',{timeout:5000}).should('have.length.greaterThan',0);
 
    })

    it("Delete Workflow",() => {
        cy.get('[data-qa = "options-menu "]').click();
        cy.get(':nth-child(6) > .Button___1kuOal').click();
        cy.get('[qa = "confirm-workflow-deletion-input"]').type("DELETE");
        cy.get('[data-qa = "delete-workflows-submit"]').click();
        cy.get('.NoData-warning___l1SSEd > h5',{timeout:5000}).should('have.text','No workflows yet!');  
    })

    it("Logout from the application",() => {
        cy.get('.HeaderDashboard-button___2a7WQZ > .svg-inline--fa').click();
        cy.get('[data-qa = "avatar-img"]').click();
        cy.get(':nth-child(2) > .ListItemDropdown-content___3LvRq_').click();
        cy.url().should("include","/login");  
    })  
 
})