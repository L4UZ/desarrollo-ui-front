import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(6),
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  menuItem: {
    width: '10rem',
    paddingLeft: '2rem',
  },
}));
