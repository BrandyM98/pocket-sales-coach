const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Video {
    _id: ID
    name: String
    url: String
    description: String
  }
  type Course {
    _id: ID
    name: String
    description: String
    videos: [Video]
    badge: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    videos: [Video]
    video(id: ID!): Video
    courses: [Course]
    course(id: ID!): Course 
    courseByBadge(badge: String!): Course 
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
  }
`;

module.exports = typeDefs;
