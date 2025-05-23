const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chartSchema = new Schema({
    ownerId: { Type: mongoose.SchemaTypes.ObjectID, ref:"user"},
    header: { type: {
        key: String, 
        tempo: String, 
        timeSig: String, 
        title: String, 
        author: String}, required: true},
    sectioning: { type: [String], required: true},
    body: { type: [{
        line: Number,
        value: Number,
        length: String,
        modifier: String
    }], required: true}
})

module.exports = mongoose.model("chart", chartSchema);