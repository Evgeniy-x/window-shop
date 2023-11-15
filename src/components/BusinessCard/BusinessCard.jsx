import css from './BusinessCard.module.css';

const BusinessCard = () => {
    return <>
    <section className={css.container}>
        <div className={css.row}>

          <div>
            <h1><span>Скління балконів "під ключ"<br/></span>за 7 000 гривень!</h1>
            <div className={css.main_features}>

            <div className={css.row}>

                <div className={css.col}>
                            <div className={css.main_features_block}>
                    {/* <img src="assets/img/main/icons/quality.png" alt=""> */}
                    <p>Висока <br/>якість</p>
                    </div>
                </div>

                <div className={css.col}>
                                    <div className={css.main_features_block}>
                    {/* <img src="assets/img/main/icons/time.png" alt=""> */}
                    <p>Швидкий <br/>монтаж</p>
                    </div>
                </div>

                <div className={css.col}>
                    <div className={css.main_features_block}>
                    {/* <img className={small_img" src="assets/img/main/icons/guaranty.png" alt=""> */}
                    <p>Гарантия <br/>3 года</p>
                    </div>
                </div>

                    <div className={css.col}>
                        <div className={css.main_features_block}>
                    {/* <img className={small_img" src="assets/img/main/icons/delivery.png" alt=""> */}
                    <p>Вывоз <br/>мусора</p>
                        </div>
                    </div>
            </div>

        </div>
                </section>
            </>;
};

export default BusinessCard;
