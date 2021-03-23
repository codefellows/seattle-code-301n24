'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const weather = require('./assets/weather.json');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/weather', handleLocation);

function handleLocation(request, response) {
  const lat = request.query.lat;
  const lon = request.query.lon;
  const finalWeatherObj = new Weather(weather[0], lat, lon);
  console.log('in weather with', {finalWeatherObj})
  response.send(finalWeatherObj);
}

function Weather(weather, lat, lon) {
  this.searchQuery = searchQuery;
  this.formattedQuery = weather.display_name;
  this.latitude = weather.lat;
  this.longitude = weather.lon;
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
