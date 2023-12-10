import css from './Header.module.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useState } from 'react';
import clockImg from '../../assets/images/header/clock.png';
import phoneImg from '../../assets/images/header/phone.png';

Modal.setAppElement('#root');

export const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = e => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Тут можна реалізувати логіку для відправлення замовлення зворотного дзвінка
    console.log('Відправлено замовлення зворотного дзвінка:', {
      name,
      phoneNumber,
    });
    closeModal();
  };

  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <div className={css.logo_block}>
            <Link to={`/`} className={css.logo_link}>
              EUROBUD
            </Link>
            <p className={css.logo_text}>
              Скління вікон та балконів в Києві та Київській області
            </p>
          </div>

          <div className={css.header_btn}>
            <button className={css.button}>
              Викликати <br /> замірника
            </button>
          </div>

          <div className={css.working_hours}>
            <img className={css.working_img} src={clockImg} alt="clock" />
            <p className={css.working_text}>
              без вихідних <span>9:00 - 18:00</span>
            </p>
          </div>

          <div className={css.contact}>
            <a href="tel:+380999891100" className={css.contact_phone}>
              <img src={phoneImg} alt="phone" />
              +38 099-989-11-00
            </a>
            <a onClick={openModal} className={css.phone_link} href="#">
              Замовити дзвінок
            </a>
          </div>
        </div>
      </header>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Замовлення зворотного дзвінка"
        className={css.modal_content}
        overlayClassName={css.modal_overlay}
      >
        <h2 className={css.modal_header}>Замовлення зворотного дзвінка</h2>
        <form onSubmit={handleSubmit} className={css.modal_form}>
          <label className={css.form_name}>
            Ваше ім'я:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <label className={css.form_phone}>
            Номер телефону:
            <input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </label>
          <button className={css.form_button} type="submit">
            Відправити
          </button>
        </form>
        <button onClick={closeModal} className={css.modal_close}>
          Закрити
        </button>
      </Modal>
    </>
  );
};
