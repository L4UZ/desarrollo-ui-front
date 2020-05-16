import React from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { func } from 'prop-types';

import useStyles from './styles';

const AddReview = ({ setReview }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} fullWidth className={classes.gridItem}>
      <Typography variant="h6" gutterBottom>
        Add review
      </Typography>
      <Rating
        name="Score"
        defaultValue={0}
        onChange={(event, newValue) => {
          setReview(newValue);
        }}
      />
      <TextField
        placeholder="Add a review"
        variant="outlined"
        fullWidth
        className={classes.addReviews}
      />
      <Button variant="contained" color="primary" className={classes.reviewButton}>
        Add review
      </Button>
    </Grid>
  );
};

AddReview.propTypes = {
  setReview: func.isRequired,
};

export default AddReview;
