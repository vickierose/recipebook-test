import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import AddRecipeBtn from './AddRecipeBtn';
import RecipesList from './RecipesList';
import RecipeModal from '../common/RecipeModal';

import {addRecipe} from '../../redux/actions/recipes';

const drawerWidth = 300;
const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    border: 'none',
  },
  buttonSection: {
    margin: theme.spacing.unit,
  }
});
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
  sidebarContent = () => (
    <Fragment>
      <div className={this.props.classes.buttonSection}>
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
    </Fragment>
  )
  render() {
    const {classes, container, isOpen, onToggle} = this.props;
    return (
      <div className={classes.drawer}>
        <Hidden smUp implementation="css">
          <SwipeableDrawer
            container={container}
            onClose={() => onToggle(false)}
            onOpen={() => onToggle(true)}
            variant="temporary"
            open={isOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={() => onToggle(false)}
              onKeyDown={() => onToggle(false)}
            >
              {this.sidebarContent()}
            </div>
          </SwipeableDrawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {this.sidebarContent()}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

const actions = {
  addRecipe,
}
export default withStyles(styles)(connect(null, actions)(Sidebar));