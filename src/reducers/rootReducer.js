import { combineReducers } from 'redux';
import visibilityFilter from '../reducers/visibilityFilter';
import todos from './todos'
export default combineReducers({
 todos,
 visibilityFilter
});