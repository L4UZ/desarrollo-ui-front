import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';
import RegionItem from '../../components/RegionItem';

const ContinentDetail = ({ continent }) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" className={classes.continentTitle}>
        {continent.name}
      </Typography>
      <Grid container spacing={2} direction="row">
        {continent.regions.map(region => (
          <RegionItem region={region} cols={region.cols} />
        ))}
      </Grid>
    </div>
  );
};

export default ContinentDetail;
