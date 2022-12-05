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
      {w < 992 ? (
        <Iframe
          url="https://www.youtube.com/embed/a6dAdLG2QVI"
          width="99%"
          height="40%"
        />
      ) : (
        <Iframe
          url="https://www.youtube.com/embed/a6dAdLG2QVI"
          width="60%"
          height="60%"
        />
      )}
    </div>
  );
}

export default Marriage;
