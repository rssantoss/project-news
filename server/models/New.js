const mongoose = require("mongoose");

const NewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  /*
  category: {
    type: Boolean,
    required: true
  }
  */
});

const New = mongoose.model("New", NewSchema);

module.exports = New;
