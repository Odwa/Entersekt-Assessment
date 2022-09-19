Feature: To Do List

    Feature This feature is required to write cucumber Scenarios for the To Do List application

    Scenario: Create New To Do item using API 
    Given the user sends a request to the todo list page "http://localhost:8080/todo"
    When the user adds a new todo item
    Then the new item should be added to the todo list
    

    Scenario: Delete The first To Do item using API 
    Given the user sends a request to access the todo list "http://localhost:8080/todo"
    When the delete request is executed to remove the first todo item
    Then the added item should be removed from the todo list