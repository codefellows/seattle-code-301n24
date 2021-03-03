'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const location = require('./location.json');

const restaurants = [
  {
    "restaurant": "Pink Door",
    "cuisines": "Italian",
    "locality": "Pike Place Market"
  },
  {
    "restaurant": "Serious Pie",
    "cuisines": "Pizza, Italian",
    "locality": "Belltown"
  },
  {
    "restaurant": "Salumi",
    "cuisines": "Sandwich, Deli, Italian",
    "locality": "Pioneer Square"
  },
  {
    "restaurant": "Lola",
    "cuisines": "Greek, Mediterranean, Pacific Northwest",
    "locality": "Hotel Andra"
  },
  {
    "restaurant": "Wild Ginger",
    "cuisines": "Vietnamese, Chinese, Asian",
    "locality": "Downtown"
  },
  {
    "restaurant": "Purple Cafe and Wine Bar",
    "cuisines": "Pacific Northwest, American",
    "locality": "Downtown"
  },
  {
    "restaurant": "Le Pichet",
    "cuisines": "Cafe, French",
    "locality": "Pike Place Market"
  },
  {
    "restaurant": "Cafe Campagne",
    "cuisines": "French, Cafe",
    "locality": "Pike Place Market"
  },
  {
    "restaurant": "Dahlia Lounge",
    "cuisines": "Seafood, Pacific Northwest",
    "locality": "Belltown"
  }
]

const PORT = process.env.PORT;

app.get('/location', (request, response) => {
  response.send(location);
});

app.get('/restaurants', (request, response) => {
  response.send(restaurants);
})

app.listen(PORT, () => console.log('server up on ', PORT));