import css from './Header.module.css';

const AppHeader = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <div className={css.row}>
            <div className={css.col_md_5}>
              <div className={css.logo}>
                <div className={css.logo_img}>
                  {/* <img src="assets/img/header/logo.png" alt="#"> */}
                </div>
                <p>Скління вікон та балконів в Києві та Київській області</p>
              </div>
            </div>

            <div className={css.col}>
              <div className={css.header_btn_wrap}>
                <div className={css.header_btn_wrap_block}>
                  <button className={css.header_btn}>
                    Викликати замірника
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className={css.working_hours}>
                <div className={css.working_hours_img}>
                  {/* <img src="assets/img/header/clock.png" alt="#"> */}
                </div>
                <p>
                  без вихідних <span>9:00 - 18:00</span>
                </p>
              </div>
            </div>

            <div className={css.col}>
              <div className={css.contact_us}>
                <div className={css.contact_us_wrap}>
                  <a href="#">
                    {/* <img src="assets/img/header/phone.png" alt="#"> */}
                    +38 099-989-11-00
                  </a>
                  <a className={css.phone_link} href="#">
                    Замовити дзвінок
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
