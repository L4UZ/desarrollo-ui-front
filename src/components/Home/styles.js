import { makeStyles, fade } from '@material-ui/core';
import Color from 'color';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tile: {
    cursor: 'pointer',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    zIndex: '3',
    padding: '10px',
    marginTop: '-50px',
    color: 'white',
  },
  gridItem: {
    height: '250',
    maxHeight: '250',
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    minHeight: '200px',
  },
}));
