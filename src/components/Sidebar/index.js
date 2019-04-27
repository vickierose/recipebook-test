import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import AddRecipeBtn from './AddRecipeBtn';
import RecipesList from './RecipesList';
import RecipeModal from '../common/RecipeModal';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }
  openModal = () => {
    this.setState({modalOpen: true})
  }
  closeModal = () => {
    this.setState({modalOpen: false})
  }
  render() {
    return (
      <Grid item md={4} sm={6} xs={12}>
        <div>
          <AddRecipeBtn onClick={this.openModal}/>
        </div>
        <RecipesList />
        <RecipeModal
          open={this.state.modalOpen}
          handleClose={this.closeModal}
          modalTitle="Add new recipe"
          saveText="Save Recipe"
        />
      </Grid>
    );
  }
}

export default Sidebar;