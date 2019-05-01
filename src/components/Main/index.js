import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PlaceholderPage from './PlaceholderPage';
import RecipePage from './RecipePage';

const styles = theme => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  }
})
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const {classes, toggleSidebar} = this.props;
    return (
      <Grid item md={8} sm={6} xs={12}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={() => toggleSidebar(true)}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
        <Route exact path='/' component={PlaceholderPage}/>
        <Route path='/:id' component={RecipePage}/>
      </Grid>
    );
  }
}

export default withStyles(styles)(Main);