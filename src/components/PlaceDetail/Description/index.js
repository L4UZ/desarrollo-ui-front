import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { string } from 'prop-types';

import useStyles from './styles';

const Description = ({ description }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.gridItem}>
      <Typography variant="h6" gutterBottom>
        Place description
      </Typography>
      {description !== null ? (
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
      ) : (
        <Typography variant="body1" gutterBottom>
          No description provided
        </Typography>
      )}
    </Grid>
  );
};

Description.propTypes = {
  description: string,
};

Description.defaultProps = {
  description: 'No description provided.',
};

export default Description;
