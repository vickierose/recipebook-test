import React from 'react';
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DishIcon from '@material-ui/icons/RoomService'

import {parse, format} from 'date-fns';

import './styles.scss';

const RecipesListItem = ({id, recipe}) => (
  <ListItem >
    <Link to={`/${id}`} className="recipes-list-item-link">
      <ListItemIcon>
        <DishIcon />
      </ListItemIcon>
      <ListItemText 
        primary={recipe.name}
        secondary={format(parse(recipe.createdAt), 'D/MM/YYYY')}
      />
    </Link>
  </ListItem>
)

export default RecipesListItem;
