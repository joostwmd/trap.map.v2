const { Schema, model } = require("mongoose");

const artistSchema = new Schema({
    coordinates : Array,
    name : String,
    picture : String,
    city : String,
    spotifyID : String,
    spotifyLink : String,
    appleMusicLink : String,
    youtubeLink : String,
    instagramLink : String,
    genres : Array,
    
    connections : [{
        type : Schema.Types.ObjectId,
        ref : 'Artist'
    }],
})



const Artist = model("Artist", artistSchema);
module.exports = Artist;
