import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <h1>Artisty</h1>
      <div className='navbar_options'>
        <h2>Home</h2>
        <h2>Gallery</h2>
        <h2>Artists</h2>
        <h2>Login</h2>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
