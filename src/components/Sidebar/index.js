import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import AddRecipeBtn from './AddRecipeBtn';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Grid item md={4} sm={6} xs={12}>
        <div>
          <AddRecipeBtn />
        </div>
      </Grid>
    );
  }
}

export default Sidebar;