import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import './Navbar.css';



function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  if (Auth.loggedIn()) {
    return (
      <>
        <Link to="/me">
          {Auth.getProfile().data.username}'s profile
        </Link>
        <button onClick={logout}>
          Logout
        </button>
      </>


    );
  }
  
  
  // If logged out show login controls
  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
         <i className='fa-solid fa-use' />
        </Link>
        <div className='fa-solid fa-bars' onClick={handleClick}>
          <i className={click ? 'fa-solid' : 'fas fa-bas'} />
        </div>
        <ul className={click ? 'nav-menu active ' : 'nav-menu'}>
          
          <li className='nav-item'>
            <Link to= '/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link to= '/' className='nav-links' onClick={closeMobileMenu}>
              Sales
            </Link>
        
        </li>

          <li className='nav-item'>
            <Link to= '/' className='nav-links' onClick={closeMobileMenu}>
              Marketing
            </Link>
        </li>

        <li className='nav-item'>
            <Link to= '/' className='nav-links' onClick={closeMobileMenu}>
              Schedule
            </Link>
        </li>
            
        <li className='nav-item'>
            <Link class='nav-links' to="/login" onClick=
            {closeMobileMenu}>Login</Link>
        </li>

        <li className='nav-items'>
      <Link class='nav-links'to="/signup" onClick={closeMobileMenu}>
        Signup</Link>
      </li>
      
  </ul>
       
      </div>
  </nav>
      
      
    </>
  )
}

export default Navbar
