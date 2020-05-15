import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '90%',
    width: '90%',
    overflow: 'hidden',
    outline: 0,
  },
  content: {
    height: '100%',
    width: '100%',
    padding: '5%',
    overflow: 'auto',
    '&::-webkit-scrollbar-track': {
      WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
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
      WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,.3)',
      backgroundColor: '#555',
    },
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    display: 'flex',
    overflow: 'hidden',
    minHeight: '14rem',
    width: '100%',
  },
  gridItem: {
    // height: '14rem',
    // maxHeight: '15rem',
    marginTop: '1rem',
  },
  sideScroller: {
    overflow: 'auto',
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    paddingBottom: '0.4rem',
    '&::-webkit-scrollbar-track': {
      WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
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
      WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,.3)',
      backgroundColor: '#555',
    },
  },
  reviews: {
    padding: '1rem',
    margin: '0.6rem 0 0.4rem',
  },
  reviewButton: {
    marginTop: '0.5rem',
    left: 0,
  },
}));
