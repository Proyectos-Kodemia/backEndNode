const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  tags: {
    type: Array,
  },
  });

module.exports = {
  model: mongoose.model("Tags", schema),
  schema,
};
