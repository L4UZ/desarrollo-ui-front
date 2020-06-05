import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  buttonCollapse: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    margin: '10px',
    boxShadow: 'none',
  },
  link: {
    textDecoration: 'none',
    height: '5rem',
  },
  menu: {
    display: 'inline-grid',
    width: '10rem',
  },
  menuBtn: {
    height: 'inherit',
    width: '100%',
  },
  menuLogoutBtn: {
    width: '100%',
    height: '5rem',
  },
  menuItem: {
    fontSize: 'x-large',
  },
  divider: {
    height: '.25rem',
  },
}));
