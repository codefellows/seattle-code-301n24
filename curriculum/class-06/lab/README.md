# Axios, Async and Await

## Configuration

- `.env` - with your PORT. Make sure this file is in your `.gitignore`.
- `README.md` - with documentation regarding your lab and its current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration. 
- `src` directory with teh following components:
  -`App` - this component should contain a `Pokemon` component
  -`Pokemon` - this component should display the results from the third party API passed down from the `App`

```sh
lab-06-repository
   ├── .env
   ├── .eslintrc.json
   ├── .gitignore
   ├── package-lock.json
   ├── package.json
   └── src
      |__app.js
      |__pokemon.js
```

## User Acceptance Tests


### Time Estimate

For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```markdown
Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
```

Add this information to your README.

### Overview

Today you will be building a React application that uses Axios to make a call to collect data from a thrid party API.

Every day you will have a new partner. You and your new partner(s) will spend the first 45 minutes reviewing each other's code from the previous day and planning out the days work on the whiteboard.

1. Draw the web request response cycle for the task at hand (about 15 minutes).
   1. Document the data flow: identify inputs and outputs for each part of the cycle.
   1. Outline the functions that support this data flow.
1. Do a formal code review of each person's code (15 minutes each).
   1. Open your partner's GitHub Pull Request on your laptop.
   1. Identify an area in the code that:
      1. you don't understand
      1. or seams overly complex
      1. or you see a way to improve
      1. or you want more information on
      1. or you really like or think is interesting
   1. Add kind comments or questions inline using the GitHub review feature.

You will then work independently for the rest of the day, implementing your plan, coding in your own repository, submitting your own pull request.

For this lab assignment, you will make a request from your front-end to a third party API and render the data you get back. 

Be sure to include these drawings in your README.md.

### Workflow

- We will be using the [Trello](https://trello.com/home){:target="_blank"} project management tool for the duration of this project.
- To maximize your experience with Trello, you should create a free Trello account by clicking on the `Sign Up` button.
- After creating an account, go to the [City Explorer Trello Board](https://trello.com/b/ZmD87LCC){:target="_blank"}, open the "... Show Menu" link, click the "... More" link, and then click "Copy Board". Before you create it, be sure to "Change" from Private to "Public" (and click "Yes, Make Board Public") so your instructional team can see your work. Now, click "Create" to add a copy to your personal account.
- This Trello board contains all of the features required to complete this lab assignment.
- In the Show Menu tab, click the "Search Cards" link and filter by lab to see the assignment for just the current day
- Review the user stories and analyze the feature requests and requirements in the lab.
- Within each story, note the acceptance criteria ("Given ... When ... Then...") and the checklist of feature tasks. Be careful to execute tasks in order as they are often dependencies of one another.
- During the day, check off tasks as you complete them, and move the story cards through the workflow.

### Repository set-up

- You should create a new repository on GitHub called `async_and_await`.
- From this point on, work on semantically-named non-main branches. Once your app is functioning correctly on your branch, make a PR to main and confirm functionality on your deployed site. Your deployed site **should not** contain any broken functionality.

### Netlify deployment

- Deploy your code to Netlify

### Feature Tasks

1. Create a React application using `create-react-app`
1. Add a button to the `App` that says, 'Collect Pokimen';
1. When the user clicks this button, this application should go to the pokemon API, collect data about pokemon and update the state in the `App` with that data
1. Send the state into the `Pokemon` compoent. The `Pokemon` component should not render anything until it has information to render.

## Documentation

_Your `README.md` must include:_

```md
# Project Name

**Author**: Your Name Goes Here
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource.

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
-->
```

## Submission Instructions

1. Complete your Feature Tasks for the lab
1. Create a PR back to the `main` branch of your repository, and merge it cleanly.
1. On Canvas, submit a link to your PR. Add a comment in your Canvas assignment which includes the following:
    - A link to the deployed version of your latest code.
    - A link to your public Trello board.
    - A question within the context of today's lab assignment
    - An observation about the lab assignment, or related 'Ah-hah!' moment
    - How long you spent working on this assignment
