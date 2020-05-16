import React from 'react';
import { Modal, Paper, Container, Typography, Grid, Popover } from '@material-ui/core';
import { bool, func, shape, string } from 'prop-types';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';
import Desctiption from './Description';
import Photos from './Photos';
import Activities from './Activities';
import ListReviws from './ListReviews';
import AddReview from './AddReview';

const PlaceModal = ({
  open,
  handleClose,
  place: { name, description, imagesSrc, activities, reviews },
}) => {
  const classes = useStyles();

  const [popoverImg, setPopoverImg] = React.useState(null);
  const [review, setReview] = React.useState(2);

  return (
    <Modal open={open} onClose={handleClose} className={classes.modal}>
      <Container maxWidth="lg" className={classes.container}>
        <Paper className={classes.content}>
          <Rating name="Score" readOnly="true" value={4} />
          <Typography variant="h4" gutterBottom>
            {name}
          </Typography>
          <Grid container spacing={3}>
            <Desctiption description={description} />
            <Photos name={name} imagesSrc={imagesSrc} setPopoverImg={setPopoverImg} />
            <Activities activities={activities} />
            <ListReviws reviews={reviews} />
            <AddReview setReview={setReview} />
          </Grid>
        </Paper>
        <Popover
          id="popover"
          open={!!popoverImg}
          onClose={() => setPopoverImg(null)}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
        >
          <img src={popoverImg} alt={name} className={classes.img} />
        </Popover>
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
