import React from 'react';
import AdvertisingCard from '../../components/AdvertisingCard/AdvertisingCard';
import CardWithDetails from '../../components/CardWithDetails/CardWithDetails';
import MenuCard from '../../components/MenuCard/MenuCard';
import MenuTextList from '../../components/MenuTextList/MenuTextList';
import News from '../../components/News/News';
import { AdvertisingCardInfo } from '../../components/AdvertisingCard/AdvertisingCardInfo';
import { MenuCardInfo } from '../../components/MenuCard/MenuCardInfo';
import { PurpleBackground } from '../../components/PurpleBackground/PurpleBackground';
import background from "../../assets/img/main_background_1.png";
import background3 from "../../assets/img/main_background_3.png";

import cn from "./MainPage.module.scss";
import { CardWithDetailsInfo } from '../../components/CardWithDetails/CardWithDetailsInfo';


const MainPage = () => {

  const advertisingCards = AdvertisingCardInfo.map(
    el => <AdvertisingCard title={el.title} text={el.text} />
  )

  const menuCards = MenuCardInfo.map(
    el => <MenuCard subtitle={el.subtitle} title={el.title} cities={el.cities} id={el.id} img={el.img} />
  )

  const cardsWithDetails = CardWithDetailsInfo.map(
    el => <CardWithDetails
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
        <div className={`${cn.child_background} `}>
          <img className={cn.white_background} src={background} alt={"white-background"}/>
        </div>
      </div>

      {/* <div> */}
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
              <div className={cn.filters}></div>
            </div>

          </div>
          <div className={cn.wrapper_menus}>
            <div className={cn.menu_cards}>
              {menuCards}
            </div>

            <MenuTextList />
          </div>
        </header>


        <article>
          <section className={`${cn.parent}`}>
            <div className={`${cn.child_background} ${cn.purple_background2}`}></div>
            <div className={`${cn.child_content} ${cn.container}`}> 
              <div className={cn.rent_titles_with_selects}>
                <div className={cn.rent_titles}>
                  <div className={cn.purple_subtitle}>КВАРТИРЫ НА СУТКИ</div>
                  <h2 className={`${cn.rent_title} ${cn.title}`}>Аренда квартир в Минске</h2>
                </div>
                <div className={cn.rent_selects}>
                  <select className={cn.rent_select}>
                    <option className={cn.rent_option}>1option</option>
                    <option className={cn.rent_option}>2option</option>
                    <option className={cn.rent_option}>3option</option>
                  </select>
                  <select className={cn.rent_select}>
                    <option className={cn.rent_option}>1option</option>
                    <option className={cn.rent_option}>2option</option>
                    <option className={cn.rent_option}>3option</option>
                  </select>
                </div>

              </div>

              <div className={cn.cards_with_details}>
                {cardsWithDetails}
              </div>

              <div className={cn.btns_carousel}>buttons carousel</div>

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
              <img className={cn.white_background3} src={background3} alt="white-background-3"/>
            </div>
            <div className={`${cn.child_content} ${cn.container}`}> 
              <div className={cn.wrapper_search}>
                <h2 className={`${cn.search_title} ${cn.title}`}>Поиск квартир на карте</h2>
                <div className={cn.search_text}>Ищите квартиры на сутки в центре города, возле парка или в живописном районе</div>
                <button className={cn.search_btn}>
                  <div>icon</div>
                  <div>Поиск квартир на карте</div>
                </button>
              </div>

              <div className={cn.advertising_cards}>
                {advertisingCards}
              </div>
            </div>
          </section>

          <section className={`${cn.apartment_with_news} ${cn.container}`}>
            <div className={cn.apartment_for_day}>
              <div className={cn.purple_subtitle}>ЧТО ТАКОЕ SDAEM.BY</div>
              <h2 className={`${cn.apartment_title} ${cn.title}`}>Квартира на сутки в Минске</h2>

              <div className={cn.apartment_img}>img</div>
              <div className={cn.apartment_text}>
                Нужна квартира на сутки в Минске?
                На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает более 500 квартир. Благодаря удобной навигации вы быстро найдете подходящий вариант.

                В каталоге представлены комфортабельные однокомнатные квартиры на сутки и квартиры с большим количеством комнат в разных районах города, с различной степенью удобства от дешевых до VIP
                с джакузи.
              </div>
              <div className={cn.apartment_text}>Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с выбором и связаться с владельцем для уточнения условий аренды и заключить договор. Заметим, на сайте представлены исключительно квартиры на сутки без посредников, что избавляет посетителей от необходимости взаимодействовать с агентствами, тратя свое время и деньги. Также пользователи сайта могут совершенно бесплатно размещать объявления о готовности сдать квартиру на сутки.    </div>

            </div>
            <News />
          </section>
        </article>
      {/* </div> */}
    </main>
  )
}

export default MainPage;
