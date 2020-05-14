import React from 'react';
import { Modal, Paper, Container } from '@material-ui/core';
import { bool, func, shape, string } from 'prop-types';

import useStyles from './styles';

const PlaceModal = ({ open, handleClose, place }) => {
  const classes = useStyles();
  return (
    <Modal open={open} onClose={handleClose} className={classes.modal}>
      <Container maxWidth="md" className={classes.container}>
        <Paper className={classes.content}>{place.name}</Paper>
      </Container>
    </Modal>
  );
};

PlaceModal.propTypes = {
  open: bool.isRequired,
  handleClose: func.isRequired,
  place: shape({
    name: string,
  }).isRequired,
};

export default PlaceModal;
