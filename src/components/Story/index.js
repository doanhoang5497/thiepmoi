/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Story.scss';

function Story({ h, w }) {
  return (
    <div style={{ height: `${h}px`, width: `${w}px` }} className="moi">
      {w > 992 ? (
        <img
          src={require('../../assets/images/left.png')}
          style={{ marginTop: '-10%' }}
        />
      ) : (
        ''
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '50px',
        }}>
        {w < 768 ? (
          <img
            src={require('../../assets/images/asss.png')}
            style={{ width: '30%' }}
          />
        ) : (
          ''
        )}
        <img
          src={require('../../assets/images/name.png')}
          style={{ width: `100%` }}
        />
        {w < 768 ? (
          <h3 style={{ marginTop: '50px' }}>TRÂN TRỌNG KÍNH MỜI</h3>
        ) : (
          <h1 style={{ marginTop: '50px' }}>TRÂN TRỌNG KÍNH MỜI</h1>
        )}

        <div style={w < 768 ? { fontSize: '12px' } : {}}>
          Tới dự bữa cơm thân mật chung vui cùng chúng tôi
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '20px',
          }}>
          <div
            style={
              w < 768
                ? {
                    display: 'grid',
                    justifyItems: 'center',
                  }
                : {
                    display: 'flex',
                    justifyContent: 'space-between',
                  }
            }>
            <div className="tai">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: '50px',
                }}>
                <h3 style={{ color: 'red', marginBottom: '16px' }}>
                  Tại nhà trai
                </h3>
                Tổ chức vào hồi
                <h2>11:00</h2>
                <div>Chủ nhật, ngày 11 tháng 12 năm 2022</div>
                <div>(tức ngày 18 tháng 11 năm Nhâm Dần)</div>
              </div>
              ---
              <h3 style={{ textAlign: 'center' }}>
                Thôn Huê Vận 2, Xã Bảo Sơn, Huyện Lục Nam, Tỉnh Bắc Giang
              </h3>
              <a href="https://goo.gl/maps/kSUoW5CaBmB6tbms5" target={'blank'}>
                Tìm đường
              </a>
            </div>
            <div className="tai">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: '50px',
                }}>
                <h3 style={{ color: 'red', marginBottom: '16px' }}>
                  Tại nhà gái
                </h3>
                Tổ chức vào hồi
                <h2>15:00</h2>
                <div>Chủ nhật, ngày 11 tháng 12 năm 2022</div>
                <div>(tức ngày 18 tháng 11 năm Nhâm Dần)</div>
              </div>
              ---
              <h3 style={{ textAlign: 'center' }}>
                Số 66, đường Sông Lục, thị trấn Đồi Ngô, Huyện Lục Nam, Tỉnh Bắc
                Giang
              </h3>
              <a href="https://goo.gl/maps/wg6521Gh9AHEtFQ3A" target={'blank'}>
                Tìm đường
              </a>
            </div>
          </div>
        </div>
      </div>
      {w > 992 ? (
        <img
          src={require('../../assets/images/right.png')}
          style={{ marginTop: '-10%' }}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default Story;
