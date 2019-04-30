import {
  GET_RECIPES_REQUEST,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAILURE
} from '../actions/recipes';

const initialState = {
  data: [],
  error: null,
  loading: false,
}
const recipes = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case GET_RECIPES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_RECIPES_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: null,
      };
    case GET_RECIPES_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
}

export default recipes