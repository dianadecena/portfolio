import React, { useRef, useState } from 'react';
import { useSpring, config, animated as a } from "react-spring";
import { easeSinIn } from "d3-ease";
import '../styles/App.css';
import bg from '../images/neon-lights.svg';
import bgmobile from '../images/neon-mobile.svg';
import menu from '../images/neon-menu.png';
import close from '../images/close.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons"

const App = () => {

  let closeItem = useRef(null);
  const [show, set] = useState(false)

  const [showMenu, displayMenu] = React.useState(false);

  const contentProps = useSpring({
    opacity: showMenu ? 1 : 0,
    config: { duration: 2000, easing: easeSinIn },
  });

  const principalProps = useSpring({
    from: { opacity: 0},
    to: { opacity: 1},
    reset: true,
    config: { duration: 2000, easing: easeSinIn },
  });

 const closeAnimation = useSpring({
    from: { opacity: 0},
    to: { opacity: 1},
  });
  
    return (
      <div className="container"> 
      {!showMenu ? ( 
      <a.div style={principalProps}>
      <div onClick={() => displayMenu(a => !a)}>
      <img src={menu} className="menu" alt="menu"/>
      </div>
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
      </a.div> ) :
      ( <a.div style={contentProps}>
        <a.div style={closeAnimation} onClick={() => displayMenu(a => !a)}>
        <img src={close} className="close" alt="menu"/>
        </a.div>
          <div className="overlay">
            <ul>
              <li>
                <a className="deco-home" href="#home">Home</a>
              </li>
              <li>
                <a className="deco-about" href="#about">About</a>
              </li>
              <li>
                <a className="deco-projects" href="#projects">Projects</a>
              </li>
              <li>
                <a className="deco-contact" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
         </a.div> )}
    </div>
    );

};

export default App;
