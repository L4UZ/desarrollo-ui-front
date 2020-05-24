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
  navbar: {
    minHeight: '64px',
    display: 'flex',
    justifyContent: 'center',
  },
  navBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  logo: {
    width: '5rem',
  },
}));
