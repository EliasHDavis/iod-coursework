const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chartSchema = new Schema({
    ownerId: { Type: mongoose.SchemaTypes.ObjectID, ref:"user"},
    header: { type: {
        key: String, 
        tempo: String, 
        timeSig: String, 
        title: String, 
        author: String
        }, required: true},
    sectioning: { type: [String], required: true},
    body: { type: [{
        line: Number,
        value: Number,
        length: String,
        modifier: String
        }], required: true},
    createdAt: {type: Date, default: Date.now, immutable: true},
    updatedAt: {type: Date, default: Date.now}
})

//chartSchema.pre("save", function(new) {
//  this.updatedAt = Date.now()
//  new()
//})

module.exports = mongoose.model("chart", chartSchema);