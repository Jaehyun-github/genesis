import './G70Sb.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const G70Sb = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (  
    <section>
      <div className='g70Sb_section1'>
        <video muted autoPlay loop playsInline src={isMobile ? process.env.PUBLIC_URL + '/video/g70_sb_mo.mp4' : process.env.PUBLIC_URL + '/video/g70_sb_pc.mp4'} alt="G70_SB" />
        <div className='vignette'></div>
        <div className='g70Sb_section1_title'>
          <p>GENESIS</p>
          <h2>G70 SHOOTING BRAKE</h2>
          <p>온전히 나답게</p>
        </div>
        <div className='g70Sb_section1_more'>
          <span className='g70Sb_send'>견적 내기 &gt;</span>
        </div>
        <div className='g70Sb_section1_desc'>
          <p>* 본 페이지에서 소개되는 상품의 디자인, 색상, 특성, 사양 등은 참고용이며 실제 제품과 다를 수 있습니다.</p>
        </div>
      </div>
    </section>
  );
};

export default G70Sb;