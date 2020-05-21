import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import useStyles from './styles';

const ArrowLeft = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.arrowContainer} ${classes.left}`}>
      <ArrowBackIosIcon color="inherit" />
    </div>
  );
};

export default ArrowLeft;
