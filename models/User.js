const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    lastname: String,
    email: String,
    password: {
        min: 4,
        required: true,
        type: String,
    }
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;