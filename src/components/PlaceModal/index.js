import React from 'react';
import { Modal } from '@material-ui/core';
import { bool, func, shape, string } from 'prop-types';

const PlaceModal = ({ open, handleClose, place }) => (
  // <div>{place.name}</div>
  <Modal open={open} onClose={handleClose}>
    <div>{place.name}</div>
  </Modal>
);

PlaceModal.propTypes = {
  open: bool.isRequired,
  handleClose: func.isRequired,
  place: shape({
    name: string,
  }).isRequired,
};

export default PlaceModal;
