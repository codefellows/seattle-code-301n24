'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const Cat = require('./models/catModel');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3002;

// making a database called cats-database
mongoose.connect('mongodb://localhost:27017/cats-database', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected')
});

app.get('/', (request, response) => {
  response.send('Hello from the home route!');
});

app.listen(PORT, () => console.log('Listening on PORT ', PORT));
