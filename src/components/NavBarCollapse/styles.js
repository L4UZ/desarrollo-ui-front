import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  root: {
    position: 'absolute',
    right: 0,
  },
  buttonBar: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    display: 'contents',
  },
  link: {
    textDecoration: 'none',
  },
  signButton: {
    color: theme.palette.common.white,
  },
}));
