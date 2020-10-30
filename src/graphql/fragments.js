import { gql } from 'apollo-boost';

export const PAGE_DETAILS = gql`
  fragment PageDetails on PageInfo {
    hasNextPage
    totalCount
    startCursor
    endCursor
  }
`;

export const REVIEW_DETAILS = gql`
  fragment ReviewDetails on Review {
    id
    text
    rating
    createdAt
    repository {
      fullName
      id
    }
    user {
      id
      username
    }
  }
`;

export const USER_DETAILS = gql`
  fragment UserDetails on User {
    id
    username
    reviews @include(if: $includeReviews) {
      edges {
        node {
          ...ReviewDetails
        }
      }
      pageInfo {
        ...PageDetails
      }
    }
  }
  ${PAGE_DETAILS}
  ${REVIEW_DETAILS}
`;

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    fullName
    language
    forksCount
    reviewCount
    description
    ratingAverage
    ownerAvatarUrl
    stargazersCount
    id
    url
    reviews(first: $first, after: $after) {
      edges {
        node {
          ...ReviewDetails
        }
      }
      pageInfo {
        ...PageDetails
      }
    }
  }
  ${PAGE_DETAILS}
  ${REVIEW_DETAILS}
`;

export const REPOSITORY_CONNETION = gql`
  fragment RepositoryConnection on RepositoryConnection {
    edges {
      node {
        ...RepositoryDetails
      }
    }
    pageInfo {
      ...PageDetails
    }
  }
  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
  ${PAGE_DETAILS}
`;