const mongoose = require("mongoose") 
const jackalSchema = mongoose.Schema({
Pigment:{
    type: String,
    minLength: 3,
    maxLength: 22
}, 
Power:{
    type: Number
},
Location: {
    type: String,
    minLength: 5,
    maxLength: 32
}
}) 
 
module.exports = mongoose.model("Jackal", jackalSchema) 
