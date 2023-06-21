import React from 'react';

const GV80 = () => {
  return (
    <div>
      <video muted autoPlay loop playsInline src={process.env.PUBLIC_URL + '/video/gv80.mp4'} alt="GV80" />
    </div>
  );
};

export default GV80;