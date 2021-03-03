'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); 

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!');
});

// step 1 and 2: create a schema and a model
const Book = require('./model');

const PORT = process.env.PORT || 3001;

app.get('/books', getBooks);
app.post('/books', addBook);

function getBooks(request, response) {
  // get the books from mongo 
  Book.find(function (err, book) {
    if (err) return console.error(err);
    response.send(book);
  })
}

function addBook(request, response) {
  // add a book to mongo
  const { name, description, genre } = request.body;
  const newBook = new Book({name, description, genre:genre.toUpperCase()});
  newBook.save().then(response.send(newBook))

}

app.listen(PORT, () => console.log(console.log(`listening on ${PORT}`)));