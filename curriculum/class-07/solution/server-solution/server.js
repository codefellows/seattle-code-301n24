'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const weather = require('./assets/weather.json');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/weather', handleWeather);
app.use('*', (request, response) => response.status(404).send('page not found'));

function handleWeather(request, response) {
  try{
      const weatherArray = weather.data.map(day => new Weather(day));
      response.status(200).send(weatherArray);
    } catch(error) {
      errorHandler(error, response);
    }

  }

function Weather(day) {
  this.date = day.valid_date
  this.description = day.weather.description
}

function errorHandler(error, response) {
  console.log(error);
  response.status(500).send('something went wrong');
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
