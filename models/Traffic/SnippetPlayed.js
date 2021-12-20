const { Schema, model } = require("mongoose");

const snippetPlayedSchema = new Schema({
    artist : {
        type:  Schema.Types.ObjectId,
        ref: "Artist"
    }
})

const SnippetPlayed = model("snippetPlayed", snippetPlayedSchema);
module.exports = SnippetPlayed;