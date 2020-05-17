import React, { useState } from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const AddReview = () => {
  const classes = useStyles();
  const [review, setReview] = useState();

  return (
    <Grid item xs={12} className={classes.gridItem}>
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
        className={classes.reviewComment}
      />
      <Button variant="contained" color="primary" className={classes.reviewButton}>
        Add review
      </Button>
    </Grid>
  );
};

export default AddReview;
