const { Schema, model } = require("mongoose");

const singUpForBetaKeySchema = new Schema({
    email : String
})


const SingUpForBetaKey = model("singUpForBetaKeySchema", singUpForBetaKeySchema);
module.exports = SingUpForBetaKey;