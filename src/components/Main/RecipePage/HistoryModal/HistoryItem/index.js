import React, {Fragment} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import {format} from 'date-fns';

const HistoryItem = ({versionData}) => (
  <ListItem>
    <ListItemText
      disableTypography
      primary={<Typography variant="h6">{`Version from ${format(versionData.createdAt, 'H:mm D/MM/YYYY')}`}</Typography>}
      secondary={
        <Fragment>
          <Typography variant="overline">{versionData.name}</Typography>
          <Typography variant="subtitle2">Description</Typography>
          <Typography variant="body1" paragraph>
            {versionData.description}
          </Typography>
        </Fragment>
      }
    />
  </ListItem>
)

export default HistoryItem;
