import css from './FrenchGlazing.module.css';

export const FrenchGlazing = () => {
  return (
    <section className={css.container}>
      <h2 className={css.french_title}>Панорамне скління </h2>
      <p className={css.french_text}>
        Панорамне скління - це вид скління будинків і квартир при якому великі
        вікна встановлюються на всю зовнішню стіну від підлоги до стелі. Таке
        скління забезпечує приголомшливий вид з вікна і максимальну кількість
        природного світла в приміщенні
      </p>
      {/* <img src={french} className={css.french_img} alt="french" /> */}
      <p className={css.french_text}>
        Сучасне автоматизоване виробництво за запатентованими технологіями,
        контроль якості на кожному етапі, адаптовані під кліматичні умови систем
        монтажу, роблять нас лідерами за кількістю продажів ось уже більше 10
        років.
      </p>
    </section>
  );
};
