import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import HistoryItem from './HistoryItem';

class HistoryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const {versions, open, handleClose} = this.props
    return (
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Previous versions</DialogTitle>
        <DialogContent>
          <List>
            {versions.map((version, index) => (
              <Fragment key={index}>
                <HistoryItem versionData={version}/>
                {index !== versions.length-1 ? <Divider /> : null}
              </Fragment>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default HistoryModal;
