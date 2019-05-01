import {
  GET_RECIPE_REQUEST,
  GET_RECIPE_SUCCESS,
  GET_RECIPE_FAILURE,
  MODIFY_RECIPE_REQUEST,
  MODIFY_RECIPE_SUCCESS,
  MODIFY_RECIPE_FAILURE,
} from '../actions/selectedRecipe';

const initialState = {
  data: {},
  error: null,
  loading: false,
}
const selectedRecipe = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case GET_RECIPE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_RECIPE_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: null,
      };
    case GET_RECIPE_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
      case MODIFY_RECIPE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case MODIFY_RECIPE_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: null,
      };
    case MODIFY_RECIPE_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
}

export default selectedRecipe;
