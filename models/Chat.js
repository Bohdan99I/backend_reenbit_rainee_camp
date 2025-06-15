const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

module.exports = mongoose.model("Chat", chatSchema);
