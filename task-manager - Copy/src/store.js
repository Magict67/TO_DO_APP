import { createStore } from 'redux';
import rootReducer from './reducers'; // Import combo reducers

// Make Redux store
const store = createStore(
  rootReducer,
  // Make Redux DevTools extension work in browser
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);

export default store;