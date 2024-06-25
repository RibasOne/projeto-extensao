const express = require('express');
const router = express.Router();
const path = require('path');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/admin.html'));
});

module.exports = router;