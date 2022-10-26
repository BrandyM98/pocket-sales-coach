const { Schema, model } = require('mongoose');

const courseSchema = new Schema({
  
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
description: {
    type: String,
  },
  videos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Video'
    }
  ]
  
});


const Course = model('Course', courseSchema);
module.exports = Course;