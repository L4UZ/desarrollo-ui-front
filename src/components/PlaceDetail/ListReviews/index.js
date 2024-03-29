import React from 'react';
import {
  Grid,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Divider,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { arrayOf } from 'prop-types';
import { isEmpty } from 'lodash';

import useStyles from './styles';

const Reviews = ({ reviews }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.gridItem}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Reviews</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={3} direction="column">
            {isEmpty(reviews) && (
              <Grid item>
                <Typography variant="body1">No reviews yet.</Typography>
              </Grid>
            )}
            {reviews.map((review, i) => (
              <Grid item key={review.id}>
                <div className={classes.reviews}>
                  <Rating name="Score" readOnly value={review.score} />
                  <Typography variant="body1">{review.comment}</Typography>
                  <Typography variant="caption">
                    By: {review.userFullName} ({review.userEmail})
                  </Typography>
                </div>
                {i !== reviews.length - 1 && <Divider className={classes.divider} />}
              </Grid>
            ))}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid>
  );
};

Reviews.propTypes = {
  reviews: arrayOf(Object).isRequired,
};

export default Reviews;
