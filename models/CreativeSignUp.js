const { Schema, model } = require("mongoose");

const creativeSignUpSchema = new Schema({
    location : String,
    name : String,
    type : String,
    discription : String,
    links : Array,
    contactInfo : Array
})



const CreativeSignUp = model("CreativeSignUp", creativeSignUpSchema);
module.exports = CreativeSignUp;