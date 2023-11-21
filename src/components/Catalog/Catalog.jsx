import { Link } from 'react-router-dom';
import css from './Catalog.module.css';
import woodenImg from '../../assets/images/glazing/icons/wooden.png';
import aluminumImg from '../../assets/images/glazing/icons/aluminum.png';
import plasticImg from '../../assets/images/glazing/icons/plastic.png';
import frenchImg from '../../assets/images/glazing/icons/french.png';

export const Catalog = () => {
  return (
    <>
      <div className={css.section_header}>
        <h2>Остекление балконов и лоджий</h2>
        <div className={css.section_header_sub}></div>
      </div>

      {/* <!-- Slider --> */}
      <div className={css.glazing_slider}>
        <div className={'glazing_block text_center wow fadeInUp'}>
          <img src={woodenImg} alt="wooden" />

          <Link to={`wooden`}>Дерев'яне скління</Link>
        </div>
        <div
          className={'glazing_block text-center wow fadeInUp'}
          data-wow-delay="0.1s"
        >
          {/* <img src="assets/img/glazing/icons/2.png" alt="#"> */}
          <img src={aluminumImg} alt="aluminum" />
          <Link to={`aluminum`}>Алюмінієве скління</Link>
          {/* <a className={css.aluminum_link}>Алюмінієве скління</a> */}
        </div>
        <div
          className={'glazing_block text-center wow fadeInUp'}
          data-wow-delay="0.2s"
        >
          {/* <img src="assets/img/glazing/icons/3.png" alt="#"> */}
          <img src={plasticImg} alt="plastic" />
          <Link to={`plastic`}>Скління пластиковими рамами</Link>
          {/* <a className="plastic_link">Скління пластиковими рамами</a> */}
        </div>
        <div
          className={'glazing_block text-center wow fadeInUp'}
          data-wow-delay="0.3s"
        >
          {/* <img src="assets/img/glazing/icons/4.png" alt="#"> */}
          <img src={frenchImg} alt="french" />
          <Link to={`french`}>Французьке скління (панорамне)</Link>
          {/* <a className="french_link">Французьке скління (панорамне)</a> */}
        </div>
        <div
          className={'glazing_block text-center wow fadeInUp'}
          data-wow-delay="0.4s"
        ></div>
      </div>
    </>
  );
};
