'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!');
});

// step 1 and 2: create a schema and a model
const Book = require('./model');

// step 3. add new entries to your model
const book1 = new Book({ name: 'The Silent Patient', description: 'a women may or may not have killed her husband and a theapist is determind to make her talk to discover her secrets.', genre: 'MYSTERY' });

const book2 = new Book({ name: 'The Hitchhickers Guide To The Gallaxy.', description: 'earth is destroyed and folks try to determine the ultimate question to the universe', genre: 'FICTION'});

// step 4: save the entries into the database
book1.save()
book2.save()

const PORT = process.env.PORT || 3001;

app.get('/books', getBooks);

function getBooks(request, response) {
  // get the books from mongo 
  Book.find(function (err, book) {
    if (err) return console.error(err);
    response.send(book);
  })
}

app.listen(PORT, () => console.log(console.log(`listening on ${PORT}`)));