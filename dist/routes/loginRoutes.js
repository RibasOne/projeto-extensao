"use strict";

var express = require('express');
var router = express.Router();
var path = require('path');
var AuthController = require('../controllers/authController');
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/views/login.html'));
});
router.post('/', AuthController.login);
module.exports = router;