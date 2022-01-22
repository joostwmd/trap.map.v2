const { Schema, model } = require("mongoose");

const appleMusicVisitSchema = new Schema({
    artist : {
        type:  Schema.Types.ObjectId,
        ref: "Artist"
    }
})

const AppleMusicVisit = model("AppleMusicReroute", appleMusicVisitSchema);
module.exports = AppleMusicVisit;