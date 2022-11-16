var Jackal = require('../models/jackal'); 
 
// List of all Jackals 
exports.jackal_list = async function(req, res) { 
    try{ 
        theJackals = await Jackal.find(); 
        res.send(theJackals); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  
 
// VIEWS 
// Handle a show all view 
exports.jackal_view_all_Page = async function(req, res) { 
    try{ 
        theJackals = await Jackal.find(); 
        res.render('jackal', { title: 'Jackal Search Results', results: theJackals }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific Jackal. 
exports.jackal_detail = async function(req, res) { 
        console.log("detail"  + req.params.id) 
        try { 
            result = await Jackal.findById( req.params.id) 
            res.send(result) 
        } catch (error) { 
            res.status(500) 
            res.send(`{"error": document for id ${req.params.id} not found`); 
        } 
    }; 
    
 
// Handle Jackal create on POST. 
exports.jackal_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Jackal(); 
    document.Pigment = req.body.Pigment; 
    document.Power = req.body.Power; 
    document.Location = req.body.Location; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Jackal delete form on DELETE. 
exports.jackal_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Jackal.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};  
 
// Handle Jackal update form on PUT. 
exports.jackal_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Jackal.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Pigment) toUpdate.Pigment = req.body.Pigment; 
        if(req.body.Power) toUpdate.Power = req.body.Power; 
        if(req.body.Location) toUpdate.Location = req.body.Location; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
// Handle a show one view with id specified by query 
exports.jackal_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Jackal.findById( req.query.id) 
        res.render('jackaldetail', { title: 'Jackal Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.jackal_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('jackalcreate', { title: 'Jackal Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
   