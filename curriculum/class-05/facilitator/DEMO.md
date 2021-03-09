# Demos: Deployment Workshop

## City Explorer Lite

`demo/city-explorer-lite`

Build the HTML and CSS scaffolding of City Explorer

- It needs a map, a weather template, and a container
  - Build a .json file that contains some weather data
- Build an app.js file that reads and renders JSON data
  - Revisit the ingestion of a `.json` file for data using `$.ajax()`
  - Revisit the use of a constructor to prepare the data for rendering
  - Revisit the use of Mustache.js to render the data into the markup.

## Deployment

`demo/deployment`

Build and deploy a simple express server

- Follow the step by step instructions found in the [Student Facing README](../README.md)
- It's important to spend a minimal amount of time on the build itself.
  - Describe what you're doing, without going into the details, saying things like
    - "Let's pull in a library called 'express' which allows us to create a service that we can use to write functions that will send data to the user when they visit our website"
    - "Here, we'll create a 'route' which looks like an event listener. When the user visits '/data' in their browser, we will send them a simple JSON object"
  - Much more details an analysis will happen in Class 06
- Once you build the server, start it locally
  - Visit a static route to see index.html served
  - Visit your data route to see JSON
  - Visit a random route to see the 404 message
- Deploy it to Heroku
- Watch it download and install, and then visit the site.
- Change the static content to the above city-explorer demo
- Push to main
- Watch Heroku re-deploy the site
