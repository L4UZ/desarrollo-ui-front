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
  carousel: {
    position: 'relative',
  },
  imgContainer: {
    width: '100%',
    paddingTop: `${(1080 / 1920) * 100}%`,
    height: 0,
    position: 'relative',
  },
  img: {
    overflow: 'hidden',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    objectFit: 'cover',
    padding: '0 .2rem',
  },
}));
