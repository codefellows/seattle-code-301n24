Feature: User can remove an "Item" from list
    As a User
    I want to be to remove an "Item" on button click
    So that I can be able to delete my persited data

    Background: The User is on the home page
        Given the Client is on the home page
        And the User passes "Name3" and "Description3" into inputs
        And the User clicks the "Add Item" button
        Then The User should see content added to the list

    Scenario: The User can "remove" the "item"
        When The User clicks on the added content
        And the User clicks the "Delete Item" button
        Then the content is no longer displayed
