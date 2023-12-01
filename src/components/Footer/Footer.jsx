import css from './Footer.module.css';

export const Footer = () => {
    return <>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-sm-push-8 col-xs-12">
            <div className="contacts">
              <a href="tel:+380999891100">
                    +38 099-989-11-00
                  </a>
              <a className="email" href="#">info@gmail.com</a>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12">
            <div className="logo">
              <img src="assets/img/header/logo.png" alt="#">
            </div>
          </div>
          <div className="col-sm-4 col-sm-pull-8 col-xs-12">
            <div className="copyright">
            </div>
          </div>
        </div>
      </div>
    </footer></>;
};
