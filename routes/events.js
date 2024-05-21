const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/', eventController.getAllEvents);
router.post('/adicionar-evento', eventController.addEvent);

module.exports = router;
