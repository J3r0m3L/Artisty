import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div className='signup'>
      <div className='signup_input'>
        <h1>Be a Creator</h1>
        <h2>Your Creative Name</h2>
        <input type='text'/>
        <h2>Wallet Address</h2>
        <input type='text'/>
        <h2>Description</h2>
        <input type='text'/><br/>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default Signup;