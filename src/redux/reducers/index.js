import { combineReducers } from 'redux';
import recipes from './recipes'
const reducers = {
  recipes,
};

const rootReducer = combineReducers({...reducers});
export default rootReducer;
