const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const Cat = require('./models/cat');

async function seed() {
  // seed the database with some cats, so I can retrieve them
  const myCat = new Cat({
    name: 'Genevieve',
    color: 'orange',
    hasClaws: false,
  });
  myCat.save(function (err) {
    if (err) console.error(err);
    else console.log('saved Genevieve');

  });

  // alternately...
  await Cat.create({
    name: 'Mr. P',
    color: 'calico',
    hasClaws: true,
  })

  console.log('saved Mr. P');

  mongoose.disconnect();
}

seed();