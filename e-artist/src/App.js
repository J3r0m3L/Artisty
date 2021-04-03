import React from 'react';
import Navbar from './components/Navbar.js';
import Home from './pages/home/Home.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
      </style>
      {/*Navbar*/}
      <Navbar/>
      {/*home*/}
      <Home/>
      {/*landing*/}
      {/*leaderboard*/}
      {/*signup*/}
      {/*upload*/}
      {/*Footer*/}
    </div>
  );
}

export default App;
