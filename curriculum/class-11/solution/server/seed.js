
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', _ => {
  console.log('We\'re connected!');
});
const Book = require('./models/book.js');

seedBooks();

function seedBooks() {
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
