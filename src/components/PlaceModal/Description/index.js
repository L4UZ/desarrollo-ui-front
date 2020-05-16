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
      <Typography variant="body1" gutterBottom>
        {description}
      </Typography>
    </Grid>
  );
};

Description.propTypes = {
  description: string.isRequired,
};

export default Description;
