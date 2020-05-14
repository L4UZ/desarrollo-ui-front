import React from 'react';
import { Grid, Card, CardMedia, CardActionArea, Typography, Container } from '@material-ui/core';

import useStyles from './styles';
import routes from '../../constants/routes';
import { Link } from 'react-router-dom';

const Home = () => {
  const classes = useStyles();
  const regions1 = [
    {
      name: 'Tanganica',
      imageSrc:
        'https://images.unsplash.com/photo-1588806381104-7249f5aca26a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      cols: 2,
      rows: 2,
    },
    {
      name: 'Namibia',
      imageSrc:
        'https://images.unsplash.com/photo-1536270213414-83e51bdcdd74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
      cols: 2,
    },
    {
      name: 'Rumania',
      imageSrc:
        'https://images.unsplash.com/photo-1544169086-9ad307051f37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      cols: 2,
    },
    {
      name: 'Giza',
      imageSrc:
        'https://images.unsplash.com/photo-1566288623394-377af472d81b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
    },
    {
      name: 'Wales',
      imageSrc:
        'https://images.unsplash.com/photo-1478029038552-886ff55b44d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      rows: 2,
    },
    {
      name: 'Alps',
      imageSrc:
        'https://images.unsplash.com/photo-1527095655060-4026c4af2b25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      cols: 4,
    },
  ];

  const regions2 = [
    {
      name: 'New York',
      imageSrc:
        'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      cols: 2,
      rows: 2,
    },
    {
      name: 'Brasilia',
      imageSrc:
        'https://images.unsplash.com/photo-1521516730808-2cf7f175e179?ixlib=rb-1.2.1&auto=format&fit=crop&w=706&q=80',
      cols: 2,
    },
    {
      name: 'South Korea',
      imageSrc:
        'https://images.unsplash.com/photo-1448523183439-d2ac62aca997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      cols: 4,
    },
  ];

  const continents = [
    {
      name: 'Este continente',
      regions: regions1,
    },
    {
      name: 'Otro continente',
      regions: regions2,
    },
  ];

  return (
    <Container component="main">
      <Grid container spacing={2} direction="column">
        {continents.map(continent => (
          <ContinentComponent continent={continent} />
        ))}
      </Grid>
    </Container>
  );
};

const ContinentComponent = ({ continent }) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" className={classes.continentTitle}>
        {continent.name}
      </Typography>
      <Grid container spacing={2} direction="row">
        {continent.regions.map(region => (
          <RegionComponent region={region} cols={region.cols} />
        ))}
      </Grid>
    </div>
  );
};

const RegionComponent = ({ region, cols, ...props }) => {
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

export default Home;
