# APIs

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


## User Acceptance Tests

### Overview

For this lab assignment, you will use the search query from the user to fetch real data data from the Location IQ API. You will format that data appropriately following the example and send it back to the front-end to be displayed

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

For this lab assignment, your front-end will make a request to your back-end which will then make a request to an API for information and send that information back to your front-end.

Be sure to include these drawings in your README.md.

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

### Code Review

You and your new partner(s) will spend the first 45 minutes reviewing each other's code from the previous day and planning out the days work on the whiteboard.

1. Draw the web request response cycle for the task at hand (about 15 minutes).
   1. Document the data flow: identify inputs and outputs for each part of the cycle.
   1. Outline the functions that support this data flow.
1. Do a formal code review of each person's code (15 minutes each).
   1. Open your partner's GitHub Pull Requet on your laptop.
   1. Identify an area in the code that:
      1. you don't understand
      1. or seams overly complex
      1. or you see a way to improve
      1. or you want more information on
      1. or you really like or think is interesting
   1. Add kind comments or questions inline using the GitHub review feature.

You will then work independently for the rest of the day, implementing your plan, coding in your own repository, submitting your own pull request.

### Front-End Netlify Deployment

- Your deployed site **should not** contain any broken functionality. You may now begin your feature tasks for lab 8.
- As you continue to work on features, make sure to check out your main branch and pull the changes after each pull request is merged. Then, create a new branch from your main branch and continue working. Update your `README.md` file to reflect the changes you are making as you work through the feature tasks today.

### Back-End Heroku Deployment

- Your deployed site **should not** contain any broken functionality. You may now begin your feature tasks for lab 8.
- As you continue to work on features, make sure to check out your main branch and pull the changes after each pull request is merged. Then, create a new branch from your main branch and continue working. Update your `README.md` file to reflect the changes you are making as you work through the feature tasks today.

### Feature Tasks

See the Trello board for your feature tasks for today's lab.

#### Server 
1. Locations: As a user, I want to enter the name of a location and have real data presented to me about that location.
- Example Response:
```sh
{
  "search_query": "seattle",
  "formatted_query": "Seattle, WA, USA",
  "latitude": "47.606210",
  "longitude": "-122.332071"
  "image_url": `https://maps.locationiq.com/v2/staticmap?key=${process.env.GEODATA_API}&center=${cityResults.lat},${cityResults.lon}&size=800x800&zoom=12`
}
```
- Add an environment variable to your server named GEOCODE_API_KEY, and use it appropriately in your code.
- Your app should have a route with a method of get and a path of /location. Update the route callback to invoke a function. The function should make a Superagent-proxied request to the geocoding API.
- Return an object which contains the necessary information for correct client rendering. See the sample response.
- Deploy your application.
Confirm that your route is responding as expected. Then search for a location.

#### Front-End
1. Make a React application with the following components: 
   - app.js => should contain a `Header`, `Main`, and `Footer` component
   - main.js => should contain a search form where the user can enter a city as well as `Map` component
   - map.js => should display the name of the searchQuery as well as an image of the city (today it will be the same image regardless of the city that was searched)

1. STRETCH: make the search form its own component. Pass the city name up to the main.js.

## Documentation
-You must have a `README.md` for both your server and your website repos.

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
    - A link to the deployed version of your latest code on both Netlify and Heroku.
    - A link to your public Trello board.
    - A question within the context of today's lab assignment
    - An observation about the lab assignment, or related 'Ah-hah!' moment
    - How long you spent working on this assignment
