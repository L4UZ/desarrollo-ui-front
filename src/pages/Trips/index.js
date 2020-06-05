import React, { useState } from 'react';
import { Container, Typography, Grid, CircularProgress, Button } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { useQuery } from '@apollo/react-hooks';
import { Redirect } from 'react-router-dom';

import useStyles from './styles';
import { useAuth } from '../../AuthProvider/index';
import { USER_TRIPS } from '../../api/queries';
import TripItem from '../../components/TripItem';
import AddTripModal from '../../components/AddTripModal';

const Trips = () => {
  const classes = useStyles();
  const { token } = useAuth();
  const { data, loading } = useQuery(USER_TRIPS, { variables: { token } });

  const [open, setOpen] = useState(false);

  return (
    <Container component="main" className={classes.container}>
      {!token && <Redirect to={{ path: '/' }} />}
      <div className={classes.titleDiv}>
        <Typography variant="h4" gutterBottom className={classes.title}>
          My Trips
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="primary"
          startIcon={<AddCircle />}
          className={classes.addTripBtn}
          onClick={() => setOpen(true)}
        >
          Add trip
        </Button>
      </div>
      {loading ? (
        <Grid container spacing={2} direction="column">
          <Grid item xl={12} className={classes.spinner}>
            <CircularProgress />
          </Grid>
        </Grid>
      ) : (
        data && (
          <div>
            <Grid container spacing={3} className={classes.items}>
              {data.trips.map(trip => (
                <TripItem key={trip.id} trip={trip} />
              ))}
            </Grid>
          </div>
        )
      )}
      {open && <AddTripModal isOpened={open} handleClose={() => setOpen(false)} />}
    </Container>
  );
};

export default Trips;
