import React from 'react';
// Import the necessary components for routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

// Import the components and views you verified exist
import NavBar from './components/NavBar'; 
import TodosView from './views/TodosView';
import ContactView from './views/ContactView';
import './App.css'; 

const App = () => {
  // The Router component handles all navigation
  return (
    // We use the 'basename' to ensure it works correctly on GitHub Pages
    <Router basename="/TO_DO_APP"> 
      <div className="App">
        {/* The navigation bar is visible on all pages */}
        <NavBar />

        {/* Switch ensures only one Route is shown at a time */}
        <Switch>
          {/* Route 1: The Contact Form view */}
          <Route path="/contact">
            <ContactView />
          </Route>

          {/* Route 2: The main ToDo list view */}
          <Route path="/todos">
            <TodosView />
          </Route>

          {/* Default Route: Redirects to /todos if no path is specified */}
          <Route path="/">
            <TodosView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
