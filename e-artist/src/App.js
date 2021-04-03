import React from 'react';
import Navbar from './components/Navbar.js';
import Home from './pages/home/Home.js';
import Signup from './pages/signup/Signup.js';
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
          <Route path="/landing">{/*landing*/}</Route>
          <Route path="/leaderboard">{/*leaderboard*/}</Route>
          <Route path="/signup"><Signup/></Route>
          <Route path="/upload">{/*upload*/}</Route>
          {/*Footer*/}
          <Route path="/"><Home/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
