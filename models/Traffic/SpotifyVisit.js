const { Schema, model } = require("mongoose");

const spotifyVisitSchema = new Schema({
    artist : {
        type:  Schema.Types.ObjectId,
        ref: "Artist"
    }
})

const SpotifyVisit = model("spotifyVisit", spotifyVisitSchema);
module.exports = SpotifyVisit;