/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';

import useStyles from './styles';

const NotFound = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.landing}>
        <img
          src="https://images.unsplash.com/photo-1576023867099-db39d6f37a03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2735&q=80"
          alt="background"
          className={classes.landingImg}
        />
        <div className={classes.landingText}>
          <Typography variant="h2" className={classes.subtitle}>
            Page not found
          </Typography>
          <Link to="/" className={classes.link}>
            <Button variant="contained" color="secondary" size="large">
              RETURN TO HOME
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
