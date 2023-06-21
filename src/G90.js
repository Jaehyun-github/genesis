import React from 'react';

const G90 = () => {
  return (
    <div>
      <video muted autoPlay loop playsInline src={process.env.PUBLIC_URL + '/video/g90.mp4'} alt="G90" />
    </div>
  );
};

export default G90;