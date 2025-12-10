import { createStore } from 'redux';
import rootReducer from './reducers'; // Import the combined reducers

// Create the Redux store
const store = createStore(
  rootReducer,
  // This is necessary for the Redux DevTools extension to work in the browser
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);

export default store;