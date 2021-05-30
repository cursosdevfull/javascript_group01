const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const project = new Schema(
  {
    title: String,
    summary: String,
    tooltip: String,
    active: Boolean,
  },
  { collection: 'Projects' }
);

const model = mongoose.model('projects', project);

module.exports = model;
