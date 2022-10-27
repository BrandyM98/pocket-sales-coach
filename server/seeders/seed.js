const db = require('../config/connection');
const { User, Course } = require('../models');
const Video = require('../models/Video');
const userSeeds = require('./userSeeds.json');
const videoSeeds = require('./videoData.json');
const courseSeeds = require('./courseData.json');

db.once('open', async () => {
  try {
    // await User.deleteMany({});
    // await User.create(userSeeds);
    await Video.create(videoSeeds);
    await Course.create(courseSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
