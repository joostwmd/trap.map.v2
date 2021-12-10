const { Schema, model } = require("mongoose");

const artistSchema = new Schema({
    coordinates : Array,
    name : String,

    
    spotifyLink : String,
    youtubeLink : String,
    instagramLink : String,

    city : String,
    spotifyID : String,

    picture : String
})



const Artist = model("Artist", artistSchema);
module.exports = Artist;
