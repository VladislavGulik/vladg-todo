const express = require('express');
const router = express.Router();

router.get('/users', (req, res, next) => {
    res.send('USERS');
});

module.exports = router;
