'use strict';

const mongoose = require('mongoose');
require('dotenv').config();
const Cat = require('./models/cat');

mongoose.connect(process.env.DATABASE_URL);

// seed the database with some cats, so I can retrieve them
// a function that connects to the db, adds some cats and then disconnects from the db
async function seed() {
  // option 1
  const myCat = new Cat({
    name: 'Jimmy John',
    color: 'orange',
    hasClaws: false,
    location: 'Seattle',
  });
  await myCat.save(function (err) {
    if (err) console.error(err);
    else console.log('saved Jimmy John');
  });

  // alternately...
  await Cat.create({
    name: 'Jersey  Mike',
    color: 'calico',
    hasClaws: true,
    location: 'Paris'
  });

  console.log('saved Jersey Mike');

  mongoose.disconnect();
}

seed();

// to seed the db:
// make sure your server is not running
// in terminal go to project root
// type `node seed.js` in your terminal
// go to mongo atlas, view collections and look for your new cats