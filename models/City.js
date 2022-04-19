const { Schema, model } = require("mongoose");

const citySchema = new Schema({
    center : Array,
    name : String,
    size : String,
})



const City = model("City", citySchema);
module.exports = City;