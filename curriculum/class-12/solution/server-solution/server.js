'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

// this function comes directly from the jasonwebtoken docs
const client = jwksClient({
  // this url comes from your app on the auth0 dashboard 
  jwksUri: 'https://dev-4rwdhvtd.us.auth0.com/.well-known/jwks.json'
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

const app = express();
app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/favoriteBooks', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', _ => {
  console.log('We\'re connected!');
});

const PORT = process.env.PORT || 3001;
const Book = require('./models/book.js');

app.get('/books', getBooks);
app.post('/books', createBook);
app.delete('/books/:id', deleteBook);

function getBooks(request, response) {
  const token = request.headers.authorization.split(' ')[1];
  // verify that the jwt is valid
  jwt.verify(token, getKey, {}, function (err, user) {
    if (err) {
      response.send('invalid token');
    } else {
      const email = request.query.email;
      // get the books from mongo 
      Book.find({ email }, (err, books) => {
        if (err) return console.error(err);
        response.send(books);
      })
    }
  });
}

function createBook(request, response) {
  const token = request.headers.authorization.split(' ')[1];
  // verify that the jwt is valid
  jwt.verify(token, getKey, {}, async function (err, user) {
    if (err) {
      response.send('invalid token');
    } else {
      const { name, email, description, status } = request.body;
      const bookInfo = { name, email, description, status };
      const newBook = await Book.create(bookInfo);
      response.send(newBook);
    }
  });
}

function deleteBook(request, response) {
  const token = request.headers.authorization.split(' ')[1];
  // verify that the jwt is valid
  jwt.verify(token, getKey, {}, async function (err, user) {
    if (err) {
      response.send('invalid token');
    } else {
      const email = request.query.email;
      const id = request.params.id;

      await Book.findByIdAndDelete(id);

      response.send('success');


    }
  });
}



app.listen(PORT, () => console.log(`listening on ${PORT}`));
