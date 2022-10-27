const { AuthenticationError } = require('apollo-server-express');
const { User, Video, Course } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (_, args) => {
      return User.findOne({ _id: args.id });
    },
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    videos: async () => {
      return await Video.find();
    },
    video: async(_, args) => {
return await Video.findById(args.id)
    },
    courses: async () => {
      return await Course.find().populate('videos');
    },
    course: async (_, args) => {
    
      return await Course.findById(args.id).populate('videos');
    },
    courseByBadge: async (_, args) => {
    
      return await Course.findOne({ badge: args.badge }).populate('videos');
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, username, password }) => {
      const user = await User.findOne(email ? { email } : { username });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
