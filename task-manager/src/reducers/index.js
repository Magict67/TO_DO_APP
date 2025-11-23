// redux state structure and reducer combine
import { combineReducers } from 'redux';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;