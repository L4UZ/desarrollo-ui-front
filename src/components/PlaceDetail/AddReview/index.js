import React from 'react';
import { Grid, Typography, Button, TextField, Paper, CircularProgress } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { Formik } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { string } from 'prop-types';
import { useHistory } from 'react-router-dom';

import { ADD_REVIEW_LOCATION } from '../../../constants/localStorageKeys';
import { useAuth } from '../../../AuthProvider/index';
import useStyles from './styles';
import { ADD_REVIEW_MUTATION } from '../../../api/mutations';
import { PLACE_DETAIL } from '../../../api/queries';

const AddReview = ({ regionId, placeId }) => {
  const classes = useStyles();
  const { push: pushToHistory } = useHistory();
  const { token } = useAuth();

  const [addReview, { loading }] = useMutation(ADD_REVIEW_MUTATION, {
    update(cache, { data: { addReview: addedReview } }) {
      const { place } = cache.readQuery({ query: PLACE_DETAIL, variables: { placeId } });
      cache.writeQuery({
        query: PLACE_DETAIL,
        variables: { placeId },
        data: { place: { ...place, reviews: [...place.reviews, addedReview] } },
      });
    },
  });

  const redirectToLogin = () => {
    localStorage.setItem(ADD_REVIEW_LOCATION, `region-detail/${regionId}/${placeId}`);
    pushToHistory('/signin');
  };

  return (
    <Grid item xs={12} className={classes.gridItem}>
      <Paper elevation={2} className={classes.container}>
        <Typography variant="h6" gutterBottom>
          Add review
        </Typography>
        <Formik
          initialValues={{ score: 0, comment: '' }}
          onSubmit={({ comment, score }, { resetForm }) => {
            addReview({
              variables: {
                review: {
                  comment,
                  score: +score,
                  placeId,
                  token,
                },
              },
            });
            resetForm();
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit} className={classes.form}>
              <Grid container>
                <Grid item xs={12}>
                  <Rating
                    defaultValue={0}
                    id="score"
                    name="score"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.score}
                    size="large"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.comment && touched.comment}
                    fullWidth
                    helperText={touched.comment && errors.comment}
                    id="comment"
                    label="Comment"
                    margin="normal"
                    multiline
                    name="comment"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Add a review"
                    required
                    type="text"
                    value={values.comment}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} className={classes.buttonWrapper}>
                  <Button
                    className={classes.submit}
                    color="primary"
                    disabled={loading}
                    fullWidth
                    type="submit"
                    variant="contained"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
        {loading && <CircularProgress className={classes.loading} />}
        {!token && (
          <div className={classes.overlay}>
            <Button
              className={classes.overlayButton}
              color="secondary"
              disabled={loading}
              fullWidth
              type="submit"
              variant="contained"
              onClick={redirectToLogin}
            >
              Sign in
            </Button>
          </div>
        )}
      </Paper>
    </Grid>
  );
};

AddReview.propTypes = {
  placeId: string.isRequired,
  regionId: string.isRequired,
};

export default AddReview;
