import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { shape, string, arrayOf } from 'prop-types';
import { Button, Container, Grid } from '@material-ui/core';

import useStyles from './styles';

const ContinentAnchors = ({ continents }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" fixed>
      <Grid container className={classes.container}>
        {continents.map(({ id, name }) => (
          <Grid item className={classes.gridItem} key={id} lg={2} md={4} sm={6} xs={6}>
            <Link smooth className={classes.linkContainer} to={`#${id}`}>
              <Button className={classes.link} variant="outlined" color="secondary" size="large">
                {name}
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

ContinentAnchors.propTypes = {
  continents: arrayOf(
    shape({
      id: string,
      name: string,
    })
  ).isRequired,
};

export default ContinentAnchors;
