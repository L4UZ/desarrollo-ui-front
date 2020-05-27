import React from 'react';
import { Container, Grid, CircularProgress } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { useQuery } from '@apollo/react-hooks';
import { isEmpty } from 'lodash';
import { useParams } from 'react-router-dom';

import useStyles from './styles';
import Description from '../../components/PlaceDetail/Description';
import Photos from '../../components/PlaceDetail/Photos';
import Activities from '../../components/PlaceDetail/Activities';
import ListReviws from '../../components/PlaceDetail/ListReviews';
import AddReview from '../../components/PlaceDetail/AddReview';
import { PLACE_DETAIL } from '../../api/queries';
import Breadcrumbs from '../../components/Breadcrumbs';

const PlaceDetail = () => {
  const classes = useStyles();
  const { regionId, placeId } = useParams();

  const { data, loading } = useQuery(PLACE_DETAIL, { variables: { placeId } });

  return (
    <Container maxWidth="lg" className={classes.container}>
      <div className={classes.content}>
        {loading && (
          <Grid container spacing={2} direction="column">
            <Grid item xl={12} className={classes.spinner}>
              <CircularProgress />
            </Grid>
          </Grid>
        )}
        {!loading && data && data.place && (
          <>
            <Breadcrumbs
              regionId={regionId}
              depth={2}
              text={data.place.name}
              classes={{ li: classes.breadcrumbs }}
            />
            <Rating name="Score" readOnly value={data.place.overallScore || 0} />
            <Grid container spacing={3}>
              <Photos name={data.place.name} imagesSrc={data.place.imagesSrc} />
              <Description description={data.place.description} />
              {!isEmpty(data.place.activities) && <Activities activities={data.place.activities} />}
              <ListReviws reviews={data.place.reviews} />
              <AddReview regionId={regionId} placeId={placeId} />
            </Grid>
          </>
        )}
      </div>
    </Container>
  );
};

export default PlaceDetail;
