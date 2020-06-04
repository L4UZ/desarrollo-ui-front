import React from 'react';
import { shape, string } from 'prop-types';
import { Grid, Card, CardActionArea, CardMedia, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const TripItem = ({ trip: { id, name } }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link to={`/trip/${id}`} className={classes.link}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={`Image of ${name}`}
              height="140"
              image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=40"
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

TripItem.propTypes = {
  trip: shape({
    id: string,
    name: string,
  }).isRequired,
};

export default TripItem;
