import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
  },
  linkContainer: {
    height: '100%',
    padding: '.5rem',
    textDecoration: 'none',
    width: '100%',
  },
  link: {
    width: '100%',
    height: '100%',
    margin: '0 .1rem',
    padding: '1rem .5rem',
  },
}));
