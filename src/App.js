import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Sidebar from './components/Sidebar'
import Main from './components/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Router>
        <Grid container>
          <Sidebar />
          <Main />
        </Grid>
      </Router>
    );
  }
}

export default App;