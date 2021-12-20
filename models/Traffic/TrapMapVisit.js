const { Schema, model } = require("mongoose");

const trapMapVisitSchema = new Schema({
    artist : {
        type:  Schema.Types.ObjectId,
        ref: "Artist"
    }
})

const TrapMapVisit = model("trapMapVisit", trapMapVisitSchema);
module.exports = TrapMapVisit;