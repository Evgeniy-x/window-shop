import css from './Hero.module.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { telegramSend } from '../../servises/api';
import quality from '../../assets/images/hero/quality.png';
import time from '../../assets/images/hero/time.png';
import guaranty from '../../assets/images/hero/guaranty.png';
import delivery from '../../assets/images/hero/delivery.png';

export const Hero = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = e => {
    setPhoneNumber(e.target.value);
  };

  const validateName = value =>
    /^[a-zA-Zа-яА-яІіЇїЄє ]+$/u.test(value) &&
    value.length >= 3 &&
    value.length <= 30;

  const validatePhoneNumber = value =>
    /^[0-9 -+]+$/.test(value) && value.length >= 9 && value.length <= 16;

  const handleSubmit = e => {
    e.preventDefault();
    // Тут можна реалізувати логіку для відправлення замовлення зворотного дзвінка
    if (!validateName(name)) {
      return toast.error("Введіть коректне ім'я (тільки букви)");
    }

    if (!validatePhoneNumber(phoneNumber)) {
      return toast.error(
        'Введіть коректний номер телефону (тільки цифри, мінімум 9 символів)'
      );
    }

    const text = `Ім'я: ${name}\nТелефон: ${phoneNumber}`;
    telegramSend(text);
    setName('');
    setPhoneNumber('');
  };
  return (
    <>
      <section className={css.hero}>
        <div className={css.container}>
          <div className={css.info_block}>
            <h1 className={css.title}>
              Скління балконів "під ключ" від 15 000 гривень!
            </h1>

            <div className={css.advantages}>
              <div className={css.advantages_block}>
                <img
                  className={css.advantages_img}
                  src={quality}
                  alt="quality"
                />
                <p className={css.advantages_text}>Висока якість</p>
              </div>

              <div className={css.advantages_block}>
                <img className={css.advantages_img} src={time} alt="time" />
                <p className={css.advantages_text}>Швидкий монтаж</p>
              </div>

              <div className={css.advantages_block}>
                <img
                  className={css.advantages_img}
                  src={guaranty}
                  alt="guaranty"
                />
                <p className={css.advantages_text}>Гарантія 3 роки</p>
              </div>

              <div className={css.advantages_block}>
                <img
                  className={css.advantages_img}
                  src={delivery}
                  alt="delivery"
                />
                <p className={css.advantages_text}>Вивіз сміття</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={css.modal_form}>
            <p className={css.modal_title}>
              Запишіться сьогодні на БЕЗКОШТОВНИЙ замір
            </p>
            <label htmlFor="name">
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className={css.form_input}
                placeholder="Введіть ваше ім'я"
                id="name"
              />
            </label>
            <label htmlFor="phone">
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className={css.form_input}
                placeholder="Введіть номер телефону"
                id="phone"
              />
            </label>
            <button className={css.form_button} type="submit">
              ВИКЛИКАТИ ЗАМІРНИКА!
            </button>
            <p className={css.modal_security}>Ваші дані конфіденційні</p>
          </form>
        </div>
      </section>
    </>
  );
};
