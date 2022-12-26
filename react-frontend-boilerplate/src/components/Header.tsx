import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const isLogged = localStorage.getItem('isLogged');

  return (
    <div style={{ display: 'flex', justifyContent:'space-around'}}>
      <Link to='/'>Home</Link>
      {isLogged ? (
        <>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/profile'>Profile</Link>
          <button onClick={() => {
            localStorage.removeItem('isLogged');
            window.location.href = '/';
          }}>Logout</button>
        </>
      ) : (
        <>
          <Link to='/signin'>Login</Link>
          <Link to='/signup'>Register</Link>
            
        </>
      )}
    </div>
  );
};

export default Header;