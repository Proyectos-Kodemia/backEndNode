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
    required: true,
  },
  tags: {
    type: Object,
  },
  textContainer: {
    type: String,
  },
  dateCreation: {
    type: Date,
  },
});

module.exports = {
  model: mongoose.model("Post", schema),
  schema,
};
