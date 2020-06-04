import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  container: {
    marginTop: '7rem',
  },
  titleDiv: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    color: theme.palette.primary.main,
    paddingLeft: '0.5rem',
    marginBottom: 0,
  },
  grid: {
    marginTop: '1rem',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
  },
}));
