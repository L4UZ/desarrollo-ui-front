import React, { useState, useRef } from 'react';
import { Menu, MenuItem, Fab, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import useStyles from './styles';
import { useAuth } from '../../AuthProvider';
import { USER_TRIPS } from '../../api/queries';
import { ADD_PLACE_TRIP } from '../../api/mutations';

const AddPlaceTrip = () => {
  const classes = useStyles();
  const { token } = useAuth();
  const { regionId, placeId } = useParams();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(null);
  const { data, loading } = useQuery(USER_TRIPS, { variables: { token } });

  const [AddPlaceToTrip] = useMutation(ADD_PLACE_TRIP, {
    onCompleted: () => setSnackbarMessage({ severity: 'success', message: 'Added successfully' }),
    onError: () =>
      setSnackbarMessage({ severity: 'error', message: 'There was a problem adding the place.' }),
  });
  const anchorElRef = useRef();

  return (
    <>
      {token && (
        <>
          <div>
            <div className={classes.fab} ref={anchorElRef}>
              <Fab color="primary" variant="extended" onClick={() => setIsMenuOpened(true)}>
                <NavigationIcon className={classes.extendedIcon} />
                Add to trip
              </Fab>
            </div>
            <Menu
              id="addPlace-menu"
              anchorEl={anchorElRef.current}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              open={isMenuOpened}
              onClose={() => {
                setIsMenuOpened(false);
              }}
              container={anchorElRef.current?.parentNode}
            >
              {!loading &&
                data.trips.map(trip => (
                  <MenuItem
                    onClick={() => {
                      AddPlaceToTrip({
                        variables: { tripPlace: { token, tripId: trip.id, regionId, placeId } },
                      });
                      setIsMenuOpened(false);
                    }}
                    key={trip.id}
                    className={classes.menuItem}
                  >
                    {trip.name}
                  </MenuItem>
                ))}
            </Menu>
          </div>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={!!snackbarMessage}
            onClose={() => setSnackbarMessage()}
            autoHideDuration={5000}
          >
            <Alert severity={snackbarMessage?.severity}>{snackbarMessage?.message}</Alert>
          </Snackbar>
        </>
      )}
    </>
  );
};

export default AddPlaceTrip;
