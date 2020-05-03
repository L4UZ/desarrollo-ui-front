import { gql } from 'apollo-server';

export const mutation = gql`
  type Mutation {
    signUp(user: SignUpInput): String
  }

  input SignUpInput {
    firstName: String
    lastName: String
    email: String
    password: String
  }
`;
