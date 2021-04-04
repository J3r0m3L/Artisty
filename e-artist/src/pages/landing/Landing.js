import React from 'react';
import './Landing.css';
import Banner from '../../images/Banner.jfif';

function Landing() {
  return (
    <div className='landing'>
      <h1>Art Name</h1>
      <div className='landing_upper'>
        <div className='landing_banners'>
          <img src={Banner} className='landing_banner'/>
          <img src={Banner} className='landing_banner'/>
        </div>
        <div className='landing_description'>
          <h1>Basic Description of the Art</h1>
          <p>Connect with the Next Big Pokémon Game on Nintendo Switch! Pokémon:
          Let's Go, Pikachu! and Pokémon: Let's Go, Eevee! bring the experience of
          a classic Pokémon RPG to Nintendo Switch with gameplay that is easily
          approachable for newcomers to the series, but is also deep enough to keep
          veteran Trainers on their toes. And there's a deep connection between Pokémon:
          Let's Go, Pikachu!</p>
        </div>
      </div>
      <button>Buy for 10 LINK</button>
      <p>10% of all profits will be donated to a charitable social organization.</p>
    </div>
  );
}

export default Landing;