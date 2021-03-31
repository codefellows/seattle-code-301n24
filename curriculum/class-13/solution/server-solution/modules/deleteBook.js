'use strict';

const User = require('../model/Users');

module.exports = async(request, response) => {
  // delete a book from Mongo
  const email = request.query.email;
  const id = request.params.id;
  await User.findOne({email}, (err, user) => {
    const newBookArray = user.books.filter(book => book.id !== id);
    user.books = newBookArray;
    user.save();
    response.status(200).send('success');
    });
}
