require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

const Book = require('./models/bookModel.js');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', _ => {
  console.log('We\'re connected!');

  seedBooks();


  async function seedBooks() {
    console.log('seeding books...');

    await Book.create({ name: 'The Silent Patient', email: 'hexx@codefellows.com', description: 'a women may or may not have killed her husband and a theapist is determind to make her talk to discover her secrets.', status: 'LIFE-CHANGING' });

    await Book.create({ name: 'The Growth Mindset', email: 'hexx@codefellows.com', description: 'Dweck coined the terms fixed mindset and growth mindset to describe the underlying beliefs people have about learning and intelligence. When students believe they can get smarter, they understand that effort makes them stronger. Therefore they put in extra time and effort, and that leads to higher achievement.', status: 'FAVORITE FIVE' });

    await Book.create({ name: 'The Blind Assassin', email: 'hexx@codefellows.com', description: 'Margaret Atwood takes the art of storytelling to new heights in a dazzling novel that unfolds layer by astonishing layer and concludes in a brilliant and wonderfully satisfying twist. Told in a style that magnificently captures the colloquialisms and clichés of the 1930s and 1940s, The Blind Assassin is a richly layered and uniquely rewarding experience.', status: 'FAVORITE FIVE' });

    await Book.create({ name: 'The Fire Next Time', email: 'hexx@codefellows.com', description: 'Described by The New York Times Book Review as “sermon, ultimatum, confession, deposition, testament, and chronicle…all presented in searing, brilliant prose,” The Fire Next Time stands as a classic of our literature.', status: 'LIFE-CHANGING' });

    console.log('done seeding');

    db.close();

  }
});
