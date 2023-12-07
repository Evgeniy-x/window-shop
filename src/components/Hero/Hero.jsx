import css from './Hero.module.css';
import quality from '../../assets/images/hero/quality.png';
import time from '../../assets/images/hero/time.png';
import guaranty from '../../assets/images/hero/guaranty.png';
import delivery from '../../assets/images/hero/delivery.png';

export const Hero = () => {
  const clasOne = css.container + ' ' + css.one;
  return (
    <>
      <section className={css.container}>
        <h1 className={css.title}>
          Скління балконів "під ключ" від 7 000 гривень!
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
      </section>
    </>
  );
};
