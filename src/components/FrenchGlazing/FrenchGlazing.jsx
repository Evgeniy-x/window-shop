import css from './FrenchGlazing.module.css';
import french from '../../assets/images/page/french_glazing/french_window.png';

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
      <img src={french} className={css.french_img} alt="french" />
      <p className={css.french_text}>
        Панорамні вікна в будинку ніколи не вийдуть з моди, більше того, їхня
        популярність стає тільки вищою з кожним роком. Якщо Ви вирішили купити
        панорамні вікна, варто лише подбати про їхню правильну конфігурацію та
        комплектацію, а про все інше можна не замислюватися – Ви точно робите
        правильний вибір.
      </p>
    </section>
  );
};
