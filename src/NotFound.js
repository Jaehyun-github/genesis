import './NotFound.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);  // 이전 페이지로 돌아가기
  }

  return (
    <div>
      <div className='not_found'>
        <img src={isMobile ? process.env.PUBLIC_URL + '/img/myPageAndNotFound_mo.png' : process.env.PUBLIC_URL + '/img/myPageAndNotFound_pc.png'} alt="notFound"/>
        <div className='not_found_title'>
          <h2>죄송합니다. <br/ > 페이지를 찾을 수 없습니다.</h2>
          <button onClick={handleGoBack}>돌아가기</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;