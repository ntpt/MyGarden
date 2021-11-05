const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  userID: {
    type: String,
    // ref: "User",
  },

  plantID: {
    type: String,
    // ref: "Plant",
  },

  description: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
    required: false
  },
});

module.exports = mongoose.model("favorite_plants", GroupSchema);
