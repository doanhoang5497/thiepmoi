import React from 'react';
import Iframe from 'react-iframe';
import './Marriage.scss';

function Marriage({ h, w }) {
  return (
    <div
      style={{
        height: `${h}px`,
        width: `${w}px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Iframe
        url="https://www.youtube.com/embed/aW7mKiRAK3Q"
        width="60%"
        height="60%"
      />
    </div>
  );
}

export default Marriage;
