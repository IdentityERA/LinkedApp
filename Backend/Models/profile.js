const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  HeadLine: {
    type: String,
    required: true,
  },
  Position: {
    type: String,
    required: true
  },
  Education: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true
  },
  Phone: {
    type: Number,
    required: true
  }
});

const profile = mongoose.model('profile', profileSchema);
module.exports = profile;