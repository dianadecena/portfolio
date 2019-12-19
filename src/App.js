import React from 'react';
import './App.css';
import bg from './neon-lights.png';
import bgmobile from './neon-mobile.png';

const App = () => {

  return (
      <div className="container">
        <img src={bg} className="bg" alt="bg"/>
        <img src={bgmobile} className="bg-mobile" alt="bg-mobile"/>
        <div className="about">
          <span>about me</span>
        </div>
        <div className="projects">
          <span>projects</span>
        </div>
        <div className="contact">
          <span>contact</span>
        </div>
        <div className="box-info">
          <div className="nombre">
            <span>DIANA DECENA</span>
          </div>
          <div className="descripcion">
            <p>I'M CURRENTLY STUDYING SYSTEMS ENGINEERING.</p>
            <p>CARACAS, VENEZUELA.</p>
          </div>
        </div>
    </div>
  );
};

export default App;
