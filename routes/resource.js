var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var jackal_controller = require('../controllers/jackal'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// JACKAL ROUTES /// 
 
// POST request for creating a Jackal.  
router.post('/jackals', jackal_controller.jackal_create_post); 
 
// DELETE request to delete Jackal. 
router.delete('/jackals/:id', jackal_controller.jackal_delete); 
 
// PUT request to update Jackal. 
router.put('/jackals/:id', jackal_controller.jackal_update_put); 
 
// GET request for one Jackal. 
router.get('/jackals/:id', jackal_controller.jackal_detail); 
 
// GET request for list of all Jackal items. 
router.get('/jackals', jackal_controller.jackal_list); 

/* GET detail jackal page */ 
router.get('/detail', jackal_controller.jackal_view_one_Page); 

/* GET create jackal page */ 
router.get('/create', jackal_controller.jackal_create_Page); 

/* GET create update page */ 
router.get('/update', jackal_controller.jackal_update_Page); 
 
module.exports = router; 