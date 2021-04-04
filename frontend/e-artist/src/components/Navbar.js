import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
      <Link to= "/" style={{ textDecoration: "none" }}><h1>Artisty</h1></Link>
      <div className='navbar_options'>
        <Link to= "/landing" style={{ textDecoration: "none" }}><h2>Gallery</h2></Link>
        <Link to= "/leaderboard" style={{ textDecoration: "none" }}><h2>Artists</h2></Link>
        <Link to= "/upload" style={{ textDecoration: "none" }}><h2>Upload</h2></Link>
        <Link to= "/signup" style={{ textDecoration: "none" }}><button>Sign Up</button></Link>
      </div>
    </div>
  );
}

export default Navbar;
