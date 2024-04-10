describe('template spec', () => {
    it('agregar tarea', () => {
        cy.visit('https://todomvc.com/examples/react/dist/#/')
        cy.get('[data-testid="text-input"]').type('tarea1{enter}')
        cy.contains('tarea1')
        cy.get('[data-testid="text-input"]').type('tarea2{enter}')
        cy.contains('tarea2')
        cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
        cy.get('[data-testid="text-input"]').type('tarea3{enter}')
        cy.contains('tarea3')
        cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').check()
        cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').uncheck()
        cy.get(':nth-child(3) > .view > [data-testid="todo-item-label"]').dblclick()
        cy.get('.view > .input-container > [data-testid="text-input"]').clear().type('tarea4{enter}')
        cy.contains('tarea4')
        

        
    
    

        







    })
})