const { Schema, model } = require("mongoose");

const artistSignUpSchema = new Schema({
    coordinates : String,
    name : String,
    spotifyLink : String,
    appleMusicLink : String,
    youtubeLink : String,
    instagramLink : String,
    
    favSong : String
})



const ArtistSignUp = model("ArtistSignUp", artistSignUpSchema);
module.exports = ArtistSignUp;