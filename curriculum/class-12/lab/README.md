# Componentization and HTML5 Forms

## Resources

## Configuration

### Server Configuration
_Your repository must include the following config files:_

- `.env` - with your PORT and DATABASE_URL. Make sure this file is included in your `.gitignore`
- `README.md` - with documentation regarding your lab and it's current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration including `mongoose`.
- Note that the `package-lock.json` file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.
Use the following as a guide for your directory structure.

```sh
book_app (repository)
├── model.js
├── .env
├── .eslintrc.json
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

### Front-End Configuration
_Your repository must include the following config files:_

- `README.md` - with documentation regarding your lab and it's current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration, including `@auth0/auth0-react`.

```sh
book_app (repository)
├──public
├──src
│  ├── app.js
│  ├── footer.js
│  ├── header.js
│  ├── index.js
|  ├── loginButton.js
|  ├── logoutButton.js
|  ├── main.js
|  ├── myFavoriteBooks.js
|  ├── profile.js
├── .eslintrc.json
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
```

## User Acceptance Tests

### Overview

For today's assignment, you will be connecting your front end to an express server. This express server will connect to a mongo database. You will need to make a schema to model how you want your data to look. You will then populate this database with some of your favorite books so that when the front end makes a call to your server, your server will query the database and send back the all of the results in the database. Your front end will display these results.

### Time Estimate

For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```md
Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
```

Add this information to your README.

Note that there are a lot of features in today's lab assignment. If you do not complete all of the features today, submit what you have and carry over the remaining features to the next lab session. You can continue to work on any incomplete features, then move on to implementing the lab 13 features.

### Feature Tasks

See the Trello board for your feature tasks for today's lab.

#### Server Tasks

1. Make an express server
- make a 'proof of life route' to test that everything is in working order
- deploy your working server to Heroku

2. Bring in Mongoose
- connect to the Mongo database
- make a mongoose schema with the following keys at a minimum: 
  - `name`
  - `description`
  - `genre`
- use your schema to make a model
- modularize your code by putting your schema and model in its own separt file and requiring them into your server

3. Fill your database
- add at least two books to your database

4. Create a `/books` route
- when a user hits the `/books` route, your server should get all of the books from the books database and return them in the response

#### Front End Tasks

1. In the `MyFavoriteBooks` component, make a call to your server in the `componentDidMount` on the `/books` route
- your server should send you back and array of books
- put those books in state
- once you have those books, display them (you will need to use conditiional logic for this)

## Documentation

**You will need a README.md for each repo**

_Your `README.md` must include:_

```md
# Project Name

**Author**: Your Name Goes Here
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code 301 class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

01-01-2001 4:59pm - Application now has a fully-functional express server, with GET and POST routes for the book resource.

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
-->
```

## Submission Instructions

- Continue working in the same repository from the previous class.
- Continue to work on semantically-named non-main branches.
- Complete your Feature Tasks for the day (below)
- Create a Pull Request (PR) back to the `main` branch of your repository
- On Canvas, submit a link to your PR, a link to your deployed application on Netlify, and a link to your public Trello board. **Make sure to include the following:**
  - A question within the context of today's lab assignment
  - An observation about the lab assignment, or related 'Ah-hah!' moment
  - How long you spent working on this assignment
