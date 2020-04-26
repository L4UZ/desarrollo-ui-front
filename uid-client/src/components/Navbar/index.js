import React from 'react';
import { Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import routes from '../../constants/routes';

const Navbar = () => {
  const classes = useStyles();

  return (
    <Container>
      <Link to={routes.default.path} className={classes.link}>
        <Button>Home</Button>
      </Link>
      <Link to={routes.singin.path} className={classes.link}>
        <Button>Sign in</Button>
      </Link>
      <Link to={routes.signup.path} className={classes.link}>
        <Button>Sign up</Button>
      </Link>
    </Container>
  );
};

export default Navbar;
