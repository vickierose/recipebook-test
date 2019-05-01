import {get, post} from '../../utils/requests';

export const GET_RECIPES_REQUEST = "GET_RECIPES_REQUEST";
export const GET_RECIPES_SUCCESS = "GET_RECIPES_SUCCESS";
export const GET_RECIPES_FAILURE = "GET_RECIPES_FAILURE";
export const ADD_RECIPE_REQUEST = "ADD_RECIPE_REQUEST";
export const ADD_RECIPE_SUCCESS = "ADD_RECIPE_SUCCESS";
export const ADD_RECIPE_FAILURE = "ADD_RECIPE_FAILURE";


export const getRecipes = () => dispatch => {
  dispatch({
    type:GET_RECIPES_REQUEST
  });
  return get('http://localhost:3000/recipes')
    .then(res => res.json())
    .then(recipes => dispatch({
      type: GET_RECIPES_SUCCESS,
      payload: recipes
    }))
    .catch(err => dispatch({
      type:GET_RECIPES_FAILURE,
      payload: err
    }));
}

export const addRecipe = (data) => dispatch => {
  dispatch({
    type:ADD_RECIPE_REQUEST
  });
  return post('http://localhost:3000/recipes', data)
    .then(res => res.json())
    .then(recipes => dispatch({
      type: ADD_RECIPE_SUCCESS,
      payload: recipes
    }))
    .catch(err => dispatch({
      type:ADD_RECIPE_FAILURE,
      payload: err
    }));
}