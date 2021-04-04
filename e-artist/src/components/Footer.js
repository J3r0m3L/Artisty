import React from 'react';
import './Footer.css';
import CopyrightOutlinedIcon from '@material-ui/icons/CopyrightOutlined';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_column'>
        <div className='footer_column1'>
        <h1>Placeholder</h1>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        </div>
        <div className='footer_column2'>
        <h1>Placeholder</h1>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        </div>
        <div className='footer_column3'>
        <h1>Placeholder</h1>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        </div>
      </div>
      <div className='footer_lower'>
        <h3>Copyright</h3>
        <CopyrightOutlinedIcon className='footer_lowerLogo'/>
        <h1>2021 Artisty Inc. All rights reserved.</h1>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>Sales and Refunds</p>
        <p>Legal</p>
        <p>Site Map</p>
        <h2>United States</h2>
      </div>
    </div>
  );
}

export default Footer;