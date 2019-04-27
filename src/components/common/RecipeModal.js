import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class RecipeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: this.props.recipeName || '',
      recipeDescription: this.props.recipeDescription || '',
    };
  }
  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
      >
        <DialogTitle>{this.props.modalTitle}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            label="Recipe Name"
            fullWidth
          />
          <TextField
            autoFocus
            multiline
            rows={6}
            variant="outlined"
            margin="dense"
            label="Description"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.props.handleClose} color="primary">
            {this.props.saveText}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default RecipeModal;
