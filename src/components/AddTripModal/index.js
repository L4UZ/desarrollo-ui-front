import React from 'react';
import {
  Modal,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from '@material-ui/core';
import { Formik } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { func } from 'prop-types';
import Alert from '@material-ui/lab/Alert';

import useStyles from './styles';
import { ADD_TRIP } from '../../api/mutations';
import { USER_TRIPS } from '../../api/queries';
import { useAuth } from '../../AuthProvider';

const AddTripModal = ({ isOpened, handleClose }) => {
  const classes = useStyles();
  const { token } = useAuth();

  const [addTrip, { loading, error }] = useMutation(ADD_TRIP, {
    update(cache, { data: { addTrip: newTrip } }) {
      const { trips } = cache.readQuery({ query: USER_TRIPS, variables: { token } });
      cache.writeQuery({
        query: USER_TRIPS,
        variables: { token },
        data: { trips: [...trips, newTrip] },
      });
    },
  });

  return (
    <Modal
      open={isOpened}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Container className={classes.modal}>
        <Paper className={classes.paper}>
          <Typography variant="h4">New trip</Typography>
          <Formik
            initialValues={{ name: '' }}
            onSubmit={(values, { resetForm }) => {
              addTrip({ variables: { trip: { token, name: values.name } } });
              resetForm();
              handleClose();
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
              <form onSubmit={handleSubmit} className={classes.form}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Trip name"
                  name="name"
                  autoComplete="name"
                  type="text"
                  placeholder="Enter new trip's name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  error={errors.name && touched.name}
                  helperText={touched.name && errors.name}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Add trip
                </Button>
              </form>
            )}
          </Formik>
          {loading && (
            <div className={classes.spinner}>
              <CircularProgress />
            </div>
          )}
          {error && (
            <Alert severity="error" className={classes.errorMessage}>
              Error creating trip
            </Alert>
          )}
        </Paper>
      </Container>
    </Modal>
  );
};

AddTripModal.propTypes = {
  isOpened: func.isRequired,
  handleClose: func.isRequired,
};

export default AddTripModal;
