import React, {  useEffect } from 'react';
import AdvertisingCard from '../../components/AdvertisingCard/AdvertisingCard';
import CardWithDetails from '../../components/CardWithDetails/CardWithDetails';
import MenuTextList from '../../components/MenuTextList/MenuTextList';
import MenuCard from '../../components/MenuCard/MenuCard';
import Filters from '../../components/Filters/Filters';
import News from '../../components/News/News';
import { AdvertisingCardInfo } from '../../components/AdvertisingCard/AdvertisingCardInfo';
import { PurpleBackground } from '../../components/Common/PurpleBackground/PurpleBackground';
import { MenuCardInfo } from '../../components/MenuCard/MenuCardInfo';
import { CardWithDetailsInfo } from '../../components/CardWithDetails/CardWithDetailsInfo';
import { ReactComponent as LocationYellow } from "../../assets/img/main_location_yellow.svg";
import { ReactComponent as YellowDots } from "../../assets/img/main__yellow_dots.svg";
import { ReactComponent as WhiteDots } from "../../assets/img/main__white_dots.svg";

import background from "../../assets/img/main_background_1.png";
import background3 from "../../assets/img/main_background_3.png";
import apartmentImg from "../../assets/img/main_apartment_img.jpg";
import cn from "./MainPage.module.scss";
import CustomSlider from '../../components/CustomSlider/CustomSlider';







const MainPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const advertisingCards = AdvertisingCardInfo.map(
    el => <AdvertisingCard typeCard={el.typeCard} title={el.title} text={el.text} id={el.id} key={el.key}/>
  )

  const menuCards = MenuCardInfo.map(
    el => <MenuCard subtitle={el.subtitle} title={el.title} cities={el.cities} id={el.id} img={el.img} key={el.key} />
  )

  const cardsWithDetails = CardWithDetailsInfo.map(
    el => <CardWithDetails
      type_card='ordinary'
      key={el.key}
      gold={el.gold}
      price={el.price}
      duration={el.duration}
      // people={el.people}
      amount_rooms={el.amount_rooms}
      square={el.square}
      city={el.city}
      address={el.address}
      subway_station={el.subway_station}
      neighborhood={el.neighborhood}
    />)


  return (
    <main>
      <div className={`${cn.container} ${cn.parent}`}>
        <div className={`${cn.child_background} ${cn.purple_background} ${cn.semicircular_rectangle}`}></div>
        <div className={`${cn.child_background} ${cn.semicircular_rectangle} ${cn.wrapper_white_bg}`}>
          <img className={cn.white_background} src={background} alt={"white-background"} />
        </div>
      </div>


      <header className={`${cn.container}`}>
        <h1 className={cn.middle_title}>Sdaem.by - у нас живут ваши объявления</h1>
        <div className={cn.wrapper_filters}>
          <div className={cn.filters_with_tabs}>
            <div className={cn.tabs}>
              <div className={cn.tab}>Квартиры на сутки</div>
              <div className={cn.tab}>Коттеджи и усадьбы</div>
              <div className={cn.tab}>Бани и сауны</div>
              <div className={cn.tab}>Авто напрокат</div>
            </div>
            <div className={cn.filters}>
              <Filters typeFilters="main"/>
            </div>
          </div>

        </div>
        {/* <div className={cn.wrapper_menus}>
          <div className={cn.menu_cards}>
            {menuCards}
          </div>

          <MenuTextList />
        </div> */}
      </header>


      <article>
        <section className={`${cn.parent}`}>
          <YellowDots className={cn.offers_yellow_dots}/>
          <div className={`${cn.child_background} ${cn.purple_background2}`}></div>
          <div className={`${cn.child_content} ${cn.container}`}>
            <div className={cn.rent_titles_with_selects}>
              <div className={cn.rent_titles}>
                <div className={cn.purple_subtitle}>КВАРТИРЫ НА СУТКИ</div>
                <h2 className={`${cn.rent_title} ${cn.title}`}>Аренда квартир в Минске</h2>
              </div>
              <div className={cn.rent_selects}>
                <select className={cn.rent_select}>
                  /* Метро */
                  <option className={cn.rent_option}>1option</option>
                  <option className={cn.rent_option}>2option</option>
                  <option className={cn.rent_option}>3option</option>
                </select>
                <select className={cn.rent_select}>
                  /* Район */

                  <option className={cn.rent_option}>1option</option>
                  <option className={cn.rent_option}>2option</option>
                  <option className={cn.rent_option}>3option</option>
                </select>
              </div>

            </div>
              <CustomSlider />

            {/* <div className={cn.cards_with_details}> */}
              {/* {cardsWithDetails} */}

            {/* </div> */}

            {/* <div className={cn.btns_carousel}>buttons carousel</div> */}

            <div className={cn.offers_for_minsk}>
              <div className={cn.wrapper_offers}>
                <div className={cn.offers_amount}>341 <span className={cn.plus}>+</span></div>
                <div className={cn.offers_text}>Предложений по Минску</div>
              </div>
              <div className={cn.view_offers}>
                <div className={cn.wrapper_left_border}>
                  <button className={cn.btn}>Посмотреть все</button>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className={`${cn.parent}`}>
          <div className={`${cn.child_background} ${cn.purple_background3}`}>
            <img className={cn.white_background3} src={background3} alt="white-background-3" />
            <WhiteDots className={cn.search_white_dots}/>

          </div>

          <div className={`${cn.child_content} ${cn.container}`}>
            <div className={cn.wrapper_search}>
              <h2 className={`${cn.search_title} ${cn.title}`}>Поиск квартир на карте</h2>
              <div className={cn.search_text}>Ищите квартиры на сутки в центре города, возле парка или в живописном районе</div>
              <button className={cn.search_btn}>
                {/* <div>icon</div> */}
                <LocationYellow />
                Открыть карту
              </button>
            </div>

            <div className={cn.advertising_cards}>
              {advertisingCards}
            </div>
          </div>
          <YellowDots className={cn.search_yellow_dots}/>
        </section>

        <section className={`${cn.apartment_with_news} ${cn.container}`}>
          <div className={cn.apartment_for_day}>
            <div className={cn.purple_subtitle}>ЧТО ТАКОЕ SDAEM.BY</div>
            <h2 className={`${cn.apartment_title} ${cn.title}`}>Квартира на сутки в Минске</h2>
            <div>

              <div className={cn.apartment_wrapper_img_dots}>
                <div className={cn.apartment_wrapper_img}>
                  <img src={apartmentImg} alt={apartmentImg} className={cn.apartment_img} />
                  <YellowDots className={cn.apartment_yellow_dots}/>
                </div>
              </div>  
              <div className={cn.apartment_text}>
                <p>
                  <b> Нужна квартира на сутки в Минске?</b>
                  <br/>
                  На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает более 500 квартир. Благодаря удобной навигации вы быстро найдете подходящий вариант.
                </p>

                <p>
                  В каталоге представлены комфортабельные однокомнатные квартиры на сутки 
                  и квартиры с большим количеством комнат в разных районах города, 
                  с различной степенью удобства от дешевых до VIP с джакузи.
                </p>
              </div>
              <div className={cn.apartment_text}>Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с выбором и связаться с владельцем для уточнения условий аренды и заключить договор. Заметим, на сайте представлены исключительно квартиры на сутки без посредников, что избавляет посетителей от необходимости взаимодействовать с агентствами, тратя свое время и деньги. Также пользователи сайта могут совершенно бесплатно размещать объявления о готовности сдать квартиру на сутки.    </div>
            </div>
          </div>
          <News />
        </section>
      </article>
      {/* </div> */}
    </main>
  )
}

export default MainPage;
