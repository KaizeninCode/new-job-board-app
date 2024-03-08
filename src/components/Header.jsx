import React from 'react';
import { NavLink } from 'react-router-dom';
import Toggle from './Toggle';
// import SearchBar from './SearchBar';

const Header = ({isChecked, handleChange}) => {

    const navlinkStyles = {
        textDecoration: 'none',
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
        <Toggle isChecked={isChecked} handleChange={handleChange}/>
    </div>
  );
};

export default Header;