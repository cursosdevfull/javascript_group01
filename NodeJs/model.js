const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema(
  {
    name: String,
    age: Number,
  },
  { collection: 'Users' }
);

const model = mongoose.model('users', user);

module.exports = model;
