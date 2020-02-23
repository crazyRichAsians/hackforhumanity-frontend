import React from 'react';
import LPImage from '../images/welcome.jpg';
import './landingpage.css'

console.log(LPImage); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  
  return <img src={LPImage} alt="landing page" width='1080px' className="landing-page" />;
}

export default Header;

