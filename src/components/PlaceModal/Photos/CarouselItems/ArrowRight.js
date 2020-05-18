import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import useStyles from './styles';

const ArrowRight = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.arrowContainer} ${classes.right}`}>
      <ArrowForwardIosIcon color="inherit" />
    </div>
  );
};

export default ArrowRight;
