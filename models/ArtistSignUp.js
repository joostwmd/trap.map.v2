const { Schema, model } = require("mongoose");

const artistSignUpSchema = new Schema({
    location : String,
    name : String,
    spotifyLink : String,
    appleMusicLink : String,
    youtubeLink : String,
    instagramLink : String,
})



const ArtistSignUp = model("ArtistSignUp", artistSignUpSchema);
module.exports = ArtistSignUp;