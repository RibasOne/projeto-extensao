const express = require('express');
const router = express.Router();
const path = require('path');
const authController = require('../controllers/authController');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
});

router.post('/', express.urlencoded({ extended: true }), authController.login);

module.exports = router;