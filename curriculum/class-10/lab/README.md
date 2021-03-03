# Advanced Topics

## Resources

[Yelp API Docs](https://www.yelp.com/developers/documentation/v3/business_search)

[The Movie DB API Docs](https://developers.themoviedb.org/3/getting-started/introduction)

## Configuration

### Server Code

- `.env` - with your PORT and API keys. Make sure this file is in your `.gitignore` so your keys are not pushed to GitHub.
- `README.md` - with documentation regarding your lab and its current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration
- Note that the `package-lock.json` file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.

```sh
lab-09-repository
   ├── data
   |    └── schema.sql
   ├── .env
   ├── .eslintrc.json
   ├── .gitignore
   ├── package-lock.json
   ├── package.json
   └── server.js
   ├── modules
   |    └── location.js
   |    └── weather.js  
```

### Front-End Code

- `README.md` - with documentation regarding your lab and its current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter
- `package.json` - with all dependencies and any associated details related to configuration
- Note that the `package-lock.json` file is automatically created when dependencies are installed and ensures that future installations of the project use the same versions of the dependencies.

```sh
lab-09-repository
   ├── .env
   ├── .eslintrc.json
   ├── .gitignore
   ├── package-lock.json
   ├── package.json
   └── index.js
   |-- app.js
   |-- header.js
   |-- main.js
   |-- footer.js
   |-- map.js
   |-- weather.js
   |-- weatherEachDay.js
   |-- movies.js
   |-- movie.js
```

## User Acceptance Tests

### Overview

It can be costly to hit an API over and over. For today's lab, you will create an object in your server code to hold the location information for each city that is searched. That way your application can first check to see if you already have information about that city and, if you do, send you the data from storage object. 

You will also collect data about movies and display the results in a `Movies` component.

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

### Heroku Deployment for your Server and Netlify Deployment for your React Front-End

- Your deployed sites **should not** contain any broken functionality.
- As you continue to work on features, make sure to check out your main branch and pull the changes after each pull request is merged. Then, create a new branch from your main branch and continue working. You may now begin your feature tasks for lab 9.

### Feature Tasks

See the Trello board for your feature tasks for today's lab.

#### Server Code 

1. Create a storage object in your server code
- When the user searches for a city, your code should first check to see if that city and it's location data are in your storage object. 
- If it is, send the data from your object
- if it isn't, use superagent to request information from LocationIQ

1. Add an additional route for `/movies`
- Add an environment variable to your server named MOVIE_API_KEY, and use it appropriately in your code.
- Create a route with a method of get and a path of `/movies`. The callback should make a Superagent-proxied request to The Movie Database API using the necessary location information.
Create a corresponding constructor function for the result.
- For each movie of the result, return an object which contains the necessary information for correct client rendering. See the sample response.
- Use your existing error handler function.
- Redeploy your application.
- Example Response:
```javascript
[
  {
    "title": "Sleepless in Seattle",
    "overview": "A young boy who tries to set his dad up on a date after the death of his mother. He calls into a radio station to talk about his dad’s loneliness which soon leads the dad into meeting a Journalist Annie who flies to Seattle to write a story about the boy and his dad. Yet Annie ends up with more than just a story in this popular romantic comedy.",
    "average_votes": "6.60",
    "total_votes": "881",
    "image_url": "https://image.tmdb.org/t/p/w500/afkYP15OeUOD0tFEmj6VvejuOcz.jpg",
    "popularity": "8.2340",
    "released_on": "1993-06-24"
  },
  {
    "title": "Love Happens",
    "overview": "Dr. Burke Ryan is a successful self-help author and motivational speaker with a secret. While he helps thousands of people cope with tragedy and personal loss, he secretly is unable to overcome the death of his late wife. It's not until Burke meets a fiercely independent florist named Eloise that he is forced to face his past and overcome his demons.",
    "average_votes": "5.80",
    "total_votes": "282",
    "image_url": "https://image.tmdb.org/t/p/w500/pN51u0l8oSEsxAYiHUzzbMrMXH7.jpg",
    "popularity": "15.7500",
    "released_on": "2009-09-18"
  },
  ...
]
```
1. STRETCH GOAL: Add an additional route for `/restaurants`
- Add an environment variable to your server named YELP_API_KEY, and use it appropriately in your code.
- Create a route with a method of get and a path of `/restaurants`. The callback should make a Superagent-proxied request to The Yelp API using the necessary location information.
Create a corresponding constructor function for the result.
- For each restaurant of the result, return an object which contains the necessary information for correct client rendering. See the sample response.
- Use your existing error handler function.
- Redeploy your application.
- Example Response:
```javascript
[
  {
    "name": "Pike Place Chowder",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ijju-wYoRAxWjHPTCxyQGQ/o.jpg",
    "price": "$$   ",
    "rating": "4.5",
    "url": "https://www.yelp.com/biz/pike-place-chowder-seattle?adjust_creative=uK0rfzqjBmWNj6-d3ujNVA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=uK0rfzqjBmWNj6-d3ujNVA"
  },
  {
    "name": "Umi Sake House",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/c-XwgpadB530bjPUAL7oFw/o.jpg",
    "price": "$$   ",
    "rating": "4.0",
    "url": "https://www.yelp.com/biz/umi-sake-house-seattle?adjust_creative=uK0rfzqjBmWNj6-d3ujNVA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=uK0rfzqjBmWNj6-d3ujNVA"
  },
  ...
]
```

#### Front-End Code
1. Create a component for `Movies`
- Include the `Movies` component in your `Main` component
- After your `Main` component collects information on the weather, make a request to the server to collect information for movies on a `/movies` route.
- Send the location object as a query param on the `/movies` route.
- Send the response into your `Movies` component and render it

## Documentation
**You MUST have a README.md for both your front-end repo and your back-end repo**

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
1. Create a PR back to the `master` branch of your repository, and merge it cleanly.
1. On Canvas, submit a link to your PR. Add a comment in your Canvas assignment which includes the following:
    - A link to the deployed version of your latest code.
    - A link to your public Trello board.
    - A question within the context of today's lab assignment
    - An observation about the lab assignment, or related 'Ah-hah!' moment
    - How long you spent working on this assignment
