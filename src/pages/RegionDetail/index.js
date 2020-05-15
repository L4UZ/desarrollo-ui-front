import React, { useState } from 'react';
import { Typography, Grid, Container } from '@material-ui/core';
import PlaceItem from '../../components/PlaceItem';
import PlaceModal from '../../components/PlaceModal';

const region = {
  name: 'Mar del Plata',
  places: [
    {
      name: 'Cuenca del Mar del Plata',
      description: 'Nice place',
      imagesSrc: [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
      ],
      activities: [
        {
          name: 'Activity 1',
          price: 3200,
        },
        {
          name: 'Activity 2',
          price: 6400,
        },
      ],
      reviews: [
        {
          comment: 'Really nice place!',
          score: 5,
        },
        {
          comment: 'Piece of shit place, would not recommend',
          score: 0,
        },

        {
          comment: 'Ma o meno',
          score: 3,
        },
      ],
    },
    {
      name: 'La otra cuenca del Mar del Plata',
      description: 'Nice place',
      imagesSrc: [
        'https://images.unsplash.com/photo-1584672277148-fa8d3b8e3780?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      ],
      activities: [
        {
          name: 'Activity 1',
          price: 3200,
        },
        {
          name: 'Activity 2',
          price: 6400,
        },
      ],
      reviews: [
        {
          comment: 'Really nice place!',
          score: 5,
        },
      ],
    },
  ],
};

const RegionDetail = () => {
  // const { regionId } = useParams();
  const { name: regionName, places } = region;

  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <Container>
      <Typography variant="h1">{regionName}</Typography>
      <Grid container spacing={3}>
        {places.map(place => (
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
