const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sneackerSchema = new Schema({
    name: String,
    ref: String,
    size: Number,
    description: String,
    price: Number,
    image:{
        type:String,
        default:"https://www.giuntialpunto.it/sites/all/themes/gpunto/images/no-img-placeholder.png"
    },
    category: {
        type: String,
        enum: ["men", "women", "kids"]
    },
    id_tags: ["ObjectId"]
})

const sneakerModel = mongoose.model("Sneaker", sneackerSchema);

module.exports = sneakerModel;