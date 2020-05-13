import React from 'react';
import { shape, string, arrayOf, func } from 'prop-types';
import { Grid, Card, CardActionArea, CardMedia, Typography } from '@material-ui/core';

import useStyles from './styles';

const PlaceItem = ({ place: { name, imagesSrc }, onClick }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card onClick={onClick}>
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
    </Grid>
  );
};

PlaceItem.propTypes = {
  place: shape({
    name: string,
    imagesSrc: arrayOf(string),
  }).isRequired,
  onClick: func.isRequired,
};

export default PlaceItem;
