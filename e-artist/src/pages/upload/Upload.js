import React from 'react';
import './Upload.css';

function Upload() {
  return (
    <div className='upload'>
      <div className='upload_input'>
        <h1>Upload you ART</h1>
        <h2>What's your art called</h2>
        <input type='text'/>
        <h2>Price you want to sell</h2>
        <input type='text'/>
        <h2>Description</h2>
        <input type='text'/><br/>
        <button>Upload</button>
      </div>
    </div>
  );
}

export default Upload;
