import css from './Hero.module.css';

export const Hero = () => {
  return (
    <>
      <section className={css.container}>
        <div className={css.row}>
          <h1>
            <span>Скління балконів "під ключ"</span>
            за 7 000 гривень!
          </h1>
          <div>
            <div className={css.main_features}>
              <div className={css.col}>
                <div className={css.main_features_block}>
                  {/* <img src="assets/img/main/icons/quality.png" alt=""> */}
                  <p>Висока якість</p>
                </div>
              </div>

              <div className={css.col}>
                <div className={css.main_features_block}>
                  {/* <img src="assets/img/main/icons/time.png" alt=""> */}
                  <p>Швидкий монтаж</p>
                </div>
              </div>

              <div className={css.col}>
                <div className={css.main_features_block}>
                  {/* <img className={small_img" src="assets/img/main/icons/guaranty.png" alt=""> */}
                  <p>Гарантія 3 роки</p>
                </div>
              </div>

              <div className={css.col}>
                <div className={css.main_features_block}>
                  {/* <img className={small_img" src="assets/img/main/icons/delivery.png" alt=""> */}
                  <p>Вивіз сміття</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
