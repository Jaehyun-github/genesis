/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, EffectCreative } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-creative";
import axios from 'axios';

SwiperCore.use([ Pagination ])

const Container = () => {

  let [id, setId] = useState([]);
  let [urlFile, setUrlFile] = useState([]);
  let [title, setTitle] = useState([]);
  let [name, setName] = useState([]);
  let [slide, setSlide] = useState([]);

  useEffect(() => {
    axios
    .get(process.env.PUBLIC_URL + "/data/data.json") // 절대경로에 있는 json파일을 불러옴 (GET 요청)
    .then((res) => { // (res)로 응답 처리

      const { data } = res.data; // 응답 객체(res)에서 'data' 속성을 추출하여 '{ data }' 변수에 저장 (비구조화 할당 문법)
      const ids = data.map((item) => item.id); 
      const urlFiles = data.map((item) => item.url); 
      const titles = data.map((item) => item.title); // 'data' 배열의 각 요소에서 json파일에 있는 속성을 추출하여 각 변수 배열에 저장
      const names = data.map((item) => item.name);
      const slides = Array.from({ length: data.length }, (_, idx) => idx); // slides 배열을 생성함 (json파일에서 불러온 'data'의 길이만큼) 
                                                                           // (idx) 매개변수는 배열의 인덱스를 나타냄 (_) 언더스코어는 사용하지 않는 매개변수를 뜻함
      setId(ids);                                                                           
      setUrlFile(urlFiles);
      setTitle(titles); // 'setState'에 각각의 배열을 상태 변수에 설정
      setName(names);   // 이렇게 업데이트 된 값들은 컴포넌트를 다시 렌더링 하게 됨
      setSlide(slides);

    })
    .catch(error => {
      console.log(error);
    });
  }, [])

  return (
    <section>
      <div className='section1'>
        <Swiper
          modules={[Pagination, EffectCreative]} effect={"creative"} spaceBetween={0} slidesPerView={1}
          pagination={{clickable: true}} allowTouchMove={true} loop={true} grabCursor={true} 
          creativeEffect={{prev: {shadow: true, translate: ["-20%", 0, -1],}, next: {translate: ["100%", 0, 0],}}}>

          {slide.map((_, idx) => {
            return (
              <SwiperSlide key={idx}>
                {urlFile[idx].endsWith('.jpg') ? (
                  <>
                    <img src={process.env.PUBLIC_URL + urlFile[idx]} alt="section1_img" />
                    <div className='section1_title'>
                      <p>{id[idx]}</p>
                      <h2>{name[idx]}</h2>
                      <p>{title[idx]}</p>
                    </div>
                    <div className='section1_more'>
                      <span className='more'>더 알아보기 &gt;</span>
                      <span className='send'>견적 내기 &gt;</span>
                    </div>
                  </>
                ) : (
                  <>
                    <video muted autoPlay loop playsInline src={process.env.PUBLIC_URL + urlFile[idx]} />
                    <div className='section1_title'>
                      <p>{id[idx]}</p>
                      <h2>{name[idx]}</h2>
                      <p>{title[idx]}</p>
                    </div>
                  </>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Container;