var express = require('express');
const jackal_controlers= require('../controllers/jackal');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
 //  res.render('jackal', { title: 'Search Results Jackal' });
// });
router.get('/', jackal_controlers.jackal_view_all_Page ); 
module.exports = router;
