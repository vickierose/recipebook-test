import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import HistoryIcon from '@material-ui/icons/History';
import EditIcon from '@material-ui/icons/Edit';
import RecipeModal from '../../common/RecipeModal';
import HistoryModal from './HistoryModal';

const styles = theme => ({
  chip: {
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
  render() {
    const {classes} = this.props;
    return (
      <div>
        <Typography variant="h5" paragraph>
          Recipe name
        </Typography>
        
        {/* <div className="margin-b-20">
          <Typography variant="h6">Ingredients</Typography>
          <Chip label="Ingridient - 100g" className={classes.chip} variant="outlined" color="primary" />
          <Chip label="Ingridient - 100g" className={classes.chip} variant="outlined" color="primary" />
          <Chip label="Ingridient - 100g" className={classes.chip} variant="outlined" color="primary" />
          <Chip label="Ingridient - 100g" className={classes.chip} variant="outlined" color="primary" />
          <Chip label="Ingridient - 100g" className={classes.chip} variant="outlined" color="primary" />
        </div> */}

        <Typography variant="h6">Description</Typography>
        <Typography variant="body1" paragraph>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
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
          modalTitle="Modify recipe"
          saveText="Save changes"
        />
        <HistoryModal 
          open={this.state.historyModalOpen}
          handleClose={() => this.closeModal('historyModalOpen')}
        />
      </div>
    );
  }
}

export default withStyles(styles)(RecipePage);