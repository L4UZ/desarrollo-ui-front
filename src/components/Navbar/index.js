import React from 'react';
import { Container, AppBar, Toolbar, SvgIcon } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import routes from '../../constants/routes';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import NavBarCollapse from '../NavBarCollapse';

const Navbar = () => {
  const classes = useStyles();

  return (
    <Container>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
          <Container
            classes={{
              root: classes.navBarContainer,
            }}
          >
            <div>
              <Link to={routes.default.path} className={`${classes.link} ${classes.logo}`}>
                <SvgIcon fontSize="large" className={classes.logo} viewBox="0 0 56 24">
                  <Logo />
                </SvgIcon>
              </Link>
            </div>
            <NavBarCollapse />
          </Container>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
