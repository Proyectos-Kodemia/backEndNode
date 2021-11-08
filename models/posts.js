const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  userName: {
    type: String,
  },
  idAuthor: {
    type: String,
    required:false,
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
  likes: {
    type: Number,
    required: false,
  },
  coments: {
    type: Number,
    required: false,
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
