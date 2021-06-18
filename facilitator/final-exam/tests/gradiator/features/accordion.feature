Feature: The Client implements an accordion list
    As a User
    I should be able view an accordion list of item details
    So that I can see details for a single item

    Background: The User is on the home page
        Given the Client is on the home page
        And the User passes "Name1" and "Description1" into inputs
        And the User clicks the "Add Item" button

    Scenario: The User can expand "Item" details on click
        When The User clicks on the added content
        Then The User should see details of only that one Item
