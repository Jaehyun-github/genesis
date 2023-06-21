import './G70.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const G70 = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (  
    <section>
      <div className='g70_section1'>
        <video muted autoPlay loop playsInline src={isMobile ? process.env.PUBLIC_URL + '/video/g70_mo.mp4' : process.env.PUBLIC_URL + '/video/g70_pc.mp4'} alt="G70" />
        <div className='g70_section1_title'>
          <p>GENESIS</p>
          <h2>G70</h2>
          <p>나를 담아 더 자유롭게</p>
        </div>
        <div className='g70_section1_more'>
          <span className='g70_more'>MOVE LIKE NO OTHER</span>
          <span className='g70_send'>견적 내기 &gt;</span>
        </div>
        <div className='g70_section1_desc'>
          <p>* 본 페이지에서 소개되는 상품의 디자인, 색상, 특성, 사양 등은 참고용이며 실제 제품과 다를 수 있습니다.</p>
        </div>
      </div>
    </section>
  );
};

export default G70;