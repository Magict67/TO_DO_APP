import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // 💡 Import the Provider component
import store from './store'; // 💡 Import the Redux store

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* Wrap the entire application in the Redux Provider */}
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();