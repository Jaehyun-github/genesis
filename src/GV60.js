import React from 'react';

const GV60 = () => {
  return (
    <div>
      <video muted autoPlay loop playsInline src={process.env.PUBLIC_URL + '/video/gv60.mp4'} alt="GV60" />
    </div>
  );
};

export default GV60;