/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { string, arrayOf, object, shape } from 'prop-types';

import useStyles from './styles';
import RegionItem from '../RegionItem';

const ContinentDetail = ({ continent: { id, name, regions } }) => {
  const classes = useStyles();

  return (
    <div>
      <a name={id} id={id}>
        <Typography variant="h4" className={classes.continentTitle}>
          {name}
        </Typography>
      </a>
      <Grid container spacing={2} direction="row">
        {regions.map(region => (
          <RegionItem key={region.id} region={region} cols={region.cols} />
        ))}
      </Grid>
    </div>
  );
};

ContinentDetail.propTypes = {
  continent: shape({
    type: object,
    properties: { id: string, name: string, regions: arrayOf(object) },
  }).isRequired,
};

export default ContinentDetail;
