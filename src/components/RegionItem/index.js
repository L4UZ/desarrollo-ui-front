import React from 'react';
import { Grid, Card, CardMedia, CardActionArea, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { string, number, shape } from 'prop-types';

import useStyles from './styles';

const RegionItem = ({ region: { id, name, imageSrc } }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6} lg={3}>
      <Link to={`/region-detail/${id}`} className={classes.link}>
        <Card className={classes.gridItem}>
          <CardActionArea>
            <CardMedia className={classes.img} image={imageSrc} title={name} />
            <div className={classes.titleBar}>
              <Typography component="h6" variant="h6">
                {name}
              </Typography>
            </div>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

RegionItem.propTypes = {
  region: shape({ id: string, name: string, imageSrc: string, cols: number, rows: number })
    .isRequired,
};

export default RegionItem;
