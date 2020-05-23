import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  gridItem: {
    marginTop: '1rem',
    position: 'relative',
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
}));
