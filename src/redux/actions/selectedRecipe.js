import {get, put} from '../../utils/requests';
import {getRecipes} from './recipes';

export const GET_RECIPE_REQUEST = "GET_RECIPE_REQUEST";
export const GET_RECIPE_SUCCESS = "GET_RECIPE_SUCCESS";
export const GET_RECIPE_FAILURE = "GET_RECIPE_FAILURE";
export const MODIFY_RECIPE_REQUEST = "MODIFY_RECIPE_REQUEST";
export const MODIFY_RECIPE_SUCCESS = "MODIFY_RECIPE_SUCCESS";
export const MODIFY_RECIPE_FAILURE = "MODIFY_RECIPE_FAILURE";

export const getRecipe = id => dispatch => {
  dispatch({
    type:GET_RECIPE_REQUEST
  });
  return get(`http://localhost:3000/recipes/${id}`)
    .then(res => res.json())
    .then(recipe => dispatch({
      type: GET_RECIPE_SUCCESS,
      payload: recipe
    }))
    .catch(err => dispatch({
      type:GET_RECIPE_FAILURE,
      payload: err
    }));
}

export const modifyRecipe = (id, data) => dispatch => {
  dispatch({
    type: MODIFY_RECIPE_REQUEST
  });
  return put(`http://localhost:3000/recipes/${id}`, data)
    .then(res => res.json())
    .then(recipe => dispatch({
      type: MODIFY_RECIPE_SUCCESS,
      payload: recipe
    }))
    .catch(err => dispatch({
      type: MODIFY_RECIPE_FAILURE,
      payload: err
    }));
}