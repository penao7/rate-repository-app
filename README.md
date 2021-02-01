# rate-repository-app

This app is made for the course [Full Stack Open React Native](https://fullstackopen.com/en/part10) and 
it uses [Rate Repository Api](/https://github.com/fullstack-hy2020/rate-repository-api) for data.

## Usage

For using this app you need to have [Expo](https://expo.io/) installed on your PC and on you mobile device. Alternatively you can use [Android Studio](https://developer.android.com/studio)
for creating a virtual device. 

The app is required to have two env-variables to be set before running the app

```
APOLLO_URI <API_URL for GraphQL server>
ENV <This can be set as development>
```
and it is preferable include them in a `.env` file.

To run the app:

```
$ npm install
$ expo start
```

and the app will be available in the url given by Expo.

## Features

<table>
  <tr>
    <th>Sign up</th>
    <th>Repository list</th>
    <th>Filter</th>
    <th>Sort</th>
    <th>Create review>
    <th>My reviews</th>
  </tr>
  <tr>
    <td>
      <img src='/pics/sign-up.png' height=300 width=150>
    </td>
    <td>
      <img src='/pics/repo-list.png' height=300 width=150>
    </td>
    <td>
      <img src='/pics/filter.png' height=300 width=150>
    </td>
    <td>
      <img src='/pics/sort.png' height=300 width=150>
    </td>
    <td>
      <img src='/pics/create-review.png' height=300 width=150>
    </td>
    <td>
      <img src='/pics/my-review.png' height=300 width=150>
    </td>
  </tr>
</table>
