import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Sidebar from './components/Sidebar'
import Main from './components/Main';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
  }
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Router>
        <Grid container className={this.props.classes.root}>
          <Sidebar />
          <Main />
        </Grid>
      </Router>
    );
  }
}

export default withStyles(styles)(App);