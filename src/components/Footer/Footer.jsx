import css from './Footer.module.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className={css.logo_link}>
            <Link to={`/`}>EUROBUD</Link>
          </div>

          <div className="contacts">
            <a href="tel:+380999891100">+38 099-989-11-00</a>
            <a href="mailto:eurobud@gmail.com">evrobud@gmail.com</a>
          </div>
        </div>
      </footer>
    </>
  );
};
