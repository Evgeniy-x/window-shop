import { Link } from 'react-router-dom';
import css from './Catalog.module.css';
import woodenImg from '../../assets/images/glazing/icons/wooden.png';
import aluminumImg from '../../assets/images/glazing/icons/aluminum.png';
import plasticImg from '../../assets/images/glazing/icons/plastic.png';
import frenchImg from '../../assets/images/glazing/icons/french.png';

export const Catalog = () => {
  return (
    <div className={css.container}>
      <h2 className={css.gatalog_header}>Скління балконів та лоджій</h2>

      <div className={css.gatalog}>
        <div className={css.gatalog_link}>
          <img className={css.gatalog_img} src={woodenImg} alt="wooden" />
          <Link to={`wooden`}>Дерев'яне скління</Link>
        </div>

        <div className={css.gatalog_link}>
          <img className={css.gatalog_img} src={aluminumImg} alt="aluminum" />
          <Link to={`aluminum`}>Алюмінієве скління</Link>
        </div>

        <div className={css.gatalog_link}>
          <img className={css.gatalog_img} src={plasticImg} alt="plastic" />
          <Link to={`plastic`}>Скління пластиковими рамами</Link>
        </div>

        <div className={css.gatalog_link}>
          <img className={css.gatalog_img} src={frenchImg} alt="french" />
          <Link to={`french`}>Французьке скління (панорамне)</Link>
        </div>
      </div>
    </div>
  );
};
