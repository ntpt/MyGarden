const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  plantID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Plant",
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

module.exports = mongoose.model("FavouritePlant", GroupSchema);
