import css from './Header.module.css';
import clockImg from '../../assets/images/header/clock.png';
import phoneImg from '../../assets/images/header/phone.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <div className={css.logo_block}>
            <Link to={`/`} className={css.logo_link}>
              EUROBUD
            </Link>
            <p className={css.logo_text}>
              Скління вікон та балконів в Києві та Київській області
            </p>
          </div>

          <div className={css.header_btn}>
            <button className={css.button}>
              Викликати <br /> замірника
            </button>
          </div>

          <div className={css.working_hours}>
            <img className={css.working_img} src={clockImg} alt="clock" />
            <p className={css.working_text}>
              без вихідних <span>9:00 - 18:00</span>
            </p>
          </div>

          <div className={css.contact}>
            <a href="tel:+380999891100" className={css.contact_phone}>
              <img src={phoneImg} alt="phone" />
              +38 099-989-11-00
            </a>
            <a className={css.phone_link} href="#">
              Замовити дзвінок
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
