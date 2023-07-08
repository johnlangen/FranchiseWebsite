import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-title">Spa Franchise Comparison</Link>
        <div className="navbar-menu">
          <Link to="/">Home</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
