var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var jackal_controller = require('../controllers/jackal'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/jackals', jackal_controller.jackal_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/jackals/:id', jackal_controller.jackal_delete); 
 
// PUT request to update Costume. 
router.put('/jackals/:id', jackal_controller.jackal_update_put); 
 
// GET request for one Costume. 
router.get('/jackals/:id', jackal_controller.jackal_detail); 
 
// GET request for list of all Costume items. 
router.get('/jackals', jackal_controller.jackal_list); 
 
module.exports = router; 