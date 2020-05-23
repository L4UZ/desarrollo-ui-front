import React from 'react';
import {
  Grid,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Box,
  Divider,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { arrayOf, object } from 'prop-types';

import useStyles from './styles';

const Activities = ({ activities }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.gridItem}>
      <ExpansionPanel defaultExpanded="true">
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Activities</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={3} direction="column">
            {activities.map((activity, i) => (
              <Grid item key={activity.id}>
                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                  <Typography variant="body1" noWrap style={{ flexDirection: 'column' }}>
                    <Box fontWeight="fontWeightBold">{activity.name}</Box>
                  </Typography>
                  <Typography variant="body1" noWrap style={{ marginLeft: 5 }}>
                    - ${activity.price}
                  </Typography>
                </div>
                <Typography variant="body2">{activity.description}</Typography>
                {i !== activities.length - 1 && <Divider className={classes.divider} />}
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
