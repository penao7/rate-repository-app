import { gql } from 'apollo-boost';

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on RepositoryConnection {
    edges {
      node {
        fullName
        language
        forksCount
        reviewCount
        description
        ratingAverage
        ownerAvatarUrl
        stargazersCount
        id
      }
    }
  }
`;