Feature: User can fill out a form to add Items
    As a User
    I would like to see a form on the home page
    So I can add items to my list of items

    Background: The User is on the home page
        Given the Client is on the home page

    Scenario: Client can submit a form to "Add" an "item"
        Given the User passes "Name2" and "Description2" into inputs
        And the User clicks the "Add Item" button
        Then The User should see content added to the list

    Scenario: Client persists data on refresh
        Given the User refreshes the page
        And The User clicks on the added content
        Then the previously added content is still in the list
