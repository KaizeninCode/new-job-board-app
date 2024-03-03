import React from 'react'
import { NavLink } from 'react-router-dom';

function LoginHeader() {
    const navlinkStyles = {
        textDecoration: 'none',
        color: '#010101',
        borderRadius: '0.3125rem',
        width: '5rem',
        margin: '0 1rem',
        padding: '0.75rem',
        textAlign: 'center',
    }
  return (
    <div className='signup-header'>
        <h1 color='#545454'>The Room</h1>
        <nav>
            <NavLink to="/signup" style={navlinkStyles}><button>Sign Up</button></NavLink>
        </nav>
        
    </div>
  );
}

export default LoginHeader
