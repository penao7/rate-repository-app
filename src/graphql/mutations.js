import { gql } from 'apollo-boost';

export const SIGN_IN = gql`
  mutation signIn($username: String!, $password: String!) {
    authorize(credentials: {
      username: $username, 
      password: $password
    }) {
      accessToken
    }
  }
`;

export const SIGN_UP = gql`
  mutation
    createUser($username: String!, $password: String!) {
      createUser(user: { username: $username, password: $password }) {
        id
        username
      }
    }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($username: String!, $repository: String!, $rating: Int!, $review: String) {
    createReview(review: {
      ownerName: $username,
      repositoryName: $repository,
      rating: $rating,
      text: $review
      }
    ) {
      repositoryId
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation deleteReview($id: ID!) {
    deleteReview(id: $id)
  }
`;