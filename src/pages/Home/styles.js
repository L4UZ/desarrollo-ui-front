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
    marginBottom: '0.5rem',
    position: 'relative',
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
  link: {
    textDecoration: 'none',
  },
  landingText: {
    position: 'absolute',
    top: '10%',
    right: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },
  subtitle: {
    margin: '0 0 1.5rem',
  },
  logo: {
    width: '22rem',
    maxWidth: '90%',
    height: 'auto',
  },
  scrollContainer: {
    position: 'absolute',
    bottom: '1rem',
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  scrollIcon: {
    width: '4rem',
    height: 'auto',
  },
}));
