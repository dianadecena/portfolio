import React from 'react';
import './App.css';
import bg from './neon-lights.svg';
import bgmobile from './neon-mobile.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons"

const App = () => {

  return (
      <div className="container">
        <img src={bg} className="bg" alt="bg"/>
        <img src={bgmobile} className="bg-mobile" alt="bg-mobile"/>
        <div className="box-info">
          <div className="nombre">
            <span>DIANA DECENA</span>
          </div>
          <div className="descripcion">
            <p>I'M CURRENTLY STUDYING SYSTEMS ENGINEERING.</p>
            <p>CARACAS, VENEZUELA.</p>
          </div>
        </div>
        <div className="contact-box">
          <a href="https://www.github.com/dianadecena" className="github-icon"><FontAwesomeIcon icon={faGithub} color="white" size="3x"/></a>
          <a href="https://www.instagram.com/dianadecena" className="instagram-icon"><FontAwesomeIcon icon={faInstagram} color="white" size="3x"/></a>
          <a href="https://www.linkedin.com/in/diana-decena-1a9b9215a" className="linkedin-icon"><FontAwesomeIcon icon={faLinkedin} color="white" size="3x"/></a>
          <a href="mailto:dianadecena78@gmail.com" className="email-icon"><FontAwesomeIcon icon={faEnvelope} color="white" size="3x"/></a>
        </div>
    </div>
  );
};

export default App;
