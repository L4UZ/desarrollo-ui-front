import React from 'react';
import { Container, Typography, Grid, CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import useStyles from './styles';
import { TRIP } from '../../api/queries';
import TripPlaces from '../../components/TripPlaces';

const TripDetail = () => {
  const classes = useStyles();

  const { tripId } = useParams();
  const {
    data: {
      trip: { name, user, places },
    },
    loading,
  } = useQuery(TRIP, { variables: { tripId } });

  return (
    <Container component="main" className={classes.container}>
      {loading ? (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      ) : (
        <div>
          <div>
            <Typography variant="h4" gutterBottom className={classes.title}>
              {name}
            </Typography>
            <Typography variant="overline" gutterBottom className={classes.title}>
              <Typography variant="caption">
                By: {user.firstName}
                {user.lastName} ({user.email})
              </Typography>
            </Typography>
          </div>
          <Grid container spacing={2} direction="row" className={classes.grid}>
            {places.map((place, i) => (
              <TripPlaces key={place.id} regionId={place.id} place={place} index={i} />
            ))}
          </Grid>
        </div>
      )}
    </Container>
  );
};

export default TripDetail;
