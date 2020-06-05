import React, { useState } from 'react';
import { Menu, Button, MenuItem, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';
import routes from '../../constants/routes';
import { useAuth } from '../../AuthProvider';

const NavBarCollapseMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { token, resetToken } = useAuth();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const classes = useStyles();

  return (
    <div className={classes.buttonCollapse}>
      <IconButton onClick={handleClick}>
        <MenuIcon style={{ color: 'white' }} fontSize="large" />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {token ? (
          <div className={classes.menu}>
            <Link to={routes.trips.path} className={classes.link}>
              <Button onClick={() => setAnchorEl(null)} className={classes.menuBtn}>
                <MenuItem className={classes.menuItem}>Trips</MenuItem>
              </Button>
            </Link>
            <Divider className={classes.divider} />
            <Button
              onClick={() => {
                resetToken();
                setAnchorEl(null);
              }}
              className={classes.menuLogoutBtn}
            >
              <MenuItem className={classes.menuItem}>Logout</MenuItem>
            </Button>
          </div>
        ) : (
          <div className={classes.menu}>
            <Link to={routes.signin.path} className={classes.link}>
              <Button onClick={() => setAnchorEl(null)} className={classes.menuBtn}>
                <MenuItem className={classes.menuItem}>Login</MenuItem>
              </Button>
            </Link>
            <Divider className={classes.divider} />
            <Link to={routes.signup.path} className={classes.link}>
              <Button onClick={() => setAnchorEl(null)} className={classes.menuBtn}>
                <MenuItem className={classes.menuItem}>SignUp</MenuItem>
              </Button>
            </Link>
          </div>
        )}
      </Menu>
    </div>
  );
};

export default NavBarCollapseMenu;
