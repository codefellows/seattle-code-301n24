'use strict';

const mongoose = require('mongoose');
const bookSchema = require('./bookSchema');

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    books: [bookSchema]
});


const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
