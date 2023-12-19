import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import css from './OurWorks.module.css';
import firstImg from '../../assets/images/our_works/1.png';
import secondImg from '../../assets/images/our_works/2.png';
import thirdImg from '../../assets/images/our_works/3.png';
import fourthImg from '../../assets/images/our_works/4.png';
import fifthImg from '../../assets/images/our_works/5.png';
import sixthImg from '../../assets/images/our_works/6.png';
import seventhImg from '../../assets/images/our_works/7.png';
import eighthImg from '../../assets/images/our_works/8.png';

import big_firstImg from '../../assets/images/our_works/big_img/1.png';
import big_secondImg from '../../assets/images/our_works/big_img/2.png';
import big_thirdImg from '../../assets/images/our_works/big_img/3.png';
import big_fourthImg from '../../assets/images/our_works/big_img/4.png';
import big_fifthImg from '../../assets/images/our_works/big_img/5.png';
import big_sixthImg from '../../assets/images/our_works/big_img/6.png';
import big_seventhImg from '../../assets/images/our_works/big_img/7.png';
import big_eighthImg from '../../assets/images/our_works/big_img/8.png';

export const OurWorks = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    firstImg,
    secondImg,
    thirdImg,
    fourthImg,
    fifthImg,
    sixthImg,
    seventhImg,
    eighthImg,
  ];

  const bigImages = [
    big_firstImg,
    big_secondImg,
    big_thirdImg,
    big_fourthImg,
    big_fifthImg,
    big_sixthImg,
    big_seventhImg,
    big_eighthImg,
  ];

  const openLightbox = index => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateNext = () => {
    setPhotoIndex((photoIndex + 1) % images.length);
  };

  const navigatePrev = () => {
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
  };
  return (
    <>
      <section className={css.container}>
        <h2 className={css.works_header}>Наші роботи</h2>

        <div className={css.works}>
          {images.map((img, index) => (
            <div key={index} onClick={() => openLightbox(index)}>
              <img
                className={css.preview}
                src={img}
                alt={`window ${index + 1}`}
              />
            </div>
          ))}

          {lightboxOpen && (
            <Lightbox
              mainSrc={bigImages[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={closeLightbox}
              onMovePrevRequest={navigatePrev}
              onMoveNextRequest={navigateNext}
            />
          )}
        </div>
      </section>
    </>
  );
};
