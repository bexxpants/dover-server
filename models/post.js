var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postSchema = new Schema({
  username: String,
  name: String,
  portfolioPage: String,

});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
