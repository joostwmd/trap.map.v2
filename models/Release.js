const { Schema, model } = require("mongoose");

const releaseSchema = new Schema({
    artistName : String,
    title : String,
    releaseDate : String,
    typeOfRelease : String,
    presafeLink : String
})



const Release = model("Release", releaseSchema);
module.exports = Release;