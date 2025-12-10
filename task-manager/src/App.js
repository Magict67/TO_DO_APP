import React from 'react';
// ⚠️ FIX: Updated imports for React Router DOM v6 (using Routes instead of Switch)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

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

        {/* ⚠️ FIX: Routes is used in v6 instead of Switch */}
        <Routes>
          {/* Route 1: The Contact Form view */}
          <Route path="/contact" element={<ContactView />} />

          {/* Route 2: The main ToDo list view */}
          <Route path="/todos" element={<TodosView />} />

          {/* Default Route: Redirects to /todos if no path is specified */}
          {/* This is a convenience for when the user hits the root URL */}
          <Route path="/" element={<TodosView />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
