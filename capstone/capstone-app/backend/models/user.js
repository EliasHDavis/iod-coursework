const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    emailId: { type: String, trim: true, toLowercase: true, required: true, unique: true},
    password: { type: String, required: true, /*vaidate: v => function code */},
    createdAt: { type: Date, default: Date.now, immutable: true},
    updatedAt: { type: Date, default: Date.now}
});

//userSchema.pre("save", function (new) {
//  this.updatedAt = Date.now()
//  new()
//})

module.exports = mongoose.model('user', userSchema);