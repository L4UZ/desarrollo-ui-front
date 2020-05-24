import { makeStyles, fade } from '@material-ui/core';

export default makeStyles(({ palette, shape: { borderRadius } }) => ({
  container: {
    padding: '1rem',
    margin: '0.6rem 0 0.4rem',
    position: 'relative',
  },
  gridItem: {
    marginTop: '1rem',
    padding: 0,
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  submit: {
    width: 'fit-content',
    padding: '0.5rem 2rem',
  },
  overlay: {
    alignItems: 'center',
    backdropFilter: 'none',
    background: 'none',
    bottom: 0,
    borderRadius,
    display: 'flex',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
    '& $overlayButton': {
      display: 'none',
    },
    '&:hover': {
      backdropFilter: 'blur(2px)',
      background: fade(palette.common.black, 0.1),
      '& $overlayButton': {
        display: 'block',
      },
    },
  },
  overlayButton: {
    width: 'fit-content',
    padding: '0.5rem 1.5rem',
  },
  loading: {
    position: 'absolute',
    bottom: '0.5rem',
    left: '1rem',
  },
}));
