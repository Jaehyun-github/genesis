import React from 'react';

const GV70 = () => {
  return (
    <div>
      <video muted autoPlay loop playsInline src={process.env.PUBLIC_URL + '/video/gv70.mp4'} alt="GV70" />
    </div>
  );
};

export default GV70;