const { Schema, model } = require("mongoose");

const singUpForBetaKeySchema = new Schema({
    email : String
})


const SingUpForBetaKey = model("BetaKey", singUpForBetaKeySchema);
module.exports = SingUpForBetaKey;