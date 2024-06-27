"use strict";

var mongoose = require('mongoose');
var eventSchema = new mongoose.Schema({
  name: String,
  location: String,
  date: {
    type: Date,
    get: function get(date) {
      return date.toISOString().split('T')[0];
    }
  },
  time: String
}, {
  toJSON: {
    getters: true
  },
  toObject: {
    getters: true
  }
});
module.exports = mongoose.model('Event', eventSchema);