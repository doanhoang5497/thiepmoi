/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Memories.scss';
import img1 from '../../assets/images/gallery/1.JPG';
import img2 from '../../assets/images/gallery/2.JPG';
import img3 from '../../assets/images/gallery/3.JPG';
import img4 from '../../assets/images/gallery/4.JPG';
import img5 from '../../assets/images/gallery/5.JPG';
import img6 from '../../assets/images/gallery/6.JPG';
import img7 from '../../assets/images/gallery/7.JPG';
import img8 from '../../assets/images/gallery/8.JPG';
import img9 from '../../assets/images/gallery/9.JPG';
import img10 from '../../assets/images/gallery/10.JPG';
import img11 from '../../assets/images/gallery/11.JPG';
import img12 from '../../assets/images/gallery/12.JPG';
import img13 from '../../assets/images/gallery/13.JPG';
import img14 from '../../assets/images/gallery/14.JPG';
import img15 from '../../assets/images/gallery/15.JPG';
import img16 from '../../assets/images/gallery/16.JPG';
import img17 from '../../assets/images/gallery/17.JPG';
import img18 from '../../assets/images/gallery/18.JPG';
import img19 from '../../assets/images/gallery/19.JPG';
import img20 from '../../assets/images/gallery/20.JPG';
import img21 from '../../assets/images/gallery/21.JPG';
import img22 from '../../assets/images/gallery/22.JPG';
import img23 from '../../assets/images/gallery/23.JPG';
import img24 from '../../assets/images/gallery/24.JPG';
import img25 from '../../assets/images/gallery/25.JPG';
import img26 from '../../assets/images/gallery/26.JPG';
import img27 from '../../assets/images/gallery/27.JPG';
import img28 from '../../assets/images/gallery/28.JPG';
import img29 from '../../assets/images/gallery/29.JPG';
import img30 from '../../assets/images/gallery/30.JPG';
import img31 from '../../assets/images/gallery/31.JPG';
import img32 from '../../assets/images/gallery/32.JPG';
import img33 from '../../assets/images/gallery/33.JPG';
import img34 from '../../assets/images/gallery/34.JPG';
import img35 from '../../assets/images/gallery/35.JPG';
import img36 from '../../assets/images/gallery/36.JPG';
import img37 from '../../assets/images/gallery/37.JPG';
import img38 from '../../assets/images/gallery/38.JPG';
import img39 from '../../assets/images/gallery/39.JPG';
import img40 from '../../assets/images/gallery/40.JPG';
import img41 from '../../assets/images/gallery/41.JPG';
import img42 from '../../assets/images/gallery/42.JPG';

function Memories({ h }) {
  const data = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },
    { src: img7 },
    { src: img8 },
    { src: img9 },
    { src: img10 },
    { src: img11 },
    { src: img12 },
    { src: img13 },
    { src: img14 },
    { src: img15 },
    { src: img16 },
    { src: img17 },
    { src: img18 },
    { src: img19 },
    { src: img20 },
    { src: img21 },
    { src: img22 },
    { src: img23 },
    { src: img24 },
    { src: img25 },
    { src: img26 },
    { src: img27 },
    { src: img28 },
    { src: img29 },
    { src: img30 },
    { src: img31 },
    { src: img32 },
    { src: img33 },
    { src: img34 },
    { src: img35 },
    { src: img36 },
    { src: img37 },
    { src: img38 },
    { src: img39 },
    { src: img40 },
    { src: img41 },
    { src: img42 },
  ];
  return (
    <div className="gallery">
      {data.map((item) => {
        return (
          <div key={item.src} className="pics">
            <img src={item.src} style={{ width: '100%' }} />
          </div>
        );
      })}
    </div>
  );
}

export default Memories;
