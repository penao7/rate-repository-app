import React from 'react';
import { Formik } from 'formik';
import ReviewForm from './ReviewForm';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';
import useCreateReview from '../../hooks/useCreateReview';

const initialValues = {
  username: '',
  repository: '',
  rating: '',
  review: ''
};

const reviewSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  repository: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .required('Rating is required'),
  review: yup
    .string()

});


const CreateReview = () => {

  const [createReview] = useCreateReview();
  const history = useHistory();

  const onSubmit = async reviewDetails => {
    const { username, repository, rating, review } = reviewDetails;

    const ratingToNumber = Number(rating);

    try {
      const data = await createReview({ username, repository, ratingToNumber, review });

      if (createReview) {
        history.push(`/${data.createReview.repositoryId}`);
      }

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={reviewSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};


export default CreateReview;