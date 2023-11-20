import css from './Catalog.module.css';
import woodenImg from '../../assets/images/glazing/icons/wooden.png';
import aluminumImg from '../../assets/images/glazing/icons/aluminum.png';
import plasticImg from '../../assets/images/glazing/icons/plastic.png';
import frenchImg from '../../assets/images/glazing/icons/french.png';
import takeOutImg from '../../assets/images/glazing/icons/takeOut.png';

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
          {/* <img src="assets/img/glazing/icons/1.png" alt="#"> */}
          <img src={woodenImg} alt="wooden" />
          <a className={css.tree_link}>Дерев'яне скління</a>
        </div>
        <div
          className={'glazing_block text-center wow fadeInUp'}
          data-wow-delay="0.1s"
        >
          {/* <img src="assets/img/glazing/icons/2.png" alt="#"> */}
          <img src={aluminumImg} alt="aluminum" />
          <a className={css.aluminum_link}>Алюмінієве скління</a>
        </div>
        <div
          className={'glazing_block text-center wow fadeInUp'}
          data-wow-delay="0.2s"
        >
          {/* <img src="assets/img/glazing/icons/3.png" alt="#"> */}
          <img src={plasticImg} alt="plastic" />
          <a className="plastic_link">Скління пластиковими рамами</a>
        </div>
        <div
          className={'glazing_block text-center wow fadeInUp'}
          data-wow-delay="0.3s"
        >
          {/* <img src="assets/img/glazing/icons/4.png" alt="#"> */}
          <img src={frenchImg} alt="french" />
          <a className="french_link">Французьке скління (панорамне)</a>
        </div>
        <div
          className={'glazing_block text-center wow fadeInUp'}
          data-wow-delay="0.4s"
        >
          {/* <img src="assets/img/glazing/icons/5.png" alt="#"> */}
          <img src={takeOutImg} alt="takeOut" />
          <a className="rise_link">Скління з виносом</a>
        </div>
      </div>
    </>
  );
};
