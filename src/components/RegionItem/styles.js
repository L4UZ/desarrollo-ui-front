import { makeStyles, fade } from '@material-ui/core';

export default makeStyles(theme => ({
  titleBar: {
    background: `linear-gradient(to top, ${fade(theme.palette.common.black, 0.8)} 0%, ${fade(
      theme.palette.common.black,
      0.3
    )} 70%, ${fade(theme.palette.common.black, 0)} 100%)`,
    zIndex: '3',
    padding: '0.6rem',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    color: `${theme.palette.common.white}`,
  },
  gridItem: {
    height: '14rem',
    maxHeight: '15rem',
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    display: 'flex',
    overflow: 'hidden',
    minHeight: '14rem',
  },
  link: {
    textDecoration: 'none',
  },
}));
