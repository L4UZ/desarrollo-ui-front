import gql from 'graphql-tag';

export const SIGN_UP_MUTATION = gql`
  mutation SignUp($user: SignUpInput) {
    signUp(user: $user)
  }
`;

export const SIGN_IN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
