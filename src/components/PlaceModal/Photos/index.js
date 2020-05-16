import React from 'react';
import { Grid, Typography, GridList, GridListTile, ButtonBase } from '@material-ui/core';
import { string, arrayOf, func, object } from 'prop-types';

import useStyles from './styles';

const Photos = ({ name, imagesSrc, setPopoverImg }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.gridItem}>
      <Typography variant="h6" gutterBottom>
        Photos
      </Typography>
      <GridList cellHeight={200} className={classes.sideScroller} cols={3}>
        {imagesSrc.map(image => (
          <GridListTile
            key={name}
            className={classes.photoContainer}
            classes={{
              root: classes.gridListTile,
            }}
            cols={1}
          >
            <ButtonBase focusRipple onClick={() => setPopoverImg(image)}>
              <img src={image} alt={name} className={classes.img} />
            </ButtonBase>
          </GridListTile>
        ))}
      </GridList>
    </Grid>
  );
};

Photos.propTypes = {
  name: string.isRequired,
  imagesSrc: arrayOf(object).isRequired,
  setPopoverImg: func.isRequired,
};

export default Photos;
