import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './index.css';
import App from './App';
//Redux Store with Main Manager
const store = createStore(
  rootReducer,
  //use chrome with Redux DevTools if installed
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 2. App in the Provider to access the Store
  <Provider store={store}>
    <App />
  </Provider>
);