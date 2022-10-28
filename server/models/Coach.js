const { Schema, model } = require('mongoose');
const coachSchema = new Schema({

  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
  },
});
const Coach = model('Coach', coachSchema);
module.exports = Coach;