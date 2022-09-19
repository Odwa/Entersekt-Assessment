Feature: To Do List

    Feature This feature is required to write cucumber Scenarios for the To Do List application

    Scenario: Create New To Do items
    Given the user acccesses the url "http://localhost:8080/todo"
    And the user is on the QE todolist page
    When the user enters a new todo items and clicks on the Submit button
    |todoitems|
    |Go to the bank|
    |Study for exams|
    |Make Cofee|
    |Do My Assignments|
    Then the new items should be added to the todo list

    Scenario: Update To Do item
    Given the user acccesses the url "http://localhost:8080/todo"
    And the user is on the QE todolist page
    When the user updates the first todo item to "UPDATE: Perfom App Updates"
    And the user clicks on the Update button
    Then the new updated item should be displayed on the refresh of the page


    Scenario: Delete The Second ToDo item
    Given the user acccesses the url "http://localhost:8080/todo"
    And the user is on the QE todolist page
    When the user delete the second todo item
    Then the item should not be displayed on the page