"use strict";

var express = require('express');
var router = express.Router();
var emailController = require('../controllers/emailController');
router.post('/submit', emailController.sendEmail);
module.exports = router;