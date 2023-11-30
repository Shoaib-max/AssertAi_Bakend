const mongoose = require("mongoose");

const chartSchema = mongoose.Schema({
  id: {
    type: Number,
    required: [true, "please add id"],
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

module.exports = mongoose.model("chart", chartSchema);
