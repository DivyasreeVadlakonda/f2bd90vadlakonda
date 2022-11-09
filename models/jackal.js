const mongoose = require("mongoose") 
const jackalSchema = mongoose.Schema({ 
 Pigment: String, 
 Power: Number, 
 Location: String 
}) 
 
module.exports = mongoose.model("Jackal", jackalSchema) 
