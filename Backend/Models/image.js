const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  path: {}
});

const fileModel = mongoose.model("file", fileSchema);
module.exports = fileModel;