import css from './WoodenGlazing.module.css';
import sosna from '../../assets/images/page/wooden_glazing/sosna.png';
import dub from '../../assets/images/page/wooden_glazing/dub.png';
import derevo_aluminiy from '../../assets/images/page/wooden_glazing/derevo_aluminiy.png';
import meranti from '../../assets/images/page/wooden_glazing/meranti.png';

export const WoodenGlazing = () => {
  return (
    <section className={css.container}>
      <h2 className={css.wooden_title}>Види комплектацій дерев'яних вікон </h2>
      <div className={css.wooden_types}>
        <div className={css.types_block}>
          <img className={css.types_image} src={sosna} alt="sosna" />
          <h3 className={css.types_title}>Сосна, Вільха</h3>
          <p></p>
        </div>
        <div className={css.types_block}>
          <img className={css.types_image} src={dub} alt="dub" />
          <h3 className={css.types_title}>Дуб, Ясень</h3>
          <p></p>
        </div>
        <div className={css.types_block}>
          <img
            className={css.types_image}
            src={derevo_aluminiy}
            alt="derevo_aluminiy"
          />
          <h3 className={css.types_title}>Дерево-алюміній</h3>
          <p></p>
        </div>
        <div className={css.types_block}>
          <img className={css.types_image} src={meranti} alt="meranti" />
          <h3 className={css.types_title}>Екзотичне Дерево</h3>
          <p></p>
        </div>
      </div>
      <p className={css.wooden_info}>
        Вартість дерев'яних вікон можна розрахувати лише після ретельного
        опрацювання технічного завдання на їх виготовлення. Потрібно знати з
        якої породи дерева будуть виготовлятися дерев'яні вікна, яких вони
        будуть розмірів, яка буде їх конфігурація, в який колір вони будуть
        фарбуватися і ще ряд показників. Тому це питання досить складно
        відповісти.
      </p>
      <p className={css.wooden_info}>
        Ми завжди можемо прорахувати Вам вартість у кількох варіантах і Вам
        залишиться лише вибрати. Впевнені, що ціна дерев'яних вікон порівняно з
        металопластиковими Вас приємно здивує.
      </p>
    </section>
  );
};
