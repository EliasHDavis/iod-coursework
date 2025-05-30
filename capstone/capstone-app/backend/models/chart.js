const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chartSchema = new Schema({
    ownerId: { type: mongoose.SchemaTypes.ObjectID, ref:"user"},
    header: { type: {
        key: String, 
        tempo: String, 
        timeSig: String, 
        title: String, 
        author: String
        }, required: true},
    sectioning: { type: [String]},
    body: {type: [String]}, 
    // { type: [{
    //     line: Number,
    //     value: Number,
    //     length: String,
    //     modifier: String
    //     }]},
    createdAt: {type: Date, default: Date.now, immutable: true},
    updatedAt: {type: Date, default: Date.now}
})



module.exports = mongoose.model("chart", chartSchema);

//chartSchema.pre("save", function(new) {
//  this.updatedAt = Date.now()
//  new()
//})