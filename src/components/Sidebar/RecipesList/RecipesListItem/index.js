import React from 'react';
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DishIcon from '@material-ui/icons/RoomService'

import './styles.scss';

const RecipesListItem = () => (
  <ListItem >
    <Link to="/1" className="recipes-list-item-link">
      <ListItemIcon>
        <DishIcon />
      </ListItemIcon>
      <ListItemText 
        primary="Recipe name"
        secondary="13/04/2019"
      />
    </Link>
  </ListItem>
)

export default RecipesListItem;
