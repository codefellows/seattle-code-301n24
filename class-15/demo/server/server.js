'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/bookModel');
const verifyUser = require('./auth.js'); // lab 14

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;
mongoose.connect(process.env.MONGO_URL)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected')
});

app.get('/test', (request, response) => {
  response.send('test request received')
})

// routes
app.get('/books', handleGetBooks); // lab 11
app.post('/books', handlePostBooks); // lab 12
app.delete('/books/:id', handleDeleteBooks); // lab 12
app.put('/books/:id', handlePutBooks); // lab 13
app.get('/user', handleGetUser); // lab 14

async function handleGetBooks(req, res) {
// instead of verifying the user email from the req.query we now get it from the verify user function
// in the future verifyUser could become middleware
  verifyUser(req, async (err, user) => {
    if (err) {
      res.send('invalid token');
    } else {
      try {
        const books = await Book.find({ email: user.email });
        console.log(user);
        res.send(books);
      } catch (error) {
        console.error(error);
        res.status(400).send('Could not find books');
      }
    }
  })
}

async function handlePostBooks(req, res) {
  verifyUser(req, async (err, user) => {
    if (err) {
      res.send('invalid token');
    } else {
      const { title, description, status } = req.body;
      try {
        const newBook = await Book.create({ ...req.body, email: user.email })
        res.status(200).send(newBook)
      } catch (e) {
        res.status(500).send('server error');
      }
    }
  })
}

async function handleDeleteBooks(req, res) {

  verifyUser(req, async (err, user) => {
    if (err) {
      res.send('invalid token');
    } else {
      const { id } = req.params;
      try {
        const book = await Book.findOne({ _id: id, email:user.email });
        if (!book) res.status(400).send('unable to delete book');
        else {
          await Book.findByIdAndDelete(id);
          res.status(204).send('bye book');
        }
      } catch (e) {
        res.status(500).send('server error');
      }
    }
  })
}

async function handlePutBooks(req, res) {

  verifyUser(req, async (err, user) => {
    if (err) {
      res.send('invalid token');
    } else {
      const { id } = req.params;
      try {
        const book = await Book.findOne({ _id: id, email: user.email });
        if (!book) res.status(400).send('unable to update book');
        else {
          const updatedBook = await Book.findByIdAndUpdate(id, { ...req.body, email: user.email }, { new: true });
          res.status(200).send(updatedBook);
        }
      } catch (e) {
        res.status(500).send('server error');
      }
    }
  })

}

// lab 14 - Auth
// this is a route to verify the user
function handleGetUser(req, res) {
  // verifyUser is defined in the auth.js
  verifyUser(req, (err, user) => {
    // "error-first" function
    if (err) {
      // if there is a problem verifying you
      res.send('invalid token');
    } else {
      // if there is not a problem verifying you
      res.send(user);
    }
  })
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
