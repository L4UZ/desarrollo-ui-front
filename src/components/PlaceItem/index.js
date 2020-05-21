import React from 'react';
import { shape, string, arrayOf } from 'prop-types';
import { Grid, Card, CardActionArea, CardMedia, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const PlaceItem = ({ regionId, place: { id, name, imagesSrc } }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link to={`/region-detail/${regionId}/${id}`} className={classes.link}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={`Image of ${name}`}
              height="140"
              image={imagesSrc[0]}
              title={`Image of ${name}`}
            />
            <div className={classes.textOverlay}>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
            </div>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

PlaceItem.propTypes = {
  regionId: string.isRequired,
  place: shape({
    id: string,
    name: string,
    imagesSrc: arrayOf(string),
  }).isRequired,
};

export default PlaceItem;
