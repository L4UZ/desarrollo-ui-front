import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

export default makeStyles(({ palette, spacing }) => ({
  textOverlay: {
    alignItems: 'center',
    backgroundColor: fade(palette.common.black, 0.3),
    bottom: 0,
    color: palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    left: 0,
    padding: spacing(2),
    position: 'absolute',
    right: 0,
    textShadow: `2px 2px 2px ${palette.common.black}`,
    top: 0,
  },
}));
