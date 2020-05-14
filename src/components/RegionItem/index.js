import React from 'react';
import { Grid, Card, CardMedia, CardActionArea, Typography } from '@material-ui/core';

import useStyles from './styles';
import routes from '../../constants/routes';
import { Link } from 'react-router-dom';

const RegionItem = ({ region, cols }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6} lg={cols * 3 || 3}>
      <Link to={routes.signin.path} className={classes.link}>
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

export default RegionItem;
