import React, { useState } from 'react';
import { Paper, Container, Grid, Popover } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { useQuery } from '@apollo/react-hooks';
import { isEmpty } from 'lodash';
import { useParams } from 'react-router-dom';

import useStyles from './styles';
import Desctiption from '../../components/PlaceDetail/Description';
import Photos from '../../components/PlaceDetail/Photos';
import Activities from '../../components/PlaceDetail/Activities';
import ListReviws from '../../components/PlaceDetail/ListReviews';
import AddReview from '../../components/PlaceDetail/AddReview';
import { PLACE_DETAIL } from '../../api/queries';
import Breadcrumbs from '../../components/Breadcrumbs';

const PlaceDetail = () => {
  const classes = useStyles();
  const [popoverImg, setPopoverImg] = useState(null);
  const { regionId, placeId } = useParams();

  const { data, loading } = useQuery(PLACE_DETAIL, { variables: { placeId } });

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Paper className={classes.content}>
        {loading && <div>Loading...</div>}
        {!loading && data && data.place && (
          <>
            <Breadcrumbs regionId={regionId} depth={2} text={data.place.name} />
            <Rating name="Score" readOnly value={data.place.overallScore || 0} />
            <Grid container spacing={3}>
              <Desctiption description={data.place.description} />
              <Photos
                name={data.place.name}
                imagesSrc={data.place.imagesSrc}
                setPopoverImg={setPopoverImg}
              />
              {!isEmpty(data.place.activities) && <Activities activities={data.place.activities} />}
              <ListReviws reviews={data.place.reviews} />
              <AddReview regionId={regionId} placeId={placeId} />
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
  );
};

export default PlaceDetail;
