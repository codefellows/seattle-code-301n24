'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
// import our library that we are going to use to interact (make queries and stuff) with our mongo db
const mongoose = require('mongoose');
const Cat = require('./models/cat');

const app = express();

app.use(cors());
app.use(express.json()); // needed to parse request body

// connecting to the cloud database called cats-database via the connection string in the .env
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

// optional method that sends us a message
// more complicated but gives you a confirmation
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // start your server and look for the console.log in terminal to confirm connection
  console.log('Mongoose is connected')
});

// all cats
app.get('/cats', async (req, res) => {
  const cats = await Cat.find({});
  res.send(cats);
});

// one cat, by id
// NOTE: not using this on front end at the moment,
// but it's common to have in a complete API
app.get('/cats/:id', async (req, res) => {
  const cat = await Cat.findById(req.params.id);
  res.send(cat);
});

// create a cat
app.post('/cats', async (req, res) => {
  const { name, color, hasClaws } = req.body;
  const newCat = await Cat.create({ name, color, hasClaws });
  res.send(newCat);
});

// delete a cat
app.delete('/cats/:id', async (req, res) => {
  await Cat.findByIdAndDelete(req.params.id);
  res.send('success!');
});

// update a cat
app.put('/cats/:id', async (req, res) => {
  const { name, color, hasClaws } = req.body;
  // Model.findByIdAndUpdate(id, update, options)
  const updatedCat = await Cat.findByIdAndUpdate(req.params.id, { name, color, hasClaws }, { new: true, overwrite: true })
  // new: bool - true to return the modified document rather than the original. defaults to false
  // overwrite=false This prevents you from accidentally overwriting the document.
  res.send(updatedCat);
});

app.listen(3001, () => console.log('app listening on 3001'));
