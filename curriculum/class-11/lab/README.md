# Server-side templating with EJS

## Resources

## Configuration

_Your repository must include the following config files:_

- `README.md` - with documentation regarding your lab and its current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
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

We are going to start this week with authentication! The ability for a user to securly login to an application to store their data is crucial. Think about all the times you have signed up for an app using your facebook or google account. That is called OAuth. Essientially, we let someone else take care of making sure that you are who you say you are. 

Today, we are going to use a service called Auth0 (a local Seattle company) that will do most of the work for us. Your job will be to create a React application with the required components and set up Auth0.

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

### Repository Set-up

- Create a new repository on GitHub named `book_app_front_end`. Clone this repository into your `301` directory. You will be working in this same repository for labs 11 through 14.

### Netlify deployment

- You should create an instance on Netlify. You will be working in this same instance for labs 11 through 14.
- From this point on, work on semantically-named non-main branches. Once your app is functioning correctly on your branch, make a PR to main and confirm functionality on your deployed site. Your deployed site **should not** contain any broken functionality.

### Feature Tasks

See the Trello board for your feature tasks for today's lab.

#### Front-End Tasks
1. Given the starter code, add the following features:

1. Your `Main` component should incorperate Auth0
- It should hold conditional logic to only render the `Login` component if the user if NOT logged in. 
- It should only render the `MyFavoriteBooks` component if the user is logged in.

1. Add a `Profile` component that is only visible when the user is logged in.

1. When the user clicks on the login button, it should use Auth0 to log the user into the application

1. When the user clicks the logout button, it should log the user out of the application.

1. The `Profile` component should display information about the user such as name, profile picture and email address.

1. Your app should be styled using react-bootstrap

## Documentation

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

- Complete your Feature Tasks for the day (below)
- Create a Pull Request (PR) back to the `main` branch of your repository
- On Canvas, submit a link to your PR, a link to your deployed application on Netlify, and a link to your public Trello board. **Make sure to include the following:**
  - A question within the context of today's lab assignment
  - An observation about the lab assignment, or related 'Ah-hah!' moment
  - How long you spent working on this assignment
