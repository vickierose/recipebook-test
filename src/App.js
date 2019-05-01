import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Sidebar from './components/Sidebar'
import Main from './components/Main';

import {getRecipes} from './redux/actions/recipes';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
  }
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false,
    };
  }
  handleSidebarToggle = (open) => {
    this.setState(state => ({ isSidebarOpen: open }));
  };
  componentDidMount() {
    this.props.getRecipes()
  }
  render() {
    return (
      <Router>
        <Grid container className={this.props.classes.root}>
          <Sidebar isOpen={this.state.isSidebarOpen} onToggle={this.handleSidebarToggle}/>
          <Main />
        </Grid>
      </Router>
    );
  }
}

const actions = {
  getRecipes,
}

export default withStyles(styles)(connect(null, actions)(App));