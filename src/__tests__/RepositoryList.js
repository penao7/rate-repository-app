import React from 'react';
import { render } from '@testing-library/react-native';
import { RepositoryListContainer } from '../components/RepositoryList/';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', async () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 5,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const { getByText } = render(<RepositoryListContainer repositories={repositories} />);

      // repo 1

      expect(getByText('async-library/react-async')).toBeTruthy();
      expect(getByText('Flexible promise-based React data loader')).toBeTruthy();
      expect(getByText('JavaScript')).toBeTruthy();
      expect(getByText('1,7k')).toBeTruthy();
      expect(getByText('69')).toBeTruthy();
      expect(getByText('72')).toBeTruthy();
      expect(getByText('3')).toBeTruthy();

      // repo 2

      expect(getByText('jaredpalmer/formik')).toBeTruthy();
      expect(getByText('Build forms in React, without the tears')).toBeTruthy();
      expect(getByText('TypeScript')).toBeTruthy();
      expect(getByText('1,6k')).toBeTruthy();
      expect(getByText('21,8k')).toBeTruthy();
      expect(getByText('88')).toBeTruthy();
      expect(getByText('5')).toBeTruthy();

    });
  });
});