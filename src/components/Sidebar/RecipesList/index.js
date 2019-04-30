import React, { Component } from 'react';
import {connect} from 'react-redux';
import List from '@material-ui/core/List';
import RecipesListItem from './RecipesListItem';

class RecipesList extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const {data} = this.props.recipes;
    return (
      <List>
        {data.map(recipe => <RecipesListItem recipe={recipe.latest} key={recipe._id} id={recipe._id}/>)}
      </List>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
})

export default connect(mapStateToProps)(RecipesList);