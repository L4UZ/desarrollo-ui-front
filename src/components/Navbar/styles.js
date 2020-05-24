import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  link: {
    textDecoration: 'none',
  },
  title: {
    color: theme.palette.common.white,
  },
  signButton: {
    color: theme.palette.common.white,
  },
  navBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: '5rem',
  },
}));
