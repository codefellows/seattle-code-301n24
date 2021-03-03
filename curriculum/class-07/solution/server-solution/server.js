'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const location = require('./assets/location.json');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/location', handleLocation);

function handleLocation(request, response) {
  const city = request.query.city;
  const finalLocationObj = new Location(location[0], city);
  console.log('in location with', {finalLocationObj})
  response.send(finalLocationObj);
}

function Location(locationObj, searchQuery) {
  this.searchQuery = searchQuery;
  this.formattedQuery = locationObj.display_name;
  this.latitude = locationObj.lat;
  this.longitude = locationObj.lon;
  this.image_url = 'https://www.knkx.org/sites/kplu/files/styles/medium/public/201405/Screen_Shot_2014-05-04_at_8.01.08_PM.png';
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));