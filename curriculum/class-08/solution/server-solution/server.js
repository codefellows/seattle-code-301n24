'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');

const app = express();
app.use(cors());

const PORT = process.env.PORT;

app.get('/location', async (request, response) => {
  console.log('in getLocation');
  const searchQuery = request.query.city;

  try{
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.GEODATA_API}&q=${searchQuery}&format=json&polygon_geojson=1`
    const superagentResults = await superagent.get(url);
    const cityResults = superagentResults.body[0];
    const locationObj = {
      serchQuery: searchQuery,
      formattedQuery: cityResults.display_name,
      latitude: cityResults.lat,
      longitude: cityResults.lon,
      image_url: `https://maps.locationiq.com/v2/staticmap?key=${process.env.GEODATA_API}&center=${cityResults.lat},${cityResults.lon}&size=800x800&zoom=12`
    }
    response.send(locationObj);
  } catch(err) {console.error(err)}
});

app.listen(PORT, () => console.log('server up on ', PORT));