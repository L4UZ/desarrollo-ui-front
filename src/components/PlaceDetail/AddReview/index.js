import React from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { Formik } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { string } from 'prop-types';

import useStyles from './styles';
import { ADD_REVIEW_MUTATION } from '../../../api/mutations';

const AddReview = ({ placeId }) => {
  const classes = useStyles();
  const [addReview, { data, loading, error }] = useMutation(ADD_REVIEW_MUTATION);

  // TODO: Require logged in user to add review
  // TODO: Add data to local state
  // TODO: Handle error

  return (
    <Grid item xs={12} className={classes.gridItem}>
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
                // token,
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
                  size="large"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.comment && touched.comment}
                  fullWidth
                  helperText={touched.comment && errors.comment}
                  id="comment"
                  label="comment"
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
    </Grid>
  );
};

AddReview.propTypes = {
  placeId: string.isRequired,
};

export default AddReview;
