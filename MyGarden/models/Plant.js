const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  careTips: {
    type: String,
    required: true,
  },
  benefits: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("plants", schema);
