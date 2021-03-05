# Node, npm, and Express

Today, you will begin building an API server, which will provide data for the [City Explorer Application](https://codefellows.github.io/code-301-guide/curriculum/city-explorer-app/front-end/), allowing a user to search for a location, present a Map, as well as interesting information about the area, all using data from APIs that your server will fetch and manage.

## Resources

[Node JS Docs](https://nodejs.org/en/)

[NPM JS Docs](https://docs.npmjs.com/)

[Express JS Docs](http://expressjs.com/en/4x/api.html)

[dotenv Docs](https://www.npmjs.com/package/dotenv)

## Server Configuration

- `data` directory - with [location.json](https://codefellows.github.io/code-301-guide/curriculum/class-06/lab/starter-code/data/location.json) and [weather.json](https://codefellows.github.io/code-301-guide/curriculum/class-06/lab/starter-code/data/weather.json)
- `.env` - with your PORT. Make sure this file is in your `.gitignore`.
- `README.md` - with documentation regarding your lab and its current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration. The dependencies needed for today's lab include: `express`, `cors`, and `dotenv`.
- Note that the `package-lock.json` file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.

```sh
lab-06-repository
   ├── data
   |     ├── weather.json
   |     └── location.json
   ├── .env
   ├── .eslintrc.json
   ├── .gitignore
   ├── package-lock.json
   ├── package.json
   └── server.js
```

## Website Configuration

- `README.md` - with documentation regarding your lab and its current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration. The dependencies needed for today's lab include: `axios`, `react-bootstrap`.

```sh
lab-07-react-repository
   ├── .eslintrc.json
   ├── .gitignore
   ├── package-lock.json
   ├── package.json
   └── src.js
      |-- app.js
      |-- footer.js
      |-- header.js
      |-- main.js
      |-- index.js
      |-- map.js
```

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

You will be building a stand-alone back end which will interact with a React front end that you will also be building. You will request data third-party APIs, modify the data as needed, and send the data to the client to be displayed in the browser.

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

You will have access to view the code base for the client, but will not be able to modify it in any way.

For this lab assignment, you will convert a location entered by the user into a latitude and longitude, then use those values to request weather information for that location. 

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

- You should create a new repository on GitHub called `city_explorer_api`.
- Create another reposition on GitHub called `city_explorer`
- From this point on, work on semantically-named non-main branches. Once your app is functioning correctly on your branch, make a PR to main and confirm functionality on your deployed site. Your deployed site **should not** contain any broken functionality.

### Netlify deployment

- Deploy your React appliction to Netlify

### Feature Tasks

See the Trello board for your feature tasks for today's lab.

### Server
1. Set up your repo:
- data directory - containing location.json
- .env - with your PORT. Make sure this file is in your .gitignore.
- README.md - with documentation regarding your lab and its current state of development. Check the "documentation" section below for more details on how that should look AT MINIMUM
- .gitignore - with standard NodeJS configurations
- .eslintrc.json - with Code 301 course standards for the linter
- package.json - with all dependencies and any associated details related to configuration. The dependencies needed for today's lab include: express, dotenv, and cors.
- Note that the package-lock.json file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.

1. Locations: As a user of City Explorer, I want to enter the name of a location so that I can see data about the area of interest to me.
- A constructor function will ensure that each object is created according to the same format when your server receives the external data. Ensure your code base uses a constructor function for this resource.
- Return an object which contains the necessary information for correct client rendering. See the sample response.
- Confirm that your route is responding as expected by entering your deployed backend URL on the City Explorer app's welcome page. Then search for a location. You should see the map, but not any other data yet.

1. Errors: As a user, I want clear messages if something goes wrong so I know if I need to make any changes or try again in a different manner.
- Create a function to handle errors from any API call.
- Send a status of 500 and an error message to the client.
- Confirm that your route is responding as expected. Then search for an invalid location, by submitting an empty string. The network inspector panel should show a 500 for the response.

### Website
1. Set up your repo:
- README.md - with documentation regarding your lab and its current state of development. Check the "documentation" section below for more details on how that should look AT MINIMUM
- .gitignore - with standard NodeJS configurations
- .eslintrc.json - with Code 301 course standards for the linter
- package.json - with all dependencies and any associated details related to configuration. The dependencies needed for today's lab include: axios and react-bootstrap.
- Your `App` component should contain `Header`, `Main`, and `Footer` components.
- Your `Main` component should contain a `Map` component where the results from server will be displayed.

1. Create a form in your `Main` component that accepts the name of a city
- Use react-bootstrap to create this form and update the search query in state

1. Using the axios library with a method of GET, send the searchQuery from state to your express server on the `/location` route.

1. Update state with the response that you get from your server and send that updated state into your `Map` component to render

1. In the `Map` component, render the location props.

## Documentation
**Each repo will need its own README.md**

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
    - A link to the deployed version of your latest React code.
    - A Pull request from your `city_explorer_api`
    - A link to your public Trello board.
    - A question within the context of today's lab assignment
    - An observation about the lab assignment, or related 'Ah-hah!' moment
    - How long you spent working on this assignment
