const { Schema, model } = require("mongoose");

const creativeSchema = new Schema({
    coordinates : Array,
    name : String,
    type : Array,
    discription : String,
    links : Array,
    contactInfo : Array
})



const Creative = model("Creative", creativeSchema);
module.exports = Creative;