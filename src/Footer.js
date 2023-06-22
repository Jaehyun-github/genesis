import './Footer.css';
import React from 'react';

const Footer = () => {

  return (
    <div>
      <footer id='footer'>
        <div className='footer_in'>
          <div className='footer_logo'>
            <img src={process.env.PUBLIC_URL + '/img/footerLogo.png'} alt="footerLogo"/>
            <p>© Copyright 2023 Hyundai Motor Company. <br /> All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;