import css from './HomePage.module.css';

const Home = () => {
  return (
    <>
      <section className={css.container}>
        <div className={css.row}>
          <h1>
            <span>
              Скління балконів "під ключ"
              <br />
            </span>
            за 7 000 гривень!
          </h1>
          <div>
            <div className={css.main_features}>
              <div className={css.col}>
                <div className={css.main_features_block}>
                  {/* <img src="assets/img/main/icons/quality.png" alt=""> */}
                  <p>
                    Висока <br />
                    якість
                  </p>
                </div>
              </div>

              <div className={css.col}>
                <div className={css.main_features_block}>
                  {/* <img src="assets/img/main/icons/time.png" alt=""> */}
                  <p>
                    Швидкий <br />
                    монтаж
                  </p>
                </div>
              </div>

              <div className={css.col}>
                <div className={css.main_features_block}>
                  {/* <img className={small_img" src="assets/img/main/icons/guaranty.png" alt=""> */}
                  <p>
                    Гарантия <br />3 года
                  </p>
                </div>
              </div>

              <div className={css.col}>
                <div className={css.main_features_block}>
                  {/* <img className={small_img" src="assets/img/main/icons/delivery.png" alt=""> */}
                  <p>
                    Вывоз <br />
                    мусора
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- Glazing --> */}
    <section className={glazing}>
      <div className={container}>

        <div className={section_header}>
          <h2>Остекление балконов и лоджий</h2>
          <div className={}></div>
        </div>

        {/* <!-- Slider --> */}
        <div className="glazing_slider">
          <div className="glazing_block text-center wow fadeInUp">
            <img src="assets/img/glazing/icons/1.png" alt="#">
            <a className="tree_link">Деревянное <br>остекление</a>
          </div>
          <div className="glazing_block text-center wow fadeInUp" data-wow-delay="0.1s">
            <img src="assets/img/glazing/icons/2.png" alt="#">
            <a className="aluminum_link">Алюминиевое <br>остекление</a>
          </div>
          <div className="glazing_block text-center wow fadeInUp" data-wow-delay="0.2s">
            <img src="assets/img/glazing/icons/3.png" alt="#">
            <a className="plastic_link">Остекление <br>пластиковыми <br>рамами</a>
          </div>
          <div className="glazing_block text-center wow fadeInUp" data-wow-delay="0.3s">
            <img src="assets/img/glazing/icons/4.png" alt="#">
            <a className="french_link">Французское <br>остекление <br>(панорамное)</a>
          </div>
          <div className="glazing_block text-center wow fadeInUp" data-wow-delay="0.4s">
            <img src="assets/img/glazing/icons/5.png" alt="#">
            <a className="rise_link">Остекление <br>с выносом</a>
          </div>
        </div>

        <!-- Tree -->
        <div className="row tree glazing_content">

          <div className="col-md-6 no-padding">
           <div className="glazing_cold">
             <h3>Холодное</h3>
             <img src="assets/img/glazing/img_cold.png" alt="#">
             <ul>
               <li>Конструктивная толщина 42-58 мм</li>
               <li>Остекление: полированное стекло (толщиной 4 - 5 мм)</li>
               <li>Теплоизоляция: 0,07 м<sup>2</sup> * С/Вт</li>
               <li>Звукоизоляция: 20-27 дб</li>
             </ul>
           </div> 
            <div className="glazing_price">
                <p>2600 руб.кв.м.<br><span>под ключ с установкой</span></p>
                <button className={button glazing_price_btn text-uppercase popup_calc_btn}>Рассчитать стоимость</button>
            </div>
          </div>

          <div className="col-md-6 no-padding">
            <div className={glazing_warm}>
              <h3>теплое</h3>
              {/* <img src="assets/img/glazing/img_warm.png" alt="#"> */}
              <ul>
                <li>Конструктивная толщина профиля: 58-78 м</li>
                <li>Остекление: однокамерные и двухкамерные стеклопакеты</li>
                <li>Теплоизоляция: 0,63 - 1,05 м<sup>2</sup> * С/Вт</li>
                <li>Звукоизоляция: до 5 класса</li>
              </ul>
            </div> 
             <div className={glazing_price}>
                 <p>4000 руб.кв.м.<br><span>под ключ с установкой</span></p>
                 <button className="button glazing_price_btn text-uppercase popup_calc_btn">Рассчитать стоимость</button>
             </div>
          </div>

        </div> <!-- /Tree -->

        <!-- Aluminum -->
        <div className="row aluminum glazing_content">

          <div className="col-md-6 no-padding">
           <div className="glazing_cold">
             <h3>Холодное</h3>
             <img src="assets/img/glazing/aluminum/cold.jpg" alt="#">
             <ul>
               <li>Конструктивная толщина 40-50 мм</li>
               <li>Остекление: полированное стекло (толщиной 4 - 5 мм)</li>
               <li>Теплоизоляция: 0,07 м<sup>2</sup> * С/Вт</li>
               <li>Звукоизоляция: 20-27 дб</li>
             </ul>
           </div> 
            <div className="glazing_price">
                <p>4000 руб.кв.м.<br><span>под ключ с установкой</span></p>
                <button className="button glazing_price_btn text-uppercase popup_calc_btn">Рассчитать стоимость</button>
            </div>
          </div>

          <div className="col-md-6 no-padding">
            <div className="glazing_warm">
              <h3>теплое</h3>
              <img src="assets/img/glazing/aluminum/warm.jpg" alt="#">
              <ul>
                <li>Конструктивная толщина профиля: 60-68 м</li>
                <li>Остекление: однокамерные и двухкамерные стеклопакеты</li>
                <li>Теплоизоляция: 0,63 - 1,05 м<sup>2</sup> * С/Вт</li>
                <li>Звукоизоляция: до 5 класса</li>
              </ul>
            </div> 
             <div className="glazing_price">
                 <p>8000 руб.кв.м.<br><span>под ключ с установкой</span></p>
                 <button className="button glazing_price_btn text-uppercase popup_calc_btn">Рассчитать стоимость</button>
             </div>
          </div>

        </div> <!-- /Aluminum -->

        <!-- Plastic -->
        <div className="row plastic glazing_content">

          <div className="col-md-6 col-md-offset-3 no-padding">
            <div className="glazing_warm">
              <h3>теплое</h3>
              <img src="assets/img/glazing/plastic/warm.jpg" alt="#">
              <ul>
                <li>Конструктивная толщина профиля: 58-70 м</li>
                <li>Остекление: однокамерные и двухкамерные стеклопакеты</li>
                <li>Теплоизоляция: 0,63 - 1,05 м<sup>2</sup> * С/Вт</li>
                <li>Звукоизоляция: до 5 класса</li>
              </ul>
            </div> 
             <div className="glazing_price">
                 <p>5500 руб.кв.м.<br><span>под ключ с установкой</span></p>
                 <button className="button glazing_price_btn text-uppercase popup_calc_btn">Рассчитать стоимость</button>
             </div>
          </div>

        </div> <!-- /Plastic -->

        <!-- French -->
        <div className="row french glazing_content">

          <div className="col-md-6 no-padding">
           <div className="glazing_cold">
             <h3>Пластик</h3>
             <img src="assets/img/glazing/french/plastic.jpg" alt="#">
             <ul>
               <li>Конструктивная толщина 58-70 мм</li>
               <li>Остекление: однокамерные и двухкамерные стеклопакеты</li>
               <li>Теплоизоляция: 0,63 - 1,05 м<sup>2</sup> * С/Вт</li>
               <li>Звукоизоляция: до 5 класса</li>
             </ul>
           </div> 
            <div className="glazing_price">
                <p>5500 руб.кв.м.<br><span>под ключ с установкой</span></p>
                <button className="button glazing_price_btn text-uppercase popup_calc_btn">Рассчитать стоимость</button>
            </div>
          </div>

          <div className="col-md-6 no-padding">
            <div className="glazing_warm">
              <h3>Алюминий</h3>
              <img src="assets/img/glazing/french/aluminum.jpg" alt="#">
              <ul>
                <li>Конструктивная толщина профиля: 60-68 мм</li>
                <li>Остекление: однокамерные и двухкамерные стеклопакеты</li>
                <li>Теплоизоляция: 0,63 - 1,05 м<sup>2</sup> * С/Вт</li>
                <li>Звукоизоляция: до 5 класса</li>
              </ul>
            </div> 
             <div className="glazing_price">
                 <p>8000 руб.кв.м.<br><span>под ключ с установкой</span></p>
                 <button className="button glazing_price_btn text-uppercase popup_calc_btn">Рассчитать стоимость</button>
             </div>
          </div>

        </div> <!-- /French -->

        <!-- Rise -->
        <div className="row rise glazing_content">

          <div className="col-md-6 no-padding">
           <div className="glazing_cold">
             <h3>Алюминий</h3>
             <img src="assets/img/glazing/rise/aluminum.jpg" alt="#">
             <ul>
               <li>Конструктивная толщина 40-50 мм</li>
               <li>Остекление: полированное стекло (толщиной 4 - 5 мм)</li>
               <li>Теплоизоляция: 0,07 м<sup>2</sup> * С/Вт</li>
               <li>Звукоизоляция: 20-27 дб</li>
             </ul>
           </div> 
            <div className="glazing_price">
                <p>4000 руб.кв.м.<br><span>под ключ с установкой</span></p>
                <button className="button glazing_price_btn text-uppercase popup_calc_btn">Рассчитать стоимость</button>
            </div>
          </div>

          <div className="col-md-6 no-padding">
            <div className="glazing_warm">
              <h3>Дерево</h3>
              <img src="assets/img/glazing/rise/tree.jpg" alt="#">
              <ul>
                <li>Конструктивная толщина профиля: 40-42 мм</li>
                <li>Остекление: полированное стекло (толщиной 4 мм)</li>
                <li>Теплоизоляция: 0,07 м<sup>2</sup> * С/Вт</li>
                <li>Звукоизоляция: 20-27 дб</li>
              </ul>
            </div> 
             <div className="glazing_price">
                 <p>8000 руб.кв.м.<br><span>под ключ с установкой</span></p>
                 <button className="button glazing_price_btn text-uppercase popup_calc_btn">Рассчитать стоимость</button>
             </div>
          </div>

        </div><!-- /Rise -->


      </div>
                </section>
                

                 <!-- Decoration -->
    <section class="decoration">
      <div class="container">
        <div class="section_header">
          <h2>ЗАКАЖИТЕ ОТДЕЛКУ БАЛКОНА СО СКИДКОЙ 60%!</h2>
          <div class="section_header_sub"></div>
        </div>
        
        <!-- Slider -->
        <div class="decoration_slider">
            <div class="decoration_item  wow fadeInUp">
              <div class="internal_link no_click after_click"><a>Внутренняя отделка</a></div>
            </div>
            <div class="decoration_item wow fadeInUp" data-wow-delay="0.1s">
              <div class="external_link no_click"><a>Внешняя отделка</a></div>
            </div>
            <div class="decoration_item wow fadeInUp" data-wow-delay="0.2s">
              <div class="rising_link no_click"><a>Выносное остекление</a></div>
            </div>
            <div class="decoration_item wow fadeInUp" data-wow-delay="0.3s">
              <div class="roof_link no_click"><a>Крыша на балкон</a></div>
            </div>
        </div>
    </>
  );
};

export default Home;
