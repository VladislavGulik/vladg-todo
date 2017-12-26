const express = require('express');
const router = express.Router();

router.get('/users', (req, res, next) => {
    res.send('USERS');
});

router.get('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
});

router.get('/validate', (req, res, next) => {
    res.send('VALIDATE');
});

module.exports = router;
