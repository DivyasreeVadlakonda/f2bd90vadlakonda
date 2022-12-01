var express = require('express');
const jackal_controlers=require('../controllers/jackal');
var router = express.Router();
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
}
/* GET jackal */
router.get('/', jackal_controlers.jackal_view_all_Page );

/* GET detail jackal page */
router.get('/detail', jackal_controlers.jackal_view_one_Page);
/* GET create jackal page */
router.get('/create', secured, jackal_controlers.jackal_create_Page);
/* GET create update page */
// A little function to check if we have an authorized user and continue on or 
// redirect to login. 

router.get('/update', secured, jackal_controlers.jackal_update_Page);
/* GET delete jackal page */
router.get('/delete', secured, jackal_controlers.jackal_delete_Page);


module.exports = router;