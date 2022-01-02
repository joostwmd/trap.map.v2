const { Schema, model } = require("mongoose");

const appleMusicVisotSchema = new Schema({
    artist : {
        type:  Schema.Types.ObjectId,
        ref: "Artist"
    }
})

const appleMusicVisotSchema = model("appleMusicVisotSchema", appleMusicVisotSchema);
module.exports = appleMusicVisotSchema;