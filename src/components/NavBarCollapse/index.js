import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useAuth } from '../../AuthProvider';
import useStyles from './styles';
import routes from '../../constants/routes';
import NavBarCollapseMenu from '../NavBarCollapseMenu';

const NavBarCollapse = () => {
  const classes = useStyles();
  const { token, resetToken } = useAuth();

  return (
    <div style={{ display: 'contents' }}>
      <NavBarCollapseMenu />
      <div className={classes.buttonBar} id="appbar-collapse">
        {token ? (
          <div style={{ display: 'contents' }}>
            <div style={{ flex: 'auto' }}>
              <Link to={routes.trips.path} className={classes.link}>
                <Button className={classes.navButton}>Trips</Button>
              </Link>
            </div>
            <div>
              <Button className={classes.navButton} onClick={resetToken}>
                Logout
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <Link to={routes.signin.path} className={classes.link}>
              <Button className={classes.navButton}>Login</Button>
            </Link>
            <Link to={routes.signup.path} className={classes.link}>
              <Button className={classes.navButton}>SignUp</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBarCollapse;
