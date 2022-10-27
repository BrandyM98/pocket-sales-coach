const db = require('../config/connection');
const { User, Course, Video } = require('../models');
const userSeeds = require('./userSeeds.json');
const videoSeeds = require('./videoData.json');
const courseSeeds = require('./courseData.json');

db.once('open', async () => {
  try {
    await Video.deleteMany({});
    await Course.deleteMany({});
    // await User.create(userSeeds);
    await Course.insertMany(courseSeeds);
    for (let badge in videoSeeds) {
      const videos = await Video.insertMany(videoSeeds[badge]);
      const videoIds = videos.map(video => video._id);
      await Course.findOneAndUpdate(
        { badge },
        { $addToSet: { videos: videoIds }}
      )
    }
    

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
