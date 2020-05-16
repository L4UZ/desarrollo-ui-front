import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { arrayOf } from 'prop-types';

import useStyles from './styles';

const Reviews = ({ reviews }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.gridItem}>
      <Typography variant="h6" gutterBottom>
        Reviews
      </Typography>
      <Grid container spacing={3} direction="column">
        {reviews.map(review => (
          <Grid item>
            <Paper elevation={2} className={classes.reviews}>
              <Rating name="Score" readOnly="true" value={review.score} />
              <Typography variant="body1">Comment: {review.comment}</Typography>
              <Typography variant="caption">By: Name - email</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

Reviews.propTypes = {
  reviews: arrayOf(Object).isRequired,
};

export default Reviews;
