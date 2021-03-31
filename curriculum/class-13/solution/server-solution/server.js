'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); 

const handleNotFound = require('./modules/404-NotFound');
const deleteBook = require('./modules/deleteBook.js');
const getBooks = require('./modules/getBooks');
const addBook = require('./modules/addBook');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!');
});

const PORT = process.env.PORT || 3001;

app.get('/books', getBooks);
app.post('/books', addBook);
app.delete('/books/:id', deleteBook);
app.use('*', handleNotFound);

app.listen(PORT, () => console.log(console.log(`listening on ${PORT}`)));
