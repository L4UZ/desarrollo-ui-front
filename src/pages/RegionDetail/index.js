import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import PlaceItem from '../../components/PlaceItem';
import { REGION_DETAIL } from '../../api/queries';
import Breadcrumbs from '../../components/Breadcrumbs';

const RegionDetail = () => {
  const { regionId } = useParams();
  const { data, loading } = useQuery(REGION_DETAIL, { variables: { regionId } });

  if (loading) return <div>loading..</div>;
  const { region } = data;

  return (
    <Container>
      <Breadcrumbs regionId={regionId} depth={1} text={region.name} />
      <Grid container spacing={3}>
        {region.places.map(place => (
          <PlaceItem key={place.id} regionId={regionId} place={place} />
        ))}
      </Grid>
    </Container>
  );
};

export default RegionDetail;
