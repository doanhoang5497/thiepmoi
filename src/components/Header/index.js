import React from 'react';
import './Header.scss';

function Header({ h, w }) {
  return (
    <div style={{ height: `${h}px`, width: `${w}px` }}>
      <img
        style={{ width: `25%`, position: 'absolute' }}
        src={require('../../assets/images/flower.png')}
        alt="title"
      />
      <div className="header">
        {w < 992 ? (
          <img
            style={{ width: `50%`, marginTop: `3%` }}
            src={require('../../assets/images/backgroundmb.png')}
            alt="title"
          />
        ) : (
          <img
            style={{ width: `60%`, marginTop: `3%` }}
            src={require('../../assets/images/background.png')}
            alt="title"
          />
        )}
      </div>
    </div>
  );
}

export default Header;
