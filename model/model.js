const mongoose = require("mongoose");
const { Schema } = mongoose;

const BlogSchema = new Schema({
  id: Number,
  title: String,
  image: String,
  content: String,
});

module.exports = mongoose.model("Blogs", BlogSchema);
