import React, { useState } from 'react';
import { Modal, Paper, Container, Typography, Grid, Popover } from '@material-ui/core';
import { bool, func, string } from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import { useQuery } from '@apollo/react-hooks';
import { isEmpty } from 'lodash';

import useStyles from './styles';
import Desctiption from './Description';
import Photos from './Photos';
import Activities from './Activities';
import ListReviws from './ListReviews';
import AddReview from './AddReview';
import { PLACE_DETAIL } from '../../api/queries';

const PlaceModal = ({ open, handleClose, placeId }) => {
  const classes = useStyles();
  const [popoverImg, setPopoverImg] = useState(null);

  const { data, loading } = useQuery(PLACE_DETAIL, { variables: { placeId } });

  return (
    <Modal open={open} onClose={handleClose} className={classes.modal}>
      <Container maxWidth="lg" className={classes.container}>
        <Paper className={classes.content}>
          {loading && <div>Loading...</div>}
          {data && (
            <>
              <Rating name="Score" readOnly value={4} />
              <Typography variant="h4" gutterBottom>
                {data.place.name}
              </Typography>
              <Grid container spacing={3}>
                <Desctiption description={data.place.description} />
                <Photos
                  name={data.place.name}
                  imagesSrc={data.place.imagesSrc}
                  setPopoverImg={setPopoverImg}
                />
                {!isEmpty(data.place.activities) && (
                  <Activities activities={data.place.activities} />
                )}
                <ListReviws reviews={data.place.reviews} />
                <AddReview />
              </Grid>
            </>
          )}
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
          <img src={popoverImg} alt={data && data.place.name} className={classes.img} />
        </Popover>
      </Container>
    </Modal>
  );
};

PlaceModal.propTypes = {
  open: bool.isRequired,
  handleClose: func.isRequired,
  placeId: string.isRequired,
};

export default PlaceModal;
