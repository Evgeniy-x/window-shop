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
      <h3 className={css.french_title_list}>Переваги панорамних вікон</h3>
      <ul className={css.french_list}>
        <li className={css.french_list_item}>
          Сучасний зовнішній вигляд будівель та споруд
        </li>
        <li className={css.french_list_item}>
          Кімната з великим вікном – завжди світле, затишне і комфортне місце
          існування людини
        </li>
        <li className={css.french_list_item}>
          Вид із вікон більших розмірів буде кращим, ніж зі стандартних вікон
        </li>
        <li>
          Панорамні вікна ціна окупитися за рахунок економії на будівельних
          матеріалах та утеплення стін
        </li>
        <li className={css.french_list_item}>
          Необмежені можливості у дизайнерських рішеннях
        </li>
        <li className={css.french_list_item}>
          Сучасні технології дозволяють зробити вікно (навіть найбільших
          розмірів) енергоефективним
        </li>
        <li className={css.french_list_item}>
          Простота та зручність в експлуатації
        </li>
        <li className={css.french_list_item}>
          Термін служби не менше ніж у стандартних вікон
        </li>
        <li className={css.french_list_item}>
          Можливість вибору протизламних склопакетів та фурнітури
        </li>
        <li className={css.french_list_item}>
          Дають можливість легко модернізувати фасад
        </li>
        <li>
          Запускають у приміщення більше сонячних променів (необхідних для
          нормальної життєдіяльності людини)
        </li>
      </ul>
      <p></p>
    </section>
  );
};
