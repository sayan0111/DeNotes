const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  price: {
    type: Number,
  },
  subject: {
    type: String,
  },
  department: {
    type: String,
  },
  semester: {
    type: Number,
  },
  firstpage: {
    type: String,
  },
  secondpage: {
    type: String,
  },
  thirdpage: {
    type: String,
  },
});

module.exports = mongoose.model("Posts", postSchema);
