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

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/favoriteBooks', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', _ => {
  console.log('We\'re connected!');
});

// step 1 and 2: create a schema and a model
const Book = require('./models/book.js');
// Book.remove();


app.get('/seed', seedBooks);

function seedBooks(request, response) {
  // step 3. add new entries to your model
  const silentPatient = new Book({ name: 'The Silent Patient', email: 'lena@codefellows.com', description: 'a women may or may not have killed her husband and a theapist is determind to make her talk to discover her secrets.', status: 'LIFE-CHANGING' });
  const growthMindset = new Book({ name: 'The Growth Mindset', email: 'brook@codefellows.com', description: 'Dweck coined the terms fixed mindset and growth mindset to describe the underlying beliefs people have about learning and intelligence. When students believe they can get smarter, they understand that effort makes them stronger. Therefore they put in extra time and effort, and that leads to higher achievement.', status: 'FAVORITE FIVE' });
  const blindAssassin = new Book({ name: 'The Blind Assassin', email: 'jb@codefellows.com', description: 'Margaret Atwood takes the art of storytelling to new heights in a dazzling novel that unfolds layer by astonishing layer and concludes in a brilliant and wonderfully satisfying twist. Told in a style that magnificently captures the colloquialisms and clichés of the 1930s and 1940s, The Blind Assassin is a richly layered and uniquely rewarding experience.', status: 'FAVORITE FIVE' });
  const fireNextTime = new Book({ name: 'The Fire Next Time', email: 'jb@codefellows.com', description: 'Described by The New York Times Book Review as “sermon, ultimatum, confession, deposition, testament, and chronicle…all presented in searing, brilliant prose,” The Fire Next Time stands as a classic of our literature.', status: 'LIFE-CHANGING' });

  // step 4. save the books
  silentPatient.save();
  growthMindset.save();
  blindAssassin.save();
  fireNextTime.save();

}

const PORT = process.env.PORT || 3001;

app.get('/books', getBooks);

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



app.listen(PORT, () => console.log(`listening on ${PORT}`));
