'use strict';

const mongoose = require('mongoose');

const {Schema} = mongoose;

const snackSchema = new Schema({
  name: String,
  description: String
});

const SnackModel =  mongoose.model('snack', snackSchema);

module.exports = SnackModel;
