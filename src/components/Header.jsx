import React from 'react';
import { NavLink } from 'react-router-dom';
// import SearchBar from './SearchBar';

const Header = () => {
    const navlinkStyles = {
        textDecoration: 'none',
        color: '#e2e2e2',
        borderRadius: '0.3125rem',
        width: '5rem',
        margin: '0 1rem',
        padding: '0.75rem',
        textAlign: 'center',
    }
  return (
    <div className='header'>
        <h1>The Room</h1>
        <nav>
            <NavLink to="/" style={navlinkStyles}>Home</NavLink>
            <NavLink to="/job-list" style={navlinkStyles}>Browse Jobs</NavLink>
            <NavLink to="/shortlist" style={navlinkStyles}>Shortlist</NavLink>
        </nav>
        <div class="toggle-icon">
          <i class="fas fa-moon"></i>
      </div>
    </div>
  );
};

export default Header;