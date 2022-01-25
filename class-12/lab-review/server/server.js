'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());

// Mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', _ => {
  console.log('We\'re connected!');
});
const Book = require('./models/book.js');


// routes
app.get('/books', getBooks);
app.post('/books', createBook);
app.delete('/books/:id', deleteBook);


// route handlers
async function getBooks(request, response) {

  try {
    const books = await Book.find({ email: request.query.email });
    response.send(books);
  } catch (error) {
    console.error(error);
    response.status(400).send('Could not find books');
  }
}

async function createBook(request, response) {

  try {
    const book = await Book.create(request.body);
    response.send(book);
  } catch (error) {
    console.error(error);
    response.status(400).send('unable to create book');
  }
}

async function deleteBook(request, response) {
  try {

    // get the user's email
    const email = request.query.email;

    // get the book's id
    const id = request.params.id;


    // with that info find the book
    const book = await Book.findOne({ _id: id, email: email });

    if (!book) {
      response.status(400).send('unable to delete book');
      return;
    }

    await Book.findByIdAndDelete(id);

    response.send('success');



  } catch (error) {
    console.error(error);
    response.status(400).send('unable to delete book');
  }
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
