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
  closeModal = () => {
    this.setState({
      recipeName: this.props.recipeName || '',
      recipeDescription: this.props.recipeDescription || '',
    })
    this.props.handleClose()
  }
  saveChanges = () => {
    if(
      this.state.recipeName && this.state.recipeDescription &&
      (this.state.recipeName !== this.props.recipeName ||
      this.state.recipeDescription !==this.props.recipeDescription)
      ) this.props.handleSave({name: this.state.recipeName, description: this.state.recipeDescription});
      this.closeModal();
  }
  changeField = fieldName => e => this.setState({[fieldName]: e.target.value})
  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.closeModal}
      >
        <DialogTitle>{this.props.modalTitle}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            label="Recipe Name"
            value={this.state.recipeName}
            onChange={this.changeField("recipeName")}
            fullWidth
          />
          <TextField
            multiline
            rows={6}
            variant="outlined"
            margin="dense"
            label="Description"
            value={this.state.recipeDescription}
            onChange={this.changeField("recipeDescription")}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.closeModal} color="primary">
            Cancel
          </Button>
          <Button onClick={this.saveChanges} color="primary">
            {this.props.saveText}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default RecipeModal;
