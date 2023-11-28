import css from './Guarantees.module.css';

export const Guarantees = () => {
  return (
    <>
      <section className={css.guarantees}>
        <div className={css.container}>
          <div className={css.guarantees_header}>
            <h2>Ми гарантуємо вам</h2>
            <div className={css.section_header_sub}></div>
          </div>
          <div className={css.row}>
            <div>
              <div className={css.guarantees_block}>
                {/* <img src="assets/img/guarantees/1.png" alt="#"> */}
                <h3>Висока якість</h3>
              </div>
            </div>
            <div>
              <div className={css.guarantees_block}>
                {/* <img src="assets/img/guarantees/2.png" alt=""> */}
                <h3>Виконання робіт під ключ</h3>
              </div>
            </div>
            <div>
              <div className={css.guarantees_block}>
                {/* <img src="assets/img/guarantees/3.png" alt=""> */}
                <h3>Монтаж в короткі терміни</h3>
              </div>
            </div>
            <div>
              <div className={css.guarantees_block}>
                {/* <img src="assets/img/guarantees/4.png" alt=""> */}
                <h3>Ціни від виробника</h3>
              </div>
            </div>
            <div>
              <div className={css.guarantees_block}>
                {/* <img src="assets/img/guarantees/5.png" alt=""> */}
                <h3>Безкоштовний замір і консультація</h3>
              </div>
            </div>
            <div>
              <div className={css.guarantees_block}>
                {/* <img src="assets/img/guarantees/6.png" alt=""> */}
                <h3>Тепло і затишок на балконі</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
