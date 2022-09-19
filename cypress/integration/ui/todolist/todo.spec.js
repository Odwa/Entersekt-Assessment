const ToDo = require("../../../Pages/ToDo")
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";


//Scenario: Create New To Do items

Given('the user acccesses the url {string}', (url)=>{
    cy.visit(url)

})

And('the user is on the QE todolist page',()=>{
    cy.get('h1').contains('QE todolist')
    cy.url().should('contains', '/todo')
})

When('the user enters a new todo items and clicks on the Submit button',(table)=>{
    table.hashes().forEach(row => {
        ToDo.typeToDoItem(row.todoitems)
        ToDo.clickSubmit()
    });

}) 


Then('the new items should be added to the todo list',()=>{
    cy.contains('Go to the bank')
    cy.contains('Study for exams')
    cy.contains('Make Cofee')
    cy.contains('Do My Assignments')

})


// Scenario: Update The First ToDo Item


Given('the user acccesses the url {string}', (url)=>{
    cy.visit(url)

})

And('the user is on the QE todolist page',()=>{
    cy.get('h1').contains('QE todolist')
    cy.url().should('contains', '/todo')
})

When('the user updates the first todo item to {string}', (todoitemUpdate)=>{
    ToDo.typeToDoItemUpdate(todoitemUpdate)

}) 

And('the user clicks on the Update button', ()=>{
    ToDo.clickUpdate()

})

Then('the new updated item should be displayed on the refresh of the page', ()=>{
    cy.contains('UPDATE: Perfom App Updates')

})

// Delete The Second ToDo item

Given('the user acccesses the url {string}', (url)=>{
    cy.visit(url)

})

And('the user is on the QE todolist page',()=>{
    cy.get('h1').contains('QE todolist')
    cy.url().should('contains', '/todo')
})


When('the user delete the second todo item', ()=>{
    ToDo.clickDelete()
})

Then('the item should not be displayed on the page', ()=>{
    
})





