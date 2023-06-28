import './GV60.css';
import React from 'react';

const GV60 = () => {

  return (  
    <section>
      <div className='gv60_section1'>
        <video muted autoPlay loop playsInline src={process.env.PUBLIC_URL + '/video/gv60.mp4'} alt="GV60" />
        <div className='vignette'></div>
        <div className='gv60_section1_title'>
          <p>GENESIS</p>
          <h2>GV60</h2>
          <p>2023년형 출시</p>
        </div>
        <div className='gv60_section1_more'>
          <span className='gv60_send'>견적 내기 &gt;</span>
          <span className='gv60_more'>시승 신청 &gt;</span>
        </div>
        <div className='gv60_section1_desc'>
          <p>* 본 페이지에서 소개되는 상품의 디자인, 색상, 특성, 사양 등은 참고용이며 실제 제품과 다를 수 있습니다.</p>
        </div>
      </div>
    </section>
  );
};

export default GV60;