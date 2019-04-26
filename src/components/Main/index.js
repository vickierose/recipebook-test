import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import PlaceholderPage from './PlaceholderPage';
import RecipePage from './RecipePage';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Grid item md={8} sm={6} xs={12}>
        <Route exact path='/' component={PlaceholderPage}/>
        <Route path='/:id' component={RecipePage}/>
      </Grid>
    );
  }
}

export default Main;