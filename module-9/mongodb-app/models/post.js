const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    postID: { type: String, required: true, unique: true },
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    image: { type: String, required: true }
});

module.exports = mongoose.model("post", postSchema);