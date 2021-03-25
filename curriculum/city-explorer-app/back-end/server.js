'use strict';

// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');

// Our Dependencies
const weather = require('./modules/weather.js');
const yelp = require('./modules/yelp.js');
const movies = require('./modules/movies.js');

// Application Setup
const PORT = process.env.PORT;
const app = express();
app.use(cors());

// Route Definitions
app.get('/weather', weatherHandler);
app.get('/yelp', yelpHandler);
app.get('/movies', moviesHandler);

app.use('*', notFoundHandler);

function weatherHandler(request, response) {
  const { lat, lon } = request.query;
  weather(lat, lon)
    .then(summaries => sendJson(summaries, response))
    .catch((error) => {
      console.error(error);
      response.status(500).send('Sorry. Something went wrong!')
    });
}

function yelpHandler(request, response) {
  const location = request.query.search_query;
  yelp(location, request.query.page)
    .then(reviews => sendJson(reviews, response))
    .catch((error) => {
      console.error(error);
      response.status(500).send('Sorry. Something went wrong!')
    });
}

function moviesHandler(request, response) {
  const location = request.query.city;
  movies(location)
    .then(moviesList => sendJson(moviesList, response))
    .catch((error) => {
      console.error(error);
      response.status(500).send('Sorry. Something went wrong!')
    });
}

function sendJson(data, response) {
  response.status(200).json(data);
}

function notFoundHandler(request, response) {
  response.status(404).send('huh?');
}

app.listen(PORT, () => console.log(`Server up on ${PORT}`));
