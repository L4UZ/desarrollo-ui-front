import React from 'react';
import { Grid, Card, CardMedia, CardActionArea, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { string, number, shape } from 'prop-types';

import useStyles from './styles';

const RegionItem = ({ region, cols }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6} lg={cols * 3 || 3}>
      <Link to="/signIn" className={classes.link}>
        <Card className={classes.gridItem}>
          <CardActionArea>
            <CardMedia className={classes.img} image={region.imageSrc} title={region.name} />
            <div className={classes.titleBar}>
              <Typography component="h6" variant="h6">
                {region.name}
              </Typography>
            </div>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

RegionItem.propTypes = {
  region: shape({ name: string, imageSrc: string, cols: number, rows: number }).isRequired,
  cols: number,
};

RegionItem.defaultProps = {
  cols: 1,
};

export default RegionItem;
