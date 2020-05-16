import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';

import useStyles from './styles';
import ContinentDetail from '../../components/ContinentDetail';
import { CONTINENTS } from '../../api/queries';

const Home = () => {
  const classes = useStyles();
  const { data, loading } = useQuery(CONTINENTS);

  if (loading) return <div>Loading..</div>;

  return (
    <Container component="main" className={classes.container}>
      <Grid container spacing={2} direction="column">
        {data.continents.map(continent => (
          <ContinentDetail continent={continent} />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
