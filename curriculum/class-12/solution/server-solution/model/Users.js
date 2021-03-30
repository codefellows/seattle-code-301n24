'use strict';

const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, uppercase: true, enum: ['LIFE-CHANGING', 'FAVORITE FIVE', 'RECCOMENDED TO ME'] }
});

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    books: [booksSchema]
});


const userModel = mongoose.model('user', userSchema);

module.exports = userModel;