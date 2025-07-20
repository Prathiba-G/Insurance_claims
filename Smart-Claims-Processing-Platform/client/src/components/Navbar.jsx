import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Optional: custom styles

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">ClaimsAI</Link>
      </div>
      <ul className="navbar-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Dashboard</Link>
        </li>
        <li className={location.pathname === '/submit' ? 'active' : ''}>
          <Link to="/submit">Submit Claim</Link>
        </li>
        <li className={location.pathname.startsWith('/claim') ? 'active' : ''}>
          <Link to="/claim/123">Claim Details</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
