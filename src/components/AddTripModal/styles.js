import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '25vh',
  },
  submit: {
    margin: theme.spacing(2, 0, 1),
  },
}));
