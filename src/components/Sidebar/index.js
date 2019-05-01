import React, { Component } from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import AddRecipeBtn from './AddRecipeBtn';
import RecipesList from './RecipesList';
import RecipeModal from '../common/RecipeModal';

import {addRecipe} from '../../redux/actions/recipes';

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
  saveRecipe = (data) => {
    const {addRecipe} = this.props;
    addRecipe(data);
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
          handleSave={this.saveRecipe}
          modalTitle="Add new recipe"
          saveText="Save Recipe"
        />
      </Grid>
    );
  }
}

const actions = {
  addRecipe,
}
export default connect(null, actions)(Sidebar);