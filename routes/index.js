const express = require('express');
const router  = express.Router();

/* Landing Page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* Main User Page*/

router.get('/userProfile', (req, res, next) => {
  res.render('user/index');
});














module.exports = router;
