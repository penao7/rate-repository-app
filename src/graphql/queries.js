import { gql } from 'apollo-boost';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      ...RepositoryDetails
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const CHECK_AUTH = gql`
  query {
    authorizedUser {
      id,
      username
    }
  }
`;
