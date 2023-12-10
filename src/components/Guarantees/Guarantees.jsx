import css from './Guarantees.module.css';
import headerImg from '../../assets/images/guarantees/header_sub.png';
import firstImg from '../../assets/images/guarantees/1.png';
import secondImg from '../../assets/images/guarantees/2.png';
import thirdImg from '../../assets/images/guarantees/3.png';
import fourthImg from '../../assets/images/guarantees/4.png';
import fifthImg from '../../assets/images/guarantees/5.png';
import sixthImg from '../../assets/images/guarantees/6.png';

export const Guarantees = () => {
  return (
    <>
      <section className={css.container}>
        <h2 className={css.guarantees_title}>МИ ГАРАНТУЄМО ВАМ</h2>

        <div className={css.guarantees_list}>
          <div className={css.guarantees_block}>
            <img src={firstImg} alt="guarantees" />
            <h3>Висока якість</h3>
          </div>

          <div className={css.guarantees_block}>
            <img src={secondImg} alt="guarantees" />
            <h3>Виконання робіт під ключ</h3>
          </div>

          <div className={css.guarantees_block}>
            <img src={thirdImg} alt="guarantees" />
            <h3>Монтаж в короткі терміни</h3>
          </div>

          <div className={css.guarantees_block}>
            <img src={fourthImg} alt="guarantees" />
            <h3>Ціни від виробника</h3>
          </div>

          <div className={css.guarantees_block}>
            <img src={fifthImg} alt="guarantees" />
            <h3>Безкоштовний замір і консультація</h3>
          </div>

          <div className={css.guarantees_block}>
            <img src={sixthImg} alt="guarantees" />
            <h3>Тепло і затишок на балконі</h3>
          </div>
        </div>
      </section>
    </>
  );
};
