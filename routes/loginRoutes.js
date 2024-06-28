const express = require('express');
const router = express.Router();
const path = require('path');
const AuthController = require('../controllers/authController');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/login.html'));
});

router.post('/', AuthController.login);

module.exports = router;