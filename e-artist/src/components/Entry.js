import React from 'react';
import './Entry.css';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Entry({ image, name, status, revenue, cause, price }) {
  return (
    <div className='entry'>
      <div className='entry_table'>
        <div className='entry_column1'>
          <CheckBoxOutlineBlankIcon className='entry_checkbox'/>
          <img src={image} className='entry_image' />
          <h1>{name}</h1>
        </div>
        <div className='entry_column2'>
          <h1 className={status}>{status}</h1>
        </div>
        <div className='entry_column3'>
          <h1>{revenue}</h1>
        </div>
        <div className='entry_column4'>
          <h1>{cause}</h1>
        </div>
        <div className='entry_column5'>
          <h1>{price}</h1>
        </div>
        <div className='entry_column6'>
          <MoreHorizIcon/>
        </div>
      </div>
    </div>
  );
}

export default Entry;