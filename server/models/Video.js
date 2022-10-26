const { Schema, model } = require('mongoose');
const videoSchema = new Schema({
  
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


const Video = model('Video', videoSchema);
module.exports = Video;