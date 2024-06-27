"use strict";

var express = require('express');
var router = express.Router();
var path = require('path');
var authMiddleware = require('../middlewares/authMiddleware');
router.get('/', authMiddleware, function (req, res) {
  res.sendFile(path.join(__dirname, '../public/views/admin.html'));
});
module.exports = router;