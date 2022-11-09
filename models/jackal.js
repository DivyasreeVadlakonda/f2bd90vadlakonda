const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
 Pigment: String, 
 Power: Number, 
 Location: String 
}) 
 
module.exports = mongoose.model("Jackal", jackalSchema) 
