import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';

const region = {
  name: 'Mar del Plata',
  places: [
    {
      name: 'Cuenca del Mar del Plata',
      description: 'Nice place',
      imagesSrc: [
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
      ],
    },
    {
      name: 'Cuenca del Mar del Plata',
      description: 'Nice place',
      imagesSrc: [
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
      ],
    },
  ],
};

const RegionDetail = () => {
  const { regionId } = useParams();
  console.log(regionId);
  const { name: regionName, places } = region;
  return (
    <div>
      <Typography variant="h1">{regionName}</Typography>
      <Grid container spacing={3}>
        {places.map(({ name, description }, i) => (
          <Grid item key={`${name}${i}`}>
            {name}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RegionDetail;
