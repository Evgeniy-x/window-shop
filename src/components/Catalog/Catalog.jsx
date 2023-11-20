import css from './Catalog.module.css';

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
          <a className={css.tree_link}>Деревянное остекление</a>
        </div>
        <div
          className={'glazing_block text-center wow fadeInUp'}
          data-wow-delay="0.1s"
        >
          {/* <img src="assets/img/glazing/icons/2.png" alt="#"> */}
          <a className={css.aluminum_link}>Алюминиевое остекление</a>
        </div>
        <div
          className={'glazing_block text-center wow fadeInUp'}
          data-wow-delay="0.2s"
        >
          {/* <img src="assets/img/glazing/icons/3.png" alt="#"> */}
          <a className="plastic_link">Остекление пластиковыми рамами</a>
        </div>
        <div
          className={'glazing_block text-center wow fadeInUp'}
          data-wow-delay="0.3s"
        >
          {/* <img src="assets/img/glazing/icons/4.png" alt="#"> */}
          <a className="french_link">Французское остекление (панорамное)</a>
        </div>
        <div
          className={'glazing_block text-center wow fadeInUp'}
          data-wow-delay="0.4s"
        >
          {/* <img src="assets/img/glazing/icons/5.png" alt="#"> */}
          <a className="rise_link">Остекление с выносом</a>
        </div>
      </div>
    </>
  );
};
