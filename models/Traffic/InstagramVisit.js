const { Schema, model } = require("mongoose");

const instagramVisitSchema = new Schema({
    artist : {
        type:  Schema.Types.ObjectId,
        ref: "Artist"
    }
})

const InstagramVisit = model("instagramVisit", instagramVisitSchema);
module.exports = InstagramVisit;