import React from 'react';
import { Grid, Card, CardMedia, CardActionArea, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { string, number, shape } from 'prop-types';

import useStyles from './styles';

const TripPlaces = ({ regionId, place: { id, name, imagesSrc }, index }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6} lg={3}>
      <Link to={`/region-detail/${regionId}/${id}`} className={classes.link}>
        <Card className={classes.gridItem}>
          <CardActionArea>
            <CardMedia className={classes.img} image={imagesSrc[0]} title={name} />
            <div className={classes.titleBar}>
              <Typography component="h6" variant="h6">
                {index + 1}. {name}
              </Typography>
            </div>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

TripPlaces.propTypes = {
  place: shape({ id: string, name: string, imageSrc: string }).isRequired,
  index: number.isRequired,
  regionId: string.isRequired,
};

export default TripPlaces;
