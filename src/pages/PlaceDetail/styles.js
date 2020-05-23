import { makeStyles, fade } from '@material-ui/core';

export default makeStyles(theme => ({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '90%',
    width: '100%',
    overflow: 'hidden',
    outline: 0,
  },
  content: {
    height: '100%',
    width: '100%',
    padding: '5%',
    overflow: 'auto',
    position: 'relative',

    '&::-webkit-scrollbar-track': {
      WebkitBoxShadow: `inset 0 0 6px ${fade(theme.palette.common.black, 0.3)}`,
      borderRadius: '0.62rem',
      backgroundColor: '#F5F5F5',
    },
    '&::-webkit-scrollbar': {
      width: '0.75rem',
      backgroundColor: '#F5F5F5',
      height: '1rem',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '0.62rem',
      WebkitBoxShadow: `inset 0 0 6px ${fade(theme.palette.common.black, 0.3)}`,
      backgroundColor: '#555',
    },
  },
  closeIcon: {
    cursor: 'pointer',
    height: 'auto',
    margin: '1rem',
    padding: '0.5rem',
    position: 'absolute',
    right: 0,
    top: 0,
    width: '2.5rem',
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    display: 'flex',
    overflow: 'hidden',
    minHeight: '14rem',
    minWidth: '20rem',
  },
}));
