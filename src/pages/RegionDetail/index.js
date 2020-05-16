import React, { useState } from 'react';
import { Typography, Grid, Container } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import PlaceItem from '../../components/PlaceItem';
import PlaceModal from '../../components/PlaceModal';
import { REGION_DETAIL } from '../../api/queries';

const RegionDetail = () => {
  const { regionId } = useParams();
  const [selectedPlace, setSelectedPlace] = useState(null);
  const { data, loading } = useQuery(REGION_DETAIL, { variables: { regionId } });

  if (loading) return <div>loading..</div>;
  const { region } = data;

  return (
    <Container>
      <Typography variant="h1">{region.name}</Typography>
      <Grid container spacing={3}>
        {region.places.map(place => (
          <PlaceItem key={place.id} place={place} onClick={() => setSelectedPlace(place)} />
        ))}
      </Grid>
      {selectedPlace && (
        <PlaceModal
          open={!!selectedPlace}
          handleClose={() => setSelectedPlace(null)}
          place={selectedPlace}
        />
      )}
    </Container>
  );
};

export default RegionDetail;
