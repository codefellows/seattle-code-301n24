'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const shoppingList = require('./data/listData.json');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/', (request, response) => {
  response.send('hello from the home route!!')
});

app.get('/shoppingList', (req, res) => {
  const type = req.query.type || "food";
  console.log("Query Params: ", req.query);
  console.log("Type: ", type);
  res.status(200).send(shoppingList[type]);
})

app.get('*', (req, res) => {
  res.status(404).send('page not found');
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
