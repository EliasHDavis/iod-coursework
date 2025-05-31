'use strict'

const User = require('./user') //require the model
const Post = require('./post')
const Comment = require('./comment')

async function init() {
    await User.sync();
    await Post.sync(); // sync the model also sync any extra models here
    await Comment.sync();
};

Post.belongsTo(User);
User.hasMany(Post);

Comment.belongsTo(Post);
Post.hasMany(Comment);

init();

module.exports = {
    User, Post, Comment// export the model also export any extra models here
};