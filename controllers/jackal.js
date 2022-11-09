var Jackal = require('../models/jackal'); 
 
// List of all Jackals 
exports.jackal_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Jackal list'); 
}; 
 
// for a specific Jackal. 
exports.jackal_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Jackal detail: ' + req.params.id); 
}; 
 
// Handle Jackal create on POST. 
exports.jackal_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Jackal create POST'); 
}; 
 
// Handle Jackal delete form on DELETE. 
exports.jackal_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Jackal delete DELETE ' + req.params.id); 
}; 
 
// Handle Jackal update form on PUT. 
exports.jackal_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Jackal update PUT' + req.params.id); 
}; 