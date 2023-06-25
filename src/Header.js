import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Header = () => {

  const isMobile = useMediaQuery({ maxWidth: 1359 });

  return (
    <div>
      <header id='header'>
        <div className='header_in'>
          <div className='header_logo'>
            <Link to="/">
              <img src={process.env.PUBLIC_URL + '/img/headerLogo.png'} alt="headerLogo"/>
            </Link>
          </div>
          <div className='header_in_nav'>
              <ul>
                <li>모델</li>
                <li>구매</li>
                <li>체험</li>
                <li>멤버스</li>
                <li>제네시스</li>
              </ul>
            </div>
          <div className='header_util_menu'>
            <ul>
              <li className='customer_service'>고객센터</li>
              <Link to='/mypage'>
                {isMobile ? (<img src={process.env.PUBLIC_URL + '/img/myPage.png'} alt="myPage" />) : (<li className='my_page'>마이 페이지</li>)}
              </Link>
              <li className='header_search'><img src={process.env.PUBLIC_URL + '/img/headerSearch.png'} alt="headerSearch" /></li>
              <li className='bar_menu'><span></span></li>
              <li className='bar_top'><span></span></li>
              <li className='bar_bottom'><span></span></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;