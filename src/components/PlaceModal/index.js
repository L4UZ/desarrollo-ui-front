import React from 'react';
import {
  Modal,
  Paper,
  Container,
  Typography,
  TextField,
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  GridListTile,
  GridList,
  ButtonBase,
  Popover,
  Button,
} from '@material-ui/core';
import { bool, func, shape, string } from 'prop-types';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const PlaceModal = ({
  open,
  handleClose,
  place: { name, description, imagesSrc, activities, reviews },
}) => {
  const classes = useStyles();

  const [popoverImg, setPopoverImg] = React.useState(null);
  const [value, setValue] = React.useState(2);

  return (
    <Modal open={open} onClose={handleClose} className={classes.modal}>
      <Container maxWidth="lg" className={classes.container}>
        <Paper className={classes.content}>
          <Typography variant="h4" gutterBottom>
            {name}
          </Typography>
          <Rating name="Score" readOnly="true" value={4} />
          <Grid container spacing={3}>
            <Grid item xs={12} className={classes.gridItem}>
              <Typography variant="h6" gutterBottom>
                Place description
              </Typography>
              <Typography variant="body1" gutterBottom>
                {description}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Typography variant="h6" gutterBottom>
                Photos
              </Typography>
              <GridList cellHeight={160} className={classes.sideScroller} cols={3}>
                {imagesSrc.map(image => (
                  <GridListTile key={name}>
                    <ButtonBase focusRipple onClick={() => setPopoverImg(image)}>
                      <img src={image} alt={name} className={classes.img} />
                    </ButtonBase>
                  </GridListTile>
                ))}
              </GridList>
            </Grid>
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
            <Grid item xs={12} className={classes.gridItem}>
              <Typography variant="h6" gutterBottom>
                Reviews
              </Typography>
              <Grid container spacing={3} direction="column">
                {reviews.map(review => (
                  <Paper elevation={2} className={classes.reviews}>
                    <Grid item>
                      <Rating name="Score" readOnly="true" value={review.score} />
                      <Typography variant="body1">Comment: {review.comment}</Typography>
                    </Grid>
                  </Paper>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Typography variant="h6" gutterBottom>
                Add review
              </Typography>
              <Rating
                name="Score"
                defaultValue={0}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <TextField placeholder="Add a review" variant="outlined" fullWidth />
              <Button variant="contained" color="primary" className={classes.reviewButton}>
                Add review
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Popover
          id="popover"
          open={!!popoverImg}
          onClose={() => setPopoverImg(null)}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
        >
          <img src={popoverImg} alt={name} className={classes.img} />
        </Popover>
      </Container>
    </Modal>
  );
};

PlaceModal.propTypes = {
  open: bool.isRequired,
  handleClose: func.isRequired,
  place: shape({
    name: string,
  }).isRequired,
};

export default PlaceModal;
