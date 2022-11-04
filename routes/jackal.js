var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jackal', { title: 'Search Results Jackal' });
});

module.exports = router;
