'use strict';

const User = require('../model/Users');

module.exports = async(request, response) => {
  const email = request.query.email;
  // get the books from mongo 
  await User.find({ email }, (err, user) => {
    if (err) return console.error(err);
    // if the user isn't in the db, add them
    if(!user.length){
      user[0] = { email, books: [] }
      const newUser = new User(user[0])
      newUser.save();
    }

    response.send(user[0].books);
  })
}