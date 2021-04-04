import React, { useState } from 'react';
import './Leaderboard.css';
import Entry from '../../components/Entry.js';
import Select from "react-select";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Disney from '../../images/Disney.jfif';
import IBM from '../../images/IBM.jfif';
import JJ from '../../images/JJ.jfif';
import LV from '../../images/LV.jfif';
import Mitsu from '../../images/Mitsu.jfif';
import Starbucks from '../../images/Starbucks.jfif';

function Leaderboard() {
  const[category, setCategory] = useState("DWB");


  const options = [
    {value: "DWB", label: "Doctors Without Borders, USA"},
    {value: "ARC", label: "American Red Cross"},
    {value: "TNC", label: "The Nature Conservancy"},
    {value: "NRDC", label: "Natural Resources Defense Council"},
    {value: "ALSAC", label: "St.Jude Children's Research Hospital"},
    {value: "WWF", label: "World Wildlife Fund"}
  ]

  function onChangeInput(value) {
  let newValue = Object.values(value);
  setCategory(newValue[0]);
  }

  return (
    <div className='leaderboard'>
      <h1>Humanitarian Supporters</h1>
      <Select className='leaderboard_select' options={options} onChange={onChangeInput}/>
      <div className='leaderboard_tableTitle'>
        <div className='leaderboard_column1'>
          <CheckBoxOutlineBlankIcon className='checkbox'/>
          <div className='leaderboard_innerColumn1'>
            <h1>Artist</h1>
            <h2>Search</h2>
          </div>
        </div>
        <div className='leaderboard_column2'>
          <div className='leaderboard_inner1Column2'>
            <h1>Status</h1>
            <div className='leaderboard_bothArrows'>
              <ArrowDropUpIcon className='arrow_icon'/>
              <ArrowDropDownIcon className='arrow_icon'/>
            </div>
          </div>
          <div className='leaderboard_inner2Column2'>
            <h2>All</h2>
            <ArrowDropDownIcon className='arrow_icon2'/>
          </div>
        </div>
        <div className='leaderboard_column3'>
          <h1>Total Revenue</h1>
          <h2>Search</h2>
        </div>
        <div className='leaderboard_column4'>
          <h1>UN Cause</h1>
          <h2>Search</h2>
        </div>
        <div className='leaderboard_column5'>
          <div className='leaderboard_inner1Column5'>
            <h1>Price USD</h1>
            <div className='leaderboard_bothArrows'>
              <ArrowDropUpIcon className='arrow_icon'/>
              <ArrowDropDownIcon className='arrow_icon'/>
            </div>
          </div>
          <div className='leaderboard_inner2Column5'>
            <h2>All</h2>
            <ArrowDropDownIcon className='arrow_icon2'/>
          </div>
        </div>
        <div className='leaderboard_column6'>
          <h1>Action</h1>
        </div>
      </div>
      <div className='leaderboard_tableBody'>
        <Entry image={LV} name="Louis Vuitton" status="active" revenue="9177" cause="Poverty" price="$452.85"/>
        <Entry image={JJ} name="Johnson & Johnson" status="danger" revenue="3064" cause="Water" price="$901.31"/>
        <Entry image={Starbucks} name="Starbucks" status="pending" revenue="9195" cause="Education" price="$641.20"/>
        <Entry image={Disney} name="The Walt Disney" status="danger" revenue="3128" cause="Education" price="$510.30"/>
        <Entry image={Mitsu} name="Mitsubishi" status="pending" revenue="9892" cause="Food" price="$828.90"/>
        <Entry image={IBM} name="IBM" status="danger" revenue="9011" cause="Fun" price="$845.59"/>
      </div>
      <div className='leaderboard_arrowKeys'>
        <ArrowBackIosIcon className="leaderboard_sideArrows"/>
        <h1>1</h1>
        <h2>/</h2>
        <h1>16</h1>
        <ArrowForwardIosIcon className="leaderboard_sideArrows"/>
      </div>
    </div>
  );
}

export default Leaderboard;