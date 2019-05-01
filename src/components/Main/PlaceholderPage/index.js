import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
  }
});

const PlaceholderPage = ({classes}) => (
  <div className={classes.root}>
    <Typography variant="h5">
      Please select the recipe
    </Typography>
  </div>
);

export default withStyles(styles)(PlaceholderPage);
