import { Link } from 'react-router-dom';
import css from './Catalog.module.css';
import woodenImg from '../../assets/images/glazing/icons/wooden.png';
import aluminumImg from '../../assets/images/glazing/icons/aluminum.png';
import plasticImg from '../../assets/images/glazing/icons/plastic.png';
import frenchImg from '../../assets/images/glazing/icons/french.png';

export const Catalog = () => {
  return (
    <section className={css.container}>
      <h2 className={css.gatalog_header}>Скління балконів та лоджій</h2>

      <div className={css.gatalog}>
        <Link to={`wooden`} className={css.gatalog_link}>
          <img className={css.gatalog_img} src={woodenImg} alt="wooden" />
          Дерев'яне скління
        </Link>

        <Link to={`aluminum`} className={css.gatalog_link}>
          <img className={css.gatalog_img} src={aluminumImg} alt="aluminum" />
          Алюмінієве скління
        </Link>

        <Link to={`plastic`} className={css.gatalog_link}>
          <img className={css.gatalog_img} src={plasticImg} alt="plastic" />
          Скління пластиковими рамами
        </Link>

        <Link to={`french`} className={css.gatalog_link}>
          <img className={css.gatalog_img} src={frenchImg} alt="french" />
          Французьке скління (панорамне)
        </Link>
      </div>
    </section>
  );
};
