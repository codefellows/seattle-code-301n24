# Connecting to APIs

## Resources

[Location IQ Geocoding API](https://locationiq.com/docs#forward-geocoding){:target="_blank"} - Specifically, the "Search Forward/GeoCoding" section

[Superagent Docs](https://visionmedia.github.io/superagent/){:target="_blank"}

[WeatherBit API](https://www.weatherbit.io/api){:target="_blank"}

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
      |-- weather.js
```

## User Acceptance Tests

### Overview

Yesterday, you connected your server to the LocationIQ API to collect actual data and send it back to your front end. Today we are going to collect weather information based on the location that the user searches and send it to the front end.

You will need to build out your front-end to make this request and render the resulting information. You will also need to build out your back-end server to take the location information from the front-end, make a request to a weather API and respond to your front-end with that information.

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
- As you continue to work on features, make sure to check out your main branch and pull the changes after each pull request is merged. Then, create a new branch from your main branch and continue working. You may now begin your feature tasks for lab 8.

### Feature Tasks

See the Trello board for your feature tasks for today's lab.

#### Front-End Tasks
1. Add a function in your `Main` component.
- After you have gotten the response from the `/location` request, make another request to the `/weather` route on your server.
- Send the location object that was the response from the `/location` request back to your server as a query param when you make the request on the `/weather` route

1. Render the weather results to the page
- Make a `Weather` component to display the response from your server

1. Style your application using Bootstrap

1. STRETCH GOAL: add a `WeatherEachDay` component that renders as a child component of the `Weather` component. Send the daily weather to this component for it to render.

#### Back-End Tasks
1. Weather: As a user, I want to request current weather information at any location, so that I can learn more about the typical weather patterns in the area of interest.
- Example Response:

```sh
[
  {
    "forecast": "Partly cloudy until afternoon.",
    "time": "Mon Jan 01 2001"
  },
  {
    "forecast": "Mostly cloudy in the morning.",
    "time": "Tue Jan 02 2001"
  },
  ...
]
```

- Create a route with a method of get and a path of `/weather`. The callback should make a Superagent-proxied request to the Weather API for weather information. You will need to include in this request the latitude and longitude sent from the client in the query parameters.

- Add an environment variable to your server named WEATHER_API_KEY, and use it appropriately in your code.

- Using each weather object of the result, return an array of objects for each day of the response which contains the necessary information for correct client rendering. See the sample response.
Deploy your application.
- Confirm that your route is responding as expected by entering your deployed backend URL on the City Explorer app's welcome page. Then search for a location. Verify weather data is displayed properly.
- A constructor function will ensure that each object is created according to the same format when the server receives data. Ensure your code base uses a constructor function for this resource.

- Send the data as a response to your front-end.

1. STRETCH GOAL: Add an additional route for `/movies`
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


## Documentation
- You MUST have a `README.md` for both your front-end and your back-end

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
    - A link to the deployed version of your latest code for both the front-end and the back-end.
    - A link to your public Trello board.
    - A question within the context of today's lab assignment
    - An observation about the lab assignment, or related 'Ah-hah!' moment
    - How long you spent working on this assignment
