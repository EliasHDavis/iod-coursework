const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    emailId: { type: String, trim: true, required: true, unique: true},
    password: { type: String, required: true, /*vaidate: v => function code */},
    createdAt: { type: Date, default: Date.now, immutable: true},
    updatedAt: { type: Date, default: Date.now}
});

module.exports = mongoose.model('user', userSchema);