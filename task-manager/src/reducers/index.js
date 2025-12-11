// src/reducers/index.js
import { combineReducers } from 'redux';
// ✅ This name must match the filename: todosReducer
import todosReducer from './todosReducer'; 

const rootReducer = combineReducers({
  tasks: todosReducer, // Or 'todos' if you prefer, but we'll use 'tasks' to match the final app structure
});

export default rootReducer;