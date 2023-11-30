const mongoose = require("mongoose");

const GraphSchema = mongoose.Schema({
  id: {
    type: Number,
    required: [true, "please add id"],
  },

  name: {
    type: String,
    required: [true, "please add name"],
  },

  city: {
    type: String,
    required: [true, "please add city"],
  },

  year: {
    type: Number,
    required: [true, "please add year"],
  },

  userGain: {
    type: Number,
    required: [true, "please add userGain"],
  },

  userLost: {
    type: Number,
    required: [true, "please add userLost"],
  },
});

module.exports = mongoose.model("graph", GraphSchema);
