import React from 'react';
import Navbar from './components/Navbar.js';
import Home from './pages/home/Home.js';
import Signup from './pages/signup/Signup.js';
import Upload from './pages/upload/Upload.js';
import Landing from './pages/landing/Landing.js';
import Leaderboard from './pages/leaderboard/Leaderboard.js';
import Footer from './components/Footer.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
      </style>
      <Router>
      {/*Navbar*/}
        <Navbar/>
        <Switch>
          <Route path="/landing"><Landing/></Route>
          <Route path="/leaderboard"><Leaderboard/></Route>
          <Route path="/signup"><Signup/></Route>
          <Route path="/upload"><Upload/></Route>
          {/*Footer*/}
          <Route path="/"><Home/></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
