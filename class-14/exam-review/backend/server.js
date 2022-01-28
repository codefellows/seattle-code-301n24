'use strict';

// requires
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
// const SnackModel = require('./models/snack-model');
const SnackHandlers = require('./snack-handlers');


const PORT = process.env.PORT || 3002;

// .use
app.use(cors());
// allows to read the request.body
app.use(express.json());

// connect the mongo database
mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// optional debugging technique
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose connected'));

app.get('/', (request, response) => {
  response.send('testing testing...?')
});
// creates a new snack
app.post('/snacks', SnackHandlers.create);
// get all the snacks
app.get('/snacks', SnackHandlers.getAll);
// gets one snack
app.get('/snacks/:id', SnackHandlers.getOne);
// delete a snack
app.delete('/snacks/:id', SnackHandlers.delete);
// TODO: if there is time, update a snack

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
