'use strict';

const handleServerError = require('./500-ServerError');
const User = require('../model/Users');

module.exports = async (request, response) => {
  const { email, name, description, status } = request.body;
  const newBook = {name, description, status};

  await User.findOne({ email }, (err, user) => {
    if (err) console.error(err);
    user.books.push(newBook);
    user.save().then(response.send(user.books)).catch(err => handleServerError(request, response, err))
  });
}
