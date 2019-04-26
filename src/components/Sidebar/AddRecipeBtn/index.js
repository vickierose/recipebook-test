import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class AddRecipeBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Button variant="outlined" color="primary">
        <AddIcon color="primary" />
        Add New Recipe
      </Button>
    );
  }
}

export default AddRecipeBtn;