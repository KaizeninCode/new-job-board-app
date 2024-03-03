import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    const navlinkStyles = {
        textDecoration: 'none',
        color: 'ivory',
        borderRadius: '0.3125rem',
        width: '5rem',
        margin: '0 1rem',
        padding: '0.75rem',
        textAlign: 'center',
    }
  return (
    <div className='footer'>
      <div className="footer-navlinks">
          <NavLink to='/about' style={navlinkStyles}>About</NavLink>
          <NavLink to='/privacy' style={navlinkStyles}>Privacy</NavLink>
          <NavLink to='/terms' style={navlinkStyles}>Terms and Conditions</NavLink>
      </div>
      <div className="attribution">
        <p>COPYRIGHT PHIL WEKULLO 2024</p>
      </div>
    </div>
  )
}

export default Footer
