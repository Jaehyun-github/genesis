import './GV70.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const GV70 = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (  
    <section>
      <div className='gv70_section1'>
      <video muted autoPlay loop playsInline src={isMobile ? process.env.PUBLIC_URL + '/video/gv70_mo.mp4' : process.env.PUBLIC_URL + '/video/gv70_pc.mp4'} alt="GV70" />
      <div className='vignette'></div>
        <div className='gv70_section1_title'>
          <p>GENESIS</p>
          <h2>GV70</h2>
          <p>또 다른 감동을 선사하는 시간</p>
        </div>
        <div className='gv70_section1_more'>
          <span className='gv70_send'>견적 내기 &gt;</span>
          <span className='gv70_more'>시승 신청 &gt;</span>
        </div>
        <div className='gv70_section1_desc'>
          <p>* 본 페이지에서 소개되는 상품의 디자인, 색상, 특성, 사양 등은 참고용이며 실제 제품과 다를 수 있습니다.</p>
        </div>
      </div>
    </section>
  );
};

export default GV70;