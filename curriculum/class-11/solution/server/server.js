'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

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

app.listen(PORT, () => console.log(`listening on ${PORT}`));
