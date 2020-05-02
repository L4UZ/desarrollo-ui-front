import { gql } from 'apollo-server';

const query = gql`
  type Query {
    users: [User]
  }
`;

module.exports = {
  query,
};
