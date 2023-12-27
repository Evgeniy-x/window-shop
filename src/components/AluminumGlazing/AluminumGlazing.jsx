import css from './AluminumGlazing.module.css';
import aluminum from '../../assets/images/aluminum_glazing/aluminum.png';

export const AluminumGlazing = () => {
  return (
    <section className={css.container}>
      <h2 className={css.aluminum_title}>Aluminum Glazing </h2>
      <p className={css.aluminum_text}>
        Шукаєте краше рішення для оскління котеджу, тераси, кафе чи вітрини?
        Встановлюйте вікна з алмінієвого профілю, Вони більш довговічні,
        надійніші, пропускають більше світла ніж металопластикові вікна. Віконні
        конструкції з алюмінію підходять для оскління великих проємів
        (панорамного скління), вони витримують більше навантаження ніж ПВХ.
        Віконні конструкції з алюмінію, відрізняються за монтажно глибиною,
        кількістю камер, максимальній товщині склопакету, товщині зовнішніх та
        внутрішніх стінок, тепло- та звукоізоляційним характеристикам. Сам по
        собі алюміній має високу теплопровідність, тобто вікна з звичайного
        алюмінію були холодними. Використовуючи термоміст (термоізолюючі
        полімерні вставки), алюмінієві профіля отримали необхідні теплові
        характеристики, котрі дозволили використовувати теплі вікна з алюмінію в
        жилих приміщеннях.
      </p>
      <img src={aluminum} className={css.aluminum_img} alt="aluminum" />
      <p className={css.aluminum_text}>
        Алюмінієві вікна - це гарне і стильне рішення скління. Завдяки своїм
        властивостям вікна з алюмінію пропускають більше світла і володіють
        високою зносостійкістю і міцністю. Строгі лінії конструкцій і широкий
        спектр кольорів дозволить підкреслити стиль Вашого будинку. Алюмінієві
        вікна володіють більш широким температурним режимом і зберігають свої
        властивості при перепадах температур від -80 С до +100 С. Вони не
        потребують особливого догляду, але при цьому відкривають перед Вами
        широкі можливості в області дизайну, тому що вікна з алюмінію можуть
        бути виготовлені великих розмірів і будь-яких форм.
      </p>
    </section>
  );
};
