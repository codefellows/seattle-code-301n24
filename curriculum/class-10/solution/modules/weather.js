'use strict';

const superagent = require('superagent');
let cache = require('./cache.js');

module.exports = getWeather;

function getWeather(latitude, longitude) {
  const key = latitude + longitude;
  const url = 'http://api.weatherbit.io/v2.0/forecast/daily';
  const queryParams = {
    key: process.env.WEATHER_API_KEY,
    lang: 'en',
    lat: latitude,
    lon: longitude,
    days: 5,
  };

  if (cache[key] && (Date.now() - cache[key].timestamp > 5)) {
    console.log('Cache hit', cache);
  } else {
    console.log('Cache miss', cache)
    cache[key] = superagent.get(url)
    .query( queryParams )
    .then(response => parseWeather(response.body));
    cache[key].timestamp = Date.now();
  }
  
  return cache[key];
}

function parseWeather(weatherData) {
  try {
    const weatherSummaries = weatherData.data.map(day => {
      return new Weather(day);
    });
    return Promise.resolve(weatherSummaries);
  } catch (e) {
    return Promise.reject(e);
  }
}

class Weather {
  constructor(day) {
    this.forecast = day.weather.description;
    this.time = day.datetime;
  }
}
