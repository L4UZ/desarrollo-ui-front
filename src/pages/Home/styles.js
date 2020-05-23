import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  title: {
    left: 0,
    rigth: 0,
  },
  landing: {
    width: '100%',
    height: '100%',
    marginBottom: '2rem',
  },
  landingImg: {
    objectFit: 'cover',
    width: '100%',
    height: 'calc(100vh - 64px)',
  },
  spinner: {
    marginTop: '4rem',
    margin: 'auto',
  },
}));
