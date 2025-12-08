import React from 'react';
import { Link } from 'react-router-dom';
// 💡 Importing the external CSS file to meet assignment requirements
import '../styles/Navigation.css'; 

const NavBar = () => {
  return (
    // Inline styles are removed, and we use the external .navbar class
    <nav className="navbar"> 
      <h1>Community Task Manager</h1>
      <div className="nav-links">
        {/* Link switches pages with no reloading */}
        <Link to="/todos">Tasks</Link> 
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;