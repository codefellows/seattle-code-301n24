'use strict';

// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const superagent = require('superagent');
const cors = require('cors');

// Application Setup
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());

// Route Definitions
app.get('/location', locationHandler);
app.get('/weather', weatherHandler);
app.get('/movies', moviesHandler);

app.use('*', notFoundHandler);

const storage = {};
console.log({storage});

// -------------------------------------------
// LOCATIONS
// -------------------------------------------

async function locationHandler(request, response) {
  const searchQuery = request.query.city;
  console.log('in getLocation', request.query.city, storage.searchQuery);

  if(storage.searchQuery === undefined){
    console.log('getting location from API')
    try{
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.GEODATA_API}&q=${searchQuery}&format=json&polygon_geojson=1`
      const superagentResults = await superagent.get(url);
      const cityResults = superagentResults.body[0];
      const locationObj = {
        searchQuery: searchQuery,
        formattedQuery: cityResults.display_name,
        latitude: cityResults.lat,
        longitude: cityResults.lon,
        image_url: `https://maps.locationiq.com/v2/staticmap?key=${process.env.GEODATA_API}&center=${cityResults.lat},${cityResults.lon}&size=800x800&zoom=12`
      }
      console.log('from API', {locationObj})
      storage[searchQuery] = locationObj.searchQuery;
      response.send(locationObj);
    } catch(err) {console.error(err)}
  } else {
    console.log('getting location from storage')
    response.send(storage.searchQuery);
  }
}

// -------------------------------------------
// WEATHER
// -------------------------------------------
async function weatherHandler(request, response) {
  // const locationObj = JSON.parse(request.query)
  console.log('in weather', request.query)
  const searchQuery = request.query.searchQuery;
  // Alternatively: const {latitude, longitude} = request.query;
  console.log({searchQuery});

  try{

    // const url = 'http://api.weatherbit.io/v2.0/forecast/daily';
    const url = 'http://api.weatherbit.io/v2.0/forecast/daily'
    const queryParams = {
      key: process.env.WEATHER_API_KEY,
      city: searchQuery,
      days: 5,
    };
    const superagentResults = await superagent.get(url).query(queryParams);
    // console.log('superagent weather', superagentResults.body)
    const weatherArray = superagentResults.body.data.map(day => new Weather(day));
    // console.log({weatherArray})
    response.send(weatherArray);

  } catch(err) {
    console.error(err);
  }
}

function Weather(day) {
  this.forecast = day.weather.description;
  this.time = day.datetime;
}

// -------------------------------------------
// MOVIES
// -------------------------------------------

function moviesHandler(request, response) {
  const {searchQuery} = request.query;

  const queryParams = {
    api_key:process.env.MOVIE_API_KEY,
    langeuage:'en-US',
    page: 1,
    query: searchQuery,
  };

  const url = 'https://api.themoviedb.org/3/search/movie/';
  return superagent.get(url)
    .query(queryParams)
    .then(data => {
      const movies = data.body.results.map(movie => {
        return new Movie(movie);
      });
      response.send(movies);
    })
    .catch(err => console.error(err));
}

function Movie(movie) {
  this.tableName = 'movies';
  this.title = movie.title;
  this.overview = movie.overview;
  this.average_votes = movie.vote_average;
  this.total_votes = movie.vote_count;
  this.image_url = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
  this.popularity = movie.popularity;
  this.released_on = movie.release_date;
  this.created_at = Date.now();
}

// -------------------------------------------
// EXPRESS RENDERERS
// -------------------------------------------

function notFoundHandler(request, response) {
  response.status(404).send('huh?');
}

function startServer() {
  app.listen(PORT, () => console.log(`Server up on ${PORT}`));
}

startServer();