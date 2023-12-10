import css from './Footer.module.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
      <footer className={css.container}>
        <Link to={`/`} className={css.logo_link}>
          EUROBUD
        </Link>

        <div className={css.contacts}>
          <a href="tel:+380999891100">+38 099-989-11-00</a>
          <a href="mailto:eurobud@gmail.com">evrobud@gmail.com</a>
        </div>
      </footer>
    </>
  );
};
