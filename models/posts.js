const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  userName: {
    type: String,
  },
  image: {
    type: String,
  },
  title: {
    type: String,
    trim: true,
    required: true,
  },
  tags: {
    type: Object,
  },
  textContainer: {
    type: String,
    trim: true,
    required: true,
  },
  dateCreation: {
    type: Date,
    default: Date.now,
  },
});

module.exports = {
  model: mongoose.model("Post", schema),
  schema,
};
