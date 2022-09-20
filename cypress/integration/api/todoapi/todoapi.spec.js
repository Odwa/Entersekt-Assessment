import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

//Create New To Do item using API 
Given('the user sends a request to the todo list page {string}', (url)=>{
    cy.request(url) 
})

When('the user adds a new todo item', ()=>{
      cy.request({
        method: 'POST', 
        url: 'http://localhost:8080/todo/add/', 
        body: {
            newtodo: 'Write api tests'
        }
      })
    .then( ({ status }) => {
        expect(status).to.eq(200)
      })
      
})

Then('the new item should be added to the todo list', ()=>{

})

//Delete To Do item using API 

Given('the user sends a request to access the todo list {string}', (url)=>{
    cy.request(url) 
})

When('the delete request is executed to remove the first todo item', ()=>{
    cy.request('GET', '/todo/delete/0')

})

Then('the added item should be removed from the todo list', ()=>{

})