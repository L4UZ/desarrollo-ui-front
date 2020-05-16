import React from 'react';
import {
  Grid,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { arrayOf, object } from 'prop-types';

import useStyles from './styles';

const Activities = ({ activities }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.gridItem}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Activities</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={3} direction="column">
            {activities.map(activitiy => (
              <Grid item>
                <Typography variant="body1">{activitiy.name}</Typography>
                <Typography variant="body2">$ {activitiy.price}</Typography>
              </Grid>
            ))}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid>
  );
};

Activities.propTypes = {
  activities: arrayOf(object).isRequired,
};

export default Activities;
