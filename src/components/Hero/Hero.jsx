import css from './Hero.module.css';
import quality from '../../assets/images/hero/quality.png';
import time from '../../assets/images/hero/time.png';
import guaranty from '../../assets/images/hero/guaranty.png';
import delivery from '../../assets/images/hero/delivery.png';

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
                  <img src={quality} alt="quality" />
                  <p>Висока якість</p>
                </div>
              </div>

              <div className={css.col}>
                <div className={css.main_features_block}>
                  <img src={time} alt="time" />
                  <p>Швидкий монтаж</p>
                </div>
              </div>

              <div className={css.col}>
                <div className={css.main_features_block}>
                  <img src={guaranty} alt="guaranty" />
                  <p>Гарантія 3 роки</p>
                </div>
              </div>

              <div className={css.col}>
                <div className={css.main_features_block}>
                  <img src={delivery} alt="delivery" />
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
