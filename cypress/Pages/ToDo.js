class ToDo {
    elements = {
        todoInput: ()=> cy.get('#newtodo'),
        updateInput: ()=> cy.get('#edittodo-0'),
        submitButton: ()=> cy.get('#new-submit'),
        updateButton: ()=> cy.get('#edit-submit-0'),
        deleteButton: ()=> cy.get('a[href="/todo/delete/1"]')

        
    }

    typeToDoItem(todoItem){
        this.elements.todoInput().type(todoItem);
    }
    
    typeToDoItemUpdate(todoItemUpdate){
        this.elements.updateInput().type(todoItemUpdate);
    }

    
    clickSubmit(){
        this.elements.submitButton().click()
    }

    clickUpdate(){
        this.elements.updateButton().click()
    }

    clickDelete(){
        this.elements.deleteButton().click()
    }

}

module.exports = new ToDo()