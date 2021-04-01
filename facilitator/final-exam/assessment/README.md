# Code 301 Final Assessment

This assessment comes in 2 parts (applications), a **client** and a **server**

Each application is intended to be operated and tested independently, while also working together.

- The server, written in express, when started, will be the API that the react application uses for data retrieval and storage

## The API Server

Located in the `/server` folder, this is an express server designed to perform CRUD (Create, Read, Update, Delete) operations on a mongo/mongoose data model: `items`. Note that this server does not require you to install or configure MongoDB, it will take care of that for you.

> However, this server is broken. Your task is to fix the bugs.

How will you know that you've found them all? The tests will all pass!

### Server: Getting Started

- Install your dependencies
- Run the tests
- Fix the bugs
- Repeat until all tests are passing

### Server: Notes

- You may inspect the tests, but do not change them.
- Once you have this working, keep it running. The React app will be using it to save and retrieve data

## The React App

The React application will allow a user to:

- Add a new item
- Add notes to an existing item
- Delete an item from the list

By default, it'll try and connect to your running API server from the previous step to do so.

> However, it's slightly broken and will need you to find and fix it's bugs before you can take on the real challenge.

How will you know that you've found them all? The tests will all pass!

### React App: Getting Started

- Install your dependencies
- Run the tests
- Fix the bugs
- Repeat until all tests are passing

### React App: Add Styling

- Using React Bootstrap, style the application using Bootstrap Components

### React App Notes

- Throughout the application code, you will see that some components/markup have a prop called **data-testid** that look like the below -- **Do not remove or change these, they are required for the tests and grading**
  - ```data-testid="---"```
- When you are running and testing the application in the browser, it'll use your server and will not operate unless it is running
- When you are running the tests with `npm test` the application will simulate having a server, so it's not necessary to have it running while doing your pure testing/bug-fixing work

## Rubric

- 25 Points: Fix the Express API Server (all tests passing)
- 25 Points: Fix the React App (all tests passing)
- 25 Points: Style the application (well) with Bootstrap
- 25 Points: Deployed and Tested in the cloud
  - Server running at Heroku
  - React App running at Netlify
  - Tests for both running in the green at GitHub
