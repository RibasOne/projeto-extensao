const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/', eventController.getAllEvents);
router.post('/create', eventController.addEvent);
router.delete('/delete/:id', eventController.deleteEvent);

module.exports = router;