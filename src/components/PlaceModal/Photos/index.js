import React from 'react';
import { Grid, Typography, useTheme } from '@material-ui/core';
import { string, arrayOf } from 'prop-types';
import Carousel from '@brainhubeu/react-carousel';

import { ArrowLeft, ArrowRight } from './CarouselItems';
import useStyles from './styles';

const Photos = ({ name, imagesSrc }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid item xs={12} className={classes.gridItem}>
      <Typography variant="h6" gutterBottom>
        Photos
      </Typography>
      <Carousel
        className={classes.carousel}
        dots
        addArrowClickHandler
        autoPlay={3000}
        stopAutoPlayOnHover
        arrowLeft={<ArrowLeft />}
        arrowRight={<ArrowRight />}
        infinite
        centered
        slidesPerPage={1.3}
        breakpoints={{
          [theme.breakpoints.values.sm]: {
            arrowLeft: null,
            arrowRight: null,
            slidesPerPage: 1,
          },
          [theme.breakpoints.values.md]: {
            infinite: false,
            slidesPerPage: 1,
          },
          [theme.breakpoints.values.lg]: {
            centered: true,
            slidesPerPage: 1.3,
          },
        }}
      >
        {imagesSrc.map(image => (
          <div key={image} className={classes.imgContainer}>
            <img src={image} alt={name} className={classes.img} />
          </div>
        ))}
      </Carousel>
    </Grid>
  );
};

Photos.propTypes = {
  name: string.isRequired,
  imagesSrc: arrayOf(string).isRequired,
};

export default Photos;
