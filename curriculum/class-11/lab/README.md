# Server-side templating with EJS

## Resources

## Configuration

_Your repository must include the following config files:_

- `README.md` - with documentation regarding your lab and its current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `package.json` - with all dependencies and any associated details related to configuration, including `@auth0/auth0-react`.

```sh
book_app (repository)
├──public
├──src
│  ├── App.js
│  ├── Footer.js
│  ├── Header.js
│  ├── index.js
|  ├── LoginButton.js
|  ├── LogoutButton.js
|  ├── Login.js
|  ├── MyFavoriteBooks.js
|  ├── Profile.js
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

### Partner Work
- Much of the work you will doing in the industry will be in pairs. In order to best prepair you for this, you will be working with the same partner all week on this book app project.
- Before you begin to even think about your application, take at least 30 minutes to make a team agreement with your partner. This is an essiential step to ensure a peaceful and productive week. You MUST answer the following questions in your agreement and include it in your README.md:
#### Logistical
  - What hours will you be available to communicate?
  - What platform will you use to communicate (ie. Slack, phone ...)?
  - How often will you take breaks?
  - What is your plan if you start to fall behind?
#### Cooperative
  - Make a list of each parson's strengths
  - How can you best utalize these strengths in the development of your application?
  - Knowing that every person in your team needs to understand the code, how do you plan to approach the day-to-day development?
#### Conflict Resolution
  - What will your team do if one person is pulling all the weight while the other person is not contributing?
  - What will your team do if one person is taking over the project and not letting the other member contribute? 
  - How will you approach each other and the challenge of building an application knowing that it is impossible for two people to be at the exact same place in understanding and skill level. 

### Repository Set-up

- One person from your team should create a new repository on GitHub named `book_app_front_end`. Make your partner(s) a contributor. Clone this repository into your `301` directory. You will be working in this same repository for labs 11 through 14, and you and your partner(s) will turn in the same repo of work.

### Netlify deployment

- You and your partner(s) should create an instance on Netlify. You only need one instance for the two of you. You will be working in this same instance for labs 11 through 14.
- From this point on, work on semantically-named non-main branches. Once your app is functioning correctly on your branch, make a PR to main and confirm functionality on your deployed site. Your deployed site **should not** contain any broken functionality.

### Feature Tasks

See the Trello board for your feature tasks for today's lab.

#### Front-End Tasks
1. Given the starter code, add the following features:

1. Wrap your `index.js` with Auth0 so that your application can use it.

1. Your `App` component should incorperate Auth0
- It should hold conditional logic to only render the `Login` component if the user if NOT logged in. 
- It should only render the `MyFavoriteBooks` component if the user is logged in.

1. A `Login` component should render a `LoginButton` component that when clicked, uses Auth0 to log the user in.

1. Add a `Profile` component that is only visible when the user is logged in. 

1. The `Profile` component should display information about the user such as name, profile picture and email address.

1. `App` should hold a `browserRouter` that contains two routes: `/` and `/profile`. 
  - The `/` route should either render the `Login` component or the `MyFavoriteBoooks` component depending on if the user is logged in
  - The `/profile` route should render the profile page.

1. Add a `LogoutButton` component and put it in the header but only render it if the user is logged in.

1. When the user clicks the logout button, it should log the user out of the application.

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
