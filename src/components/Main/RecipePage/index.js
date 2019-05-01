import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import HistoryIcon from '@material-ui/icons/History';
import EditIcon from '@material-ui/icons/Edit';
import RecipeModal from '../../common/RecipeModal';
import HistoryModal from './HistoryModal';

import {getRecipe, modifyRecipe} from '../../../redux/actions/selectedRecipe';
import { getRecipes } from '../../../redux/actions/recipes';
import { AST_ClassExpression } from 'terser';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
});
class RecipePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editModalOpen: false,
      historyModalOpen: false,
    };
  }
  openModal = (modalStateName) => {
    this.setState({[modalStateName]: true})
  }
  closeModal = (modalStateName) => {
    this.setState({[modalStateName]: false})
  }
  saveRecipe = (data) => {
    const {modifyRecipe, match, getRecipes} = this.props;
    modifyRecipe(match.params.id, data)
    .then(() => getRecipes())
  }
  componentDidMount() {
    const {getRecipe, match} = this.props;
    getRecipe(match.params.id);
  }
  componentDidUpdate(prevProps) {
    const {getRecipe, match} = this.props;
    if(match.params.id !== prevProps.match.params.id) getRecipe(match.params.id);
  }
  render() {
    const {classes, recipe} = this.props;
    const {data, loading} = recipe;
    return (
      <div className={classes.root}>
        {
          loading || !Object.keys(data).length ?
          <CircularProgress /> :
          (
            <Fragment>
              <Typography variant="h5" paragraph>
                {data.latest.name}
              </Typography>

              <Typography variant="h6">Description</Typography>
              <Typography variant="body1" paragraph>
                {data.latest.description}
              </Typography>

              <div>
                <Button
                  variant="outlined"
                  className={classes.button}
                  color="secondary"
                  onClick={() => this.openModal('editModalOpen')}
                >
                  <EditIcon />
                  Modify recipe
                </Button>
                <Button
                  variant="outlined"
                  className={classes.button}
                  onClick={() => this.openModal('historyModalOpen')}
                >
                  <HistoryIcon />
                  View previous versions
                </Button>
              </div>
              <RecipeModal
                open={this.state.editModalOpen}
                handleClose={() => this.closeModal('editModalOpen')}
                handleSave={this.saveRecipe}
                recipeName={data.latest.name}
                recipeDescription={data.latest.description}
                modalTitle="Modify recipe"
                saveText="Save changes"
              />
              <HistoryModal 
                open={this.state.historyModalOpen}
                handleClose={() => this.closeModal('historyModalOpen')}
                versions={data.versions}
              />
            </Fragment>
          )
      }
      </div>
    );
  }
}

const mapstateToProps = state => ({
  recipe: state.selectedRecipe,
});

const actions = {
  getRecipe,
  modifyRecipe,
  getRecipes
}

export default withStyles(styles)(connect(mapstateToProps, actions)(RecipePage));
