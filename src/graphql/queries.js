import { gql } from 'apollo-boost';
import { REPOSITORY_CONNETION, REPOSITORY_DETAILS, USER_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query
    repositories($orderBy: AllRepositoriesOrderBy, $searchKeyword: String, $first: Int, $after: String) {
      repositories(orderBy: $orderBy, searchKeyword: $searchKeyword, first: $first, after: $after) {
        ...RepositoryConnection
      }
    }
  ${REPOSITORY_CONNETION}
`;

export const GET_REPOSITORY = gql`
  query 
    repository($id: ID!, $first: Int, $after: String) {
      repository(id: $id) {
        ...RepositoryDetails
      }
    }
    ${REPOSITORY_DETAILS}
`;

export const CHECK_AUTH = gql`
  query
    getAuthorizedUser($includeReviews: Boolean = false) {
      authorizedUser {
        ...UserDetails
      }
    }
  ${USER_DETAILS}
`;
