import { combineReducers } from 'redux';
import recipes from './recipes';
import selectedRecipe from './selectedRecipe'
const reducers = {
  recipes,
  selectedRecipe,
};

const rootReducer = combineReducers({...reducers});
export default rootReducer;
