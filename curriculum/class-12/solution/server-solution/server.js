'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/favoriteBooks', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we\'re connected!');
});

// step 1 and 2: create a schema and a model
const User = require('./model/User.js');

// step 3. add new entries to your model
const lena = new User({email: 'applena@gmail.com', books: [
  { name: 'The Silent Patient', description: 'a women may or may not have killed her husband and a theapist is determind to make her talk to discover her secrets.', status: 'LIFE-CHANGING' },
  { name: 'The Hitchhickers Guide To The Gallaxy.', description: 'earth is destroyed and folks try to determine the ultimate question to the universe and everything', status: 'RECCOMENDED TO ME'}
]});

const codefellows = new User({email: 'lena@codefellows.com', books: [
  { name: 'The Growth Mindset', description: 'Dweck coined the terms fixed mindset and growth mindset to describe the underlying beliefs people have about learning and intelligence. When students believe they can get smarter, they understand that effort makes them stronger. Therefore they put in extra time and effort, and that leads to higher achievement.', status: 'FAVORITE FIVE' },
  { name: 'What Great Trainers Do', description: 'What Great Trainers Do: The Ultimate Guide to Delivering Engaging and Effective Learning', status: 'RECCOMENDED TO ME'}
]})


// step 4: save the entries into the database
lena.save()
codefellows.save()

const PORT = process.env.PORT || 3001;

app.get('/books', getBooks);

function getBooks(request, response) {
  const email = request.query.email;
  console.log({email});
  // get the books from mongo 
  User.find({ email }, function (err, user) {
    console.log('user in find', {user})
    if (err) return console.error(err);
    response.send(user[0].books);
  })
}

app.listen(PORT, () => console.log(console.log(`listening on ${PORT}`)));
