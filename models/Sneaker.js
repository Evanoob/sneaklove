const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sneackerSchema = new Schema({
    name: String,
    ref: String,
    size: Number,
    description: String,
    price: Number,
    category: {
        type: String,
        enum: ["men", "women", "kids"]
    },
    id_tags: ["ObjectId"]
})

const sneakerModel = mongoose.model("Sneaker", sneackerSchema);

module.exports = sneakerModel;