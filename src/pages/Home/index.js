import React from 'react';
import { Grid, Container, CircularProgress } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';

import useStyles from './styles';
import ContinentDetail from '../../components/ContinentDetail';
import { CONTINENTS } from '../../api/queries';
import ContinentAnchors from '../../components/ContinentAnchors';

const Home = () => {
  const classes = useStyles();
  const { data, loading } = useQuery(CONTINENTS);

  return (
    <div>
      <div className={classes.landing}>
        <img
          src="https://images.unsplash.com/photo-1576023867099-db39d6f37a03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2735&q=80"
          alt="background"
          className={classes.landingImg}
        />
      </div>
      <Container component="main" className={classes.container}>
        {data && <ContinentAnchors continents={data.continents} />}
        <Grid container spacing={2} direction="column">
          {loading ? (
            <Grid item xl={12} className={classes.spinner}>
              <CircularProgress />
            </Grid>
          ) : (
            data.continents.map(continent => (
              <ContinentDetail key={continent.id} continent={continent} />
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
