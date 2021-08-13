
const mongoose = require('mongoose');

require('dotenv').config();


// hey mongoose, connect to the database running somewhere
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// I'm intentionally requiring this model AFTER I run mongoose.connect
const Cat = require('./models/cat');

seedCats();
// clearCats();

async function clearCats() {
  await Cat.deleteMany({});
  mongoose.disconnect();
}

function seedCats() {
  // seed the database with some cats, so I can retrieve them
  const myCat = new Cat({
    name: 'Genevieve',
    color: 'orange',
    hasClaws: false,
    favoriteActivities: [
      { activityName: 'playing with a ball of yarn' },
      { activityName: 'sleeping' }, { activityName: 'zoomies' }
    ]
  });
  myCat.save(function (err) {
    if (err) console.error(err);
    else console.log('saved the cat');

    mongoose.disconnect();
  });
}

