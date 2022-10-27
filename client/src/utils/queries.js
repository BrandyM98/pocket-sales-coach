import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_COURSES = gql`
query courses {
  courses {
    _id
    name
    
  }
}
`;

export const QUERY_COURSE = gql`
query course($courseId: ID!) {
  course(id: $courseId) {
    _id
    description
    name
    videos {
      _id
      name
      description
      url

    }
  }
}
`;
