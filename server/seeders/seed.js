const db = require('../config/connection');
const { User } = require('../models');
const Video = require('../models/Video');
const userSeeds = require('./userSeeds.json');
const videoSeeds = require('./videoData.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
    await Video.find(videoSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
