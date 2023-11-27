// import { Link } from 'react-router-dom';
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
  return (
    <>
      <section className={'works'}>
        <div className={css.container}>
          <div className={css.section_header}>
            <h2>Наші роботи</h2>
            <div className={css.section_header_sub}></div>
          </div>
          <div className={css.row}>
            <div>
              <a href={big_firstImg}>
                <img className={css.preview} src={firstImg} alt="window" />
              </a>
            </div>
            <div>
              <a href={big_secondImg}>
                <img className={css.preview} src={secondImg} alt="window" />
              </a>
            </div>
            <div>
              <a href={big_thirdImg}>
                <img className={css.preview} src={thirdImg} alt="window" />
              </a>
            </div>
            <div>
              <a href={big_fourthImg}>
                <img className={css.preview} src={fourthImg} alt="window" />
              </a>
            </div>
            <div>
              <a href={big_fifthImg}>
                <img className={css.preview} src={fifthImg} alt="window" />
              </a>
            </div>
            <div>
              <a href={big_sixthImg}>
                <img className={css.preview} src={sixthImg} alt="window" />
              </a>
            </div>
            <div>
              <a href={big_seventhImg}>
                <img className={css.preview} src={seventhImg} alt="window" />
              </a>
            </div>
            <div>
              <a href={big_eighthImg}>
                <img className={css.preview} src={eighthImg} alt="window" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
