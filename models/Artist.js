const { Schema, model } = require("mongoose");

const artistSchema = new Schema({
    coordinates : Array,
    name : String,
    picture : String,
    city : String,
    spotifyID : String,
    spotifyLink : String,
    youtubeLink : String,
    instagramLink : String   
})



const Artist = model("Artist", artistSchema);
module.exports = Artist;
