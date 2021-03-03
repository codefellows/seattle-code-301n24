# Resource Update and Delete

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
|  ├── addABookButton.js
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


## User Stories and Feature Tasks

### Overview

Today you will add the functionality for the user to add a book on the front end. That book will be sent to the server where it will be saved into the database and then returned to the front end and displayed in the list of favorite books.

### Time Estimate

For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```
Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
```

Add this information to your README.

### Feature Tasks

See the Trello board for your feature tasks for today's lab.

#### Server Tasks

1. Add a `/books` route with a method of `POST`
- this route should accept the body of the request object which will be the new book
- use this information to create a new book and save it in the database
- then send that new book back to the front end

#### Front End Tasks

1. Make a new component called `AddABookButton`
- this component should be a button that when clicked displays a modal

1. The modal should take in the necissary information to save a new favorite book
- when the user submits the information, you should make a `POST` call to your server with the book information on the `/books` route
- the response you get should be the new book object

1. Display the new book you just created along with the rest of your favorite books

## Documentation

**You will need a README.md for both your front end and your server**

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
- Continue to work on semantically-named non-master branches.
- Complete your Feature Tasks for the day (below)
- Create a Pull Request (PR) back to the `master` branch of your repository
- On Canvas, submit a link to your PR, a link to your deployed application on Netlify, and a link to your public Trello board. **Make sure to include the following:**
  - A question within the context of today's lab assignment
  - An observation about the lab assignment, or related 'Ah-hah!' moment
  - How long you spent working on this assignment
