import { gql } from 'apollo-server';

const userType = gql`
  type User {
    firstName: String
    lastName: String
    email: String
    password: String
  }
`;

export default {
  userType,
};
