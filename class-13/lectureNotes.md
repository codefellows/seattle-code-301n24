# Lecture Notes from Wednesday 01/05/2022
All times listed below are for Pacific Standard Time zone.

## Code Review 6:30-7:00pm
- How are Code Challenges 13 coming?

## Lecture & Lab Demo 7:00-8:00pm
- CRUD - Update / PUT
  - Everything changes and applications need to be able to adjust their data to accommodate those changes.
  - `UPDATE` is an essiential part of a CRUD application.
- In Our Best Books Application, we will be writing an update route to update the information on the books.
- If you want to update a resource, what information do you need?
  - a way of identifying the resource 
    - this can be the id of the resource
  - the updated information
- Client-side:
  - Make an update button next to the delete button
  - When the user clicks it, a form should appear with that resources' information already filled in.
  - The user edits the info as they see fit and the updated info gets send to the server along with a way of identifying which resource is being updated.
- Server-side:
  - we need to make a PUT route to accept the updated information.
  - We will get information from the params as well as the body.
  - Update the information in the database 
    - Do we want to send the updated resource or the entire array of resources back to the user?
  - Object Destructuring 
    - The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into new variables.
    ```
    const user = {
        id: 42,
        isVerified: true
    };

    const {id, isVerified} = user;

    console.log(id); // 42
    console.log(isVerified); // true

    ```

## Project Requirements & Ideas 8:00pm-8:15pm

### Front-End
- Good and proper use of React
- Good and proper use of React-Bootstrap
- Good and proper use of JavaScript 
- Deployed live on the Internet via Netlify
  - The project must utilize a professional Netlify domain name

### Back-End
- The project must utilize at least one third-party API
- Server side code must use Node and Express, and other NPM packages as appropriate.
- Utilize a Mongo database as described in detail below
  - Routes should follow standard REST conventions
  - Implement authentication via Auth0
- Data is persisted in a Mongo database
  - Mongo database provisioned in the cloud (Atlas)
  - Logical schemas with appropriate data types
  - Data model that maps to the problem domain
  - Ability to read records from the database
  - Ability to create new resources and persist them in the database
  - Ability to update records in the database
  - Ability to delete records in the database
- Deployed live on the Internet via Heroku

### General
  - Works as expected with no bugs
  - Has at least three distinct pages with clear navigation, one of which must be an "About Us" page
  - Has at least two pages that accept and process user input

## Exam Overview 8:15-8:30pm
- Exam will take place on Saturday, January 29th from 2:00-6:00pm(PST).
- There will also be time to review prior to the exam on day 14 (Thursday).
- Students will be given starter code that will have minor bugs in it. They will need to fix the bugs and then add some features onto the code. 
- There will be tests that they can run so they will know if they have completed the tasks correctly. 
- They will need to deploy both their front-end and back-end.
- You will have 4 hours to complete the exam.
- You must be present in Remo, sitting alone at a table while taking the exam.
- You may use any resource except for other people. 
  - If you are stuck on a gituation, ask the instructor for assistance.
  - TAs may not help you compelte the exam.
- There will be an option for one retake if you happen to fail the exam the first try. 

## Remo Lab 8:30pm-9:30pm
- Take this time to start on your lab from Class-13 with your partner(s).
  - You are working with same partners from lab 11 & 12.
- One dev will drive while the other navigates. 
- Switch driver/navigator roles in between Trello card completions. 
- This lab is due no later than Thusday, January 27th by 6:30pm(PST).
- Don't forget the 15 minute rule!
- Ask for TA help if you get stuck!

## Career Assignments
- Resume Approval by Instructor due on Friday!
  - Submit the URL for your error-free resume, updated with information from all previous resume assignments.

### As always, if you have any questions or concerns, please hit me up on Slack.
