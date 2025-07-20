import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css'; // Optional styling

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {collapsed ? '▶' : '◀'}
      </button>
      <nav>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Dashboard</Link>
          </li>
          <li className={location.pathname === '/submit' ? 'active' : ''}>
            <Link to="/submit">Submit Claim</Link>
          </li>
          <li className={location.pathname.startsWith('/claim') ? 'active' : ''}>
            <Link to="/claim/123">Claim Details</Link>
          </li>
          <li>
            <Link to="/compliance">Compliance Alerts</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
