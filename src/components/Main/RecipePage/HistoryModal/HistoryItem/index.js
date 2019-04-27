import React, {Fragment} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const HistoryItem = (props) => (
  <ListItem>
    <ListItemText
      disableTypography
      primary={<Typography variant="h6">Version from 13/04/2019</Typography>}
      secondary={
        <Fragment>
          <Typography variant="overline">Recipe Name</Typography>
          <Typography variant="subtitle2">Description</Typography>
          <Typography variant="body1" paragraph>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Fragment>
      }
    />
  </ListItem>
)

export default HistoryItem;
