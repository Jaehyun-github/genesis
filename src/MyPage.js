import './MyPage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const MyPage = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section>
      <div className='mypage_section1'>
        <img src={isMobile ? process.env.PUBLIC_URL + '/img/myPageAndNotFound_mo.png' : process.env.PUBLIC_URL + '/img/myPageAndNotFound_pc.png'} alt="MyPage" />      
        <div className='mypage_section1_title'>
          <h2>MY PAGE</h2>
          <p>Your daily life will be special the moment you select GENESIS.</p>
        </div>
        <div className='mypage_section1_control'>
          <div className='mypage_section1_control_in'>
            <Link to='/login'>
              <span className='mypage_section1_login'>로그인</span>
            </Link>
            <Link to='/createAccount'>
              <span className='mypage_section1_create_account'>회원가입</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPage;