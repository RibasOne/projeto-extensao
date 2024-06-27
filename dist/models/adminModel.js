"use strict";

var mongoose = require('mongoose');
var adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});
var Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;