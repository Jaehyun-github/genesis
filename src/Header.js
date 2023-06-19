import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header id='header'>
        <div className='headerIn'>
          <div className='headerLogo'>
            <Link to="/">
              <img src={process.env.PUBLIC_URL + '/img/headerLogo.png'} alt="headerLogo"/>
            </Link>
          </div>
          <div className='headerUtilMenu'>
            <img src={process.env.PUBLIC_URL + '/img/mypage.png'} alt="myPage" />
            <span className='barMenu'></span>
            <span className='barTop'></span>
            <span className='barBottom'></span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;