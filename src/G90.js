import './G90.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const G90 = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (  
    <section>
      <div className='g90_section1'>
        <video muted autoPlay loop playsInline src={process.env.PUBLIC_URL + '/video/g90.mp4'} alt="G90" />
        <div className='vignette'></div>
        <div className='g90_section1_title'>
          <p>GENESIS</p>
          <h2>G90</h2>
          <p>2023년형 출시</p>
        </div>
        <div className='g90_section1_more'>
          <span className='g90_send'>세단 견적 내기 &gt;</span>
          <span className='g90_LW_send'>롱휠베이스 견적내기 &gt;</span>
        </div>
        <div className='g90_section1_desc'>
          <p>* 본 페이지에서 소개되는 상품의 디자인, 색상, 특성, 사양 등은 참고용이며 실제 제품과 다를 수 있습니다.</p>
        </div>
      </div>
    </section>
  );
};

export default G90;