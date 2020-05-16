import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';

import useStyles from './styles';
import ContinentDetail from '../../components/ContinentDetail';
import { CONTINENTS } from '../../api/queries';
import ContinentAnchors from '../../components/ContinentAnchors';

const Home = () => {
  const classes = useStyles();
  const { data, loading } = useQuery(CONTINENTS);

  if (loading) return <div>Loading..</div>;

  return (
    <Container component="main" className={classes.container}>
      <ContinentAnchors continents={data.continents} />
      <Grid container spacing={2} direction="column">
        {data.continents.map(continent => (
          <ContinentDetail key={continent.id} continent={continent} />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
