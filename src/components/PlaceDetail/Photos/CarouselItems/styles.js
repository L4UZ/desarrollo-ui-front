import { makeStyles } from '@material-ui/core';

export default makeStyles(({ palette }) => ({
  arrowContainer: {
    alignItems: 'center',
    bottom: 0,
    color: palette.common.white,
    cursor: 'pointer',
    display: 'flex',
    height: '100%',
    padding: '0 1rem',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  left: {
    background: 'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
    left: 0,
  },
  right: {
    background: 'linear-gradient(270deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
    right: 0,
  },
}));
