'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/', (request, response) => {
  response.send('Welcome to the home route!');
});

app.get('/photos', getPhotos);

async function getPhotos(request, response) {
  const searchQuery = request.query.searchQuery;
  const url = `https://api.unsplash.com/search/photos/?client_id=${process.env.UNSPLASH_API_KEY}&query=${searchQuery}`

  const photoResponse = await axios.get(url);
  const photoArr = photoResponse.data.results.map(photo => new Photo(photo));
  response.status(200).send(photoArr);
}

class Photo {
  constructor(photoObj) {
    this.img_url = photoObj.urls.regular;
    this.original_image = photoObj.links.self;
  }
}

// app.get("/weather", (req, res) => {
//   // call the weather API, format the data and send it back to the client
// })
// app.get('/movies', )

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
