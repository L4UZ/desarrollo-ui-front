import { makeStyles, fade } from '@material-ui/core';

export default makeStyles(theme => ({
  gridItem: {
    marginTop: '1rem',
    position: 'relative',
    padding: 0,
  },
  sideScroller: {
    overflow: 'auto',
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    paddingBottom: '0.4rem',
    '&::-webkit-scrollbar-track': {
      WebkitBoxShadow: `inset 0 0 6px ${fade(theme.palette.common.black, 0.3)}`,
      borderRadius: '0.62rem',
      backgroundColor: '#F5F5F5',
    },
    '&::-webkit-scrollbar': {
      width: '0.75rem',
      backgroundColor: '#F5F5F5',
      height: '0.5rem',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '0.62rem',
      WebkitBoxShadow: `inset 0 0 6px ${fade(theme.palette.common.black, 0.3)}`,
      backgroundColor: '#555',
    },
  },
  photoContainer: {
    width: '20rem',
  },
  gridListTile: {
    minWidth: '20rem',
    marginRight: '0.2rem',
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
