import React, { Component } from 'react';
import List from '@material-ui/core/List';
import RecipesListItem from './RecipesListItem';

class RecipesList extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <List>
        <RecipesListItem />
        <RecipesListItem />
        <RecipesListItem />
      </List>
    );
  }
}

export default RecipesList;