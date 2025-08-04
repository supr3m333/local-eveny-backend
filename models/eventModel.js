const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  location: String,
  category: String,
  date: Date,
  description: String,
});

module.exports = mongoose.model('Event', eventSchema);
