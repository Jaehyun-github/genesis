import './GV80.css';
import React from 'react';

const GV80 = () => {

  return (  
    <section>
      <div className='gv80_section1'>
        <video muted autoPlay loop playsInline src={process.env.PUBLIC_URL + '/video/gv80.mp4'} alt="GV80" />
        <div className='vignette'></div>
        <div className='gv80_section1_title'>
          <p>GENESIS</p>
          <h2>GV80</h2>
          <p>2023년형 출시</p>
        </div>
        <div className='gv80_section1_more'>
          <span className='gv80_send'>견적 내기 &gt;</span>
          <span className='gv80_more'>시승 신청 &gt;</span>
        </div>
        <div className='gv80_section1_desc'>
          <p>* 본 페이지에서 소개되는 상품의 디자인, 색상, 특성, 사양 등은 참고용이며 실제 제품과 다를 수 있습니다.</p>
        </div>
      </div>
    </section>
  );
};

export default GV80;