"use strict";

var express = require('express');
var router = express.Router();
var eventController = require('../controllers/eventController');
router.get('/', eventController.getAllEvents);
router.post('/create', eventController.addEvent);
router["delete"]('/delete/:id', eventController.deleteEvent);
module.exports = router;