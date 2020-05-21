import React from 'react';
import { Container, Button, AppBar, Typography, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useAuth } from '../../AuthProvider';
import useStyles from './styles';
import routes from '../../constants/routes';

const Navbar = () => {
  const classes = useStyles();

  const { token, resetToken } = useAuth();

  return (
    <Container>
      <AppBar position="fixed">
        <Toolbar>
          <Container
            classes={{
              root: classes.navBarContainer,
            }}
          >
            <div>
              <Link to={routes.default.path} className={classes.link}>
                <Typography variant="h6" className={classes.title}>
                  UTravel
                </Typography>
              </Link>
            </div>
            {token ? (
              <div>
                <Button className={classes.signButton} onClick={resetToken}>
                  Logout
                </Button>
              </div>
            ) : (
              <div>
                <Link to={routes.signin.path} className={classes.link}>
                  <Button className={classes.signButton}>Login</Button>
                </Link>
                <Link to={routes.signup.path} className={classes.link}>
                  <Button className={classes.signButton}>Register</Button>
                </Link>
              </div>
            )}
          </Container>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
