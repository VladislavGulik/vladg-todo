const express = require('express');
const router = express.Router();

/* GET todo listing. */
router.get('/todo', (req, res, next) => {
  res.send('TODO');
});

module.exports = router;
