Feature: To Do Mobile Application
    
    Feature This feature describes how the Mobile Application will be tested

    Scenario: ToDo List on Mobile Chrome Browser
    Given the user is on the application "http://localhost:8080/todo"
    When the user adds/updates/deletes a todo item
    Then the action should be reflected on the application

    Scenario: ToDo List on Mobile Firefox Browser
    Given the user is on the application "http://localhost:8080/todo"
    When the user adds/updates/deletes a todo item
    Then the action should be reflected on the application

    Scenario: ToDo List on Mobile Safari Browser
    Given the user is on the application "http://localhost:8080/todo"
    When the user adds/updates/deletes a todo item
    Then the action should be reflected on the application


