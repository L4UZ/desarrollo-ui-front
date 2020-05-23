import React from 'react';
import { Typography, Grid, Container, CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import useStyles from './styles';
import PlaceItem from '../../components/PlaceItem';
import { REGION_DETAIL } from '../../api/queries';
import Breadcrumbs from '../../components/Breadcrumbs';

const RegionDetail = () => {
  const classes = useStyles();
  const { regionId } = useParams();
  const { data, loading } = useQuery(REGION_DETAIL, { variables: { regionId } });

  if (loading) return <div>loading..</div>;
  const { region } = data;

  return (
    <Container className={classes.container}>
      {loading ? (
        <Grid container spacing={2} direction="column">
          <Grid item xl={12} className={classes.spinner}>
            <CircularProgress />
          </Grid>
        </Grid>
      ) : (
        <div>
          <Breadcrumbs regionId={regionId} depth={1} text={region.name} />
          <Grid container spacing={3} className={classes.items}>
            {region.places.map(place => (
              <PlaceItem key={place.id} regionId={regionId} place={place} />
            ))}
          </Grid>
        </div>
      )}
    </Container>
  );
};

export default RegionDetail;
