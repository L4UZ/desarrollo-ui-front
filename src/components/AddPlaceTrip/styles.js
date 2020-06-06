import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(4),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  menuItem: {
    width: '10rem',
    paddingLeft: '2rem',
  },
}));
