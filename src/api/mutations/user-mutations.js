import gql from 'graphql-tag';

export const SIGN_UP_MUTATION = gql`
  mutation SignUp($user: SignUpInput!) {
    signUp(user: $user)
  }
`;

export const SIGN_IN_MUTATION = gql`
  mutation SignIn($credentials: CredentialsInput!) {
    signIn(credentials: $credentials)
  }
`;
