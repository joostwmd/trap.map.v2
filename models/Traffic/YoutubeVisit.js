const { Schema, model } = require("mongoose");

const youtubeVisitSchema = new Schema({
    artist : {
        type:  Schema.Types.ObjectId,
        ref: "Artist"
    }
})

const YoutubeVisit = model("YoutubeReroute", youtubeVisitSchema);
module.exports = YoutubeVisit