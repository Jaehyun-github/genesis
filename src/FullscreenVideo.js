import React, { useEffect } from 'react';

const FullscreenVideo = () => {
  useEffect(() => {
    const handleVideoEnded = () => { // 동영상이 끝났을 때 실행
      document.getElementById('video_container').style.display = 'none'; 
      // 동영상이 끝날 때 display를 none로 변경
    };

    document.getElementById('fullscreen_video').addEventListener('ended', handleVideoEnded);
      // ended 이벤트에 handleVideoEnded를 연결 (동영상이 끝났을 때 handleVideoEnded가 호출 됨)
    return () => { 
      document.getElementById('fullscreen_video').removeEventListener('ended', handleVideoEnded);
    }; // useEffect 반환 함수에서 ended에 연결된 handleVideoEnded를 제거함 (컴포넌트가 언마운트 될 때)
  }, []);

  return (
    <div id="video_container">
      <video id="fullscreen_video" muted autoPlay playsInline src={process.env.PUBLIC_URL + '/video/genesis_brand.mp4'} />
    </div>
  );
};

export default FullscreenVideo;